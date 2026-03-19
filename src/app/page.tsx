import Link from "next/link";
import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, homePageFaqForSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza — Real-time ledger accounting for teams in Ghana",
  description:
    "Finza is the ledger-first finance layer for owners and accountants who are done with month-end surprises. Live P&L, balanced journals, and Ghana tax lines handled at the transaction — see the full product breakdown on our accounting software page for Ghana.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <JsonLd data={faqPageSchema(homePageFaqForSchema)} />

      {/* ────────────────────────────────────────────────────
          SECTION 1 — HERO
      ──────────────────────────────────────────────────── */}
      <section className="pt-20 pb-20 w-full border-b border-zinc-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[58vh]">

            {/* Left: headline + CTA */}
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
                Finza · Ledger-first · Ghana
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
                Know your real numbers —{" "}
                <span className="block">in real time.</span>
              </h1>

              <p className="text-lg text-zinc-600 leading-relaxed max-w-[520px]">
                Finza gives growing teams <strong className="text-zinc-900 font-semibold">one balanced ledger</strong>{" "}
                instead of scattered sheets — so profit, VAT, and cash move together as you operate. For the full Ghana tax
                and product story (VAT, NHIL, GETFund, workspaces), read our{" "}
                <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                  overview of accounting software for Ghana
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="https://app.finza.africa/signup"
                  className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
                >
                  Start free — no card required
                </a>
                <Link
                  href="/demo"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors text-center"
                >
                  View demo
                </Link>
              </div>
            </div>

            {/* Right: balance sheet card */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-[380px] rounded-xl border border-zinc-200 bg-white shadow-md p-6 space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Balance Sheet</span>
                  <span className="text-xs text-zinc-400">Mar 2026 · Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Cash & Bank", value: "GHS 48,200.00" },
                    { label: "Accounts Receivable", value: "GHS 14,250.00" },
                    { label: "Inventory", value: "GHS 80,400.00" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-sm">
                      <span className="text-zinc-600">{row.label}</span>
                      <span className="font-semibold text-zinc-800 tabular-nums">{row.value}</span>
                    </div>
                  ))}
                  <div className="h-px bg-zinc-100" />
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-zinc-900">Total Assets</span>
                    <span className="font-extrabold text-zinc-900 tabular-nums">GHS 142,850.00</span>
                  </div>
                </div>
                <div className="h-px bg-zinc-100" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-600">VAT Output Payable</span>
                    <span className="font-semibold text-zinc-800 tabular-nums">GHS 12,400.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-600">Other Liabilities</span>
                    <span className="font-semibold text-zinc-800 tabular-nums">GHS 25,800.00</span>
                  </div>
                  <div className="h-px bg-zinc-100" />
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-zinc-900">Equity</span>
                    <span className="font-extrabold text-zinc-900 tabular-nums">GHS 104,650.00</span>
                  </div>
                </div>
                <div className="rounded-md bg-green-50 border border-green-200 px-4 py-2.5 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs font-bold text-green-800">Ledger balanced · Assets = Liabilities + Equity</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 2 — TRUST BAR
      ──────────────────────────────────────────────────── */}
      <section className="py-8 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
            {[
              { label: "Ghana tax structure", sub: "VAT · NHIL · GETFund" },
              { label: "Real-time posting", sub: "Ledger updates instantly" },
              { label: "Ledger-based reporting", sub: "Statements always current" },
              { label: "Audit-ready records", sub: "Append-only, traceable" },
            ].map((item, i) => (
              <div key={item.label} className={`flex flex-col items-center text-center px-6 py-4 ${i >= 2 ? "mt-px md:mt-0 border-t border-zinc-200 md:border-t-0" : ""}`}>
                <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 3 — PROBLEM
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl leading-snug">
                Your invoices say one thing.<br />
                Your bank says another.<br />
                Your reports say something else entirely.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { label: "Invoices", desc: "Created manually — sometimes late, sometimes forgotten." },
                { label: "Bank records", desc: "Cash moves in and out with no automatic categorisation." },
                { label: "Financial reports", desc: "Prepared separately, once a month, by hand — or not at all." },
              ].map((p) => (
                <div key={p.label} className="p-6 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{p.label}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50 px-6 py-5">
              <p className="text-sm font-semibold text-red-800 leading-relaxed">
                ⚠️ Mistakes are found during the audit — when it&apos;s too late. Correcting them costs more than the error did.
              </p>
            </div>

            <div className="space-y-3 max-w-2xl">
              <p className="text-base text-zinc-700 leading-relaxed font-medium">
                Most Ghanaian businesses don&apos;t struggle with revenue.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                They struggle with knowing what they actually made, what they owe in VAT, and whether their books are correct — until an accountant or audit forces the question. If you want to talk it through with us, use{" "}
                <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                  contact
                </Link>
                {" "}or jump into a{" "}
                <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                  guided demo
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 4 — CORE MECHANISM
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza works</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl leading-snug">
                One system. One ledger.<br />Always in balance.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  headline: "Every action creates a balanced journal entry",
                  body: "A sale, an expense, a stock purchase — Finza records the corresponding debit and credit. Both sides. Always. No manual step required from you.",
                },
                {
                  headline: "No end-of-month fixing",
                  body: "The ledger is written in real time. Month-end close is a confirmation, not a correction marathon. Your books are never behind.",
                },
                {
                  headline: "Reports flow directly from the ledger",
                  body: "Your income statement, balance sheet, and VAT summary are generated from the same source of truth — no re-entry, no reconciliation step.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
                  <div>
                    <p className="text-base font-bold text-zinc-900 mb-1.5">{item.headline}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">How the data flows</p>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  "Sale or Invoice",
                  "Journal Entry",
                  "General Ledger",
                  "Trial Balance",
                  "Reports",
                ].map((node, i, arr) => (
                  <div key={node} className="flex items-center gap-2">
                    <div className={`rounded-md px-4 py-2 text-xs font-semibold border ${
                      node === "General Ledger"
                        ? "bg-[#0F172A] text-white border-[#0F172A]"
                        : "bg-zinc-50 text-zinc-700 border-zinc-200"
                    }`}>
                      {node}
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-4 h-4 text-zinc-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 5 — PROOF (JOURNAL ENTRY)
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it records</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                See how every transaction is recorded.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl">
                When you raise an invoice, Finza doesn&apos;t just log it. It posts the full double-entry journal automatically — including VAT, NHIL, and GETFund.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Journal Entry — Auto-posted</p>
                    <p className="text-sm font-semibold text-zinc-900 mt-0.5">Invoice raised: TechStart Ltd</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Posted
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 text-xs font-bold text-zinc-400 pb-2 border-b border-zinc-100 mb-3">
                    <span>Account</span>
                    <span className="text-center">Dr</span>
                    <span className="text-right">Cr</span>
                  </div>
                  <div className="space-y-3">
                  {[
                    { account: "Accounts Receivable", dr: "GHS 6,000.00", cr: "" },
                    { account: "Revenue", dr: "", cr: "GHS 5,000.00" },
                    { account: "VAT Output (15%)", dr: "", cr: "GHS 750.00" },
                    { account: "NHIL (2.5%)", dr: "", cr: "GHS 125.00" },
                    { account: "GETFund (2.5%)", dr: "", cr: "GHS 125.00" },
                  ].map((row) => (
                      <div key={row.account} className="grid grid-cols-3 text-sm">
                        <span className="text-zinc-700">{row.account}</span>
                        <span className="text-center font-semibold text-blue-700">{row.dr}</span>
                        <span className="text-right font-semibold text-zinc-600">{row.cr}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-3 text-sm">
                    <span className="font-bold text-zinc-900">Total</span>
                    <span className="text-center font-extrabold text-zinc-900">GHS 6,000.00</span>
                    <span className="text-right font-extrabold text-zinc-900">GHS 6,000.00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Dr = Cr · Always</p>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    The total debit equals the total credit on every entry. The ledger cannot be out of balance — this is enforced by the system, not by you.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Ghana tax separated at source</p>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    VAT, NHIL, and GETFund are not calculated at month end. They are posted as separate credit entries the moment the invoice is raised — so your tax position is always correct.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">No manual step required</p>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    You raise the invoice. Finza writes all five lines of this journal entry. No accounting knowledge required from you.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 6 — GHANA TAX ENGINE
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana VAT software</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built for Ghana&apos;s tax structure.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl leading-relaxed">
                Ghana applies multiple indirect levies at the point of transaction. Finza calculates and separates each one — at the time of the transaction, not at month end.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "VAT",
                  rate: "15%",
                  desc: "Calculated on every applicable sale or invoice. Output and input VAT tracked as separate ledger accounts. GRA-ready VAT report always current.",
                },
                {
                  name: "NHIL",
                  rate: "2.5%",
                  desc: "National Health Insurance Levy. Posted as a separate credit entry on every applicable transaction — not bundled with VAT. Treated as an input tax deduction effective 1 January 2026.",
                },
                {
                  name: "GETFund",
                  rate: "2.5%",
                  desc: "Ghana Education Trust Fund levy. Separated from VAT and tracked as its own ledger account. Treated as an input tax deduction effective 1 January 2026.",
                },
              ].map((t) => (
                <div key={t.name} className="p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="flex items-baseline justify-between mb-4">
                    <p className="text-xl font-extrabold text-zinc-900">{t.name}</p>
                    <span className="text-sm font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-0.5">{t.rate}</span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ghana-vat-nhil-getfund" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                Learn how Ghana VAT works in Finza →
              </Link>
              <Link href="/vat-software-ghana" className="text-sm font-semibold text-zinc-500 underline underline-offset-4 hover:text-zinc-900 transition-colors">
                VAT software for Ghana
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              All three are calculated at transaction level and posted to the ledger automatically. No manual adjustment at period end.
            </p>
            <p className="text-xs text-zinc-400">
              Based on Ghana tax rules effective 1 January 2026, including input tax deduction treatment for NHIL and GETFund.
            </p>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 7 — WHO FINZA IS FOR
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Who it&apos;s for</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Who Finza is for.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl">
                Finza is designed for three audiences — all working from the same ledger engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Retailers",
                  headline: "Shops, pharmacies, hardware stores, supermarkets",
                  desc: "Process POS sales, track inventory levels, and calculate COGS — while Finza handles the accounting behind every transaction automatically.",
                  link: "/accounting-software-for-retailers-ghana",
                  linkLabel: "Retail accounting software →",
                },
                {
                  tag: "Service Businesses",
                  headline: "Agencies, consultants, contractors, clinics",
                  desc: "Raise invoices, track what clients owe, record expenses, and know your income position without opening a spreadsheet.",
                  link: "/accounting-software-for-service-businesses-ghana",
                  linkLabel: "Service business accounting →",
                },
                {
                  tag: "Accountants",
                  headline: "Firms and freelancers managing Ghanaian clients",
                  desc: "Review client ledgers, post manual adjustments, lock periods, and correct entries through reversals — from a dedicated professional workspace.",
                  link: "/accountants",
                  linkLabel: "Accountant workspace →",
                },
              ].map((block) => (
                <div key={block.tag} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-zinc-50">
                  <div className="inline-block rounded-md bg-white border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 shadow-sm mb-4 self-start">
                    {block.tag}
                  </div>
                  <p className="text-sm font-bold text-zinc-900 mb-2">{block.headline}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1">{block.desc}</p>
                  <Link href={block.link} className="mt-5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors underline underline-offset-4">
                    {block.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 8 — WHY GHANAIAN BUSINESSES SWITCH FROM SPREADSHEETS
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The switch</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Why Ghanaian businesses switch from spreadsheets.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  before: "Spreadsheets break when someone enters a wrong formula",
                  after: "Finza enforces double-entry — the ledger cannot go out of balance",
                },
                {
                  before: "VAT is calculated once a month, often incorrectly",
                  after: "VAT, NHIL, and GETFund are calculated and posted at every transaction",
                },
                {
                  before: "The accountant needs days to close the books",
                  after: "Books are always up to date — month-end close is a confirmation, not a rebuild",
                },
                {
                  before: "There is no real balance sheet until the accountant produces one",
                  after: "Balance sheet, P&L, and trial balance update in real time",
                },
                {
                  before: "Errors are silently overwritten or lost",
                  after: "All corrections go through reversals — the audit trail is permanent",
                },
                {
                  before: "Revenue looks good on paper but no one knows what&apos;s actually owed in tax",
                  after: "Tax liability is visible at every point in time — not a surprise at year end",
                },
              ].map((row, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-zinc-100 bg-red-50">
                    <p className="text-xs font-semibold text-red-700 leading-relaxed">Before: {row.before}</p>
                  </div>
                  <div className="px-5 py-3.5 flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-zinc-700 leading-relaxed">{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 9 — FEATURES OVERVIEW
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What it does</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built for how Ghanaian businesses operate.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Invoicing and bookkeeping",
                  bullets: [
                    "Raise invoices — ledger updates automatically",
                    "Track what clients owe in real time",
                    "Record expenses with immediate ledger entries",
                  ],
                },
                {
                  title: "Ghana VAT and tax handling",
                  bullets: [
                    "VAT, NHIL, and GETFund at transaction level",
                    "Input and output tax as separate ledger accounts",
                    "GRA-ready VAT report always available",
                  ],
                },
                {
                  title: "Real-time financial reports",
                  bullets: [
                    "Income statement, balance sheet, trial balance — live",
                    "Generated from the ledger directly, not assembled",
                    "Aged receivables updated in real time",
                  ],
                },
                {
                  title: "Retail and service workspaces",
                  bullets: [
                    "Retail: POS, inventory tracking, COGS calculation",
                    "Service: invoicing, accounts receivable, payments",
                    "Both post to the same ledger engine",
                  ],
                },
              ].map((f) => (
                <div key={f.title} className="flex flex-col p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-zinc-900 mb-4">{f.title}</p>
                  <ul className="space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <svg className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href="/features" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                See all features →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 10 — WORKSPACES
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workspaces</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                One ledger engine. Three workspace types.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                Choose the workspace that matches your business model. All three post to the same double-entry system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  tag: "Retail Workspace",
                  headline: "For inventory-based and point-of-sale businesses",
                  desc: "Manage stock, process sales at point of sale, and let Finza handle the accounting behind every transaction.",
                  bullets: [
                    "POS sales post directly to the ledger",
                    "Inventory tracked with automatic COGS entries",
                    "VAT collected, separated, and reported automatically",
                  ],
                  price: "GHS 250",
                },
                {
                  tag: "Service Workspace",
                  headline: "For agencies, consultants, and service providers",
                  desc: "Raise invoices, track payments, and manage expenses — all flowing into a live, always-balanced ledger.",
                  bullets: [
                    "Invoices post to accounts receivable automatically",
                    "Expense entries create immediate ledger records",
                    "Aged receivables always current",
                  ],
                  price: "GHS 200",
                },
              ].map((ws) => (
                <div key={ws.tag} className="flex flex-col p-8 rounded-xl border border-zinc-200 bg-white">
                  <div className="mb-5">
                    <div className="inline-block rounded-md bg-zinc-50 border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-700 shadow-sm mb-4">
                      {ws.tag}
                    </div>
                    <p className="text-sm font-bold text-zinc-900 mb-2">{ws.headline}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{ws.desc}</p>
                  </div>
                  <ul className="space-y-3 mb-7 flex-1">
                    {ws.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-zinc-700">
                        <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline justify-between border-t border-zinc-200 pt-5">
                    <div>
                      <span className="text-2xl font-extrabold text-zinc-900">{ws.price}</span>
                      <span className="text-sm text-zinc-500 ml-1.5">/ month</span>
                    </div>
                    <Link href="/demo" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors underline underline-offset-4">
                      See demo →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="text-sm font-bold text-zinc-900">Accountant Workspace</p>
                <p className="text-sm text-zinc-600 mt-0.5 max-w-lg">
                  For accounting professionals managing multiple client ledgers. Period locking, journal review, and client oversight in one portal. <span className="font-semibold text-zinc-700">GHS 700 / month.</span>
                </p>
              </div>
              <Link href="/accountants" className="flex-shrink-0 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors whitespace-nowrap">
                Learn more
              </Link>
            </div>

            <div className="flex gap-3">
              <Link href="/pricing" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                View full pricing →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 11 — ACCOUNTING PRINCIPLES + FAQ
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How records are kept</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built on accounting standards you can trust.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl">
                Your data isn&apos;t just stored — it&apos;s structured the way proper accounting demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Standard-compliant double entry",
                  desc: "Every transaction produces a debit and a credit. The ledger follows the same principles underpinning formal accounting systems worldwide.",
                },
                {
                  title: "Append-only records",
                  desc: "Posted entries are permanent. Nothing is silently overwritten. Your audit trail stays intact and complete.",
                },
                {
                  title: "Corrections via reversals",
                  desc: "Mistakes are fixed by posting a reversing journal entry, not by editing history. Auditors can trace every adjustment.",
                },
              ].map((t) => (
                <div key={t.title} className="p-6 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{t.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl pt-4">
              <h3 className="text-base font-bold text-zinc-900 mb-6">Common questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="replace-accountant">
                  <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                  <AccordionContent>
                    No. Finza gives your accountant a clean, complete ledger to work from instead of a pile of spreadsheets. They spend less time fixing data and more time advising your business. Many accountants in Ghana actively recommend Finza to clients specifically because the books arrive in good order.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="vat">
                  <AccordionTrigger>Does Finza handle Ghana VAT automatically?</AccordionTrigger>
                  <AccordionContent>
                    Yes. VAT (15%), NHIL (2.5%), and GETFund (2.5%) are calculated at the point of transaction and posted as separate ledger entries. GRA-ready VAT reports are always available — there is no end-of-month tax calculation step.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="errors">
                  <AccordionTrigger>What happens if I make an error?</AccordionTrigger>
                  <AccordionContent>
                    You post a reversing journal entry. The original entry stays in the ledger — the reversal corrects the effect. Your historical record remains untouched and fully auditable. This is the same standard followed in professional accounting practice.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="upgrade">
                  <AccordionTrigger>Can I upgrade or switch workspaces?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Workspaces can be added or changed as your business needs evolve. Each workspace is billed separately and maintains its own ledger — switching or adding one does not affect existing data.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="spreadsheets">
                  <AccordionTrigger>Can I migrate from spreadsheets?</AccordionTrigger>
                  <AccordionContent>
                    Yes. You start with a clean ledger and an opening balance entry. From that point forward, all transactions are posted automatically. You do not need to import historical spreadsheet data — most businesses open with an opening trial balance and move forward.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 12 — FINAL CTA
      ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-snug">
              Stop guessing your numbers.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Start from a brand you can trust for ledger discipline — then dive into{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-white underline underline-offset-2 hover:text-zinc-200">
                how Finza handles Ghana VAT and reporting
              </Link>
              {" "}when you&apos;re ready to compare in depth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                View demo →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">No card required · First month free · Cancel anytime</p>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/how-vat-works-ghana", label: "How VAT works in Ghana", desc: "Tax guide" },
          { href: "/blog", label: "Finza blog", desc: "Ledgers & VAT" },
        ]}
      />
      <Footer />
    </main>
  );
}
