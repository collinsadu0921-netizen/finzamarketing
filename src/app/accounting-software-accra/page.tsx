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
import { accountingSoftwareAccraFaqForSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software in Accra for Businesses in Ghana | Finza",
  description:
    "Manage invoices, bookkeeping, and reports in GHS with accounting software built for businesses in Accra and across Ghana.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-accra",
  },
};

export default function AccountingSoftwareAccraPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Accounting software in Accra", path: "/accounting-software-accra" },
          ]),
          faqPageSchema(accountingSoftwareAccraFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Accra · Ghana cedis · Reports
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting software in Accra for growing businesses
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              Accra pulls in fast-moving service companies—agencies, consultancies, clinics, law and professional firms—where clients expect clear invoices and leadership expects numbers that survive a board or lender conversation. Finza is{" "}
              <strong className="text-zinc-900">cloud accounting software</strong> in{" "}
              <strong className="text-zinc-900">Ghana cedis (GHS)</strong> for teams based in Accra or working across the country: one place for billing, spending, and reports instead of five half-updated files before month-end.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              You do not need a separate “Accra edition”—the same Finza workspace supports businesses operating from the capital and elsewhere. This page is for how those teams tend to work: more clients, more recurring work, and more pressure to hand a clean file to an accountant.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Who we often see in Accra</p>
            <h2 className="text-2xl font-bold text-zinc-900">Professional services and growing companies—not only retail</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Categories we hear about often include <strong className="text-zinc-900">creative and marketing agencies</strong>,{" "}
              <strong className="text-zinc-900">management and IT consultancies</strong>, <strong className="text-zinc-900">clinics and outpatient practices</strong>,{" "}
              <strong className="text-zinc-900">training providers</strong>, and <strong className="text-zinc-900">B2B suppliers</strong> billing corporate clients on net terms. The pattern is the same: many invoices, follow-ups, and a finance contact or accountant who needs structure—not screenshots.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold text-zinc-900">Accra pace exposes weak accounting fast</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When new work lands every week, “we will fix the books later” stops working. Invoices sit in email threads, partial payments do not match line items, and VAT or NHIL treatment drifts until someone has to explain it to a firm or the tax office.{" "}
              <strong className="text-zinc-900">Accounting software for businesses in Accra</strong> should mean the same numbers in billing, collections, and management reports—not three versions of the truth.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Invoices, expenses, and reports in one GHS workspace</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza ties <strong className="text-zinc-900">invoicing and payments</strong> to the same ledger your reports read from. Tax lines for{" "}
              <strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> can stay visible where your registration requires—instead of one guessed percentage. You can pair day-to-day recording with{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>{" "}
              habits your accountant will recognize.
            </p>
            <p className="text-sm text-zinc-500">
              For the full national overview, see{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-700 underline underline-offset-2">
                accounting software Ghana
              </Link>
              . For buyer-style comparison, see{" "}
              <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-700 underline underline-offset-2">
                best accounting software Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it works in practice</p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-600">
              <li>Issue or send invoices to clients—balances and receivables update from what you actually billed.</li>
              <li>Record expenses and payments as the week moves—MoMo, bank, and cash in GHS.</li>
              <li>Review profit and position views before leadership or lender conversations—without rebuilding Excel.</li>
              <li>Share access or exports with your accountant so reviews start from organized activity.</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-bold text-zinc-900">Built for Ghana, used from major cities</h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              Finza is designed for real Ghana workflows—GHS, local tax line presentation where applicable, and operators who work with accountants. Whether your team sits in Accra, Kumasi, or several towns, you run the same product on published{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing in GHS
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="accra">
                <AccordionTrigger>Is Finza suitable for businesses in Accra?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghana businesses operating from Accra and anywhere else in the country—cloud software with plans in GHS. It fits growing companies and professional service firms that invoice often, record expenses, and need reports and tax summaries without spreadsheet chaos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ghs">
                <AccordionTrigger>Can Finza handle accounting in Ghana cedis?</AccordionTrigger>
                <AccordionContent>
                  Yes. Amounts, customer balances, and reports are in Ghana cedis (GHS). Tax-related summaries can reflect VAT, NHIL, and GETFund where applicable to your setup—confirm final treatment with your accountant or GRA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="together">
                <AccordionTrigger>Does Finza support invoices and reports together?</AccordionTrigger>
                <AccordionContent>
                  Yes. Invoicing, payments, and expenses feed the same workspace as profit and position views—so you are not reconciling a billing tool against a separate report file each month.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accountant">
                <AccordionTrigger>Can accountants use Finza with business owners?</AccordionTrigger>
                <AccordionContent>
                  Yes. Owners and operators can record day-to-day activity; accountants can review organized records, tax summaries, and reports instead of rebuilding from PDFs and chat threads.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-2xl font-extrabold text-white">Cleaner books for Accra operators</h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/invoicing-software-ghana", label: "Invoicing Ghana", desc: "Bill clients in GHS" },
          { href: "/payroll-software-ghana", label: "Payroll Ghana", desc: "PAYE & payslips" },
          { href: "/features", label: "Features", desc: "Full capability list" },
        ]}
      />
      <Footer />
    </main>
  );
}
