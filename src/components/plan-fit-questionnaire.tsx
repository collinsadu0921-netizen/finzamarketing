"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { PlanFitLeadForm } from "@/components/plan-fit-lead-form";
import { PLAN_FIT_QUESTIONS } from "@/lib/plan-fit-questions";
import {
  getPlanMonthlyPriceGhs,
  PLAN_FIT_SUMMARIES,
  PLANS_STARTING_PRICE_GHS,
} from "@/lib/pricing-plans";
import { recommendPlan, type PlanFitAnswers } from "@/lib/plan-fit-scoring";

const INITIAL: PlanFitAnswers = {
  businessType: "",
  documents: "",
  teamSize: "",
  payroll: "",
  accountingReports: "",
  customerStatements: "",
  ghanaTax: "",
  setupHelp: "",
};

export function PlanFitQuestionnaire() {
  const [answers, setAnswers] = useState<PlanFitAnswers>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const allAnswered = PLAN_FIT_QUESTIONS.every((q) => answers[q.id] !== "");
  const recommendation = useMemo(
    () => (submitted && allAnswered ? recommendPlan(answers) : null),
    [submitted, allAnswered, answers]
  );

  const result = recommendation ? PLAN_FIT_SUMMARIES[recommendation] : null;
  const monthlyPrice =
    recommendation != null ? getPlanMonthlyPriceGhs(recommendation) : null;

  function scrollToWalkthroughForm() {
    document.getElementById("plan-fit-walkthrough")?.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstField = document.getElementById("plan-fit-name");
    if (firstField instanceof HTMLElement) {
      window.setTimeout(() => firstField.focus(), 400);
    }
  }

  return (
    <section id="find-plan" className="scroll-mt-28 border-b border-zinc-100 bg-zinc-50 py-20">
      <Container>
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Plan fit</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Answer a few quick questions
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              We&apos;ll suggest a Finza plan based on how you invoice, report, and run your team in
              Ghana.
            </p>
            <p className="text-sm font-semibold text-zinc-700">
              Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month.
            </p>
          </div>

          {!leadSubmitted && (
            <div className="space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              {PLAN_FIT_QUESTIONS.map((q) => (
                <fieldset key={q.id} className="space-y-3">
                  <legend className="text-sm font-bold text-zinc-900">{q.label}</legend>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const selected = answers[q.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setAnswers((prev) => ({ ...prev, [q.id]: opt.value }));
                            setSubmitted(false);
                            setLeadSubmitted(false);
                          }}
                          className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                            selected
                              ? "border-[#0F172A] bg-[#0F172A] text-white"
                              : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}

              <button
                type="button"
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                className="w-full rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0F172A]/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                See my recommendation
              </button>
            </div>
          )}

          {leadSubmitted && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
              <p className="text-lg font-bold text-emerald-900">
                Thank you. We have received your request and will contact you for a walkthrough.
              </p>
            </div>
          )}

          {result && recommendation && !leadSubmitted && submitted && (
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="rounded-2xl border border-zinc-800 bg-[#0F172A] p-8 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Recommended plan
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">{result.name}</h3>
                {monthlyPrice != null && (
                  <p className="mt-4 text-3xl font-extrabold tracking-tight">
                    GH₵{monthlyPrice.toLocaleString()}
                    <span className="text-lg font-semibold text-zinc-400">/month</span>
                  </p>
                )}
                <p className="mt-4 text-base leading-relaxed text-zinc-300">{result.description}</p>
                <p className="mt-6 text-sm font-medium text-zinc-300">
                  Recommended based on your answers.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Book a walkthrough so we can help you choose the right setup for your business.
                </p>
                <button
                  type="button"
                  onClick={scrollToWalkthroughForm}
                  className="mt-8 w-full rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0F172A] shadow-sm transition hover:bg-zinc-100 lg:hidden"
                >
                  Request walkthrough
                </button>
              </div>

              <div
                id="plan-fit-walkthrough"
                className="scroll-mt-28 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-lg font-bold text-zinc-900">Request a walkthrough</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Share your details and we&apos;ll follow up to walk through Finza for your
                  workflow in Ghana.
                </p>
                <div className="mt-6">
                  <PlanFitLeadForm
                    recommendedPlan={recommendation}
                    answers={answers}
                    onSuccess={() => setLeadSubmitted(true)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
