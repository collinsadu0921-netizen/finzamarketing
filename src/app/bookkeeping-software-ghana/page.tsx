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
import { ProductProofSection } from "@/components/product-proof-section";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bookkeeping Software in Ghana for Service Businesses | Finza",
  description:
    "Finza bookkeeping software helps Ghanaian service businesses capture receipts, expenses, supplier bills, incoming documents, and weekly records before accountant review.",
  alternates: {
    canonical: "https://www.finza.africa/bookkeeping-software-ghana",
  },
};

export default function BookkeepingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Bookkeeping software for Ghana", path: "/bookkeeping-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza bookkeeping software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian service businesses keep invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, and reports organized in GHS.",
            },
            {
              questionName: "Can I upload receipts and supplier bills?",
              acceptedAnswerText:
                "Yes. Finza supports incoming documents and document uploads so receipts, supplier bills, PDFs, and supporting records can be reviewed inside the workspace.",
            },
            {
              questionName: "Does Finza help with payment tracking?",
              acceptedAnswerText:
                "Yes. Finza helps record full and partial payments against the correct invoice and customer, so customer balances and outstanding invoices are easier to review.",
            },
            {
              questionName: "Does Finza support Ghana tax lines?",
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
              Bookkeeping software in Ghana for cleaner weekly records
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps teams capture receipts, expenses, supplier bills, incoming documents, and payment records before they disappear into WhatsApp, email, phone galleries, or spreadsheets.
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
              No card required to start. Work in GHS with records built around Ghanaian business needs.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Bookkeeping becomes harder when records are scattered</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              For many service businesses, bookkeeping problems come from missing or disconnected records. Invoices are saved as PDFs, receipts stay on phones, supplier bills arrive in different places, and payments are marked manually.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps bring those records into one workspace so your business has cleaner information to review before month-end.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Keep daily records ready for weekly review</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              This page is about bookkeeping habits, not the full accounting hub. Use Finza to keep the evidence behind sales, costs, bills, and payments in one place as the week happens.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Receipts",
                  d: "Keep proof of spending close to the expense or supplier record.",
                },
                {
                  t: "Expenses",
                  d: "Record business costs while the details are still fresh.",
                },
                {
                  t: "Supplier bills",
                  d: "Track supplier obligations and keep bill records organized.",
                },
                {
                  t: "Incoming documents",
                  d: "Upload receipts, PDFs, bills, and supporting documents for review.",
                },
                {
                  t: "Payment notes",
                  d: "Keep payment records tied to the customer or supplier activity they explain.",
                },
                {
                  t: "Accountant review",
                  d: "Prepare cleaner weekly records before month-end review begins.",
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

      <ProductProofSection
        assetIds={["expenses", "reports-export"]}
        eyebrow="Bookkeeping records"
        heading="Keep daily records ready before accountant review"
        lead="Finza helps keep expenses, supplier bills, receipts, and reports organised through the month, instead of rebuilding records from messages and spreadsheets later."
      />

      {/* SECTION 3 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Capture supporting documents before they disappear</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Receipts, bills, PDFs, and other supporting documents are often the hardest part of bookkeeping. Finza helps you bring those records into the workspace so they are easier to review and connect to business activity.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Use incoming documents to reduce the end-of-month search through phones, folders, WhatsApp messages, and email attachments.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Receipt uploads",
                "Supplier bill records",
                "PDF and document storage",
                "Incoming document review",
                "Supporting records for expenses and bills",
                "Cleaner month-end preparation",
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
            <h2 className="text-3xl font-bold text-zinc-900">Track payments and customer balances</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Bookkeeping also depends on knowing which invoices have been paid, partly paid, or left outstanding. Finza helps you record payments against the correct customer and invoice so balances are easier to review.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Full payment recording",
                "Partial payment tracking",
                "Overdue invoice visibility",
                "Customer balances",
                "Payment history",
                "Receipts after payment",
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
            <h2 className="text-3xl font-bold text-zinc-900">Built for Ghanaian records in GHS</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports Ghana-focused business records in GHS, including tax breakdowns where applicable. Your records can show VAT, NHIL, GETFund, and WHT clearly instead of hiding everything inside one general tax figure.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "GHS-based records",
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

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Hand over cleaner bookkeeping, not a folder dump</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps daily business activity create better records as work happens. Receipts, supplier bills, payments, expenses, and documents stay easier to review.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Behind the scenes, Finza supports accounting-grade workflows such as ledger records, journals, chart of accounts, trial balance, period controls, audit logs, and exports.
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
            <h2 className="text-3xl font-bold text-zinc-900">Who this bookkeeping software is for</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that want better bookkeeping structure without relying only on spreadsheets, WhatsApp messages, folders, and manual payment notes.
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
            <h2 className="text-3xl font-bold text-zinc-900">Bookkeeping support, not a replacement for professional advice</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, and reports. It does not guarantee tax compliance, replace your accountant, or remove the need to review important financial information.
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
            <h2 className="text-2xl font-bold text-zinc-900">Common questions about bookkeeping software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza bookkeeping software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian service businesses keep invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, and reports organized in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I upload receipts and supplier bills?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports incoming documents and document uploads so receipts, supplier bills, PDFs, and supporting records can be reviewed inside the workspace.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza help with payment tracking?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps record full and partial payments against the correct invoice and customer, so customer balances and outstanding invoices are easier to review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza support Ghana tax lines?</AccordionTrigger>
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
            <h2 className="text-3xl font-extrabold text-white">Keep cleaner bookkeeping records in GHS</h2>
            <p className="text-zinc-300">
              Use Finza to capture receipts, expenses, supplier bills, payment records, incoming documents, and review notes in one GHS workspace.
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
        mode="no-primary"
        related={[
          { href: "/bookkeeping-for-small-business-ghana", label: "Small business bookkeeping", desc: "Bookkeeping habits for SMEs" },
          { href: "/expense-tracking-software-ghana", label: "Expense tracking", desc: "Costs and receipts" },
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Proposals to invoice" },
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
