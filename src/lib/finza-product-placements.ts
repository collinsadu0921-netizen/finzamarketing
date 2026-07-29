import type { FinzaProductAssetId } from "@/lib/finza-product-assets";

/**
 * Suggested Phase 3 placements. Wire with `<ProductProofImage assetId="..." />` or
 * `<ProductProofStrip assetIds={[...]} />` once files exist under `public/images/finza/`.
 *
 * Registry: `src/lib/finza-product-assets.ts`
 * Component: `src/components/product-proof-image.tsx`
 */

export type FinzaProductProofPageKey =
  | "homepage"
  | "pricing"
  | "invoicing"
  | "invoice-tracking"
  | "bookkeeping"
  | "payroll"
  | "vat-tax"
  | "security"
  ;

export type FinzaProductProofPlacement = {
  page: FinzaProductProofPageKey;
  route: string;
  file: string;
  sectionHint: string;
  assetIds: FinzaProductAssetId[];
  notes: string;
};

export const FINZA_PRODUCT_PROOF_PLACEMENTS: FinzaProductProofPlacement[] = [
  {
    page: "homepage",
    route: "/",
    file: "src/app/page.tsx",
    sectionHint: "After HomeWorkflowSection or before HomeTrustAndCtaSection",
    assetIds: ["dashboard", "customer-statement"],
    notes: "Hero and product proof use finza-dashboard-hero.webp.",
  },
  {
    page: "pricing",
    route: "/pricing",
    file: "src/app/pricing/page.tsx",
    sectionHint: "After PricingTiers or before PlanFitQuestionnaire",
    assetIds: ["dashboard", "invoice-sample"],
    notes: "Compact proof strip reinforcing plan comparison with real UI.",
  },
  {
    page: "invoicing",
    route: "/invoicing-software-ghana",
    file: "src/app/invoicing-software-ghana/page.tsx",
    sectionHint: "After invoice creation section (Section 2)",
    assetIds: ["invoice-create", "invoice-sample", "receipt-payment"],
    notes: "Two-up strip: create flow + finished document; payment proof below or in Section 3.",
  },
  {
    page: "invoice-tracking",
    route: "/invoice-tracking-software-ghana",
    file: "src/app/invoice-tracking-software-ghana/page.tsx",
    sectionHint: "After partial payments section",
    assetIds: ["customer-statement", "receipt-payment"],
    notes: "Collections-focused proof; avoid duplicating invoice-create hero messaging.",
  },
  {
    page: "bookkeeping",
    route: "/bookkeeping-software-ghana",
    file: "src/app/bookkeeping-software-ghana/page.tsx",
    sectionHint: "After document capture section",
    assetIds: ["expenses", "reports-export"],
    notes: "Weekly records + export handoff for accountant review.",
  },
  {
    page: "payroll",
    route: "/payroll-software-ghana",
    file: "src/app/payroll-software-ghana/page.tsx",
    sectionHint: "After payroll workflow section",
    assetIds: ["payroll"],
    notes: "Single full-width proof; no metrics or compliance claims in caption.",
  },
  {
    page: "vat-tax",
    route: "/vat-software-ghana",
    file: "src/app/vat-software-ghana/page.tsx",
    sectionHint: "After Ghana tax lines section",
    assetIds: ["tax-settings", "invoice-sample"],
    notes: "Settings + document example; keep tax disclaimer nearby.",
  },
  {
    page: "security",
    route: "/security",
    file: "src/app/security/page.tsx",
    sectionHint: "Near roles/permissions content",
    assetIds: ["user-roles-security"],
    notes: "About page can reuse same asset if a dedicated about proof section is added later.",
  },
];

export function getPlacementsForPage(page: FinzaProductProofPageKey): FinzaProductProofPlacement | undefined {
  return FINZA_PRODUCT_PROOF_PLACEMENTS.find((p) => p.page === page);
}
