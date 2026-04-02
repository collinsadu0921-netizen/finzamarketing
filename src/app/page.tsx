import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { HowFinzaHelpsDayToDay, WhoUsesFinza, WhyBusinessesChooseFinza } from "@/components/seo-marketing-blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, homePageFaqForSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting and Invoicing Software for Businesses in Ghana | Finza",
  description:
    "Run your Ghana business with clearer numbers in GHS. Send invoices online, track payments, quotes, and bookkeeping—tax lines for VAT, NHIL, and GETFund where applicable. Built for SMEs, operators, and accounting firms.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <JsonLd data={faqPageSchema(homePageFaqForSchema)} />

      {/* HERO */}
      <section className="border-b border-zinc-100 bg-white pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Accounting and invoicing software for businesses in Ghana
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-zinc-600">
              Run your business with clearer numbers in GHS. If you do not know your real profit after bills and tax lines, or your accountant keeps asking for data you do not have ready, one connected system fixes the scramble.
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
              Built for the Ghana market—SMEs, operators, and accounting firms manage invoices, bookkeeping, and taxes in one place.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="inline-block rounded-md bg-[#0F172A] px-10 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link
                href="/demo"
                className="inline-block rounded-md border border-zinc-300 bg-white px-10 py-4 text-center text-lg font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                See how it works
              </Link>
              <Link
                href="/pricing"
                className="inline-block rounded-md border border-zinc-300 bg-white px-10 py-4 text-center text-lg font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                View pricing in GHS
              </Link>
            </div>
            <p className="text-sm text-zinc-400">
              Documents and balances stay on the same thread—so you are not fixing last month while this month keeps moving.
            </p>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Spreadsheet chaos, unclear tax, late invoices
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              If you are still using spreadsheets for invoices and payment follow-ups, you know the drill: Teams lose time hunting the &quot;right&quot; version of an invoice. Tax lines for{" "}
              <strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> get merged into one guess. Payments arrive but nobody updates the same list—so nobody trusts the receivables number.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                { t: "Late or missing invoices", d: "Cash flow suffers when billing is informal." },
                { t: "Unclear tax in GHS", d: "What applies depends on your business—without structure, every month is a scramble." },
                { t: "Accountant waits on you", d: "Clean records arrive late—or never in one place." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-white p-5">
                  <p className="font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SOLUTION */}
      <section className="border-b border-zinc-100 bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              One system for invoices, payments, and reporting
            </h2>
            <p className="text-lg font-semibold leading-relaxed text-zinc-900">
              Finza keeps your invoices, payments, and reports in sync—so your numbers reflect what actually happened.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza helps you <strong className="text-zinc-900">send invoices online</strong>, record payments, and see customer balances in{" "}
              <strong className="text-zinc-900">Ghana cedis (GHS)</strong>. Quotes can become invoices without starting over. Your accountant works from the same organized file—not a pile of exports.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Compare depth on{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software in Ghana
              </Link>{" "}
              and the billing path to{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                send invoices in Ghana
              </Link>{" "}
              from one connected workspace.
            </p>
            <ul className="space-y-3 text-zinc-600">
              <li className="flex gap-3">
                <span className="font-bold text-[#0F172A]">✓</span>
                Manage business finances in one place instead of five tabs.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0F172A]">✓</span>
                <span>
                  <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Track unpaid invoices
                  </Link>{" "}
                  and see who owes what in GHS.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0F172A]">✓</span>
                Built for accountants managing Ghanaian clients who need cleaner handovers.
              </li>
            </ul>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What happens automatically</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600">
                <li className="flex gap-2">
                  <span className="text-[#0F172A]">→</span>
                  Sending or issuing an invoice updates customer balances—no duplicate list in Excel.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0F172A]">→</span>
                  Recording a payment updates invoice status and what is still owed in GHS.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0F172A]">→</span>
                  Reports read from the same entries your team already captured.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 p-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">What Finza helps you avoid</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
                <li>Recording payments against invoices the client never received</li>
                <li>Losing sight of what is still unpaid</li>
                <li>Blending VAT, NHIL, and GETFund into one guessed column</li>
                <li>Rebuilding management reports from scratch every month-end</li>
              </ul>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Complete your business and tax setup before you go live—so Ghana lines and dates calculate the way your accountant expects. Draft invoices do not post to receivables on the ledger until you issue or send them, and Finza blocks recording payments on drafts until then.
            </p>
          </div>
        </Container>
      </section>

      <WhoUsesFinza />

      {/* GHANA TAX — soft */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Ghana tax lines—shown clearly where they apply</h2>
            <p className="leading-relaxed text-zinc-600">
              Many tools default to <strong className="text-zinc-900">one tax percentage</strong>. Ghana often needs <strong className="text-zinc-900">separate lines</strong> for VAT, NHIL, and GETFund on the same invoice—so filings and reviews stay legible. Finza applies Ghana tax logic from your setup and each invoice&apos;s date—so levies stay visible instead of one blended number where your registration requires the split.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              What you must charge or claim still depends on your registration and supply type—confirm with your accountant or GRA.
            </p>
            <p className="text-sm font-medium text-zinc-700">
              Designed for how businesses actually operate in Ghana.
            </p>
          </div>
        </Container>
      </section>

      {/* WHO */}
      <section className="border-b border-zinc-100 bg-white py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-8">
              <h2 className="text-xl font-bold text-zinc-900">Ghana-based companies on quotes &amp; invoices</h2>
              <p className="mt-3 leading-relaxed text-zinc-600">
                For operators that live on <strong className="text-zinc-900">quotes and invoices</strong>—consultancies, agencies, professional services, logistics, and more. Send invoices online, stay on top of collections, and see performance in GHS. Used by businesses across Ghana who want one source of truth.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8">
              <h2 className="text-xl font-bold text-zinc-900">Accountants managing Ghanaian clients</h2>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Spend less time fixing files. Clients record activity in Finza; you review, adjust, and close with clearer period discipline.
              </p>
              <Link href="/accountants" className="mt-4 inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4">
                Accountant workspace →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold text-zinc-900">Explore what Finza includes</h2>
            <p className="text-zinc-600">
              Invoices, quotes, expenses, reports, and Ghana tax handling—see the full list on{" "}
              <Link href="/features" className="font-semibold text-zinc-900 underline underline-offset-2">
                Features
              </Link>
              . Compare plans in{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                GHS on Pricing
              </Link>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/accounting-software-ghana"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400"
              >
                Accounting software Ghana
              </Link>
              <Link
                href="/invoicing-software-ghana"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400"
              >
                Invoicing software Ghana
              </Link>
              <Link
                href="/bookkeeping-software-ghana"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400"
              >
                Bookkeeping software Ghana
              </Link>
              <Link
                href="/quotation-software-ghana"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400"
              >
                Quotation software Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <WhyBusinessesChooseFinza className="bg-white" />

      <HowFinzaHelpsDayToDay className="bg-zinc-50" />

      {/* TRUST */}
      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-zinc-900">Trust and security</h2>
            <p className="mt-3 text-zinc-600">
              Your business data matters. Read how we approach{" "}
              <Link href="/security" className="font-semibold text-zinc-900 underline underline-offset-2">
                security
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-zinc-900 underline underline-offset-2">
                privacy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="small-biz">
                <AccordionTrigger>Is Finza for small businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is for small businesses and service companies in Ghana that want to send invoices online, track payments in GHS, and manage bookkeeping without spreadsheet chaos. Accountants managing Ghanaian clients can also use Finza for cleaner client files.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax">
                <AccordionTrigger>How does Finza handle Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Finza shows VAT, NHIL, and GETFund as separate lines on invoices and in summaries where your setup and the invoice date require that presentation—not one blended “tax” column by default. What you must charge or claim still depends on your business and registration; confirm with your accountant or GRA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accountant">
                <AccordionTrigger>Can my accountant work with my Finza data?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built so accountants can review organized records, tax summaries, and reports instead of rebuilding from PDFs and scattered sheets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pay">
                <AccordionTrigger>Do I need to pay before trying Finza?</AccordionTrigger>
                <AccordionContent>
                  No. Start with a free trial from pricing—no card required to begin. You choose a paid plan in GHS when you are ready.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="features">
                <AccordionTrigger>Where can I see full features and plans?</AccordionTrigger>
                <AccordionContent>
                  See the Features page for capabilities and the Pricing page for Service workspace plans in GHS (Essentials, Professional, Business).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-6">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Start with clearer numbers in GHS</h2>
            <p className="text-zinc-400">Free trial · No card to start · Plans in Ghana cedis</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="inline-block w-full rounded-md bg-white px-8 py-3 text-center text-base font-bold text-zinc-900 shadow sm:w-auto"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="inline-block w-full text-center text-base font-semibold text-zinc-300 underline-offset-4 hover:text-white sm:w-auto">
                View pricing in GHS →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Full capability list" },
          { href: "/contact", label: "Contact", desc: "Talk to Finza" },
        ]}
      />
      <Footer />
    </main>
  );
}
