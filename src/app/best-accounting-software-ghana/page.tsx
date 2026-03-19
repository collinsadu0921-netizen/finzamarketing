import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Best Accounting Software in Ghana — How to Choose (2026) | Finza",
  description:
    "Evaluate accounting software for Ghana: ledger discipline, VAT/NHIL/GETFund, retail vs service fit, and accountant workflows. Compare criteria; explore Finza pricing.",
  alternates: {
    canonical: "https://www.finza.africa/best-accounting-software-ghana",
  },
};

export default function BestAccountingSoftwareGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Buyer guide · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Best accounting software in Ghana — a decision framework, not a hype list
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              &quot;Best&quot; depends on whether you sell <strong className="text-zinc-900">goods</strong>, <strong className="text-zinc-900">services</strong>, or both; whether you are <strong className="text-zinc-900">VAT-registered</strong>; and whether an <strong className="text-zinc-900">accountant</strong> closes your periods. Below is how to score vendors consistently.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/accounting-software-ghana"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Finza — accounting for Ghana
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-zinc-900">Criteria matrix</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="px-4 py-3 font-semibold text-zinc-900">Criterion</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Why it matters in Ghana</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Finza</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">General ledger integrity</td>
                    <td className="px-4 py-3 text-zinc-600">GRA and auditors expect traceable double-entry</td>
                    <td className="px-4 py-3 text-zinc-600">Ledger-first; auto-posted journals</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">VAT + NHIL + GETFund</td>
                    <td className="px-4 py-3 text-zinc-600">Multi-levy; 2026 input deduction rules</td>
                    <td className="px-4 py-3 text-zinc-600">Separated at transaction</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Retail fit</td>
                    <td className="px-4 py-3 text-zinc-600">Inventory + COGS + POS</td>
                    <td className="px-4 py-3 text-zinc-600">Retail Workspace</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">Service fit</td>
                    <td className="px-4 py-3 text-zinc-600">AR, invoicing, receipts</td>
                    <td className="px-4 py-3 text-zinc-600">Service Workspace</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Accountant controls</td>
                    <td className="px-4 py-3 text-zinc-600">Journals, lock, reversals</td>
                    <td className="px-4 py-3 text-zinc-600">Accountant Workspace</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <article className="prose prose-zinc max-w-3xl prose-p:text-zinc-600">
              <h3 className="text-xl font-bold text-zinc-900">Questions to ask in a demo</h3>
              <ol>
                <li>Show me the <strong>journal entry</strong> for a standard-rated sale with NHIL and GETFund.</li>
                <li>Show me the <strong>trial balance</strong> after ten mixed transactions.</li>
                <li>How does a <strong>correction</strong> work without deleting history?</li>
              </ol>
              <p>
                Finza publishes transparent product pages for{" "}
                <Link href="/features" className="font-semibold text-zinc-900 underline underline-offset-2">
                  features
                </Link>{" "}
                and invites you to{" "}
                <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                  try the demo
                </Link>
                .
              </p>
            </article>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-vs-excel-ghana",
            label: "Accounting vs Excel",
            desc: "Spreadsheet risks",
          },
          { href: "/features", label: "Finza features", desc: "Deep capability list" },
        ]}
      />
      <Footer />
    </main>
  );
}
