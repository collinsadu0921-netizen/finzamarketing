import Link from "next/link";
import { Container } from "@/components/container";
import { PLAN_FIT_SUMMARIES, PLANS_STARTING_PRICE_GHS } from "@/lib/pricing-plans";

export function PlanTierSummaries() {
  const tiers = Object.entries(PLAN_FIT_SUMMARIES) as [
    keyof typeof PLAN_FIT_SUMMARIES,
    (typeof PLAN_FIT_SUMMARIES)[keyof typeof PLAN_FIT_SUMMARIES],
  ][];

  return (
    <section className="border-b border-zinc-100 bg-white py-16">
      <Container>
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Three ways to run Finza
            </h2>
            <p className="text-base text-zinc-600">
              Essentials, Professional, and Business — built for service workflows in Ghana. Exact
              pricing is confirmed after your walkthrough or plan-fit answers.
            </p>
            <p className="text-sm font-semibold text-zinc-700">
              Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month.
            </p>
          </div>
          <div className="grid gap-6 text-left md:grid-cols-3">
            {tiers.map(([id, plan]) => (
              <div
                key={id}
                className={`rounded-xl border p-6 ${
                  id === "professional"
                    ? "border-zinc-800 bg-zinc-50 shadow-sm"
                    : "border-zinc-200 bg-white"
                }`}
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
          <Link
            href="#find-plan"
            className="inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4"
          >
            Find my plan
          </Link>
        </div>
      </Container>
    </section>
  );
}
