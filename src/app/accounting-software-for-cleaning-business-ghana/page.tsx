import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { MidPageCtaBand, WhyBusinessesTrustFinza } from "@/components/seo-marketing-blocks";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software for Cleaning Businesses in Ghana (2026) | Finza",
  description:
    "Recurring jobs, quotes, and steady invoicing in GHS. Track what each contract owes and stay ready for VAT lines where applicable—without spreadsheet chaos. Try Finza free.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-for-cleaning-business-ghana",
  },
};

export default function AccountingSoftwareCleaningGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Cleaning business accounting Ghana", path: "/accounting-software-for-cleaning-business-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Use case · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Accounting software for cleaning businesses in Ghana
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Cleaning companies live on <strong className="text-zinc-900">repeat visits</strong>, <strong className="text-zinc-900">quotes</strong>, and <strong className="text-zinc-900">invoices in GHS</strong>. If you are still using Excel for invoices, you lose the thread on which site paid and which is overdue.
            </p>
            <p className="text-sm text-zinc-500">
              <strong className="text-zinc-700">Finza</strong> fits teams that bill often and need one place for receivables, expenses, and reports your accountant can review.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white"
              >
                Try Finza free
              </a>
              <Link href="/invoicing-software-ghana" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Invoicing in GHS
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-zinc-600">
            <h2 className="text-2xl font-bold text-zinc-900">What cleaning operators need in software</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Clear quotes that become invoices without retyping—see our hub for quotation-to-bill flows.</li>
              <li>Customer balances in Ghana cedis: residential vs commercial contracts, deposits, and top-ups.</li>
              <li>Expense visibility for supplies and transport—pair with bookkeeping habits and full accounting views.</li>
            </ul>
            <p>
              Use the short “next steps” list below for hubs—then layer the{" "}
              <Link href="/blog/bookkeeping-checklist-ghana" className="font-semibold text-zinc-900 underline">
                weekly bookkeeping checklist
              </Link>{" "}
              when you want a printable rhythm.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Put this month's contracts in one receivables view—then chase with confidence." />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Example week</p>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Three sites, two overdue, one deposit</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Monday you quote a new office block; Tuesday–Thursday crews run scheduled visits; Friday you invoice retainer clients and see two commercial accounts past terms. Supplies and fuel hit the same week. In one GHS workspace, receivables, expenses, and tax lines where applicable stay tied to the same customers—so your accountant is not rebuilding the story from chat screenshots.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza fits in practice</p>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-600">
                <li>Add each contract as a customer with clear billing terms.</li>
                <li>Turn approved quotes into invoices without retyping line items.</li>
                <li>Record MoMo, bank, or cash when clients pay—balances update for the team.</li>
                <li>Log supply runs the same week so margin is visible before month-end.</li>
              </ol>
            </div>
            <div className="border-t border-zinc-200 pt-8">
              <p className="text-sm font-semibold text-zinc-900">Next steps</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
                <li>
                  <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Accounting software Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Quotation software Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Invoicing in GHS
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
          { href: "/invoice-software-for-contractors-ghana", label: "Contractors invoicing", desc: "Milestones & retention" },
          { href: "/bookkeeping-for-small-business-ghana", label: "Bookkeeping SME", desc: "Weekly rhythm" },
        ]}
      />
      <Footer />
    </main>
  );
}
