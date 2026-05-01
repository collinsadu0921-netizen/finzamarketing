import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "VAT Software in Ghana for Service Businesses | Finza",
  description:
    "Finza helps Ghanaian service businesses show VAT, NHIL, GETFund, WHT, and other applicable Ghana tax lines on documents, payments, reports, and accountant-ready records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa/vat-software-ghana",
  },
};

export default function VatSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "VAT software for Ghana", path: "/vat-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza VAT software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian service businesses show VAT and related Ghana tax lines where applicable on supported documents, payments, reports, and accountant-ready records.",
            },
            {
              questionName: "Does Finza support NHIL and GETFund?",
              acceptedAnswerText:
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct treatment depends on your business registration, supply type, and accountant or GRA guidance.",
            },
            {
              questionName: "Does Finza support WHT?",
              acceptedAnswerText:
                "Finza supports WHT receivable tracking where applicable, so withholding deductions can be reviewed with the related invoice and payment records.",
            },
            {
              questionName: "Does Finza file my VAT return automatically?",
              acceptedAnswerText:
                "No. Finza helps organize records and reports for review. Your accountant or tax adviser should confirm and submit the correct tax filings for your business.",
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
              VAT software in Ghana for service businesses
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian service businesses prepare clearer records with VAT, NHIL, GETFund, WHT, and other applicable Ghana tax lines shown where they belong - on supported documents, payment records, reports, and accountant-ready exports.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
              >
                Start 14-day free trial
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                See how Finza works
              </Link>
            </div>
            <p className="text-sm text-zinc-500">No card required to start. Work in GHS with Ghana tax lines where applicable.</p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Tax records become messy when the breakdown is unclear</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              For many businesses, the problem is not only sending the invoice. The problem is knowing what the invoice includes, what tax lines apply, what was paid, what was withheld, and what the accountant needs to review later.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps keep tax-related document details closer to the invoices, payments, receipts, reports, and supporting records they belong to.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Show Ghana tax lines clearly on business documents</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps supported documents show Ghana tax lines clearly where applicable. Instead of hiding everything inside one general tax figure, your team can review the breakdown behind the total.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "VAT",
                  d: "Show VAT where it applies to the document and business context.",
                },
                {
                  t: "NHIL",
                  d: "Show NHIL where applicable as part of the Ghana tax breakdown.",
                },
                {
                  t: "GETFund",
                  d: "Show GETFund where applicable as part of the Ghana tax breakdown.",
                },
                {
                  t: "WHT",
                  d: "Track withholding tax receivable where applicable.",
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
            <h2 className="text-3xl font-bold text-zinc-900">Connect tax lines to invoices, payments, and reports</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Tax records are easier to review when they are not separated from the documents and payments that created them. Finza helps keep invoice totals, payment records, customer balances, WHT deductions, and reports closer together.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Invoices with Ghana tax lines where applicable",
                "Quotes and proformas with supported tax breakdowns",
                "Payment recording",
                "Partial payment tracking",
                "WHT receivable tracking where applicable",
                "Customer balances",
                "Reports for review",
                "Exports for accountant support",
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
            <h2 className="text-3xl font-bold text-zinc-900">Support accountant review instead of end-of-month confusion</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant needs more than a final number. They need context: invoices, receipts, payments, expenses, supplier bills, incoming documents, payroll records, and reports.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize those records so tax review can start from cleaner information.
            </p>
            <Link href="/accounting-software-ghana" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              Explore accounting features
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Useful for VAT-registered and growing businesses</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is useful for Ghanaian service businesses that need clearer tax records, especially when invoices, payments, supplier bills, WHT deductions, and accountant review are part of the workflow.
            </p>
            <div className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Service businesses issuing tax invoices",
                "Companies working with VAT, NHIL, or GETFund where applicable",
                "Businesses that receive WHT deductions from customers",
                "Contractors and professional service providers",
                "Growing SMEs working with an accountant",
                "Businesses that need clearer document and payment records",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
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
            <h2 className="text-3xl font-bold text-zinc-900">More than a VAT calculator</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              A calculator can help with a single figure, but business records need more structure. Finza connects tax lines to the wider workflow: client documents, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Tax software support, not tax advice</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, and reports. It does not guarantee tax compliance, replace your accountant, replace GRA guidance, or remove the need to review important financial information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant or tax adviser should confirm the correct tax treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza VAT software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian service businesses show VAT and related Ghana tax lines where applicable on supported documents, payments, reports, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Does Finza support NHIL and GETFund?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct treatment depends on your business registration, supply type, and accountant or GRA guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza support WHT?</AccordionTrigger>
                <AccordionContent>
                  Finza supports WHT receivable tracking where applicable, so withholding deductions can be reviewed with the related invoice and payment records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza file my VAT return automatically?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records and reports for review. Your accountant or tax adviser should confirm and submit the correct tax filings for your business.
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
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Keep clearer Ghana tax records in GHS</h2>
            <p className="text-zinc-300">
              Use Finza to manage invoices, payments, WHT deductions, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
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
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/invoice-calculator-ghana", label: "Try the invoice calculator", desc: "Preview invoice totals" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Proposals and quotes" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "Payroll records" },
          { href: "/ghana-vat-nhil-getfund", label: "Ghana VAT, NHIL, GETFund", desc: "Tax breakdown guide" },
          { href: "/how-vat-works-ghana", label: "How VAT works in Ghana", desc: "Plain-language guide" },
          { href: "/ghana-vat-calculator", label: "Ghana VAT calculator", desc: "Illustrative calculator" },
        ]}
      />
      <Footer />
    </main>
  );
}
