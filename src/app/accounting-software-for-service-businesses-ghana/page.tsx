import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounting Software for Service Businesses in Ghana | Finza",
  description:
    "Finza is accounting software for Ghanaian service businesses. Raise invoices, track accounts receivable, record expenses, and handle Ghana VAT — all posted to a live ledger automatically.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-for-service-businesses-ghana",
  },
};

export default function ServiceBusinessAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Service business accounting · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for service businesses in Ghana.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza&apos;s Service Workspace gives Ghanaian service businesses a live accounting system — invoicing that feeds accounts receivable, expense tracking that feeds the ledger, and real-time financial reports. Ghana VAT is handled automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                Start free — no card required
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                Preview the service workspace
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Built for Ghanaian service providers</p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                For businesses that bill clients for services.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Consulting and advisory firms",
                "Creative agencies and studios",
                "IT and software companies",
                "Construction and engineering",
                "Logistics and transport",
                "Clinics and healthcare",
                "Legal and professional services",
                "Event management and media",
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
                Service businesses in Ghana have a receivables problem.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Most service businesses invoice clients and then hope the money arrives. There is often no system tracking which invoices are outstanding, which are overdue, and which clients have partial balances. The accounts receivable balance — what clients actually owe — exists only as a physical pile of invoices or a spreadsheet cell that someone updates when they remember.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              When revenue is high but cash is tight, the problem is almost always in the receivables. Outstanding invoices represent earned revenue that has not been collected. Without a live receivables system, those invoices age silently.
            </p>
            <div className="space-y-4">
              {[
                {
                  headline: "Outstanding invoices are invisible",
                  body: "No live system tracking which invoices are unpaid, how long they have been outstanding, or what each client's total outstanding balance is at this moment.",
                },
                {
                  headline: "VAT on invoices is often wrong",
                  body: "Many Ghanaian service businesses apply VAT as a single line item without separating NHIL and GETFund — or miss the levies entirely on some invoices. The liability mismatch compounds across the period.",
                },
                {
                  headline: "Invoicing and accounting are two separate jobs",
                  body: "An invoice is created in one system. The accounting entry is supposed to be made separately in another. In practice, the accounting entry is often not made at all — or is made weeks later.",
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How the Service Workspace works</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Invoice. Post. Track. Record payment. Done.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              In Finza&apos;s Service Workspace, raising an invoice is also an accounting action. The moment you confirm an invoice, it is posted to the ledger as a balanced journal entry — accounts receivable debited, revenue credited, VAT and levies separated. There is no second step.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Every invoice is an accounting entry",
                  body: "You raise the invoice. Finza writes the journal: accounts receivable debited, revenue credited, VAT output credited, NHIL payable credited, GETFund payable credited. All at once, automatically. The income statement updates. The balance sheet updates. The receivables balance updates.",
                },
                {
                  title: "Live accounts receivable tracking",
                  body: "At any time, you can see the full aged receivables report — every outstanding invoice, every client, every balance, sorted by how many days it has been outstanding. When a client is 45 days overdue, you know it immediately — not when your accountant compiles the books.",
                },
                {
                  title: "Payments clear receivables instantly",
                  body: "When a client pays — in full or partially — you record the payment. Cash is debited, accounts receivable is credited by the corresponding amount. The outstanding balance drops immediately. The income statement stays accurate.",
                },
                {
                  title: "Expenses post to the ledger directly",
                  body: "Every expense you record creates an accounting entry. The expense account is debited, the asset or liability is credited. Your income statement reflects operating costs in real time — not at month end when someone compiles the spreadsheet.",
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

      {/* WHAT SERVICE BUSINESSES KNOW AT ALL TIMES */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What you always know</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                What you will always know — at any point in time.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { q: "What revenue have I earned this month?", a: "Income statement updates with every invoice. Revenue is always current — including partial-period views." },
                { q: "Which clients owe me money, and how much?", a: "Aged receivables report always current. Every outstanding invoice with days overdue visible at a glance." },
                { q: "What is my VAT liability right now?", a: "VAT, NHIL, and GETFund are tracked at every invoice. Net liability is visible at all times — not just at filing time." },
                { q: "How profitable am I after expenses?", a: "Net income on the income statement reflects both revenue earned and expenses recorded — always current." },
                { q: "What is my total cash position?", a: "Cash and bank accounts reflect every payment received. Balance sheet always shows current liquidity position." },
                { q: "Am I ready to give my accountant the books?", a: "Your ledger is being maintained in real time. Your accountant can review and close any period at any time." },
              ].map((item) => (
                <div key={item.q} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-semibold text-zinc-900 mb-2">{item.q}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LINKS + CTA */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Invoice software Ghana", desc: "Invoicing with AR posting", href: "/invoice-software-ghana" },
                { label: "Features", desc: "Full accounting system", href: "/features" },
                { label: "Pricing", desc: "Service Workspace — GHS 200/mo", href: "/pricing" },
                { label: "VAT software Ghana", desc: "VAT, NHIL & GETFund", href: "/vat-software-ghana" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors">
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
              Invoice. Post. Know your numbers.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Accounting software for Ghanaian service businesses. Live receivables, Ghana VAT, real-time P&L.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                Preview the service workspace →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">Service Workspace · GHS 200/month · First month free</p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
