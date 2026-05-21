import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { Metadata } from "next";
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
  title: "For Accountants | Finza Accountant-Ready Records for Ghanaian Businesses",
  description:
    "Finza helps Ghanaian service businesses keep invoices, payments, expenses, documents, payroll, reports, audit logs, and exports organized for accountant review.",
  alternates: {
    canonical: "https://www.finza.africa/accountants",
  },
};

export default function AccountantsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "For accountants", path: "/accountants" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza made for accountants?",
              acceptedAnswerText:
                "Finza is built for Ghanaian service businesses and supports accountant review with organized records, reports, exports, audit logs, period controls, and ledger-supported accounting workflows.",
            },
            {
              questionName: "Can an accountant review business records in Finza?",
              acceptedAnswerText:
                "Finza supports accountant-ready records by keeping invoices, payments, expenses, supplier bills, incoming documents, payroll, reports, and exports closer together.",
            },
            {
              questionName: "Does Finza replace accountant review?",
              acceptedAnswerText:
                "No. Finza helps organize the records. The accountant or tax adviser should still review and confirm the correct treatment for the business.",
            },
            {
              questionName: "Does Finza support Ghana tax lines?",
              acceptedAnswerText:
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct treatment depends on the business registration, supply type, and accountant or GRA guidance.",
            },
            {
              questionName: "Can a business try Finza before paying?",
              acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Cleaner business records for accountant review
            </h1>
            <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
              Finza helps Ghanaian service businesses keep the records accountants need closer together - invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, audit logs, period controls, and exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors text-center">Find my plan</Link>
            </div>
            <p className="text-sm text-zinc-500">
              Built for business owners and accountants who want cleaner records in GHS.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Accountants should not have to rebuild the business story
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              When records are scattered across WhatsApp, PDFs, spreadsheets, email attachments, and phone galleries, accountant review becomes slower and more difficult.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps businesses organize the documents and transactions behind the numbers so accountants can review cleaner information with better context.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              The records accountants usually need
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza keeps daily business activity closer to the reports and exports used for review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Invoices and receipts",
                  d: "Review customer billing, payment records, receipts, and outstanding balances.",
                },
                {
                  t: "Expenses and supplier bills",
                  d: "Track business costs and supplier obligations with supporting records.",
                },
                {
                  t: "Incoming documents",
                  d: "Keep receipts, PDFs, bills, and uploaded documents available for review.",
                },
                {
                  t: "Payroll records",
                  d: "Review payroll activity closer to the wider business records.",
                },
                {
                  t: "Reports and exports",
                  d: "Use reports and exports to support month-end and period review.",
                },
                {
                  t: "Audit logs and period controls",
                  d: "Review activity history and period status where applicable.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-sm font-bold text-zinc-900 mb-1">{x.t}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              From daily work to accountant-ready records
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built around the workflow that happens before accounting review. The business can prepare proposals, quotes, proformas, invoices, payments, expenses, bills, documents, payroll, and reports in one connected workspace.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              That gives the accountant better starting information than disconnected files and manual summaries.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-base text-zinc-600 leading-relaxed">
              <li>Business sends proposals, quotes, proformas, and invoices</li>
              <li>Payments and receipts are recorded</li>
              <li>Expenses, supplier bills, and incoming documents are captured</li>
              <li>Payroll and business records stay closer together</li>
              <li>Reports, exports, audit logs, and period controls support review</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Support for Ghanaian business records
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports Ghana-focused records in GHS, including Ghana tax lines where applicable. Documents and reports can show tax-related details more clearly for review.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Tax treatment depends on the business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "GHS-based business records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Reports and exports for review",
                "Document records connected to business activity",
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
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Useful for accountants supporting service businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is especially useful where the accountant depends on the business owner to provide complete records before review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-zinc-700">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Maintenance teams",
                "Agencies",
                "Professional service providers",
                "Field-service businesses",
                "Growing SMEs with recurring accountant support",
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
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What Finza gives the accountant
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "Customer invoices",
                "Receipts",
                "Payment records",
                "Partial payment history",
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
                "Ledger-supported accounting workflows",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Software support, not professional judgment
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize business records, documents, payments, reports, and exports. It does not replace accountant review, tax advice, professional judgment, or GRA guidance.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              The accountant or tax adviser should confirm the correct treatment for the business.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza made for accountants?</AccordionTrigger>
                <AccordionContent>
                  Finza is built for Ghanaian service businesses and supports accountant review with organized records, reports, exports, audit logs, period controls, and ledger-supported accounting workflows.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can an accountant review business records in Finza?</AccordionTrigger>
                <AccordionContent>
                  Finza supports accountant-ready records by keeping invoices, payments, expenses, supplier bills, incoming documents, payroll, reports, and exports closer together.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace accountant review?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize the records. The accountant or tax adviser should still review and confirm the correct treatment for the business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza support Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct treatment depends on the business registration, supply type, and accountant or GRA guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Can a business try Finza before paying?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza offers a 14-day free trial. No card is required to start.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Help your business keep cleaner records before review
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to keep invoices, payments, expenses, documents, payroll, reports, exports, audit logs, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/contact"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                Find my plan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
        ]}
      />
      <Footer />
    </main>
  );
}
