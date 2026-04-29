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
  title: "Payroll Software in Ghana for Service Businesses | Finza",
  description:
    "Finza helps Ghanaian service businesses keep payroll records connected with invoices, expenses, payments, reports, and accountant-ready business records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa/payroll-software-ghana",
  },
};

export default function PayrollSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Payroll software for Ghana", path: "/payroll-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza payroll software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza helps Ghanaian service businesses keep payroll records connected with expenses, payments, reports, and accountant-ready records in GHS.",
            },
            {
              questionName: "Does Finza connect payroll with business records?",
              acceptedAnswerText:
                "Yes. Finza is designed to keep payroll closer to invoices, payments, expenses, supplier bills, incoming documents, and reports.",
            },
            {
              questionName: "Does Finza replace my accountant or payroll adviser?",
              acceptedAnswerText:
                "No. Finza helps organize records for review. Your accountant, payroll adviser, or tax adviser should confirm the correct treatment for your business.",
            },
            {
              questionName: "Can payroll be reviewed with reports?",
              acceptedAnswerText:
                "Finza helps keep payroll records closer to reporting and accountant-ready records so payroll can be reviewed with the wider business activity.",
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
              Payroll software in Ghana for service businesses
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian service businesses manage payroll records alongside invoices, payments, expenses, supplier bills, incoming documents, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/demo"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                See how Finza works
              </Link>
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Payroll should not sit outside the rest of your business records
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Payroll is part of the wider business picture. When staff costs are separated from invoices, expenses, supplier bills, payments, and reports, it becomes harder to understand the real cost of running the business.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps keep payroll records closer to the rest of your business activity so your team and accountant have cleaner information to review.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Keep payroll connected to business operations
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is designed for service businesses that need more structure around people, costs, payments, documents, and reporting.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Payroll records",
                  d: "Keep salary and payroll activity organized in the same workspace as your business records.",
                },
                {
                  t: "Expenses and supplier bills",
                  d: "Review payroll alongside business costs and supplier obligations.",
                },
                {
                  t: "Reports",
                  d: "Use reports to understand how payroll fits into your wider business activity.",
                },
                {
                  t: "Accountant-ready records",
                  d: "Prepare cleaner information for accountant review and month-end work.",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Useful for teams that are growing beyond manual records
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Manual payroll notes can work when a business is very small. But as the team grows, payroll needs to be easier to review with the rest of the company&apos;s records.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps bring payroll closer to invoices, payments, expenses, documents, and reports instead of leaving everything split between spreadsheets and folders.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Payroll records",
                "Team-related business costs",
                "Expense tracking",
                "Supplier bills",
                "Incoming documents",
                "Reports",
                "Exports for review",
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

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Connect payroll with clearer month-end review
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Month-end review becomes harder when payroll, expenses, invoices, receipts, and payments are all stored separately. Finza helps keep these records closer together so your business has a clearer view before accountant review.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Payroll records in GHS",
                "Business expenses",
                "Supplier bills",
                "Payment records",
                "Incoming documents",
                "Reports and exports",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Built for Ghanaian service businesses
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that need practical operational records, not only final accounting reports.
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

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">More than payroll alone</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Payroll is only one part of business control. Finza also helps service businesses manage proposals, quotes, proformas, invoices, receipts, payments, expenses, supplier bills, incoming documents, Ghana tax lines where applicable, reports, and accountant-ready records.
            </p>
            <Link href="/features" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              Explore all features
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Payroll support, not a replacement for professional advice
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize payroll-related business records, documents, payments, and reports. It does not replace your accountant, payroll adviser, tax adviser, or the need to review important payroll and statutory information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant, payroll adviser, or tax adviser should confirm the correct treatment for your business.
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
                <AccordionTrigger>Is Finza payroll software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps Ghanaian service businesses keep payroll records connected with expenses, payments, reports, and accountant-ready records in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Does Finza connect payroll with business records?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is designed to keep payroll closer to invoices, payments, expenses, supplier bills, incoming documents, and reports.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace my accountant or payroll adviser?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for review. Your accountant, payroll adviser, or tax adviser should confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can payroll be reviewed with reports?</AccordionTrigger>
                <AccordionContent>
                  Finza helps keep payroll records closer to reporting and accountant-ready records so payroll can be reviewed with the wider business activity.
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
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Keep payroll closer to your business records
            </h2>
            <p className="text-base text-zinc-300">
              Use Finza to manage payroll records, expenses, payments, documents, reports, and accountant-ready information in one connected workspace.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900 shadow-sm hover:bg-zinc-100"
              >
                Start 14-day free trial
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/features", label: "Features", desc: "Explore capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Proposals and quotes" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
        ]}
      />
      <Footer />
    </main>
  );
}
