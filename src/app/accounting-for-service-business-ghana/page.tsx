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
  title: "Accounting for Service Businesses in Ghana | Finza",
  description:
    "Learn how Ghanaian service businesses can organize proposals, invoices, payments, expenses, documents, payroll, Ghana tax lines, reports, and accountant-ready records with Finza.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-for-service-business-ghana",
  },
};

export default function AccountingForServiceBusinessGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Accounting for service business Ghana", path: "/accounting-for-service-business-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "What is accounting for a service business?",
              acceptedAnswerText:
                "Accounting for a service business means keeping records of client work, proposals, invoices, payments, receipts, expenses, supplier bills, payroll records, documents, reports, and accountant-ready information.",
            },
            {
              questionName: "Why is service business accounting different?",
              acceptedAnswerText:
                "Service businesses often need to track work before and after invoicing, including proposals, quotes, job costs, partial payments, documents, and accountant review records.",
            },
            {
              questionName:
                "Can Finza help Ghanaian service businesses organize accounting records?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian service businesses organize proposals, invoices, payments, expenses, documents, payroll records, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace my accountant?",
              acceptedAnswerText:
                "No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.",
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
              Accounting for service businesses in Ghana should follow the work
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              Service business accounting becomes clearer when the records follow the job from proposal to quote, invoice, payment, receipt, expenses, documents, payroll, reports, and accountant review. Finza helps Ghanaian service businesses keep those records organized in GHS.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/demo"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                See how Finza works
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. Built for service businesses that want cleaner records before month-end review.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Service businesses do not account like shops
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              A service business usually starts with a client request, a scope of work, a proposal, a quote, or an estimate. The job may involve materials, staff time, supplier costs, transport, partial payments, and follow-up documents.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              If those records are not connected, accounting review becomes harder. The accountant may receive an invoice without the supporting quote, a payment without a receipt, or expenses without the documents behind them.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps service businesses keep the business story clearer from the start.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              The records a service business needs to keep
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "Before the job",
                  d: "Proposals, quotes, proformas, scopes, and client approvals.",
                },
                {
                  t: "During the job",
                  d: "Expenses, supplier bills, supporting documents, and work-related records.",
                },
                {
                  t: "After the job",
                  d: "Invoices, receipts, payment records, and customer balances.",
                },
                {
                  t: "For the team",
                  d: "Payroll records and operational records connected to the business.",
                },
                {
                  t: "For review",
                  d: "Reports, exports, audit logs, period controls, and accountant-ready records where applicable.",
                },
                {
                  t: "For Ghana tax lines",
                  d: "VAT, NHIL, GETFund, and WHT support where applicable.",
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
              A cleaner accounting flow for service businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps service businesses organize records around the way work actually happens. The goal is not only to create an invoice, but to keep the records behind that invoice easier to review.
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
              <li>Prepare a proposal or quote</li>
              <li>Send a proforma or invoice</li>
              <li>Record full or partial payment</li>
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
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Why service business records get messy
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Service business records often become messy because the work moves faster than the administration. A client approves work on WhatsApp. A quote is changed. A payment comes in later. Expenses are paid by different people. Receipts are stored in different places. Payroll is handled separately.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              By the time the accountant reviews the month, the records may no longer tell a complete story.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps reduce that gap by keeping client documents, payments, costs, documents, and reports closer together.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Built for Ghanaian service businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is useful for Ghanaian service businesses that need better control over client work, payments, costs, and records before accountant review.
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

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              GHS records and Ghana tax lines where applicable
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports GHS-based records and Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT.
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

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What Finza helps service businesses organize
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
                <AccordionTrigger>What is accounting for a service business?</AccordionTrigger>
                <AccordionContent>
                  Accounting for a service business means keeping records of client work, proposals, invoices, payments, receipts, expenses, supplier bills, payroll records, documents, reports, and accountant-ready information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Why is service business accounting different?</AccordionTrigger>
                <AccordionContent>
                  Service businesses often need to track work before and after invoicing, including proposals, quotes, job costs, partial payments, documents, and accountant review records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can Finza help Ghanaian service businesses organize accounting records?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian service businesses organize proposals, invoices, payments, expenses, documents, payroll records, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.
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

      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Keep service business accounting records clearer
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to organize proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="w-full rounded-md bg-white px-8 py-3.5 text-center text-base font-bold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 sm:w-auto"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/pricing"
                className="w-full rounded-md border border-zinc-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          {
            href: "/accounting-software-for-service-businesses-ghana",
            label: "Accounting software for service businesses",
            desc: "Compare software workflows for Ghanaian service businesses.",
          },
          {
            href: "/small-business-accounting-ghana",
            label: "Small business accounting Ghana",
            desc: "Manage records for growing Ghanaian businesses.",
          },
          {
            href: "/bookkeeping-software-ghana",
            label: "Bookkeeping software Ghana",
            desc: "Keep daily records organized for accountant review.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
