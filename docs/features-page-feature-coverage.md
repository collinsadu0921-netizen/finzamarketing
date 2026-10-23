# `/features` redesign — feature coverage audit

Scope: the public `/features` page and the production Finza application on `main`
(`C:\projects\finza-web\finza-web`, `main` at `f3790e9`). The working tree used for the
application audit was on `fix/receipt-ocr-opensource`; route existence and tier
gating below were checked against `main`, not the dirty branch.

No feature coverage table was supplied with the request. This audit is therefore
based on the production app's routes, sidebar tier map, entitlement guards, and
the app's own feature inventory documents.

## Availability definitions

- **Essentials** — production Service workspace tier `starter`.
- **Professional** — production Service workspace tier `professional`.
- **Business** — production Service workspace tier `business`.
- **Workspace-gated** — production, but requires a specific workspace or
  integration configuration. Not advertised as generally available.
- **Excluded** — implemented for another workspace (Retail or Accounting firm)
  and deliberately not presented on `/features` as a general business capability.
- **Unavailable** — not implemented on `main`; not advertised.

## Coverage matrix

| Area | Capability | Production evidence | Availability | `/features` treatment |
|---|---|---|---|---|
| Overview | One dashboard for revenue, expenses, receivables, payables, cash, activity, ledger health | `app/service/dashboard/page.tsx`, service dashboard cockpit | Essentials | Overview section and hero summary |
| Sales | Customers and customer history | `/service/customers`, customer detail and statement routes | Essentials | Sales and payments |
| Sales | Proposals | `/service/proposals` | Essentials | Sales and invoicing |
| Sales | Quotes / estimates | `/service/quotes`, quote public route | Essentials | Sales and invoicing |
| Sales | Proforma invoices | `/service/proforma` | Essentials | Sales and invoicing |
| Sales | Invoices with line items, due dates, discounts and tax lines | `/service/invoices`, invoice document components | Essentials | Sales and invoicing |
| Sales | Foreign-currency invoice entry, booked in GHS | invoice create screen, currency toggle | Essentials | Sales and invoicing |
| Sales | Recurring invoices | `/service/recurring` | Essentials | Sales and invoicing |
| Sales | Reusable services catalogue | `/service/services` | Essentials | Sales and invoicing |
| Sales | PDF, email, WhatsApp and tokenised public document links | `/invoice-public/[token]`, `/quote-public/[token]`, `/proforma-public/[token]`, `/receipt-public/[token]`, send modals | Essentials | Sales and invoicing |
| Payments | Record full and partial payments | `/service/payments` | Essentials | Payments and receivables |
| Payments | Receipts connected to invoices | `/service/payments`, public receipt route | Essentials | Payments and receivables |
| Payments | Customer statements and running balances | `/service/customers/[id]/statement`, statement preview | Essentials | Payments and receivables |
| Payments | Credit notes | `/service/credit-notes` | Essentials | Payments and receivables |
| Payments | Hubtel checkout on invoices using the business's own merchant account | `/pay/[id]`, Hubtel settings and API routes | Workspace-gated (own Hubtel merchant account and credentials) | Payments and receivables, clearly scoped |
| Payments | Mobile Money details shown on an invoice and recorded manually | invoice payment instructions | Essentials | Mentioned only as an alternative inside the Hubtel note |
| Expenses | Expense records with categories and receipts | `/service/expenses` | Essentials | Expenses and suppliers |
| Expenses | Incoming documents: upload/email, extraction, review, link | `/service/incoming-documents`, document APIs | Essentials | Expenses and suppliers |
| Expenses | Supplier directory | `/service/suppliers` | Professional | Expenses and suppliers |
| Expenses | Supplier bills and payable tracking | `/service/bills` | Professional | Expenses and suppliers |
| Expenses | Supplier statements | `/service/suppliers/[name]/statement` | Professional | Expenses and suppliers |
| Accounting | Profit and loss | service reports | Essentials | Accounting and reports |
| Accounting | Balance sheet | service reports | Essentials | Accounting and reports |
| Accounting | VAT report | `/reports/vat` | Essentials | Accounting and reports |
| Accounting | Cash flow | service reports | Professional | Accounting and reports |
| Accounting | Changes in equity | service reports | Professional | Accounting and reports |
| Accounting | Fixed assets and depreciation | `/service/assets` | Professional | Accounting and reports |
| Accounting | VAT returns records | `/vat-returns` | Professional | Accounting and reports |
| Accounting | WHT | `/service/accounting/wht` | Professional | Accounting and reports |
| Accounting | Accounting activity/audit log | `/service/accounting/audit` | Professional | Accounting and reports, controls |
| Accounting | General ledger | `/service/reports/general-ledger` | Business | Accounting and reports |
| Accounting | Journal entries | `/service/ledger` | Business | Accounting and reports |
| Accounting | Chart of accounts | `/service/accounting/chart-of-accounts` | Business | Accounting and reports |
| Accounting | Trial balance | `/service/reports/trial-balance` | Business | Accounting and reports |
| Accounting | Reconciliation and bank reconciliation | `/service/accounting/reconciliation`, `/service/accounting/bank-reconciliation` | Business | Accounting and reports |
| Accounting | Period close, lock and reopen | `/service/accounting/periods` | Business | Accounting and reports, controls |
| Accounting | CIT provisions | `/service/accounting/cit` | Business | Accounting and reports |
| Accounting | Loans, equity and owner contributions | `/service/accounting/loan`, `/service/accounting/contribution` | Business | Accounting and reports |
| Accounting | Adjustment journals | `/service/accounting/adjustment` | Business | Accounting and reports |
| Accounting | Exportable reports | report export routes and UI | Essentials / Professional / Business by report | Accounting and reports |
| Payroll | Monthly payroll runs | `/service/payroll` | Professional | Payroll |
| Payroll | Ghana PAYE, SSNIT/Tier 1 and Tier 2 calculations | payroll engine and run screens | Professional | Payroll |
| Payroll | Allowances, bonuses, overtime, deductions and salary advances | payroll run screens and advance routes | Professional | Payroll |
| Payroll | Approval, locking and payroll permissions | payroll run controls and permission registry | Professional | Payroll |
| Payroll | Employee payslips | `/payslips`, payroll run payslips | Professional | Payroll |
| Payroll | Salary-payment tracking and batch exports | payroll payment batches and export routes | Professional | Payroll |
| Payroll | PAYE, pension, net-salary, obligations and GRA DT 107A exports | payroll export routes | Professional | Payroll, described as exports/records rather than direct filing |
| Jobs | Jobs/projects with status, dates and customer | `/service/jobs`, job detail | Professional | Jobs, projects and materials |
| Jobs | Link jobs to proformas and invoices | job detail routes | Professional | Jobs, projects and materials |
| Jobs | Material allocation, usage, returns and job cost | job material routes and movement ledger | Professional | Jobs, projects and materials |
| Jobs | Materials inventory, cost/selling prices, reorder levels and low-stock visibility | `/service/materials`, movement history | Professional | Jobs, projects and materials |
| Administration | Business profile, branding, tax and payment settings | `/service/settings` | Essentials | Administration and security |
| Administration | Staff/team management | `/service/settings/team`, `/service/settings/staff` | Professional | Administration and security |
| Administration | Per-member permissions | permission registry and team settings | Professional | Administration and security |
| Administration | Accountant requests/collaboration | `/service/invitations` | Professional | Administration and security |
| Administration | Multiple business/workspace switching | `/select-workspace`, business context | Production | Administration and security |
| Administration | Full system audit log | `/audit-log` | Business | Administration and security |
| Administration | Tokenised public document access | public document token routes | Essentials | Administration and security, sales |
| Assurance | Finza Assist, read-only workspace Q&A | `components/AiAssistant.tsx`, `/api/ai`, read-only tools | Production | Finza Assist |
| Excluded | Retail POS, registers, cashier sessions, store switching | Retail workspace routes | Excluded | Not advertised |
| Excluded | Retail product inventory, variants, stock transfers, barcode/POS inventory | Retail workspace routes | Excluded | Not advertised |
| Excluded | Retail sales history, store reports and retail analytics | Retail workspace routes | Excluded | Not advertised |
| Excluded | Accounting firm control tower, client engagement, AFS, firm filing workflows | `/accounting/*` firm routes | Excluded | Not advertised |
| Excluded | Accounting workspace client books, firm tasks, firm documents | `/accounting/*` | Excluded | Not advertised |
| Unavailable | Project time tracking and timesheets | No production service route | Unavailable | Not advertised |
| Unavailable | CRM pipeline/deal stages | No production service route | Unavailable | Not advertised |
| Unavailable | Full project budgets, milestones and resource scheduling | No production service route | Unavailable | Not advertised |
| Unavailable | Purchase orders and supplier purchasing workflow | No service route | Unavailable | Not advertised |
| Unavailable | Automatic bank feeds / bank statement import | No verified service route | Unavailable | Not advertised |
| Unavailable | Direct GRA/SSNIT e-filing or direct tax remittance from Finza | Exports and obligation records exist; direct filing/payment does not | Unavailable | Not advertised |
| Workspace-gated | Foreign-currency invoice entry with GHS books | invoice create screen | Essentials | Sales and invoicing; not presented as multi-currency reporting |
| Unavailable | Multi-currency ledgers and reports | Only GHS books are verified | Unavailable | Not advertised |
| Unavailable | Self-service signup or automatic trial activation | `/request-trial` is the public path | Unavailable by policy | Final CTA links only to guided trial |

## Claims removed or corrected

- “Advanced controls” was too vague and could imply capabilities Finza does not
  expose. It is replaced by named controls: ledger, journals, trial balance,
  reconciliation, periods, CIT and audit log.
- “VAT filings”, “WHT” and “CIT” are presented as records/exports and accounting
  workflows, not as direct GRA submission or payment.
- Customer statements are part of receivables, not a substitute for financial
  reports.
- Jobs, materials, supplier bills, payroll and management reports carry a
  Professional plan label; ledger controls carry a Business label. They are not
  presented as available on every plan.
- Retail and accounting-firm capabilities are not presented as general business
  capabilities.
- The Payroll section refers to salary and statutory **records/exports**, not
  direct remittance.
- No service-trial duration, automatic access, self-service signup or new form is
  introduced.

## Visual presentation

The final page is text-first. It does not use product screenshots, screenshot
galleries, image dialogs, or decorative placeholders. Product screenshots remain
in the repository for other pages but are no longer used on `/features`.

Two supplied 9:16 product videos replace the two most useful screenshot areas:

| Section | Video | Poster | Duration | Treatment |
|---|---|---|---|---|
| Payments and receivables | `/videos/payment-recording.mp4` | `/videos/payment-recording-poster.jpg` | 0:12 | Compact portrait player, native controls, click-to-play |
| Payroll | `/videos/payroll-dt107a.mp4` | `/videos/payroll-dt107a-poster.jpg` | 0:16 | Compact portrait player, native controls, click-to-play |

- Both videos are 720 × 1280 (9:16), served from the repository, and are silent.
- The players use `preload="none"`, a poster, explicit width and height, and a
  9:16 aspect-ratio container to avoid layout shift.
- Autoplay and looping are disabled. Native controls provide keyboard-operable
  playback, volume, and fullscreen controls.
- The payroll caption states that Finza prepares records and exports for review
  and does not file or pay GRA automatically.
- The Payments section labels the video steps and keeps the Hubtel note scoped
  to the customer's own merchant account.

## Page mapping

| Required section | Page anchor |
|---|---|
| Hero | top of page |
| Overview | `#overview` |
| Sales and invoicing | `#sales` |
| Payments and receivables | `#payments` |
| Expenses and suppliers | `#expenses` |
| Accounting and reports | `#accounting` |
| Payroll | `#payroll` |
| Jobs, projects and inventory | `#jobs` |
| Administration and security | `#controls` |
| Finza Assist | `#finza-assist` |
| Final CTA | end of page |

## Verification checklist

- [x] All Essentials, Professional and Business capabilities in the matrix are
      represented on the page or in an expandable detail.
- [x] No Retail or Accounting firm capability is advertised.
- [x] No unavailable capability is advertised.
- [x] All restricted capabilities carry a plan or workspace qualifier.
- [x] Primary CTA remains `/request-trial`; secondary remains `/product-tour`.
- [x] SEO metadata, canonical, breadcrumb schema and analytics remain intact.
- [x] No oversized product screenshots or screenshot dialogs remain on
      `/features`.
- [x] Both supplied videos load, expose posters, play on demand, and preserve
      their original 9:16 aspect ratio.
- [x] Desktop, tablet and mobile layouts verified.
- [x] Lint, typecheck, build and relevant tests pass.

## Verification record

- `npm run lint` — pass.
- `npx tsc --noEmit` — pass.
- `npm run build` — pass; 72/72 static pages generated.
- Production-build Playwright/Chrome checks at `1440x1000`, `834x1112`, and
  `390x844`:
  - No horizontal document overflow at any viewport.
  - `main section` image count: 0. Screenshot-dialog “View larger” buttons: 0.
  - Two video elements. Both report `autoplay=false`, `loop=false`,
    `controls=true`, `preload="none"`, `playsInline=true`, and `tabIndex=0`.
  - Poster requests return `200`; video requests return `206`.
  - After playback: both report `720x1280`, `readyState=4`, and durations of 12
    and 16 seconds. Both are silent.
  - The videos can be focused and played; native controls remain available.
  - Anchor navigation places `#payments` at 96 px, below the sticky navigation
    bottom at 57 px.
  - All checked feature strings are present, including proposals/quotes/
    estimates/proformas, credit notes, supplier bills, incoming documents,
    general ledger, trial balance, DT 107A, materials inventory, audit log and
    Finza Assist.
  - Essentials, Professional and Business labels are present.
  - Primary CTA links resolve to `/request-trial`; secondary links resolve to
    `/product-tour`.
- Page height (full document):
  - `1440`: 9,069 → 6,532 px (−2,537 px, −28.0%)
  - `834`: 14,067 → 8,917 px (−5,150 px, −36.6%)
  - `390`: 15,533 → 11,752 px (−3,781 px, −24.3%)
- Screenshot artifacts (local, not committed):
  `C:\Users\colli\AppData\Local\Temp\finza-features-video\`.
  Before: `features-video-before-1440.png`, `features-video-before-834.png`,
  `features-video-before-390.png`.
  After: `features-video-final4-1440.png`, `features-video-final4-834.png`,
  `features-video-final4-390.png`.
- Section captures: `after-1440-{overview,payments,payroll,controls}.png` and
  `after-390-{overview,payments,payroll,controls}.png`.

