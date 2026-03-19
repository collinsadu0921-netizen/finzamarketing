import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GhanaVatCalculator } from "@/components/ghana-vat-calculator";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Ghana VAT Calculator — VAT, NHIL & GETFund (Illustrative) | Finza",
  description:
    "Estimate VAT (15%), NHIL (2.5%), and GETFund (2.5%) on a net amount. Illustrative tool for planning; use Finza for ledger-accurate posting and GRA-ready reports.",
  alternates: {
    canonical: "https://www.finza.africa/ghana-vat-calculator",
  },
};

export default function GhanaVatCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Tools · Ghana tax
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                Ghana VAT calculator — illustrative levy breakdown
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600">
                This page helps you <strong className="text-zinc-900">visualise</strong> how standard headline rates compound on a <strong className="text-zinc-900">net</strong> amount. It is not legal or tax advice; supply type, registration, and exemptions change real outcomes.
              </p>
              <p className="text-sm text-zinc-500">
                For software that posts every component to the ledger automatically, see{" "}
                <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                  accounting software for Ghana
                </Link>{" "}
                and{" "}
                <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                  VAT software
                </Link>
                .
              </p>
            </div>
            <GhanaVatCalculator />
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600">
            <h2>How to read the numbers</h2>
            <p>
              The calculator applies <strong>15%</strong> to the net base for VAT, and <strong>2.5% + 2.5%</strong> for NHIL and GETFund on the same illustrative base. Your contracts, POS, or invoicing may use different composition depending on how prices are quoted — always align with your accountant and your GRA registration.
            </p>
            <h3>Quick reference (GHS 5,000 net)</h3>
            <p>
              On a <strong>GHS 5,000</strong> net: VAT <strong>GHS 750</strong>, NHIL <strong>GHS 125</strong>, GETFund <strong>GHS 125</strong>, total levies <strong>GHS 1,000</strong>, gross <strong>GHS 6,000</strong>. That mirrors the structure Finza uses in journal examples across the marketing site.
            </p>
            <h2>2026 framework note</h2>
            <p>
              Effective <strong>1 January 2026</strong>, NHIL and GETFund are treated as <strong>input tax deductions</strong> under Ghana&apos;s revised VAT framework. A calculator shows outputs on sales; your books must still track <strong>inputs</strong> on purchases correctly.
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/how-vat-works-ghana",
            label: "How VAT works in Ghana",
            desc: "Concepts and examples",
          },
          {
            href: "/nhil-getfund-explained",
            label: "NHIL & GETFund explained",
            desc: "Separate levies, ledger lines",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
