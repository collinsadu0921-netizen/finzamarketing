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
  title: "Expense Tracking Software in Ghana | Track Spending, Receipts and Bills",
  description:
    "Track expenses in GHS with Finza. Capture receipts, supplier bills, business outflows, and supporting documents for your Ghanaian service business, with cleaner records for review.",
  alternates: {
    canonical: "https://www.finza.africa/expense-tracking-software-ghana",
  },
};

const expenseTrackingFaqForSchema = [
  {
    questionName: "What is expense tracking software?",
    acceptedAnswerText:
      "Expense tracking software helps a business record and review spending, receipts, supplier bills, supporting documents, and related business outflows.",
  },
  {
    questionName: "Can Finza help track receipts?",
    acceptedAnswerText:
      "Yes. Finza supports incoming documents and expense-related records so receipts and supporting files can be kept closer to the business workflow.",
  },
  {
    questionName: "Can Finza track supplier bills?",
    acceptedAnswerText:
      "Yes. Finza includes supplier bill workflows so businesses can keep bill records separate from immediate expenses where needed.",
  },
  {
    questionName: "Does Finza replace my accountant?",
    acceptedAnswerText:
      "No. Finza helps organize expense and document records so your accountant has cleaner information to review.",
  },
  {
    questionName: "Can I try Finza before paying?",
    acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
  },
];

export default function ExpenseTrackingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Expense tracking software Ghana", path: "/expense-tracking-software-ghana" },
          ]),
          faqPageSchema(expenseTrackingFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Expense tracking software in Ghana for receipts, bills and business spending
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              Business expenses are easy to lose when receipts sit in WhatsApp, supplier bills arrive late, and payments are recorded in different places. Finza helps Ghanaian service businesses keep expenses, bills, receipts, supporting documents, and reports closer to the same workflow.
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
              Expense tracking should happen before month-end
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Many small businesses wait until month-end before trying to organize expenses. By then, receipts may be missing, supplier bills may be unclear, and the accountant may need to ask for the same information again.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Receipts",
                "Supplier bills",
                "Business expenses",
                "Supporting documents",
                "Payment records",
                "Accountant review",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps keep these records closer to the daily work, so expense review is less dependent on memory.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Pair habits with{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>
              {" "}and deeper ledgers in{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>
              . If spreadsheets still carry most of your history, compare{" "}
              <Link href="/accounting-vs-excel-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting vs Excel in Ghana
              </Link>{" "}
              before month-end scramble.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Capture spending while the details are still fresh</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              A useful expense system should help you record what was spent, who it was paid to, when it happened, and what document supports it.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Record business expenses in GHS",
                "Keep supplier bill details",
                "Attach or register supporting documents",
                "Track expense dates and descriptions",
                "Review spending categories",
                "Keep records easier to explain",
                "Prepare cleaner information for your accountant",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              Money coming in connects through{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software Ghana
              </Link>
              {" "}and{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoice tracking software Ghana
              </Link>
              {" "}so expense work sits beside customer activity.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Receipts and documents in the same workflow</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Expenses are not just numbers. They often need proof: receipts, supplier invoices, screenshots, uploaded files, or other supporting documents. Finza helps bring those documents into the business record instead of leaving them scattered.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Keep receipts linked to business activity</li>
              <li>Use incoming documents for review</li>
              <li>Reduce missing support at month-end</li>
              <li>Make expense records easier to check</li>
              <li>Keep document history more organized</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Supplier bills and business outflows</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Some expenses are paid immediately. Others arrive as supplier bills and are paid later. Finza helps service businesses separate day-to-day expenses from bills that need to be tracked and reviewed.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Supplier bill records",
                "Expense records",
                "Payment notes",
                "Due-date awareness",
                "Supporting files",
                "Review trail",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Connect expenses to the bigger business picture</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Expenses are easier to understand when they sit beside invoices, payments, payroll records, and reports. Finza helps business owners review spending as part of the wider business workflow.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Compare expenses with income activity</li>
              <li>Review unpaid customer invoices beside spending</li>
              <li>Keep payroll and operating costs easier to review</li>
              <li>Prepare information for reports</li>
              <li>Give your accountant cleaner context</li>
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              Tax presentation often sits alongside invoicing - see{" "}
              <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                VAT software Ghana
              </Link>
              {" "}where it applies - and keep people costs tidy with{" "}
              <Link href="/payroll-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                payroll software Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Who this page is for</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built for Ghanaian service businesses that want cleaner expense records without relying only on notebooks, WhatsApp messages, or spreadsheets.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Cleaning and facility service businesses",
                "Contractors and maintenance teams",
                "Agencies and consultants",
                "Professional service firms",
                "SMEs with supplier bills and receipts",
                "Businesses preparing records for professional review",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Expense tracking and records for professional review</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Your professional reviewers should not have to rebuild the full expense story from loose receipts and incomplete notes. Finza helps keep expenses, bills, documents, and business records in a structure that is easier to review.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/features"
                className="inline-flex rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Explore professional review
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-zinc-900 underline underline-offset-2"
              >
                Contact Finza
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Important disclaimer</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza helps organize expense, bill, and document records for business review. It does not replace your accountant, bookkeeper, tax adviser, or legal adviser. You remain responsible for reviewing your records and getting professional advice where needed.
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
                <AccordionTrigger>What is expense tracking software?</AccordionTrigger>
                <AccordionContent>
                  Expense tracking software helps a business record and review spending, receipts, supplier bills, supporting documents, and related business outflows.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can Finza help track receipts?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports incoming documents and expense-related records so receipts and supporting files can be kept closer to the business workflow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can Finza track supplier bills?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza includes supplier bill workflows so businesses can keep bill records separate from immediate expenses where needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize expense and document records so your accountant has cleaner information to review.
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
              Track expenses before records go missing
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to keep expenses, receipts, supplier bills, documents, and reports connected in one workspace for your Ghanaian service business.
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
        related={[
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping Ghana", desc: "Weekly habit layer" },
          { href: "/invoicing-software-ghana", label: "Invoicing Ghana", desc: "Send and track in GHS" },
        ]}
      />
      <Footer />
    </main>
  );
}
