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
import { breadcrumbListSchema, faqPageSchema, invoicingSoftwareKumasiFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Invoicing Software in Kumasi for Service Businesses | Finza",
  description:
    "Send invoices in GHS, track payments, and manage customer balances with invoicing software built for Kumasi businesses.",
  alternates: {
    canonical: "https://www.finza.africa/invoicing-software-kumasi",
  },
};

export default function InvoicingSoftwareKumasiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Invoicing software in Kumasi", path: "/invoicing-software-kumasi" },
          ]),
          faqPageSchema(invoicingSoftwareKumasiFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Kumasi · Invoices · GHS
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Invoicing software in Kumasi for service businesses
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              Kumasi runs on relationships—construction crews, fit-out contractors, equipment hire, training outfits, and traders who also do project work. The weak link is usually billing: an agreed price in conversation, a handwritten note, then a scramble to remember who still owes what.{" "}
              <strong className="text-zinc-900">Invoice software for businesses in Kumasi</strong> should live in{" "}
              <strong className="text-zinc-900">Ghana cedis</strong>, stay tied to each customer, and survive the busy season without a second ledger in a notebook.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              Finza is the same product nationwide—you choose Kumasi on this page because the work patterns here lean hard on quotes, milestones, and follow-up. You are not buying a different SKU; you are choosing wording that matches how you sell.
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
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Local reality</p>
            <h2 className="text-2xl font-bold text-zinc-900">Service work, retainers, and suppliers you invoice monthly</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Teams in and around Kumasi often mix <strong className="text-zinc-900">contractors</strong>, <strong className="text-zinc-900">cleaning and facilities crews</strong>,{" "}
              <strong className="text-zinc-900">small manufacturers</strong> selling B2B, and <strong className="text-zinc-900">professional service providers</strong> who quote first and bill after sign-off. The win is simple: every issued invoice updates the same unpaid list—whether the client pays by bank, MoMo, or cash.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold text-zinc-900">“I will send the invoice tonight” should not be your system</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When invoices float between WhatsApp, SMS, and memory, you lose track of retainers, variations, and VAT treatment.{" "}
              <strong className="text-zinc-900">Invoicing software Kumasi</strong> operators adopt when they are tired of arguing over what was agreed. Finza keeps the thread in one place: customer, lines, tax presentation where applicable, status, and payment history.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Quotes, invoices, and balances that match</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Start from an approved quotation when the job was scoped in stages—then convert without retyping. Issue invoices when work is ready; record payments when they hit your account. For national context and deeper reporting, pair with{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>{" "}
              guidance on the same site. The dedicated hub for billing is{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software Ghana
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
              <li>Agree scope in a quotation; when the client confirms, move to an invoice with the same lines in GHS.</li>
              <li>Send or issue the invoice so receivables and customer balance reflect the real document.</li>
              <li>Record part-payments or full settlement—status updates for the whole team.</li>
              <li>Before you chase debt, open unpaid: see who is overdue without opening ten chats.</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-bold text-zinc-900">Practical control, Ghana-wide product</h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              Finza is built for Ghana businesses in major cities and smaller towns alike. Plans and trials are in{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                Ghana cedis on Pricing
              </Link>
              . Same software whether your shop is off Adum or you work regionally.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="ghs">
                <AccordionTrigger>Can I send invoices in GHS with Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. You create and send professional invoices in Ghana cedis (GHS), with tax lines shown separately where applicable for your business—not one blended tax column by default.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="unpaid">
                <AccordionTrigger>Can Finza help track unpaid invoices?</AccordionTrigger>
                <AccordionContent>
                  Yes. You see outstanding balances by customer, which invoices are unpaid or overdue, and when payments are recorded—so collections are not a separate spreadsheet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="kumasi">
                <AccordionTrigger>Is Finza suitable for service businesses in Kumasi?</AccordionTrigger>
                <AccordionContent>
                  Yes. Service companies, contractors, and growing SMEs in Kumasi that bill clients regularly are a strong fit—especially when quotes become invoices without retyping.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quotes">
                <AccordionTrigger>Can quotes and invoices work together?</AccordionTrigger>
                <AccordionContent>
                  Yes. After a quotation is approved, you can move to invoicing in the same system so line items and agreed totals in GHS stay consistent.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-2xl font-extrabold text-white">Invoice in GHS. Know who paid.</h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
              >
                Try Finza free
              </a>
              <Link href="/quotation-software-ghana" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Quotations in Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/quotation-software-ghana", label: "Quotations", desc: "Quote to invoice" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/features", label: "Features", desc: "Full list" },
        ]}
      />
      <Footer />
    </main>
  );
}
