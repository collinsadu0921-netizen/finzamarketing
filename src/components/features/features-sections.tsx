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
import { FeaturesInvoiceCollectExperience } from "@/components/features/features-invoice-collect";
import { FeaturesScreenshotDialog } from "@/components/features/features-screenshot-dialog";
import {
  homeHeroPrimaryBtn,
  homeHeroSecondaryBtn,
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import { getPlanSignupHref, PLANS_STARTING_PRICE_GHS, pricingPlansData } from "@/lib/pricing-plans";
import { cn } from "@/lib/utils";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);
const sectionPad = "py-12 md:py-16";
const scrollMt = "scroll-mt-28 md:scroll-mt-32";

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
  /** Focus the top of a tall screenshot for website presentation */
  cropTop?: boolean;
}) {
  return (
    <div
      className={cn(
        "features-shot-frame overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]",
        cropTop && "max-h-[min(52vh,420px)]",
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
        className={cn("block h-auto w-full", cropTop && "h-full max-h-[min(52vh,420px)] object-cover object-top")}
      />
    </div>
  );
}

const ANCHORS = [
  { href: "#win-work", label: "Win work" },
  { href: "#jobs-materials", label: "Jobs & materials" },
  { href: "#invoice-collect", label: "Invoice & collect" },
  { href: "#costs-payroll", label: "Costs & payroll" },
  { href: "#reports-controls", label: "Reports & controls" },
  { href: "#finza-assist", label: "Finza Assist" },
] as const;

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#FAFAF8] pt-12 pb-12 md:pt-16 md:pb-14">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg-light opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 features-hero-ambient" aria-hidden />
      <Container>
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="space-y-5 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Connected business operations
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl">
              From the first quote to clearer business records.
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-zinc-600 lg:mx-0">
              Finza connects proposals, jobs, materials, invoices, payments, expenses, payroll, and reports
              in one Ghana-ready Service workspace.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center lg:justify-start">
              <a href={starterSignupHref} className={homePrimaryBtn}>
                Start free trial
              </a>
              <Link href="/pricing#plans" className={homeSecondaryBtn}>
                Compare plans
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Plans from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month · 14-day free trial · No card
              required
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg pb-3 lg:max-w-none lg:pb-4">
            <div
              className="pointer-events-none absolute -left-6 top-8 h-28 w-28 rounded-full bg-sky-500/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/3 top-0 h-24 w-24 rounded-full bg-emerald-400/15 blur-2xl"
              aria-hidden
            />

            <div className="relative grid items-start gap-3 sm:grid-cols-[1.4fr_1fr] sm:gap-4">
              <div className="sm:row-span-2">
                <ShotFrame
                  src="/images/finza/finza-jobs-overview.webp"
                  alt="Finza jobs overview connecting customers, job status, and service delivery"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority
                  className="home-card-lift"
                />
              </div>
              <ShotFrame
                src="/images/finza/invoice-sample.png"
                alt="Sample Finza invoice showing totals and payment details in GHS"
                sizes="(max-width: 1024px) 44vw, 220px"
                priority
                className="home-card-lift"
              />
              <div className="features-hero-report home-card-lift overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]">
                <Image
                  src="/images/finza/reports-export.png"
                  alt="Finza reports screen showing business performance summaries"
                  width={2400}
                  height={1350}
                  sizes="(max-width: 1024px) 44vw, 220px"
                  loading="lazy"
                  className="block h-[7.5rem] w-full object-cover object-top sm:h-[8.25rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturesExploreNav() {
  return (
    <nav aria-label="Explore Finza" className="border-b border-zinc-200/80 bg-white">
      <Container>
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="shrink-0 text-xs font-bold uppercase tracking-widest text-zinc-500">Explore Finza</p>
          <div className="flex gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ANCHORS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors duration-150 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
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

export function FeaturesWinWorkSection() {
  const cards = [
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
    <section id="win-work" className={cn("border-b border-zinc-100 bg-white", sectionPad, scrollMt)}>
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <PlanBadge>Essentials</PlanBadge>
          <h2 className={sectionTitle}>Turn client requests into professional documents.</h2>
          <p className={cn(sectionLead, "mx-auto max-w-2xl")}>
            Build proposals, quotes, and proformas with clear scope, pricing, terms, and Ghana tax lines
            where applicable. Share supported documents by email, PDF, public link, or WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="home-card-lift rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50/80 p-5 text-left shadow-sm shadow-zinc-900/[0.04]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-white">
                <card.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-zinc-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturesJobsMaterialsSection() {
  return (
    <section
      id="jobs-materials"
      className={cn(
        "home-section-navy border-b border-zinc-200/70 pt-12 pb-10 md:pt-16 md:pb-12",
        scrollMt
      )}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-10">
          <div className="space-y-5">
            <PlanBadge tone="professional">Professional</PlanBadge>
            <h2 className={sectionTitle}>Keep jobs, materials, and customer work connected.</h2>
            <p className={sectionLead}>
              Organize service delivery, monitor job status, and track the materials your business purchases
              and uses.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-700">
              {[
                "Track job status and delivery dates",
                "Link customers and supported documents",
                "Review material usage and job costs",
                "Move supported completed work into invoicing",
                "Maintain stock quantities with cost and selling prices",
                "Add billable materials to invoices where supported",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-xl border border-sky-200/70 bg-white/80 px-3 py-2 text-xs font-semibold tracking-wide text-sky-900">
              Job → Allocate materials → Confirm usage → Invoice where supported
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="sm:col-span-2">
              <ShotFrame
                src="/images/finza/finza-jobs-overview.webp"
                alt="Finza jobs overview showing customer jobs, status, and linked work"
                sizes="(max-width: 1024px) 96vw, 55vw"
                className="home-card-lift"
              />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Jobs & projects</p>
            </div>
            <div>
              <ShotFrame
                src="/images/finza/finza-job-materials-workflow.webp"
                alt="Finza job materials workflow for allocating and confirming material usage"
                sizes="(max-width: 1024px) 96vw, 28vw"
                className="home-card-lift"
              />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Job materials</p>
            </div>
            <div>
              <ShotFrame
                src="/images/finza/finza-materials-inventory.webp"
                alt="Finza materials inventory showing stock quantities, costs, and material records"
                sizes="(max-width: 1024px) 96vw, 28vw"
                className="home-card-lift"
              />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Materials inventory</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturesInvoiceCollectSection() {
  return (
    <section
      id="invoice-collect"
      className={cn(
        "home-section-amber border-b border-zinc-200/70 pt-10 pb-12 md:pt-12 md:pb-16",
        scrollMt
      )}
    >
      <Container>
        <FeaturesInvoiceCollectExperience />
      </Container>
    </section>
  );
}

export function FeaturesCostsPayrollSection() {
  return (
    <section
      id="costs-payroll"
      className={cn("border-b border-zinc-100 bg-white", sectionPad, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className={sectionTitle}>Capture costs while the work is still fresh.</h2>
          <p className={cn(sectionLead, "mx-auto max-w-2xl")}>
            Keep expenses, supplier documents, receipts, payroll, and team access connected instead of
            rebuilding records at month-end.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
            <div className="space-y-3">
              <ShotFrame
                src="/images/finza/finza-incoming-documents.webp"
                alt="Finza incoming documents screen for uploading and reviewing business documents"
                sizes="(max-width: 1024px) 96vw, 55vw"
                className="home-card-lift"
              />
              <div className="max-w-md">
                <ShotFrame
                  src="/images/finza/expenses.png"
                  alt="Finza expenses screen showing business expense records"
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="home-card-lift"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">Documents and expenses</h3>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
                <PlanBadge>Essentials</PlanBadge>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Upload and review supported documents",
                    "Convert supported documents into expenses",
                    "Keep attachments connected to records",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4">
                <PlanBadge tone="professional">Professional</PlanBadge>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Track supplier bills",
                    "Convert supported supplier documents into supplier bills",
                    "Review obligations and supporting documents",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-8 border-t border-zinc-100 pt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <div className="space-y-4">
              <PlanBadge tone="professional">Professional</PlanBadge>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                Keep payroll and team access close to the records.
              </h3>
              <p className={sectionLead}>
                Manage salary workflows and control which team members can access sensitive business
                information.
              </p>
              <ul className="space-y-2.5 text-sm text-zinc-700">
                {[
                  "Prepare and review payroll records",
                  "Record salary advances",
                  "Add team members",
                  "Control access through roles and permissions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ShotFrame
                src="/images/finza/payroll.png"
                alt="Finza payroll screen showing salary and payroll records"
                sizes="(max-width: 1024px) 96vw, 55vw"
                className="home-card-lift"
                cropTop
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturesReportsControlsSection() {
  return (
    <section
      id="reports-controls"
      className={cn("home-section-emerald border-b border-zinc-200/70", sectionPad, scrollMt)}
    >
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <div className="space-y-3">
            <ShotFrame
              src="/images/finza/reports-export.png"
              alt="Finza reports screen focused on report headers, summaries, and major rows"
              sizes="(max-width: 1024px) 96vw, 55vw"
              className="home-card-lift"
              cropTop
            />
            <div className="flex justify-end">
              <FeaturesScreenshotDialog
                src="/images/finza/reports-export.png"
                alt="Finza reports and export screen for reviewing business performance"
                title="Reports and controls"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h2 className={sectionTitle}>See performance now, then add deeper control as you grow.</h2>
            <p className={sectionLead}>
              Start with core business reports and move into cash flow, compliance workflows, and ledger
              controls as your needs become more advanced.
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-sm shadow-zinc-900/[0.03]">
                <PlanBadge>Essentials</PlanBadge>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  VAT Report · Profit and Loss · Balance Sheet
                </p>
              </div>
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4">
                <PlanBadge tone="professional">Professional</PlanBadge>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  Cash Flow · Changes in Equity · Fixed Assets · WHT · VAT filings · Accounting audit log
                </p>
              </div>
              <div className="rounded-xl border border-fuchsia-200/80 bg-fuchsia-50/40 p-4">
                <PlanBadge tone="business">Business</PlanBadge>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  General Ledger · Journals · Accounting periods · Period locking · CIT · System audit log
                  · Advanced accounting controls
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-500">
          Tax treatment and filing obligations depend on your registration and GRA guidance.
        </p>
      </Container>
    </section>
  );
}

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
      className={cn("home-section-surface border-b border-zinc-200/70", sectionPad, scrollMt)}
    >
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <PlanBadge tone="neutral">Included with the Service workspace</PlanBadge>
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <h2 className={sectionTitle}>Ask questions about the records already in Finza.</h2>
          <p className={sectionLead}>
            Finza Assist helps you understand invoices, customers, payments, expenses, documents, and
            supported reports without changing records automatically.
          </p>
        </div>

        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
          {questions.map((q) => (
            <span
              key={q}
              className="rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm shadow-zinc-900/[0.03]"
            >
              “{q}”
            </span>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-zinc-500">
          Assist uses accessible workspace information. It does not post entries or replace professional
          tax, legal, or accounting advice.
        </p>
      </Container>
    </section>
  );
}

export function FeaturesFinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] py-14 text-center sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-2xl space-y-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See how Finza fits your service business.
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Start with a 14-day free trial or compare the three plans in Ghana cedis.
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
