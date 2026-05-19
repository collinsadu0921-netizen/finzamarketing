"use client";

import Link from "next/link";
import { PLANS_STARTING_PRICE_GHS } from "@/lib/pricing-plans";

/** Compact pricing CTA — full tier table lives in pricing-tiers.tsx for internal reuse */
export function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30" id="pricing">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Find the right Finza plan
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Book a guided walkthrough or answer a few questions — we&apos;ll recommend Essentials,
            Professional, or Business for your service workflow in Ghana.
          </p>
          <p className="text-sm font-semibold text-zinc-700">
            Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0F172A] px-8 py-3 text-sm font-bold text-white hover:bg-[#0F172A]/90"
            >
              Book a walkthrough
            </Link>
            <Link
              href="/pricing#find-plan"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-8 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Find my plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
