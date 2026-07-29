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
import { ProductProofSection } from "@/components/product-proof-section";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Invoice Tracking Software in Ghana | Track Sent, Paid and Overdue Invoices",
  description:
    "Track unpaid invoices, partial payments, overdue balances, customer statements, and payment follow-up in GHS with Finza invoice tracking software.",
  alternates: {
    canonical: "https://www.finza.africa/invoice-tracking-software-ghana",
  },
};

const invoiceTrackingFaqForSchema = [
  {
    questionName: "What is invoice tracking software?",
    acceptedAnswerText:
      "Invoice tracking software helps a business see which invoices have been sent, paid, partially paid, overdue, or still outstanding.",
  },
  {
    questionName: "Can Finza track partial payments?",
    acceptedAnswerText:
      "Yes. Finza supports payment recording against invoices, including partial payments and remaining balances.",
  },
  {
    questionName: "Can I see overdue invoices in Finza?",
    acceptedAnswerText:
      "Yes. Finza helps you identify overdue and outstanding invoices so your business can follow up with clearer information.",
  },
  {
    questionName: "Does Finza replace my accountant?",
    acceptedAnswerText:
      "No. Finza helps organize invoice and payment records so your accountant has cleaner information to review.",
  },
  {
    questionName: "Can I try Finza before paying?",
    acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
  },
];

export default function InvoiceTrackingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Invoice tracking software Ghana", path: "/invoice-tracking-software-ghana" },
          ]),
          faqPageSchema(invoiceTrackingFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Invoice tracking software in Ghana for sent, paid and overdue invoices
            </h1>
            <p className="max-w-3xl text-lg text-zinc-600 leading-relaxed">
              This page is for collections and balances after the invoice is sent. Finza helps you see unpaid invoices, partial payments, overdue balances, payment history, customer statements, and follow-up context in GHS.
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
              Invoice tracking should not live in a side spreadsheet
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Many businesses send invoices from one place, record payments somewhere else, and track unpaid clients in a spreadsheet. That may work for a few invoices, but it becomes harder when clients delay payment, pay in parts, request receipts, or ask for invoice links again.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Sent invoices",
                "Partially paid invoices",
                "Fully paid invoices",
                "Overdue invoices",
                "Outstanding balances",
                "Customer payment history",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza keeps these records closer to the invoice workflow, so follow-up is based on clearer information.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              For the full billing story, see{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software Ghana
              </Link>{" "}
              and{" "}
              <Link href="/accounting-vs-excel-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting vs Excel in Ghana
              </Link>{" "}
              when spreadsheets no longer hold the thread.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">See what has happened after the invoice is sent</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              A useful invoice system should show more than the invoice total. It should help you understand what happened after the invoice left your business.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Track invoice status",
                "Record customer payments",
                "Handle partial payments",
                "View remaining balances",
                "See overdue invoices",
                "Keep customer statements clearer",
                "Share invoice and receipt links",
                "Review payment records with your accountant",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">From sent invoice to follow-up</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Invoice tracking is stronger when follow-up starts from the actual customer balance, not a copied spreadsheet. In Finza, payment activity stays tied to the invoice and customer record.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Connect this flow with{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotation software Ghana
              </Link>
              , deeper books in{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>
              , and weekly habits via{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>
              .
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Send the invoice to the customer</li>
              <li>Track sent, paid, partial, or overdue status</li>
              <li>Record payments received</li>
              <li>Review what remains outstanding</li>
              <li>Use customer statements during follow-up</li>
              <li>Share receipts or payment records</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Track partial payments and outstanding balances</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Not every client pays in one transaction. Some invoices are paid in parts. Some balances remain outstanding. Some customers need reminders. Finza helps make those payment records easier to follow without rebuilding the invoice story manually.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Record payments against the invoice</li>
              <li>See what remains unpaid</li>
              <li>Keep partial payment history visible</li>
              <li>Review balances by customer</li>
              <li>Reduce confusion during follow-up</li>
            </ul>
          </div>
        </Container>
      </section>

      <ProductProofSection
        assetIds={["customer-statement", "receipt-payment"]}
        eyebrow="Collections view"
        heading="See what has been paid, what is partial, and what is still outstanding"
        lead="Invoice tracking is not just creating the invoice. It is knowing which customers still owe money, which invoices are partly paid, and when to follow up with a clearer statement."
      />

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Ghana tax lines and payment records</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              For Ghanaian service businesses, invoice tracking also needs to stay connected to tax lines where they apply. Finza helps show Ghana tax breakdowns on relevant documents and keeps payment records connected to the invoice trail.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-600 leading-relaxed">
              <li>Invoice totals in GHS</li>
              <li>Ghana tax lines where applicable</li>
              <li>Clearer outstanding amounts</li>
              <li>Receipt and payment history</li>
              <li>Records your accountant can review</li>
            </ul>
            <p className="text-base text-zinc-600 leading-relaxed">
              Spending detail lives alongside invoice work when you pair with{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                expense tracking software Ghana
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
              Finza is useful for service businesses that send invoices and need a clearer way to follow up on money owed.
            </p>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {[
                "Cleaning and facility service businesses",
                "Contractors and repair teams",
                "Agencies and consultants",
                "Maintenance businesses",
                "Professional service firms",
                "SMEs that invoice clients in GHS",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Invoice tracking and records for professional review</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              At month-end, your professional reviewers should not have to guess which invoices were paid, which were partial, and which clients still owe money. Finza helps keep invoice and payment records in a cleaner structure for review.
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
              Finza helps organize invoice and payment records for business review. It does not replace your accountant, bookkeeper, tax adviser, or legal adviser. You remain responsible for reviewing your records and getting professional advice where needed.
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
                <AccordionTrigger>What is invoice tracking software?</AccordionTrigger>
                <AccordionContent>
                  Invoice tracking software helps a business see which invoices have been sent, paid, partially paid, overdue, or still outstanding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can Finza track partial payments?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports payment recording against invoices, including partial payments and remaining balances.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can I see overdue invoices in Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza helps you identify overdue and outstanding invoices so your business can follow up with clearer information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize invoice and payment records so your accountant has cleaner information to review.
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
              Track invoices before they become a problem
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to keep invoices, payments, balances, receipts, and customer records connected in one workspace for Ghanaian service businesses.
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
        primary={{
          href: "/invoicing-software-ghana",
          label: "Invoicing software Ghana",
          desc: "Create and send invoices in GHS",
        }}
        related={[
          { href: "/quotation-software-ghana", label: "Quotations Ghana", desc: "Quote to invoice" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping Ghana", desc: "Receipts and expense records" },
          { href: "/invoice-calculator-ghana", label: "Ghana invoice calculator", desc: "Preview invoice totals" },
        ]}
      />
      <Footer />
    </main>
  );
}
