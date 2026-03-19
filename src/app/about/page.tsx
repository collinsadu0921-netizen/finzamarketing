import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "About Finza — Accounting Software Built for Ghana | Finza",
  description:
    "Finza’s mission: ledger-first accounting for Ghanaian businesses and accountants — real-time VAT, NHIL, GETFund, and audit-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              About Finza
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Built in Africa, for businesses that need real books
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Finza exists because <strong className="text-zinc-900">most Ghanaian SMEs</strong> still run finance on spreadsheets and memory. That is not a discipline problem — it is a <strong className="text-zinc-900">tools problem</strong>. Generic global software often ignores how Ghana actually taxes transactions; manual sheets cannot enforce double-entry. See the product in motion via the{" "}
              <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                interactive demo
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Mission</h2>
            <p>
              Give every serious business in Ghana a <strong>general ledger that stays balanced</strong>, tax lines that match GRA expectations, and reports that accountants can sign off without rebuilding the file.
            </p>
            <h2>Ghana focus</h2>
            <p>
              VAT (15%), NHIL (2.5%), and GETFund (2.5%) are first-class in the product — not a settings afterthought. The framework effective <strong>1 January 2026</strong> (including input tax deduction treatment for NHIL and GETFund) is how we describe and implement tax handling on the marketing site and in product direction.
            </p>
            <h2>Who we build for</h2>
            <ul>
              <li>Retailers with inventory and daily sales.</li>
              <li>Service businesses living in invoices and receivables.</li>
              <li>Accountants who need journals, period lock, and reversal-based corrections.</li>
            </ul>
            <p>
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Accounting software for Ghana
              </Link>{" "}
              ·{" "}
              <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                Contact
              </Link>
            </p>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Product depth" },
          { href: "/accountants", label: "For accountants", desc: "Professional workspace" },
        ]}
      />
      <Footer />
    </main>
  );
}
