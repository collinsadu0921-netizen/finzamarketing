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
  title: "Sage Accounting Alternative in Ghana | Compare a Ghana-Focused Workflow",
  description:
    "Comparing Sage accounting alternatives in Ghana? See how Finza balances service-business workflow, GHS records, accounting review, and simpler SME usability.",
  alternates: {
    canonical: "https://www.finza.africa/sage-accounting-alternative-ghana",
  },
};

const sageAccountingAlternativeFaqForSchema = [
  {
    questionName: "Is Finza a Sage replacement?",
    acceptedAnswerText:
      "Finza can be considered by Ghanaian service businesses comparing Sage with a Ghana-focused workflow. The right choice depends on your business needs, accountant, team, and reporting requirements.",
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
    questionName: "Can the team avoid implementation-heavy accounting workflows?",
    matters:
      "Some SMEs need operational records and accountant handoff before they need a heavy finance implementation.",
    finza: "Finza keeps service work, billing, payments, expenses, payroll records, and review context in one workflow.",
  },
  {
    questionName: "Can records be reviewed in GHS?",
    matters: "Local currency visibility helps owners and accountants review records more clearly.",
    finza: "Finza is priced and positioned around Ghana cedi workflows.",
  },
  {
    questionName: "Can accounting depth stay connected to daily work?",
    matters: "A system can be powerful but still hard for operators if daily records live elsewhere.",
    finza: "Finza connects operational documents to review workflows so the team is not only working at month-end.",
  },
  {
    questionName: "Can Ghana tax lines be shown clearly where they apply?",
    matters: "Document-level tax visibility helps review and communication.",
    finza: "Finza supports Ghana tax-line presentation where applicable.",
  },
  {
    questionName: "Does it replace professional advice?",
    matters: "Software should support review, not replace professional judgment.",
    finza: "Finza helps organize records for accountant review.",
  },
];

export default function SageAccountingAlternativeGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Sage accounting alternative Ghana", path: "/sage-accounting-alternative-ghana" },
          ]),
          faqPageSchema(sageAccountingAlternativeFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Sage accounting alternative in Ghana for teams that need simpler operations
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              If Sage feels implementation-heavy for your current team, compare how Finza connects service work, invoicing, expenses, payroll records, GHS reports, and accountant review without separating operations from accounting.
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
              A useful Sage comparison should look at fit and operating burden, not only accounting depth. For Ghanaian service businesses, the right system should support the team that creates records every day.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Setup burden",
                "Operator usability",
                "Service workflow fit",
                "GHS reporting",
                "Supplier and expense records",
                "Payroll record context",
                "Accountant review",
                "Governance as you grow",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              See also{" "}
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
              </Link>
              {" "}while you weigh options, and{" "}
              <Link href="/quickbooks-alternative-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                QuickBooks alternative Ghana
              </Link>{" "}
              for another neutral competitor comparison framing.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Where Finza is different</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built for teams that need operational simplicity and accounting context together. Instead of making every operator work inside a heavy accounting process, it keeps the records they create closer to review.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Create client documents without a heavy setup",
                "Track payments and customer balances",
                "Record expenses and supplier bills earlier",
                "Keep payroll records near business records",
                "Support review workflows as the team grows",
                "Show Ghana tax lines where they apply",
                "Prepare cleaner records for accountant review",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              Workflow hubs:{" "}
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
              Accounting depth should not block daily use
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Sage may suit teams that need deep accounting configuration. Finza is aimed at service businesses that first need operators to keep GHS documents, payment records, expenses, and payroll context clean enough for review.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Pricing shown in Ghana cedis</li>
              <li>Operator-friendly service workflows</li>
              <li>Ghana tax-line presentation where applicable</li>
              <li>Payment, expense, and payroll records near daily activity</li>
              <li>Review workflows that can grow with the team</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Sage may still be the right fit for some businesses
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Some businesses may prefer Sage because they already use it, their accountant or finance team is already configured around it, or they need accounting depth beyond a simpler service-business workflow. The right choice depends on your business model, internal process, accountant, and reporting needs.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">When Finza may be worth considering</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza may be worth considering when your Ghanaian service business wants a more direct workflow from customer work to financial records.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "You prepare proposals before billing",
                "You send quotes, proformas, and invoices",
                "You want clearer unpaid-invoice tracking",
                "You want expenses and documents organized earlier",
                "You work mainly in GHS",
                "You want cleaner records for accountant review",
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
              This page is for Ghanaian service-business owners comparing accounting software options and deciding whether they need a broad accounting system or a Ghana-focused workflow for daily business records.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Cleaning and facility service businesses",
                "Contractors and maintenance teams",
                "Agencies and consultants",
                "Professional service firms",
                "SMEs moving away from spreadsheet-only records",
                "Businesses preparing cleaner records for professional review",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Explore{" "}
              <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                how Finza works
              </Link>
              , talk to us via{" "}
              <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                contact
              </Link>
              , or share records for professional review with your firm.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Important disclaimer</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is not legal, tax, accounting, or financial advice. Finza helps organize business records, documents, invoices, payments, expenses, payroll records, and reports for review. You remain responsible for checking your records and working with qualified professionals where needed.
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
                <AccordionTrigger>Is Finza a Sage replacement?</AccordionTrigger>
                <AccordionContent>
                  Finza can be considered by Ghanaian service businesses comparing Sage with a Ghana-focused workflow. The right choice depends on your business needs, accountant, team, and reporting requirements.
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
              Use the free trial to see whether Finza&apos;s service-business workflow is simpler for your Ghanaian team before choosing a heavier accounting implementation.
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
          { href: "/quickbooks-alternative-ghana", label: "QuickBooks alternative Ghana", desc: "Neutral comparison lens" },
          { href: "/accounting-software-ghana", label: "Accounting Ghana", desc: "Finza overview in GHS" },
          { href: "/pricing#plans", label: "Pricing", desc: "Compare public GHS plans" },
        ]}
      />
      <Footer />
    </main>
  );
}
