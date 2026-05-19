"use client";

import { useState } from "react";
import type { PlanTierId } from "@/lib/pricing-plans";
import { getPlanMonthlyPriceGhs, PLAN_FIT_SUMMARIES } from "@/lib/pricing-plans";
import type { PlanFitAnswers } from "@/lib/plan-fit-scoring";

type Props = {
  recommendedPlan: PlanTierId;
  answers: PlanFitAnswers;
  onSuccess: () => void;
};

const inputClass =
  "mt-1.5 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";

export function PlanFitLeadForm({ recommendedPlan, answers, onSuccess }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const optionalMessage = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const planName = PLAN_FIT_SUMMARIES[recommendedPlan].name;
    const monthlyPrice = getPlanMonthlyPriceGhs(recommendedPlan);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pricing_plan_fit",
          name,
          company,
          phone,
          email,
          recommended_plan: recommendedPlan,
          recommended_plan_name: planName,
          recommended_plan_monthly_price: monthlyPrice,
          questionnaire_answers: answers,
          ...(optionalMessage ? { optional_message: optionalMessage } : {}),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("err");
        return;
      }
      onSuccess();
    } catch {
      setError("Network error. Please email hello@finza.africa.");
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="plan-fit-name" className="block text-sm font-medium text-zinc-700">
          Full name <span className="text-red-500">*</span>
        </label>
        <input id="plan-fit-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="plan-fit-company" className="block text-sm font-medium text-zinc-700">
          Business name <span className="text-red-500">*</span>
        </label>
        <input
          id="plan-fit-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="plan-fit-phone" className="block text-sm font-medium text-zinc-700">
          WhatsApp / phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="plan-fit-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="plan-fit-email" className="block text-sm font-medium text-zinc-700">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="plan-fit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="plan-fit-message" className="block text-sm font-medium text-zinc-700">
          Message (optional)
        </label>
        <textarea
          id="plan-fit-message"
          name="message"
          rows={3}
          placeholder="Anything else we should know before the walkthrough?"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0F172A]/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request walkthrough"}
      </button>
    </form>
  );
}
