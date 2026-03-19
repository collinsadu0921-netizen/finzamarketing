import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Security & Data Integrity — Finza",
  description:
    "How Finza approaches data protection, system integrity, and ledger-first auditability — append-only postings, reversals, and period controls.",
  alternates: {
    canonical: "https://www.finza.africa/security",
  },
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Security
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Security, integrity, and audit-ready records
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Financial software must protect <strong className="text-zinc-900">customer data</strong> and protect <strong className="text-zinc-900">the truth of the ledger</strong>. Finza is designed around both.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <article className="prose prose-zinc mx-auto max-w-3xl prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600">
            <h2>Data protection</h2>
            <p>
              Access to production systems should be limited, monitored, and aligned with least-privilege practice. Customer financial data is sensitive; we treat transport and storage with standard cloud security expectations appropriate to a financial application.
            </p>
            <p>
              For data subject requests and privacy specifics, see our{" "}
              <Link href="/privacy" className="font-semibold text-zinc-900 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>

            <h2>System integrity</h2>
            <p>
              The general ledger is the source of truth. Transactions post as <strong>balanced journal entries</strong>. Reports (P&amp;L, balance sheet, VAT position) are derived from that ledger — not pasted from side spreadsheets.
            </p>

            <h2>Ledger-first audit explanation</h2>
            <p>
              Posted entries are <strong>append-only</strong>. When something is wrong, users and accountants post a <strong>reversing entry</strong> — the original line remains visible. That mirrors professional accounting practice and preserves a defensible trail if questions arise.
            </p>
            <p>
              <strong>Period locking</strong> (in the Accountant Workspace) prevents back-dated changes to closed periods so comparative reporting stays stable after sign-off.
            </p>

            <h2>Operational security habits we recommend</h2>
            <ul>
              <li>Use unique passwords and device lock screens on machines that access Finza.</li>
              <li>Limit shared logins; accountants should use their own professional access.</li>
              <li>Export critical period-end reports and store them with your engagement file.</li>
            </ul>
          </article>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/privacy", label: "Privacy Policy", desc: "Data & rights" },
          { href: "/terms", label: "Terms of Service", desc: "Platform rules" },
        ]}
      />
      <Footer />
    </main>
  );
}
