import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, company } = body;

    if (!email || !message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Email and a message (at least 10 characters) are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const payload = {
        source: "finza_contact_form",
        submitted_at: new Date().toISOString(),
        name: name ?? "",
        company: company ?? "",
        email,
        message: message.trim(),
      };
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!webhookRes.ok) {
        console.error("[contact] Webhook failed:", webhookRes.status);
      }
    }

    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.DEMO_NOTIFY_EMAIL ?? process.env.CONTACT_NOTIFY_EMAIL;
    if (resendKey && notifyEmail) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Finza Contact <noreply@finza.africa>",
          to: notifyEmail,
          reply_to: email,
          subject: `Website contact — ${name || email}`,
          html: `
            <p><strong>Name:</strong> ${String(name || "—")}</p>
            <p><strong>Company:</strong> ${String(company || "—")}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <pre style="white-space:pre-wrap;font-family:sans-serif;">${String(message).replace(/</g, "&lt;")}</pre>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-GH", { timeZone: "Africa/Accra" })}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "Submission failed." }, { status: 500 });
  }
}
