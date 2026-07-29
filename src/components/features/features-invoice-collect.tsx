"use client";

import { useId, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { FileSpreadsheet } from "lucide-react";
import { FeaturesScreenshotDialog } from "@/components/features/features-screenshot-dialog";
import { sectionLead, sectionTitle } from "@/components/home/home-ui";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "create",
    label: "Create",
    shortLabel: "Create",
    progressLabel: "Create",
    src: "/images/finza/invoice-create.png",
    alt: "Finza invoice creation screen with customer details, line items, and totals",
    hint: "Build the invoice with customer details, due dates, and Ghana tax lines where applicable.",
  },
  {
    id: "send",
    label: "Send",
    shortLabel: "Send",
    progressLabel: "Send",
    src: "/images/finza/invoice-sample.png",
    alt: "Sample Finza invoice document showing amounts, tax lines, and payment details in GHS",
    hint: "Share a clear invoice customers can understand and pay against.",
  },
  {
    id: "paid",
    label: "Get paid",
    shortLabel: "Paid",
    progressLabel: "Paid",
    src: "/images/finza/receipt-payment.png",
    alt: "Finza payment and receipt screen showing recorded customer payments",
    hint: "Record full or partial payments and keep receipts connected to the invoice.",
  },
] as const;

type StageId = (typeof STAGES)[number]["id"];

const CAPABILITIES = [
  "Create invoices with customer details and due dates",
  "Show Ghana tax lines where applicable",
  "Record full and partial payments",
  "Review customer balances and statements",
  "Share documents through supported channels",
] as const;

function PlanBadge() {
  return (
    <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-800">
      Essentials
    </span>
  );
}

export function FeaturesInvoiceCollectExperience() {
  const [active, setActive] = useState<StageId>("create");
  const baseId = useId();
  const activeIndex = STAGES.findIndex((s) => s.id === active);
  const activeStage = STAGES[activeIndex] ?? STAGES[0];

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % STAGES.length;
    if (event.key === "ArrowLeft") next = (index - 1 + STAGES.length) % STAGES.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = STAGES.length - 1;
    setActive(STAGES[next].id);
    document.getElementById(`${baseId}-tab-${STAGES[next].id}`)?.focus();
  }

  const controls = (
    <div className="space-y-3">
      <div
        role="tablist"
        aria-label="Invoice workflow stages"
        className="flex gap-1 rounded-xl border border-zinc-200/90 bg-white p-1 shadow-sm shadow-zinc-900/[0.03]"
      >
        {STAGES.map((stage, index) => {
          const selected = active === stage.id;
          return (
            <button
              key={stage.id}
              id={`${baseId}-tab-${stage.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${stage.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(stage.id)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              className={cn(
                "min-h-11 flex-1 rounded-lg px-2 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:px-3",
                selected
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              <span className="sm:hidden">{stage.shortLabel}</span>
              <span className="hidden sm:inline">{stage.label}</span>
            </button>
          );
        })}
      </div>

      <ol
        className="flex items-center gap-1.5 px-0.5"
        aria-label="Create, send, then get paid"
      >
        {STAGES.map((stage, index) => {
          const done = index <= activeIndex;
          return (
            <li key={stage.id} className="flex min-w-0 flex-1 items-center gap-1.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200",
                  done ? "bg-emerald-600" : "bg-zinc-300"
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "truncate text-[11px] font-medium transition-colors duration-200",
                  done ? "text-zinc-600" : "text-zinc-400"
                )}
              >
                {stage.progressLabel}
              </span>
              {index < STAGES.length - 1 ? (
                <span
                  className={cn(
                    "mx-0.5 h-px min-w-[0.75rem] flex-1 transition-colors duration-200",
                    index < activeIndex ? "bg-emerald-400" : "bg-zinc-200"
                  )}
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <p className="text-sm leading-relaxed text-zinc-600">{activeStage.hint}</p>
    </div>
  );

  const capabilityList = (
    <ul className="space-y-2 text-sm text-zinc-700">
      {CAPABILITIES.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <FileSpreadsheet className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const screenshot = (
    <div className="space-y-2.5">
      <div className="relative">
        {STAGES.map((stage) => {
          const selected = active === stage.id;
          return (
            <div
              key={stage.id}
              id={`${baseId}-panel-${stage.id}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${stage.id}`}
              hidden={!selected}
              className={cn(selected && "features-stage-panel")}
            >
              <div className="features-shot-frame features-invoice-shot overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]">
                <Image
                  src={stage.src}
                  alt={stage.alt}
                  width={2400}
                  height={1350}
                  sizes="(max-width: 1023px) 96vw, 58vw"
                  className="block h-auto w-full lg:max-h-[min(52vh,440px)] lg:object-cover lg:object-top"
                  priority={stage.id === "create"}
                  loading={stage.id === "create" ? undefined : "lazy"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <FeaturesScreenshotDialog
          src={activeStage.src}
          alt={activeStage.alt}
          title={`${activeStage.label} — invoice workflow`}
        />
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-x-8 lg:gap-y-4">
        <header className="order-1 space-y-3 lg:col-start-1 lg:row-start-1">
          <PlanBadge />
          <h2 className={sectionTitle}>Invoice clearly and stay on top of what customers owe.</h2>
          <p className={sectionLead}>
            Create invoices in GHS, record full or partial payments, issue receipts, and review customer
            balances from connected records.
          </p>
        </header>

        <div className="order-2 lg:col-start-1 lg:row-start-3">{controls}</div>

        <div className="order-3 lg:col-start-2 lg:row-span-3 lg:row-start-1">{screenshot}</div>

        <div className="order-4 lg:col-start-1 lg:row-start-2">{capabilityList}</div>
      </div>

      <aside className="mt-8 rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/90 via-white to-amber-50/60 px-5 py-4 shadow-sm shadow-amber-900/[0.04] sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-800">Optional integration</p>
        <p className="mt-1.5 text-sm font-semibold leading-relaxed text-zinc-900 sm:text-base">
          Accept online invoice payments through Hubtel using your connected merchant account. Hubtel
          approval and credentials are required.
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
          Hubtel is for customer invoice payments, not Finza subscription billing.
        </p>
      </aside>
    </div>
  );
}
