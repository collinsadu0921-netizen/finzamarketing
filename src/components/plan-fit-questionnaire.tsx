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
import { GhanaProofChips, PRICING_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";
import {
  homeCard,
  homeHeroPrimaryBtn,
  homePrimaryBtn,
  sectionLead,
  sectionTitle,
  siteChipDefault,
  siteChipSelected,
  siteFormCard,
  siteGhsBadge,
} from "@/components/home/home-ui";

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
    <section id="find-plan" className="home-section-surface scroll-mt-28 border-b border-zinc-200/80 py-16 md:py-20">
      <Container>
        <div className="relative mx-auto max-w-4xl space-y-10">
          <div className="pointer-events-none absolute inset-0 site-hero-glow" />
          <div className="relative space-y-3 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Plan fit</p>
            <h2 className={sectionTitle}>Answer a few quick questions</h2>
            <p className={sectionLead}>
              Tell us what your business needs. We&apos;ll suggest a plan and show the price in GHS.
            </p>
            <p className={siteGhsBadge}>
              Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month
            </p>
            <GhanaProofChips chips={PRICING_PROOF_CHIPS} size="xs" className="justify-center" />
          </div>

          {!leadSubmitted && (
            <div className={`${homeCard} relative space-y-8 p-6 sm:p-8`}>
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
                          className={`home-card-lift rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                            selected ? siteChipSelected : siteChipDefault
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
                className={`${homePrimaryBtn} w-full disabled:cursor-not-allowed disabled:opacity-50`}
              >
                See my recommendation
              </button>
            </div>
          )}

          {leadSubmitted && (
            <div className="rounded-2xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50 to-white p-8 text-center shadow-sm shadow-emerald-900/5">
              <p className="text-lg font-bold text-emerald-900">
                Thank you. We have received your request and will contact you for a walkthrough.
              </p>
            </div>
          )}

          {result && recommendation && !leadSubmitted && submitted && (
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800/20 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] p-8 text-white shadow-xl shadow-slate-900/25">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
                <p className="relative text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Recommended plan
                </p>
                <h3 className="relative mt-2 text-2xl font-extrabold">{result.name}</h3>
                {monthlyPrice != null && (
                  <p className="relative mt-4 text-3xl font-extrabold tracking-tight">
                    GH₵{monthlyPrice.toLocaleString()}
                    <span className="text-lg font-semibold text-zinc-400">/month</span>
                  </p>
                )}
                <p className="relative mt-4 text-base leading-relaxed text-zinc-300">{result.description}</p>
                <p className="relative mt-6 text-sm font-medium text-zinc-300">
                  Recommended based on your answers.
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
                  Book a walkthrough and we&apos;ll help you choose the right plan.
                </p>
                <button
                  type="button"
                  onClick={scrollToWalkthroughForm}
                  className={`${homeHeroPrimaryBtn} relative mt-8 w-full lg:hidden`}
                >
                  Request walkthrough
                </button>
              </div>

              <div id="plan-fit-walkthrough" className={`${siteFormCard} scroll-mt-28`}>
                <h3 className="text-lg font-bold text-zinc-900">Request a walkthrough</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Send your details and we&apos;ll show how Finza fits your business.
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
