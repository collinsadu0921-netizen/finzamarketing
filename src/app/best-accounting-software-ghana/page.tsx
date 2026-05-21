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
import { breadcrumbListSchema, faqPageSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Accounting Software in Ghana for Service Businesses | Finza",
  description:
    "Compare what Ghanaian service businesses should look for in accounting software, from proposals and invoices to payments, expenses, payroll, reports, Ghana tax lines, and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/best-accounting-software-ghana",
  },
};

export default function BestAccountingSoftwareGhanaPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          softwareApplicationSchema(),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Best accounting software Ghana", path: "/best-accounting-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "What is the best accounting software in Ghana?",
              acceptedAnswerText:
                "The best accounting software depends on your business needs. Ghanaian service businesses should look for software that supports invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Is Finza accounting software for Ghanaian service businesses?",
              acceptedAnswerText:
                "Yes. Finza is built for Ghanaian service businesses that need to manage proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.",
            },
            {
              questionName: "Is Finza only for invoicing?",
              acceptedAnswerText:
                "No. Finza includes invoicing, but it also supports proposals, quotes, proformas, receipts, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace an accountant?",
              acceptedAnswerText:
                "No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.",
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
              Choosing the best accounting software in Ghana for your service business
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              The best accounting software for your business is not only about reports at month-end. It should help you manage daily work - proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.
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
              No card required to start. Built for Ghanaian service businesses that want clearer records before accountant review.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">What "best" should mean for a Ghanaian business</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              The best accounting software depends on how your business actually works.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              For many service businesses in Ghana, the problem is not only accounting. The problem starts earlier: scattered quotes, unpaid invoices, missing receipts, unclear tax lines, supplier bills, payroll records, and documents stored across WhatsApp, email, folders, and spreadsheets.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Good accounting software should help organize the work before the accountant receives it.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">What to look for before choosing accounting software</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Client workflow",
                  d: "Can the software manage proposals, quotes, proformas, invoices, and receipts?",
                },
                {
                  t: "Payment tracking",
                  d: "Can you record full and partial payments and review outstanding customer balances?",
                },
                {
                  t: "Expenses and bills",
                  d: "Can you track business costs, supplier bills, and supporting documents?",
                },
                {
                  t: "Ghana tax lines",
                  d: "Can documents show VAT, NHIL, GETFund, and WHT where applicable?",
                },
                {
                  t: "Payroll records",
                  d: "Can payroll activity sit closer to the rest of the business records?",
                },
                {
                  t: "Accountant-ready records",
                  d: "Can your accountant review reports, exports, audit logs, and business records with better context?",
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
            <h2 className="text-3xl font-bold text-zinc-900">Why Finza fits Ghanaian service businesses</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for service businesses that need more than a basic invoice generator. It helps connect the daily workflow of client work, billing, payments, expenses, documents, payroll, reports, and accountant-ready records.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              That makes it useful for business owners who want better control before month-end and cleaner information for accountant review.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "Proposals",
                "Quotes",
                "Proformas",
                "Invoices",
                "Receipts",
                "Payment recording",
                "Partial payments",
                "Customer balances",
                "Expenses",
                "Supplier bills",
                "Incoming documents",
                "Payroll records",
                "Reports",
                "Exports",
                "Audit logs",
                "Period controls",
                "Ghana tax lines where applicable",
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
            <h2 className="text-3xl font-bold text-zinc-900">Best for businesses that need workflow, not only accounting reports</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Some software focuses mainly on final accounting outputs. Finza focuses on the business activity that creates those records.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              For a service business, that means the work can start from a proposal or quote, move into an invoice, continue through payment and receipt, and then become easier to review through reports and exports.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-base leading-relaxed text-zinc-600">
              <li>Prepare a proposal or quote</li>
              <li>Convert approved work into a proforma or invoice</li>
              <li>Send the document to the client</li>
              <li>Record payment or partial payment</li>
              <li>Issue a receipt</li>
              <li>Capture expenses, bills, and supporting documents</li>
              <li>Review reports and accountant-ready records</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Built around Ghanaian records in GHS</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports GHS-based records and Ghana tax lines where applicable. This helps make client documents and business records easier to review.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tax treatment depends on your business registration, supply type, and accountant or GRA guidance.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "GHS-based invoices and records",
                "VAT, NHIL, and GETFund support where applicable",
                "WHT receivable tracking where applicable",
                "Customer balances and payment records",
                "Reports and exports for review",
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
            <h2 className="text-3xl font-bold text-zinc-900">When Finza may not be the right fit</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is not the right choice for every business. It is currently best positioned for Ghanaian service businesses that need proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              A business that only needs a very simple one-page invoice template may not need a connected business software system yet.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Compare Finza with spreadsheets and manual records</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Spreadsheets can help at the beginning, but they become harder to manage when records grow.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              With manual records, the business owner often has to remember what happened, where the receipt is, which invoice was paid, which customer still owes money, and what the accountant needs.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps keep the business workflow closer together so records are easier to review.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 8 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Software support, not a compliance guarantee</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, reports, tax lines where applicable, and accountant-ready information. It does not guarantee tax compliance, automatically file statutory returns, or replace accountant, tax, payroll, legal, or GRA guidance.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
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
                <AccordionTrigger>What is the best accounting software in Ghana?</AccordionTrigger>
                <AccordionContent>
                  The best accounting software depends on your business needs. Ghanaian service businesses should look for software that supports invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Is Finza accounting software for Ghanaian service businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghanaian service businesses that need to manage proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is Finza only for invoicing?</AccordionTrigger>
                <AccordionContent>
                  No. Finza includes invoicing, but it also supports proposals, quotes, proformas, receipts, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace an accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.
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
      <section className="border-b border-zinc-100 bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Try Finza for your Ghanaian service business</h2>
            <p className="text-zinc-300">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Find my plan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Proposals and quotes" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "Payroll records" },
          { href: "/accountants", label: "For accountants", desc: "Accountant-ready records" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
        ]}
      />
      <Footer />
    </main>
  );
}
