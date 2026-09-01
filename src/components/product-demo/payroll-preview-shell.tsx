import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Payroll run — SSR marketing preview                                 */
/* Figures match the July 2026 demo screenshot (internally consistent). */
/* All values are synthetic demo data. Never fetch live payroll.        */
/* ------------------------------------------------------------------ */

const SUMMARY = [
  { label: "Gross salary", value: "₵5,700.00", tone: "text-zinc-900", key: "gross" },
  { label: "PAYE", value: "₵750.82", tone: "text-red-700", key: "paye" },
  { label: "Employee pension", value: "₵313.50", tone: "text-orange-700", key: "emp-pension" },
  { label: "Employer pension", value: "₵741.00", tone: "text-amber-800", key: "er-pension" },
  { label: "Net salary", value: "₵4,235.68", tone: "text-emerald-700", key: "net" },
] as const;

const OBLIGATIONS = [
  {
    name: "Net salaries payable",
    outstanding: "₵4,235.68",
    status: "Unpaid",
    statusTone: "bg-zinc-100 text-zinc-700",
    key: "salaries",
  },
  {
    name: "PAYE payable to GRA",
    outstanding: "₵750.82",
    status: "Unpaid",
    statusTone: "bg-zinc-100 text-zinc-700",
    key: "paye",
  },
  {
    name: "SSNIT / Tier 1 remittance",
    outstanding: "₵769.50",
    status: "Unpaid",
    statusTone: "bg-zinc-100 text-zinc-700",
    key: "tier1",
  },
  {
    name: "Tier 2 pension remittance",
    outstanding: "₵285.00",
    status: "Unpaid",
    statusTone: "bg-zinc-100 text-zinc-700",
    key: "tier2",
  },
  {
    name: "Salary advance recoveries",
    outstanding: "₵400.00",
    status: "Recovered",
    statusTone: "bg-emerald-50 text-emerald-800",
    key: "advances",
  },
] as const;

const EXPORTS = [
  "Payroll summary",
  "PAYE",
  "GRA DT 107A",
  "SSNIT / Tier 1",
  "Tier 2",
  "Obligations",
] as const;

type Props = {
  variant?: "default" | "compact";
};

export function PayrollPreviewShell({ variant = "default" }: Props) {
  const compact = variant === "compact";

  return (
    <div
      aria-hidden="true"
      className="w-full select-none bg-white text-[13px] leading-snug text-zinc-900"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-100 px-4 py-3">
        <div className="min-w-0">
          <p className="text-[17px] font-extrabold tracking-tight text-zinc-900 sm:text-[18px]">
            July 2026
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <span className="payroll-status-approved rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
              Approved
            </span>
            <span className="payroll-status-unpaid rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-700">
              Unpaid
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-md bg-teal-700 px-2.5 py-1 text-[11px] font-semibold text-white">
            Generate Payslips
          </span>
          <span className="rounded-md bg-[#0F172A] px-2.5 py-1 text-[11px] font-semibold text-white">
            Record Salary Payment
          </span>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-px border-b border-zinc-100 bg-zinc-100",
          compact ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        )}
      >
        {SUMMARY.map((item) => (
          <div
            key={item.key}
            className={cn("payroll-summary-card bg-white px-3 py-2.5", item.key === "net" && "payroll-summary-net")}
            data-summary={item.key}
          >
            <p className="text-[11px] font-medium text-zinc-500">{item.label}</p>
            <p className={cn("mt-0.5 text-[14px] font-bold tabular-nums sm:text-[15px]", item.tone)}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-b border-zinc-100 px-4 py-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[12px] font-semibold text-zinc-800">Salary payment</p>
          <span className="payroll-payment-status text-[12px] font-semibold text-zinc-600">
            Unpaid · outstanding ₵4,235.68
          </span>
        </div>
        <p className="text-[12px] text-zinc-600">
          Salary advance repayments in this run:{" "}
          <span className="font-semibold tabular-nums text-zinc-800">₵400.00</span>
        </p>
      </div>

      <div className="px-4 py-3">
        <p className="mb-2 text-[12px] font-semibold text-zinc-800">Payroll obligations</p>
        <div className="divide-y divide-zinc-100 overflow-hidden rounded-lg border border-zinc-200">
          {OBLIGATIONS.map((row) => (
            <div
              key={row.key}
              className="payroll-obligation-row flex items-center justify-between gap-3 px-3 py-2"
              data-obligation={row.key}
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-zinc-800">{row.name}</p>
                <p className="mt-0.5 text-[12px] tabular-nums text-zinc-500">{row.outstanding}</p>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                  row.statusTone
                )}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {!compact ? (
        <div className="border-t border-zinc-100 px-4 py-3">
          <p className="mb-2 text-[12px] font-semibold text-zinc-800">Exports</p>
          <div className="flex flex-wrap gap-1.5">
            {EXPORTS.map((label) => (
              <span
                key={label}
                className="rounded-md bg-[#0F172A] px-2 py-1 text-[11px] font-semibold text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
