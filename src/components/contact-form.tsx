"use client";

import { useState } from "react";
import { homePrimaryBtn, siteFormInput } from "@/components/home/home-ui";

type ContactFormProps = {
  /** Passed to POST /api/contact; defaults to walkthrough_request on /contact */
  source?: "walkthrough_request" | "website_contact";
};

export function ContactForm({ source = "walkthrough_request" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  const isWalkthrough = source === "walkthrough_request";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const rawMessage = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const message = isWalkthrough
      ? [`Walkthrough request from contact page.`, `Business: ${company}`, `Phone / WhatsApp: ${phone}`, rawMessage]
          .filter(Boolean)
          .join("\n\n")
      : rawMessage;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          company,
          phone,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong.");
        setStatus("err");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setError("Network error. Please email hello@finza.africa.");
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {status === "ok" && (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {isWalkthrough
            ? "Thanks. We have received your walkthrough request and will contact you shortly."
            : "Thanks — we've received your message. We typically reply within two business days."}
        </p>
      )}
      {(status === "err" || error) && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={siteFormInput}
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-700">
          Business name <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={siteFormInput}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
          Phone / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={siteFormInput}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={siteFormInput}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
          {isWalkthrough ? "What do you want help with?" : "Message"} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder={
            isWalkthrough
              ? "e.g. invoices, payroll, Ghana tax lines, customer statements, or choosing a plan"
              : "How can we help?"
          }
          className={siteFormInput}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${homePrimaryBtn} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}
      >
        {status === "sending" ? "Sending…" : isWalkthrough ? "Request walkthrough" : "Send message"}
      </button>
      <p className="text-xs text-zinc-500">
        You can also email{" "}
        <a href="mailto:hello@finza.africa" className="font-medium text-zinc-900 underline underline-offset-2">
          hello@finza.africa
        </a>
        .
      </p>
    </form>
  );
}
