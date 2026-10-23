import Link from "next/link";
import {
  Building2,
  Check,
  ChevronDown,
  Link2,
  LockKeyhole,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Container } from "@/components/container";
import { FeaturesInvoiceCollectExperience } from "@/components/features/features-invoice-collect";
import {
  PAYROLL_FEATURES_HEADING,
  PAYROLL_HOME_CAPABILITIES,
  PAYROLL_PAGE_PATH,
  PAYROLL_WORKFLOW_STEPS,
} from "@/lib/payroll-content";
import {
  homeHeroPrimaryBtn,
  homeHeroSecondaryBtn,
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import { getGuidedTrialHref } from "@/lib/trial-request";
import { cn } from "@/lib/utils";

const scrollMt = "scroll-mt-20 md:scroll-mt-24";
const SECTION_Y = "py-10 md:py-14";
const eyebrow = "text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500";

/* ── Shared primitives ─────────────────────────────────────────────── */

function SectionBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "blue" | "emerald" | "amber" | "dark";
}) {
  const tones = {
    neutral: "border-zinc-200 bg-zinc-100 text-zinc-800",
    blue: "border-sky-200 bg-sky-50 text-sky-900",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    dark: "border-white/15 bg-white/10 text-zinc-100",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

function PlanTag({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "blue" | "emerald" | "amber" | "dark";
}) {
  const tones = {
    neutral: "border-zinc-200 bg-white text-zinc-600",
    blue: "border-sky-200 bg-sky-50 text-sky-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    dark: "border-white/15 bg-white/5 text-zinc-300",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

function FeatureList({
  items,
  dark = false,
  checkClassName = "text-emerald-700",
  columns = 1,
}: {
  items: readonly string[];
  dark?: boolean;
  checkClassName?: string;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-6 gap-y-2 text-sm leading-relaxed",
        columns === 2 && "sm:grid-cols-2"
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0",
              dark ? "text-emerald-400" : checkClassName
            )}
            aria-hidden
          />
          <span className={dark ? "text-zinc-300" : "text-zinc-700"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ProductVideo({
  src,
  poster,
  label,
  caption,
  duration,
}: {
  src: string;
  poster: string;
  label: string;
  caption: string;
  duration: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[260px]">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
          Product video
        </span>
        <span className="text-[10px] font-semibold text-zinc-400">{duration}</span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-zinc-300/80 bg-zinc-950 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/5">
        <div className="aspect-[9/16]">
          <video
            src={src}
            poster={poster}
            width={720}
            height={1280}
            controls
            playsInline
            preload="none"
            aria-label={label}
            className="h-full w-full object-contain"
          >
            <p className="p-4 text-sm leading-relaxed text-zinc-300">
              Your browser does not support embedded video.{" "}
              <a href={src} className="underline underline-offset-2">
                Open the video
              </a>
              .
            </p>
          </video>
        </div>
      </div>
      <figcaption className="mt-2.5 text-xs leading-relaxed text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}

function StepList({
  steps,
  tone = "zinc",
}: {
  steps: readonly { title: string; body: string }[];
  tone?: "zinc" | "blue" | "amber" | "emerald";
}) {
  const dotTones = {
    zinc: "bg-zinc-400",
    blue: "bg-sky-600",
    amber: "bg-amber-600",
    emerald: "bg-emerald-600",
  };
  return (
    <ol className="divide-y divide-zinc-200 border-y border-zinc-200">
      {steps.map((step) => (
        <li key={step.title} className="grid gap-1.5 py-3 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
          <div className="flex items-center gap-2">
            <span
              className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dotTones[tone])}
              aria-hidden
            />
            <span className="text-sm font-bold text-zinc-900">{step.title}</span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

function StepGrid({
  steps,
}: {
  steps: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="grid grid-cols-2 gap-2">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-lg border border-sky-200/80 bg-white p-3"
        >
          <span className="font-mono text-[10px] font-semibold tracking-wider text-sky-700">
            0{index + 1}
          </span>
          <p className="mt-0.5 text-sm font-bold text-zinc-900">{step.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ── A. Hero ───────────────────────────────────────────────────────── */

const ANCHORS = [
  { href: "#overview", label: "Overview" },
  { href: "#sales", label: "Sales" },
  { href: "#payments", label: "Payments" },
  { href: "#expenses", label: "Expenses" },
  { href: "#accounting", label: "Reports" },
  { href: "#payroll", label: "Payroll" },
  { href: "#jobs", label: "Jobs" },
  { href: "#controls", label: "Controls" },
  { href: "#finza-assist", label: "Assist" },
] as const;

const heroModules = [
  { href: "#sales", label: "Sales & invoicing" },
  { href: "#payments", label: "Payments" },
  { href: "#expenses", label: "Expenses" },
  { href: "#payroll", label: "Payroll" },
  { href: "#jobs", label: "Jobs & materials" },
  { href: "#accounting", label: "Reports & controls" },
] as const;

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#F7F6F1]">
      <div
        className="pointer-events-none absolute inset-0 hero-grid-bg-light opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber-500/[0.07] blur-3xl"
        aria-hidden
      />
      <Container className="relative py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.35rem]">
            Run your business. See the numbers.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Quotes, invoices, payments, expenses, payroll, jobs, and reports
            connected in one Ghana cedi workspace — so you can see what was
            earned, what was spent, and what is still owed.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={getGuidedTrialHref("features")} className={homePrimaryBtn}>
              Request a guided trial
            </Link>
            <Link href="/product-tour" className={homeSecondaryBtn}>
              Explore the product tour
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Guided trial with the Finza team · GHS · Built for Ghana
          </p>
        </div>

        <nav
          aria-label="Feature areas"
          className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2"
        >
          {heroModules.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm shadow-zinc-900/[0.03] transition-colors duration-150 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}

/* ── Section nav ───────────────────────────────────────────────────── */

export function FeaturesExploreNav() {
  return (
    <nav
      aria-label="Explore Finza features"
      className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm"
    >
      <Container>
        <div className="flex items-center gap-3 py-2.5 sm:gap-4">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Explore
          </p>
          <div className="flex gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ANCHORS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md px-2.5 py-2 text-[13px] font-semibold text-zinc-600 transition-colors duration-150 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

/* ── B. Overview ───────────────────────────────────────────────────── */

const overviewPillars = [
  {
    title: "Sell and get paid",
    body: "Quotes, invoices, payments, receipts, and statements in GHS, with VAT, NHIL, GETFund, and WHT lines where they apply.",
  },
  {
    title: "Run the operation",
    body: "Expenses, supplier bills, payroll, jobs, materials, and inventory, including PAYE, SSNIT/Tier 1, and Tier 2.",
  },
  {
    title: "See and control",
    body: "Profit and loss, balance sheet, tax records, ledger controls, permissions, and audit trails.",
  },
] as const;

export function FeaturesOverview() {
  return (
    <section
      id="overview"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <div>
              <SectionBadge>Overview</SectionBadge>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                One place for the work and the numbers behind it.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 lg:justify-self-end">
              Finza connects customer work, money in, money out, payroll, and
              reporting. Start with the documents you send every week. Add the
              controls you need as the business grows.
            </p>
          </div>

          <div className="mt-7 grid gap-5 border-t border-zinc-200 pt-5 sm:grid-cols-3 sm:gap-6">
            {overviewPillars.map((pillar) => (
              <div key={pillar.title}>
                <p className="text-sm font-bold text-zinc-900">{pillar.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-5xl border-t border-zinc-200 pt-4 text-xs leading-relaxed text-zinc-500">
            <span className="font-semibold text-zinc-700">Available by plan:</span>{" "}
            Essentials covers sales, expenses, and core reports. Professional adds
            jobs, materials, supplier bills, payroll, and management reports.
            Business adds full ledger controls, reconciliation, periods, and CIT
            provisions.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ── C. Sales and invoicing ────────────────────────────────────────── */

export function FeaturesSalesSection() {
  return (
    <section
      id="sales"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <FeaturesInvoiceCollectExperience />
      </Container>
    </section>
  );
}

/* ── D. Payments and receivables ───────────────────────────────────── */

export function FeaturesPaymentsSection() {
  return (
    <section
      id="payments"
      className={cn(
        "home-section-amber border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-12">
            <div className="lg:col-start-1 lg:row-start-1">
              <SectionBadge tone="amber">Payments &amp; receivables</SectionBadge>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Know what has been paid — and what still needs follow-up.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
                Record payments against invoices, issue receipts, adjust with
                credit notes, and give each customer a statement that matches the
                ledger.
              </p>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <ProductVideo
                src="/videos/payment-recording.mp4"
                poster="/videos/payment-recording-poster.jpg"
                label="Finza product video: recording a customer payment"
                caption="Recording a Mobile Money payment. Finza updates the invoice balance and the customer statement."
                duration="0:12"
              />
            </div>

            <div className="space-y-4 lg:col-start-1 lg:row-start-2">
              <FeatureList
                checkClassName="text-amber-700"
                columns={2}
                items={[
                  "Full and partial payments against invoices",
                  "Receipts that stay connected to the invoice",
                  "Credit notes for returns and corrections",
                  "Customer statements with PDF download",
                  "Outstanding and overdue balances at a glance",
                  "Customer history from the customer 360 view",
                ]}
              />

              <div className="flex flex-wrap gap-2">
                <PlanTag tone="amber">Essentials</PlanTag>
                <PlanTag tone="amber">Customer statements</PlanTag>
              </div>

              <aside className="rounded-xl border border-amber-200/90 bg-white/75 p-3.5 shadow-sm shadow-amber-900/[0.03]">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-800">
                  Optional Hubtel checkout
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                  Connect your own Hubtel merchant account to accept Mobile Money
                  and other Hubtel checkout methods. Hubtel holds the collection;
                  approval and your own API credentials are required. Mobile Money
                  details can also be shown on an invoice and recorded manually.
                </p>
              </aside>

              <div className="hidden border-t border-amber-200/80 pt-3 lg:block">
                <p className={eyebrow}>In the video</p>
                <ol className="mt-2 grid gap-1 text-xs leading-relaxed text-zinc-600">
                  <li>1. A customer pays by Mobile Money.</li>
                  <li>2. The invoice balance and receipt update.</li>
                  <li>3. The customer statement reflects the payment.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── E. Expenses and suppliers ─────────────────────────────────────── */

const expenseSteps = [
  {
    title: "Capture",
    body: "Upload or email a receipt or supplier document.",
  },
  {
    title: "Review",
    body: "Check the extracted supplier, date, totals, and tax.",
  },
  {
    title: "Record",
    body: "Create the expense or supplier bill against the right record.",
  },
] as const;

export function FeaturesExpensesSection() {
  return (
    <section
      id="expenses"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <div className="space-y-4">
            <SectionBadge tone="blue">Expenses &amp; suppliers</SectionBadge>
            <h2 className={sectionTitle}>
              Turn the paper trail into records you can use.
            </h2>
            <p className={sectionLead}>
              Upload or email receipts and supplier documents, review the
              extracted details, and keep every expense and bill tied to the right
              supplier.
            </p>
            <FeatureList
              checkClassName="text-sky-700"
              columns={2}
              items={[
                "Upload or email receipts and supplier documents",
                "Review extracted supplier, date, totals, and tax details",
                "Create expenses and supplier bills",
                "Organize spend by category",
                "Export expense records to CSV or Excel",
                "Track supplier balances and statements",
              ]}
            />
            <div className="flex flex-wrap gap-2">
              <PlanTag tone="blue">
                Essentials · expenses &amp; incoming documents
              </PlanTag>
              <PlanTag tone="blue">
                Professional · supplier bills &amp; statements
              </PlanTag>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-5 shadow-sm shadow-sky-900/[0.03] sm:p-6">
            <p className={eyebrow}>Incoming documents</p>
            <h3 className="mt-1.5 text-lg font-bold tracking-tight text-zinc-900">
              From document to record
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
              Incoming documents reduce the re-keying between a receipt and the
              expense or supplier bill behind it.
            </p>
            <div className="mt-4">
              <StepList steps={expenseSteps} tone="blue" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              Review extracted details before posting. Supplier statements and
              supplier bills are available on Professional.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

/* ── F. Accounting and reports ─────────────────────────────────────── */

const accountingGroups = [
  {
    label: "Core reports",
    plan: "Essentials",
    items: "Profit and loss · Balance sheet · VAT report",
  },
  {
    label: "Management reporting",
    plan: "Professional",
    items:
      "Cash flow · Changes in equity · Fixed assets · VAT returns · WHT · Accounting audit log",
  },
  {
    label: "Ledger controls",
    plan: "Business",
    items:
      "General ledger · Journal entries · Chart of accounts · Trial balance · Reconciliation · Bank reconciliation · Periods · Loans and equity · Owner contributions · CIT provisions · Adjustments",
  },
] as const;

export function FeaturesAccountingSection() {
  return (
    <section
      id="accounting"
      className={cn(
        "relative overflow-hidden border-b border-zinc-800/10 bg-[#0B1220] text-white",
        SECTION_Y,
        scrollMt
      )}
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-12">
            <div>
              <SectionBadge tone="dark">Accounting &amp; reports</SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Know the numbers. Close with confidence.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 lg:justify-self-end">
              Review performance, prepare tax records, and move into ledger
              controls when the business needs them. Reports and exports stay tied
              to the same records.
            </p>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {accountingGroups.map((group) => (
              <div key={group.label} className="bg-[#0B1220] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                  {group.label}
                </p>
                <div className="mt-2">
                  <PlanTag tone="dark">{group.plan}</PlanTag>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {group.items}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-4xl text-xs leading-relaxed text-zinc-400">
            VAT returns, WHT, and CIT provisions are recorded in Finza. Direct GRA
            submission and payment are not part of the product. Reports can be
            exported for filing or review.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ── G. Payroll ────────────────────────────────────────────────────── */

const payrollItems = [
  ...PAYROLL_HOME_CAPABILITIES,
  "PAYE, pension, net-salary, and DT 107A exports.",
  "Payment batches and payroll journals connected to the books.",
  "Payslips by email, WhatsApp, print, or PDF.",
] as const;

export function FeaturesPayrollSection() {
  return (
    <section
      id="payroll"
      className={cn(
        "home-section-surface border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-12">
            <div className="lg:col-start-1 lg:row-start-1">
              <SectionBadge tone="emerald">Payroll</SectionBadge>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                {PAYROLL_FEATURES_HEADING}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
                Run monthly payroll inside Finza: Ghana PAYE and pension
                contributions, salary advances, employee payslips, and salary
                payment records.
              </p>
              <p className="mt-3 max-w-2xl rounded-lg border border-emerald-200/80 bg-white px-3.5 py-2.5 text-xs font-semibold leading-relaxed text-emerald-950">
                {PAYROLL_WORKFLOW_STEPS.join(" → ")}
              </p>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <ProductVideo
                src="/videos/payroll-dt107a.mp4"
                poster="/videos/payroll-dt107a-poster.jpg"
                label="Finza product video: running payroll and preparing DT 107A"
                caption="Payroll run and DT 107A preparation. Finza prepares records and exports for review; it does not file or pay GRA automatically."
                duration="0:16"
              />
            </div>

            <div className="space-y-4 lg:col-start-1 lg:row-start-2">
              <FeatureList
                checkClassName="text-emerald-700"
                columns={2}
                items={payrollItems}
              />

              <div className="flex flex-wrap gap-2">
                <PlanTag tone="emerald">Professional</PlanTag>
                <PlanTag tone="emerald">
                  Ghana PAYE · SSNIT/Tier 1 · Tier 2
                </PlanTag>
              </div>

              <Link
                href={PAYROLL_PAGE_PATH}
                className="inline-flex text-sm font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
              >
                Explore payroll software for Ghana
              </Link>

              <div className="hidden border-t border-emerald-200/80 pt-3 lg:block">
                <p className={eyebrow}>Run outputs</p>
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-zinc-600">
                  <span>Payslips</span>
                  <span>PAYE and pension records</span>
                  <span>Payment batches</span>
                  <span>DT 107A export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── H. Jobs, projects and materials ───────────────────────────────── */

const jobSteps = [
  {
    title: "Job",
    body: "Plan dates, customer, status, and linked documents.",
  },
  {
    title: "Materials",
    body: "Allocate materials; record usage, returns, and stock movement.",
  },
  {
    title: "Confirm",
    body: "Keep the material cost with the completed work.",
  },
  {
    title: "Invoice",
    body: "Move the job into invoicing without rebuilding it.",
  },
] as const;

export function FeaturesJobsSection() {
  return (
    <section
      id="jobs"
      className={cn("home-section-navy border-b border-zinc-200/70", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <div className="space-y-4">
            <SectionBadge tone="blue">Jobs, projects &amp; materials</SectionBadge>
            <h2 className={sectionTitle}>
              Deliver the job. Keep the materials and margin visible.
            </h2>
            <p className={sectionLead}>
              Plan jobs, track status and dates, allocate materials, and move
              completed work into invoicing without rebuilding the job.
            </p>
            <FeatureList
              checkClassName="text-sky-700"
              columns={2}
              items={[
                "Jobs with status, dates, customer, and linked documents",
                "Proforma and invoice links from the job",
                "Material allocation, usage, returns, and stock movements",
                "Unit costs, selling prices, reorder levels, and low-stock visibility",
                "Job material cost kept with the work",
                "Completed work moved into invoicing",
              ]}
            />
            <div className="flex flex-wrap gap-2">
              <PlanTag tone="blue">Professional</PlanTag>
              <PlanTag tone="blue">Materials inventory</PlanTag>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-200/80 bg-white/80 p-5 shadow-sm shadow-sky-900/[0.03] sm:p-6">
            <p className={eyebrow}>Job to invoice</p>
            <h3 className="mt-1.5 text-lg font-bold tracking-tight text-zinc-900">
              One thread through the work
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
              Keep the job, the materials behind it, and the final invoice
              connected.
            </p>
            <div className="mt-4">
              <StepGrid steps={jobSteps} />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              Inventory includes unit costs, selling prices, reorder levels, and
              low-stock visibility.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

/* ── I. Administration and security ────────────────────────────────── */

const controlRows = [
  {
    icon: Users,
    title: "Access",
    body: "Roles, per-member permissions, and scoped access for accountant collaboration.",
    plan: "Professional",
  },
  {
    icon: ScrollText,
    title: "Traceability",
    body: "Accounting activity log for ledger changes and a full system audit log.",
    plan: "Professional / Business",
  },
  {
    icon: LockKeyhole,
    title: "Periods",
    body: "Close, lock, and reopen accounting periods when the books are ready.",
    plan: "Business",
  },
  {
    icon: Link2,
    title: "Document sharing",
    body: "Tokenised public links for invoices, quotes, proformas, and receipts.",
    plan: "All plans",
  },
  {
    icon: Building2,
    title: "Business separation",
    body: "Separate records and workspace context for each business you manage.",
    plan: "All plans",
  },
  {
    icon: ShieldCheck,
    title: "Accountant access",
    body: "Invite your accountant and manage their requests without sharing a login.",
    plan: "Professional",
  },
] as const;

export function FeaturesControlsSection() {
  return (
    <section
      id="controls"
      className={cn("border-b border-zinc-200/70 bg-[#FAFAF8]", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-12">
            <div>
              <SectionBadge>Administration &amp; security</SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Give the right people access. Keep the trail.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 lg:justify-self-end">
              Control who can prepare, approve, view, and export. Keep periods and
              changes traceable as the team grows.
            </p>
          </div>

          <h3 className="sr-only">Control surface</h3>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 lg:grid-cols-3">
            {controlRows.map((row) => (
              <div key={row.title} className="bg-white p-3.5 sm:p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700">
                    <row.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-sm font-bold text-zinc-900">{row.title}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {row.body}
                </p>
                <div className="mt-3">
                  <PlanTag
                    tone={
                      row.plan === "Business"
                        ? "emerald"
                        : row.plan === "All plans"
                          ? "neutral"
                          : "blue"
                    }
                  >
                    {row.plan}
                  </PlanTag>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs leading-relaxed text-zinc-500">
              Business profile, branding, tax, and payment settings are included
              on Essentials.
            </p>
            <Link
              href="/security"
              className="inline-flex text-sm font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
            >
              Read about security and trust
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── J. Finza Assist ───────────────────────────────────────────────── */

const assistItems = [
  {
    question: "Which invoices are overdue?",
    answer:
      "Finza Assist can list open and overdue invoices, customer balances, and recent payments from the workspace you can access.",
  },
  {
    question: "What did we spend this month?",
    answer:
      "Ask for expenses by category, supplier, or period, and compare spend with revenue from the same records.",
  },
  {
    question: "How much did payroll cost?",
    answer:
      "Finza Assist can summarise payroll runs by month, including gross pay, net pay, PAYE, and pension totals.",
  },
  {
    question: "What changed in the profit and loss?",
    answer:
      "It can read the profit and loss and balance sheet for a period, then point to the lines behind the result.",
  },
  {
    question: "What is in this receipt?",
    answer:
      "Finza Assist can use the extracted details from a receipt in incoming documents, so you can review the supplier, date, totals, and tax before recording the expense.",
  },
] as const;

export function FeaturesAssistSection() {
  return (
    <section
      id="finza-assist"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-800/10 bg-[#0F172A] shadow-2xl shadow-slate-900/15">
          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-100">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                Finza Assist
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ask your records a direct question.
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">
                See what customers owe, what was spent, how payroll landed, or
                what changed in a report — without digging through screens.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Read-only. Finza Assist answers from records you can already
                access. It does not post entries or change transactions.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {assistItems.map((item) => (
                <details key={item.question} className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── K. Final CTA ──────────────────────────────────────────────────── */

export function FeaturesFinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] py-12 text-center sm:py-16">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-amber-500/15 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="relative mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Bring the work and the numbers together.
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Tell us how your business runs. The Finza team will scope a guided
            trial around the workflows you need.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
            <Link href={getGuidedTrialHref("features")} className={homeHeroPrimaryBtn}>
              Request a guided trial
            </Link>
            <Link href="/product-tour" className={homeHeroSecondaryBtn}>
              Explore the product tour
            </Link>
          </div>
          <p className="text-xs text-zinc-400">
            Guided trial with the Finza team · Product tour available now
          </p>
        </div>
      </Container>
    </section>
  );
}
