import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  HowFinzaHelpsDayToDay,
  InvoicingSerpClusterStrip,
  MidPageCtaBand,
  WhyBusinessesChooseFinza,
  WhyBusinessesTrustFinza,
} from "@/components/seo-marketing-blocks";
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
  invoicingSoftwareGhanaFaqForSchema,
  invoicingSoftwareGhanaPaaFaqForSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Invoicing Software in Ghana — Send Invoices & Track Payments in GHS | Finza",
  description:
    "Send invoices in GHS, see who paid and who did not, and stop chasing balances in spreadsheets. Built for Ghana businesses—start free, compare pricing in cedis today.",
  alternates: {
    canonical: "https://www.finza.africa/invoicing-software-ghana",
  },
};

export default function InvoicingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Invoicing software for Ghana", path: "/invoicing-software-ghana" },
          ]),
          faqPageSchema([...invoicingSoftwareGhanaFaqForSchema, ...invoicingSoftwareGhanaPaaFaqForSchema]),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Invoicing software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Invoicing software in Ghana—send invoices online and track unpaid amounts in GHS
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              If you are still using spreadsheets for invoices, <strong className="text-zinc-900">send invoices online in Ghana</strong> with professional layout and clear totals in{" "}
              <strong className="text-zinc-900">Ghana cedis (GHS)</strong>. <strong className="text-zinc-900">Track unpaid invoices in GHS</strong> by customer, see who is overdue, and record payments as money arrives—without maintaining a parallel spreadsheet.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              <strong className="text-zinc-700">Finza invoicing software Ghana</strong> operators use to look professional, follow up faster, and keep tax lines clear where applicable. For P&amp;L, tax summaries, and period closing, pair billing with{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-700 underline underline-offset-2">
                accounting software in Ghana
              </Link>
              .
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                See how it works
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                View pricing in GHS
              </Link>
              <Link href="/features" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                Features
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold text-zinc-900">Invoices live in email and WhatsApp—balances live nowhere</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Service companies in Ghana often invoice from templates that do not connect to a single list of what is still owed. Follow-up is guesswork. When VAT, NHIL, or GETFund should appear, they get lumped into one line—or left off—until someone fixes it later.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Send today's invoices from one place—know who still owes you." className="bg-zinc-50 py-10" />

      <InvoicingSerpClusterStrip className="bg-white" />

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Online invoicing tied to customer balances in GHS</h2>
            <p className="text-lg font-semibold leading-relaxed text-zinc-900">
              Once an invoice is sent, it becomes the official version—and balances, status, and reports update from that thread.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Build an invoice with <strong className="text-zinc-900">Ghana tax lines split the way your registration expects</strong>—not one blended percentage. Share by email, PDF, link, or the channels you already use (many teams still coordinate on WhatsApp). When you <strong className="text-zinc-900">issue</strong> the invoice, it feeds the same receivables list your whole team sees.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              While an invoice stays in <strong className="text-zinc-700">draft</strong>, Finza does <strong className="text-zinc-700">not</strong> auto-post it to the ledger—no posted receivables or revenue from that document until you issue or send it. You can still see line totals as you work.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              <strong className="text-zinc-700">Finza blocks recording payments on drafts</strong>—issue the invoice first, matching the main payment flow and ledger rules.
            </p>
            <p className="text-sm font-medium text-zinc-600">
              Designed for how businesses actually operate in Ghana—email, PDF, MoMo, and the follow-ups you already run.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Many teams start with an approved scope—see{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotation software in Ghana
              </Link>{" "}
              so quotes become invoices without retyping.
            </p>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it works in practice</p>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-600">
                <li>Set up the customer and tax profile once—new invoices inherit the right Ghana treatment for the invoice date.</li>
                <li>Issue and send the invoice; that version is what updates balances and history.</li>
                <li>Record partial or full payment when MoMo, bank, or cash clears—status and balance move together.</li>
                <li>Open unpaid before you follow up—no second spreadsheet for “who still owes.”</li>
              </ol>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                Payments apply to issued invoices only—balance and status update together, with no second list to reconcile.
              </p>
            </div>
            <div className="grid gap-6 border-t border-zinc-200 pt-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What updates when you send an invoice</p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
                  <li>Sent invoices post to posted receivables; overdue-style lists exclude drafts</li>
                  <li>Balances refresh when you record a payment on an issued invoice</li>
                  <li>Reports stay tied to the same posted invoice activity</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza helps you avoid</p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
                  <li>Silent drift between WhatsApp quotes and official totals</li>
                  <li>Guessing who owes what at month-end</li>
                  <li>One “tax” column that hides NHIL and GETFund</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Track unpaid invoices clearly</p>
            <h2 className="text-3xl font-bold text-zinc-900">See who owes what—always in Ghana cedis</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Open a view of <strong className="text-zinc-900">outstanding invoices</strong>, filter by customer, and spot overdue amounts in <strong className="text-zinc-900">GHS</strong>. When a client pays, record it once—the unpaid picture updates for everyone who needs it.
            </p>
            <ul className="space-y-3 text-zinc-600">
              <li className="flex gap-2">
                <span className="text-[#0F172A]">✓</span>
                Customer balances without manual reconciliation each week
              </li>
              <li className="flex gap-2">
                <span className="text-[#0F172A]">✓</span>
                Clear invoice history for service businesses that bill often
              </li>
              <li className="flex gap-2">
                <span className="text-[#0F172A]">✓</span>
                Ghana tax lines on documents where applicable for your registration
              </li>
            </ul>
            <p className="text-sm text-zinc-500">
              Behind the scenes, Finza keeps invoice activity aligned with your books so reports stay consistent—without you posting manual journal lines.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl space-y-4 text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">Related</p>
            <p>
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                Accounting software Ghana
              </Link>
              {" · "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                Invoice tracking Ghana
              </Link>
              {" · "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline">
                Quotation software Ghana
              </Link>
              {" · "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline">
                Bookkeeping (track expenses)
              </Link>
              {" · "}
              <Link href="/blog" className="font-semibold text-zinc-900 underline">
                Blog guides
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions about invoicing software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="paa-best-inv">
                <AccordionTrigger>What is the best invoicing software in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Look for GHS-first invoices, clear unpaid balances, optional quotation-to-invoice flow, and tax lines where applicable. Trial with your real customers—not a blank demo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-small-inv">
                <AccordionTrigger>Can small businesses send invoices online in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Online invoicing helps small businesses look professional and track who paid without version chaos in email or WhatsApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-unpaid-how">
                <AccordionTrigger>How do I track unpaid invoices in GHS?</AccordionTrigger>
                <AccordionContent>
                  Use one system that lists open invoices by customer and updates when payments arrive. See our{" "}
                  <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                    invoice tracking
                  </Link>{" "}
                  page for the focused view.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-one-sys">
                <AccordionTrigger>Can invoicing and accounting work in one system?</AccordionTrigger>
                <AccordionContent>
                  Yes—when billing and reports read from the same activity, you stop reconciling two files. Explore{" "}
                  <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                    accounting software for Ghana
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">More questions about Finza</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="online">
                <AccordionTrigger>Can I send invoices online in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can create and send professional invoices online in Ghana cedis (GHS), with clear totals and tax lines where applicable for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="unpaid">
                <AccordionTrigger>Can I track unpaid invoices in GHS?</AccordionTrigger>
                <AccordionContent>
                  Yes. You see outstanding balances per customer, which invoices are unpaid or overdue, and when payments arrive—so collections are not a manual list.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax">
                <AccordionTrigger>Do invoices show VAT, NHIL, and GETFund separately?</AccordionTrigger>
                <AccordionContent>
                  Where applicable, Finza can show Ghana tax lines separately on invoices so customers see a clear breakdown. Exact treatment depends on your registration and supply type.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="size">
                <AccordionTrigger>Is invoicing only for big companies?</AccordionTrigger>
                <AccordionContent>
                  No. Small businesses and service companies in Ghana use online invoicing to look professional and stay on top of who owes what.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <WhyBusinessesTrustFinza className="bg-white" />

      <WhyBusinessesChooseFinza />

      <HowFinzaHelpsDayToDay className="bg-zinc-50" />

      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-3xl font-extrabold text-white">Send your next invoice in GHS with confidence</h2>
            <p className="text-sm text-zinc-400">Designed for real workflows in Ghana</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1" className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900">
                Try Finza free
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                See how it works
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Quote to invoice" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports & summaries" },
        ]}
      />
      <Footer />
    </main>
  );
}
