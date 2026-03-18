import Link from "next/link";
import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza — Real-Time Financial System for Ghanaian Businesses",
  description:
    "Finza is a ledger-first financial system built for Ghana. Every sale, invoice, and expense creates a balanced journal entry automatically. VAT, NHIL, and GETFund handled natively.",
  alternates: {
    canonical: "https://finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ── 1. HERO ── */}
      <section className="pt-28 pb-24 w-full border-b border-zinc-100">
        <Container>
          <div className="mx-auto max-w-[760px] space-y-7 text-center flex flex-col items-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Ledger-first · Ghana-built
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl leading-[1.1]">
              Know your real numbers —<br className="hidden sm:block" /> in real time.
            </h1>

            <p className="max-w-[600px] text-lg text-zinc-600 sm:text-xl leading-relaxed">
              Finza is a <strong className="text-zinc-900 font-semibold">ledger-first financial system</strong>. Every sale,
              invoice, and expense creates a <strong className="text-zinc-900 font-semibold">balanced journal entry automatically</strong> — so
              your books are always accurate, never behind.
            </p>

            <p className="text-sm text-zinc-500 max-w-[480px] leading-relaxed">
              Built with Ghana tax structure natively embedded — VAT, NHIL, and GETFund calculated at the point of transaction. No manual adjustments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup"
                className="rounded-md bg-[#0F172A] px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors w-full sm:w-auto text-center"
              >
                Start free — no card required
              </a>
              <Link
                href="/demo"
                className="rounded-md bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors w-full sm:w-auto text-center"
              >
                View demo
              </Link>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="py-10 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                ),
                label: "Ghana tax structure",
                sub: "VAT, NHIL, GETFund",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                label: "Real-time posting",
                sub: "Ledger updates instantly",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                label: "Ledger-based reporting",
                sub: "Statements always current",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                label: "Audit-ready records",
                sub: "Append-only, traceable",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2 p-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                <p className="text-xs text-zinc-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. PROBLEM ── */}
      <section className="py-28 bg-white border-b border-zinc-100">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Invoices",
                  desc: "Created manually — sometimes late, sometimes forgotten.",
                },
                {
                  label: "Bank records",
                  desc: "Cash comes in and out with no automatic categorisation.",
                },
                {
                  label: "Financial reports",
                  desc: "Prepared separately, once a month, by hand — or not at all.",
                },
              ].map((p) => (
                <div key={p.label} className="p-6 rounded-lg border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{p.label}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-red-100 bg-red-50 px-6 py-5">
              <p className="text-sm font-semibold text-red-800 leading-relaxed">
                ⚠️ Mistakes are found during the audit — when it's too late. By then, correcting them costs more than the error did.
              </p>
            </div>

            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
              Most businesses don't struggle with revenue. They struggle with knowing
              <strong className="text-zinc-900"> what they actually made, what they owe in tax, and whether their numbers are correct</strong> — until a professional forces the question.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. SOLUTION (CORE) ── */}
      <section className="py-28 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza works</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl leading-snug">
                One system. One ledger.<br />Always in balance.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 mb-1">Every action creates a balanced journal entry</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    A sale, an expense, a stock purchase — Finza automatically records the corresponding debit and credit. The ledger is always balanced. Always.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 mb-1">No end-of-month fixing</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Because the ledger is written in real time, your month-end close is a confirmation — not a correction marathon. Reports are always live, not a project.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 mb-1">Reports flow directly from the ledger</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Your income statement, balance sheet, and VAT summary are generated directly from the same source of truth — no re-entry, no reconciliation step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. FEATURES (CONDENSED) ── */}
      <section className="py-28 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What it does</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built for how Ghanaian businesses actually operate.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-time ledger posting",
                  desc: "Every transaction is posted immediately. No batch processing, no overnight updates — your books reflect reality right now.",
                },
                {
                  title: "Ghana tax handling",
                  desc: "VAT, NHIL, and GETFund are calculated at the point of transaction, separated correctly, and reported in GRA-ready format.",
                },
                {
                  title: "Reports from the ledger",
                  desc: "Income statement, balance sheet, and aged receivables are live at all times — generated directly from the general ledger, not assembled manually.",
                },
                {
                  title: "Retail and Service support",
                  desc: "Retail businesses get POS and inventory tracking. Service businesses get invoicing and accounts receivable. Both post to the same ledger.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="h-5 w-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1">{f.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. HOW IT WORKS ── */}
      <section className="py-28 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The flow</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                From transaction to financial statement — automatically.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Run your business",
                  desc: "Make a sale, raise an invoice, record an expense. Use Finza exactly as you'd use any daily tool.",
                },
                {
                  step: "02",
                  title: "Finza posts automatically",
                  desc: "Behind the scenes, every action writes a balanced journal entry to your general ledger. No input needed from you.",
                },
                {
                  step: "03",
                  title: "Reports update instantly",
                  desc: "Your income statement, balance sheet, and VAT position reflect the latest data — always, without waiting.",
                },
                {
                  step: "04",
                  title: "Close your books",
                  desc: "At period end, lock the ledger. Historical records are frozen. Corrections happen via reversals, not deletions.",
                },
              ].map((s) => (
                <div key={s.step} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="text-4xl font-extrabold text-zinc-100 mb-5 leading-none">{s.step}</div>
                  <p className="text-sm font-bold text-zinc-900 mb-2">{s.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. MODULE SPLIT ── */}
      <section className="py-28 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workspaces</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                One system. Two workspace types.
              </h2>
              <p className="text-base text-zinc-600 max-w-2xl">
                Choose the workspace that matches your business model. Both post to the same ledger engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Retail */}
              <div className="flex flex-col p-8 rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 rounded-md bg-white border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-700 shadow-sm mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Retail Workspace
                  </div>
                  <p className="text-sm font-bold text-zinc-900 mb-2">For inventory-based and point-of-sale businesses</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Manage stock, process sales at point of sale, and let Finza handle the accounting behind every transaction.
                  </p>
                </div>
                <ul className="space-y-3 mb-7 flex-1">
                  {[
                    "POS sales post directly to the ledger",
                    "Inventory tracked with automatic COGS entries",
                    "VAT collected, separated, and reported automatically",
                  ].map((b) => (
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
                    <span className="text-2xl font-extrabold text-zinc-900">250 GHS</span>
                    <span className="text-sm text-zinc-500 ml-1.5">/ month</span>
                  </div>
                  <Link href="/demo" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors underline underline-offset-4">
                    See demo →
                  </Link>
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col p-8 rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 rounded-md bg-white border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-700 shadow-sm mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Service Workspace
                  </div>
                  <p className="text-sm font-bold text-zinc-900 mb-2">For agencies, consultants, and service providers</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Raise invoices, track payments, and manage expenses — all flowing into a live, always-balanced ledger.
                  </p>
                </div>
                <ul className="space-y-3 mb-7 flex-1">
                  {[
                    "Invoices post to accounts receivable automatically",
                    "Expense entries create immediate ledger records",
                    "Aged receivables always current — no manual chasing",
                  ].map((b) => (
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
                    <span className="text-2xl font-extrabold text-zinc-900">200 GHS</span>
                    <span className="text-sm text-zinc-500 ml-1.5">/ month</span>
                  </div>
                  <Link href="/demo" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors underline underline-offset-4">
                    See demo →
                  </Link>
                </div>
              </div>
            </div>

            {/* Accountant add-on note */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="text-sm font-bold text-zinc-900">Accountant Workspace</p>
                <p className="text-sm text-zinc-600 mt-0.5">For accounting professionals managing multiple client ledgers. Period locking, journal review, and client oversight in one portal.</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="text-sm font-bold text-zinc-900 whitespace-nowrap">700 GHS / mo</span>
                <Link href="/accountants" className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors whitespace-nowrap">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. TRUST / STRUCTURE ── */}
      <section className="py-28 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How records are kept</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built on accounting standards you can trust.
              </h2>
              <p className="text-base text-zinc-600 max-w-2xl">
                Your data isn't just stored — it's structured the way proper accounting demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Standard-compliant double entry",
                  desc: "Every transaction produces a debit and a credit. Finza's ledger engine follows the same principles underpinning all formal accounting systems.",
                },
                {
                  title: "Append-only records",
                  desc: "Posted entries are permanent. Nothing gets silently overwritten. If you need to adjust, you create a reversal — just as an auditor would expect.",
                },
                {
                  title: "Corrections via reversals, not deletion",
                  desc: "Mistakes are fixed by posting a reversing journal entry, not by editing history. Your audit trail stays intact and complete.",
                },
              ].map((t) => (
                <div key={t.title} className="p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{t.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-zinc-900 mb-6">Common questions</h3>
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                    <AccordionContent>
                      No. Finza gives your accountant a clean, complete ledger to work from instead of a pile of spreadsheets. They spend less time fixing data and more time advising your business.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Does Finza handle Ghana VAT automatically?</AccordionTrigger>
                    <AccordionContent>
                      Yes. VAT, NHIL, and GETFund are calculated at the point of transaction and separated correctly in your ledger. GRA-ready VAT reports are always available.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I make an error?</AccordionTrigger>
                    <AccordionContent>
                      You post a reversing journal entry. The original entry stays in the ledger — the reversal corrects the effect. Your historical record remains untouched and auditable.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I upgrade or switch workspaces?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Workspaces can be added or changed as your business needs evolve. Each workspace is billed separately.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-28 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-7">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-snug">
              Stop guessing your numbers.
            </h2>
            <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
              A real-time ledger that keeps itself balanced — so you always know exactly where you stand financially.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Get started free
              </a>
              <Link
                href="/demo"
                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                View demo →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-2">No card required · First month free · Cancel anytime</p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
