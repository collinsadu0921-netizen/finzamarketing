/**
 * Topic clusters for blog posts: each links to 2–3 related articles + one core product page.
 */

export interface BlogClusterLink {
  relatedSlugs: string[];
  core: { href: string; label: string };
}

export const blogClusterLinks: Record<string, BlogClusterLink> = {
  "how-to-create-invoice-in-ghana": {
    relatedSlugs: ["invoice-template-ghana", "invoice-vs-receipt-ghana", "how-to-manage-cash-flow-ghana"],
    core: { href: "/invoicing-software-ghana", label: "Finza invoicing software Ghana" },
  },
  "vat-nhil-getfund-explained-ghana": {
    relatedSlugs: ["nhil-and-getfund-explained-simply", "how-to-calculate-vat-ghana", "vat-nhil-getfund-2026-framework"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "bookkeeping-tips-small-businesses-ghana": {
    relatedSlugs: ["bookkeeping-checklist-ghana", "how-to-track-expenses-small-business-ghana", "accounting-mistakes-small-businesses-ghana"],
    core: { href: "/bookkeeping-software-ghana", label: "Bookkeeping software Ghana" },
  },
  "best-accounting-software-ghana": {
    relatedSlugs: ["ledger-first-accounting-ghana", "accounting-mistakes-small-businesses-ghana", "spreadsheets-to-ledger-migration"],
    core: { href: "/accounting-software-ghana", label: "Accounting software for Ghana" },
  },
  "ledger-first-accounting-ghana": {
    relatedSlugs: ["spreadsheets-to-ledger-migration", "accounting-mistakes-small-businesses-ghana", "best-accounting-software-ghana"],
    core: { href: "/accounting-software-ghana", label: "Accounting software for Ghana" },
  },
  "vat-nhil-getfund-2026-framework": {
    relatedSlugs: ["vat-nhil-getfund-explained-ghana", "how-to-calculate-vat-ghana", "when-to-register-for-vat-ghana"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "spreadsheets-to-ledger-migration": {
    relatedSlugs: ["ledger-first-accounting-ghana", "bookkeeping-checklist-ghana", "accounting-mistakes-small-businesses-ghana"],
    core: { href: "/accounting-software-ghana", label: "Accounting software for Ghana" },
  },
  "invoice-template-ghana": {
    relatedSlugs: ["how-to-create-invoice-in-ghana", "invoice-vs-receipt-ghana", "how-to-price-services-ghana"],
    core: { href: "/invoicing-software-ghana", label: "Invoicing software in Ghana" },
  },
  "how-to-calculate-vat-ghana": {
    relatedSlugs: ["vat-nhil-getfund-explained-ghana", "nhil-and-getfund-explained-simply", "when-to-register-for-vat-ghana"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "nhil-and-getfund-explained-simply": {
    relatedSlugs: ["vat-nhil-getfund-explained-ghana", "how-to-calculate-vat-ghana", "vat-nhil-getfund-2026-framework"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "how-to-track-expenses-small-business-ghana": {
    relatedSlugs: ["bookkeeping-checklist-ghana", "bookkeeping-tips-small-businesses-ghana", "accounting-mistakes-small-businesses-ghana"],
    core: { href: "/bookkeeping-software-ghana", label: "Bookkeeping software Ghana" },
  },
  "bookkeeping-checklist-ghana": {
    relatedSlugs: ["bookkeeping-tips-small-businesses-ghana", "how-to-track-expenses-small-business-ghana", "spreadsheets-to-ledger-migration"],
    core: { href: "/bookkeeping-software-ghana", label: "Bookkeeping software Ghana" },
  },
  "accounting-mistakes-small-businesses-ghana": {
    relatedSlugs: ["bookkeeping-tips-small-businesses-ghana", "ledger-first-accounting-ghana", "how-to-manage-cash-flow-ghana"],
    core: { href: "/accounting-software-ghana", label: "Accounting software for Ghana" },
  },
  "how-to-price-services-ghana": {
    relatedSlugs: ["invoice-template-ghana", "how-to-manage-cash-flow-ghana", "how-to-create-invoice-in-ghana"],
    core: { href: "/quotation-software-ghana", label: "Quotation software Ghana" },
  },
  "how-to-manage-cash-flow-ghana": {
    relatedSlugs: ["how-to-create-invoice-in-ghana", "invoice-vs-receipt-ghana", "accounting-mistakes-small-businesses-ghana"],
    core: { href: "/invoicing-software-ghana", label: "Invoicing software in Ghana" },
  },
  "invoice-vs-receipt-ghana": {
    relatedSlugs: ["invoice-template-ghana", "how-to-create-invoice-in-ghana", "how-to-manage-cash-flow-ghana"],
    core: { href: "/invoicing-software-ghana", label: "Invoicing software in Ghana" },
  },
  "when-to-register-for-vat-ghana": {
    relatedSlugs: ["how-to-calculate-vat-ghana", "vat-nhil-getfund-explained-ghana", "vat-nhil-getfund-2026-framework"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "vat-mistakes-ghana-businesses-avoid": {
    relatedSlugs: ["vat-nhil-getfund-explained-ghana", "how-to-calculate-vat-ghana", "when-to-register-for-vat-ghana"],
    core: { href: "/vat-software-ghana", label: "VAT software for Ghana" },
  },
  "bookkeeping-issues-smes-ghana": {
    relatedSlugs: ["bookkeeping-tips-small-businesses-ghana", "bookkeeping-checklist-ghana", "spreadsheets-to-ledger-migration"],
    core: { href: "/bookkeeping-software-ghana", label: "Bookkeeping software Ghana" },
  },
  "invoice-errors-service-businesses-ghana": {
    relatedSlugs: ["how-to-create-invoice-in-ghana", "invoice-template-ghana", "invoice-vs-receipt-ghana"],
    core: { href: "/invoicing-software-ghana", label: "Invoicing software in Ghana" },
  },
};

export function getBlogClusterForSlug(slug: string): BlogClusterLink | undefined {
  return blogClusterLinks[slug];
}
