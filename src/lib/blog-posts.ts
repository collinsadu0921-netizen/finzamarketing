export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  body: string;
}

/** Static blog content — replace or extend when CMS goes live */
export const blogPosts: BlogPost[] = [
  {
    slug: "ledger-first-accounting-ghana",
    title: "Why ledger-first accounting matters for Ghanaian businesses",
    excerpt:
      "Reports that are assembled from spreadsheets lag reality. A general ledger that updates with every transaction is the foundation GRA-ready records are built on.",
    publishedAt: "2026-03-01",
    author: "Finza",
    body: `## The problem with report-first tools

Many tools let you record sales and expenses, then *generate* reports later. If the underlying entries are not true double-entry journal lines, the trial balance is a fiction until someone fixes it.

## What ledger-first means

Every sale, invoice, payment, and expense in Finza posts as a balanced journal entry. Debits equal credits. Your income statement and balance sheet read from that same ledger — not from a separate reporting layer that can drift.

## Ghana context

Ghana applies VAT (15%), NHIL (2.5%), and GETFund (2.5%) on applicable supplies. Under rules effective **1 January 2026**, NHIL and GETFund are treated as **input tax deductions** alongside VAT. Separating each levy in the ledger keeps your GRA-facing position clear.

## Takeaway

If your goal is audit-ready books and accurate tax position, start from the ledger. Everything else — VAT reports, aged receivables, period close — follows naturally.

[Explore accounting software for Ghana](/accounting-software-ghana) · [VAT software](/vat-software-ghana)`,
  },
  {
    slug: "vat-nhil-getfund-2026-framework",
    title: "Ghana VAT, NHIL, and GETFund after 1 January 2026",
    excerpt:
      "Rates stay familiar: 15% VAT, 2.5% NHIL, 2.5% GETFund. The framework change that matters for bookkeeping is how NHIL and GETFund are treated on the input side.",
    publishedAt: "2026-03-10",
    author: "Finza",
    body: `## Rates (unchanged headline numbers)

- **VAT:** 15%  
- **NHIL:** 2.5%  
- **GETFund:** 2.5%

## What changed conceptually

Effective **1 January 2026**, Ghana’s revised VAT framework treats **NHIL and GETFund as input tax deductions** (alongside VAT where applicable). Your software should track output and input for each levy distinctly — not bundle levies into a single “tax” line that you unravel at filing time.

## Practical bookkeeping

On purchases, input VAT, input NHIL, and input GETFund (where applicable) should post to identifiable accounts. On sales, output elements mirror that structure. Net positions roll into reports your accountant can reconcile to GRA expectations.

## Read more

[Full guide: VAT, NHIL, GETFund](/ghana-vat-nhil-getfund) · [How VAT works in Ghana](/how-vat-works-ghana)`,
  },
  {
    slug: "spreadsheets-to-ledger-migration",
    title: "Moving from spreadsheets to a real ledger without a big-bang import",
    excerpt:
      "You do not need to re-key five years of history on day one. Most businesses open a clean ledger with an opening trial balance and run forward.",
    publishedAt: "2026-03-15",
    author: "Finza",
    body: `## The opening balance approach

Finza is designed so you can **start from a defined opening position**: opening balances per key accounts (cash, receivables, payables, equity). From that point, every transaction is posted with proper double-entry.

## Why not import everything?

Spreadsheet history is often inconsistent — mixed cash and accrual, VAT rounded incorrectly, deleted rows. Importing it verbatim recreates the problem inside a new system.

## What your accountant needs

A locked opening trial balance, clear period boundaries, and from that point forward: no silent edits — corrections via reversals. That is the standard Finza enforces.

[Accounting vs Excel in Ghana](/accounting-vs-excel-ghana) · [Pricing](/pricing)`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
