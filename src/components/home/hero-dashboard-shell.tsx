import {
  BarChart3,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Receipt,
  Send,
  Settings,
  Users,
  Wallet,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — exact values from the supplied dashboard(2).png reference  */
/* ------------------------------------------------------------------ */

type Metric = {
  id: string;
  label: string;
  value: string;
  accent: string;
  warning?: string;
};

const METRICS: Metric[] = [
  {
    id: "cash",
    label: "AVAILABLE CASH",
    value: "₵461,676.49",
    accent: "bg-emerald-500",
  },
  {
    id: "invoices",
    label: "UNPAID INVOICES",
    value: "₵199,880.00",
    accent: "bg-sky-500",
    warning: "₵138,702 overdue",
  },
  {
    id: "balances",
    label: "CUSTOMER BALANCES",
    value: "₵199,890.00",
    accent: "bg-violet-500",
  },
  {
    id: "liabilities",
    label: "BILLS AND LIABILITIES",
    value: "₵174,756.12",
    accent: "bg-zinc-600",
  },
];

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, active: true },
  { icon: FileText, active: false },
  { icon: Send, active: false },
  { icon: Receipt, active: false },
  { icon: FolderOpen, active: false },
  { icon: Users, active: false },
  { icon: Wallet, active: false },
  { icon: BarChart3, active: false },
  { icon: Settings, active: false },
] as const;

/* ------------------------------------------------------------------ */
/* Chart fixtures — decorative marketing values for Apr–Sep           */
/* August values are verified; all others are proportional estimates   */
/* matching the supplied reference screenshot for marketing display.   */
/* DATA BLOCKER: Apr–Jul and Sep values are not verified financials.   */
/* They require explicit owner approval or replacement with actual     */
/* accounting figures before the dashboard can be declared ready.      */
/* ------------------------------------------------------------------ */

type MonthEntry = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
  highlight: boolean;
};

const CHART_DATA: MonthEntry[] = [
  { month: "Apr", revenue: 62000, expenses: 85000, profit: -23000, highlight: false },
  { month: "May", revenue: 115000, expenses: 52000, profit: 63000, highlight: false },
  { month: "Jun", revenue: 345000, expenses: 22000, profit: 323000, highlight: false },
  { month: "Jul", revenue: 42000, expenses: 15000, profit: 27000, highlight: false },
  { month: "Aug", revenue: 50981.67, expenses: 6441, profit: 44540.67, highlight: true },
  { month: "Sep", revenue: 8500, expenses: 14500, profit: -6000, highlight: false },
];

/* ------------------------------------------------------------------ */
/* Derived summaries                                                  */
/* ------------------------------------------------------------------ */

const PROFITABLE_COUNT = CHART_DATA.filter((d) => d.profit > 0).length;
const TOTAL_MONTHS = CHART_DATA.length;

/* ------------------------------------------------------------------ */
/* Scale computation — derived from the dataset, not hardcoded        */
/* ------------------------------------------------------------------ */

function computeScale(values: number[]) {
  const dMax = Math.max(0, ...values);
  const dMin = Math.min(0, ...values);

  const posRange = dMax || 1;
  const rough = posRange / 3;
  const exp = Math.pow(10, Math.floor(Math.log10(rough)));
  const m = rough / exp;
  const niceInterval =
    (m <= 1.5 ? 1 : m <= 3 ? 2 : m <= 7 ? 5 : 10) * exp;

  const axMax = Math.ceil(dMax / niceInterval) * niceInterval;
  const axMin =
    dMin < 0
      ? -(
          Math.ceil(Math.abs(dMin) / (niceInterval / 2)) *
          (niceInterval / 2)
        )
      : 0;

  const ticks: number[] = [];
  for (let v = axMax; v >= axMin - 0.5; v -= niceInterval) {
    ticks.push(Math.round(v));
  }
  if (axMin < ticks[ticks.length - 1]) ticks.push(axMin);

  return { max: axMax, min: axMin, range: axMax - axMin, ticks };
}

const reScale = computeScale(
  CHART_DATA.flatMap((d) => [d.revenue, d.expenses])
);
const npScale = computeScale(CHART_DATA.map((d) => d.profit));

/* ------------------------------------------------------------------ */
/* Chart geometry — shared horizontal layout                          */
/* ------------------------------------------------------------------ */

const CH_L = 30;
const CH_R = 312;
const CH_W = CH_R - CH_L;
const CH_GW = CH_W / CHART_DATA.length;

function groupCX(i: number) {
  return CH_L + CH_GW * (i + 0.5);
}

function ghsLabel(v: number) {
  if (v === 0) return "₵0";
  const k = Math.round(Math.abs(v) / 1000);
  return `${v < 0 ? "-" : ""}₵${k}k`;
}

const COL_GRID = "#e4e4e7";
const COL_LABEL = "#a1a1aa";
const COL_ZERO = "#71717a";
const COL_REV = "#10b981";
const COL_EXP = "#334155";
const COL_POS = "#7c3aed";
const COL_NEG = "#f87171";

/* ------------------------------------------------------------------ */
/* Revenue & Expenses chart                                           */
/* viewBox 0 0 320 68 — plot y 2..54, labels y 62                    */
/* ------------------------------------------------------------------ */

const RE_TOP = 2;
const RE_BOT = 54;
const RE_H = RE_BOT - RE_TOP;
const RE_BW = 12;
const RE_BG = 2;

function reY(v: number) {
  return RE_BOT - RE_H * ((v - reScale.min) / reScale.range);
}

function RevenueExpensesChart() {
  return (
    <svg
      viewBox="0 0 320 68"
      className="block w-full"
      aria-hidden="true"
    >
      {reScale.ticks.map((tick) => {
        const y = reY(tick);
        return (
          <g key={tick}>
            <line
              x1={CH_L}
              y1={y}
              x2={CH_R}
              y2={y}
              stroke={tick === 0 ? COL_ZERO : COL_GRID}
              strokeWidth={tick === 0 ? 0.75 : 0.5}
              strokeDasharray={tick === 0 ? undefined : "2,2"}
              shapeRendering="crispEdges"
            />
            <text
              x={CH_L - 3}
              y={y + 2.5}
              textAnchor="end"
              fill={COL_LABEL}
              fontSize={5.5}
              fontFamily="inherit"
            >
              {ghsLabel(tick)}
            </text>
          </g>
        );
      })}
      <line
        x1={CH_L}
        y1={RE_TOP}
        x2={CH_L}
        y2={RE_BOT}
        stroke={COL_GRID}
        strokeWidth={0.5}
        shapeRendering="crispEdges"
      />
      {CHART_DATA.map((d, i) => {
        const cx = groupCX(i);
        const rx = cx - RE_BW - RE_BG / 2;
        const ex = cx + RE_BG / 2;
        const rh = Math.max(RE_H * (d.revenue / reScale.range), 1.5);
        const eh = Math.max(RE_H * (d.expenses / reScale.range), 1.5);
        return (
          <g
            key={d.month}
            data-chart-month={d.month}
            opacity={d.highlight ? 1 : 0.45}
          >
            <rect
              x={rx}
              y={RE_BOT - rh}
              width={RE_BW}
              height={rh}
              fill={COL_REV}
              rx={1}
            />
            <rect
              x={ex}
              y={RE_BOT - eh}
              width={RE_BW}
              height={eh}
              fill={COL_EXP}
              rx={1}
            />
            <text
              x={cx}
              y={63}
              textAnchor="middle"
              fill={COL_LABEL}
              fontSize={5.5}
              fontFamily="inherit"
            >
              {d.month}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Net Profit chart                                                   */
/* viewBox 0 0 320 64 — plot y 2..52, labels y 59                    */
/* ------------------------------------------------------------------ */

const NP_TOP = 2;
const NP_BOT = 52;
const NP_H = NP_BOT - NP_TOP;
const NP_BW = 16;

function npY(v: number) {
  return NP_TOP + NP_H * ((npScale.max - v) / npScale.range);
}

const NP_ZERO_Y = npY(0);

function NetProfitChart() {
  return (
    <svg
      viewBox="0 0 320 64"
      className="block w-full"
      aria-hidden="true"
    >
      {npScale.ticks.map((tick) => {
        const y = npY(tick);
        const isZero = tick === 0;
        return (
          <g key={tick}>
            <line
              x1={CH_L}
              y1={y}
              x2={CH_R}
              y2={y}
              stroke={isZero ? COL_ZERO : COL_GRID}
              strokeWidth={isZero ? 0.75 : 0.5}
              strokeDasharray={isZero ? undefined : "2,2"}
              shapeRendering="crispEdges"
            />
            <text
              x={CH_L - 3}
              y={y + 2.5}
              textAnchor="end"
              fill={COL_LABEL}
              fontSize={5.5}
              fontFamily="inherit"
            >
              {ghsLabel(tick)}
            </text>
          </g>
        );
      })}
      <line
        x1={CH_L}
        y1={NP_TOP}
        x2={CH_L}
        y2={NP_BOT}
        stroke={COL_GRID}
        strokeWidth={0.5}
        shapeRendering="crispEdges"
      />
      {CHART_DATA.map((d, i) => {
        const cx = groupCX(i);
        const bx = cx - NP_BW / 2;
        const isNeg = d.profit < 0;
        const rawH = NP_H * (Math.abs(d.profit) / npScale.range);
        const barH = Math.max(rawH, 1.5);
        const barY = isNeg ? NP_ZERO_Y : NP_ZERO_Y - barH;
        return (
          <g
            key={d.month}
            data-chart-month={d.month}
            opacity={d.highlight ? 1 : 0.45}
          >
            <rect
              x={bx}
              y={barY}
              width={NP_BW}
              height={barH}
              fill={isNeg ? COL_NEG : COL_POS}
              rx={1}
            />
            <text
              x={cx}
              y={59}
              textAnchor="middle"
              fill={COL_LABEL}
              fontSize={5.5}
              fontFamily="inherit"
            >
              {d.month}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shell                                                             */
/* ------------------------------------------------------------------ */

export function HeroDashboardShell() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full min-w-0 select-none bg-[#f8f9fb] text-[9px] text-zinc-900 xl:text-[10px]"
    >
      {/* Sidebar */}
      <aside className="hidden w-7 shrink-0 flex-col items-center gap-1.5 border-r border-zinc-200/80 bg-white py-2 sm:flex xl:w-8">
        {SIDEBAR_ITEMS.map(({ icon: Icon, active }, i) => (
          <span
            key={i}
            className={
              "flex h-4 w-4 items-center justify-center rounded " +
              (active ? "bg-sky-100 text-sky-600" : "text-zinc-400")
            }
          >
            <Icon size={10} strokeWidth={1.8} />
          </span>
        ))}
      </aside>

      {/* Main */}
      <div className="min-w-0 flex-1 p-2.5 xl:p-3">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200/70 pb-1.5">
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[7px] font-bold text-amber-700">
              G
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-bold leading-tight xl:text-xs">
                Golden hands services Ltd
              </p>
              <p className="text-[8px] font-medium uppercase tracking-wide text-zinc-400 xl:text-[8.5px]">
                GOOD MORNING, FINZA
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-[8px] text-zinc-500 xl:text-[9px]">
            <span className="hidden font-medium uppercase tracking-wide xl:inline">
              1 SEP 2026
            </span>
            <span className="inline-flex items-center gap-0.5 rounded bg-zinc-100 px-1 py-0.5">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              Live
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-1 flex flex-wrap items-center gap-1 text-[8px] xl:text-[9px]">
          <span className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-medium text-zinc-700">
            Latest period
          </span>
          <span className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-medium text-zinc-700">
            GHS
          </span>
        </div>

        {/* Metric cards */}
        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.id}
              data-metric={m.id}
              className="dashboard-metric min-w-0 rounded border border-zinc-200/80 bg-white p-1.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]"
            >
              <div className="flex gap-1">
                <span
                  className={`mt-0.5 w-0.5 shrink-0 self-stretch rounded-full ${m.accent}`}
                />
                <div className="min-w-0">
                  <p className="text-[7px] font-semibold uppercase tracking-wide text-zinc-500 xl:text-[7.5px]">
                    {m.label}
                  </p>
                  <p className="mt-0.5 text-[12px] font-bold tabular-nums leading-none text-zinc-900 xl:text-[13px]">
                    {m.value}
                  </p>
                  {m.warning && (
                    <p className="mt-0.5 text-[7px] leading-snug text-amber-700 xl:text-[7.5px]">
                      {m.warning}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profit performance */}
        <div className="mt-2 rounded border border-zinc-200/80 bg-white p-2 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
          {/* Header row */}
          <div className="flex items-start justify-between gap-1">
            <p className="text-[11px] font-bold xl:text-xs">
              Profit performance
            </p>
            <div className="flex items-center gap-0.5 text-[8px] xl:text-[8.5px]">
              <span className="rounded bg-zinc-100 px-1 py-0.5 font-semibold text-zinc-800">
                Monthly
              </span>
              <span className="rounded border border-emerald-200 bg-emerald-50 px-1 py-0.5 font-semibold text-emerald-700">
                Profitable
              </span>
            </div>
          </div>

          {/* Net profit + Revenue/Expenses summary */}
          <div className="mt-1.5 grid gap-2 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="dashboard-profit-box rounded border border-transparent p-1">
              <div className="flex items-center gap-1">
                <span className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 xl:text-[8.5px]">
                  NET PROFIT &middot; August
                </span>
                <span className="rounded-full bg-sky-100 px-1 py-0.5 text-[7px] font-bold text-sky-700 xl:text-[7.5px]">
                  87% margin
                </span>
              </div>
              <p className="mt-0.5 text-[18px] font-bold tabular-nums leading-none text-zinc-900 xl:text-[20px]">
                ₵44,540.67
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5 self-end">
              <div>
                <p className="text-[7.5px] font-semibold uppercase tracking-wide text-zinc-500 xl:text-[8px]">
                  REVENUE
                </p>
                <p className="text-[11px] font-bold tabular-nums text-zinc-900 xl:text-xs">
                  ₵50,981.67
                </p>
              </div>
              <div>
                <p className="text-[7.5px] font-semibold uppercase tracking-wide text-zinc-500 xl:text-[8px]">
                  EXPENSES
                </p>
                <p className="text-[11px] font-bold tabular-nums text-zinc-900 xl:text-xs">
                  ₵6,441.00
                </p>
              </div>
            </div>
          </div>

          {/* Charts + Breakdown */}
          <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto]">
            {/* Charts column — normal flow blocks, no flex shrinking */}
            <div className="space-y-2">
              {/* Revenue vs Expenses */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[7.5px] text-zinc-500 xl:text-[8px]">
                    <span className="inline-flex items-center gap-0.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-sm bg-emerald-500" />{" "}
                      Revenue
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-sm bg-slate-700" />{" "}
                      Expenses
                    </span>
                  </div>
                  <span className="text-[6.5px] text-zinc-400 xl:text-[7px]">
                    Revenue and expenses by month
                  </span>
                </div>
                <RevenueExpensesChart />
              </div>

              {/* Net profit */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[7.5px] font-medium text-zinc-700 xl:text-[8px]">
                    Net profit by month
                  </span>
                </div>
                <NetProfitChart />
              </div>
            </div>

            {/* Aug breakdown */}
            <div className="dashboard-breakdown w-24 shrink-0 rounded border border-zinc-200/80 bg-zinc-50/60 p-1.5 xl:w-28">
              <p className="text-[8px] font-bold uppercase tracking-wide text-zinc-700 xl:text-[8.5px]">
                AUG BREAKDOWN
              </p>
              <div className="mt-1.5 space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Revenue</span>
                  <span className="font-bold tabular-nums text-zinc-900">
                    ₵50,981
                  </span>
                </div>
                <div className="flex justify-between border-t border-zinc-200/60 pt-1">
                  <span className="text-zinc-600">Expenses</span>
                  <span className="font-bold tabular-nums text-zinc-900">
                    ₵6,441
                  </span>
                </div>
                <div className="flex justify-between border-t border-zinc-200/60 pt-1">
                  <span className="text-zinc-600">Net profit</span>
                  <span className="font-bold tabular-nums text-sky-600">
                    ₵44,541
                  </span>
                </div>
                <div className="flex justify-between border-t border-zinc-200/60 pt-1">
                  <span className="text-zinc-600">Net margin</span>
                  <span className="font-bold tabular-nums text-zinc-900">
                    87%
                  </span>
                </div>
                <div className="flex justify-between border-t border-zinc-200/60 pt-1">
                  <span className="text-zinc-600">Profitable</span>
                  <span className="font-bold tabular-nums text-emerald-700">
                    {PROFITABLE_COUNT} of {TOTAL_MONTHS}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
