import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { InvoicingSerpClusterStrip, MidPageCtaBand, WhyBusinessesTrustFinza } from "@/components/seo-marketing-blocks";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Invoice Tracking Software in Ghana — Unpaid & Overdue in GHS | Finza",
  description:
    "See who owes what in Ghana cedis, which invoices are overdue, and when payments land—without a side spreadsheet. Start free; built for Ghana service businesses.",
  alternates: {
    canonical: "https://www.finza.africa/invoice-tracking-software-ghana",
  },
};

export default function InvoiceTrackingSoftwareGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Invoice tracking software Ghana", path: "/invoice-tracking-software-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Invoice tracking · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Invoice tracking software in Ghana—receivables you can trust
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              <strong className="text-zinc-900">Finza invoicing software Ghana</strong> users get more than PDFs: you get balances per customer, status (sent, paid, overdue), and history in{" "}
              <strong className="text-zinc-900">GHS</strong>. This page is the long-tail lens on the same capability—perfect when you search specifically for{" "}
              <strong className="text-zinc-900">invoice tracking</strong> before choosing{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                full invoicing software in Ghana
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
              <Link href="/quotation-software-ghana" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                Quote before you bill
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
            <h2 className="text-2xl font-bold text-zinc-900">From quote to paid—one thread</h2>
            <p className="leading-relaxed text-zinc-600">
              Approved scopes should match billed lines. Pair tracking with{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotation software Ghana
              </Link>{" "}
              so customers see consistent totals. Reports roll into{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>{" "}
              for the full picture.
            </p>
            <p className="text-sm text-zinc-500">
              Read:{" "}
              <Link href="/blog/how-to-create-invoice-in-ghana" className="font-semibold text-zinc-900 underline">
                how to create an invoice in Ghana
              </Link>
              ,{" "}
              <Link href="/blog/how-to-manage-cash-flow-ghana" className="font-semibold text-zinc-900 underline">
                cash flow in Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <InvoicingSerpClusterStrip className="bg-zinc-50" />

      <MidPageCtaBand title="Know today's overdue list before you chase payments." className="bg-white py-10" />

      <WhyBusinessesTrustFinza className="bg-zinc-50" />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">More resources</p>
            <p className="mt-2 leading-relaxed">
              <Link href="/blog" className="font-semibold text-zinc-900 underline">
                Blog
              </Link>{" "}
              ·{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                Expense tracking Ghana
              </Link>{" "}
              ·{" "}
              <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                Compare accounting software
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
              className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
            >
              Try Finza free
            </a>
            <Link href="/demo" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
              See how it works
            </Link>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/invoicing-software-ghana", label: "Invoicing Ghana", desc: "Send & track in GHS" },
          { href: "/quotation-software-ghana", label: "Quotations Ghana", desc: "Quote to invoice" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
        ]}
      />
      <Footer />
    </main>
  );
}
