/** Marketing plan metadata — used by plan-fit UI; full tier table kept in pricing-tiers.tsx */

export type PlanTierId = "essentials" | "professional" | "business";

export const PLANS_STARTING_PRICE_GHS = 149;

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
      "For growing service businesses that need stronger document workflows, reports, customer statements, payroll, and better business control.",
    planParam: "professional",
  },
  business: {
    name: "Business",
    description:
      "For teams that need more users, advanced setup, stronger reporting, Ghana tax readiness, and guided onboarding.",
    planParam: "business",
  },
};

export function getPlanMonthlyPriceGhs(planId: PlanTierId): number {
  const plan = pricingPlansData.find((p) => p.id === planId);
  return plan?.price ?? PLANS_STARTING_PRICE_GHS;
}

export const pricingPlansData = [
  {
    id: "essentials" as const,
    name: "Essentials",
    subtitle:
      "For service businesses that need professional documents, payment tracking, expenses, and clear business records.",
    price: 149,
    highlight: false,
    cta: "Start 14-day free trial",
    planParam: "starter",
    groupTitle: "Included in Essentials",
    items: [
      "Proposals",
      "Quotes and proformas",
      "Invoices and receipts",
      "Customers",
      "Products and services",
      "Payment recording",
      "Partial payment tracking",
      "Expense tracking",
      "Basic reports",
      "PDF exports",
      "Email sending",
      "Public document links",
      "WhatsApp sharing links",
      "Ghana tax lines where applicable",
    ],
  },
  {
    id: "professional" as const,
    name: "Professional",
    subtitle:
      "For growing service teams that need better control over bills, documents, payroll, tax records, and team access.",
    price: 449,
    highlight: true,
    cta: "Start 14-day free trial",
    planParam: "professional",
    groupTitle: "Everything in Essentials, plus",
    items: [
      "Supplier bills",
      "Incoming documents",
      "Document upload and review workflow",
      "Payroll",
      "WHT receivable tracking where applicable",
      "VAT, NHIL, and GETFund support where applicable",
      "Customer statements",
      "Team access",
      "Roles and permissions",
      "More detailed reports",
      "Accountant-ready records",
    ],
  },
  {
    id: "business" as const,
    name: "Business",
    subtitle:
      "For companies that need deeper accounting control, review workflows, exports, and governance.",
    price: 949,
    highlight: false,
    cta: "Start 14-day free trial",
    planParam: "business",
    groupTitle: "Everything in Professional, plus",
    items: [
      "Ledger records",
      "Journal entries",
      "Chart of accounts",
      "Trial balance",
      "Bank reconciliation",
      "Period close and reopen controls",
      "Audit logs",
      "Accounting reports",
      "Report exports",
      "Accounting workspace access",
      "Advanced accountant review support",
    ],
  },
];
