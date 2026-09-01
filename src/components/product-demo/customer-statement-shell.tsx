import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Customer Statement — SSR marketing preview                         */
/* Reference: public/images/finza/customer-statement.png              */
/* All values are from the reference screenshot.                      */
/* Balances are derived from one fixture — see TRANSACTIONS below.    */
/* ------------------------------------------------------------------ */

type SummaryCard = {
  label: string;
  value: string;
  tone: string;
};

type Transaction = {
  date: string;
  type: "Invoice" | "Payment";
  ref: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
};

const TRANSACTIONS: Transaction[] = [
  { date: "26/03/2026", type: "Invoice", ref: "#INV-000005", description: "Invoice sent", debit: "₵1,200.00", credit: "—", balance: "₵1,200.00" },
  { date: "02/04/2026", type: "Invoice", ref: "#INV-000011", description: "Invoice sent", debit: "₵1,350.00", credit: "—", balance: "₵2,550.00" },
  { date: "19/04/2026", type: "Invoice", ref: "#INV-000016", description: "Invoice paid", debit: "₵2,500.00", credit: "—", balance: "₵5,050.00" },
  { date: "21/04/2026", type: "Invoice", ref: "#INV-000018", description: "Invoice paid", debit: "₵6,750.00", credit: "—", balance: "₵11,800.00" },
  { date: "22/04/2026", type: "Payment", ref: "—", description: "Payment (cash)", debit: "—", credit: "₵2,500.00", balance: "₵9,300.00" },
  { date: "01/05/2026", type: "Payment", ref: "—", description: "Payment (bank)", debit: "—", credit: "₵6,750.00", balance: "₵2,550.00" },
  { date: "10/05/2026", type: "Invoice", ref: "#INV-000019", description: "Invoice sent", debit: "₵1.00", credit: "—", balance: "₵2,551.00" },
];

/*
 * Derived summary:
 *   Invoiced = sum of debits   = 1200+1350+2500+6750+1 = 11801
 *   Payments = sum of credits  = 2500+6750             = 9250
 *   Outstanding = Invoiced − Payments = 2551
 *   Overdue = 2550 (all invoices except the ₵1 one are past due)
 */
const SUMMARY: SummaryCard[] = [
  { label: "Opening", value: "₵0.00", tone: "text-zinc-700" },
  { label: "Invoiced", value: "₵11,801.00", tone: "text-sky-700" },
  { label: "Payments", value: "₵9,250.00", tone: "text-emerald-700" },
  { label: "Credit notes", value: "₵0.00", tone: "text-zinc-500" },
  { label: "Outstanding", value: "₵2,551.00", tone: "text-amber-700" },
  { label: "Overdue", value: "₵2,550.00", tone: "text-red-600" },
];

const TYPE_TONE: Record<string, string> = {
  Invoice: "bg-sky-50 text-sky-700 border-sky-200",
  Payment: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

type Props = {
  variant?: "default" | "compact";
};

export function CustomerStatementShell({ variant = "default" }: Props) {
  const compact = variant === "compact";
  const rows = compact ? TRANSACTIONS.slice(0, 5) : TRANSACTIONS;

  return (
    <div
      aria-hidden="true"
      className="w-full select-none bg-white text-[10px] text-zinc-900"
    >
      {/* Header */}
      <div className="border-b border-zinc-100 px-4 pb-2.5 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[8px] text-zinc-400">&lsaquo; Back</p>
            <h3 className="text-[15px] font-extrabold leading-tight text-zinc-900">
              Customer Statement
            </h3>
            <p className="mt-0.5 text-[10px] font-medium text-zinc-600">
              Demo Customer
            </p>
            <p className="text-[9px] text-zinc-400">+233 000 000 000</p>
          </div>
          <span className="shrink-0 rounded bg-[#0F172A] px-2.5 py-1 text-[9px] font-bold text-white">
            Download PDF
          </span>
        </div>
        {!compact && (
          <p className="mt-1 text-[8px] leading-snug text-zinc-400">
            Statements are private. Download the PDF and send it manually if
            needed.
          </p>
        )}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-6 gap-px border-b border-zinc-100 bg-zinc-50">
        {SUMMARY.map((s) => (
          <div
            key={s.label}
            className="stmt-summary-card bg-white px-2 py-2"
          >
            <p className={cn("text-[7px] font-semibold", s.tone)}>
              {s.label}
            </p>
            <p
              className={cn(
                "mt-0.5 font-bold tabular-nums leading-tight",
                compact ? "text-[11px]" : "text-[12px]",
                s.tone
              )}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="px-4 pt-2.5 pb-1">
        <div className="flex items-center justify-between">
          <h4 className="text-[11px] font-bold text-zinc-900">
            Statement transactions
          </h4>
          <span className="text-[9px] tabular-nums text-zinc-500">
            Closing balance:{" "}
            <span className="font-bold text-sky-700">₵2,551.00</span>
          </span>
        </div>

        {/* Table header */}
        <div className="mt-2 grid grid-cols-[3fr_2fr_3fr_4fr_3fr_3fr_3fr] gap-1 border-b border-zinc-200 pb-1 text-[8px] font-bold uppercase tracking-wide text-zinc-400">
          <span>Date</span>
          <span>Type</span>
          <span>Reference</span>
          <span>Description</span>
          <span className="text-right">Debit</span>
          <span className="text-right">Credit</span>
          <span className="text-right">Balance</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-zinc-50">
          {rows.map((tx, i) => (
            <div
              key={`${tx.date}-${tx.ref}-${i}`}
              className="stmt-row grid grid-cols-[3fr_2fr_3fr_4fr_3fr_3fr_3fr] items-center gap-1 py-1.5 transition-colors"
              data-tx-index={i}
              data-tx-type={tx.type.toLowerCase()}
            >
              <span className="tabular-nums text-zinc-600">{tx.date}</span>
              <span>
                <span
                  className={cn(
                    "inline-block rounded border px-1 py-px text-[7px] font-semibold leading-tight",
                    TYPE_TONE[tx.type]
                  )}
                >
                  {tx.type}
                </span>
              </span>
              <span className="tabular-nums text-zinc-600">{tx.ref}</span>
              <span className="text-zinc-600">{tx.description}</span>
              <span className="text-right tabular-nums text-zinc-700">
                {tx.debit}
              </span>
              <span className="text-right tabular-nums text-zinc-700">
                {tx.credit}
              </span>
              <span
                className={cn(
                  "text-right tabular-nums font-bold",
                  tx.type === "Payment"
                    ? "text-emerald-700"
                    : "text-zinc-900"
                )}
              >
                {tx.balance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
