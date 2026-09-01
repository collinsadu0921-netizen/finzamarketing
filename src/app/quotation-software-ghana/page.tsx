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
  title: "Quotation Software in Ghana for Service Businesses | Finza",
  description:
    "Create professional quotes, proposals, proformas, and invoices in GHS with Finza. Send client-ready documents, track approvals, payments, and accountant-ready records for your Ghanaian service business.",
  alternates: {
    canonical: "https://www.finza.africa/quotation-software-ghana",
  },
};

export default function QuotationSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Quotation software for Ghana", path: "/quotation-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza quotation software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian service businesses create quotes in GHS and continue the workflow into proformas, invoices, payments, receipts, and reports.",
            },
            {
              questionName: "Can I create proposals as well as quotes?",
              acceptedAnswerText:
                "Yes. Finza supports proposals and quotes, so your team can prepare more detailed client offers before moving into invoicing.",
            },
            {
              questionName: "Can I send quotes by WhatsApp?",
              acceptedAnswerText:
                "Finza supports public document links and WhatsApp sharing links, so you can share quotes through channels your clients already use.",
            },
            {
              questionName: "Can a quote become an invoice?",
              acceptedAnswerText:
                "Finza supports connected document workflows so client details and pricing can move from earlier document stages toward invoicing and payment tracking.",
            },
            {
              questionName: "Can I try Finza before paying?",
              acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Quotation software in Ghana for service businesses
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian service businesses prepare professional quotes, proposals, proformas, and invoices in GHS, then continue the workflow into payment tracking, receipts, reports, and accountant-ready records.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Find my plan</Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. Built for service businesses that send client offers before billing.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">A quote should not be the end of the workflow</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Many service businesses start with a client request, site visit, scope of work, or price discussion. The quote is only one step.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps you manage the full document flow from proposal to quote, proforma, invoice, payment, receipt, and reports without rebuilding the same customer and pricing details again.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Prepare client-ready quotes and proposals</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps your team prepare documents that look professional and are easier for clients to review. You can organize scope, pricing, terms, customer details, and line items before moving the work into billing.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Proposals",
                  d: "Prepare structured proposals with scope, pricing, sections, terms, and client-ready presentation.",
                },
                {
                  t: "Quotes",
                  d: "Send clear pricing when a client needs to approve the work before invoicing.",
                },
                {
                  t: "Proformas",
                  d: "Issue a formal payment request before the final invoice where needed.",
                },
                {
                  t: "Invoices",
                  d: "Continue the workflow into billing once the client is ready.",
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

      {/* SECTION 3 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Send quotes the way your clients expect</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Clients do not all work the same way. Some want a PDF. Some prefer email. Others respond faster through WhatsApp.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps you share client documents through practical channels so your team can move faster from pricing to approval.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "PDF exports",
                "Email sending",
                "Public document links",
                "WhatsApp sharing links",
                "Client-ready formatting",
                "Clear totals in GHS",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Move from quote to invoice without starting again</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When a client approves the offer, the next step should not be manual copying. Finza helps keep customer details, line items, pricing, and business context connected as the work moves toward invoicing and payment tracking.
            </p>
            <ol className="list-inside list-decimal space-y-2 text-base leading-relaxed text-zinc-600">
              <li>Prepare the proposal or quote</li>
              <li>Send it to the client</li>
              <li>Continue into proforma or invoice</li>
              <li>Record payment</li>
              <li>Issue receipt</li>
              <li>Review reports and customer balances</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Show Ghana tax lines where they apply</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps show Ghana tax lines such as VAT, NHIL, GETFund, and WHT clearly where applicable. This helps clients and accountants understand the figures behind the document.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Tax breakdowns on supported documents",
                "Clear totals in GHS",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Better records after the client approves</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              A quote becomes more useful when it connects to the rest of your business records. Finza keeps quotes, invoices, payments, receipts, customer balances, expenses, supplier bills, documents, payroll, and reports closer together.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              This gives your team and accountant cleaner information after the work is approved.
            </p>
            <Link href="/features" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              Explore features
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Who this quotation software is for</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that prepare prices, scopes, proposals, quotes, or proformas before invoicing clients.
            </p>
            <div className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-4">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Maintenance teams",
                "Agencies",
                "Professional service providers",
                "Field-service businesses",
                "Growing SMEs working with an accountant",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Document support, not a replacement for professional advice</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize quotes, proposals, invoices, payments, documents, and reports. It does not replace your accountant, tax adviser, lawyer, or the need to review important business information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant, tax adviser, or legal adviser should confirm the correct treatment for your business and client agreements.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza quotation software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian service businesses create quotes in GHS and continue the workflow into proformas, invoices, payments, receipts, and reports.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I create proposals as well as quotes?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports proposals and quotes, so your team can prepare more detailed client offers before moving into invoicing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can I send quotes by WhatsApp?</AccordionTrigger>
                <AccordionContent>
                  Finza supports public document links and WhatsApp sharing links, so you can share quotes through channels your clients already use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can a quote become an invoice?</AccordionTrigger>
                <AccordionContent>
                  Finza supports connected document workflows so client details and pricing can move from earlier document stages toward invoicing and payment tracking.
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

      {/* FINAL CTA */}
      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Create better quotes and continue the workflow</h2>
            <p className="text-zinc-300">
              Use Finza to prepare proposals, quotes, proformas, invoices, payments, receipts, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900">
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                Find my plan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Track unpaid in GHS" },
          { href: "/features", label: "Features", desc: "Full list" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Accountant-ready records" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Track costs" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax lines" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "PAYE, payslips & advances" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
        ]}
      />
      <Footer />
    </main>
  );
}
