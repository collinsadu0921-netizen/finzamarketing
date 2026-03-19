import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting for Retail in Ghana — Inventory, POS & VAT | Finza",
  description:
    "Retail accounting in Ghana: COGS, stock, POS sales, and VAT/NHIL/GETFund at checkout. Practical scenarios and links to Finza pricing and accounting software.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-for-retail-ghana",
  },
};

export default function AccountingForRetailGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Retail · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting for retail in Ghana — stock, COGS, and the till
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Retail is not &quot;simpler&quot; than services — it is <strong className="text-zinc-900">more granular</strong>. Every sale should move <strong className="text-zinc-900">inventory</strong>, recognise <strong className="text-zinc-900">COGS</strong>, and split <strong className="text-zinc-900">VAT and levies</strong> at the point of payment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Retail workspace pricing
              </Link>
              <Link
                href="/accounting-software-ghana"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Accounting software
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Scenario: pharmacy with fast-moving SKU</h2>
            <p>
              You buy 200 units at <strong>GHS 3,000</strong> net plus applicable taxes into inventory. You sell 40 units at a POS price that includes levies. Your system must reduce stock by 40 units, post <strong>COGS</strong> for those 40 at your costing method, and post <strong>revenue net of VAT</strong> with <strong>output VAT, NHIL, and GETFund</strong> separated — not one blended &quot;sales tax&quot; figure.
            </p>

            <h3>Why margin lies without COGS discipline</h3>
            <p>
              If you only track daily cash, your gross margin is invisible. Two weeks of discounting or shrinkage will not show up until stocktake — if you stocktake at all. Ledger-based retail ties <strong>every scan</strong> to accounts.
            </p>

            <h2>Scenario: end-of-day reconciliation</h2>
            <p>
              Cash drawer <strong>GHS 1,200</strong>, MoMo <strong>GHS 2,450</strong>, card settlements pending. Those should hit <strong>clearing accounts</strong> and settle to bank — your accountant should not be guessing from a handwritten tally.
            </p>

            <h2>Related product pages</h2>
            <p>
              Finza&apos;s Retail Workspace is described in depth on{" "}
              <Link href="/accounting-software-for-retailers-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for retailers in Ghana
              </Link>
              . Compare plans on{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-software-for-retailers-ghana",
            label: "Retailers — software page",
            desc: "POS, inventory, COGS",
          },
          { href: "/demo", label: "Try the demo", desc: "Retail workspace preview" },
        ]}
      />
      <Footer />
    </main>
  );
}
