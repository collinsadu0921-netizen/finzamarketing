import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting for Small Business in Ghana — Practical Guide | Finza",
  description:
    "Cash flow, VAT position, and month-end without a finance team: how small Ghanaian businesses can run cleaner books. Link to Finza pricing and accounting software.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-for-small-business-ghana",
  },
};

export default function AccountingForSmallBusinessGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              SMEs · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting for small business in Ghana — what actually matters
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Small businesses rarely fail because they lack a 40-page chart of accounts. They fail because <strong className="text-zinc-900">no one knows real profit</strong>, <strong className="text-zinc-900">VAT is guessed</strong>, and the accountant receives a spreadsheet in March that cannot be audited.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                View pricing
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
            <h2>Scenario: retail shop with daily sales</h2>
            <p>
              A corner shop takes <strong>GHS 800</strong> cash and <strong>GHS 400</strong> mobile money in a day. Without a ledger, &quot;revenue&quot; becomes whatever was counted. With POS tied to accounting, each sale posts <strong>revenue</strong>, <strong>VAT/levies</strong>, and <strong>cash or MoMo</strong> automatically — you can explain the day to an investor or GRA.
            </p>

            <h2>Scenario: consultant invoicing twice a month</h2>
            <p>
              You invoice <strong>GHS 15,000</strong> net to Client A and <strong>GHS 8,000</strong> net to Client B. You need <strong>accounts receivable</strong> per client, correct <strong>output VAT and levies</strong>, and an income statement that updates when a payment hits — not when you remember to update Excel.
            </p>

            <h2>What to stop doing</h2>
            <ul>
              <li>Recording only bank movements and calling it accounting.</li>
              <li>Mixing personal spend in the same sheet as the business.</li>
              <li>Deleting wrong rows instead of reversing entries.</li>
            </ul>

            <h2>How Finza helps</h2>
            <p>
              Finza keeps a <strong>single general ledger</strong> for the business. Retail and service workspaces match how SMEs actually operate;{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing is per workspace
              </Link>{" "}
              with no card required to start the free month.
            </p>
            <p>
              For product detail, start at{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/pricing", label: "Pricing", desc: "Retail, Service, Accountant" },
          {
            href: "/accounting-vs-excel-ghana",
            label: "Accounting vs Excel",
            desc: "When spreadsheets break",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
