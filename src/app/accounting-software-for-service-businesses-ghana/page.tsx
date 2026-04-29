import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
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
  title: "Accounting Software for Service Businesses in Ghana | Finza",
  description:
    "Finza helps Ghanaian service businesses manage proposals, quotes, invoices, payments, expenses, incoming documents, payroll, reports, Ghana tax lines, and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-for-service-businesses-ghana",
  },
};

export default function ServiceBusinessAccountingGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            {
              name: "Accounting software for service businesses Ghana",
              path: "/accounting-software-for-service-businesses-ghana",
            },
          ]),
          faqPageSchema([
            {
              questionName: "What is accounting software for service businesses?",
              acceptedAnswerText:
                "Accounting software for service businesses helps organize client documents, invoices, payments, expenses, supplier bills, payroll records, reports, and accountant-ready information.",
            },
            {
              questionName: "Is Finza built for service businesses in Ghana?",
              acceptedAnswerText:
                "Yes. Finza is built for Ghanaian service businesses that need proposals, quotes, invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Can Finza help with proposals and quotes?",
              acceptedAnswerText:
                "Yes. Finza supports proposals, quotes, proformas, invoices, and receipts as part of the service business workflow.",
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
              Accounting software for service businesses in Ghana
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              Finza helps Ghanaian service businesses manage the records behind client work - proposals, quotes, proformas, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records in GHS.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
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
              No card required to start. Built for service businesses that want clearer records before accountant review.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Service business accounting starts with the work itself
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              For service businesses, accounting does not begin only when reports are prepared. It begins when a client requests work, a proposal is sent, a quote is approved, an invoice is issued, payment is recorded, and expenses are captured.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              When these records are scattered across WhatsApp, email, folders, notebooks, and spreadsheets, the accountant receives an incomplete business story.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps keep the service workflow and the records behind it closer together.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Built around the service business workflow
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "Proposals",
                  d: "Prepare structured proposals before the job starts.",
                },
                {
                  t: "Quotes and proformas",
                  d: "Send clear estimates and proformas before invoicing.",
                },
                {
                  t: "Invoices and receipts",
                  d: "Create client-ready invoices and receipts in GHS.",
                },
                {
                  t: "Payments",
                  d: "Record full payments, partial payments, and outstanding balances.",
                },
                {
                  t: "Expenses and bills",
                  d: "Track business costs, supplier bills, and supporting records.",
                },
                {
                  t: "Reports and accountant review",
                  d: "Review reports, exports, audit logs, and accountant-ready records where applicable.",
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
              From client request to accountant-ready records
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports the full path from client work to business records. Instead of managing each step separately, service businesses can keep the main records connected as work moves forward.
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
              <li>Prepare a proposal</li>
              <li>Send a quote or proforma</li>
              <li>Convert approved work into an invoice</li>
              <li>Record full or partial payment</li>
              <li>Issue a receipt</li>
              <li>Capture expenses, bills, and incoming documents</li>
              <li>Review reports and accountant-ready records</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              For Ghanaian service businesses that need more control
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is designed for service businesses that need more than a simple invoice template. It helps owners track the work, documents, payments, and records that accountants often need later.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Agencies",
                "Maintenance teams",
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
              Ghana tax lines and GHS records where applicable
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports GHS-based records and Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
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
              Why service businesses outgrow manual records
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Manual records can work at the beginning. But as more clients, jobs, invoices, payments, expenses, documents, and payroll records appear, the business becomes harder to review.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps reduce scattered administration by keeping core service business records in one connected workspace.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What Finza helps service businesses manage
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
                <AccordionTrigger>What is accounting software for service businesses?</AccordionTrigger>
                <AccordionContent>
                  Accounting software for service businesses helps organize client documents, invoices, payments, expenses, supplier bills, payroll records, reports, and accountant-ready information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Is Finza built for service businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghanaian service businesses that need proposals, quotes, invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can Finza help with proposals and quotes?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports proposals, quotes, proformas, invoices, and receipts as part of the service business workflow.
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
              Run your service business with clearer records
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
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
        related={[
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          {
            href: "/accounting-for-service-business-ghana",
            label: "Accounting for service business",
            desc: "Guide and workflow",
          },
          { href: "/small-business-accounting-ghana", label: "Small business accounting", desc: "SME workflows in Ghana" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
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
