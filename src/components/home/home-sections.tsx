import Link from "next/link";
import {
  BarChart3,
  ClipboardList,
  FileCheck2,
  FileText,
  FolderOpen,
  Receipt,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/container";
import { MarketingScreenshot } from "@/components/site/marketing-screenshot";
import {
  homeCardMuted,
  homeHeroPrimaryBtn,
  homeHeroSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

const sectionPad = "py-12 md:py-16";

const WORKFLOW_STEPS = [
  {
    t: "Quote",
    d: "Scope and price the work in GHS.",
    icon: FileText,
    accent: "bg-sky-600",
    line: "from-sky-400 to-blue-400",
  },
  {
    t: "Job",
    d: "Organize delivery and material usage.",
    icon: ClipboardList,
    accent: "bg-blue-700",
    line: "from-blue-400 to-emerald-400",
  },
  {
    t: "Invoice",
    d: "Bill with clear totals and tax lines where applicable.",
    icon: FileCheck2,
    accent: "bg-[#0F172A]",
    line: "from-emerald-400 to-amber-400",
  },
  {
    t: "Payment",
    d: "Record payments and keep balances current.",
    icon: Receipt,
    accent: "bg-emerald-700",
    line: "from-amber-400 to-amber-500",
  },
  {
    t: "Reports",
    d: "Review profit and records in one place.",
    icon: BarChart3,
    accent: "bg-amber-700",
    line: "",
  },
] as const;

/** Section 2 — Connected workflow */
export function HomeWorkflowSection() {
  return (
    <section className={`border-b border-zinc-100 bg-white ${sectionPad}`}>
      <Container>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className={sectionTitle}>One connected workflow</h2>
          <p className={sectionLead}>
            Quotes, jobs, invoices, payments, and reports stay linked inside Finza — so month-end is
            review, not reconstruction.
          </p>
        </div>

        <ol className="workflow-progress mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
          {WORKFLOW_STEPS.map((step, index) => (
            <li
              key={step.t}
              className="relative flex flex-col items-center text-center lg:items-stretch lg:text-left"
            >
              {index < WORKFLOW_STEPS.length - 1 ? (
                <span
                  className={`pointer-events-none absolute left-[calc(50%+1.75rem)] top-5 hidden h-0.5 w-[calc(100%-1rem)] bg-gradient-to-r ${step.line} opacity-80 lg:block`}
                  aria-hidden
                />
              ) : null}
              <span
                className={`relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm ${step.accent} lg:mx-0`}
              >
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="mt-3 text-sm font-bold text-zinc-900">
                <span className="mr-1.5 text-zinc-400">{index + 1}.</span>
                {step.t}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{step.d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Section 3 — Jobs and Materials */
export function HomeJobsMaterialsSection() {
  return (
    <section className={`home-section-navy border-b border-zinc-200/70 ${sectionPad}`}>
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div className="space-y-5">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-blue-200/90 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
                Professional
              </span>
              <h2 className={sectionTitle}>Manage jobs and materials in one place</h2>
              <p className={sectionLead}>
                Plan customer work, track material usage, and keep delivery connected to invoicing.
              </p>
            </div>
            <ul className="space-y-2.5 text-sm text-zinc-700">
              {[
                "Organize customer jobs and projects",
                "Track status, dates and linked work",
                "Allocate and confirm material usage",
                "Move supported completed work into invoicing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-sky-500/5 blur-xl" aria-hidden />
            <MarketingScreenshot
              src="/images/finza/finza-job-materials-workflow.webp"
              alt="Finza job materials workflow showing material usage linked to a customer job"
              width={2400}
              height={1350}
              sizes="(max-width: 1024px) 96vw, 60vw"
              className="marketing-shot-enter relative"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Section 4 — Documents and costs */
export function HomeDocumentsCostsSection() {
  return (
    <section className={`home-section-amber border-b border-zinc-200/70 ${sectionPad}`}>
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[3fr_2fr] lg:gap-10">
          <div className="order-2 relative lg:order-1">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-amber-500/5 blur-xl" aria-hidden />
            <MarketingScreenshot
              src="/images/finza/finza-incoming-documents.webp"
              alt="Finza incoming documents screen for uploading, reviewing, and converting business documents"
              width={2400}
              height={1350}
              sizes="(max-width: 1024px) 96vw, 58vw"
              className="marketing-shot-enter relative"
            />
          </div>
          <div className="order-1 space-y-5 lg:order-2">
            <h2 className={sectionTitle}>Keep documents and costs organized</h2>
            <p className={sectionLead}>
              Capture receipts and supplier documents as work happens, then turn supported documents
              into organized expense or bill records based on your plan.
            </p>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-start gap-3">
                <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                <span>Upload and review documents with extracted details where supported</span>
              </li>
              <li className="flex items-start gap-3">
                <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                <span>
                  <span className="font-semibold text-zinc-900">Essentials:</span> convert supported
                  documents into expenses
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                <span>
                  <span className="font-semibold text-zinc-900">Professional:</span> convert supported
                  supplier documents into bills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Receipt className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                <span>Keep expenses and supporting records connected</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Section 5 — Performance in GHS */
export function HomePerformanceSection() {
  return (
    <section className={`home-section-emerald border-b border-zinc-200/70 ${sectionPad}`}>
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className={sectionTitle}>Understand performance in GHS</h2>
              <p className={sectionLead}>
                See unpaid invoices, customer balances, and core reports in GHS without rebuilding the
                numbers at month-end.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-1">
              {["VAT Report", "Profit and Loss", "Balance Sheet"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-emerald-200/70 bg-white/90 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm shadow-emerald-900/[0.03]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-emerald-500/5 blur-xl" aria-hidden />
            <MarketingScreenshot
              src="/images/finza/customer-statement.png"
              alt="Finza customer statement showing invoices, payments, and outstanding balances"
              width={2400}
              height={1350}
              sizes="(max-width: 1024px) 96vw, 60vw"
              className="marketing-shot-enter relative"
            />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-500">
          Tax treatment and filing obligations depend on your registration and GRA guidance.
        </p>
      </Container>
    </section>
  );
}

/** Section 6 — Ghana service businesses */
export function HomeGhanaSection() {
  const items = [
    {
      t: "Work in Ghana cedis",
      d: "Quotes, invoices, payments, and reports stay in GHS.",
      icon: Wallet,
      iconTone: "bg-amber-100 text-amber-900 ring-amber-200/80",
    },
    {
      t: "Ghana tax lines where applicable",
      d: "Show VAT, NHIL, GETFund, and WHT clearly when they apply.",
      icon: FileText,
      iconTone: "bg-emerald-100 text-emerald-900 ring-emerald-200/80",
    },
    {
      t: "Connected records",
      d: "Keep quotes, jobs, invoices, payments, and reports linked.",
      icon: ClipboardList,
      iconTone: "bg-sky-100 text-sky-900 ring-sky-200/80",
    },
    {
      t: "Finza Assist",
      d: "Ask about existing records to understand them faster — without automatic posting.",
      icon: Sparkles,
      iconTone: "bg-[#0F172A] text-white ring-slate-700/30",
    },
  ];

  return (
    <section className={`border-b border-zinc-100 bg-white ${sectionPad}`}>
      <Container>
        <div className="mx-auto max-w-4xl space-y-7 text-center">
          <div className="space-y-3">
            <h2 className={sectionTitle}>Built for Ghanaian service businesses</h2>
            <p className={sectionLead}>
              Finza is built around service work in Ghana cedis — quotes, jobs, invoices, payments,
              and reports in one Service workspace.
            </p>
          </div>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.t} className={`${homeCardMuted} flex h-full flex-col p-5`}>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${item.iconTone}`}
                >
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-bold text-zinc-900">{item.t}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            Confirm final tax treatment with your professional adviser or GRA guidance.
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Section 7 — Final CTA */
export function HomeFinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] py-14 text-center sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-2xl space-y-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to run your business with clearer numbers?
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Start your 14-day free trial and explore Finza with no card required.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
            <a href={starterSignupHref} className={homeHeroPrimaryBtn}>
              Start free trial
            </a>
            <Link href="/pricing" className={homeHeroSecondaryBtn}>
              View pricing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Quiet related guides — not part of the main conversion journey */
export function HomeRelatedGuidesSection() {
  return (
    <section className="border-b border-zinc-100 bg-zinc-50/80 py-8">
      <Container>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Related guides</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/accounting-software-ghana", label: "Accounting software Ghana" },
              { href: "/invoicing-software-ghana", label: "Invoicing software Ghana" },
              { href: "/features", label: "Features" },
              { href: "/security", label: "Security" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-300"
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
