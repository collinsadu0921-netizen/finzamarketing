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
  title: "QuickBooks Alternative in Ghana | Compare a Ghana-Focused Workflow",
  description:
    "Comparing QuickBooks with Ghana-focused business software? See how Finza helps service businesses manage proposals, invoices, payments, expenses, tax lines, and accountant-ready records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa/quickbooks-alternative-ghana",
  },
};

const quickBooksAlternativeFaqForSchema = [
  {
    questionName: "Is Finza a QuickBooks replacement?",
    acceptedAnswerText:
      "Finza can be considered by Ghanaian service businesses comparing QuickBooks with a Ghana-focused workflow. The right choice depends on your business needs, accountant, team, and reporting requirements.",
  },
  {
    questionName: "Does Finza work for service businesses in Ghana?",
    acceptedAnswerText:
      "Yes. Finza is built around service-business workflows such as proposals, quotes, invoices, payments, expenses, documents, payroll records, and accountant-ready review.",
  },
  {
    questionName: "Does Finza replace my accountant?",
    acceptedAnswerText: "No. Finza helps organize records so your accountant has cleaner information to review.",
  },
  {
    questionName: "Can Finza help with Ghana tax lines?",
    acceptedAnswerText:
      "Finza supports Ghana tax-line presentation where applicable, so invoice and record review can be clearer.",
  },
  {
    questionName: "Can I try Finza before paying?",
    acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
  },
];

const comparisonRows = [
  {
    questionName: "Can we manage proposals, quotes, invoices, and payments together?",
    matters:
      "Service businesses often lose context when client work and billing are separated.",
    finza: "Finza connects proposal-to-payment workflows in one workspace.",
  },
  {
    questionName: "Can records be reviewed in GHS?",
    matters: "Local currency clarity makes owner review and accountant handover easier.",
    finza: "Finza is priced and positioned around Ghana cedi workflows.",
  },
  {
    questionName: "Can expenses and documents be organized before month-end?",
    matters: "Missing receipts and supplier records make review harder.",
    finza: "Finza supports expense, supplier bill, and incoming document workflows.",
  },
  {
    questionName: "Can Ghana tax lines be shown clearly where they apply?",
    matters: "Owners and accountants need clearer document-level visibility.",
    finza: "Finza supports Ghana tax-line presentation where applicable.",
  },
  {
    questionName: "Does it replace professional advice?",
    matters: "Software should support review, not replace professional judgment.",
    finza: "Finza helps organize records for accountant review.",
  },
];

export default function QuickbooksAlternativeGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "QuickBooks alternative Ghana", path: "/quickbooks-alternative-ghana" },
          ]),
          faqPageSchema(quickBooksAlternativeFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              QuickBooks alternative in Ghana for service businesses comparing local workflows
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              If you are comparing QuickBooks with software built around Ghanaian service-business workflows, focus on the daily work: proposals, quotes, invoices, payments, expenses, documents, GHS records, and accountant review. Finza is built to keep those records connected from client work to month-end review.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/pricing#find-plan"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Find my plan
              </Link>
            </div>
            <p className="text-sm text-zinc-500">14-day free trial. No card required to start.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What to compare before choosing accounting software
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              A useful comparison should go beyond brand recognition. For many Ghanaian service businesses, the important question is whether the software fits the way records are created every day.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Client proposals",
                "Quotes and invoices",
                "GHS payment tracking",
                "Expense records",
                "Supporting documents",
                "Ghana tax-line visibility",
                "Accountant review",
                "Reports and controls",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              For broader software context, browse{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>
              ,{" "}
              <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                best accounting software Ghana
              </Link>
              , and{" "}
              <Link href="/accounting-vs-excel-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting vs Excel Ghana
              </Link>{" "}
              alongside this comparison.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Where Finza is different</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is positioned around the full service-business workflow, not only end-of-month accounting reports. It helps owners keep client work, billing, payments, expenses, documents, payroll records, and review information closer to one workspace.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Create proposals, quotes, proformas, and invoices",
                "Track sent, paid, and overdue invoices",
                "Record payments and business expenses",
                "Keep supplier bills and supporting documents",
                "Show Ghana tax lines where they apply",
                "Review business activity in GHS",
                "Prepare cleaner records for accountant review",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              Related hubs:{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotation software Ghana
              </Link>
              ,{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software Ghana
              </Link>
              ,{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoice tracking software Ghana
              </Link>
              ,{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                expense tracking software Ghana
              </Link>
              , and{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              GHS-first records for Ghanaian service businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Many Ghanaian businesses need records that are easy to read in Ghana cedis and easy to explain to their accountant. Finza keeps the focus on GHS workflows, local document clarity, and business records that are easier to review.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Pricing shown in Ghana cedis</li>
              <li>Invoices and records prepared around GHS workflows</li>
              <li>Tax-line presentation for Ghana business documents</li>
              <li>Payment and expense records kept near the original activity</li>
              <li>Reports designed for owner and accountant review</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              QuickBooks may still be the right fit for some businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Some businesses may prefer QuickBooks because they already use it, their accountant is already set up for it, or they need a broader global software ecosystem. The right choice depends on your business model, team, accountant, and reporting needs.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Businesses comparing ecosystems may also read{" "}
              <Link href="/sage-accounting-alternative-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Sage accounting alternative Ghana
              </Link>{" "}
              for another neutral competitor-comparison framing.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">When Finza may be worth considering</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza may be a better fit when your service business wants a simpler Ghana-focused workflow from client work to accountant-ready records.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "You quote before invoicing",
                "You need clearer unpaid-invoice tracking",
                "You want expense records and receipts in one place",
                "You work mainly in GHS",
                "You want cleaner handover to your accountant",
                "You want software shaped around Ghanaian service businesses",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Comparison checklist</h2>
            <div className="-mx-4 overflow-x-auto sm:mx-0">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="whitespace-normal px-3 py-3 font-bold text-zinc-900">Question</th>
                    <th className="whitespace-normal px-3 py-3 font-bold text-zinc-900">Why it matters</th>
                    <th className="whitespace-normal px-3 py-3 font-bold text-zinc-900">Finza angle</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.questionName} className="border-b border-zinc-100 align-top">
                      <td className="px-3 py-4 text-zinc-800">{row.questionName}</td>
                      <td className="px-3 py-4 text-zinc-600">{row.matters}</td>
                      <td className="px-3 py-4 text-zinc-700">{row.finza}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Who this page is for</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              This page is for Ghanaian service-business owners comparing software options and trying to choose a practical system for daily operations and record review.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Cleaning and facility service businesses",
                "Contractors and maintenance teams",
                "Agencies and consultants",
                "Professional service firms",
                "SMEs moving away from spreadsheet-only records",
                "Businesses preparing cleaner records for accountants",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Need a walkthrough before you decide? Book{" "}
              <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                how it works
              </Link>
              {" "}or{" "}
              <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                contact Finza
              </Link>
              . Accountants can explore{" "}
              <Link href="/accountants" className="font-semibold text-zinc-900 underline underline-offset-2">
                accountant resources
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Important disclaimer</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is not legal, tax, accounting, or financial advice. Finza helps organize business records, documents, invoices, payments, expenses, and reports for review. You remain responsible for checking your records and working with qualified professionals where needed.
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
                <AccordionTrigger>Is Finza a QuickBooks replacement?</AccordionTrigger>
                <AccordionContent>
                  Finza can be considered by Ghanaian service businesses comparing QuickBooks with a Ghana-focused workflow. The right choice depends on your business needs, accountant, team, and reporting requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Does Finza work for service businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built around service-business workflows such as proposals, quotes, invoices, payments, expenses, documents, payroll records, and accountant-ready review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records so your accountant has cleaner information to review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can Finza help with Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax-line presentation where applicable, so invoice and record review can be clearer.
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

      <section className="bg-[#0F172A] py-24 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Compare Finza with your current workflow
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use the free trial to see whether Finza's proposal-to-payment workflow fits your Ghanaian service business better than spreadsheet-only records or a system that does not match your daily process.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link href="/contact"
                className="w-full rounded-md bg-white px-8 py-3.5 text-center text-base font-bold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 sm:w-auto"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/demo"
                className="w-full rounded-md border border-zinc-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/sage-accounting-alternative-ghana", label: "Sage alternative Ghana", desc: "Neutral comparison lens" },
          { href: "/accounting-software-ghana", label: "Accounting Ghana", desc: "Finza overview in GHS" },
          { href: "/best-accounting-software-ghana", label: "Best accounting Ghana", desc: "Shortlist framing" },
        ]}
      />
      <Footer />
    </main>
  );
}
