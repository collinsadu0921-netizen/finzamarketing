import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  CreditCard,
  FileCheck2,
  Receipt,
  WalletCards,
} from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, homePageFaqForSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Software for Service Businesses in Ghana | Finza",
  description:
    "Finza helps Ghanaian service businesses create proposals, quotes and invoices, track payments, capture expenses and incoming documents, manage payroll, and keep accountant-ready records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <JsonLd data={faqPageSchema(homePageFaqForSchema)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050b18] pt-20 pb-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-[-10%] h-[340px] w-[340px] rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full bg-emerald-400/15 blur-[120px]" />
          <div className="absolute bottom-[-18%] left-1/2 h-[300px] w-[460px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />
        </div>
        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[45%_55%] lg:items-center">
            <div className="space-y-7">
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Run your service business in Ghana from{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  proposal to payment
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-200">
                Create quotes, send invoices, track payments, record expenses and keep accountant-ready records in one clean GHS workspace.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <a
                  href="https://app.finza.africa/signup?plan=professional&trial=1"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-lg transition hover:bg-zinc-100"
                >
                  Start 14-day free trial
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View demo
                </Link>
              </div>
              <p className="text-sm text-zinc-300">14-day free trial. No card required to start.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[1280px] px-2 sm:px-4 lg:px-0">
              <div className="rounded-[2rem] border border-white/10 bg-white/95 p-2 shadow-2xl shadow-slate-950/35">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  <Image
                    src="/images/finza-dashboard-hero.png"
                    alt="Finza dashboard for a Ghanaian service business showing invoices, expenses, payments, reports and tax summary"
                    width={2400}
                    height={1350}
                    priority
                    quality={100}
                    sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1200px"
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <div className="hero-float motion-reduce:animate-none absolute left-4 top-6 z-20 hidden rounded-2xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-xl md:block">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-sky-100 p-1 text-sky-600"><FileCheck2 className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">Invoice sent</p>
                    <p className="text-[11px] text-zinc-600">INV-00425 sent to client</p>
                  </div>
                </div>
              </div>

              <div className="hero-float motion-reduce:animate-none absolute right-4 top-10 z-20 hidden rounded-2xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-xl md:block [animation-delay:0.6s]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-600"><BadgeCheck className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">Quote approved</p>
                    <p className="text-[11px] text-zinc-600">Client approved quote</p>
                  </div>
                </div>
              </div>

              <div className="hero-float motion-reduce:animate-none absolute left-7 bottom-24 z-20 hidden rounded-2xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-xl lg:block [animation-delay:1.2s]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-violet-100 p-1 text-violet-600"><WalletCards className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">Payment received</p>
                    <p className="text-[11px] text-zinc-600">GHS 2,500 recorded</p>
                  </div>
                </div>
              </div>

              <div className="hero-float motion-reduce:animate-none absolute right-7 bottom-24 z-20 hidden rounded-2xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-xl lg:block [animation-delay:1.8s]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-amber-100 p-1 text-amber-600"><Receipt className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">Expense recorded</p>
                    <p className="text-[11px] text-zinc-600">Office expense saved</p>
                  </div>
                </div>
              </div>

              <div className="hero-float motion-reduce:animate-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-xl md:block [animation-delay:2.4s]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-pink-100 p-1 text-pink-600"><CreditCard className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">Payroll run</p>
                    <p className="text-[11px] text-zinc-600">Monthly payroll completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Your business should not run on scattered records
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              One proposal is in WhatsApp. One invoice is saved as a PDF. Receipts are on someone&apos;s phone. Payments are marked manually. Your accountant asks for records at month-end, and the team starts searching.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza brings your client work, documents, payments, expenses, payroll, and reports into one place so your business is easier to manage.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                {
                  t: "Client work is scattered",
                  d: "Proposals, quotes, invoices, and payment updates often sit in different apps and folders.",
                },
                {
                  t: "Money is hard to track",
                  d: "Paid, unpaid, partial, and overdue invoices become difficult to follow when records are manual.",
                },
                {
                  t: "Accounting comes too late",
                  d: "Your accountant should not have to rebuild your business from screenshots, spreadsheets, and missing receipts.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-white p-5">
                  <p className="font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INVOICE CALCULATOR */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Try the Ghana invoice calculator</h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-600">
              Enter service items, discounts, Ghana tax example lines, withholding tax, and payments to preview how an invoice total can look before you create the real document in Finza.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/invoice-calculator-ghana"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Open invoice calculator
              </Link>
              <Link
                href="/invoicing-software-ghana"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Create real invoices in Finza
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Illustrative only. Final invoice, tax, and withholding treatment should be reviewed before sending.
            </p>
          </div>
        </Container>
      </section>

      {/* WORKFLOW */}
      <section className="border-b border-zinc-100 bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              One workflow from first proposal to final payment
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza follows the way service businesses actually work. Start with the client request, prepare the offer, send the invoice, record the payment, and keep the supporting records connected.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                { t: "1. Create the proposal", d: "Prepare a professional proposal with scope, pricing, terms, and client-ready presentation." },
                { t: "2. Send a quote or proforma", d: "Turn approved work into a quote or proforma without rebuilding the same customer details." },
                { t: "3. Issue the invoice", d: "Send invoices with clear totals, due dates, customer details, and Ghana tax lines where applicable." },
                { t: "4. Record the payment", d: "Track full, partial, overdue, cash, bank, or online payments against the correct customer." },
                { t: "5. Capture the documents", d: "Upload receipts, supplier bills, PDFs, and incoming documents so supporting records do not disappear." },
                { t: "6. Review the numbers", d: "See income, expenses, unpaid invoices, payroll, tax positions, and accountant-ready reports from the same workspace." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PROPOSALS */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Win the job before you send the invoice</h2>
            <p className="leading-relaxed text-zinc-600">
              Finza helps service businesses prepare professional proposals with scope, pricing, sections, attachments, and client-ready presentation.
            </p>
            <p className="leading-relaxed text-zinc-600">
              When the client is ready, your team can continue the same workflow into quotes, proformas, invoices, payment tracking, and reports.
            </p>
            <p className="leading-relaxed text-zinc-600">
              No separate proposal folder. No retyping client details. No losing the original agreement when billing starts.
            </p>
            <Link href="/features" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50">
              Explore features
            </Link>
          </div>
        </Container>
      </section>

      {/* QUOTES INVOICES TAX */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Send clear quotes and invoices in GHS</h2>
            <p className="leading-relaxed text-zinc-600">
              Create quotes, proformas, and invoices that look professional and are easy for clients to understand. Send documents by email, public link, PDF, or WhatsApp link, then track what has been sent, accepted, paid, or left outstanding.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Where applicable, Finza helps show Ghana tax lines such as VAT, NHIL, GETFund, and WHT clearly instead of hiding everything inside one tax number.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "Quotes and proformas",
                "Invoices and receipts",
                "PDF exports",
                "Email sending",
                "Public document links",
                "WhatsApp sharing links",
                "VAT, NHIL, GETFund, and WHT support where applicable",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PAYMENTS */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Know who has paid and who still owes you</h2>
            <p className="leading-relaxed text-zinc-600">
              Finza helps you track payments against the correct invoice and customer. Record full payments, partial payments, outstanding balances, and overdue invoices so your team can follow up with better information.
            </p>
            <p className="leading-relaxed text-zinc-600">
              You can see customer balances, invoice status, and payment history without checking multiple spreadsheets.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                { t: "Paid, unpaid, partial, overdue", d: "Track invoice status clearly." },
                { t: "Customer balances", d: "See what each customer owes." },
                { t: "Receipts", d: "Give customers proof of payment when money is recorded." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-white p-5">
                  <p className="font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INCOMING DOCUMENTS */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Capture receipts, bills, and incoming documents before they get lost</h2>
            <p className="leading-relaxed text-zinc-600">
              Business records often start as photos, PDFs, supplier bills, and email attachments. Finza helps you bring those documents into the workspace, review the details, and keep supporting records connected to expenses and supplier bills.
            </p>
            <p className="leading-relaxed text-zinc-600">
              This gives your accountant a cleaner file and reduces the end-of-month document chase.
            </p>
          </div>
        </Container>
      </section>

      {/* EXPENSES BILLS PAYROLL */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Keep business costs and payroll connected</h2>
            <p className="leading-relaxed text-zinc-600">
              Track expenses, supplier bills, and payroll from the same business workspace. Finza helps you keep salary runs, supplier obligations, costs, and reports closer to the records your business already creates.
            </p>
            <p className="leading-relaxed text-zinc-600">
              That means fewer disconnected files and clearer month-end review.
            </p>
          </div>
        </Container>
      </section>

      {/* ACCOUNTANT READY */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Give your accountant records they can actually work with</h2>
            <p className="leading-relaxed text-zinc-600">
              Finza is built so daily business activity creates cleaner records as you operate. Proposals, invoices, payments, receipts, expenses, supplier bills, documents, payroll, and reports stay connected.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Behind the scenes, Finza supports accounting-grade workflows such as ledger records, journals, chart of accounts, trial balance, audit logs, period locking, and report exports.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Your accountant should not have to rebuild your business from screenshots and spreadsheets.
            </p>
            <Link href="/accountants" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50">
              For accountants
            </Link>
          </div>
        </Container>
      </section>

      {/* FINZA ASSIST */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Ask better questions about your business records</h2>
            <p className="leading-relaxed text-zinc-600">
              Finza Assist helps you understand information already inside your workspace. Ask about invoices, customers, expenses, documents, payments, and reports without digging through every screen manually.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Finza Assist is designed to support review and understanding. It should not replace professional accounting or tax advice.
            </p>
          </div>
        </Container>
      </section>

      {/* PRICING PREVIEW */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Choose the plan that fits your business</h2>
            <p className="leading-relaxed text-zinc-600">
              Start with the tools your business needs today, then move to deeper controls when your operations grow.
            </p>
            <div className="grid gap-4 text-left md:grid-cols-3">
              {[
                {
                  t: "Essentials",
                  d: "For service businesses that need proposals, quotes, invoices, expenses, payment tracking, and basic reports.",
                },
                {
                  t: "Professional",
                  d: "For growing teams that need supplier bills, incoming documents, payroll, WHT, VAT support, projects, and team access.",
                },
                {
                  t: "Business",
                  d: "For companies that need full accounting control, including ledger, journals, trial balance, bank reconciliation, period locking, audit logs, and report exports.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">Start with a 14-day free trial. No card required to start.</p>
            <Link href="/pricing" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50">
              View pricing in GHS
            </Link>
          </div>
        </Container>
      </section>

      {/* TRUST AND SECURITY */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Built for business records that need control</h2>
            <p className="leading-relaxed text-zinc-600">
              Finza separates business workspaces, supports role-based access, and includes audit logs and period-locking controls in the accounting workflow.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Your team can work with the records they need while keeping sensitive business information more organized and controlled.
            </p>
            <p className="text-sm text-zinc-500">
              Read more on{" "}
              <Link href="/security" className="font-semibold text-zinc-900 underline underline-offset-2">
                security
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-zinc-900 underline underline-offset-2">
                privacy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* SEO INTERNAL LINKS */}
      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-xl font-bold text-zinc-900">Explore more for Ghana businesses</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/accounting-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Accounting software Ghana
              </Link>
              <Link href="/invoicing-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Invoicing software Ghana
              </Link>
              <Link href="/bookkeeping-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Bookkeeping software Ghana
              </Link>
              <Link href="/quotation-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Quotation software Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-6">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Start with clearer business records in GHS</h2>
            <p className="text-zinc-300">
              Create proposals, send invoices, track payments, capture documents, and keep accountant-ready records from one connected workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="inline-block w-full rounded-md bg-white px-8 py-3 text-center text-base font-bold text-zinc-900 shadow sm:w-auto"
              >
                Start 14-day free trial
              </a>
              <Link href="/pricing" className="inline-block w-full text-center text-base font-semibold text-zinc-300 underline-offset-4 hover:text-white sm:w-auto">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Full capability list" },
          { href: "/contact", label: "Contact", desc: "Talk to Finza" },
        ]}
      />
      <Footer />
    </main>
  );
}
