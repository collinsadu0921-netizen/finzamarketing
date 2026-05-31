import Link from "next/link";
import { Container } from "@/components/container";
import { ProductProofSection } from "@/components/product-proof-section";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";
import {
  homeCard,
  homeCardMuted,
  homeHeroPrimaryBtn,
  homeHeroSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import {
  ArrowRight,
  ArrowRightLeft,
  Calculator,
  FileCheck2,
  FileText,
  FolderOpen,
  Layers,
  Receipt,
  Shield,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

function MiniUiBar({ className }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className ?? ""}`}>
      <span className="h-1.5 w-8 rounded-full bg-zinc-200" />
      <span className="h-1.5 w-12 rounded-full bg-zinc-100" />
      <span className="h-1.5 w-6 rounded-full bg-zinc-100" />
    </div>
  );
}

export function HomeProblemSection() {
  const items = [
    {
      t: "Scattered client work",
      d: "Quotes and invoices split across apps and folders.",
      icon: FolderOpen,
      accent: "from-sky-500/10 to-sky-500/0 text-sky-600",
    },
    {
      t: "Unclear cash position",
      d: "Paid, partial, and overdue balances hard to see.",
      icon: Wallet,
      accent: "from-violet-500/10 to-violet-500/0 text-violet-600",
    },
    {
      t: "Late accounting prep",
      d: "Accountants rebuild the story from missing pieces.",
      icon: Layers,
      accent: "from-amber-500/10 to-amber-500/0 text-amber-600",
    },
  ];

  return (
    <section className="home-section-surface border-b border-zinc-200/80 py-16">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className={sectionTitle}>Your business should not run on scattered records</h2>
          <p className={sectionLead}>
            Proposals, invoices, and payments live in different places. Month-end becomes a search
            exercise. Finza keeps client work, payments, and reports in one finance workspace.
          </p>
          <div className="grid gap-4 text-left sm:grid-cols-3">
            {items.map((x) => (
              <div key={x.t} className={`${homeCard} p-5`}>
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${x.accent}`}
                >
                  <x.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-bold text-zinc-900">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeWorkflowSection() {
  const steps = [
    {
      t: "Quote or proforma",
      d: "Win the job with clear scope and pricing in GHS.",
      icon: FileText,
      chip: "QT-1042",
    },
    {
      t: "Invoice",
      d: "Send professional invoices with due dates and tax lines where applicable.",
      icon: FileCheck2,
      chip: "INV-425",
    },
    {
      t: "Receipt",
      d: "Record full or partial payments and issue proof when money lands.",
      icon: Receipt,
      chip: "RC-089",
    },
    {
      t: "Customer statement",
      d: "Show balances and history without rebuilding spreadsheets.",
      icon: Users,
      chip: "STMT",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-white py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(14_165_233/0.06),transparent)]" />
      <Container>
        <div className="relative mx-auto max-w-5xl space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center lg:text-left">
            <h2 className={sectionTitle}>Quote → invoice → receipt → statement</h2>
            <p className={sectionLead}>
              The client workflow service businesses already run — from first offer to payment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((x, i) => (
              <div key={x.t} className="relative flex flex-col">
                <div className={`${homeCardMuted} flex flex-1 flex-col p-5`}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F172A] text-white">
                      <x.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-zinc-500">
                      {x.chip}
                    </span>
                  </div>
                  <MiniUiBar className="mb-4" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 font-bold text-zinc-900">{x.t}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{x.d}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-zinc-300 lg:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const DOC_TILES = [
  { label: "Proposals and quotes", icon: FileText, tone: "border-sky-200/80 bg-sky-50/50" },
  { label: "Invoices and receipts", icon: Receipt, tone: "border-emerald-200/80 bg-emerald-50/50" },
  { label: "PDF and email sending", icon: ArrowRightLeft, tone: "border-violet-200/80 bg-violet-50/50" },
  { label: "Public and WhatsApp links", icon: Sparkles, tone: "border-teal-200/80 bg-teal-50/50" },
  { label: "Incoming document review", icon: FolderOpen, tone: "border-amber-200/80 bg-amber-50/50" },
  { label: "Customer statements", icon: Users, tone: "border-zinc-200/80 bg-zinc-50" },
];

const DOCUMENT_PREVIEW_TILES = [
  { label: "Invoice PDF", meta: "GHS total" },
  { label: "Quote", meta: "Scope + pricing" },
  { label: "Receipt", meta: "Payment proof" },
  { label: "Customer statement", meta: "Balance history" },
];

export function HomeDocumentsSection() {
  return (
    <section className="home-section-surface border-b border-zinc-200/80 py-16">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className={sectionTitle}>Documents and Ghana tax-ready records</h2>
            <p className={sectionLead}>
              Proposals, quotes, proformas, invoices, and receipts stay linked to the same customer.
              Upload supplier bills and incoming documents before they disappear into chats or email.
            </p>
            <p className="text-sm text-zinc-500">
              Where applicable, show VAT, NHIL, GETFund, and WHT clearly — confirm treatment with your
              accountant or GRA guidance.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/5 via-transparent to-emerald-500/5" />
            <div className="relative grid gap-2 sm:grid-cols-2">
              {DOC_TILES.map((item) => (
                <div
                  key={item.label}
                  className={`home-card-lift flex items-center gap-3 rounded-xl border px-3 py-3 ${item.tone}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <item.icon className="h-4 w-4 text-zinc-700" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-zinc-800">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-4 overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-zinc-900/5">
              <div className="flex items-center gap-2 border-b border-zinc-100 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium text-zinc-500">Document tiles</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-zinc-50/80 p-3">
                {DOCUMENT_PREVIEW_TILES.map((item) => (
                  <div key={item.label} className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span className="h-1.5 w-10 rounded-full bg-zinc-200" />
                    </div>
                    <p className="text-xs font-bold text-zinc-900">{item.label}</p>
                    <p className="mt-1 text-[10px] font-medium text-zinc-500">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeOperationsSection() {
  const items = [
    {
      t: "Expenses and bills",
      d: "Supplier obligations and costs tied to supporting documents.",
      icon: Wallet,
    },
    {
      t: "Payroll in GHS",
      d: "Salary runs and payslips with Ghana payroll lines where you configure them.",
      icon: Calculator,
    },
    {
      t: "Accountant-ready",
      d: "Reports, exports, audit logs, and period controls for serious review.",
      icon: Shield,
    },
  ];

  return (
    <section className="border-b border-zinc-100 bg-white py-16">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 text-center">
            <h2 className={sectionTitle}>Expenses, payroll, and accounting visibility</h2>
            <p className={sectionLead}>
              Track costs, run payroll, and keep reports closer to daily work — so month-end is review,
              not reconstruction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((x) => (
              <div key={x.t} className={`${homeCardMuted} p-5 text-center sm:text-left`}>
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A] text-white sm:mx-0">
                  <x.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-bold text-zinc-900">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center">
            <Link
              href="/accountants"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-white"
            >
              How Finza works with accountants
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export async function HomeProductProofSection() {
  return (
    <ProductProofSection
      assetIds={["dashboard", "customer-statement"]}
      eyebrow="Product view"
      heading="Your records should be visible before month end"
      lead="Finza brings invoices, payments, expenses, payroll, reports, and customer balances into one workspace, so owners can see what is happening before records reach the accountant."
      variant="default"
    />
  );
}

export function HomeAssistSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white py-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-2xl space-y-4 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-sky-500/15 text-indigo-600 ring-1 ring-indigo-500/20">
            <Sparkles className="h-6 w-6" aria-hidden />
          </span>
          <h2 className={sectionTitle}>Finza Assist</h2>
          <p className={sectionLead}>
            Ask questions about invoices, customers, expenses, and reports already in your workspace —
            faster answers without clicking through every screen.
          </p>
          <p className="text-sm text-zinc-500">
            Supports review and understanding; not a substitute for professional accounting or tax advice.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HomeTrustAndCtaSection() {
  return (
    <section className="home-section-surface border-b border-zinc-200/80 py-12">
      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <div
            className={`${homeCard} flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:p-7 sm:text-left`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700">
              <Shield className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-bold text-zinc-900">Built for cleaner business records</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                Workspaces, roles, audit logs, and period-locking for teams that need structure.
              </p>
            </div>
            <Link
              href="/security"
              className="shrink-0 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white"
            >
              Security & privacy
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] p-6 text-center shadow-xl shadow-slate-900/20 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
            <p className="relative text-sm font-medium text-zinc-200">
              Questions before you choose a plan? We&apos;ll show how Finza fits your business.
            </p>
            <div className="relative mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a href={starterSignupHref} className={homeHeroPrimaryBtn}>
                Start free trial
              </a>
              <Link href="/contact" className={homeHeroSecondaryBtn}>
                Book a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeSeoLinksSection() {
  return (
    <section className="border-b border-zinc-100 bg-white py-8">
      <Container>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Explore</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/accounting-software-ghana", label: "Accounting software Ghana" },
              { href: "/invoicing-software-ghana", label: "Invoicing software Ghana" },
              { href: "/bookkeeping-software-ghana", label: "Bookkeeping software Ghana" },
              { href: "/quotation-software-ghana", label: "Quotation software Ghana" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="home-card-lift rounded-lg border border-zinc-200/90 bg-zinc-50/80 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
