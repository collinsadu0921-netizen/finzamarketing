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
  title: "Invoicing Software in Ghana for Service Businesses | Finza",
  description:
    "Create and send invoices in GHS with Finza. Manage quotes, proformas, payments, receipts, customer balances, Ghana tax lines, and accountant-ready records for your service business.",
  alternates: {
    canonical: "https://www.finza.africa/invoicing-software-ghana",
  },
};

export default function InvoicingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Invoicing software for Ghana", path: "/invoicing-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza invoicing software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian businesses create invoices in GHS, share them with clients, record payments, issue receipts, and keep invoice records connected to reports.",
            },
            {
              questionName: "Can I send invoices by WhatsApp?",
              acceptedAnswerText:
                "Finza supports invoice sharing by public link and WhatsApp link, so you can send invoice links through channels your clients already use.",
            },
            {
              questionName: "Does Finza support partial payments?",
              acceptedAnswerText:
                "Yes. Finza supports recording full and partial payments against the correct invoice and customer.",
            },
            {
              questionName: "Does Finza show VAT, NHIL, GETFund, and WHT?",
              acceptedAnswerText:
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and accountant or GRA guidance.",
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
              Invoicing software in Ghana for service businesses
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian service businesses create professional invoices, send them by email, PDF, public link, or WhatsApp link, track payments, issue receipts, and keep cleaner records for accountant review.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Find my plan</Link>
            </div>
            <p className="text-sm text-zinc-500">No card required to start. Work in GHS with Ghana tax lines where applicable.</p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Invoicing should not be separated from the rest of your business</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              An invoice is usually not the first step. Before the invoice, there may be a proposal, quote, proforma, site visit, scope of work, or client approval.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps keep that workflow connected so your team can move from client request to invoice, payment, receipt, and reports without rebuilding the same records again.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Create invoices that are clear for clients and useful for your records</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps you prepare invoices with customer details, line items, due dates, totals, notes, and Ghana tax lines where applicable.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your invoices are not just documents for the client. They also become part of your payment tracking, customer balance, reports, and accountant-ready records.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Professional invoices",
                  d: "Create invoices that are easy for clients to read and easier for your team to track.",
                },
                {
                  t: "GHS records",
                  d: "Keep invoice amounts, totals, and reports in Ghana cedis.",
                },
                {
                  t: "PDF and public links",
                  d: "Share invoices as PDFs or secure public document links.",
                },
                {
                  t: "Email and WhatsApp sharing",
                  d: "Send invoice links in the channels your clients already use.",
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
            <h2 className="text-3xl font-bold text-zinc-900">Track what has been sent, paid, and left outstanding</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps you follow invoice status after the document is sent. Record payments against the right customer and invoice, track partial payments, and see what remains unpaid or overdue.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Payment recording",
                "Partial payments",
                "Overdue invoices",
                "Customer balances",
                "Payment history",
                "Receipts after payment",
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
            <h2 className="text-3xl font-bold text-zinc-900">Show Ghana tax lines where they apply</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps show Ghana tax lines such as VAT, NHIL, GETFund, and WHT clearly where applicable. This makes invoices easier to review and helps your accountant understand how the invoice was prepared.
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
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">From quote or proforma to invoice</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Some clients need a quote before approval. Others need a proforma before payment. Finza supports those earlier document stages so your invoice does not start from scratch.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              You can prepare the client offer, confirm the details, and continue the workflow into the invoice stage.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Quotes",
                  d: "Send pricing before the client approves the work.",
                },
                {
                  t: "Proformas",
                  d: "Issue a formal payment request before the final invoice where needed.",
                },
                {
                  t: "Invoices",
                  d: "Bill the customer when the work, agreement, or payment stage requires it.",
                },
                {
                  t: "Receipts",
                  d: "Give proof of payment after money is recorded.",
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

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Cleaner invoice records for your accountant</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Invoices become more useful when they connect to the rest of your business records. Finza keeps invoices closer to payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accounting workflows.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              This helps reduce the end-of-month search through PDFs, screenshots, WhatsApp messages, and spreadsheets.
            </p>
            <Link href="/accounting-software-ghana" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              Explore accounting features
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Who this invoicing software is for</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that send client invoices and need better control over payment tracking and business records.
            </p>
            <div className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-4">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Agencies",
                "Maintenance teams",
                "Field-service businesses",
                "Professional service providers",
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
            <h2 className="text-3xl font-bold text-zinc-900">Invoice support, not a replacement for professional advice</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize invoices, payments, documents, and reports. It does not guarantee tax compliance, replace your accountant, or remove the need to review important financial information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant or tax adviser should confirm the correct treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions about invoicing software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza invoicing software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian businesses create invoices in GHS, share them with clients, record payments, issue receipts, and keep invoice records connected to reports.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I send invoices by WhatsApp?</AccordionTrigger>
                <AccordionContent>
                  Finza supports invoice sharing by public link and WhatsApp link, so you can send invoice links through channels your clients already use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza support partial payments?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports recording full and partial payments against the correct invoice and customer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza show VAT, NHIL, GETFund, and WHT?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
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
            <h2 className="text-3xl font-extrabold text-white">Create clearer invoices and track payments in GHS</h2>
            <p className="text-zinc-300">
              Use Finza to send invoices, record payments, issue receipts, track customer balances, and keep cleaner records for accountant review.
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
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Quote to invoice" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports & summaries" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Track expenses" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax lines" },
          { href: "/invoice-calculator-ghana", label: "Ghana invoice calculator", desc: "Preview invoice totals" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "Payroll workflow" },
          { href: "/features", label: "Features", desc: "Explore capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how it works" },
        ]}
      />
      <Footer />
    </main>
  );
}
