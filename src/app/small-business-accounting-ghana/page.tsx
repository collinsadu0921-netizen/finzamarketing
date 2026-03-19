import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Accounting Software in Ghana | Finza",
  description:
    "Finza is accounting software for small businesses in Ghana. Real-time profit and loss, Ghana VAT handling, and financial reports that are always current — without an accountant every month.",
  alternates: {
    canonical: "https://www.finza.africa/small-business-accounting-ghana",
  },
};

export default function SmallBusinessAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Small business accounting · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for small businesses in Ghana.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza gives Ghanaian SME owners real-time visibility into their profit, tax position, and cash — without spreadsheets, without waiting for an accountant, and without month-end confusion.
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Most small business owners in Ghana do not know their real numbers.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              This is not because they are not capable. It is because the tools they are using — spreadsheets, paper records, or basic apps — are not designed to give them that information automatically.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              When a business owner needs to know their profit for the month, they have to wait for someone to compile it. When they need to know their VAT liability, they estimate. When the accountant closes the books at year end, there are usually surprises — tax that was not collected, expenses that were not categorised, income that was not tracked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "No real-time profit visibility", desc: "The income statement only exists after the accountant assembles it — which could be weeks or months after the period closes." },
                { label: "Ghana VAT is a guessing game", desc: "Business owners who are VAT-registered often do not know their net VAT liability until the accountant calculates it — often incorrectly." },
                { label: "Cash ≠ profit (and no one told you)", desc: "Healthy bank balance does not mean a healthy business. Without a P&L and balance sheet, it is impossible to know the difference between cash and profit." },
                { label: "Year-end is full of surprises", desc: "If the books are not being maintained properly during the year, the year-end process reveals errors, missing transactions, and unexpected tax liabilities." },
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza gives you</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Know exactly where your business stands — at any time.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza gives Ghanaian small business owners the same financial clarity that large businesses have — through a properly structured accounting system that works automatically as you run your business.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Real-time income statement",
                  body: "Every sale, every expense, every payment updates your income statement immediately. You can open Finza right now and see what your business made today, this week, and this month — without asking anyone, without waiting.",
                },
                {
                  title: "Balance sheet always current",
                  body: "Your assets, liabilities, and equity are always current because the ledger underneath them is always current. You can see your accounts receivable balance, your cash and bank position, and your tax liabilities at any point in time.",
                },
                {
                  title: "Ghana VAT tracked automatically",
                  body: "If you are VAT-registered, Finza calculates VAT, NHIL, and GETFund at the point of every applicable transaction. Your net VAT liability is always visible. There is no quarterly guessing step.",
                },
                {
                  title: "A clean ledger for your accountant",
                  body: "Your accountant does not need to rebuild your books from scratch at year end. They receive a structured general ledger with all transactions already posted and balanced. Their job becomes review, adjustment, and closure — not reconstruction.",
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

      {/* WORKSPACE CHOICE */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Choose your workspace</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Designed for how your business operates.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  tag: "Retail Workspace — GHS 250/month",
                  for: "Shops, pharmacies, supermarkets, hardware stores — any business that sells physical goods and manages inventory.",
                  bullets: ["POS sales post to the ledger automatically", "Inventory tracked with COGS accounting", "VAT collected and separated per transaction"],
                  link: "/accounting-software-for-retailers-ghana",
                  linkLabel: "Retail accounting →",
                },
                {
                  tag: "Service Workspace — GHS 200/month",
                  for: "Agencies, consultancies, clinics, contractors — any business that bills clients for services.",
                  bullets: ["Invoices create AR entries automatically", "Track outstanding balances and overdue accounts", "Record expenses with immediate ledger posting"],
                  link: "/accounting-software-for-service-businesses-ghana",
                  linkLabel: "Service business accounting →",
                },
              ].map((ws) => (
                <div key={ws.tag} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="inline-block rounded-md bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 mb-4 self-start">
                    {ws.tag}
                  </div>
                  <p className="text-sm text-zinc-600 mb-5 leading-relaxed">{ws.for}</p>
                  <ul className="space-y-2 flex-1">
                    {ws.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-zinc-700">
                        <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={ws.link} className="mt-6 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                    {ws.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500">First month free on either workspace. No card required to start.</p>
          </div>
        </Container>
      </section>

      {/* LINKS + CTA */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Explore Finza</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Features", desc: "Full accounting system", href: "/features" },
                { label: "Pricing", desc: "Workspace plans", href: "/pricing" },
                { label: "Ghana VAT", desc: "VAT & levy handling", href: "/vat-software-ghana" },
                { label: "Demo", desc: "Preview before you start", href: "/demo" },
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
              Know your numbers. Run a better business.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Accounting software for Ghanaian small businesses. Real-time. Balanced. Ghana VAT included.
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

      <Footer />
    </main>
  );
}
