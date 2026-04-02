import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { MidPageCtaBand, WhyBusinessesTrustFinza } from "@/components/seo-marketing-blocks";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Expense Tracking Software in Ghana — Log Business Spending in GHS | Finza",
  description:
    "Capture receipts, supplier bills, and outflows in Ghana cedis before you forget. Stay week-current and hand your accountant a clean trail—start free, built for Ghana SMEs.",
  alternates: {
    canonical: "https://www.finza.africa/expense-tracking-software-ghana",
  },
};

export default function ExpenseTrackingSoftwareGhanaPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Expense tracking software Ghana", path: "/expense-tracking-software-ghana" },
        ])}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Expense tracking · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Expense tracking software in Ghana—know where your GHS went
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              If you only <strong className="text-zinc-900">track expenses</strong> at year-end, you are guessing margins all year. Finza helps Ghana businesses log spending as it happens in{" "}
              <strong className="text-zinc-900">Ghana cedis (GHS)</strong>, with categories your accountant recognizes—then rolls into full{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping
              </Link>{" "}
              and{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>{" "}
              views.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Why expense tracking deserves its own focus</h2>
            <p className="leading-relaxed text-zinc-600">
              Invoicing shows what you billed; expense tracking shows what left the business. Both belong in one system so profit is not a fantasy. When you are ready to{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                send invoices
              </Link>
              , the same workspace keeps collections and spending aligned.
            </p>
            <p className="text-sm text-zinc-500">
              Guides:{" "}
              <Link href="/blog/how-to-track-expenses-small-business-ghana" className="font-semibold text-zinc-900 underline">
                track expenses for small business
              </Link>
              ,{" "}
              <Link href="/blog/bookkeeping-checklist-ghana" className="font-semibold text-zinc-900 underline">
                bookkeeping checklist
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Log this week's spending once—stop rebuilding it in December." className="bg-white py-10" />

      <WhyBusinessesTrustFinza className="bg-zinc-50" />

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">Keep exploring</p>
            <p className="mt-2 leading-relaxed">
              <Link href="/blog" className="font-semibold text-zinc-900 underline">
                Finza blog
              </Link>{" "}
              (bookkeeping & tax clusters) ·{" "}
              <Link href="/vat-software-ghana" className="font-semibold text-zinc-900 underline">
                VAT software Ghana
              </Link>{" "}
              ·{" "}
              <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                Invoice tracking
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
              className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
            >
              Try Finza free
            </a>
            <Link href="/demo" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
              See how it works
            </Link>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping Ghana", desc: "Weekly habit layer" },
          { href: "/accounting-software-ghana", label: "Accounting Ghana", desc: "Reports & summaries" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
        ]}
      />
      <Footer />
    </main>
  );
}
