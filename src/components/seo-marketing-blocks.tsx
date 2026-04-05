import Link from "next/link";
import { Container } from "@/components/container";

const whyPoints = [
  "Built for Ghana—not adapted later",
  "Clear tax line handling (VAT, NHIL, GETFund where applicable)",
  "Designed for service businesses and accountants",
  "Finza Assist—in-app copilot for Ghana VAT, WHT, PAYE & books; read-only data, server-verified numbers, no auto-posting",
  "Simple to use without accounting knowledge",
];

const whoItems = [
  { title: "Freelancers", desc: "Simple invoicing, payment tracking, and tax-ready lines without a finance department." },
  { title: "Small teams", desc: "Shared visibility on quotes, bills, and who has paid—designed for real workflows in Ghana." },
  { title: "Growing service companies", desc: "More clients and retainers without losing control of receivables in GHS." },
  { title: "Cleaning businesses", desc: "Recurring jobs, quotes, and steady invoicing in GHS." },
  { title: "Consultants & agencies", desc: "Proposals, milestones, and collections without a second spreadsheet." },
  { title: "Logistics & transport", desc: "Runs, fees, and customer balances in one place." },
  { title: "Clinics & service providers", desc: "Professional billing and records your accountant can review." },
];

const dayToDayPoints = [
  "Send invoices and track payments in one place",
  "See what your business actually earned in GHS",
  "Stay ready for tax conversations without last-minute fixes",
  "Work with your accountant without rebuilding records",
];

const trustPoints = [
  "Built specifically for Ghana",
  "Designed for real workflows—not adapted generic software",
  "Clear tax structure handling (VAT, NHIL, GETFund where applicable)",
  "Simple interface you can use without accounting training",
];

/** Mid-scroll CTA — pair with hero + footer CTAs for conversion coverage. */
export function MidPageCtaBand({
  title,
  subtitle = "Free trial · No card to start · Plans in Ghana cedis",
  className = "bg-zinc-100 py-12",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={`border-b border-zinc-100 ${className}`}>
      <Container>
        <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#0F172A] px-6 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-10">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-zinc-400">{subtitle}</p>
            <p className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">{title}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-shrink-0 sm:flex-row">
            <a
              href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
              className="rounded-md bg-white px-6 py-3 text-center text-sm font-bold text-zinc-900 shadow-sm hover:bg-zinc-100"
            >
              Try Finza free
            </a>
            <Link
              href="/pricing"
              className="rounded-md border border-zinc-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              View pricing in GHS
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Proof / trust layer — distinct from “Why choose Finza”. */
export function WhyBusinessesTrustFinza({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-14 md:py-16 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Why businesses trust Finza</h2>
          <p className="mt-3 text-sm text-zinc-500">Used by businesses across Ghana. Built for the Ghana market.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((line) => (
              <li key={line} className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 text-sm leading-relaxed text-zinc-600">
                <span className="font-bold text-[#0F172A]">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-zinc-600 sm:text-left">
            Read guides on the{" "}
            <Link href="/blog" className="font-semibold text-zinc-900 underline underline-offset-2">
              Finza blog
            </Link>{" "}
            or compare{" "}
            <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              accounting options for Ghana
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Conversion block — use on core marketing pages (mobile-friendly stack). */
export function WhyBusinessesChooseFinza({ className = "bg-zinc-50" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-16 md:py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Why businesses choose Finza</h2>
          <ul className="mt-8 space-y-4 text-zinc-600">
            {whyPoints.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-xs font-bold text-white">
                  ✓
                </span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-zinc-500">
            Explore{" "}
            <Link href="/features" className="font-semibold text-zinc-900 underline underline-offset-2">
              features
            </Link>
            , compare{" "}
            <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
              pricing in GHS
            </Link>
            , or read{" "}
            <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              accounting software for Ghana
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Use-case grid — homepage & accounting hub (and optional elsewhere). */
export function WhoUsesFinza({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-16 md:py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Who uses Finza</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-500">
            Used by businesses across Ghana—from solo operators to growing SMEs. Built for the Ghana market.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-5 md:p-6">
                <p className="font-bold text-zinc-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-600">
            Need to{" "}
            <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              track unpaid invoices
            </Link>{" "}
            or see{" "}
            <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              how Finza compares
            </Link>
            ? Start there—then view{" "}
            <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
              plans
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Day-to-day outcomes — after main content, before final CTA (distinct from “Why choose Finza”). */
export function HowFinzaHelpsDayToDay({
  className = "bg-zinc-50",
  showClusterHint = true,
}: {
  className?: string;
  showClusterHint?: boolean;
}) {
  return (
    <section className={`border-b border-zinc-100 py-16 md:py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">How Finza helps you day to day</h2>
          <ul className="mt-8 space-y-4 text-zinc-600">
            {dayToDayPoints.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-xs font-bold text-zinc-800">
                  →
                </span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          {showClusterHint ? (
            <p className="mt-8 text-sm leading-relaxed text-zinc-500">
              Explore{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              ,{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing software in Ghana
              </Link>
              , and{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing in GHS
              </Link>
              . Looking for{" "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                bookkeeping
              </Link>{" "}
              or{" "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                quotations before you bill
              </Link>
              ? Finza connects those flows.
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** SERP capture: interlink main hub, comparison, competitor angles, and cluster blogs. */
export function AccountingSerpClusterStrip({ className = "bg-zinc-50" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-10 ${className}`}>
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Accounting cluster — more angles</p>
        <p className="mt-2 text-sm text-zinc-600">
          If you do not know your real profit after tax lines and expenses, read across these pages—each answers a different search, same Finza stack in GHS.
        </p>
        <ul className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <li>
            <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Best accounting software Ghana (2026 comparison)
            </Link>
          </li>
          <li>
            <Link href="/quickbooks-alternative-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              QuickBooks alternative Ghana
            </Link>
          </li>
          <li>
            <Link href="/sage-accounting-alternative-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Sage accounting alternative Ghana
            </Link>
          </li>
          <li>
            <Link href="/blog/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: choose without hype
            </Link>
          </li>
          <li>
            <Link href="/blog/accounting-mistakes-small-businesses-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: accounting mistakes
            </Link>
          </li>
          <li>
            <Link href="/blog/bookkeeping-checklist-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: bookkeeping checklist
            </Link>
          </li>
          <li>
            <Link href="/blog/bookkeeping-issues-smes-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: SME bookkeeping issues
            </Link>
          </li>
          <li>
            <Link href="/bookkeeping-for-small-business-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Bookkeeping for small business (habit page)
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export function InvoicingSerpClusterStrip({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-10 ${className}`}>
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Invoicing cluster — more angles</p>
        <p className="mt-2 text-sm text-zinc-600">
          If you are still using Excel for invoices, these pages cover billing, tracking, and templates—then connect to full books.
        </p>
        <ul className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <li>
            <Link href="/invoice-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Invoice tracking in GHS
            </Link>
          </li>
          <li>
            <Link href="/invoice-software-for-contractors-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Invoice software for contractors
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-create-invoice-in-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: create an invoice in Ghana
            </Link>
          </li>
          <li>
            <Link href="/blog/invoice-template-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: invoice template Ghana
            </Link>
          </li>
          <li>
            <Link href="/blog/invoice-errors-service-businesses-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: invoice errors (services)
            </Link>
          </li>
          <li>
            <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Quotations before you bill
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export function VatSerpClusterStrip({ className = "bg-zinc-50" }: { className?: string }) {
  return (
    <section className={`border-b border-zinc-100 py-10 ${className}`}>
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">VAT &amp; levies cluster</p>
        <p className="mt-2 text-sm text-zinc-600">
          Same topic, different queries—VAT explained, NHIL &amp; GETFund, and registration timing for Ghana.
        </p>
        <ul className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <li>
            <Link href="/blog/vat-nhil-getfund-explained-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: VAT explained (Ghana)
            </Link>
          </li>
          <li>
            <Link href="/blog/nhil-and-getfund-explained-simply" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: NHIL &amp; GETFund simply
            </Link>
          </li>
          <li>
            <Link href="/blog/when-to-register-for-vat-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: when to register for VAT
            </Link>
          </li>
          <li>
            <Link href="/blog/vat-mistakes-ghana-businesses-avoid" className="font-semibold text-zinc-900 underline underline-offset-2">
              Blog: VAT mistakes to avoid
            </Link>
          </li>
          <li>
            <Link href="/ghana-vat-nhil-getfund" className="font-semibold text-zinc-900 underline underline-offset-2">
              Long guide: VAT, NHIL, GETFund
            </Link>
          </li>
          <li>
            <Link href="/how-vat-works-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
              How VAT works in Ghana
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
