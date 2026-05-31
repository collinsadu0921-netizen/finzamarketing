import { NextRequest, NextResponse } from "next/server";
import {
  getPlanMonthlyPriceGhs,
  PLAN_FIT_SUMMARIES,
  type PlanTierId,
} from "@/lib/pricing-plans";
import { formatPlanFitAnswersForDisplay } from "@/lib/plan-fit-questions";
import type { PlanFitAnswers } from "@/lib/plan-fit-scoring";

const PLAN_FIT_SOURCE = "pricing_plan_fit";
const VALID_PLAN_IDS = new Set<PlanTierId>(["essentials", "professional", "business"]);

function escapeHtml(value: string) {
  return String(value).replace(/</g, "&lt;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePlanFitAnswers(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }
  return value as Record<string, unknown>;
}

function buildPlanFitMessage(payload: {
  recommended_plan_name: string;
  recommended_plan: string;
  recommended_plan_monthly_price: number;
  questionnaire_answers: Record<string, unknown>;
  optional_message: string;
}): string {
  const answersText =
    Object.keys(payload.questionnaire_answers).length > 0
      ? formatPlanFitAnswersForDisplay(payload.questionnaire_answers as PlanFitAnswers)
      : "—";

  const lines = [
    "Walkthrough request from plan-fit questionnaire.",
    `Recommended plan: ${payload.recommended_plan_name} (${payload.recommended_plan})`,
    `Monthly price shown to visitor: GH₵${payload.recommended_plan_monthly_price.toLocaleString()}/month`,
    "",
    "Questionnaire answers:",
    answersText,
  ];

  if (payload.optional_message) {
    lines.push("", "Optional message:", payload.optional_message);
  }

  return lines.join("\n");
}

type LeadPayload = {
  source: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  optional_message: string;
  recommended_plan: string;
  recommended_plan_name: string;
  recommended_plan_monthly_price: number | null;
  questionnaire_answers: Record<string, unknown>;
  subject: string;
};

type DeliverResult = {
  configured: boolean;
  delivered: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const source = typeof body.source === "string" ? body.source.trim() : "";

    if (source === PLAN_FIT_SOURCE) {
      const trimmedName = typeof body.name === "string" ? body.name.trim() : "";
      const trimmedCompany = typeof body.company === "string" ? body.company.trim() : "";
      const trimmedPhone = typeof body.phone === "string" ? body.phone.trim() : "";
      const trimmedEmail = typeof body.email === "string" ? body.email.trim() : "";
      const recommendedPlan =
        typeof body.recommended_plan === "string" ? body.recommended_plan.trim() : "";

      if (!trimmedName || !trimmedCompany || !trimmedPhone || !trimmedEmail) {
        return NextResponse.json(
          { error: "Full name, business name, phone, and email are required." },
          { status: 400 }
        );
      }
      if (!isValidEmail(trimmedEmail)) {
        return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
      }
      if (!VALID_PLAN_IDS.has(recommendedPlan as PlanTierId)) {
        return NextResponse.json({ error: "Recommended plan is required." }, { status: 400 });
      }

      const planId = recommendedPlan as PlanTierId;
      const planSummary = PLAN_FIT_SUMMARIES[planId];
      const recommendedPlanName =
        typeof body.recommended_plan_name === "string" && body.recommended_plan_name.trim()
          ? body.recommended_plan_name.trim()
          : planSummary.name;

      let monthlyPrice: number;
      if (typeof body.recommended_plan_monthly_price === "number" && Number.isFinite(body.recommended_plan_monthly_price)) {
        monthlyPrice = Math.round(body.recommended_plan_monthly_price);
      } else if (
        typeof body.recommended_plan_monthly_price === "string" &&
        body.recommended_plan_monthly_price.trim() !== ""
      ) {
        const parsed = Number(body.recommended_plan_monthly_price);
        monthlyPrice = Number.isFinite(parsed) ? Math.round(parsed) : getPlanMonthlyPriceGhs(planId);
      } else {
        monthlyPrice = getPlanMonthlyPriceGhs(planId);
      }

      const questionnaireAnswers = parsePlanFitAnswers(body.questionnaire_answers);
      const optionalMessage =
        typeof body.optional_message === "string" ? body.optional_message.trim() : "";

      const message = buildPlanFitMessage({
        recommended_plan_name: recommendedPlanName,
        recommended_plan: planId,
        recommended_plan_monthly_price: monthlyPrice,
        questionnaire_answers: questionnaireAnswers,
        optional_message: optionalMessage,
      });

      const delivery = await deliverLead({
        source: PLAN_FIT_SOURCE,
        name: trimmedName,
        company: trimmedCompany,
        email: trimmedEmail,
        phone: trimmedPhone,
        message,
        optional_message: optionalMessage,
        recommended_plan: planId,
        recommended_plan_name: recommendedPlanName,
        recommended_plan_monthly_price: monthlyPrice,
        questionnaire_answers: questionnaireAnswers,
        subject: `Plan-fit walkthrough — ${trimmedCompany} (${planId})`,
      });

      if (!delivery.configured) {
        return NextResponse.json(
          { error: "Lead delivery is not configured." },
          { status: 500 }
        );
      }
      if (!delivery.delivered) {
        return NextResponse.json(
          { error: "We could not deliver your request. Please try again or email hello@finza.africa." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    const { name, email, message, company, phone } = body;
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedCompany = typeof company === "string" ? company.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedCompany || !trimmedPhone || !trimmedEmail || trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Full name, business name, phone, email, and a message (at least 10 characters) are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    const delivery = await deliverLead({
      source: source || "finza_contact_form",
      name: trimmedName,
      company: trimmedCompany,
      email: trimmedEmail,
      phone: trimmedPhone,
      message: trimmedMessage,
      optional_message: "",
      recommended_plan: "",
      recommended_plan_name: "",
      recommended_plan_monthly_price: null,
      questionnaire_answers: {},
      subject: `Website contact — ${trimmedName || trimmedEmail}`,
    });

    if (!delivery.configured) {
      return NextResponse.json({ error: "Lead delivery is not configured." }, { status: 500 });
    }
    if (!delivery.delivered) {
      return NextResponse.json(
        { error: "We could not deliver your message. Please try again or email hello@finza.africa." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "Submission failed." }, { status: 500 });
  }
}

async function deliverLead(payload: LeadPayload): Promise<DeliverResult> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const notifyEmail = (process.env.DEMO_NOTIFY_EMAIL ?? process.env.CONTACT_NOTIFY_EMAIL)?.trim();

  const webhookConfigured = Boolean(webhookUrl);
  const resendConfigured = Boolean(resendKey && notifyEmail);

  if (!webhookConfigured && !resendConfigured) {
    return { configured: false, delivered: false };
  }

  let webhookDelivered = false;
  let resendDelivered = false;

  const webhookBody = {
    source: payload.source,
    submitted_at: new Date().toISOString(),
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
    recommended_plan: payload.recommended_plan || undefined,
    recommended_plan_name: payload.recommended_plan_name || undefined,
    recommended_plan_monthly_price: payload.recommended_plan_monthly_price ?? undefined,
    questionnaire_answers: payload.questionnaire_answers,
    optional_message: payload.optional_message || undefined,
  };

  if (webhookConfigured && webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookBody),
      });
      if (webhookRes.ok) {
        webhookDelivered = true;
      } else {
        const errText = await webhookRes.text().catch(() => "");
        console.error("[contact] Webhook failed:", webhookRes.status, errText);
      }
    } catch (e) {
      console.error("[contact] Webhook error:", e);
    }
  }

  if (resendConfigured && resendKey && notifyEmail) {
    const answersBlock =
      payload.source === PLAN_FIT_SOURCE && Object.keys(payload.questionnaire_answers).length > 0
        ? `<pre style="white-space:pre-wrap;font-family:sans-serif;font-size:13px;">${escapeHtml(
            JSON.stringify(payload.questionnaire_answers, null, 2)
          )}</pre>`
        : "";

    const answersReadable =
      payload.source === PLAN_FIT_SOURCE && Object.keys(payload.questionnaire_answers).length > 0
        ? `<pre style="white-space:pre-wrap;font-family:sans-serif;font-size:13px;">${escapeHtml(
            formatPlanFitAnswersForDisplay(payload.questionnaire_answers as PlanFitAnswers)
          )}</pre>`
        : "";

    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Finza Contact <noreply@mail.finza.africa>",
          to: notifyEmail,
          reply_to: payload.email,
          subject: payload.subject,
          html: `
          <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
          <p><strong>Name:</strong> ${escapeHtml(payload.name || "—")}</p>
          <p><strong>Company:</strong> ${escapeHtml(payload.company || "—")}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "—")}</p>
          ${
            payload.recommended_plan
              ? `<p><strong>Recommended plan (id):</strong> ${escapeHtml(payload.recommended_plan)}</p>`
              : ""
          }
          ${
            payload.recommended_plan_name
              ? `<p><strong>Recommended plan (name):</strong> ${escapeHtml(payload.recommended_plan_name)}</p>`
              : ""
          }
          ${
            payload.recommended_plan_monthly_price != null
              ? `<p><strong>Monthly price shown:</strong> GH₵${escapeHtml(
                  String(payload.recommended_plan_monthly_price)
                )}/month</p>`
              : ""
          }
          ${
            payload.optional_message
              ? `<p><strong>Optional message:</strong></p><pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(
                  payload.optional_message
                )}</pre>`
              : ""
          }
          <p><strong>Full message:</strong></p>
          <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(payload.message)}</pre>
          ${answersReadable ? `<p><strong>Questionnaire answers:</strong></p>${answersReadable}` : ""}
          ${answersBlock ? `<p><strong>Questionnaire answers (JSON):</strong></p>${answersBlock}` : ""}
          <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-GH", { timeZone: "Africa/Accra" })}</p>
        `,
        }),
      });

      if (resendRes.ok) {
        resendDelivered = true;
      } else {
        const errText = await resendRes.text().catch(() => "");
        console.error("[contact] Resend failed:", resendRes.status, errText);
      }
    } catch (e) {
      console.error("[contact] Resend error:", e);
    }
  }

  const delivered =
    (webhookConfigured && webhookDelivered) || (resendConfigured && resendDelivered);

  return { configured: true, delivered };
}
