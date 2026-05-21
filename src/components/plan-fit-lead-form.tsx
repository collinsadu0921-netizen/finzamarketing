"use client";

import { useState } from "react";
import type { PlanTierId } from "@/lib/pricing-plans";
import { getPlanMonthlyPriceGhs, PLAN_FIT_SUMMARIES } from "@/lib/pricing-plans";
import type { PlanFitAnswers } from "@/lib/plan-fit-scoring";
import { homePrimaryBtn, siteFormInput } from "@/components/home/home-ui";

type Props = {
  recommendedPlan: PlanTierId;
  answers: PlanFitAnswers;
  onSuccess: () => void;
};

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
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="plan-fit-name" className="block text-sm font-medium text-zinc-700">
          Full name <span className="text-red-500">*</span>
        </label>
        <input id="plan-fit-name" name="name" type="text" required autoComplete="name" className={siteFormInput} />
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
          className={siteFormInput}
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
          className={siteFormInput}
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
          className={siteFormInput}
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
          placeholder="Anything you want us to cover?"
          className={siteFormInput}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${homePrimaryBtn} w-full disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {status === "sending" ? "Sending…" : "Request walkthrough"}
      </button>
    </form>
  );
}
