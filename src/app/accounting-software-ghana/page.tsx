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
    "Finza is accounting software for Ghanaian service businesses that need month-end visibility, GHS reports, receivables, payables, and cleaner professional review handoff.",
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
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and professional adviser or GRA guidance.",
            },
            {
              questionName: "Can my professional adviser use Finza?",
              acceptedAnswerText:
                "Finza is designed to support cleaner professional review with reports, exports, ledger-supported workflows, audit logs, and period controls.",
            },
            {
              questionName: "Does Finza replace professional advice?",
              acceptedAnswerText:
                "No. Finza helps organize business records and reports. Your professional adviser or tax adviser should confirm the correct treatment for your business.",
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
              Accounting software in Ghana for month-end clarity
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps owners and professional advisers see receivables, payables, expenses, payroll impact, Ghana tax lines, and reports in one GHS workspace before month-end turns into a spreadsheet chase.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Find my plan</Link>
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
              Finza helps bring those records into one connected workspace so your business and professional adviser have cleaner information to work with.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Reports built from daily activity</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              This page is the accounting hub. It focuses on the records owners and professional advisers need for review: customer balances, supplier obligations, expense context, payroll records, tax-line visibility, and exports.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  t: "Receivables",
                  d: "See customer balances and invoice payment status before follow-up or review.",
                },
                {
                  t: "Payables and costs",
                  d: "Keep supplier bills, expenses, and supporting records closer to reports.",
                },
                {
                  t: "GHS reporting",
                  d: "Review business activity and reports in Ghana cedis.",
                },
                {
                  t: "Professional review handoff",
                  d: "Give your professional adviser cleaner records, exports, and period context.",
                },
                {
                  t: "Controls",
                  d: "Use audit logs, period controls, and accounting workflows where your plan supports them.",
                },
                {
                  t: "Tax-line review",
                  d: "Show VAT, NHIL, GETFund, and WHT where applicable without turning Finza into tax advice.",
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
              Tax treatment depends on your business registration, supply type, and professional adviser or GRA guidance.
            </p>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "GHS-based records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Tax breakdowns on supported documents",
                "Reports that help with professional review",
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
            <h2 className="text-3xl font-bold text-zinc-900">Cleaner records for professional review</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps daily business activity create better records as work happens. Invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, and reports stay connected.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Behind the scenes, Finza supports accounting-grade workflows such as ledger records, journals, chart of accounts, trial balance, period controls, audit logs, and exports.
            </p>
            <Link href="/features" className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
              Explore professional review
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
                "Growing SMEs preparing for professional review",
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
            <h2 className="text-3xl font-bold text-zinc-900">Accounting controls owners can understand</h2>
            <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Customer balances",
                "Supplier obligations",
                "Expense context",
                "Payroll record visibility",
                "Ghana tax lines where applicable",
                "Reports in GHS",
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
              Finza helps organize business records, documents, payments, and reports. It does not guarantee tax compliance, replace professional advice, or remove the need to review important financial information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your professional adviser or tax adviser should confirm the correct treatment for your business.
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
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. The correct tax treatment depends on your business registration, supply type, and professional adviser or GRA guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can my professional adviser use Finza?</AccordionTrigger>
                <AccordionContent>
                  Finza is designed to support cleaner professional review with reports, exports, ledger-supported workflows, audit logs, and period controls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace professional advice?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize business records and reports. Your professional adviser or tax adviser should confirm the correct treatment for your business.
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
              Use Finza to review balances, costs, payroll records, tax lines, reports, and professional review handoff from one connected workspace.
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
          { href: "/features", label: "Features", desc: "Capabilities" },
          { href: "/pricing", label: "Pricing", desc: "GHS plans" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Send & track" },
          { href: "/invoice-calculator-ghana", label: "Ghana invoice calculator", desc: "Preview invoice totals" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Track costs" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax lines" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "PAYE & SSNIT" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
        ]}
      />
      <Footer />
    </main>
  );
}
