import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bookkeeping for Small Businesses in Ghana | Finza",
  description:
    "Finza helps Ghanaian small service businesses keep invoices, payments, expenses, documents, payroll records, reports, Ghana tax lines, and accountant-ready bookkeeping records organized.",
  alternates: {
    canonical: "https://www.finza.africa/bookkeeping-for-small-business-ghana",
  },
};

export default function BookkeepingForSmallBusinessGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Bookkeeping for small business Ghana", path: "/bookkeeping-for-small-business-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "What is bookkeeping for small businesses?",
              acceptedAnswerText:
                "Bookkeeping for small businesses means keeping records of invoices, payments, receipts, expenses, supplier bills, payroll records, documents, and reports organized for review.",
            },
            {
              questionName: "Can Finza help with bookkeeping for small businesses in Ghana?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian small service businesses organize proposals, invoices, payments, expenses, documents, payroll records, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace a bookkeeper or accountant?",
              acceptedAnswerText:
                "No. Finza helps organize records for review. Your accountant, bookkeeper, or tax adviser should still confirm the correct treatment for your business.",
            },
            {
              questionName: "Can Finza help with receipts and documents?",
              acceptedAnswerText:
                "Yes. Finza supports incoming documents, uploaded receipts, PDFs, bills, and supporting records for review.",
            },
            {
              questionName: "Can I try Finza before paying?",
              acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
            },
          ]),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Bookkeeping for small businesses in Ghana without scattered records
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian small service businesses keep daily records organized - proposals, quotes, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll records, reports, and accountant-ready information in GHS.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Find my plan</Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. Built for small businesses that want cleaner bookkeeping records before accountant review.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Bookkeeping becomes harder when records are scattered
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Small business bookkeeping often becomes difficult because the records are not kept together. An invoice may be sent from one place, payment notes kept somewhere else, receipts stored in WhatsApp, expenses entered later, and payroll handled separately.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps keep the daily business records closer together so review becomes easier.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What small business bookkeeping should include
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "Sales records",
                  d: "Proposals, quotes, proformas, invoices, and receipts.",
                },
                {
                  t: "Payment records",
                  d: "Full payments, partial payments, unpaid invoices, and customer balances.",
                },
                {
                  t: "Expense records",
                  d: "Business expenses, supplier bills, and supporting documents.",
                },
                {
                  t: "Incoming documents",
                  d: "Uploaded receipts, PDFs, bills, and other business records.",
                },
                {
                  t: "Payroll records",
                  d: "Payroll activity kept closer to the wider business records.",
                },
                {
                  t: "Review records",
                  d: "Reports, exports, audit logs, period controls, and accountant-ready information where applicable.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="mb-2 text-sm font-bold text-zinc-900">{x.t}</p>
                  <p className="text-sm leading-relaxed text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              A cleaner bookkeeping flow for service businesses
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports the records that service businesses create every day. Instead of trying to rebuild the month from scattered notes and files, the business can keep the main bookkeeping records connected as work happens.
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
              <li>Create a proposal, quote, or proforma</li>
              <li>Send an invoice</li>
              <li>Record full or partial payment</li>
              <li>Issue a receipt</li>
              <li>Track expenses and supplier bills</li>
              <li>Upload supporting documents</li>
              <li>Review reports and accountant-ready records</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Built for Ghanaian small service businesses
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is especially useful for Ghanaian service businesses that work with clients, send documents, track payments, manage expenses, and prepare records for accountant review.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Maintenance teams",
                "Agencies",
                "Professional service providers",
                "Field-service businesses",
                "Growing SMEs",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              GHS records and Ghana tax lines where applicable
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports GHS-based records and Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "GHS-based invoices and records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Payment and customer balance records",
                "Reports and exports for review",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Why spreadsheets become difficult for bookkeeping
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Spreadsheets can help when the business is very small. But as invoices, payments, receipts, expenses, documents, and payroll records increase, manual bookkeeping becomes harder to keep accurate and complete.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps reduce scattered record-keeping by keeping key business activity in one connected workspace.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What Finza helps you keep organized
            </h2>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Proposals",
                "Quotes",
                "Proformas",
                "Invoices",
                "Receipts",
                "Payment records",
                "Partial payments",
                "Customer balances",
                "Expenses",
                "Supplier bills",
                "Incoming documents",
                "Payroll records",
                "Ghana tax lines where applicable",
                "Reports",
                "Exports",
                "Audit logs",
                "Period controls",
                "Accountant-ready records",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Software support, not professional advice
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, reports, tax lines where applicable, and accountant-ready information. It does not guarantee tax compliance, automatically file statutory returns, or replace accountant, tax, payroll, legal, or GRA guidance.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant or adviser should confirm the correct treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>What is bookkeeping for small businesses?</AccordionTrigger>
                <AccordionContent>
                  Bookkeeping for small businesses means keeping records of invoices, payments, receipts, expenses, supplier bills, payroll records, documents, and reports organized for review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can Finza help with bookkeeping for small businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian small service businesses organize proposals, invoices, payments, expenses, documents, payroll records, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace a bookkeeper or accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for review. Your accountant, bookkeeper, or tax adviser should still confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can Finza help with receipts and documents?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports incoming documents, uploaded receipts, PDFs, bills, and supporting records for review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Can I try Finza before paying?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza offers a 14-day free trial. No card is required to start.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-24 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Keep small business bookkeeping records cleaner
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link href="/contact"
                className="w-full rounded-md bg-white px-8 py-3.5 text-center text-base font-bold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 sm:w-auto"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/pricing#find-plan"
                className="w-full rounded-md border border-zinc-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Find my plan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/small-business-accounting-ghana", label: "Small business accounting", desc: "SME workflows in Ghana" },
          { href: "/accounting-for-small-business-ghana", label: "Accounting for small business", desc: "Daily records first" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping software", desc: "Daily records workflow" },
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Proposals and quotes" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "Payroll records" },
          { href: "/accountants", label: "For accountants", desc: "Accountant-ready records" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
          { href: "/contact", label: "Contact", desc: "Talk to the team" },
        ]}
      />
      <Footer />
    </main>
  );
}
