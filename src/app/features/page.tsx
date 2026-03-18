import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — Finza",
  description:
    "Finza is a ledger-first financial system. Every transaction posts a balanced journal entry automatically. VAT, NHIL, and GETFund handled natively. Reports generated from the same ledger.",
  alternates: {
    canonical: "https://finza.africa/features",
  },
};

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ── PAGE HERO ── */}
      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              How it works under the hood
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Finza is structurally different.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Most accounting tools record transactions and hope the reports add up. Finza starts with the ledger. Everything else — invoices, POS, reports — is built on top of it.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SECTION 1: LEDGER CORE ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The foundation</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                One ledger. Everything flows into it.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  All financial data in Finza — sales, invoices, expenses, payments, stock adjustments — flows into a single general ledger. There is no separate system for "reports" and another for "transactions."
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Reports are generated from the trial balance of that same ledger. What you see on your income statement is derived from the same entries that recorded the original transactions.
                </p>
                <ul className="space-y-2.5 pt-2">
                  {[
                    "All financial data flows into one ledger",
                    "Reports come from the trial balance — not a separate database",
                    "The ledger is always balanced: debits equal credits",
                    "No re-entry between modules",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-zinc-700">
                      <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ledger structure diagram */}
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Architecture</p>
                {[
                  { label: "Sales / POS", arrow: true },
                  { label: "Invoices / AR", arrow: true },
                  { label: "Expenses", arrow: true },
                  { label: "Stock Adjustments", arrow: true },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm">
                      {row.label}
                    </div>
                    <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="rounded-md border border-zinc-900 bg-[#0F172A] px-4 py-2.5 text-sm font-bold text-white shadow-sm whitespace-nowrap">
                      General Ledger
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t border-zinc-200 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border border-zinc-900 bg-[#0F172A] px-4 py-2.5 text-sm font-bold text-white shadow-sm text-center">
                      General Ledger
                    </div>
                    <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="flex-1 rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm whitespace-nowrap">
                      Trial Balance → Reports
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: REAL-TIME POSTING ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Auto-posting engine</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Every action posts in real time.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                You record a transaction. Finza writes the journal entries immediately — both sides of every entry, correctly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  trigger: "Invoice raised",
                  entries: [
                    { account: "Accounts Receivable", side: "Dr" },
                    { account: "Revenue", side: "Cr" },
                    { account: "VAT Output", side: "Cr" },
                  ],
                },
                {
                  trigger: "Payment received",
                  entries: [
                    { account: "Cash / Bank", side: "Dr" },
                    { account: "Accounts Receivable", side: "Cr" },
                  ],
                },
                {
                  trigger: "POS sale",
                  entries: [
                    { account: "Cash / Bank", side: "Dr" },
                    { account: "Revenue", side: "Cr" },
                    { account: "Inventory", side: "Cr" },
                    { account: "COGS", side: "Dr" },
                  ],
                },
              ].map((flow) => (
                <div key={flow.trigger} className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-zinc-100 bg-zinc-50">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{flow.trigger}</p>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    {flow.entries.map((e) => (
                      <div key={e.account} className="flex items-center justify-between">
                        <span className="text-sm text-zinc-700">{e.account}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${e.side === "Dr" ? "bg-blue-50 text-blue-700" : "bg-zinc-100 text-zinc-600"}`}>
                          {e.side}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-500 pt-2">
              These entries are written the moment you confirm the transaction. The ledger is never out of date.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: GHANA TAX ENGINE ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tax engine</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Built for Ghana's indirect tax structure.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                Ghana's tax system applies multiple levies at point of transaction. Finza calculates and separates each one — automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "VAT",
                  rate: "15%",
                  desc: "Standard or Flat Rate Scheme. Input and output tax tracked separately. Net VAT position always current.",
                },
                {
                  name: "NHIL",
                  rate: "2.5%",
                  desc: "National Health Insurance Levy. Calculated and posted as a separate liability line on every applicable transaction.",
                },
                {
                  name: "GETFund",
                  rate: "2.5%",
                  desc: "Ghana Education Trust Fund levy. Separated from VAT and tracked as its own ledger account.",
                },
              ].map((t) => (
                <div key={t.name} className="p-6 rounded-xl border border-zinc-200 bg-zinc-50">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-lg font-extrabold text-zinc-900">{t.name}</p>
                    <span className="text-xs font-bold text-zinc-500 bg-white border border-zinc-200 rounded-full px-3 py-1">{t.rate}</span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-1">GRA-ready VAT report</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Your VAT control account is always up to date. At period end, the report shows opening balance, VAT collected, VAT reversed, and closing balance — ready for filing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: REPORTING ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Financial reporting</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Reports generated from the same ledger.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                There is no separate report-building step. Every report reads from the general ledger directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Profit & Loss",
                  desc: "Revenue, cost of goods, gross profit, expenses, and net income — drawn from actual ledger accounts, not manually assembled.",
                  lines: ["Revenue accounts", "COGS accounts", "Expense accounts", "Net income"],
                },
                {
                  title: "Balance Sheet",
                  desc: "Assets, liabilities, and equity at any point in time. Always balanced because the ledger underneath it is balanced.",
                  lines: ["Current assets", "Fixed assets", "Current liabilities", "Equity"],
                },
                {
                  title: "Trial Balance",
                  desc: "The source document for all other reports. Lists every account with its debit or credit balance. Available at any time.",
                  lines: ["All active accounts", "Debit / Credit columns", "Always sums to zero", "Exportable"],
                },
              ].map((r) => (
                <div key={r.title} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <p className="text-base font-bold text-zinc-900 mb-2">{r.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">{r.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {r.lines.map((l) => (
                      <li key={l} className="flex items-center gap-2 text-xs text-zinc-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 flex-shrink-0" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-500">
              Additional reports: Aged Receivables, VAT Control, Account Statements. All sourced from the same ledger.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SECTION 5: WORKSPACES ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workspace types</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Two operating modes. One ledger.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Retail */}
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Retail Workspace</p>
                  <p className="text-base font-bold text-zinc-900 mb-1">For inventory-based businesses</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Designed for businesses that sell physical goods. POS, stock management, and accounting work as one system.
                  </p>
                </div>
                <div className="px-7 py-6 space-y-5">
                  {[
                    {
                      label: "Point of Sale (POS)",
                      desc: "Each sale posts revenue, cash, VAT output, inventory reduction, and COGS to the ledger in one step.",
                    },
                    {
                      label: "Inventory tracking",
                      desc: "Stock levels update in real time with every sale and purchase. Inventory value is reflected in the balance sheet.",
                    },
                    {
                      label: "COGS calculation",
                      desc: "Cost of goods sold is posted automatically when a sale is made — no manual calculation at month end.",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service */}
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Service Workspace</p>
                  <p className="text-base font-bold text-zinc-900 mb-1">For agencies and service providers</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Designed for businesses that bill for time, services, or retainers. Invoicing and accounts receivable feed the ledger directly.
                  </p>
                </div>
                <div className="px-7 py-6 space-y-5">
                  {[
                    {
                      label: "Invoicing",
                      desc: "Raising an invoice creates a receivable in accounts receivable and records revenue — without any separate journal step.",
                    },
                    {
                      label: "Accounts receivable",
                      desc: "Outstanding invoices, payment history, and aged balances are tracked against the ledger in real time.",
                    },
                    {
                      label: "Payment recording",
                      desc: "When a client pays, the receivable clears and cash is posted. The outstanding balance updates immediately.",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/demo" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                Try a workspace demo
              </Link>
              <Link href="/#pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                View pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 6: ACCOUNTANT MODE ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Accountant workspace</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Structured access for accounting professionals.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl leading-relaxed">
                Accountants get a dedicated workspace to manage client ledgers — without disrupting the business owner's day-to-day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                {
                  title: "Client access",
                  desc: "Read access to client workspaces. Review transactions and balances without the ability to alter business operations.",
                },
                {
                  title: "Journal entries",
                  desc: "Post manual journal entries — adjustments, accruals, corrections — directly into the client ledger.",
                },
                {
                  title: "Period close",
                  desc: "Lock a period once books are confirmed. Prevents any further entries for that month or year — by anyone.",
                },
                {
                  title: "Reversals & adjustments",
                  desc: "Corrections are posted as reversing entries. The original entry stays. The audit trail is never modified.",
                },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{f.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-zinc-900">Accountant Workspace — 700 GHS / month</p>
                <p className="text-sm text-zinc-500 mt-0.5">Manage multiple client ledgers from one portal. First month free.</p>
              </div>
              <Link href="/accountants" className="flex-shrink-0 rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors">
                Learn more
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              See it in action.
            </h2>
            <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Choose a workspace, enter your business name, and walk through a real demo of how the ledger works.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/demo"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Try the demo
              </Link>
              <a
                href="https://app.finza.africa/signup"
                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Get started free →
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
