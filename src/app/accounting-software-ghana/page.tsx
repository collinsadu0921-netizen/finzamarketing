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
import {
  breadcrumbListSchema,
  faqPageSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software in Ghana for Service Businesses | Finza",
  description:
    "Finza is accounting software for Ghanaian service businesses that need proposals, invoices, payments, expenses, payroll, Ghana tax lines, reports, and accountant-ready records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-ghana",
  },
};

export default function AccountingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          softwareApplicationSchema(),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Accounting software for Ghana", path: "/accounting-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "Is Finza accounting software for Ghanaian businesses?",
              acceptedAnswerText:
                "Yes. Finza is built for Ghanaian businesses that need to manage records in GHS, including invoices, payments, expenses, payroll, reports, and Ghana tax lines where applicable.",
            },
            {
              questionName: "Does Finza support VAT, NHIL, GETFund, and WHT?",
              acceptedAnswerText:
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and accountant or GRA guidance.",
            },
            {
              questionName: "Can my accountant use Finza?",
              acceptedAnswerText:
                "Finza is designed to support cleaner accountant review with reports, exports, ledger-supported workflows, audit logs, and period controls.",
            },
            {
              questionName: "Does Finza replace my accountant?",
              acceptedAnswerText:
                "No. Finza helps organize business records and reports. Your accountant or tax adviser should confirm the correct treatment for your business.",
            },
            {
              questionName: "Is there a free trial?",
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
              Accounting software in Ghana for service businesses
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian service businesses manage the work that leads to accounting: proposals, quotes, invoices, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records in GHS.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Start 14-day free trial
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                See how Finza works
              </Link>
            </div>
            <p className="max-w-3xl text-sm text-zinc-500">No card required to start. Built around Ghanaian business records and GHS.</p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Accounting starts before month-end</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              For many service businesses in Ghana, accounting problems do not start with the final report. They start earlier - when proposals are sent in one place, invoices are created somewhere else, receipts stay on phones, payments are tracked manually, and payroll records are separated from the rest of the business.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps bring those records into one connected workspace so your business and accountant have cleaner information to work with.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">From proposal to accountant-ready records</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built around the full business workflow, not only the final accounting report. Your team can manage client documents, track money, capture costs, and keep supporting records together.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Proposals and quotes",
                  d: "Prepare professional proposals, quotes, and proformas before the invoice stage.",
                },
                {
                  t: "Invoices and receipts",
                  d: "Send invoices, record payments, and issue receipts when money is received.",
                },
                {
                  t: "Expenses and supplier bills",
                  d: "Track business costs and supplier obligations in the same workspace.",
                },
                {
                  t: "Incoming documents",
                  d: "Upload receipts, PDFs, bills, and supporting documents for review.",
                },
                {
                  t: "Payroll",
                  d: "Keep payroll records closer to the rest of your business activity.",
                },
                {
                  t: "Reports and exports",
                  d: "Use reports and exports to support month-end review and accountant work.",
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
            <h2 className="text-3xl font-bold text-zinc-900">Built for Ghanaian tax and business records</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports Ghana-focused records in GHS, including tax breakdowns where applicable. Your documents can show VAT, NHIL, GETFund, and WHT clearly instead of hiding everything inside one general number.
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

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Cleaner records for your accountant</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps daily business activity create better records as work happens. Invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, and reports stay connected.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Behind the scenes, Finza supports accounting-grade workflows such as ledger records, journals, chart of accounts, trial balance, period controls, audit logs, and exports.
            </p>
            <Link href="/accountants" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              For accountants
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Who this accounting software is for</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that want more structure than spreadsheets, WhatsApp messages, PDFs, and scattered folders.
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
            <h2 className="text-3xl font-bold text-zinc-900">What Finza helps you manage</h2>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Proposals",
                "Quotes",
                "Proformas",
                "Invoices",
                "Receipts",
                "Customer balances",
                "Payment recording",
                "Partial payments",
                "Overdue invoices",
                "Expenses",
                "Supplier bills",
                "Incoming documents",
                "Document review",
                "Payroll",
                "Ghana tax lines where applicable",
                "Reports",
                "Ledger-supported accounting workflows",
                "Exports",
                "Audit logs",
                "Period controls",
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
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Why not just use Excel?</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Excel can work when a business is very small. But as client work grows, records become harder to control. One file tracks invoices, another tracks expenses, receipts sit in WhatsApp, and payment status depends on manual updates.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza gives your business one workspace for the records that matter: client documents, payments, expenses, supplier bills, payroll, documents, and reports.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 8 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Accounting support, not a replacement for professional advice</h2>
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
            <h2 className="text-2xl font-bold text-zinc-900">Common questions about accounting software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Is Finza accounting software for Ghanaian businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghanaian businesses that need to manage records in GHS, including invoices, payments, expenses, payroll, reports, and Ghana tax lines where applicable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Does Finza support VAT, NHIL, GETFund, and WHT?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can my accountant use Finza?</AccordionTrigger>
                <AccordionContent>
                  Finza is designed to support cleaner accountant review with reports, exports, ledger-supported workflows, audit logs, and period controls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize business records and reports. Your accountant or tax adviser should confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
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
            <h2 className="text-3xl font-extrabold text-white">Start with cleaner accounting records in GHS</h2>
            <p className="text-zinc-300">
              Use Finza to manage proposals, invoices, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records from one connected workspace.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1" className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900">
                Start 14-day free trial
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/features", label: "Features", desc: "Capabilities" },
          { href: "/pricing", label: "Pricing", desc: "GHS plans" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Send & track" },
          { href: "/invoice-calculator-ghana", label: "Ghana invoice calculator", desc: "Preview invoice totals" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Track costs" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax lines" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "PAYE & SSNIT" },
          { href: "/accountants", label: "For accountants", desc: "Professional review" },
        ]}
      />
      <Footer />
    </main>
  );
}
