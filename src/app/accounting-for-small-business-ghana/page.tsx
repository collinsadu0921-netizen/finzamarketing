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
  title: "Accounting for Small Businesses in Ghana | Finza",
  description:
    "A practical guide to accounting for small businesses in Ghana: daily records, unpaid invoices, expenses, receipts, payroll, and accountant review.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-for-small-business-ghana",
  },
};

export default function AccountingForSmallBusinessGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Accounting for small business Ghana", path: "/accounting-for-small-business-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "How should small businesses in Ghana organize accounting records?",
              acceptedAnswerText:
                "Small businesses should keep invoices, payments, receipts, expenses, supplier bills, payroll records, supporting documents, reports, and accountant-ready information organized as work happens.",
            },
            {
              questionName: "Can Finza help with accounting for small businesses in Ghana?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian small service businesses organize proposals, invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace my accountant?",
              acceptedAnswerText:
                "No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.",
            },
            {
              questionName: "Can Finza help with unpaid invoices?",
              acceptedAnswerText:
                "Yes. Finza supports payment recording, partial payments, customer balances, and invoice status tracking.",
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
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting for small businesses in Ghana starts with better daily records
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              This guide focuses on the habit behind good accounting: capture daily records, keep receipts and expenses together, review unpaid invoices, and prepare cleaner information for your accountant.
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
              No card required to start. Built for small service businesses that want cleaner records before accountant review.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              The accounting problem usually starts before month-end
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Small business accounting is not only about preparing reports. It starts when work is quoted, invoiced, paid, recorded, and supported with the right documents.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              If those records are spread across WhatsApp, email, notebooks, folders, and spreadsheets, month-end review becomes harder. The business owner may not know what is unpaid, which costs are missing, which documents support the records, or what the accountant still needs.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize the daily activity that accounting review depends on.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              A small business accounting checklist
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "Sales evidence",
                  d: "Invoices, receipts, and payment notes.",
                },
                {
                  t: "Unpaid work",
                  d: "Customer balances, partial payments, and overdue invoices.",
                },
                {
                  t: "Costs",
                  d: "Expenses, supplier bills, and supporting documents.",
                },
                {
                  t: "Receipt files",
                  d: "Uploaded receipts, PDFs, bills, and incoming records.",
                },
                {
                  t: "Payroll context",
                  d: "Payroll records connected more closely to the wider business activity.",
                },
                {
                  t: "Accountant review",
                  d: "Reports, exports, audit logs, period controls, and accountant-ready records where applicable.",
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
              From business activity to cleaner accounting records
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps small businesses keep the business story clearer. Instead of waiting until the accountant asks for missing information, the business can keep records organized as work happens.
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
              <li>Prepare a proposal or quote</li>
              <li>Send a proforma or invoice</li>
              <li>Record payment or partial payment</li>
              <li>Issue a receipt</li>
              <li>Capture expenses and supplier bills</li>
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
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is especially useful for Ghanaian service businesses that work in GHS, send client documents, track payments, manage expenses, and prepare information for accountant review.
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
              Ghana tax lines where applicable
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT. These lines can help make invoices, records, and reports easier to review.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              The correct treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "GHS-based invoices and records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Payment and customer balance records",
                "Reports and exports for accountant review",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Why accounting records become messy</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Small business records often become messy because work happens faster than administration. A client asks for a quote. A payment arrives later. A receipt is saved somewhere else. A supplier bill is missed. Payroll is handled separately. The accountant receives the records after the story is already fragmented.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps reduce that fragmentation by keeping the main business records closer together.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Records to prepare before talking to your accountant
            </h2>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2 lg:grid-cols-3">
              {[
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
                "Review notes",
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
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize business records, documents, payments, reports, tax lines where applicable, and accountant-ready information. It does not guarantee tax compliance, automatically file statutory returns, or replace accountant, tax, payroll, legal, or GRA guidance.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
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
                <AccordionTrigger>How should small businesses in Ghana organize accounting records?</AccordionTrigger>
                <AccordionContent>
                  Small businesses should keep invoices, payments, receipts, expenses, supplier bills, payroll records, supporting documents, reports, and accountant-ready information organized as work happens.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can Finza help with accounting for small businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian small service businesses organize proposals, invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can Finza help with unpaid invoices?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports payment recording, partial payments, customer balances, and invoice status tracking.
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
              Keep small business accounting records cleaner from the start
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              Use Finza when you are ready to turn this record-keeping habit into a connected GHS workspace.
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
        mode="no-primary"
        related={[
          { href: "/small-business-accounting-ghana", label: "Small business accounting", desc: "SME workflows in Ghana" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/bookkeeping-for-small-business-ghana", label: "Bookkeeping guide", desc: "Receipts and expenses" },
        ]}
      />
      <Footer />
    </main>
  );
}
