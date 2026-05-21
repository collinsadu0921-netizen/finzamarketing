import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Features | Finza Business Software for Ghanaian Service Businesses",
  description:
    "Explore Finza features for Ghanaian service businesses: proposals, quotes, invoices, payments, expenses, incoming documents, payroll, reports, Ghana tax lines, and accountant-ready records.",
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

      {/* HERO */}
      <section className="border-b border-zinc-100 bg-white pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Features built for Ghanaian service businesses
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-zinc-600">
              Finza connects the daily work of a service business - proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records - in one workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
              <Link href="/contact"
                className="inline-block rounded-md bg-[#0F172A] px-10 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/pricing#find-plan"
                className="inline-block rounded-md border border-zinc-300 bg-white px-10 py-4 text-center text-lg font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                Find my plan
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. Work in GHS with records built around Ghanaian business needs.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 - CLIENT WORK */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Manage client work from first request to approved offer
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Service businesses often start with a conversation, a site visit, a scope of work, or a price request. Finza helps you turn that early client work into professional documents without losing the details along the way.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Proposals",
                  d: "Create professional proposals with scope, pricing, sections, terms, and client-ready presentation.",
                },
                {
                  t: "Quotes",
                  d: "Send clear quotes when a client needs pricing before approval.",
                },
                {
                  t: "Proformas",
                  d: "Issue proformas when you need a formal payment request before the final invoice.",
                },
                {
                  t: "Client-ready documents",
                  d: "Share documents by email, PDF, public link, or WhatsApp link depending on how your client prefers to receive them.",
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

      {/* SECTION 2 - INVOICES AND PAYMENTS */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Send invoices and track payments without guessing
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza helps you move from approved work to invoice, then from invoice to payment tracking. Your team can see what has been sent, what has been paid, what is overdue, and what is still outstanding.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Invoices",
                  d: "Create professional invoices with customer details, due dates, line items, totals, and Ghana tax lines where applicable.",
                },
                {
                  t: "Partial payments",
                  d: "Record full or partial payments against the correct invoice and customer.",
                },
                {
                  t: "Customer balances",
                  d: "See outstanding amounts and payment history by customer.",
                },
                {
                  t: "Receipts",
                  d: "Give customers proof of payment after money is recorded.",
                },
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

      {/* SECTION 3 - GHANA TAX LINES */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Show Ghana tax lines clearly where they apply
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza helps show Ghana tax lines such as VAT, NHIL, GETFund, and WHT clearly on business documents and reports where applicable.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Your team can see the breakdown instead of hiding everything inside one general tax figure.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Tax breakdowns on supported documents",
                "Reports that help with accountant review",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 4 - EXPENSES, BILLS, AND INCOMING DOCUMENTS */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Keep expenses and supporting documents connected
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Business costs should not disappear into phones, folders, and email attachments. Finza helps you capture expenses, supplier bills, receipts, PDFs, and incoming documents so supporting records stay closer to the business activity they belong to.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Expenses",
                  d: "Record business expenses so costs are easier to review.",
                },
                {
                  t: "Supplier bills",
                  d: "Track supplier obligations and keep bill records organized.",
                },
                {
                  t: "Incoming documents",
                  d: "Upload receipts, bills, PDFs, and supporting documents into the workspace.",
                },
                {
                  t: "Review workflow",
                  d: "Review extracted or captured document details before using them in your records.",
                },
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

      {/* SECTION 5 - PAYROLL AND TEAM RECORDS */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Manage payroll and team access from the same workspace
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza supports payroll workflows and team access so business records are not separated from the people who work with them.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Owners, staff, and accountants can work with the parts of the system they need, while sensitive records remain better controlled.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Payroll",
                  d: "Manage salary runs and payroll records inside the business workspace.",
                },
                {
                  t: "Team access",
                  d: "Add users and control what they can access.",
                },
                {
                  t: "Roles and permissions",
                  d: "Keep work organized by giving people the right level of access.",
                },
                {
                  t: "Business separation",
                  d: "Keep records organized by business workspace.",
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

      {/* SECTION 6 - REPORTS AND ACCOUNTANT-READY RECORDS */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Give your accountant records they can actually work with
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza is built so daily business activity creates cleaner records as you operate. Invoices, payments, receipts, expenses, supplier bills, documents, payroll, and reports stay connected.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Behind the scenes, Finza supports accounting-grade workflows such as ledger records, journals, chart of accounts, trial balance, period locking, audit logs, and exports.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Reports",
                  d: "Review business performance through financial and operational reports.",
                },
                {
                  t: "Ledger and journals",
                  d: "Support accounting-grade recordkeeping behind the scenes.",
                },
                {
                  t: "Trial balance",
                  d: "Prepare cleaner information for accountant review.",
                },
                {
                  t: "Audit logs and period locking",
                  d: "Help protect reviewed records from silent or uncontrolled changes.",
                },
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

      {/* SECTION 7 - FINZA ASSIST */}
      <section id="finza-assist" className="scroll-mt-28 border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Finza Assist helps you understand your business records
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza Assist helps you ask questions about information already inside your workspace. Use it to review invoices, customers, payments, expenses, documents, and reports without digging through every screen manually.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Finza Assist is designed to support understanding and review. It should not replace professional accounting, legal, or tax advice.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                {
                  t: "Ask about records",
                  d: "Review information already stored in your workspace.",
                },
                {
                  t: "Find business context faster",
                  d: "Understand customer balances, unpaid invoices, expenses, and documents more easily.",
                },
                {
                  t: "Support review",
                  d: "Use Finza Assist as a guide while keeping final decisions with your team and professional advisers.",
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

      {/* SECTION 8 - WHAT FINZA IS NOT */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Built to support your business, not replace professional advice
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, and reports. It does not guarantee tax compliance, replace your accountant, or remove the need to review important financial information.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Your accountant or tax adviser should confirm the correct treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pricing#find-plan" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Pricing
              </Link>
              <Link href="/demo" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Demo
              </Link>
              <Link href="/contact" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Contact
              </Link>
              <Link href="/security" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Security
              </Link>
              <Link href="/accountants" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Accountants
              </Link>
              <Link href="/accounting-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Accounting software Ghana
              </Link>
              <Link href="/invoicing-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Invoicing software Ghana
              </Link>
              <Link href="/quotation-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Quotation software Ghana
              </Link>
              <Link href="/bookkeeping-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                Bookkeeping software Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Bring your service business records into one workspace
            </h2>
            <p className="text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Start with proposals, quotes, invoices, payments, expenses, documents, payroll, and reports - then keep cleaner records for your accountant as the business grows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/contact"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/pricing#find-plan"
                className="text-base font-semibold text-zinc-300 underline-offset-4 hover:text-white transition-colors"
              >
                Find my plan
              </Link>
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
