import { FileText, Mail, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Incoming Documents — SSR marketing preview                         */
/* Reference: public/images/finza/finza-incoming-documents.png        */
/* All data is illustrative. This is a decorative marketing mockup.   */
/* ------------------------------------------------------------------ */

const STATUS_COUNTS = [
  { label: "NEEDS REVIEW", value: 0, accent: "border-l-amber-400" },
  { label: "FAILED", value: 0, accent: "border-l-red-400" },
  { label: "REVIEWED", value: 0, accent: "border-l-emerald-400" },
  { label: "LINKED", value: 1, accent: "border-l-sky-400" },
] as const;

const QUICK_TABS = [
  "All",
  "Needs attention",
  "Failed",
  "Reviewed",
  "Unlinked",
  "Linked",
] as const;

type DocRow = {
  name: string;
  badges: { label: string; tone: string }[];
  from: string;
  subject: string;
  action: string;
  actionTone: string;
  secondaryActions: string[];
};

const DOCUMENTS: DocRow[] = [
  {
    name: "supplier-invoice-july.pdf",
    badges: [
      { label: "Unknown", tone: "bg-zinc-100 text-zinc-600" },
      { label: "Extracting", tone: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "Not reviewed", tone: "bg-zinc-50 text-zinc-500" },
      { label: "Unlinked", tone: "bg-zinc-50 text-zinc-500" },
    ],
    from: "supplier@example.com",
    subject: "Re: testing docs",
    action: "Review",
    actionTone: "bg-[#0F172A] text-white",
    secondaryActions: ["Open review", "Expense", "Bill"],
  },
  {
    name: "monthly-statement-april.pdf",
    badges: [
      { label: "Unknown", tone: "bg-zinc-100 text-zinc-600" },
      { label: "Extracted", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { label: "Not reviewed", tone: "bg-zinc-50 text-zinc-500" },
      { label: "Unlinked", tone: "bg-zinc-50 text-zinc-500" },
    ],
    from: "supplier@example.com",
    subject: "Re: testing docs",
    action: "Review",
    actionTone: "bg-[#0F172A] text-white",
    secondaryActions: ["Open review", "Expense", "Bill"],
  },
  {
    name: "FINZA invoice receipt.pdf",
    badges: [
      { label: "Expense receipt", tone: "bg-zinc-100 text-zinc-600" },
      { label: "Linked", tone: "bg-sky-50 text-sky-700 border-sky-200" },
      { label: "Not reviewed", tone: "bg-zinc-50 text-zinc-500" },
    ],
    from: "",
    subject: "Expense form",
    action: "View linked",
    actionTone: "bg-emerald-600 text-white",
    secondaryActions: ["Open review (read-only)"],
  },
];

type Props = {
  variant?: "default" | "compact";
};

export function IncomingDocumentsShell({ variant = "default" }: Props) {
  const compact = variant === "compact";

  return (
    <div
      aria-hidden="true"
      className="w-full select-none bg-white text-[10px] text-zinc-900"
    >
      {/* Header */}
      <div className="border-b border-zinc-100 px-4 pb-2.5 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-[13px] font-bold leading-tight text-zinc-900 italic">
              Incoming documents
            </h3>
            {!compact && (
              <p className="mt-0.5 text-[9px] leading-snug text-zinc-500">
                Operational inbox for uploads and email — triage, review, then
                link to expenses or bills.
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <span className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[8px] font-medium text-zinc-600">
              <Mail className="mr-0.5 inline h-2.5 w-2.5" />
              Inbound email
            </span>
            <span className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[8px] font-medium text-zinc-600">
              New expense
            </span>
          </div>
        </div>

        {/* Email info bar */}
        {!compact && (
          <div className="mt-1.5 rounded border border-sky-100 bg-sky-50/50 px-2 py-1 text-[8px] text-zinc-600">
            <span className="font-semibold text-zinc-800">By email:</span>{" "}
            forward or BCC invoices and receipts to your Finza address.
          </div>
        )}
      </div>

      {/* Status counters */}
      <div className="grid grid-cols-4 gap-px border-b border-zinc-100 bg-zinc-50">
        {STATUS_COUNTS.map((s) => (
          <div
            key={s.label}
            className={cn(
              "docs-status-counter border-l-2 bg-white px-2 py-1.5",
              s.accent
            )}
          >
            <p className="text-[7px] font-bold uppercase tracking-wide text-zinc-400">
              {s.label}
            </p>
            <p className="text-[14px] font-bold tabular-nums leading-tight text-zinc-900">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Quick tabs */}
      <div className="flex items-center gap-0.5 border-b border-zinc-100 px-4 py-1.5">
        <span className="mr-1 text-[8px] font-bold uppercase tracking-wide text-zinc-400">
          QUICK
        </span>
        {QUICK_TABS.map((tab) => (
          <span
            key={tab}
            className={cn(
              "rounded px-1.5 py-0.5 text-[8px] font-medium",
              tab === "All"
                ? "bg-[#0F172A] text-white"
                : "text-zinc-600 hover:bg-zinc-50"
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Filters */}
      {!compact && (
        <div className="grid grid-cols-4 gap-2 border-b border-zinc-100 px-4 py-2">
          {["Status", "Review", "Kind", "Linked"].map((f) => (
            <div key={f}>
              <p className="text-[7px] font-medium text-zinc-400">{f}</p>
              <div className="mt-0.5 flex items-center justify-between rounded border border-zinc-200 bg-white px-1.5 py-0.5">
                <span className="text-[8px] text-zinc-500">Any</span>
                <ChevronDown className="h-2 w-2 text-zinc-400" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Search row */}
      {!compact && (
        <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-1.5">
          <div className="flex flex-1 items-center gap-1 rounded border border-zinc-200 bg-white px-1.5 py-0.5">
            <Search className="h-2.5 w-2.5 text-zinc-400" />
            <span className="text-[8px] text-zinc-400">
              File name, subject, sender...
            </span>
          </div>
          <span className="rounded bg-[#0F172A] px-2 py-0.5 text-[8px] font-bold text-white">
            Search
          </span>
          <div className="flex items-center gap-0.5">
            <span className="text-[7px] text-zinc-400">Sort</span>
            <span className="rounded border border-zinc-200 px-1 py-0.5 text-[8px] text-zinc-600">
              Newest first
            </span>
          </div>
        </div>
      )}

      {/* Document rows */}
      <div className="divide-y divide-zinc-100">
        {DOCUMENTS.map((doc, i) => (
          <div
            key={doc.name}
            className="docs-row px-4 py-2.5 transition-colors"
            data-doc-index={i}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3 shrink-0 text-zinc-400" />
                  <p className="truncate text-[11px] font-bold text-zinc-900">
                    {doc.name}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-1">
                  {doc.badges.map((b) => (
                    <span
                      key={b.label}
                      className={cn(
                        "rounded border px-1 py-px text-[7px] font-medium leading-tight",
                        b.tone.includes("border-")
                          ? b.tone
                          : `border-transparent ${b.tone}`
                      )}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
                {doc.from && (
                  <p className="mt-0.5 text-[8px] text-zinc-400">
                    From: {doc.from}
                  </p>
                )}
                <p className="text-[8px] text-zinc-400">
                  {doc.subject || doc.name}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span
                  className={cn(
                    "rounded px-2 py-0.5 text-[8px] font-bold",
                    doc.actionTone
                  )}
                >
                  {doc.action}
                </span>
                <div className="flex gap-1.5">
                  {doc.secondaryActions.map((a) => (
                    <span
                      key={a}
                      className="text-[7px] text-zinc-400"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
