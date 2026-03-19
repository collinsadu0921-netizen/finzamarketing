import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Invoice Software for Ghanaian Businesses | Finza",
  description:
    "Finza is invoice software for Ghanaian businesses. Raise invoices, track accounts receivable, record payments, and handle Ghana VAT — all posted to a live ledger automatically.",
  alternates: {
    canonical: "https://www.finza.africa/invoice-software-ghana",
  },
};

export default function InvoiceSoftwareGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Invoice software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Invoice software for Ghanaian businesses.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza lets you raise invoices, track what clients owe, record payments, and handle Ghana VAT — all posted directly to a live accounting ledger. No spreadsheet required.
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
                Invoicing in Ghana is still mostly manual — and it shows.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Most service businesses in Ghana raise invoices in Word or Excel — or WhatsApp a PDF to a client and hope payment follows. There is no system tracking which invoices are outstanding. There is no automatic VAT calculation. There is no record of which invoices are partially paid, overdue, or disputed. And when the accountant asks for the accounts receivable balance, someone has to manually tally a list of unpaid invoices against a bank statement.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              The consequences are real. Cash flow problems often have nothing to do with how much revenue a business generates — they have to do with not knowing what is owed, and not following up because there is no system keeping track. A business can be profitable and still run out of cash because receivables are invisible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { label: "Unknown receivables", desc: "No system tracking which invoices are outstanding, partially paid, or overdue in real time." },
                { label: "VAT not calculated correctly", desc: "Ghana's VAT, NHIL, and GETFund are often missed on invoices or applied to the wrong rate." },
                { label: "Books not updated", desc: "An invoice in a spreadsheet does not update your income statement. The accounting and the invoicing live in separate places." },
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
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza works</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Every invoice posts to the accounting ledger automatically.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              When you raise an invoice in Finza, it does not just create a document. It posts a double-entry journal entry: accounts receivable is debited, revenue is credited, and VAT — including NHIL and GETFund — is separated into its own liability accounts. Your receivables balance, income statement, and VAT position all update at the moment the invoice is confirmed.
            </p>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What happens when you raise an invoice</p>
              <div className="grid grid-cols-3 text-xs font-bold text-zinc-400 pb-2 border-b border-zinc-200">
                <span>Account</span>
                <span className="text-center">Dr</span>
                <span className="text-right">Cr</span>
              </div>
              {[
                { account: "Accounts Receivable", dr: "GHS 6,000.00", cr: "" },
                { account: "Revenue", dr: "", cr: "GHS 5,000.00" },
                { account: "VAT Output (15%)", dr: "", cr: "GHS 750.00" },
                { account: "NHIL (2.5%)", dr: "", cr: "GHS 125.00" },
                { account: "GETFund (2.5%)", dr: "", cr: "GHS 125.00" },
              ].map((row) => (
                <div key={row.account} className="grid grid-cols-3 text-sm py-1">
                  <span className="text-zinc-700">{row.account}</span>
                  <span className="text-center font-semibold text-blue-700">{row.dr}</span>
                  <span className="text-right font-semibold text-zinc-600">{row.cr}</span>
                </div>
              ))}
              <p className="text-xs text-zinc-500 pt-2">Posted automatically. No manual accounting step required.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Track accounts receivable in real time",
                  body: "Your receivables balance is always current — broken down by client, by invoice, by age. You can see at a glance which clients are overdue and by how many days. Aged receivables update the moment a payment is recorded.",
                },
                {
                  title: "Record payments — receivable clears automatically",
                  body: "When a client pays, you record the payment in Finza. Cash is debited, accounts receivable is credited. The outstanding balance drops immediately. You can see partial payments, overpayments, and remaining balances per invoice.",
                },
                {
                  title: "Ghana VAT included on every invoice",
                  body: "Every invoice you raise in Finza includes the correct VAT, NHIL, and GETFund calculation — shown separately on the invoice document and posted separately in the ledger. Your GRA VAT report reflects every invoice you have raised. There is no end-of-quarter catch-up.",
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
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Best for</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Built for service businesses that invoice clients.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza&apos;s Service Workspace is designed for businesses that bill for services rather than selling physical goods. If your primary revenue stream comes from invoicing clients — for consulting, design, construction, logistics, healthcare, legal, or any other service — the Service Workspace gives you invoicing, accounts receivable, expense tracking, and financial reporting in one system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Consultancy and professional services firms",
                "Creative agencies and design studios",
                "IT and software service providers",
                "Construction and engineering contractors",
                "Logistics and transport businesses",
                "Healthcare providers and clinics",
                "Legal and accounting practices",
                "Any service business that invoices clients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-zinc-200 bg-white">
                  <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href="/accounting-software-for-service-businesses-ghana" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
                Accounting software for service businesses →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* INTERNAL LINKS + CTA */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Explore Finza</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Features", desc: "Full feature breakdown", href: "/features" },
                { label: "Pricing", desc: "Service workspace — GHS 200/mo", href: "/pricing" },
                { label: "VAT software", desc: "How Ghana VAT works", href: "/vat-software-ghana" },
                { label: "Demo", desc: "Preview the workspace", href: "/demo" },
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
              Invoicing that feeds your accounting.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Raise invoices. Track receivables. Record payments. Ghana VAT handled automatically. All in one accounting system.
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
            href: "/accounting-for-service-business-ghana",
            label: "Service business accounting",
            desc: "AR & invoicing",
          },
          { href: "/blog", label: "Blog", desc: "Guides & ideas" },
        ]}
      />
      <Footer />
    </main>
  );
}
