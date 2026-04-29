import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { InvoiceCalculatorGhana } from "@/components/invoice-calculator-ghana";
import { JsonLd } from "@/components/json-ld";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { breadcrumbListSchema } from "@/lib/schema";

const signupUrl =
  "https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1";

export const metadata: Metadata = {
  title: "Ghana Invoice Calculator | Preview Invoice Totals, VAT and Balance Due",
  description:
    "Preview a Ghana service invoice with line items, tax examples, payments and balance due. Finza helps service businesses create clearer invoices and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/invoice-calculator-ghana",
  },
};

export default function InvoiceCalculatorGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Invoice Calculator Ghana", path: "/invoice-calculator-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Ghana invoice calculator for service businesses
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-600">
              Preview how a service invoice could look before you send it. Add service lines, apply Ghana tax line examples, record a partial payment, and see the total and balance due.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={signupUrl}
                className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Start 14-day free trial
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                See how it works
              </Link>
            </div>
            <p className="text-sm text-zinc-500">14-day free trial. No card required to start.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <InvoiceCalculatorGhana />
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600">
            <h2>What this calculator shows</h2>
            <p>
              This preview connects service line details, tax examples, partial payment tracking, and customer balance visibility in one place. Finza helps service businesses keep invoice records clearer so teams and accountants can review what was billed, paid, and still due.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-10">
        <Container>
          <p className="mx-auto max-w-3xl rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
            This tool is for illustration only. It does not create a real invoice and is not tax or legal advice. Your accountant or tax adviser should review tax treatment before filing.
          </p>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Ready to create real invoices in Finza?</h2>
            <p className="text-zinc-600">
              Use Finza to create quotes, invoices, payment records and accountant-ready business records in one workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={signupUrl}
                className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Start 14-day free trial
              </Link>
              <Link
                href="/invoicing-software-ghana"
                className="inline-flex items-center rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
              >
                View invoicing software
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          {
            href: "/invoicing-software-ghana",
            label: "Invoicing software for Ghana",
            desc: "Create and track service invoices",
          },
          {
            href: "/accounting-software-ghana",
            label: "Accounting software for Ghana",
            desc: "Connect invoices, expenses, and records",
          },
        ]}
      />
      <Footer />
    </main>
  );
}

