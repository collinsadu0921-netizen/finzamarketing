import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { MidPageCtaBand, WhyBusinessesTrustFinza } from "@/components/seo-marketing-blocks";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Invoice Software for Contractors in Ghana — GHS, Milestones & Quotes | Finza",
  description:
    "Bill construction and project work in Ghana cedis: approved scopes, progress invoices, and unpaid tracking—without losing the thread in WhatsApp. Try Finza free.",
  alternates: {
    canonical: "https://www.finza.africa/invoice-software-for-contractors-ghana",
  },
};

export default function InvoiceSoftwareContractorsGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Invoice software contractors Ghana", path: "/invoice-software-for-contractors-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Contractors · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Invoice software for contractors in Ghana
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Contractors argue about <strong className="text-zinc-900">scope</strong> and <strong className="text-zinc-900">variation</strong>—then about <strong className="text-zinc-900">what was invoiced</strong>. If your accountant keeps asking for a single list of open billings, you need invoice history tied to the same quotes you agreed.
            </p>
            <p className="text-sm text-zinc-500">
              <strong className="text-zinc-700">Finza invoicing software Ghana</strong> works with structured quotes, progress-style billing, and customer balances in GHS.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white"
              >
                Try Finza free
              </a>
              <Link href="/quotation-software-ghana" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Quotation software
              </Link>
              <Link href="/invoicing-software-ghana" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Full invoicing hub
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-zinc-600">
            <h2 className="text-2xl font-bold text-zinc-900">Reduce disputes before they become receivables problems</h2>
            <p className="leading-relaxed">
              Align line items and agreed totals from quotation to invoice. Record payments when retention releases or clients settle—your open balance should match reality.
            </p>
            <p>
              For document discipline, start with{" "}
              <Link href="/blog/how-to-create-invoice-in-ghana" className="font-semibold text-zinc-900 underline">
                how to create an invoice in Ghana
              </Link>
              —then wire the same scope through the steps below.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Send the next progress invoice from the same approved scope—no silent retyping." className="bg-white py-10" />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workflow</p>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Site visit to payment—one thread</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Variations get argued on site; finance should still see the same line items the client signed. Progress claims, retention, and final invoices need to reference the original scope so open receivables match what project leads believe is owed.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza fits in practice</p>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-600">
                <li>Lock the approved quotation as the source of billable lines.</li>
                <li>Raise each progress invoice from that scope—note retention if your terms use it.</li>
                <li>Share the PDF or link; when payment lands, record it once in GHS.</li>
                <li>Review unpaid by customer before the next site meeting—no silent drift.</li>
              </ol>
            </div>
            <div className="border-t border-zinc-200 pt-8">
              <p className="text-sm font-semibold text-zinc-900">Next steps</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
                <li>
                  <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Invoicing software Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Quotation software Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Invoice tracking Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <WhyBusinessesTrustFinza className="bg-zinc-50" />

      <RelatedClusterLinks
        related={[
          { href: "/invoice-tracking-software-ghana", label: "Invoice tracking", desc: "Unpaid in GHS" },
          { href: "/accounting-software-for-cleaning-business-ghana", label: "Cleaning businesses", desc: "Recurring billing" },
        ]}
      />
      <Footer />
    </main>
  );
}
