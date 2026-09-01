import fs from "fs";
import path from "path";

/** Public path prefix for sanitized Finza product screenshots. */
export const FINZA_PRODUCT_IMAGE_DIR = "/images/finza";

export const FINZA_PRODUCT_ASSET_IDS = [
  "dashboard",
  "invoice-create",
  "invoice-sample",
  "receipt-payment",
  "customer-statement",
  "expenses",
  "payroll",
  "reports-export",
  "tax-settings",
  "user-roles-security",
] as const;

export type FinzaProductAssetId = (typeof FINZA_PRODUCT_ASSET_IDS)[number];

export type FinzaProductAssetUsage =
  | "homepage"
  | "pricing"
  | "invoicing"
  | "invoice-tracking"
  | "bookkeeping"
  | "payroll"
  | "vat-tax"
  | "security"
  | "about"
  | "demo";

export type FinzaProductAsset = {
  id: FinzaProductAssetId;
  /** Path under `/public`, served as `/images/finza/...` */
  src: string;
  filename: string;
  alt: string;
  title: string;
  description: string;
  /** Short line shown under the image; falls back to description when unset */
  caption?: string;
  /** Intrinsic dimensions for stable layout and `sizes` hints */
  width: number;
  height: number;
  intendedUsage: FinzaProductAssetUsage[];
};

const ASSETS: Record<FinzaProductAssetId, FinzaProductAsset> = {
  dashboard: {
    id: "dashboard",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/finza-dashboard-hero.webp`,
    filename: "finza-dashboard-hero.webp",
    alt: "Finza dashboard showing business records, invoices, payments, and reports",
    title: "A working view of your business records",
    description:
      "See invoices, payments, expenses, payroll, reports, and customer activity in one place, instead of jumping between spreadsheets and WhatsApp notes.",
    caption:
      "A central workspace for daily records, customer activity, and business visibility.",
    width: 2400,
    height: 1350,
    intendedUsage: ["homepage", "pricing", "demo"],
  },
  "invoice-create": {
    id: "invoice-create",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/invoice-create.png`,
    filename: "invoice-create.png",
    alt: "Finza invoice creation screen for preparing a customer invoice",
    title: "Create invoices from the same place you manage records",
    description:
      "Prepare invoices with customer details, line items, payment instructions, and the records your professional reviewer may need later.",
    caption: "Create and review invoice details before sending them to a customer.",
    width: 2400,
    height: 1350,
    intendedUsage: ["invoicing"],
  },
  "invoice-sample": {
    id: "invoice-sample",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/invoice-sample.png`,
    filename: "invoice-sample.png",
    alt: "Sample Finza invoice document showing totals and payment details",
    title: "Professional invoices customers can understand",
    description:
      "Show clear totals, payment details, and invoice information so customers know what they owe and how to pay.",
    caption: "A cleaner invoice format for customers, payment follow-up, and record keeping.",
    width: 2400,
    height: 1350,
    intendedUsage: ["invoicing", "pricing", "vat-tax"],
  },
  "receipt-payment": {
    id: "receipt-payment",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/receipt-payment.png`,
    filename: "receipt-payment.png",
    alt: "Finza payment and receipt screen showing customer payment records",
    title: "Record payments against the right customer",
    description:
      "Track paid, unpaid, partial, and overdue amounts so payment history stays connected to the invoice and customer.",
    caption: "Payment records stay connected to invoices and customer balances.",
    width: 2400,
    height: 1350,
    intendedUsage: ["invoicing", "invoice-tracking"],
  },
  "customer-statement": {
    id: "customer-statement",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/customer-statement.png`,
    filename: "customer-statement.png",
    alt: "Finza customer statement showing invoices, payments, and outstanding balances",
    title: "Customer balances without chasing scattered notes",
    description:
      "Use customer statements to review invoices, payments, credits, and outstanding balances before following up.",
    caption: "A clearer view of what each customer has been billed, paid, and still owes.",
    width: 2400,
    height: 1350,
    intendedUsage: ["homepage", "invoice-tracking"],
  },
  expenses: {
    id: "expenses",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/expenses.png`,
    filename: "expenses.png",
    alt: "Finza expenses screen showing business expenses and supplier records",
    title: "Keep expenses and supplier records in order",
    description:
      "Capture expenses, supplier bills, and supporting records so bookkeeping is not left until month end.",
    caption: "Daily expense records help keep bookkeeping cleaner before professional review.",
    width: 2400,
    height: 1350,
    intendedUsage: ["bookkeeping"],
  },
  payroll: {
    id: "payroll",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/payroll.png`,
    filename: "payroll.png",
    alt: "Finza payroll run showing Ghana PAYE, pension contributions, net salary, and payment status",
    title: "Built-in monthly payroll",
    description:
      "Run monthly payroll with Ghana PAYE, pension breakdowns, salary advances, payslips, and salary-payment recording.",
    caption: "Demo payroll run with PAYE, pensions, net salary, and payment tracking.",
    width: 2400,
    height: 1350,
    intendedUsage: ["payroll"],
  },
  "reports-export": {
    id: "reports-export",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/reports-export.png`,
    filename: "reports-export.png",
    alt: "Finza reports and export screen for professional review",
    title: "Reports prepared for review",
    description:
      "Give owners and professional reviewers a clearer view of records, balances, and exports without rebuilding everything from scattered files.",
    caption: "Reports and exports help prepare records for owner and professional review.",
    width: 2400,
    height: 1350,
    intendedUsage: ["bookkeeping"],
  },
  "tax-settings": {
    id: "tax-settings",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/tax-settings.png`,
    filename: "tax-settings.png",
    alt: "Finza tax settings screen showing Ghana tax line configuration where applicable.",
    title: "Tax settings",
    description:
      "Tax line settings used on VAT and tax-related pages to show how Ghana tax presentation is configured in the product.",
    width: 2400,
    height: 1350,
    intendedUsage: ["vat-tax"],
  },
  "user-roles-security": {
    id: "user-roles-security",
    src: `${FINZA_PRODUCT_IMAGE_DIR}/user-roles-security.png`,
    filename: "user-roles-security.png",
    alt: "Finza user roles and security settings for team access control.",
    title: "Roles and security",
    description:
      "User roles and security settings for the security page and trust-related product proof.",
    width: 2400,
    height: 1350,
    intendedUsage: ["security", "about"],
  },
};

export function getFinzaProductAsset(id: FinzaProductAssetId): FinzaProductAsset {
  return ASSETS[id];
}

export function getAllFinzaProductAssets(): FinzaProductAsset[] {
  return FINZA_PRODUCT_ASSET_IDS.map((id) => ASSETS[id]);
}

function publicPathForAsset(asset: FinzaProductAsset): string {
  return path.join(process.cwd(), "public", asset.src.replace(/^\//, ""));
}

/** True when the file exists on disk under `public/images/finza/`. Safe for build when missing. */
export function isFinzaProductAssetOnDisk(asset: FinzaProductAsset): boolean {
  try {
    return fs.existsSync(publicPathForAsset(asset));
  } catch {
    return false;
  }
}

export function getFinzaProductAssetsOnDisk(): FinzaProductAsset[] {
  return getAllFinzaProductAssets().filter(isFinzaProductAssetOnDisk);
}

export function listMissingFinzaProductAssetFilenames(): string[] {
  return getAllFinzaProductAssets()
    .filter((asset) => !isFinzaProductAssetOnDisk(asset))
    .map((asset) => asset.filename);
}
