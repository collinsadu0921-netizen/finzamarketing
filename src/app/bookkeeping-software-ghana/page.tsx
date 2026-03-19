import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Bookkeeping Software for Ghana | Finza",
  description:
    "Move from manual books and spreadsheets to a live accounting ledger. Finza is bookkeeping software for Ghanaian businesses — real-time, always balanced, with Ghana VAT built in.",
  alternates: {
    canonical: "https://www.finza.africa/bookkeeping-software-ghana",
  },
};

export default function BookkeepingSoftwareGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Bookkeeping software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Bookkeeping software for Ghanaian businesses.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza replaces manual bookkeeping and spreadsheets with a live accounting ledger. Every transaction is recorded with a balanced double-entry journal entry — automatically. Your books are never behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Why manual bookkeeping fails</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                The problem with spreadsheet bookkeeping in Ghana.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Spreadsheets are the most common bookkeeping tool used by small and growing businesses in Ghana. They are flexible, familiar, and free. They are also not accounting systems — and the difference matters more than most business owners realise.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              A proper bookkeeping system records every transaction with a double-entry journal — a debit and a credit that always balance. A spreadsheet records rows of numbers. The spreadsheet cannot tell you whether your debits equal your credits. It cannot enforce Ghana&apos;s tax separation requirements. It cannot produce a trial balance. When something goes wrong, there is no way to trace it.
            </p>
            <div className="space-y-4">
              {[
                {
                  headline: "Spreadsheets break silently",
                  body: "A wrong formula, a deleted row, or a column misaligned — spreadsheet errors are often invisible until the books are being reviewed by an accountant or auditor. By then, the damage is done and the correction is expensive.",
                },
                {
                  headline: "There is no real-time picture",
                  body: "Spreadsheet bookkeeping is always retrospective. You know where you stood last month. You do not know where you stand today. The income statement, the bank balance, the receivables — all of it requires someone to sit down and update the spreadsheet.",
                },
                {
                  headline: "VAT and levies are handled poorly",
                  body: "Ghana's VAT, NHIL, and GETFund must be tracked separately. Spreadsheets do not enforce this. Most businesses apply a single tax percentage at the end of the period — which is both incorrect accounting and potentially non-compliant with GRA requirements.",
                },
                {
                  headline: "Month-end is an ordeal",
                  body: "When the accountant arrives to close the books, they are often starting from a spreadsheet that was not designed for accounting. They spend hours cleaning, reconciling, and rebuilding — rather than simply reviewing.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
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
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Moving to a live ledger</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                From manual books to a live accounting system.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza replaces the spreadsheet with a structured general ledger. When you record a sale, an invoice, an expense, or a payment, Finza writes the correct double-entry journal entry immediately. Both sides — debit and credit — are posted at the same time. The ledger stays balanced. Your books are always current.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              This is not just a technical distinction. It means that at any point in time, you can open your income statement and see what your business made this week, this month, or this year — accurately and without waiting for someone to assemble it from a spreadsheet. Your balance sheet is always correct. Your receivables are always current.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "No more end-of-month catch-up",
                  body: "Because the ledger is written in real time, there is nothing to &quot;catch up&quot; at month end. The month close is a review and confirmation step — not a reconstruction. Your accountant reviews what has been posted and locks the period.",
                },
                {
                  title: "Ghana VAT is handled at every transaction",
                  body: "Every taxable transaction in Finza includes the correct VAT, NHIL, and GETFund calculation — posted to separate accounts, not bundled together. Your GRA VAT report reflects every transaction you have ever recorded. There is no end-of-period tax assembly step.",
                },
                {
                  title: "Errors are corrected through reversals",
                  body: "When a bookkeeping error is found, it is corrected by posting a reversing journal entry. The original entry stays in the ledger exactly as it was. The correction adds a new entry that reverses the effect. Your audit trail is always complete.",
                },
                {
                  title: "Your accountant starts from a clean ledger",
                  body: "Instead of receiving a spreadsheet that needs to be rebuilt, your accountant receives a structured ledger with all transactions already posted. They review, post any professional adjustments, and close the period — in a fraction of the time.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Spreadsheet vs Finza</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                What changes when you switch from spreadsheets.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  before: "You update the spreadsheet manually after each transaction",
                  after: "The ledger updates automatically the moment you record the transaction",
                },
                {
                  before: "There is no way to know if your numbers balance",
                  after: "The ledger enforces double-entry — it cannot go out of balance",
                },
                {
                  before: "VAT is estimated at quarter end",
                  after: "VAT, NHIL, and GETFund are calculated and posted at every transaction",
                },
                {
                  before: "Financial reports need to be assembled by hand",
                  after: "Income statement, balance sheet, and trial balance are live and always current",
                },
                {
                  before: "Errors are overwritten silently",
                  after: "Corrections go through reversals — the original entry is always preserved",
                },
                {
                  before: "Accountant rebuilds the books from your spreadsheet each month",
                  after: "Accountant reviews a clean ledger and closes the period",
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

      {/* LINKS + CTA */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Accounting software Ghana", desc: "Full software overview", href: "/accounting-software-ghana" },
                { label: "Invoice software", desc: "Invoicing for Ghanaian businesses", href: "/invoice-software-ghana" },
                { label: "Features", desc: "What Finza does", href: "/features" },
                { label: "Pricing", desc: "From GHS 200/month", href: "/pricing" },
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
              Replace your spreadsheet with a live ledger.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Real-time bookkeeping for Ghanaian businesses. Always balanced. Ghana VAT handled correctly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                View demo →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">No card required · First month free</p>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-vs-excel-ghana",
            label: "Accounting vs Excel",
            desc: "Why sheets break",
          },
          { href: "/pricing", label: "Pricing", desc: "Workspaces" },
        ]}
      />
      <Footer />
    </main>
  );
}
