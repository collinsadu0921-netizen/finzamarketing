/** Marketing plan metadata — used by plan-fit UI; full tier table kept in pricing-tiers.tsx */

export type PlanTierId = "essentials" | "professional" | "business";
export type BillingCycleId = "monthly" | "quarterly" | "annual";

export const PLANS_STARTING_PRICE_GHS = 149;

export function getPlanSignupHref(planParam: string, billingCycle = "monthly") {
  return `https://app.finza.africa/signup?workspace=service&plan=${planParam}&billing_cycle=${billingCycle}&trial=1`;
}

export const PLAN_FIT_SUMMARIES: Record<
  PlanTierId,
  { name: string; description: string; planParam: string }
> = {
  essentials: {
    name: "Essentials",
    description:
      "For small businesses that need clean invoices, quotes, receipts, customer records, and payment details.",
    planParam: "starter",
  },
  professional: {
    name: "Professional",
    description:
      "For growing service businesses that need stronger document workflows, reports, customer statements, built-in payroll, and better business control.",
    planParam: "professional",
  },
  business: {
    name: "Business",
    description:
      "For teams that need more users, advanced setup, stronger reporting, Ghana tax readiness, guided onboarding, and Professional capabilities including built-in payroll.",
    planParam: "business",
  },
};

export function getPlanMonthlyPriceGhs(planId: PlanTierId): number {
  const plan = pricingPlansData.find((p) => p.id === planId);
  return plan?.price ?? PLANS_STARTING_PRICE_GHS;
}

export function getPlanTotalPriceGhs(planId: PlanTierId, billingCycle: BillingCycleId): number {
  const plan = pricingPlansData.find((p) => p.id === planId);
  if (!plan) return PLANS_STARTING_PRICE_GHS;
  switch (billingCycle) {
    case "monthly":
      return plan.price;
    case "quarterly":
      return plan.quarterlyPrice;
    case "annual":
      return plan.annualPrice;
  }
}

export const pricingPlansData = [
  {
    id: "essentials" as const,
    name: "Essentials",
    subtitle:
      "For service businesses that need clean invoices, payment tracking, expenses, and core business records.",
    price: 149,
    quarterlyPrice: 425,
    annualPrice: 1490,
    highlight: false,
    cta: "Start 14-day free trial",
    planParam: "starter",
    groupTitle: "Included in Essentials",
    items: [
      "Customers",
      "Customer statements",
      "Quotes and proforma invoices",
      "Invoices",
      "Recurring invoices",
      "Credit notes",
      "Receipts",
      "Record payments",
      "Expenses",
      "Incoming Documents: upload, OCR, review and convert to expenses",
      "VAT report",
      "Profit and Loss",
      "Balance Sheet",
      "Finza Assist",
      "Ghana tax lines where applicable",
    ],
  },
  {
    id: "professional" as const,
    name: "Professional",
    subtitle:
      "For growing teams that need supplier bill workflows, materials and jobs, built-in monthly payroll, salary advances, and stronger reporting.",
    price: 449,
    quarterlyPrice: 1280,
    annualPrice: 4490,
    highlight: true,
    cta: "Start 14-day free trial",
    planParam: "professional",
    groupTitle: "Everything in Essentials, plus",
    items: [
      "Supplier bills",
      "Convert supported supplier documents into supplier bills",
      "Materials: keep material records, purchases, and stock quantities",
      "Jobs and projects: track material usage and costs through supported fulfilment and billing flows",
      "Built-in monthly payroll",
      "Salary advances and repayments",
      "Billable material lines: add billable materials to invoices",
      "VAT filings",
      "WHT",
      "Fixed assets",
      "Cash Flow report",
      "Changes in Equity",
      "Team permissions",
      "Accounting audit log",
    ],
  },
  {
    id: "business" as const,
    name: "Business",
    subtitle:
      "For teams that need everything in Professional — including built-in payroll — plus advanced accounting controls, period locking, and system audit logs.",
    price: 949,
    quarterlyPrice: 2708,
    annualPrice: 9490,
    highlight: false,
    cta: "Start 14-day free trial",
    planParam: "business",
    groupTitle: "Everything in Professional, plus",
    items: [
      "General ledger controls",
      "Journals",
      "Accounting periods",
      "Period locking",
      "CIT",
      "System audit log",
      "Advanced accounting controls inside the Service workspace",
    ],
  },
];
