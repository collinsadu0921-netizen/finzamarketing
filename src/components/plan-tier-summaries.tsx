import Link from "next/link";
import { Container } from "@/components/container";
import { PLAN_FIT_SUMMARIES, PLANS_STARTING_PRICE_GHS } from "@/lib/pricing-plans";
import {
  homeCard,
  homeCardMuted,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";

export function PlanTierSummaries() {
  const tiers = Object.entries(PLAN_FIT_SUMMARIES) as [
    keyof typeof PLAN_FIT_SUMMARIES,
    (typeof PLAN_FIT_SUMMARIES)[keyof typeof PLAN_FIT_SUMMARIES],
  ][];

  return (
    <section className="border-b border-zinc-100 bg-white py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="space-y-2">
            <h2 className={sectionTitle}>Three ways to run Finza</h2>
            <p className={sectionLead}>
              Essentials, Professional, and Business — built for service workflows in Ghana. Exact
              pricing is confirmed after your walkthrough or plan-fit answers.
            </p>
            <p className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-semibold text-zinc-800">
              Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month.
            </p>
          </div>
          <div className="grid gap-6 text-left md:grid-cols-3">
            {tiers.map(([id, plan]) => (
              <div
                key={id}
                className={
                  id === "professional"
                    ? `${homeCardMuted} relative p-6 ring-1 ring-zinc-800/10`
                    : `${homeCard} p-6`
                }
              >
                {id === "professional" && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Often recommended
                  </p>
                )}
                <h3 className="text-lg font-bold text-zinc-900">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{plan.description}</p>
              </div>
            ))}
          </div>
          <Link href="#find-plan" className={homeSecondaryBtn}>
            Find my plan
          </Link>
        </div>
      </Container>
    </section>
  );
}
