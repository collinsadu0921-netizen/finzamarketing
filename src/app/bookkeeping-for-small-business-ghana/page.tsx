import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { MidPageCtaBand, WhyBusinessesTrustFinza } from "@/components/seo-marketing-blocks";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bookkeeping for Small Business in Ghana (2026) — Weekly Habit in GHS | Finza",
  description:
    "If you do not know your real profit, fix the habit first: log sales and expenses weekly in Ghana cedis. Finza bookkeeping software ties into invoicing and accounting—try free.",
  alternates: {
    canonical: "https://www.finza.africa/bookkeeping-for-small-business-ghana",
  },
};

export default function BookkeepingForSmallBusinessGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Bookkeeping for small business Ghana", path: "/bookkeeping-for-small-business-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              SMEs · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Bookkeeping for small business in Ghana—make weeklies boring (in a good way)
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              This page is about the <strong className="text-zinc-900">operating habit</strong>. The product home for features is{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping software Ghana
              </Link>
              —use both: intent here, depth there.
            </p>
            <p className="rounded-lg border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-zinc-700">
              If your accountant keeps asking for data you do not have ready, the fastest win is a weekly 30-minute close—not a new spreadsheet tab.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white"
              >
                Try Finza free
              </a>
              <Link href="/bookkeeping-software-ghana" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Bookkeeping features
              </Link>
              <Link href="/blog/bookkeeping-checklist-ghana" className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900">
                Checklist (blog)
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-zinc-600">
            <h2 className="text-2xl font-bold text-zinc-900">Three rules that change outcomes</h2>
            <ol className="list-inside list-decimal space-y-3">
              <li>One place for business money in GHS—separate from personal spends where possible.</li>
              <li>Same day or same week entry—never “we will fix December in December.”</li>
              <li>Labels your accountant recognises—so tax conversations use your data, not guesses.</li>
            </ol>
            <p>
              Pair habits with the product hubs in the “next steps” list—add{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                expense tracking
              </Link>{" "}
              when outflows are the leak.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Start this Friday's 30-minute close in Finza—next month thanks you." className="bg-white py-10" />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Scenario</p>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Friday 4:30—close the week, not the year</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                You reconcile MoMo and bank hits, attach any new receipts, and confirm which invoices are still open. In thirty minutes the file reflects reality—so Monday starts clean and your accountant stops chasing “one more export.”
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza fits in practice</p>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-600">
                <li>Open last week’s sales and mark what cleared.</li>
                <li>Log expenses with labels your accountant already uses.</li>
                <li>Match personal-card spends you reimbursed—keep business GHS separate.</li>
                <li>Snapshot anything odd (refunds, reversals) in notes for review.</li>
              </ol>
            </div>
            <div className="border-t border-zinc-200 pt-8">
              <p className="text-sm font-semibold text-zinc-900">Next steps</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
                <li>
                  <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Bookkeeping software Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                    Accounting software Ghana
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
          { href: "/blog/bookkeeping-tips-small-businesses-ghana", label: "Bookkeeping tips", desc: "Blog" },
          { href: "/blog/accounting-mistakes-small-businesses-ghana", label: "Mistakes to avoid", desc: "Blog" },
        ]}
      />
      <Footer />
    </main>
  );
}
