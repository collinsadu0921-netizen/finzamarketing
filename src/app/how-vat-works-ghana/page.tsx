import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "How VAT Works in Ghana — Guide for Businesses | Finza",
  description:
    "Understand Ghana VAT (15%), output vs input tax, filing context, and how multi-levy supplies relate to bookkeeping. For software that posts VAT automatically, see Finza.",
  alternates: {
    canonical: "https://www.finza.africa/how-vat-works-ghana",
  },
};

export default function HowVatWorksGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Ghana tax · VAT
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              How VAT works in Ghana — a practical overview
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Value Added Tax in Ghana is charged on <strong className="text-zinc-900">taxable supplies</strong> made by a <strong className="text-zinc-900">VAT-registered</strong> business. The headline standard rate most operators reference is{" "}
              <strong className="text-zinc-900">15%</strong> on the value of the supply, with rules for exemptions, zero-rating, and flat-rate schemes depending on registration and activity.
            </p>
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
                VAT software
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Output VAT vs input VAT</h2>
            <p>
              When you sell, you typically collect <strong>output VAT</strong> on top of your net price (where the supply is standard-rated). When you purchase for the business, you may incur{" "}
              <strong>input VAT</strong> on supplier invoices. Your net VAT position for a period is driven by how those amounts are recorded and reconciled — which is why serious operators keep VAT in <strong>separate ledger accounts</strong>, not mixed into revenue.
            </p>

            <h3>Worked example (GHS)</h3>
            <p>
              You sell goods for a <strong>net</strong> value of <strong>GHS 10,000</strong> at standard rate. Output VAT at 15% is <strong>GHS 1,500</strong>. The customer pays <strong>GHS 11,500</strong>. In your books, revenue should reflect the net sale; VAT payable sits in a liability account until remitted.
            </p>
            <p>
              You buy stock for <strong>net GHS 4,000</strong> with <strong>GHS 600</strong> input VAT shown on a valid tax invoice. That input VAT (subject to deductibility rules) offsets part of your output — your system should track it distinctly from inventory cost.
            </p>

            <h2>NHIL and GETFund in the same conversation</h2>
            <p>
              Many commercial invoices in Ghana also carry <strong>NHIL (2.5%)</strong> and <strong>GETFund (2.5%)</strong> on applicable bases. Effective <strong>1 January 2026</strong>, under Ghana&apos;s revised VAT framework, these levies are treated as <strong>input tax deductions</strong> where the rules apply — so your software should not treat them as an afterthought to &quot;VAT only&quot; reporting.
            </p>
            <p>
              For a fuller structural explanation, read{" "}
              <Link href="/nhil-getfund-explained" className="font-semibold text-zinc-900 underline underline-offset-2">
                NHIL and GETFund explained
              </Link>{" "}
              and our{" "}
              <Link href="/ghana-vat-nhil-getfund" className="font-semibold text-zinc-900 underline underline-offset-2">
                combined VAT, NHIL, GETFund guide
              </Link>
              .
            </p>

            <h2>Why timing matters</h2>
            <p>
              VAT position is not a once-a-quarter spreadsheet exercise if you want clean filings and clean audits. Levies should be <strong>posted at the transaction</strong> — the same moment revenue or expense hits the ledger — so your control accounts always match operational reality.
            </p>

            <h2>How Finza fits</h2>
            <p>
              Finza is built <strong>ledger-first</strong>: invoices and sales flows post journal entries that separate revenue from VAT and levies. That is the same discipline accountants expect — automated so owners are not hand-calculating percentages at month-end. When you want the product angle on returns and control accounts, start with{" "}
              <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                VAT software for Ghana
              </Link>{" "}
              and the broader{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Finza accounting overview
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/vat-software-ghana",
            label: "VAT software for Ghana",
            desc: "GRA-ready reports from the ledger",
          },
          {
            href: "/ghana-vat-calculator",
            label: "Ghana VAT calculator",
            desc: "Illustrative levy totals",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
