"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import {
    getPlanSignupHref,
    getPlanTotalPriceGhs,
    pricingPlansData as plansData,
    type BillingCycleId,
} from "@/lib/pricing-plans";
import { homePrimaryBtn, homeSecondaryBtn, sectionLead, sectionTitle } from "@/components/home/home-ui";

export function PricingTiers() {
    const [billingCycle, setBillingCycle] = useState<BillingCycleId>("monthly");

    const cycleLabel = (cycle: BillingCycleId) => {
        switch (cycle) {
            case "monthly":
                return "/month";
            case "quarterly":
                return "/quarter";
            case "annual":
                return "/year";
        }
    };

    return (
        <section id="plans" className="scroll-mt-28 border-b border-zinc-100 bg-white py-12 md:py-14">
            <Container>
                <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Compare plans</p>
                    <h2 className={sectionTitle}>Start self-serve or get help choosing</h2>
                    <p className={sectionLead}>
                        Choose a billing cycle, compare public totals in GHS, start a 14-day free trial, or book a walkthrough if you want help choosing.
                    </p>
                </div>

                <div className="mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-center gap-2 px-2">
                    {(["monthly", "quarterly", "annual"] as BillingCycleId[]).map((cycle) => {
                        const active = cycle === billingCycle;
                        return (
                            <button
                                key={cycle}
                                type="button"
                                onClick={() => setBillingCycle(cycle)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                                    active
                                        ? "border-zinc-800 bg-zinc-900 text-white"
                                        : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                                }`}
                                aria-pressed={active}
                            >
                                {cycle === "monthly" ? "Monthly" : cycle === "quarterly" ? "Quarterly" : "Annual"}
                            </button>
                        );
                    })}
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
                    {plansData.map((plan) => (
                        <div
                            key={plan.id}
                            className={`flex flex-col overflow-hidden rounded-2xl border shadow-sm ${
                                plan.highlight
                                    ? "z-10 border-zinc-800 bg-white ring-1 ring-zinc-800 lg:scale-[1.01]"
                                    : "border-zinc-200 bg-zinc-50/50"
                            }`}
                        >
                            {plan.highlight && (
                                <div className="bg-[#0F172A] py-2 text-center text-xs font-bold uppercase tracking-wide text-white">
                                    Often recommended
                                </div>
                            )}

                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-6 flex-1">
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-sm font-bold ${
                                            plan.id === "essentials" ? "bg-zinc-100 text-zinc-800" :
                                            plan.id === "professional" ? "bg-blue-100 text-blue-700" :
                                            "bg-fuchsia-100 text-fuchsia-700"
                                        }`}>
                                            {plan.name}
                                        </span>
                                    </div>
                                    <p className="mb-6 text-sm font-medium leading-relaxed text-zinc-600">
                                        {plan.subtitle}
                                    </p>
                                    <div className="mb-1 text-4xl font-extrabold text-zinc-900">
                                        GH₵{getPlanTotalPriceGhs(plan.id, billingCycle).toLocaleString()}
                                        <span className="ml-1.5 text-base font-normal text-zinc-500">{cycleLabel(billingCycle)}</span>
                                    </div>
                                    <p className="mb-5 text-xs font-medium text-zinc-500">14-day free trial. No card required.</p>
                                    <p className="mb-4 border-b border-zinc-200 pb-2 text-sm font-bold text-zinc-900">
                                        {plan.groupTitle}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {plan.items.slice(0, 6).map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                                                <svg
                                                    className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {plan.items.length > 6 ? (
                                        <div className="mt-3">
                                            <details>
                                                <summary className="cursor-pointer select-none text-sm font-semibold text-zinc-700 hover:text-zinc-900">
                                                    See all features
                                                </summary>
                                                <ul className="mt-3 space-y-2.5">
                                                    {plan.items.slice(6).map((item) => (
                                                        <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                                                            <svg
                                                                className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth="2.5"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="leading-snug">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        </div>
                                    ) : null}
                                </div>

                                <div className="mt-7 space-y-3">
                                    <a
                                        href={getPlanSignupHref(plan.planParam, billingCycle)}
                                        className={`${homePrimaryBtn} w-full`}
                                    >
                                        {plan.cta}
                                    </a>
                                    <Link href="/contact" className={`${homeSecondaryBtn} w-full`}>
                                        Book a walkthrough
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
