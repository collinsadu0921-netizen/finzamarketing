/** Shared payroll marketing copy — keep FAQ answers identical to on-page HTML. */

export const PAYROLL_PAGE_PATH = "/payroll-software-ghana";

export const PAYROLL_H1 = "Built-in payroll software for Ghanaian businesses";

export const PAYROLL_OPENING =
  "Manage monthly payroll inside Finza—from salary calculations and approvals to payslips, payment tracking, and accounting records. Available on Professional and Business plans.";

export const PAYROLL_HOME_HEADING = "Built-in payroll. Connected to your business.";

export const PAYROLL_HOME_DESCRIPTION =
  "Run monthly payroll, calculate Ghana PAYE and pension contributions, manage salary advances, and share employee payslips—all inside Finza. Keep salary payments and payroll costs connected to your business accounts.";

export const PAYROLL_HOME_CAPABILITIES = [
  "Monthly salary calculations.",
  "PAYE and pension breakdowns.",
  "Allowances, deductions, and advances.",
  "Approvals and employee payslips.",
  "Salary-payment tracking and accounting records.",
] as const;

export const PAYROLL_FEATURES_HEADING = "Run payroll from salary calculation to payslip.";

export const PAYROLL_WORKFLOW_STEPS = [
  "Prepare salaries",
  "Review calculations",
  "Approve payroll",
  "Generate payslips",
  "Record payments",
] as const;

export const PAYROLL_CAPABILITY_GROUPS = [
  {
    title: "Salary calculations, PAYE, and pensions",
    body: "Run monthly payroll with gross-to-net salary calculations. Finza calculates Ghana PAYE and employee and employer pension contributions, with SSNIT/Tier 1 and Tier 2 breakdowns for each run.",
  },
  {
    title: "Allowances, bonuses, overtime, and deductions",
    body: "Include allowances, bonuses, overtime, and deductions in the monthly run. Add run-specific salary adjustments with recorded reasons when a month needs a one-off change.",
  },
  {
    title: "Salary advances and repayments",
    body: "Record salary advances, set repayment arrangements, recover amounts through payroll, and track outstanding balances.",
  },
  {
    title: "Payroll review, approval, locking, and permissions",
    body: "Prepare payroll, review calculations, then approve and lock the run. Control who can view, prepare, approve, pay, and export payroll.",
  },
  {
    title: "Payslip generation, sharing, and printing",
    body: "Generate employee payslips, email them, share a WhatsApp link, and print or save PDF from the browser.",
  },
  {
    title: "Salary payments and payment batches",
    body: "Record salary payments against cash, bank, and mobile-money accounts. Track paid and outstanding amounts, and use payment batches with CSV schedules.",
  },
  {
    title: "Payroll and statutory exports",
    body: "Export payroll summary, net-salary, PAYE, GRA DT 107A, SSNIT/Tier 1, Tier 2, and obligations files for review and filing preparation.",
  },
  {
    title: "Connected accounting records",
    body: "Approved payroll can post payroll journals and payroll liabilities so salary costs sit in your business accounts.",
  },
] as const;

/** Must match the payroll page FAQ markup exactly. */
export const payrollSoftwareGhanaFaqForSchema = [
  {
    questionName: "Does Finza have built-in payroll?",
    acceptedAnswerText:
      "Yes. Finza includes built-in monthly payroll. You can calculate salaries, review Ghana PAYE and pension contributions, manage salary advances, generate payslips, record salary payments, and post approved payroll journals in the same workspace.",
  },
  {
    questionName: "Which plans include payroll?",
    acceptedAnswerText:
      "Built-in payroll is included in Professional and Business plans.",
  },
  {
    questionName: "Can Finza calculate Ghana PAYE and pension contributions?",
    acceptedAnswerText:
      "Yes. Finza calculates Ghana PAYE and employee and employer pension contributions, including SSNIT/Tier 1 and Tier 2 breakdowns, from the salary details in each monthly payroll run.",
  },
  {
    questionName: "Can I manage salary advances?",
    acceptedAnswerText:
      "Yes. You can record salary advances, set repayment arrangements, recover amounts through payroll, and track outstanding balances.",
  },
  {
    questionName: "Can I generate and share employee payslips?",
    acceptedAnswerText:
      "Yes. You can generate employee payslips, email them, share a WhatsApp link, and print or save them as PDF from the browser.",
  },
  {
    questionName: "Which payroll reports can I export?",
    acceptedAnswerText:
      "You can export payroll summary, net-salary, PAYE, GRA DT 107A, SSNIT/Tier 1, Tier 2, and obligations files, plus payment-batch CSV schedules.",
  },
  {
    questionName: "How does payroll connect to accounting?",
    acceptedAnswerText:
      "Approved payroll can post payroll journals and payroll liabilities so salary costs stay in your business accounts. You record salary payments against cash, bank, and mobile-money accounts and track paid versus outstanding amounts.",
  },
];
