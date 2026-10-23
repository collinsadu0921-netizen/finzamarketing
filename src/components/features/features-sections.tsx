import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
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
import { MarketingReveal } from "@/components/motion/marketing-reveal";
import { FeaturesInvoiceCollectExperience } from "@/components/features/features-invoice-collect";
import { FeaturesScreenshotDialog } from "@/components/features/features-screenshot-dialog";
import { JobsMaterialsDemo } from "@/components/product-demo/jobs-materials-demo";
import { IncomingDocumentsPreview } from "@/components/product-demo/incoming-documents-preview";
import { CustomerStatementPreview } from "@/components/product-demo/customer-statement-preview";
import { PayrollPreview } from "@/components/product-demo/payroll-preview";
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
const SECTION_Y = "py-16 md:py-24";
const eyebrow = "text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500";

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
}: {
  items: readonly string[];
  dark?: boolean;
  checkClassName?: string;
}) {
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check
            className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-emerald-400" : checkClassName)}
            aria-hidden
          />
          <span className={dark ? "text-zinc-300" : "text-zinc-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ShotFrame({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-2xl shadow-zinc-900/[0.09] ring-1 ring-zinc-900/[0.03]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn("block h-auto w-full", imageClassName)}
      />
    </div>
  );
}

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

/* ── A. Hero ───────────────────────────────────────────────────────── */

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#F7F6F1]">
      <div
        className="pointer-events-none absolute inset-0 hero-grid-bg-light opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-amber-500/[0.07] blur-3xl"
        aria-hidden
      />
      <Container className="relative py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <div>
            <h1 className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.45rem]">
              Run your business. See the numbers.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
              Quotes, invoices, payments, expenses, payroll, jobs, and reports
              connected in one Ghana cedi workspace — so you can see what was
              earned, what was spent, and what is still owed.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
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

          <div className="relative min-w-0">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-white/55 blur-2xl"
              aria-hidden
            />
            <MarketingReveal variant="hero-settle" className="relative">
              <ShotFrame
                src="/images/finza/finza-dashboard-hero-2026-09.webp"
                alt="Finza business dashboard showing available cash, unpaid invoices, customer balances, bills, and profit performance"
                width={1024}
                height={649}
                sizes="(max-width: 1023px) 96vw, 54vw"
                priority
              />
            </MarketingReveal>
            <p className="relative mt-3 flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              Cash, receivables, payables, and profit in one view.
            </p>
          </div>
        </div>
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

const overviewRows = [
  {
    number: "01",
    title: "Sell and invoice",
    body: "Proposals, quotes, proformas, recurring invoices, and a reusable services catalogue.",
    href: "#sales",
  },
  {
    number: "02",
    title: "Get paid",
    body: "Full and partial payments, receipts, customer statements, credit notes, and optional Hubtel checkout.",
    href: "#payments",
  },
  {
    number: "03",
    title: "Control spend",
    body: "Expenses, incoming documents, supplier bills, and a supplier directory with statements.",
    href: "#expenses",
  },
  {
    number: "04",
    title: "Run payroll",
    body: "Ghana PAYE, SSNIT/Tier 1 and Tier 2, salary advances, approvals, payslips, and payment records.",
    href: "#payroll",
  },
  {
    number: "05",
    title: "Deliver and report",
    body: "Jobs, materials usage, profit and loss, balance sheet, tax records, and full ledger controls.",
    href: "#jobs",
  },
  {
    number: "06",
    title: "Keep control",
    body: "Staff permissions, audit trails, locked periods, and tokenised document links.",
    href: "#controls",
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
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
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

          <ol className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
            {overviewRows.map((row) => (
              <li key={row.number}>
                <a
                  href={row.href}
                  className="group grid gap-2 py-5 transition-colors duration-150 hover:bg-zinc-50/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5 sm:px-2"
                >
                  <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400">
                    {row.number}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-zinc-900">
                      {row.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-600">
                      {row.body}
                    </span>
                  </span>
                  <ArrowRight
                    className="mt-1 hidden h-4 w-4 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-zinc-700 sm:block"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-6 border-t border-zinc-200 pt-6 md:grid-cols-3">
            <div>
              <p className={eyebrow}>GHS first</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                Amounts, customer balances, and reports in Ghana cedis.
              </p>
            </div>
            <div>
              <p className={eyebrow}>Ghana tax lines</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                VAT, NHIL, GETFund, and withholding tax controls where they apply.
              </p>
            </div>
            <div>
              <p className={eyebrow}>Ghana payroll</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                PAYE, SSNIT/Tier 1, and Tier 2 pension breakdowns in each run.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-5xl text-xs leading-relaxed text-zinc-500">
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="order-2 min-w-0 space-y-4 lg:order-1">
            <MarketingReveal variant="scale-settle">
              <CustomerStatementPreview />
            </MarketingReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Customer statement
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/customer-statement.png"
                alt="Finza customer statement showing invoiced amounts, payments, credit notes, outstanding balance, and transaction history"
                title="Customer statement"
                width={1465}
                height={1325}
              />
            </div>

            <MarketingReveal variant="scale-settle">
              <ShotFrame
                src="/images/finza/receipt-payment.png"
                alt="Finza payment confirmation and receipt showing amount paid, method, invoice total, outstanding balance, and Ghana tax lines"
                width={1600}
                height={443}
                sizes="(max-width: 1023px) 96vw, 52vw"
              />
            </MarketingReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Payment confirmation and receipt
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/receipt-payment.png"
                alt="Finza payment confirmation and receipt showing amount paid, method, invoice total, outstanding balance, and Ghana tax lines"
                title="Payment and receipt"
                width={1600}
                height={443}
              />
            </div>
          </div>

          <div className="order-1 space-y-5 lg:order-2">
            <SectionBadge tone="amber">Payments &amp; receivables</SectionBadge>
            <h2 className={sectionTitle}>
              Know what has been paid — and what still needs follow-up.
            </h2>
            <p className={sectionLead}>
              Record payments against invoices, issue receipts, adjust with credit
              notes, and give each customer a statement that matches the ledger.
            </p>
            <FeatureList
              checkClassName="text-amber-700"
              items={[
                "Full and partial payments against invoices",
                "Receipts that stay connected to the invoice",
                "Credit notes for returns and corrections",
                "Customer statements with PDF download",
                "Outstanding and overdue balances at a glance",
                "Customer history from the customer 360 view",
              ]}
            />
            <aside className="rounded-xl border border-amber-200/90 bg-white/75 p-4 shadow-sm shadow-amber-900/[0.03]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
                Optional Hubtel checkout
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-relaxed text-zinc-900">
                Connect your own Hubtel merchant account to accept Mobile Money
                and other Hubtel checkout methods on invoices.
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                Customers pay on Hubtel; Finza records the confirmed payment.
                Hubtel holds the collection. Approval and your own API credentials
                are required. Mobile Money details can also be shown on an invoice
                and recorded manually.
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── E. Expenses and suppliers ─────────────────────────────────────── */

export function FeaturesExpensesSection() {
  return (
    <section
      id="expenses"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div className="space-y-5">
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
              items={[
                "Upload or email receipts and supplier documents",
                "Review extracted supplier, date, totals, and tax details",
                "Create expenses and supplier bills",
                "Organize spend by category",
                "Export expense records to CSV or Excel",
                "Track supplier balances and statements",
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              <PlanTag tone="blue">Essentials · expenses &amp; incoming documents</PlanTag>
              <PlanTag tone="blue">Professional · supplier bills &amp; statements</PlanTag>
            </div>
          </div>

          <div className="min-w-0 space-y-3">
            <MarketingReveal variant="clip-scale">
              <IncomingDocumentsPreview />
            </MarketingReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Incoming documents
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/finza-incoming-documents.png"
                alt="Finza incoming documents screen showing uploaded receipts and supplier documents with extraction and review status"
                title="Incoming documents"
                width={1672}
                height={941}
              />
            </div>
          </div>
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
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="order-2 min-w-0 space-y-3 lg:order-1">
            <MarketingReveal variant="clip-scale">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 shadow-2xl shadow-black/30">
                <div className="max-h-[600px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/finza/reports-export.png"
                    alt="Finza profit and loss report showing revenue, expenses, payroll costs, net profit, and CSV and PDF export actions"
                    width={1265}
                    height={2005}
                    sizes="(max-width: 1023px) 96vw, 54vw"
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </MarketingReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Profit and loss with CSV and PDF export
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/reports-export.png"
                alt="Finza profit and loss report showing revenue, expenses, payroll costs, net profit, and CSV and PDF export actions"
                title="Profit and loss"
                width={1265}
                height={2005}
              />
            </div>
          </div>

          <div className="order-1 space-y-5 lg:order-2">
            <SectionBadge tone="dark">Accounting &amp; reports</SectionBadge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Know the numbers. Close with confidence.
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              Review performance, prepare tax records, and move into ledger
              controls when the business needs them. Reports and exports stay tied
              to the same records.
            </p>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {accountingGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-2.5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                      {group.label}
                    </p>
                    <PlanTag tone="dark">{group.plan}</PlanTag>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {group.items}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs leading-relaxed text-zinc-400">
              VAT returns, WHT, and CIT provisions are recorded in Finza. Direct
              GRA submission and payment are not part of the product. Reports can
              be exported for filing or review.
            </p>
          </div>
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div className="space-y-5">
            <SectionBadge tone="emerald">Payroll</SectionBadge>
            <h2 className={sectionTitle}>{PAYROLL_FEATURES_HEADING}</h2>
            <p className={sectionLead}>
              Run monthly payroll inside Finza: Ghana PAYE and pension
              contributions, salary advances, employee payslips, and salary
              payment records.
            </p>
            <p className="rounded-lg border border-emerald-200/80 bg-white px-3.5 py-2.5 text-xs font-semibold leading-relaxed text-emerald-950">
              {PAYROLL_WORKFLOW_STEPS.join(" → ")}
            </p>
            <FeatureList
              checkClassName="text-emerald-700"
              items={payrollItems}
            />
            <div className="flex flex-wrap gap-2">
              <PlanTag tone="emerald">Professional</PlanTag>
              <PlanTag tone="emerald">Ghana PAYE · SSNIT/Tier 1 · Tier 2</PlanTag>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Salary payments, payroll obligations, and payment batches are tracked
              in Finza. Statutory exports are ready for review and filing.
            </p>
            <Link
              href={PAYROLL_PAGE_PATH}
              className="inline-flex text-sm font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
            >
              Explore payroll software for Ghana
            </Link>
          </div>

          <div className="min-w-0">
            <MarketingReveal variant="scale-settle">
              <PayrollPreview />
            </MarketingReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── H. Jobs, projects and materials ───────────────────────────────── */

export function FeaturesJobsSection() {
  return (
    <section
      id="jobs"
      className={cn("home-section-navy border-b border-zinc-200/70", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="order-2 min-w-0 space-y-3 lg:order-1">
            <MarketingReveal variant="clip-scale">
              <JobsMaterialsDemo />
            </MarketingReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Job materials and stock movement
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/finza-materials-inventory.png"
                alt="Finza materials inventory showing stock levels, costs, selling prices, and reorder information"
                title="Materials inventory"
                width={1602}
                height={982}
              />
            </div>
          </div>

          <div className="order-1 space-y-5 lg:order-2">
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
              items={[
                "Jobs with status, dates, customer, and linked documents",
                "Proforma and invoice links from the job",
                "Material allocation, usage, returns, and stock movements",
                "Unit costs, selling prices, reorder levels, and low-stock visibility",
                "Job material cost kept with the work",
                "Completed work moved into invoicing",
              ]}
            />
            <p className="rounded-lg border border-sky-200/80 bg-white/80 px-3.5 py-2.5 text-xs font-semibold text-sky-950">
              Job → Materials → Confirm → Invoice
            </p>
            <div className="flex flex-wrap gap-2">
              <PlanTag tone="blue">Professional</PlanTag>
              <PlanTag tone="blue">Materials inventory</PlanTag>
            </div>
          </div>
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div className="space-y-5">
            <SectionBadge>Administration &amp; security</SectionBadge>
            <h2 className={sectionTitle}>
              Give the right people access. Keep the trail.
            </h2>
            <p className={sectionLead}>
              Control who can prepare, approve, view, and export. Keep periods and
              changes traceable as the team grows.
            </p>
            <FeatureList
              items={[
                "Business profile, branding, tax, and payment settings",
                "Role-based staff permissions with per-member grants",
                "Accounting activity log and full system audit log",
                "Period close, lock, and reopen controls",
                "Tokenised links for customer documents",
                "Separate records for each business",
                "Scoped access for accountant collaboration",
              ]}
            />
            <Link
              href="/security"
              className="inline-flex text-sm font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
            >
              Read about security and trust
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.04]">
            <div className="border-b border-zinc-200 px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                Control surface
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                What you can govern
              </p>
            </div>
            <dl className="divide-y divide-zinc-200">
              {controlRows.map((row) => (
                <div
                  key={row.title}
                  className="grid gap-2 px-5 py-4 sm:grid-cols-[2.5rem_1fr_auto] sm:items-start sm:gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700">
                    <row.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-sm font-bold text-zinc-900">{row.title}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-zinc-600">
                      {row.body}
                    </dd>
                  </div>
                  <div className="justify-self-start">
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
            </dl>
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
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-zinc-800/10 bg-[#0F172A] shadow-2xl shadow-slate-900/15">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-100">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                Finza Assist
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
                <details key={item.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
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
    <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] pb-16 pt-28 text-center sm:pb-20 sm:pt-32">
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
