import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "NHIL and GETFund Explained for Ghana Businesses | Finza",
  description:
    "NHIL (2.5%) and GETFund (2.5%): what they are, how they differ from VAT, and input tax deduction treatment effective 1 January 2026. Links to VAT software and accounting for Ghana.",
  alternates: {
    canonical: "https://www.finza.africa/nhil-getfund-explained",
  },
};

export default function NhilGetfundExplainedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Ghana levies · NHIL · GETFund
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              NHIL and GETFund explained — separate from VAT, tracked like tax
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              The <strong className="text-zinc-900">National Health Insurance Levy (NHIL)</strong> and the{" "}
              <strong className="text-zinc-900">Ghana Education Trust Fund levy (GETFund)</strong> are often quoted at{" "}
              <strong className="text-zinc-900">2.5% each</strong> on applicable supplies. They are <strong className="text-zinc-900">not VAT</strong> — they are distinct statutory levies — but on many invoices they appear alongside VAT, which is why businesses need them <strong className="text-zinc-900">broken out in the ledger</strong>.
            </p>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Framework in effect
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Effective 1 January 2026, Finza follows Ghana&apos;s revised VAT framework: VAT remains 15%, NHIL remains 2.5%, and GETFund remains 2.5%. Under this framework, NHIL and GETFund are treated as input tax deductions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/accounting-software-ghana"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Accounting software for Ghana
              </Link>
              <Link
                href="/vat-software-ghana"
                className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                VAT &amp; levy software
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Why separate ledger lines matter</h2>
            <p>
              Bundling VAT, NHIL, and GETFund into one &quot;sales tax&quot; figure breaks reconciliation. Your accountant needs to see{" "}
              <strong>output</strong> and <strong>input</strong> elements per levy where applicable, and your commercial quotes need to match what the customer pays.
            </p>

            <h3>Example invoice structure (GHS)</h3>
            <p>
              Net service fee: <strong>GHS 20,000</strong>. At illustrative headline rates: VAT 15% = <strong>GHS 3,000</strong>; NHIL 2.5% = <strong>GHS 500</strong>; GETFund 2.5% = <strong>GHS 500</strong>. Customer total (this pattern) = <strong>GHS 24,000</strong>. Your system should post each component to the correct account — not a single rounded &quot;tax&quot; lump.
            </p>

            <h2>Input side: deductions after 1 January 2026</h2>
            <p>
              Under the revised framework effective <strong>1 January 2026</strong>, NHIL and GETFund are treated as <strong>input tax deductions</strong> (alongside VAT where rules allow). Practically, that increases the importance of capturing <strong>valid purchase documentation</strong> and coding purchases so levy inputs are visible — the same discipline as VAT.
            </p>

            <h2>NHIL vs GETFund in plain terms</h2>
            <ul>
              <li>
                <strong>NHIL</strong> funds health insurance infrastructure; it is a dedicated levy, not a line inside the VAT percentage.
              </li>
              <li>
                <strong>GETFund</strong> supports education-related investment; again, a separate levy with its own reporting logic in compliant books.
              </li>
            </ul>

            <h2>Where to go next</h2>
            <p>
              For step-by-step VAT mechanics, read{" "}
              <Link href="/how-vat-works-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                How VAT works in Ghana
              </Link>
              . For interactive numbers, use the{" "}
              <Link href="/ghana-vat-calculator" className="font-semibold text-zinc-900 underline underline-offset-2">
                Ghana VAT calculator
              </Link>{" "}
              (illustrative).
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/how-vat-works-ghana",
            label: "How VAT works in Ghana",
            desc: "Output, input, examples",
          },
          {
            href: "/ghana-vat-nhil-getfund",
            label: "VAT + NHIL + GETFund guide",
            desc: "Single reference page",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
