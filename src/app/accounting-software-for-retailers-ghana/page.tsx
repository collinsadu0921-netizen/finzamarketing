import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting Software for Retailers in Ghana | Finza",
  description:
    "Retail accounting direction for Ghana: planned POS, inventory, and COGS on one ledger with Ghana VAT. Live today: invoicing, expenses, and reporting — plans from GHS 149/month.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-for-retailers-ghana",
  },
};

export default function RetailAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Retail accounting · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for retailers in Ghana.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              We&apos;re building a retail workspace that connects point-of-sale, inventory, and the general ledger — so every sale can post revenue, cash, Ghana VAT, stock movement, and COGS together. That flow isn&apos;t live in the product yet; today Finza is strongest on invoicing, expenses, and reporting on{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                published plans
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/pricing" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                View plans from GHS 149/month
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                Try the interactive demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Built for Ghanaian retailers</p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                For businesses that sell physical goods.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Shops and general stores",
                "Pharmacies and chemists",
                "Supermarkets and mini-marts",
                "Hardware and building materials",
                "Agricultural supply stores",
                "Electronics and appliances",
                "Fashion and clothing retailers",
                "Wholesale and distribution",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3.5 rounded-lg border border-zinc-200 bg-white">
                  <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Why retail bookkeeping fails when POS and accounting are separate.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Most retail businesses in Ghana operate two completely separate systems — a POS or cash register for sales, and a spreadsheet (or paper record) for accounting. The sales happen in one place. The accounting happens in another. Connecting them is a manual step — one that happens late, happens infrequently, or does not happen at all.
            </p>
            <div className="space-y-4">
              {[
                {
                  headline: "COGS is calculated at month end — or not at all",
                  body: "Most retail businesses do not know their Cost of Goods Sold in real time. They use a periodic count to estimate it — which means their gross profit figure is always an approximation, never a fact.",
                },
                {
                  headline: "Inventory shrinkage is invisible",
                  body: "When stock is sold, stolen, or damaged, a disconnected system does not automatically adjust the balance sheet. Inventory value is often stated at purchase cost without the reductions that sales and write-offs should create.",
                },
                {
                  headline: "VAT collected on sales is estimated",
                  body: "If VAT is not calculated and separated at the point of every POS transaction, the VAT liability is an estimate. If the estimate is wrong — common when daily sales volumes are high — the error compounds through the period.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="flex-shrink-0 w-1 rounded-full bg-red-400 self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.headline}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW FINZA SOLVES IT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza works for retailers</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                One sale. One journal entry. Always balanced.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              When you record a POS sale in Finza, the system writes a complete journal entry immediately — one that handles revenue, payment, inventory, COGS, and VAT all at once. There is no separate step.
            </p>

            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">POS sale — GHS 300 product (cost: GHS 180)</p>
              </div>
              <div className="p-6 space-y-2">
                <div className="grid grid-cols-3 text-xs font-bold text-zinc-400 pb-2 border-b border-zinc-100 mb-2">
                  <span>Account</span>
                  <span className="text-center">Dr</span>
                  <span className="text-right">Cr</span>
                </div>
                {[
                  { account: "Cash / Bank", dr: "GHS 360.00", cr: "" },
                  { account: "Revenue — Retail Sales", dr: "", cr: "GHS 300.00" },
                  { account: "VAT Output (15%)", dr: "", cr: "GHS 45.00" },
                  { account: "NHIL (2.5%)", dr: "", cr: "GHS 7.50" },
                  { account: "GETFund (2.5%)", dr: "", cr: "GHS 7.50" },
                  { account: "COGS", dr: "GHS 180.00", cr: "" },
                  { account: "Inventory", dr: "", cr: "GHS 180.00" },
                ].map((row) => (
                  <div key={row.account} className="grid grid-cols-3 text-sm py-1 border-b border-zinc-50">
                    <span className="text-zinc-700">{row.account}</span>
                    <span className="text-center font-semibold text-blue-700">{row.dr}</span>
                    <span className="text-right font-semibold text-zinc-600">{row.cr}</span>
                  </div>
                ))}
                <p className="text-xs text-zinc-500 pt-3">All seven lines posted automatically. No manual step required.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Inventory levels always accurate",
                  body: "Every sale reduces stock by the correct quantity. Every purchase delivery increases it. Your inventory balance in the accounting system matches what is actually on the shelf — in real time.",
                },
                {
                  title: "COGS posted with every sale",
                  body: "There is no COGS calculation at month end. Every time you sell a product, the cost of that product is moved from Inventory to Cost of Goods Sold. Your gross profit is always current.",
                },
                {
                  title: "VAT separated at point of purchase",
                  body: "VAT, NHIL, and GETFund are separated from revenue at the moment of sale. Your VAT liability account reflects every single POS transaction — not an estimate. Your GRA report is always ready.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LINKS + CTA */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Features", desc: "Full system overview", href: "/features" },
                { label: "Pricing", desc: "Live plans from GHS 149/month", href: "/pricing" },
                { label: "Accounting for Ghana", desc: "Ghana software overview", href: "/accounting-software-ghana" },
                { label: "VAT software", desc: "How Ghana VAT works", href: "/vat-software-ghana" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-zinc-400 transition-colors">
                  <p className="text-sm font-bold text-zinc-900">{l.label}</p>
                  <p className="text-xs text-zinc-500 mt-1">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              POS, inventory, and accounting — one system.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Accounting software for Ghanaian retailers. Every sale posts to the ledger automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="/pricing" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                Interactive demo (service flows) →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">
              Retail POS is on the roadmap — no retail workspace pricing until launch. Live subscriptions: see Pricing (from GHS 149/month).
            </p>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-for-retail-ghana",
            label: "Retail accounting guide",
            desc: "COGS & POS",
          },
          { href: "/pricing", label: "Pricing", desc: "Retail workspace" },
        ]}
      />
      <Footer />
    </main>
  );
}
