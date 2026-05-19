import type { PlanFitAnswers } from "@/lib/plan-fit-scoring";

export type PlanFitQuestion = {
  id: keyof PlanFitAnswers;
  label: string;
  options: { value: string; label: string }[];
};

export const PLAN_FIT_QUESTIONS: PlanFitQuestion[] = [
  {
    id: "businessType",
    label: "What type of business do you run?",
    options: [
      { value: "service", label: "Service business" },
      { value: "professional", label: "Professional services" },
      { value: "agency", label: "Agency or consultancy" },
      { value: "contractor", label: "Construction or contractor" },
      { value: "other-service", label: "Other service business" },
    ],
  },
  {
    id: "documents",
    label: "Do you mainly send invoices, quotes, or proformas?",
    options: [
      { value: "invoices", label: "Invoices" },
      { value: "quotes", label: "Quotes" },
      { value: "proformas", label: "Proformas" },
      { value: "mix", label: "A mix of these" },
    ],
  },
  {
    id: "teamSize",
    label: "How many people will use Finza?",
    options: [
      { value: "solo", label: "Just me" },
      { value: "2-5", label: "2–5 people" },
      { value: "6-15", label: "6–15 people" },
      { value: "16+", label: "16 or more" },
    ],
  },
  {
    id: "payroll",
    label: "Do you need payroll?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "Not right now" },
      { value: "soon", label: "Soon" },
    ],
  },
  {
    id: "accountingReports",
    label: "Do you need accounting reports?",
    options: [
      { value: "basic", label: "Basic income and expense visibility" },
      { value: "detailed", label: "Detailed management reports" },
      { value: "full", label: "Full accounting and ledger control" },
    ],
  },
  {
    id: "customerStatements",
    label: "Do you need customer statements?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "ghanaTax",
    label: "Do you need Ghana VAT / levy support?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "not-yet", label: "Not yet" },
      { value: "unsure", label: "Unsure — I want guidance" },
    ],
  },
  {
    id: "setupHelp",
    label:
      "Do you want help setting up your business profile, taxes, documents, and payment details?",
    options: [
      { value: "guided", label: "Yes — guided onboarding" },
      { value: "self", label: "I'll set up myself" },
    ],
  },
];

export function formatPlanFitAnswersForDisplay(answers: PlanFitAnswers): string {
  return PLAN_FIT_QUESTIONS.map((q) => {
    const value = answers[q.id];
    const label = q.options.find((o) => o.value === value)?.label ?? value;
    return `${q.label} ${label}`;
  }).join("\n");
}
