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
  title: "Accounting vs Excel in Ghana | When Spreadsheets Stop Being Enough",
  description:
    "Compare Excel with business software for Ghanaian service businesses. See when spreadsheets are still useful, where they become risky, and how Finza helps organize proposals, invoices, payments, expenses, documents, payroll, and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-vs-excel-ghana",
  },
};

const accountingVsExcelFaqForSchema = [
  {
    questionName: "Is Excel enough for accounting in Ghana?",
    acceptedAnswerText:
      "Excel can be enough for a very small business with simple records. As invoices, payments, expenses, payroll, and documents increase, spreadsheets often become harder to control.",
  },
  {
    questionName: "Why do Ghanaian businesses move from Excel to software?",
    acceptedAnswerText:
      "Many businesses move because they need clearer invoice tracking, better payment records, expense documents, reports, and cleaner information for their accountant.",
  },
  {
    questionName: "Does Finza replace Excel completely?",
    acceptedAnswerText:
      "No. You can still use Excel for planning, budgets, and analysis. Finza is intended to help manage daily business records and workflows more clearly.",
  },
  {
    questionName: "Does Finza replace my accountant?",
    acceptedAnswerText:
      "No. Finza helps organize records so your accountant has cleaner information to review. It does not replace professional accounting or tax advice.",
  },
  {
    questionName: "Can I try Finza before paying?",
    acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
  },
];

export default function AccountingVsExcelGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Accounting vs Excel Ghana", path: "/accounting-vs-excel-ghana" },
          ]),
          faqPageSchema(accountingVsExcelFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting vs Excel in Ghana: when spreadsheets stop being enough
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              Excel is often the first tool a Ghanaian business owner uses to track money. It is flexible, familiar, and cheap to start with. But as your service business grows, the problem is no longer whether Excel can hold numbers. The problem is whether your records still connect clearly from client work to payment, expenses, documents, payroll, and accountant review.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                View pricing in GHS
              </Link>
            </div>
            <p className="text-sm text-zinc-500">14-day free trial. No card required to start.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Excel is useful at the beginning</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              For a new or very small business, Excel can be enough. You can list customers, record basic sales, track simple expenses, and calculate totals manually. If you only issue a few invoices each month and your accountant reviews everything separately, a spreadsheet may still work.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Simple lists of customers and jobs",
                "Basic income and expense tracking",
                "Manual invoice summaries",
                "Small month-end calculations",
                "Temporary planning and budgeting",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              The issue starts when the spreadsheet becomes the place where everything depends on your memory.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Where spreadsheets start to break</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Spreadsheets become harder to manage when your work creates many connected records. A quote becomes an invoice. A client pays part of the amount. A withholding deduction may apply. A receipt must be shared. Expenses and supplier bills need documents attached. Payroll needs to be reviewed. Your accountant then needs the full story.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[
                "One file for invoices",
                "Another file for expenses",
                "Receipts stored in WhatsApp or email",
                "Payment status updated manually",
                "Tax lines calculated separately",
                "Accountant questions answered from memory",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              At that point, the risk is not only calculation error. The bigger risk is scattered business evidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What service businesses need instead</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              A growing service business needs connected records. The owner should be able to see what was proposed, what was accepted, what was invoiced, what has been paid, what is overdue, what was spent, and what documents support the numbers.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              For related product pages, see{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>
              ,{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software Ghana
              </Link>
              ,{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>
              , and{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotation software Ghana
              </Link>
              . For tracking angles, see{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                expense tracking software Ghana
              </Link>{" "}
              and{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoice tracking software Ghana
              </Link>
              .
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Proposals for bigger client work",
                "Quotes before jobs are approved",
                "Proformas where needed before invoicing",
                "Invoices with clear Ghana tax lines where applicable",
                "Payment records, including partial payments",
                "Receipts and public document links",
                "Expenses and supplier bills",
                "Incoming documents for receipts and supporting files",
                "Payroll and team records",
                "Reports for business review and accountant discussion",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Excel vs Finza</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="px-4 py-3 font-semibold text-zinc-900">Area</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Excel</th>
                    <th className="px-4 py-3 font-semibold text-zinc-900">Finza</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-600">
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Client work</td>
                    <td className="px-4 py-3">Usually tracked manually across sheets.</td>
                    <td className="px-4 py-3">Keeps proposals, quotes, proformas, invoices, and payments in one workflow.</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">Invoice status</td>
                    <td className="px-4 py-3">Paid, unpaid, and overdue amounts must be updated by hand.</td>
                    <td className="px-4 py-3">Helps track sent, paid, partial, and outstanding invoices.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Documents</td>
                    <td className="px-4 py-3">Receipts and files are usually stored elsewhere.</td>
                    <td className="px-4 py-3">Incoming documents and supporting records can be kept with the business workflow.</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">Ghana tax lines</td>
                    <td className="px-4 py-3">Tax breakdowns must be calculated and checked manually.</td>
                    <td className="px-4 py-3">Shows Ghana tax lines where they apply, while leaving final review to the business and accountant.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-800">Accountant review</td>
                    <td className="px-4 py-3">The accountant often has to rebuild the story from files, messages, and bank records.</td>
                    <td className="px-4 py-3">Gives cleaner records for review, reports, and follow-up.</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 font-medium text-zinc-800">Growth</td>
                    <td className="px-4 py-3">Works best when the business is still simple.</td>
                    <td className="px-4 py-3">Fits businesses that need more structure without jumping straight into heavy enterprise systems.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">When Excel is still fine</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Excel can still be useful for planning, simple budgets, one-off calculations, and early-stage tracking. Finza does not need to replace every spreadsheet in your business. The important question is whether Excel should remain the main system for client work, billing, expenses, payroll, and accountant records.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Use Excel for planning and quick analysis",
                "Use Finza for operational business records",
                "Keep your accountant involved for review and advice",
                "Avoid relying on memory at month-end",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">When to move beyond spreadsheets</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              It may be time to move beyond Excel when you cannot quickly answer basic questions about the business.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Which invoices are unpaid?</li>
              <li>Which clients owe money?</li>
              <li>Which jobs started as quotes or proposals?</li>
              <li>Which payments are partial?</li>
              <li>Which expenses have supporting documents?</li>
              <li>Which supplier bills are unpaid?</li>
              <li>Which records should the accountant review?</li>
              <li>What happened during the month?</li>
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              If these answers require checking many sheets, messages, and folders, the business has outgrown spreadsheet-only accounting.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Built for Ghanaian service businesses</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built for service businesses in Ghana that need practical control over daily records. It is useful for businesses that send quotes or invoices, collect payments, handle expenses, manage supporting documents, and want cleaner records before accountant review.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Cleaning and facility service businesses",
                "Contractors and field service teams",
                "Agencies and consultants",
                "Maintenance and repair businesses",
                "Professional service firms",
                "Growing SMEs that need better records in GHS",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              For{" "}
              <Link href="/accountants" className="font-semibold text-zinc-900 underline underline-offset-2">
                accountants
              </Link>{" "}
              reviewing client files, and for business owners who want to{" "}
              <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                see how it works
              </Link>
              , start from{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing in GHS
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                contact
              </Link>{" "}
              the team.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Important disclaimer</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize business records and show Ghana tax lines where they apply. It does not replace your accountant, bookkeeper, tax adviser, or legal adviser. You remain responsible for reviewing your records and getting professional advice where needed.
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
                <AccordionTrigger>Is Excel enough for accounting in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Excel can be enough for a very small business with simple records. As invoices, payments, expenses, payroll, and documents increase, spreadsheets often become harder to control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Why do Ghanaian businesses move from Excel to software?</AccordionTrigger>
                <AccordionContent>
                  Many businesses move because they need clearer invoice tracking, better payment records, expense documents, reports, and cleaner information for their accountant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does Finza replace Excel completely?</AccordionTrigger>
                <AccordionContent>
                  No. You can still use Excel for planning, budgets, and analysis. Finza is intended to help manage daily business records and workflows more clearly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records so your accountant has cleaner information to review. It does not replace professional accounting or tax advice.
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
              Move beyond spreadsheet-only records
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Start with proposals, invoices, payments, expenses, documents, payroll, and reports in one connected workspace built for Ghanaian service businesses.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="w-full rounded-md bg-white px-8 py-3.5 text-center text-base font-bold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 sm:w-auto"
              >
                Start 14-day free trial
              </a>
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
        related={[
          { href: "/accounting-software-ghana", label: "Accounting software Ghana", desc: "Records and reports" },
          { href: "/invoicing-software-ghana", label: "Invoicing Ghana", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping Ghana", desc: "Daily records" },
          { href: "/quotation-software-ghana", label: "Quotations Ghana", desc: "Quotes to invoice" },
          { href: "/invoice-calculator-ghana", label: "Try the invoice calculator", desc: "Preview invoice totals" },
          { href: "/best-accounting-software-ghana", label: "Choosing software", desc: "Buyer guide" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/contact", label: "Contact", desc: "Talk to the team" },
          { href: "/accountants", label: "For accountants", desc: "Accountant-ready records" },
        ]}
      />
      <Footer />
    </main>
  );
}
