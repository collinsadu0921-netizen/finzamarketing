import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, email, revenue, method, workspace } = body;

    // Basic validation
    if (!email || !businessName || !workspace) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── WEBHOOK (Zapier / Make / Slack / any HTTP endpoint) ──────────────────
    // Set DEMO_WEBHOOK_URL in your .env.local to activate.
    // The payload below works out-of-the-box with Zapier Webhooks and Make.com.
    const webhookUrl = process.env.DEMO_WEBHOOK_URL;

    if (webhookUrl) {
      const payload = {
        source: "finza_demo_preview",
        submitted_at: new Date().toISOString(),
        workspace,
        business_name: businessName,
        email,
        monthly_revenue: revenue,
        current_method: method,
      };

      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        // Log but don't block the user — demo still works
        console.error("[demo-submit] Webhook delivery failed:", webhookRes.status);
      }
    }

    // ── EMAIL via Resend (optional) ───────────────────────────────────────────
    // Set RESEND_API_KEY and DEMO_NOTIFY_EMAIL in .env.local to activate.
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.DEMO_NOTIFY_EMAIL;

    if (resendKey && notifyEmail) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Finza Demo <noreply@finza.africa>",
          to: notifyEmail,
          subject: `New demo preview — ${businessName} (${workspace})`,
          html: `
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Workspace:</strong> ${workspace}</p>
            <p><strong>Monthly Revenue:</strong> ${revenue}</p>
            <p><strong>Current Method:</strong> ${method}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-GH", { timeZone: "Africa/Accra" })} (Ghana time)</p>
          `,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[demo-submit] Unexpected error:", err);
    // Don't expose internal errors to the client
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
