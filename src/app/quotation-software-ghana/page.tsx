import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { HowFinzaHelpsDayToDay, WhyBusinessesChooseFinza } from "@/components/seo-marketing-blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema, quotationSoftwareGhanaFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Quotation Software in Ghana — Quotes, Approval & Invoice in GHS | Finza",
  description:
    "Quotation software for Ghana service businesses: clear scope in GHS, quote approval, and quote-to-invoice without retyping. VAT, NHIL, GETFund where applicable.",
  alternates: {
    canonical: "https://www.finza.africa/quotation-software-ghana",
  },
};

export default function QuotationSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Quotation software for Ghana", path: "/quotation-software-ghana" },
          ]),
          faqPageSchema(quotationSoftwareGhanaFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Quotation software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Quotation software in Ghana—approval, scope clarity, then invoice in GHS
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              Win work with a clear <strong className="text-zinc-900">quote in Ghana cedis</strong>, get agreement on scope and totals, then move to billing without rebuilding the document. Built for <strong className="text-zinc-900">service companies in Ghana</strong> that sell on proposals first—then bill with{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software in Ghana
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
            <h2 className="text-3xl font-bold text-zinc-900">Quotes and final invoices do not match</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              The customer approved one total; the invoice shows another because someone retyped lines or changed tax. Scope lived in email while the PDF was outdated. That friction costs trust—and time—for agencies, consultants, and contractors across Ghana.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Quote approval, then invoice—same structure in GHS</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Keep line items, quantities, and agreed totals consistent from quotation to invoice. Tax presentation for <strong className="text-zinc-900">VAT, NHIL, and GETFund</strong> follows the same rules <strong className="text-zinc-900">where applicable</strong> to your business—confirm details with your accountant.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Avoid rework after approval</p>
            <h2 className="text-3xl font-bold text-zinc-900">Stop re-keying the job the client already signed</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              After the client says yes, convert the approved quote instead of starting a fresh invoice from memory. Fewer typos, fewer disputes, faster billing in <strong className="text-zinc-900">GHS</strong>. Your team spends time delivering—not reconciling two versions of the same deal.
            </p>
            <p className="text-sm text-zinc-500">
              Finza keeps the thread in one system so finance and delivery share one source for what was sold.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">Related</p>
            <p className="mt-2">
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline">
                Invoicing software Ghana
              </Link>
              {" · "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                Accounting software Ghana
              </Link>
              {" · "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline">
                Bookkeeping software Ghana
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="convert">
                <AccordionTrigger>Can a quote turn into an invoice without retyping?</AccordionTrigger>
                <AccordionContent>
                  Yes. After approval, you move from quotation to invoice in the same system so line items and GHS totals stay consistent.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="disputes">
                <AccordionTrigger>How do quotations reduce disputes?</AccordionTrigger>
                <AccordionContent>
                  Clear scope, line items, and approved totals in GHS mean fewer arguments about what was agreed before work starts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax">
                <AccordionTrigger>Are tax lines shown on quotations?</AccordionTrigger>
                <AccordionContent>
                  Where applicable, quotations can reflect common Ghana tax line presentation. Final treatment depends on your business and registration—confirm with your accountant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who">
                <AccordionTrigger>Who is quotation software for in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Service businesses that sell on proposals—agencies, consultants, contractors, and professional firms—before they bill.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <WhyBusinessesChooseFinza />

      <HowFinzaHelpsDayToDay className="bg-white" />

      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-3xl font-extrabold text-white">Quote in GHS. Bill with confidence.</h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1" className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900">
                Try Finza free
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Track unpaid in GHS" },
          { href: "/features", label: "Features", desc: "Full list" },
        ]}
      />
      <Footer />
    </main>
  );
}
