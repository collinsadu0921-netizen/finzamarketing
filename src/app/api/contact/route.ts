import { NextRequest, NextResponse } from "next/server";
import { normalizeTrialPlacement } from "@/lib/trial-request";

const GUIDED_TRIAL_SOURCE = "guided_trial_request";
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const recentDeliveries = new Map<string, number>();

const LIMITS = {
  name: 120,
  company: 200,
  email: 200,
  phone: 40,
  primaryNeed: 2000,
  role: 120,
  businessType: 120,
  teamSize: 60,
  context: 2000,
  message: 5000,
  placement: 40,
} as const;

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  // Drop control characters (including CR/LF for header-safe single-line values),
  // then normalise whitespace and cap the length.
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function cleanSingleLine(value: unknown, maxLength: number) {
  return cleanText(value, maxLength).replace(/\s+/g, " ");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^[+0-9()\s.-]{7,40}$/.test(value) && value.replace(/\D/g, "").length >= 7;
}

function pruneRecentDeliveries() {
  const cutoff = Date.now() - DUPLICATE_WINDOW_MS;
  for (const [key, timestamp] of recentDeliveries) {
    if (timestamp < cutoff) recentDeliveries.delete(key);
  }
}

function duplicateKey(payload: { email: string; phone: string; company: string }) {
  return [
    payload.email.toLowerCase(),
    payload.phone.replace(/\D/g, ""),
    payload.company.toLowerCase().replace(/\s+/g, " "),
  ].join("|");
}

type LeadPayload = {
  source: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  placement?: string;
  role?: string;
  businessType?: string;
  teamSize?: string;
  primaryNeed?: string;
  context?: string;
};

type DeliverResult = {
  configured: boolean;
  delivered: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const source = cleanSingleLine(body.source, LIMITS.placement) || "finza_contact_form";

    if (source === GUIDED_TRIAL_SOURCE) {
      return handleGuidedTrial(body);
    }

    const trimmedName = cleanSingleLine(body.name, LIMITS.name);
    const trimmedCompany = cleanSingleLine(body.company, LIMITS.company);
    const trimmedPhone = cleanSingleLine(body.phone, LIMITS.phone);
    const trimmedEmail = cleanSingleLine(body.email, LIMITS.email);
    const trimmedMessage = cleanText(body.message, LIMITS.message);

    if (
      !trimmedName ||
      !trimmedCompany ||
      !trimmedPhone ||
      !trimmedEmail ||
      trimmedMessage.length < 10
    ) {
      return NextResponse.json(
        {
          error:
            "Full name, business name, phone, email, and a message (at least 10 characters) are required.",
        },
        { status: 400 }
      );
    }
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    const delivery = await deliverLead({
      source,
      name: trimmedName,
      company: trimmedCompany,
      email: trimmedEmail,
      phone: trimmedPhone,
      message: trimmedMessage,
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

async function handleGuidedTrial(body: Record<string, unknown>) {
  // Honeypot checks silently accept the request so bots do not learn which
  // signal caught them. Nothing is delivered.
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanSingleLine(body.name, LIMITS.name);
  const email = cleanSingleLine(body.email, LIMITS.email);
  const phone = cleanSingleLine(body.phone, LIMITS.phone);
  const company = cleanSingleLine(body.company, LIMITS.company);
  const primaryNeed = cleanText(body.primary_need, LIMITS.primaryNeed);
  const role = cleanSingleLine(body.role, LIMITS.role);
  const businessType = cleanSingleLine(body.business_type, LIMITS.businessType);
  const teamSize = cleanSingleLine(body.team_size, LIMITS.teamSize);
  const context = cleanText(body.context, LIMITS.context);
  const placement = normalizeTrialPlacement(cleanSingleLine(body.placement, LIMITS.placement));
  const privacyConsent = body.privacy_consent === true;

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Enter your full name.";
  if (!isValidEmail(email)) fieldErrors.email = "Enter a valid work email address.";
  if (!isValidPhone(phone)) fieldErrors.phone = "Enter a valid phone or WhatsApp number.";
  if (company.length < 2) fieldErrors.company = "Enter your business or company name.";
  if (primaryNeed.length < 10) {
    fieldErrors.primary_need = "Tell us about your business need or capabilities of interest.";
  }
  if (!privacyConsent) fieldErrors.privacy_consent = "Privacy consent is required.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields and submit the request again.",
        fields: fieldErrors,
      },
      { status: 400 }
    );
  }

  const messageLines = [
    "Guided trial request.",
    `Business: ${company}`,
    `Phone / WhatsApp: ${phone}`,
    `Primary business need: ${primaryNeed}`,
  ];
  if (role) messageLines.push(`Role: ${role}`);
  if (businessType) messageLines.push(`Business type: ${businessType}`);
  if (teamSize) messageLines.push(`Team or business size: ${teamSize}`);
  if (context) messageLines.push("", "Additional context:", context);

  const key = duplicateKey({ email, phone, company });
  pruneRecentDeliveries();
  if (recentDeliveries.has(key)) {
    return NextResponse.json({ ok: true });
  }

  const delivery = await deliverLead({
    source: GUIDED_TRIAL_SOURCE,
    name,
    company,
    email,
    phone,
    message: messageLines.join("\n"),
    subject: `Guided trial request — ${company}`,
    placement,
    role,
    businessType,
    teamSize,
    primaryNeed,
    context,
  });

  if (!delivery.configured) {
    return NextResponse.json(
      { error: "Request delivery is not configured. Please email hello@finza.africa." },
      { status: 500 }
    );
  }
  if (!delivery.delivered) {
    return NextResponse.json(
      {
        error:
          "We could not deliver your request. Please try again or email hello@finza.africa.",
      },
      { status: 502 }
    );
  }

  recentDeliveries.set(key, Date.now());
  return NextResponse.json({ ok: true });
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
    placement: payload.placement || undefined,
    role: payload.role || undefined,
    business_type: payload.businessType || undefined,
    team_size: payload.teamSize || undefined,
    primary_need: payload.primaryNeed || undefined,
    context: payload.context || undefined,
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
    const isGuidedTrial = payload.source === GUIDED_TRIAL_SOURCE;

    const optionalRows = [
      payload.placement
        ? `<p><strong>CTA placement:</strong> ${escapeHtml(payload.placement)}</p>`
        : "",
      payload.role ? `<p><strong>Role:</strong> ${escapeHtml(payload.role)}</p>` : "",
      payload.businessType
        ? `<p><strong>Business type:</strong> ${escapeHtml(payload.businessType)}</p>`
        : "",
      payload.teamSize
        ? `<p><strong>Team or business size:</strong> ${escapeHtml(payload.teamSize)}</p>`
        : "",
      payload.primaryNeed
        ? `<p><strong>Primary business need:</strong></p><pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(
            payload.primaryNeed
          )}</pre>`
        : "",
      payload.context
        ? `<p><strong>Additional context:</strong></p><pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(
            payload.context
          )}</pre>`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    const heading = isGuidedTrial ? "Guided trial request" : "Website contact";

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
          <h2>${escapeHtml(heading)}</h2>
          <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
          <p><strong>Name:</strong> ${escapeHtml(payload.name || "—")}</p>
          <p><strong>Company:</strong> ${escapeHtml(payload.company || "—")}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "—")}</p>
          ${optionalRows}
          <p><strong>Full message:</strong></p>
          <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(payload.message)}</pre>
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
