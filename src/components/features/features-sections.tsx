import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  FileText,
  FolderOpen,
  Quote,
  ScrollText,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/container";
import { MarketingReveal } from "@/components/motion/marketing-reveal";
import { FeaturesInvoiceCollectExperience } from "@/components/features/features-invoice-collect";
import { FeaturesScreenshotDialog } from "@/components/features/features-screenshot-dialog";
import { JobsMaterialsDemo } from "@/components/product-demo/jobs-materials-demo";
import { IncomingDocumentsPreview } from "@/components/product-demo/incoming-documents-preview";
import { CustomerStatementPreview } from "@/components/product-demo/customer-statement-preview";
import {
  homeHeroPrimaryBtn,
  homeHeroSecondaryBtn,
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import {
  getPlanSignupHref,
  PLANS_STARTING_PRICE_GHS,
  pricingPlansData,
} from "@/lib/pricing-plans";
import { cn } from "@/lib/utils";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);
const scrollMt = "scroll-mt-28 md:scroll-mt-32";

/* ── Shared primitives ─────────────────────────────────────────────── */

const SECTION_Y = "py-14 md:py-16";

function PlanBadge({
  children,
  tone = "essentials",
}: {
  children: React.ReactNode;
  tone?: "essentials" | "professional" | "business" | "neutral";
}) {
  const tones = {
    essentials: "border-zinc-200 bg-zinc-100 text-zinc-800",
    professional: "border-blue-200 bg-blue-50 text-blue-800",
    business: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900",
    neutral: "border-emerald-200 bg-emerald-50 text-emerald-900",
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

function ShotFrame({
  src,
  alt,
  sizes,
  priority,
  className,
  cropTop,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  cropTop?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]",
        cropTop && "max-h-[min(48vh,380px)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1350}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className={cn(
          "block h-auto w-full",
          cropTop && "h-full max-h-[min(48vh,380px)] object-cover object-top"
        )}
      />
    </div>
  );
}

const ANCHORS = [
  { href: "#win-work", label: "Win work" },
  { href: "#jobs-materials", label: "Jobs & materials" },
  { href: "#invoice-collect", label: "Invoice & collect" },
  { href: "#documents-costs", label: "Documents & costs" },
  { href: "#payroll-team", label: "Payroll & team" },
  { href: "#reports-controls", label: "Reports" },
  { href: "#finza-assist", label: "Assist" },
] as const;

/* ── A. Compact introduction ───────────────────────────────────────── */

export function FeaturesHero() {
  return (
    <section className="relative border-b border-zinc-200/80 bg-[#FAFAF8] pt-10 pb-8 md:pt-12 md:pb-10">
      <div
        className="pointer-events-none absolute inset-0 hero-grid-bg-light opacity-60"
        aria-hidden
      />
      <Container>
        <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Features
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.75rem]">
            From the first quote to clearer business records.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600">
            Finza connects proposals, jobs, materials, invoices, payments,
            expenses, incoming documents, payroll, and reports in one
            Ghana-ready Service workspace.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
            <a href={starterSignupHref} className={homePrimaryBtn}>
              Start free trial
            </a>
            <Link href="/pricing#plans" className={homeSecondaryBtn}>
              Compare plans
            </Link>
          </div>
          <p className="text-sm text-zinc-500">
            Plans from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month ·
            14-day trial · No card required
          </p>
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
      className="sticky top-[var(--navbar-h,64px)] z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm"
    >
      <Container>
        <div className="flex items-center gap-3 py-2.5 sm:gap-4">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Explore
          </p>
          <div className="flex gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ANCHORS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md px-2.5 py-1.5 text-[13px] font-semibold text-zinc-600 transition-colors duration-150 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
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

/* ── B. Win work — Proposals, Quotes, Proformas ────────────────────── */

export function FeaturesWinWorkSection() {
  const docs = [
    {
      title: "Proposal",
      icon: FileText,
      body: "Structure scope, pricing, and terms so clients can approve the work before it starts.",
    },
    {
      title: "Quote",
      icon: Quote,
      body: "Send clear pricing before work is approved, with Ghana tax lines where applicable.",
    },
    {
      title: "Proforma",
      icon: ScrollText,
      body: "Issue a formal payment request when you need a document before the final invoice.",
    },
  ] as const;

  return (
    <section
      id="win-work"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* Invoice sample — one dominant readable preview */}
          <MarketingReveal variant="scale-settle">
            <ShotFrame
              src="/images/finza/invoice-sample.png"
              alt="Sample Finza invoice showing totals and payment details in GHS"
              sizes="(max-width: 1024px) 96vw, 55vw"
              cropTop
              priority
            />
          </MarketingReveal>

          <div className="space-y-5">
            <PlanBadge>Essentials</PlanBadge>
            <h2 className={sectionTitle}>
              Turn client requests into professional documents.
            </h2>
            <p className={sectionLead}>
              Build proposals, quotes, and proformas with clear scope, pricing,
              terms, and Ghana tax lines. Share by email, PDF, public link, or
              WhatsApp.
            </p>

            <div className="space-y-3">
              {docs.map((d) => (
                <div
                  key={d.title}
                  className="flex items-start gap-3 rounded-lg border border-zinc-100 bg-zinc-50/60 px-3.5 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F172A] text-white">
                    <d.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900">{d.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-zinc-600">
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── C. Jobs & Materials — animated demo ───────────────────────────── */

export function FeaturesJobsMaterialsSection() {
  return (
    <section
      id="jobs-materials"
      className={cn(
        "home-section-navy border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
          <div className="space-y-5">
            <PlanBadge tone="professional">Professional</PlanBadge>
            <h2 className={sectionTitle}>
              Deliver jobs and manage materials.
            </h2>
            <p className={sectionLead}>
              Organize service delivery, track material usage, and keep
              customer work connected to invoicing.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              {[
                "Track job status, dates, and linked documents",
                "Allocate materials and confirm usage on jobs",
                "Move completed work into invoicing",
                "Maintain stock with cost and selling prices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ClipboardList
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-700"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-lg border border-sky-200/70 bg-white/80 px-3 py-2 text-xs font-semibold text-sky-900">
              Job → Allocate materials → Confirm → Invoice
            </p>
          </div>

          <div className="relative min-w-0 w-full">
            <div
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-sky-500/5 blur-xl"
              aria-hidden
            />
            <MarketingReveal variant="clip-scale" className="relative">
              <JobsMaterialsDemo />
            </MarketingReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── D. Invoice & Collect — tabs ───────────────────────────────────── */

export function FeaturesInvoiceCollectSection() {
  return (
    <section
      id="invoice-collect"
      className={cn(
        "home-section-amber border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <FeaturesInvoiceCollectExperience />
      </Container>
    </section>
  );
}

/* ── E. Documents & costs ──────────────────────────────────────────── */

export function FeaturesDocumentsCostsSection() {
  return (
    <section
      id="documents-costs"
      className={cn("border-b border-zinc-100 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          {/* Dominant preview */}
          <MarketingReveal variant="clip-scale">
            <IncomingDocumentsPreview />
          </MarketingReveal>

          <div className="space-y-5">
            <h2 className={sectionTitle}>
              Capture documents and manage costs.
            </h2>
            <p className={sectionLead}>
              Upload receipts and supplier documents, review extracted details,
              and turn supported documents into organized records.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-3.5">
                <PlanBadge>Essentials</PlanBadge>
                <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                    <span>Upload and review documents with extracted details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                    <span>Convert supported documents into expenses</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200/80 bg-blue-50/50 p-3.5">
                <PlanBadge tone="professional">Professional</PlanBadge>
                <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden />
                    <span>Track supplier bills and obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden />
                    <span>Convert supplier documents into bills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── F. Payroll & team ─────────────────────────────────────────────── */

export function FeaturesPayrollTeamSection() {
  return (
    <section
      id="payroll-team"
      className={cn(
        "home-section-surface border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          <div className="space-y-4">
            <PlanBadge tone="professional">Professional</PlanBadge>
            <h2 className={sectionTitle}>
              Payroll and team access.
            </h2>
            <p className={sectionLead}>
              Manage salary workflows and control which team members can
              access business information.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              {[
                "Prepare and review payroll records",
                "Record salary advances",
                "Add team members with controlled roles",
                "Manage permissions for sensitive records",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ShotFrame
            src="/images/finza/payroll.png"
            alt="Finza payroll screen showing salary and payroll records"
            sizes="(max-width: 1024px) 96vw, 55vw"
            cropTop
          />
        </div>
      </Container>
    </section>
  );
}

/* ── G. Reports & controls ─────────────────────────────────────────── */

export function FeaturesReportsControlsSection() {
  return (
    <section
      id="reports-controls"
      className={cn(
        "home-section-emerald border-b border-zinc-200/70",
        SECTION_Y,
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          {/* Dominant preview — Customer Statement */}
          <div className="space-y-3">
            <MarketingReveal variant="scale-settle">
              <CustomerStatementPreview />
            </MarketingReveal>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Customer statement
              </p>
              <FeaturesScreenshotDialog
                src="/images/finza/reports-export.png"
                alt="Finza reports and export screen for reviewing business performance"
                title="Reports and controls"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h2 className={sectionTitle}>
              Understand performance, then add deeper control.
            </h2>
            <p className={sectionLead}>
              Start with core reports and move into cash flow, compliance, and
              ledger controls as needs grow.
            </p>

            <div className="space-y-2.5">
              <div className="rounded-lg border border-zinc-200 bg-white/90 p-3.5 shadow-sm shadow-zinc-900/[0.03]">
                <PlanBadge>Essentials</PlanBadge>
                <p className="mt-2 text-sm text-zinc-700">
                  VAT Report · Profit and Loss · Balance Sheet
                </p>
              </div>
              <div className="rounded-lg border border-blue-200/80 bg-blue-50/50 p-3.5">
                <PlanBadge tone="professional">Professional</PlanBadge>
                <p className="mt-2 text-sm text-zinc-700">
                  Cash Flow · Changes in Equity · Fixed Assets · WHT · VAT
                  filings · Audit log
                </p>
              </div>
              <div className="rounded-lg border border-fuchsia-200/80 bg-fuchsia-50/40 p-3.5">
                <PlanBadge tone="business">Business</PlanBadge>
                <p className="mt-2 text-sm text-zinc-700">
                  General Ledger · Journals · Period locking · CIT · System
                  audit log · Advanced controls
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-zinc-500">
          Tax treatment and filing obligations depend on your registration and
          GRA guidance.
        </p>
      </Container>
    </section>
  );
}

/* ── H. Finza Assist ───────────────────────────────────────────────── */

export function FeaturesAssistSection() {
  const questions = [
    "Which invoices are overdue?",
    "What did the business spend this period?",
    "Which customers still have balances?",
    "What changed in the available reports?",
  ];

  return (
    <section
      id="finza-assist"
      className={cn("border-b border-zinc-200/70 bg-white", SECTION_Y, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <PlanBadge tone="neutral">Included with the Service workspace</PlanBadge>
          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-white">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <h2 className={sectionTitle}>
            Ask about the records already in Finza.
          </h2>
          <p className={sectionLead}>
            Finza Assist helps you understand invoices, customers, payments,
            expenses, and reports without changing records automatically.
          </p>
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
          {questions.map((q) => (
            <span
              key={q}
              className="rounded-full border border-zinc-200/90 bg-zinc-50 px-3.5 py-1.5 text-sm font-medium text-zinc-700"
            >
              &ldquo;{q}&rdquo;
            </span>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-zinc-500">
          Assist uses accessible workspace information. It does not post entries
          or replace professional tax, legal, or accounting advice.
        </p>
      </Container>
    </section>
  );
}

/* ── I. Final CTA ──────────────────────────────────────────────────── */

export function FeaturesFinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] py-12 text-center sm:py-14">
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-amber-500/15 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-2xl space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            See how Finza fits your service business.
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Start with a 14-day free trial or compare the three plans in Ghana
            cedis.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
            <a href={starterSignupHref} className={homeHeroPrimaryBtn}>
              Start free trial
            </a>
            <Link href="/pricing#plans" className={homeHeroSecondaryBtn}>
              Compare plans
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
