import Link from "next/link";
import { Container } from "@/components/container";
import {
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData, PLANS_STARTING_PRICE_GHS } from "@/lib/pricing-plans";
import { Sparkles } from "lucide-react";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

/** Compact pricing CTA — full tier table lives in pricing-tiers.tsx for internal reuse */
export function PricingSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-white py-16" id="pricing">
      <div className="pointer-events-none absolute inset-0 home-pricing-glow" />
      <Container>
        <div className="relative mx-auto max-w-3xl">
          <div className="home-card-lift overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-white via-white to-zinc-50/90 p-8 shadow-lg shadow-zinc-900/[0.06] ring-1 ring-zinc-900/[0.03] sm:p-10">
            <div className="mx-auto flex max-w-lg flex-col items-center space-y-5 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-md shadow-slate-900/20">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={sectionTitle}>Find the right Finza plan</h2>
              <p className={sectionLead}>
                Compare public monthly prices in GHS. Start a free trial, or use plan fit if you want help choosing.
              </p>
              <p className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-semibold text-zinc-800">
                Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month.
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
                <a href={starterSignupHref} className={homePrimaryBtn}>
                  Start free trial
                </a>
                <Link href="/pricing#plans" className={homeSecondaryBtn}>
                  Compare plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
