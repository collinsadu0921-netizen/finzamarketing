import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting vs Excel in Ghana — Why Spreadsheets Break | Finza",
  description:
    "Compare spreadsheet bookkeeping to ledger-first accounting for Ghanaian VAT, NHIL, GETFund, and audit trails. Links to Finza accounting software and pricing.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-vs-excel-ghana",
  },
};

export default function AccountingVsExcelGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Comparison · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting vs Excel in Ghana — where spreadsheets fail
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Excel is excellent for analysis and one-off models. It is a weak <strong className="text-zinc-900">system of record</strong> for a VAT-registered Ghanaian business because it does not enforce double-entry, levy separation, or immutable history.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/accounting-software-ghana"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Accounting software
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
            <h2 className="text-2xl font-bold text-zinc-900">Head-to-head</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="px-4 py-3 font-semibold text-zinc-900">Topic</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Excel / Sheets</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Ledger software (Finza)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Double-entry</td>
                    <td className="px-4 py-3 text-zinc-600">Manual; easy to break balance</td>
                    <td className="px-4 py-3 text-zinc-600">Enforced on every posting</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">VAT, NHIL, GETFund</td>
                    <td className="px-4 py-3 text-zinc-600">Often one blended column</td>
                    <td className="px-4 py-3 text-zinc-600">Separate accounts per levy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Corrections</td>
                    <td className="px-4 py-3 text-zinc-600">Cells overwritten; weak audit trail</td>
                    <td className="px-4 py-3 text-zinc-600">Reversal entries; history kept</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">Multi-user</td>
                    <td className="px-4 py-3 text-zinc-600">Version chaos, formula risk</td>
                    <td className="px-4 py-3 text-zinc-600">Single ledger source of truth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Reports</td>
                    <td className="px-4 py-3 text-zinc-600">Rebuilt by hand each month</td>
                    <td className="px-4 py-3 text-zinc-600">P&amp;L / BS from live ledger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <article className="prose prose-zinc max-w-3xl prose-p:text-zinc-600">
              <h3 className="text-xl font-bold text-zinc-900">When Excel is still fine</h3>
              <p>
                Cash-flow forecasts, scenario planning, and ad-hoc board packs can live in spreadsheets. Your <strong>official books</strong> should not.
              </p>
              <h3 className="text-xl font-bold text-zinc-900">Ghana-specific pain</h3>
              <p>
                A single wrongly copied VAT rate on a 200-row sheet can misstate <strong>GHS thousands</strong> across a quarter. Ledger software applies rates at transaction level — the same place your customer sees them on the invoice.
              </p>
              <h3 className="text-xl font-bold text-zinc-900">When you are ready to switch</h3>
              <p>
                Map your opening balances, pick a workspace, and run parallel for a week if you need confidence. The product deep-dive is on{" "}
                <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                  accounting software for Ghana
                </Link>
                ; if you want help choosing,{" "}
                <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                  message the team
                </Link>{" "}
                or book context via{" "}
                <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                  the demo
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
            href: "/best-accounting-software-ghana",
            label: "Choosing accounting software",
            desc: "What to evaluate",
          },
          { href: "/pricing", label: "Finza pricing", desc: "Workspaces & trial" },
        ]}
      />
      <Footer />
    </main>
  );
}
