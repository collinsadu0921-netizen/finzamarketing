import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting Software for Accountants in Ghana | Finza",
  description:
    "Finza gives accountants a dedicated workspace to manage Ghanaian client ledgers. Journal entries, period locking, reversal-based corrections, and client oversight — built for professional practice.",
  alternates: {
    canonical: "https://www.finza.africa/accountants",
  },
};

export default function AccountantsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Accountant Workspace
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for accountants managing Ghanaian clients.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza&apos;s Accountant Workspace is not a partner portal or a referral program. It is a purpose-built professional workspace — with the controls that real accounting practice requires: journal entries, period locking, reversal-based corrections, and structured client oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/pricing"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Start your 14-day free trial
              </a>
              <Link
                href="/demo"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors text-center"
              >
                Preview the accountant workspace
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY ACCOUNTANTS STRUGGLE WITH CLIENT BOOKS ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Why accountants struggle with client books.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  headline: "You receive spreadsheets that need to be rebuilt from scratch",
                  body: "Most Ghanaian SME clients hand over a spreadsheet at the end of the month — or quarter — that was never designed for accounting. You spend hours cleaning data before you can begin real work.",
                },
                {
                  headline: "VAT and tax levies have often been calculated incorrectly",
                  body: "Clients apply VAT at the wrong rate, miss NHIL and GETFund entirely, or bundle everything into one number. Correcting these before filing takes time that should not be necessary.",
                },
                {
                  headline: "Entries are edited instead of reversed",
                  body: "When a business owner finds a mistake, they edit the original entry. The audit trail is gone. You cannot reconstruct what happened or when — and you cannot explain it to GRA if challenged.",
                },
                {
                  headline: "There is no period locking",
                  body: "A client enters a January transaction in March. The comparative figures change. The previously reconciled period is now wrong. You have to close the books again.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-4 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
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

      {/* ── HOW FINZA HELPS ACCOUNTANTS ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza helps</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Professional controls built into the workspace.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl leading-relaxed">
                The Accountant Workspace gives you structured access to client ledgers — with the tools that professional work actually requires.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Client ledger oversight",
                  body: "Access your clients&apos; workspaces from a single accountant login. Review transactions, check balances, and export reports — without interfering with the client&apos;s day-to-day operations. Each client&apos;s ledger is isolated and separate.",
                },
                {
                  number: "02",
                  title: "Manual journal entries and adjustments",
                  body: "Post manual journal entries directly into the client ledger — adjustments, accruals, depreciation, reclassifications. Every entry is date-stamped, user-attributed, and permanently recorded. The ledger remains balanced at all times.",
                },
                {
                  number: "03",
                  title: "Period locking",
                  body: "Once you have reviewed and confirmed a period, lock it. No further entries can be posted to that period — by the client, by you, or by anyone. Closed books stay closed. Comparative figures do not change without your authorisation.",
                },
                {
                  number: "04",
                  title: "Reversal-based corrections",
                  body: "Corrections in Finza are posted as reversing journal entries. The original entry stays exactly as it was — the reversal posts the opposing side. Both entries are visible in the ledger. The audit trail is always complete. Nothing is deleted or overwritten.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6 p-7 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-zinc-200 bg-zinc-50 flex items-center justify-center text-xs font-extrabold text-zinc-500">
                    {item.number}
                  </div>
                  <div>
                    <p className="text-base font-bold text-zinc-900 mb-2">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── MULTI-CLIENT WORKFLOW ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Multi-client workflow</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Manage multiple clients from one workspace.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Your clients use Finza to run their business",
                  desc: "Each client runs their day-to-day in Finza — invoicing, expenses, payments — posted to the ledger as they work. Dedicated retail POS is on the roadmap alongside the same ledger engine.",
                },
                {
                  step: "Step 2",
                  title: "You access their ledger from your accountant workspace",
                  desc: "You log in once and navigate between client workspaces. You see the ledger as it stands — populated by the client's activity, structured and balanced.",
                },
                {
                  step: "Step 3",
                  title: "You review, adjust, and close the period",
                  desc: "Post any necessary adjustments, correct classification errors via reversals, confirm the trial balance, and lock the period. The client's historical records are now protected.",
                },
              ].map((step) => (
                <div key={step.step} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">{step.step}</p>
                  <p className="text-sm font-bold text-zinc-900 mb-2">{step.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5">
              <p className="text-sm font-semibold text-zinc-900 mb-1">What this means in practice</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Instead of receiving a spreadsheet at the end of the month, you receive a structured ledger that your client has been maintaining all month. The data is already categorised. VAT is already separated. The trial balance already balances. You verify, adjust what needs adjusting, and close — rather than starting from a blank page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── GHANA COMPLIANCE ── */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana compliance</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Ghana tax and reporting support.
              </h2>
              <p className="text-base text-zinc-600 max-w-xl leading-relaxed">
                Finza has Ghana&apos;s indirect tax structure built into its transaction engine — not bolted on at reporting time.
              </p>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Framework in effect</p>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Tax treatment shown here follows Ghana&apos;s rules effective 1 January 2026, including input tax deduction treatment for NHIL and GETFund.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "VAT separated at point of transaction",
                  desc: "VAT output and VAT input are posted to separate ledger accounts as each transaction is confirmed. When you open the VAT control account, it reflects all applicable transactions — nothing is missing, nothing is estimated.",
                },
                {
                  title: "NHIL and GETFund tracked separately",
                  desc: "The 2.5% NHIL and 2.5% GETFund levies are calculated and posted as separate liability entries. They are not bundled into VAT. Effective 1 January 2026, NHIL and GETFund are treated as input tax deductions under Ghana's revised VAT framework. Your VAT schedule and levy schedules remain distinct.",
                },
                {
                  title: "GRA-ready VAT report always available",
                  desc: "The VAT control report shows opening balance, output VAT collected, input VAT deductions, input levy deductions (NHIL and GETFund), and net VAT payable — formatted for GRA filing. Tax treatment follows Ghana's rules effective 1 January 2026. No manual assembly at quarter end.",
                },
                {
                  title: "Period-specific financial statements",
                  desc: "Extract the income statement, balance sheet, and trial balance for any period — any month, any quarter, any date range. Comparative periods available for review.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{item.title}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/ghana-vat-nhil-getfund" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                How Ghana VAT, NHIL and GETFund work in Finza →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Who this is for</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built for accounting professionals in Ghana.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  audience: "Accounting firms",
                  desc: "Small and mid-sized firms managing multiple SME clients across retail, services, and trading. The Accountant Workspace scales to the number of clients you manage — each isolated, each lockable.",
                },
                {
                  audience: "Freelance accountants and bookkeepers",
                  desc: "Independent practitioners managing a portfolio of clients on retainer. One login, multiple workspaces, period locking so closed books stay closed regardless of what the client does.",
                },
                {
                  audience: "Finance controllers and CFOs",
                  desc: "In-house finance professionals who want to work from a properly structured ledger — rather than inheriting a spreadsheet that needs to be rebuilt every month before meaningful analysis can begin.",
                },
              ].map((block) => (
                <div key={block.audience} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="inline-block rounded-md bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 mb-4 self-start">
                    {block.audience}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── PRICING BLOCK ── */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-zinc-800 bg-white p-8 flex flex-col md:flex-row items-start gap-8 justify-between">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Accountant Workspace</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-zinc-900">GHS 700</span>
                  <span className="text-sm text-zinc-500">/ month</span>
                </div>
                <p className="text-sm font-semibold text-emerald-600">First month free — no card required</p>
                <ul className="space-y-2.5 pt-2">
                  {[
                    "Access to all client workspaces under your account",
                    "Manual journal entries and adjustments",
                    "Period locking — freeze closed books",
                    "Reversal-based corrections with full audit trail",
                    "GRA-ready VAT reports for each client",
                    "Real-time income statement, balance sheet, trial balance",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-700">
                      <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto md:min-w-[200px]">
                <a
                  href="/pricing"
                  className="block w-full rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
                >
                  Start your 14-day free trial
                </a>
                <Link
                  href="/demo"
                  className="block w-full rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors"
                >
                  Preview the workspace
                </Link>
                <Link href="/pricing" className="text-xs text-center text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-2">
                  Compare all workspace plans
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A workspace built for professional practice.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Not a partner program. Not a referral scheme. A real accountant workspace with the controls your practice actually needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="/pricing"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Start your 14-day free trial
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                Preview the workspace →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">GHS 700 / month · First month free · Cancel anytime</p>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/security", label: "Security", desc: "Integrity & audit" },
          { href: "/blog", label: "Blog", desc: "Practice notes" },
        ]}
      />
      <Footer />
    </main>
  );
}
