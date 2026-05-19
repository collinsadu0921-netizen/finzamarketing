import type { PlanTierId } from "@/lib/pricing-plans";

export type PlanFitAnswers = {
  businessType: string;
  documents: string;
  teamSize: string;
  payroll: string;
  accountingReports: string;
  customerStatements: string;
  ghanaTax: string;
  setupHelp: string;
};

export function recommendPlan(answers: PlanFitAnswers): PlanTierId {
  let score = 0;

  if (answers.teamSize === "2-5") score += 1;
  if (answers.teamSize === "6-15") score += 2;
  if (answers.teamSize === "16+") score += 4;

  if (answers.documents === "mix") score += 1;
  if (answers.documents === "proformas") score += 1;

  if (answers.payroll === "yes") score += 2;
  if (answers.payroll === "soon") score += 1;

  if (answers.accountingReports === "detailed") score += 1;
  if (answers.accountingReports === "full") score += 3;

  if (answers.customerStatements === "yes") score += 1;

  if (answers.ghanaTax === "yes" || answers.ghanaTax === "unsure") score += 1;

  if (answers.setupHelp === "guided") score += 2;

  if (score <= 2) return "essentials";
  if (score <= 5) return "professional";
  return "business";
}
