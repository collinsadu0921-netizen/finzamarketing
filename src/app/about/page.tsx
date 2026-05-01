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
  title: "About Finza | Business Software for Ghanaian Service Businesses",
  description:
    "Finza is business software for Ghanaian service businesses, helping teams manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About Finza", path: "/about" },
          ]),
          faqPageSchema([
            {
              questionName: "What is Finza?",
              acceptedAnswerText:
                "Finza is business software for Ghanaian service businesses. It helps manage proposals, quotes, proformas, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.",
            },
            {
              questionName: "Who is Finza built for?",
              acceptedAnswerText:
                "Finza is built for Ghanaian service businesses such as cleaning companies, contractors, consultants, agencies, maintenance teams, field-service businesses, and growing SMEs working with accountants.",
            },
            {
              questionName: "Is Finza only invoicing software?",
              acceptedAnswerText:
                "No. Finza includes invoicing, but it also supports proposals, quotes, proformas, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace accountants?",
              acceptedAnswerText:
                "No. Finza helps organize records for review. Accountants, tax advisers, payroll advisers, and legal advisers should still confirm the correct treatment for the business.",
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
              Business software built around how Ghanaian service businesses work
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps service businesses in Ghana manage the work that happens before, during, and after getting paid - proposals, quotes, proformas, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/demo"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors text-center"
              >
                See how Finza works
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Built for business owners who want clearer records in GHS and better information for accountant review.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Why Finza exists</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Many growing businesses do not fail because they lack effort. They struggle because their records are scattered.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              A client request starts on WhatsApp. A quote is created in one file. An invoice is sent as a PDF. A receipt is saved on a phone. A supplier bill arrives by email. Payments are tracked manually. At month-end, the accountant has to rebuild the business story from incomplete information.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza exists to make that daily business flow easier to organize.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">A connected workspace for service businesses</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is designed for service businesses that need more than a simple invoice template. The goal is to keep client work, billing, payments, expenses, documents, payroll, and reports closer together.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              That gives business owners a clearer view of operations and gives accountants better records to review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Client work",
                  d: "Prepare proposals, quotes, proformas, and invoices.",
                },
                {
                  t: "Payments",
                  d: "Record full and partial payments, issue receipts, and review customer balances.",
                },
                {
                  t: "Business costs",
                  d: "Track expenses, supplier bills, and supporting documents.",
                },
                {
                  t: "Payroll",
                  d: "Keep payroll records closer to the rest of the business activity.",
                },
                {
                  t: "Reports",
                  d: "Review business performance and accountant-ready records.",
                },
                {
                  t: "Accounting support",
                  d: "Use ledger-supported workflows, audit logs, period controls, and exports where applicable.",
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
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Built for Ghanaian business realities</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza focuses on Ghanaian service businesses that work in GHS, send client documents, manage payments, and need clearer records for review.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT. The correct treatment depends on the business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "GHS-based business records",
                "Ghana tax lines where applicable",
                "Client documents for service businesses",
                "Payment and customer balance tracking",
                "Incoming document and record organization",
                "Reports and exports for accountant review",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">For business owners and accountants</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for the business owner who needs control before the accountant receives the records.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              The business can manage daily activity in one workspace, while the accountant can review cleaner information with better context. Finza does not replace professional judgment. It helps organize the records that professional review depends on.
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Who Finza is for</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is especially useful for Ghanaian service businesses that prepare prices, send client documents, track payments, manage expenses, and work with an accountant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Maintenance teams",
                "Agencies",
                "Professional service providers",
                "Field-service businesses",
                "Growing SMEs",
                "Businesses preparing for stronger financial control",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What we believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Clear records are business control",
                  d: "A business owner should not wait until month-end to understand what is happening.",
                },
                {
                  t: "Software should fit local business reality",
                  d: "Ghanaian businesses need records in GHS, practical document flows, and tax-line support where applicable.",
                },
                {
                  t: "Accountants need better starting information",
                  d: "Cleaner records help accountants review faster and with better context.",
                },
                {
                  t: "Business tools should reduce scattered work",
                  d: "Invoices, payments, expenses, documents, payroll, and reports should not live in disconnected places.",
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

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What Finza is not</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is not a replacement for your accountant, tax adviser, payroll adviser, lawyer, or professional review.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza does not guarantee tax compliance, automatically file statutory returns, or remove the need to check business records carefully. It helps organize the information your business and advisers need to review.
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
                <AccordionTrigger>What is Finza?</AccordionTrigger>
                <AccordionContent>
                  Finza is business software for Ghanaian service businesses. It helps manage proposals, quotes, proformas, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Who is Finza built for?</AccordionTrigger>
                <AccordionContent>
                  Finza is built for Ghanaian service businesses such as cleaning companies, contractors, consultants, agencies, maintenance teams, field-service businesses, and growing SMEs working with accountants.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is Finza only invoicing software?</AccordionTrigger>
                <AccordionContent>
                  No. Finza includes invoicing, but it also supports proposals, quotes, proformas, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace accountants?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for review. Accountants, tax advisers, payroll advisers, and legal advisers should still confirm the correct treatment for the business.
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
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build cleaner business records from daily work
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Start 14-day free trial
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/accountants", label: "For accountants", desc: "Accountant-ready records" },
        ]}
      />
      <Footer />
    </main>
  );
}
