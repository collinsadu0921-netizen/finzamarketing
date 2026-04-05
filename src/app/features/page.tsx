import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { HowFinzaHelpsDayToDay, WhyBusinessesChooseFinza } from "@/components/seo-marketing-blocks";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Features — Invoices, Reports & Finza Assist (Ghana VAT, WHT, PAYE) | Finza",
  description:
    "Invoices, quotes, expenses, and reports in Ghana cedis. Finza Assist: in-app Ghana-aware copilot for VAT, WHT, PAYE, and bookkeeping—read-only workspace data and server-verified numbers; does not post or change your ledger automatically. Separate onboarding assistant.",
  alternates: {
    canonical: "https://www.finza.africa/features",
  },
};

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />

      {/* ── PAGE HERO ── */}
      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Finza · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Run invoices, quotes, expenses, and reports in one place—in GHS—with Finza Assist
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza helps <strong className="text-zinc-900">service businesses and accountants in Ghana</strong> manage day-to-day money work: send invoices online, turn quotes into bills, record spending, and open reports without rebuilding spreadsheets.
            </p>
            <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
              See{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing in GHS
              </Link>
              , dive into{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              , or compare{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing
              </Link>
              ,{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotations
              </Link>
              ,{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping
              </Link>
              , and{" "}
              <Link href="/payroll-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                payroll for Ghana teams
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT FINZA DOES (plain language summary) ── */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza does</p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                In plain language.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  headline: "Invoices and quotes in Ghana cedis",
                  body: "Send invoices online, track unpaid amounts in GHS, and move from approved quotes to invoices without retyping.",
                },
                {
                  headline: "Expenses you can categorize",
                  body: "Record what the business spent, when, and why—so week-to-week bookkeeping stays honest.",
                },
                {
                  headline: "Reports when you need them",
                  body: "Open profit and position views without waiting for someone to merge files. Built for owners who want clarity and accountants who need organized clients.",
                },
                {
                  headline: "Ghana tax lines where applicable",
                  body: "VAT, NHIL, and GETFund can be shown separately on activity and documents when your business requires them. What applies depends on registration and supply type—confirm with your accountant or GRA.",
                },
                {
                  headline: "Monthly payroll — PAYE, SSNIT, payslips",
                  body: "Run approved monthly payroll with Ghana PAYE and SSNIT logic, handle bonus and overtime where your setup requires it, and send payslips by email or WhatsApp. Records can align with the rest of your accounting.",
                },
                {
                  headline: "Finza Assist",
                  body: "In-app Ghana-aware copilot for VAT, WHT, PAYE, and bookkeeping—read-only workspace data and server-verified numbers. Helps you understand and act without posting entries or changing records automatically. Full detail in the Finza Assist section below.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-4 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
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

      {/* ── FINZA ASSIST & ONBOARDING ── */}
      <section id="finza-assist" className="scroll-mt-28 border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Finza Assist</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Ghana-aware copilot—read-only data, you stay in control</h2>
              <p className="max-w-3xl text-base leading-relaxed text-zinc-600">
                <strong className="text-zinc-900">Finza Assist</strong> is an in-app, Ghana-aware copilot: it explains{" "}
                <strong className="text-zinc-900">VAT, withholding tax (WHT), PAYE, and bookkeeping</strong> using{" "}
                <strong className="text-zinc-900">read-only workspace data</strong> and <strong className="text-zinc-900">server-verified</strong> lookups when numbers must be right. It helps you understand and choose your next step{" "}
                <strong className="text-zinc-900">without posting entries or changing records automatically</strong>. It sees{" "}
                <strong className="text-zinc-900">where you are in the app</strong> and a client snapshot (invoices, bills, customers, suppliers, accounts, jobs, high-level totals)—when figures matter, tools on the server are authoritative. It can <strong className="text-zinc-900">navigate</strong> using routes Finza defines for the assistant. This is <strong className="text-zinc-900">educational support—not tax or legal advice</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50/80 p-8">
                <h3 className="text-lg font-bold text-zinc-900">What Assist can look up for you</h3>
                <p className="text-sm text-zinc-600">
                  Typical read-only lookups (exact availability follows your permissions and plan):
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-700">
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Dashboard-style summary</strong>—this month’s payments vs expenses, invoice status counts, overdue receivables (approximate), unpaid supplier bills (approximate).{" "}
                      <em className="text-zinc-500">Not a substitute for full payroll detail in that summary.</em>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Search</strong> invoices (number and/or customer), bills (number, supplier, notes), and customers (name or email).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Open receivables</strong>, optionally overdue only; <strong className="text-zinc-900">full detail</strong> for an invoice when you are on that invoice screen.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Tax profile</strong>—VAT scheme, CIT code, TIN, currency, trading and legal name.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Payroll runs</strong>—summaries and optional per-staff lines.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Expense totals by category</strong> for a month.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0F172A]">·</span>
                    <span>
                      <strong className="text-zinc-900">Profit &amp; loss</strong> and <strong className="text-zinc-900">balance sheet</strong> summaries from the ledger when accounting is initialized and you have report access.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-zinc-900">What Assist does not do</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600">
                    <li className="flex gap-2">
                      <span className="text-red-600">✕</span>
                      It does <strong className="text-zinc-900">not</strong> create, edit, or post transactions. Tools are read-only except that you can still attach a receipt in the UI.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✕</span>
                      <span>
                        <strong className="text-zinc-900">Receipt OCR</strong> reads the image and may add <strong className="text-zinc-900">suggested text</strong> to the chat—nothing is booked until you save an expense or bill yourself.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✕</span>
                      <span>
                        <strong className="text-zinc-900">Draft handoff</strong>: the model may suggest links that <strong className="text-zinc-900">open create screens with fields pre-filled</strong>. You review every line and hit save—there is no auto-save from Assist.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8">
                  <h3 className="text-lg font-bold text-zinc-900">Onboarding assistant (separate)</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    While you set up Finza, a <strong className="text-zinc-900">different assistant</strong> uses your business profile (name, industry, country, currency) and current onboarding step to give short, structured guidance—what it means, what to click, and common mistakes. It does <strong className="text-zinc-900">not</strong> use Finza Assist’s ledger tools or live accounting queries.
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-zinc-500">
                  Client-side context can be briefly out of date; Assist is designed to prefer verified tools when you need numbers you can rely on. Fair use limits apply to assistant and tool rounds per minute.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── BEST FOR BUSINESSES THAT NEED ── */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Best fit</p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Best for businesses that need:
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Service companies in Ghana that invoice clients every week",
                "Small businesses that want to track unpaid invoices in GHS",
                "Teams that quote first, then bill—without two versions of the truth",
                "Owners who want expense tracking without a second app",
                "Shops planning for POS and stock — retail flows are on our roadmap",
                "Accountants managing Ghanaian clients who need cleaner files",
                "Anyone who wants tax summaries aligned with real activity—where applicable",
                "Businesses tired of rebuilding the same spreadsheet each month",
                "Employers who need monthly payroll with clear PAYE and SSNIT—not another generic HR suite",
                "Teams that want Finza Assist—Ghana tax and books Q&A plus live lookups, without giving up control of the ledger",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-zinc-200 bg-zinc-50">
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

      {/* ── SECTION 1: ONE LEDGER ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The foundation</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                One general ledger. Everything flows into it.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  All financial data in Finza — sales, invoices, expenses, payments, stock adjustments — flows into a single general ledger. There is no separate system for &quot;reports&quot; and another for &quot;transactions.&quot;
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Reports are generated from the trial balance of that same ledger. Your income statement is derived from the same entries that recorded the original transactions. There is no re-assembly, no export-to-Excel step.
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

              <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Data flow</p>
                {[
                  { label: "Sales / POS" },
                  { label: "Invoices / Accounts Receivable" },
                  { label: "Payroll" },
                  { label: "Expenses" },
                  { label: "Stock Adjustments" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm">
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
                    <div className="flex-1 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm whitespace-nowrap">
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
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Auto-posting engine</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Your books update the moment you record a transaction.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                You record a transaction. Finza writes the journal entries immediately — both sides of every entry, correctly. No delays. No overnight sync. No end-of-month catch-up.
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
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana VAT and tax</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Ghana tax handling—VAT, NHIL, and GETFund where applicable
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                Many Ghanaian businesses show <strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> on invoices and activity. Finza supports common tax line presentation when your registration and supply type require it. Always confirm what applies with your accountant or GRA.
              </p>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Note</p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Tax rules change. Finza is updated to reflect Ghana frameworks as described on our tax guides; your business may have exemptions or different treatment—professional advice is essential.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "VAT",
                  rate: "15%",
                  desc: "Standard or Flat Rate Scheme. Input and output tax tracked separately. Net VAT position always current. GRA-ready report available at any time.",
                },
                {
                  name: "NHIL",
                  rate: "2.5%",
                  desc: "National Health Insurance Levy. Calculated and posted as a separate liability line on every applicable transaction. Not bundled with VAT. Treated as an input tax deduction effective 1 January 2026.",
                },
                {
                  name: "GETFund",
                  rate: "2.5%",
                  desc: "Ghana Education Trust Fund levy. Separated from VAT and tracked as its own ledger account. Treated as an input tax deduction effective 1 January 2026.",
                },
              ].map((t) => (
                <div key={t.name} className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-lg font-extrabold text-zinc-900">{t.name}</p>
                    <span className="text-xs font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">{t.rate}</span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-1">GRA-ready VAT report</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Your VAT control account is always up to date. At period end, the report shows opening balance, VAT collected, VAT reversed, and closing balance — ready for filing with GRA. No manual assembly required.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/vat-software-ghana" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                VAT software for Ghana →
              </Link>
              <Link href="/ghana-vat-nhil-getfund" className="text-sm font-semibold text-zinc-500 underline underline-offset-4 hover:text-zinc-900 transition-colors">
                How Ghana VAT works
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: FINANCIAL REPORTS ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Financial reporting</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Financial reports — always current, never assembled by hand.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                There is no separate report-building step. Every report reads from the general ledger directly. The moment a transaction is posted, every report that uses that account updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Profit & Loss Statement",
                  desc: "Revenue, cost of goods, gross profit, expenses, and net income — drawn from actual ledger accounts, not manually assembled. Always current.",
                  lines: ["Revenue accounts", "COGS accounts", "Expense accounts", "Net income"],
                },
                {
                  title: "Balance Sheet",
                  desc: "Assets, liabilities, and equity at any point in time. Always balanced because the ledger underneath it is always balanced.",
                  lines: ["Current assets", "Fixed assets", "Current liabilities", "Equity"],
                },
                {
                  title: "Trial Balance",
                  desc: "The source document for all other reports. Lists every account with its debit or credit balance. Available instantly, at any point in time.",
                  lines: ["All active accounts", "Debit / Credit columns", "Always sums to zero", "Exportable"],
                },
              ].map((r) => (
                <div key={r.title} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-zinc-50">
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

      {/* ── SECTION 4B: PAYROLL ── */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Payroll</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Monthly payroll built for Ghana</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
                Finza is not a global payroll platform or a full HR system. It is for Ghana businesses that need correct monthly payroll: staff profiles, PAYE and SSNIT based on your setup, approval before payroll is official, and payslips your people can open on the channels they already use.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                "One monthly run with draft review before you approve",
                "PAYE using Ghana progressive bands where applicable to taxable income",
                "Employee and employer SSNIT from basic salary, based on payroll inputs",
                "Bonus and overtime handled separately when the payroll case calls for it",
                "Payslips after approval—by email or WhatsApp",
                "Salary advances and repayments visible in the same workflow",
              ].map((line) => (
                <div key={line} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-zinc-700 leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/payroll-software-ghana"
                className="inline-flex w-fit rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Payroll software Ghana
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
              >
                View plans in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 5: WORKSPACES ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workspace types</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Choose the workspace that fits your business.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl">
                Service businesses can use Finza today on published plans. Retail POS and inventory are on the roadmap — same ledger engine when they ship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Live: invoicing & services */}
              <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Invoicing &amp; services — available now
                  </p>
                  <p className="text-base font-bold text-zinc-900 mb-1">Plans from GHS 149/month</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    For agencies, consultancies, contractors, and anyone who quotes and invoices clients. AR, payments, and reports read from the same ledger — see{" "}
                    <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                      Pricing
                    </Link>{" "}
                    for Essentials, Professional, and Business.
                  </p>
                </div>
                <div className="px-7 py-6 space-y-5">
                  {[
                    {
                      label: "Invoicing with automatic AR posting",
                      desc: "When you issue or send an invoice (not while it stays draft), it posts receivables and revenue to the ledger—no separate journal step.",
                    },
                    {
                      label: "Accounts receivable tracking",
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

              {/* Roadmap: retail */}
              <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/80 overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Retail &amp; POS — on the roadmap
                  </p>
                  <p className="text-base font-bold text-zinc-900 mb-1">Shops, pharmacies, and stock-led businesses</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    We&apos;re building POS, inventory, and COGS on the same general ledger. Not live in app yet — no pricing advertised until launch.
                  </p>
                </div>
                <div className="px-7 py-6 space-y-5">
                  {[
                    {
                      label: "Point of Sale (POS)",
                      desc: "Planned: each sale posts revenue, cash, VAT, stock movement, and COGS in one flow.",
                    },
                    {
                      label: "Inventory tracking",
                      desc: "Planned: stock levels and balance-sheet inventory tied to real sales and purchases.",
                    },
                    {
                      label: "Cost of Goods Sold (COGS)",
                      desc: "Planned: COGS posted when goods sell — not a manual month-end rebuild.",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <svg className="h-4 w-4 text-zinc-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800">{item.label}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-7 pb-7">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
                  >
                    Contact us about retail needs →
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/demo" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                Try the interactive demo
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                View pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 6: ACCOUNTANT WORKSPACE ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Accountant workspace</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Professional tools for accountants managing Ghanaian clients.
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl leading-relaxed">
                Accountants get a dedicated workspace to manage client ledgers — with the controls that professional practice requires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                {
                  title: "Client ledger access",
                  desc: "Review client transactions and balances. Post journal entries. Manage multiple clients from one login.",
                },
                {
                  title: "Manual journal entries",
                  desc: "Post adjustments, accruals, and corrections directly into the client ledger — with full audit trail.",
                },
                {
                  title: "Period locking",
                  desc: "Lock a period once books are confirmed. Prevents any further entries for that month or year — by anyone.",
                },
                {
                  title: "Reversals — not edits",
                  desc: "Corrections are posted as reversing entries. The original entry stays. The audit trail is never modified.",
                },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{f.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-zinc-900">Accountant Workspace — GHS 700 / month</p>
                <p className="text-sm text-zinc-500 mt-0.5">Manage multiple client ledgers from one portal. First month free.</p>
              </div>
              <Link href="/accountants" className="flex-shrink-0 rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors">
                Learn more about the accountant workspace
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <WhyBusinessesChooseFinza />

      <HowFinzaHelpsDayToDay className="bg-zinc-50" />

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
                href="/pricing"
                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Get started free →
              </a>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          {
            href: "/quotation-software-ghana",
            label: "Quotation software Ghana",
            desc: "Quote to invoice",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
