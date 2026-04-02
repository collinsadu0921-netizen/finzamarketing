import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting for Service Businesses in Ghana | Finza",
  description:
    "Invoices, receivables, and project income for Ghanaian agencies and consultancies. Practical scenarios, links to Finza pricing and accounting software for Ghana.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-for-service-business-ghana",
  },
};

export default function AccountingForServiceBusinessGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Services · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting for service businesses in Ghana — receivables first
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Service firms live in <strong className="text-zinc-900">invoices and timesheets</strong>. The ledger must answer: who owes what, which revenue is recognised, and what VAT/levies apply on each bill — before the client pays.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Service workspace pricing
              </Link>
              <Link
                href="/accounting-software-ghana"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Accounting software
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Scenario: agency milestone billing</h2>
            <p>
              You agree <strong>GHS 24,000</strong> net for a deliverable, invoiced 50% upfront. On invoice, the ledger should show <strong>accounts receivable</strong> for the gross invoiced amount, <strong>revenue</strong> (or deferred revenue if you defer), and <strong>output VAT and levies</strong> per line. When the client pays MoMo, AR clears to cash — no second manual journal.
            </p>

            <h2>Scenario: slow-paying corporate client</h2>
            <p>
              Invoice <strong>GHS 18,500</strong> total outstanding 60 days. You need an <strong>aged receivables</strong> list from the ledger, not a WhatsApp reminder list. That requires every invoice to have posted through AR, not &quot;income when paid&quot; in a spreadsheet.
            </p>

            <h2>Expenses that are not &quot;misc&quot;</h2>
            <p>
              Subcontractors, software, and transport should hit real expense accounts. Month-end P&amp;L should explain <strong>why</strong> net profit moved — not collapse everything into one row called &quot;costs&quot;.
            </p>

            <h2>Where Finza fits</h2>
            <p>
              The Service Workspace is built for invoicing-to-ledger flow. See{" "}
              <Link href="/accounting-software-for-service-businesses-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for service businesses
              </Link>{" "}
              and{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-software-for-service-businesses-ghana",
            label: "Service business software page",
            desc: "Invoices & AR",
          },
          {
            href: "/invoicing-software-ghana",
            label: "Invoice software Ghana",
            desc: "Billing-focused angle",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
