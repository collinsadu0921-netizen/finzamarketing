import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software for Ghana — Ledger, VAT & Live Reports | Finza",
  description:
    "Looking for accounting software in Ghana? Finza gives Ghanaian businesses a real-time ledger, VAT (15%), NHIL (2.5%), and GETFund (2.5%) handling under Ghana's revised framework effective 1 January 2026 — invoicing and financial reports always current.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-ghana",
  },
};

export default function AccountingSoftwareGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <JsonLd data={[softwareApplicationSchema(), breadcrumbListSchema([{ name: "Home", path: "/" }, { name: "Accounting software for Ghana", path: "/accounting-software-ghana" }])]} />

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Accounting software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for Ghanaian businesses.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza is accounting software built specifically for Ghana — with VAT, NHIL, and GETFund handling, real-time ledger posting, and financial reports that are always current. No spreadsheets. No month-end catch-up.
            </p>
            <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
              Need levy-specific automation first? See{" "}
              <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                VAT software for Ghana
              </Link>
              . Ready to compare plans?{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                Workspace pricing
              </Link>{" "}
              lists Retail, Service, and Accountant workspaces in GHS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.finza.africa/signup"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Start free — no card required
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                View demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Most Ghanaian businesses are running on broken financial data.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              The majority of small and growing businesses in Ghana rely on spreadsheets, manual ledgers, or a combination of both. At the end of each month — or each quarter — the numbers need to be pulled together, reconciled, and reviewed. The business owner is guessing at their profit. The accountant is rebuilding the books from scratch. VAT has been estimated, not calculated. And by the time anyone knows where the business actually stands, it&apos;s too late to do anything about it.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              This is not a technology problem. It is a structural one. Spreadsheets are not accounting systems — they are calculation tools. They do not enforce double-entry. They do not separate VAT from revenue. They do not produce a trial balance that closes. And when something goes wrong, the error is invisible until it becomes a liability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { label: "No real-time visibility", desc: "Business owners have no way to know their true profit position until the accountant compiles the books — often weeks after the period closes." },
                { label: "VAT calculated wrong or late", desc: "Ghana's multi-levy structure — VAT, NHIL, GETFund — is often handled as a single number at the end of the quarter, which leads to errors." },
                { label: "Audit trail does not exist", desc: "Spreadsheet edits leave no trace. When GRA asks a question, there is no structured record to point to — only a series of cell changes over months." },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-zinc-200 bg-white">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{item.label}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW FINZA SOLVES IT */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Accounting software that works like accounting is supposed to work.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built on a double-entry general ledger. Every transaction — sale, invoice, payment, expense — creates a balanced journal entry the moment it is confirmed. The ledger is never behind. It cannot go out of balance. And because all financial reports are generated from the same ledger, your income statement, balance sheet, and VAT summary are always accurate and always current.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Real-time ledger posting",
                  body: "Every action you take in Finza writes to the general ledger immediately. When you raise an invoice, accounts receivable is debited and revenue is credited. When a client pays, cash is debited and the receivable clears. There is no end-of-day batch, no overnight sync, no reconciliation step at month end.",
                },
                {
                  title: "Ghana VAT, NHIL, and GETFund built in",
                  body: "Finza calculates VAT (15%), NHIL (2.5%), and GETFund (2.5%) at the point of every applicable transaction. Each levy is posted to a separate ledger account — not bundled together, not estimated. Your GRA-ready VAT report is available at any time because the underlying data is always correct.",
                },
                {
                  title: "Financial reports from the ledger",
                  body: "Your income statement, balance sheet, and trial balance are generated directly from the general ledger. There is no separate report-building step. The moment a transaction is posted, every report that reads from that account updates. You do not need to wait for your accountant to assemble them.",
                },
                {
                  title: "Audit-ready by design",
                  body: "Posted entries in Finza are permanent. Corrections go through reversals — the original entry stays in the ledger, and a new entry corrects the effect. The audit trail is always complete. Nothing is silently overwritten. When GRA or an auditor asks about a specific transaction, you can show them exactly what happened and when.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
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

      {/* WHO IT'S FOR */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Who uses Finza</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Built for three types of users.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Retailers",
                  desc: "Shops, pharmacies, hardware stores, supermarkets, and trading businesses. POS, inventory tracking, COGS, and VAT — all in the ledger automatically.",
                  link: "/accounting-software-for-retailers-ghana",
                },
                {
                  tag: "Service Businesses",
                  desc: "Agencies, consultancies, contractors, clinics, logistics firms. Invoicing, receivables, expenses, and VAT — structured and real-time.",
                  link: "/accounting-software-for-service-businesses-ghana",
                },
                {
                  tag: "Accountants",
                  desc: "Firms and freelance practitioners managing Ghanaian clients. Multi-client workspace with period locking, journal entries, and reversal-based corrections.",
                  link: "/accountants",
                },
              ].map((block) => (
                <div key={block.tag} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="inline-block rounded-md bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 mb-4 self-start">
                    {block.tag}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1">{block.desc}</p>
                  <Link href={block.link} className="mt-5 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GHANA-SPECIFIC */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana-specific</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Why generic accounting software often fails in Ghana.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Many international accounting tools were not built with Ghana&apos;s tax structure in mind. They handle a single VAT rate. They do not know what NHIL or GETFund is. They cannot produce a GRA-compliant VAT report without significant manual configuration — and even then, the underlying accounting is often incorrect because the levies are not properly separated in the ledger.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza was built from the ground up for Ghana. The tax engine understands VAT, NHIL, and GETFund as distinct levies with distinct ledger accounts. The reporting engine produces output formatted for GRA. There is no manual configuration step — it works correctly from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ghana-vat-nhil-getfund" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                How Ghana VAT, NHIL and GETFund work in Finza →
              </Link>
              <Link href="/vat-software-ghana" className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-900 transition-colors">
                VAT software for Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/features", label: "Features", desc: "What Finza does" },
          { href: "/pricing", label: "Pricing", desc: "Workspace plans" },
          { href: "/how-vat-works-ghana", label: "How VAT works", desc: "Ghana tax guide" },
        ]}
      />

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Accounting software built for Ghana.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Real-time ledger. Ghana VAT handled automatically. Financial reports always current.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                Preview a workspace →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">No card required · First month free</p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
