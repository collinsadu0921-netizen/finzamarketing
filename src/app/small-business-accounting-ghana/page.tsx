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
  title: "Small Business Accounting Software in Ghana | Finza",
  description:
    "Finza small business accounting software helps Ghanaian SMEs see invoices, payments, expenses, payroll records, reports, and accountant handoff in GHS.",
  alternates: {
    canonical: "https://www.finza.africa/small-business-accounting-ghana",
  },
};

export default function SmallBusinessAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Small business accounting Ghana", path: "/small-business-accounting-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "What is small business accounting software?",
              acceptedAnswerText:
                "Small business accounting software helps businesses organize invoices, payments, expenses, documents, payroll records, reports, and records for accountant review.",
            },
            {
              questionName: "Is Finza built for small businesses in Ghana?",
              acceptedAnswerText:
                "Yes. Finza is built for Ghanaian small service businesses that need to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.",
            },
            {
              questionName: "Can Finza help with invoices and payments?",
              acceptedAnswerText:
                "Yes. Finza supports invoices, receipts, payment recording, partial payments, and customer balance tracking.",
            },
            {
              questionName: "Does Finza support Ghana tax lines?",
              acceptedAnswerText:
                "Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. Your accountant or tax adviser should confirm the correct treatment for your business.",
            },
            {
              questionName: "Can I try Finza before paying?",
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
              Small business accounting software in Ghana for clearer records
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              Finza helps owner-led teams see the money story behind daily work: invoices, payments, expenses, supplier bills, payroll records, reports, Ghana tax lines, and accountant handoff in GHS.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Find my plan</Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. Built for small businesses that want better control before month-end.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Small business accounting starts before the reports</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              For many small businesses, accounting problems do not start at month-end. They start when quotes, invoices, receipts, payment notes, expenses, payroll records, and supplier bills are scattered across different places.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps bring those daily records closer together so the business owner and accountant have better information to review.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What owners need to see quickly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Who owes money",
                  d: "Review customer balances and unpaid invoice context.",
                },
                {
                  t: "What the business spent",
                  d: "Track expenses, supplier bills, and supporting documents.",
                },
                {
                  t: "What payroll changed",
                  d: "Run monthly payroll with PAYE, pensions, and payslips.",
                },
                {
                  t: "What needs accountant review",
                  d: "Prepare reports, exports, and records your accountant can understand.",
                },
                {
                  t: "What tax lines apply",
                  d: "Show VAT, NHIL, GETFund, and WHT where applicable.",
                },
                {
                  t: "What changed this month",
                  d: "Use GHS reports to review activity before month-end conversations.",
                },
              ].map((x) => (
                <div key={x.t} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-bold text-zinc-900 mb-2">{x.t}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Built for Ghanaian small service businesses</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is especially useful for small service businesses that work with clients, send documents, track payments, manage expenses, and prepare records for accountant review.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              It is designed for businesses that need more than a simple invoice template but are not ready for disconnected spreadsheets and manual record chasing.
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
                "Growing SMEs",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">From client work to accountant-ready records</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza connects the work that happens before accounting review. A job can start with a proposal or quote, move into an invoice, continue through payment and receipt, and then support better reporting and review.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-base leading-relaxed text-zinc-600">
              <li>Prepare a proposal, quote, or proforma</li>
              <li>Create and send an invoice</li>
              <li>Record full or partial payment</li>
              <li>Issue a receipt</li>
              <li>Capture expenses, bills, and incoming documents</li>
              <li>Review reports, exports, and accountant-ready records</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Ghana records and tax lines where applicable</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza supports GHS-based records and Ghana tax lines where applicable, including VAT, NHIL, GETFund, and WHT.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The correct treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "GHS invoices and business records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Clearer document records for review",
                "Reports and exports for accountant support",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Why not only use spreadsheets?</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Spreadsheets can work when the business is very small. But as more clients, invoices, payments, expenses, documents, and payroll records appear, manual tracking becomes harder to maintain.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps reduce scattered record-keeping by keeping key business activity closer together in one workspace.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Small business review points</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "Customer balances",
                "Unpaid invoices",
                "Business expenses",
                "Supplier bills",
                "Receipt evidence",
                "Payroll records",
                "Ghana tax lines where applicable",
                "Reports in GHS",
                "Exports",
                "Accountant handoff",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 8 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Software support, not professional advice</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize business records, documents, payments, reports, tax lines where applicable, and accountant-ready information. It does not guarantee tax compliance, automatically file statutory returns, or replace accountant, tax, payroll, legal, or GRA guidance.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Your accountant or adviser should confirm the correct treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>What is small business accounting software?</AccordionTrigger>
                <AccordionContent>
                  Small business accounting software helps businesses organize invoices, payments, expenses, documents, payroll records, reports, and records for accountant review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Is Finza built for small businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghanaian small service businesses that need to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can Finza help with invoices and payments?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports invoices, receipts, payment recording, partial payments, and customer balance tracking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza support Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Finza supports Ghana tax lines such as VAT, NHIL, GETFund, and WHT where applicable. Your accountant or tax adviser should confirm the correct treatment for your business.
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
              Start organizing your small business records
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to review invoices, balances, costs, payroll records, reports, and accountant handoff in one GHS workspace.
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
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/accounting-for-small-business-ghana", label: "Small business guide", desc: "Daily records first" },
        ]}
      />
      <Footer />
    </main>
  );
}
