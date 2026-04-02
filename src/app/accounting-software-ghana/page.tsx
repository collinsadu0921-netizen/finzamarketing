import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  AccountingSerpClusterStrip,
  HowFinzaHelpsDayToDay,
  MidPageCtaBand,
  WhoUsesFinza,
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
  accountingSoftwareGhanaFaqForSchema,
  accountingSoftwareGhanaPaaFaqForSchema,
  breadcrumbListSchema,
  faqPageSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software in Ghana for Small Businesses (Invoices, VAT & Reports) | Finza",
  description:
    "Create invoices in GHS, track VAT clearly, and manage your business finances in one place—before month-end panic. Built for Ghana businesses. Try Finza free; see pricing in cedis.",
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
          faqPageSchema([...accountingSoftwareGhanaFaqForSchema, ...accountingSoftwareGhanaPaaFaqForSchema]),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Accounting software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting software in Ghana for reports, tax summaries, and your accountant
            </h1>
            <p className="max-w-2xl text-lg font-semibold leading-relaxed text-zinc-900">
              Your reports come from the same activity as your invoices and payments—not a separate spreadsheet.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              See profit and financial position in <strong className="text-zinc-900">Ghana cedis (GHS)</strong>, pull tax-related summaries for{" "}
              <strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> where applicable, and hand your accountant a file that is already organized—not rebuilt from scratch each quarter. If you are still using spreadsheets for month-end numbers, this page is the upgrade path.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              <strong className="text-zinc-700">Finza accounting software Ghana</strong> teams use for clearer books, faster handover to firms, and reports that match what you invoiced. When you{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-700 underline underline-offset-2">
                send invoices in Ghana
              </Link>{" "}
              in the same system, receivables and summaries stay aligned.
            </p>
            <p className="max-w-2xl text-sm font-medium text-zinc-600">
              Built around how Ghana businesses bill, collect, and hand over to their accountants.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                See pricing in GHS
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
            <h2 className="text-3xl font-bold text-zinc-900">Reports disagree. Tax summaries are late. Your accountant is waiting.</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Owners need to know what the business made this month—not after someone merges three spreadsheets. Tax visibility for Ghana should reflect <strong className="text-zinc-900">what actually happened</strong>, not a back-of-envelope rate applied at the last minute. When the accountant arrives, they should review—not reconstruct.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Stop rebuilding your books every quarter—start organizing now." className="bg-white py-10" />

      <AccountingSerpClusterStrip />

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">One place for reporting and tax summaries in GHS</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza ties sales, purchases, and payments to views you can open anytime: how you are doing, what you are owed, and summaries that separate common Ghana tax lines <strong className="text-zinc-900">where applicable</strong>. When you{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                send invoices
              </Link>{" "}
              and{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                track expenses
              </Link>{" "}
              in the same place, totals stay aligned—see also{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoice tracking
              </Link>{" "}
              and{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                expense tracking
              </Link>
              . Designed for how businesses actually operate in Ghana—from MoMo receipts to month-end review.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Profit and position in GHS",
                  body: "See performance and balances without waiting for month-end rescue work.",
                },
                {
                  title: "Tax summaries for Ghana",
                  body: "VAT, NHIL, and GETFund appear in line with your activity where your business requires them—confirm final treatment with your accountant or GRA.",
                },
                {
                  title: "Built for accountant collaboration",
                  body: "Share one system with your firm so review and period closing take less cleanup time.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                  <div className="w-1 flex-shrink-0 self-stretch rounded-full bg-[#0F172A]" />
                  <div>
                    <p className="mb-1 text-sm font-bold text-zinc-900">{item.title}</p>
                    <p className="text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it works in practice</p>
            <h2 className="text-3xl font-bold text-zinc-900">From first invoice to review-ready books</h2>
            <ol className="list-inside list-decimal space-y-3 text-base leading-relaxed text-zinc-600">
              <li>
                Create an invoice in GHS—<strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> follow your Ghana setup and the invoice date, not a single lumped percentage where separate lines apply.
              </li>
              <li>
                Share it by email, link, or the channels you already use with clients—what you <strong className="text-zinc-900">send</strong> (or otherwise issue) is what triggers <strong className="text-zinc-900">posted receivables</strong> on the ledger, not a row still in <strong className="text-zinc-900">draft</strong>.
              </li>
              <li>
                When you record a payment (MoMo, bank, or cash), <strong className="text-zinc-900">customer balance and invoice status update together</strong>—no second reconciliation sheet.
              </li>
              <li>
                Reports and summaries read from that same activity—so month-end shows <strong className="text-zinc-900">what the business actually did</strong>, not a rebuilt file.
              </li>
            </ol>
            <p className="text-xs leading-relaxed text-zinc-500">
              Finish business and tax setup before you rely on live documents—that keeps Ghana lines and defaults correct from the first invoice you send.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What updates automatically</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600">
                  <li>Sent, paid, or partially paid invoices post AR and tax to the ledger—drafts do not</li>
                  <li>Recorded payments clear against issued invoices in GHS—drafts are blocked</li>
                  <li>Reports read from that posted activity—no manual sync step</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza helps you avoid</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600">
                  <li>Paying or clearing money against work the client never received on paper</li>
                  <li>Drift between “the invoice file” and “the management accounts”</li>
                  <li>Month-end rebuilds because tax was merged into one column</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What your accountant needs</p>
            <h2 className="text-3xl font-bold text-zinc-900">Clean records, easier review, smoother period closing</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Accountants managing clients in Ghana need <strong className="text-zinc-900">complete activity</strong>, <strong className="text-zinc-900">clear tax lines where applicable</strong>, and <strong className="text-zinc-900">fewer versions</strong> of the truth. Finza helps clients record as they go so your team spends time on judgment and closure—not undoing informal books.
            </p>
            <ul className="list-inside list-disc space-y-2 text-zinc-600">
              <li>Exports and reports that match what the client already entered</li>
              <li>Less back-and-forth for missing invoices or wrong totals</li>
              <li>Room for professional review before sign-off</li>
            </ul>
            <Link href="/accountants" className="inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4">
              Finza for accountants →
            </Link>
          </div>
        </Container>
      </section>

      <WhoUsesFinza className="bg-zinc-50" />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-xl font-bold text-zinc-900">Related pages</h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              Accounting and{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline">
                bookkeeping software Ghana
              </Link>{" "}
              work best together—capture activity weekly, then close the month with clearer reports here. For collections, see{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline">
                invoicing software Ghana
              </Link>
              ; for approved scopes before you bill,{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline">
                quotation software Ghana
              </Link>
              ; for levy-heavy shops,{" "}
              <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline">
                VAT software Ghana
              </Link>
              , plus{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                expense tracking
              </Link>{" "}
              and{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                invoice tracking
              </Link>
              . Long-form help lives on the{" "}
              <Link href="/blog" className="font-semibold text-zinc-900 underline">
                Finza blog
              </Link>{" "}
              (VAT, invoicing, and bookkeeping clusters).
            </p>
          </div>
        </Container>
      </section>

      <WhyBusinessesTrustFinza className="bg-zinc-50" />

      <WhyBusinessesChooseFinza />

      <HowFinzaHelpsDayToDay className="bg-white" />

      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions about accounting software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="paa-best">
                <AccordionTrigger>What is the best accounting software in Ghana?</AccordionTrigger>
                <AccordionContent>
                  The best fit depends on your business: invoicing frequency, whether you need clear VAT/NHIL/GETFund lines, and how you work with an accountant. Compare options in our{" "}
                  <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                    buyer guide
                  </Link>
                  , then trial software that keeps quotes, invoices, and reports in one place in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-small">
                <AccordionTrigger>Do I need accounting software for a small business?</AccordionTrigger>
                <AccordionContent>
                  If you invoice clients, track expenses, or work with an accountant, software beats scattered spreadsheets—especially when you need consistent GHS balances and tax-ready summaries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-vat">
                <AccordionTrigger>How does VAT work in accounting software?</AccordionTrigger>
                <AccordionContent>
                  Good tools show VAT, NHIL, and GETFund as separate lines where applicable, tied to real transactions. See{" "}
                  <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline">
                    VAT software for Ghana
                  </Link>{" "}
                  for the levy-focused view.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-together">
                <AccordionTrigger>Can I track invoices and expenses together?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza connects invoicing, payments, purchases, and reporting so profit and receivables read from the same activity.
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
              <AccordionItem value="reports">
                <AccordionTrigger>What reports do I get with accounting software in Ghana?</AccordionTrigger>
                <AccordionContent>
                  You get profit and position views in Ghana cedis (GHS), plus tax-related summaries that help you and your accountant see VAT, NHIL, and GETFund where applicable—without blending everything into one mystery total.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accountant">
                <AccordionTrigger>How does Finza help my accountant?</AccordionTrigger>
                <AccordionContent>
                  Your accountant gets cleaner records, clearer period work, and less time fixing spreadsheets. They can review, adjust, and support closing the books instead of reconstructing them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax">
                <AccordionTrigger>Is Ghana tax treatment the same for every business?</AccordionTrigger>
                <AccordionContent>
                  No. Tax lines and registration depend on your business and supply type. Finza supports common presentations where applicable; your accountant or GRA confirms what applies to you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="service">
                <AccordionTrigger>Can service businesses in Ghana use Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. Service companies are a core fit—especially when you invoice often and need customer balances and reports in one system. See pricing for plans in GHS.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-3xl font-extrabold text-white">Manage business finances in one place</h2>
            <p className="text-zinc-400">Used by businesses across Ghana · Plans in GHS</p>
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
        mode="no-primary"
        related={[
          { href: "/features", label: "Features", desc: "Capabilities" },
          { href: "/pricing", label: "Pricing", desc: "GHS plans" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Send & track" },
        ]}
      />
      <Footer />
    </main>
  );
}
