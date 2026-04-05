const BASE = "https://www.finza.africa";

export const organizationAndWebsiteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Finza",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/og-image.png`,
      },
      sameAs: [
        "https://twitter.com/finzagh",
        "https://www.linkedin.com/company/finzaafrica",
        "https://www.instagram.com/finzaafrica/",
        "https://www.tiktok.com/@finzaafrica",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      name: "Finza",
      url: BASE,
      publisher: { "@id": `${BASE}/#organization` },
    },
  ],
};

/** SoftwareApplication for accounting hub — matches /accounting-software-ghana on-page claims. */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Finza",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Accounting Software",
    operatingSystem: "Web",
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    description:
      "Accounting software for Ghana: reports and tax summaries in GHS, collaboration with accountants, invoices and quotes in one place. Ghana tax lines (VAT, NHIL, GETFund) supported where applicable.",
    url: `${BASE}/accounting-software-ghana`,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "149",
      highPrice: "949",
      priceCurrency: "GHS",
      offerCount: "3",
    },
    publisher: { "@id": `${BASE}/#organization` },
  };
}

export function breadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function faqPageSchema(
  mainEntity: { questionName: string; acceptedAnswerText: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity.map((q) => ({
      "@type": "Question",
      name: q.questionName,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.acceptedAnswerText,
      },
    })),
  };
}

/** Must match homepage FAQ accordion exactly. */
export const homePageFaqForSchema = [
  {
    questionName: "Is Finza for small businesses in Ghana?",
    acceptedAnswerText:
      "Yes. Finza is for small businesses and service companies in Ghana that want to send invoices online, track payments in GHS, and manage bookkeeping without spreadsheet chaos. Accountants managing Ghanaian clients can also use Finza for cleaner client files.",
  },
  {
    questionName: "How does Finza handle Ghana tax lines?",
    acceptedAnswerText:
      "Finza supports common Ghana tax line presentation on invoices and activity—including VAT, NHIL, and GETFund where applicable. What applies depends on your business and registration; confirm with your accountant or GRA.",
  },
  {
    questionName: "Can my accountant work with my Finza data?",
    acceptedAnswerText:
      "Yes. Finza is built so accountants can review organized records, tax summaries, and reports instead of rebuilding from PDFs and scattered sheets.",
  },
  {
    questionName: "Do I need to pay before trying Finza?",
    acceptedAnswerText:
      "No. Start with a free trial from pricing—no card required to begin. You choose a paid plan in GHS when you are ready.",
  },
  {
    questionName: "Where can I see full features and plans?",
    acceptedAnswerText:
      "See the Features page for capabilities and the Pricing page for Service workspace plans in GHS (Essentials, Professional, Business).",
  },
  {
    questionName: "What is Finza Assist?",
    acceptedAnswerText:
      "Finza Assist is an in-app, Ghana-aware copilot inside Finza. It explains Ghana-oriented VAT, withholding tax (WHT), PAYE, and bookkeeping using read-only workspace data and server-verified lookups when you need authoritative numbers—for example this month’s payments vs expenses, invoice and bill search, customers, open receivables (including overdue), invoice detail on the screen you are viewing, your tax profile, payroll run summaries, expense totals by category, and—where you have access and accounting is initialized—profit and loss and balance sheet summaries. It helps you understand and act without posting entries or changing records automatically: assistant tools are read-only, receipt OCR adds suggested text to the conversation only until you save an expense or bill yourself, and suggested links may open create forms with fields pre-filled for you to review and save. This is educational support—not tax or legal advice. During onboarding, a separate assistant gives short structured help from your business profile and step—without live ledger tools.",
  },
];

/** Must match /accounting-software-ghana FAQ accordion exactly. */
export const accountingSoftwareGhanaFaqForSchema = [
  {
    questionName: "What reports do I get with accounting software in Ghana?",
    acceptedAnswerText:
      "You get profit and position views in Ghana cedis (GHS), plus tax-related summaries that help you and your accountant see VAT, NHIL, and GETFund where applicable—without blending everything into one mystery total.",
  },
  {
    questionName: "How does Finza help my accountant?",
    acceptedAnswerText:
      "Your accountant gets cleaner records, clearer period work, and less time fixing spreadsheets. They can review, adjust, and support closing the books instead of reconstructing them.",
  },
  {
    questionName: "Is Ghana tax treatment the same for every business?",
    acceptedAnswerText:
      "No. Tax lines and registration depend on your business and supply type. Finza supports common presentations where applicable; your accountant or GRA confirms what applies to you.",
  },
  {
    questionName: "Can service businesses in Ghana use Finza?",
    acceptedAnswerText:
      "Yes. Service companies are a core fit—especially when you invoice often and need customer balances and reports in one system. See pricing for plans in GHS.",
  },
];

/** Must match /invoicing-software-ghana FAQ accordion exactly. */
export const invoicingSoftwareGhanaFaqForSchema = [
  {
    questionName: "Can I send invoices online in Ghana?",
    acceptedAnswerText:
      "Yes. You can create and send professional invoices online in Ghana cedis (GHS), with clear totals and tax lines where applicable for your business.",
  },
  {
    questionName: "Can I track unpaid invoices in GHS?",
    acceptedAnswerText:
      "Yes. You see outstanding balances per customer, which invoices are unpaid or overdue, and when payments arrive—so collections are not a manual list.",
  },
  {
    questionName: "Do invoices show VAT, NHIL, and GETFund separately?",
    acceptedAnswerText:
      "Where applicable, Finza can show Ghana tax lines separately on invoices so customers see a clear breakdown. Exact treatment depends on your registration and supply type.",
  },
  {
    questionName: "Is invoicing only for big companies?",
    acceptedAnswerText:
      "No. Small businesses and service companies in Ghana use online invoicing to look professional and stay on top of who owes what.",
  },
];

/** Must match /quotation-software-ghana FAQ accordion exactly. */
export const quotationSoftwareGhanaFaqForSchema = [
  {
    questionName: "Can a quote turn into an invoice without retyping?",
    acceptedAnswerText:
      "Yes. After approval, you move from quotation to invoice in the same system so line items and GHS totals stay consistent.",
  },
  {
    questionName: "How do quotations reduce disputes?",
    acceptedAnswerText:
      "Clear scope, line items, and approved totals in GHS mean fewer arguments about what was agreed before work starts.",
  },
  {
    questionName: "Are tax lines shown on quotations?",
    acceptedAnswerText:
      "Where applicable, quotations can reflect common Ghana tax line presentation. Final treatment depends on your business and registration—confirm with your accountant.",
  },
  {
    questionName: "Who is quotation software for in Ghana?",
    acceptedAnswerText:
      "Service businesses that sell on proposals—agencies, consultants, contractors, and professional firms—before they bill.",
  },
];

/** Must match /bookkeeping-software-ghana FAQ accordion exactly. */
export const bookkeepingSoftwareGhanaFaqForSchema = [
  {
    questionName: "What does bookkeeping software help me do each week?",
    acceptedAnswerText:
      "Record sales and expenses as they happen, categorize spending, and stay current in GHS—so you are not catching up only at month-end.",
  },
  {
    questionName: "How do small businesses in Ghana stay current?",
    acceptedAnswerText:
      "Use one place for money in and out, reconcile regularly, and keep receipts organized. Finza keeps activity together instead of splitting it across apps and sheets.",
  },
  {
    questionName: "Does bookkeeping include tax visibility?",
    acceptedAnswerText:
      "You can see tax-related amounts on activity where applicable. Filing positions depend on your business—your accountant confirms what applies.",
  },
  {
    questionName: "Can my accountant review my bookkeeping in Finza?",
    acceptedAnswerText:
      "Yes. Accountants managing clients save time when daily recording already happened in a structured system.",
  },
];

/** Must match /payroll-software-ghana FAQ accordion exactly. */
export const payrollSoftwareGhanaFaqForSchema = [
  {
    questionName: "Does Finza support payroll for businesses in Ghana?",
    acceptedAnswerText:
      "Yes. Finza is built for Ghana payroll: monthly payroll runs, PAYE and SSNIT calculations based on your payroll setup, approval before payroll becomes official, and payslips you can share by email or WhatsApp—without positioning the product as a full HR suite or global payroll.",
  },
  {
    questionName: "Does Finza calculate PAYE and SSNIT?",
    acceptedAnswerText:
      "Yes. PAYE follows Ghana progressive tax bands on taxable income from gross pay and applicable deductions, where applicable. SSNIT uses employee and employer contributions based on basic salary, according to the payroll inputs and staff type. Calculations use the payroll month as the effective date. Confirm final positions with your accountant or the relevant authorities.",
  },
  {
    questionName: "Can Finza handle bonus and overtime in payroll?",
    acceptedAnswerText:
      "Yes. Bonus and overtime can be included in the payroll run, with tax treatment that can differ depending on the payroll case and how items are entered. Your setup and inputs determine how they flow—work with your accountant where you are unsure.",
  },
  {
    questionName: "Can I send payslips to employees?",
    acceptedAnswerText:
      "Yes. After payroll is approved, you can generate payslips and send them through channels your team already uses—email or WhatsApp—so staff receive a clear breakdown without manual document prep for every person.",
  },
  {
    questionName: "Does payroll update accounting records?",
    acceptedAnswerText:
      "After you approve payroll, records become official in Finza and totals are calculated from the approved run. Approved payroll can post into accounting so staff costs stay aligned with your books—subject to your plan and configuration.",
  },
  {
    questionName: "Can I track salary advances?",
    acceptedAnswerText:
      "Yes. Salary advances can be recorded and repayment tracked against approved or locked payroll so advances are visible in the system instead of handled off-book.",
  },
  {
    questionName: "Can different team members have different payroll permissions?",
    acceptedAnswerText:
      "Yes. Role-based payroll permissions let you separate who can view payroll, create runs, approve or lock payroll, and generate payslips—so owners can delegate work without giving everyone approval control.",
  },
];

/** Must match /accounting-software-accra FAQ accordion exactly. */
export const accountingSoftwareAccraFaqForSchema = [
  {
    questionName: "Is Finza suitable for businesses in Accra?",
    acceptedAnswerText:
      "Yes. Finza is built for Ghana businesses operating from Accra and anywhere else in the country—cloud software with plans in GHS. It fits growing companies and professional service firms that invoice often, record expenses, and need reports and tax summaries without spreadsheet chaos.",
  },
  {
    questionName: "Can Finza handle accounting in Ghana cedis?",
    acceptedAnswerText:
      "Yes. Amounts, customer balances, and reports are in Ghana cedis (GHS). Tax-related summaries can reflect VAT, NHIL, and GETFund where applicable to your setup—confirm final treatment with your accountant or GRA.",
  },
  {
    questionName: "Does Finza support invoices and reports together?",
    acceptedAnswerText:
      "Yes. Invoicing, payments, and expenses feed the same workspace as profit and position views—so you are not reconciling a billing tool against a separate report file each month.",
  },
  {
    questionName: "Can accountants use Finza with business owners?",
    acceptedAnswerText:
      "Yes. Owners and operators can record day-to-day activity; accountants can review organized records, tax summaries, and reports instead of rebuilding from PDFs and chat threads.",
  },
];

/** Must match /invoicing-software-kumasi FAQ accordion exactly. */
export const invoicingSoftwareKumasiFaqForSchema = [
  {
    questionName: "Can I send invoices in GHS with Finza?",
    acceptedAnswerText:
      "Yes. You create and send professional invoices in Ghana cedis (GHS), with tax lines shown separately where applicable for your business—not one blended tax column by default.",
  },
  {
    questionName: "Can Finza help track unpaid invoices?",
    acceptedAnswerText:
      "Yes. You see outstanding balances by customer, which invoices are unpaid or overdue, and when payments are recorded—so collections are not a separate spreadsheet.",
  },
  {
    questionName: "Is Finza suitable for service businesses in Kumasi?",
    acceptedAnswerText:
      "Yes. Service companies, contractors, and growing SMEs in Kumasi that bill clients regularly are a strong fit—especially when quotes become invoices without retyping.",
  },
  {
    questionName: "Can quotes and invoices work together?",
    acceptedAnswerText:
      "Yes. After a quotation is approved, you can move to invoicing in the same system so line items and agreed totals in GHS stay consistent.",
  },
];

/** Must match /payroll-software-tema FAQ accordion exactly. */
export const payrollSoftwareTemaFaqForSchema = [
  {
    questionName: "Does Finza support payroll for employers in Tema?",
    acceptedAnswerText:
      "Yes. Employers in Tema use the same Ghana payroll product as businesses elsewhere: monthly runs, PAYE and SSNIT based on your setup, approval before payroll is official, and payslips by email or WhatsApp.",
  },
  {
    questionName: "Can Finza calculate PAYE and SSNIT?",
    acceptedAnswerText:
      "Yes. PAYE follows Ghana progressive bands on taxable income where applicable; SSNIT uses employee and employer contributions from basic salary according to payroll inputs. Confirm final positions with your accountant or the relevant authorities.",
  },
  {
    questionName: "Can I send payslips to employees?",
    acceptedAnswerText:
      "Yes. After you approve payroll, you can generate payslips and send them by email or WhatsApp so staff see gross pay, deductions, and net pay clearly.",
  },
  {
    questionName: "Does payroll connect to accounting records?",
    acceptedAnswerText:
      "After approval, payroll records are official in Finza and approved payroll can post into accounting so staff costs align with your books—subject to your plan and configuration.",
  },
];

/** PAA-style questions — must match on-page accordion on accounting / invoicing / bookkeeping hubs. */
export const accountingSoftwareGhanaPaaFaqForSchema = [
  {
    questionName: "What is the best accounting software in Ghana?",
    acceptedAnswerText:
      "The best fit depends on your business: invoicing frequency, whether you need clear VAT/NHIL/GETFund lines, and how you work with an accountant. Compare options in our buyer guide, then trial software that keeps quotes, invoices, and reports in one place in GHS.",
  },
  {
    questionName: "Do I need accounting software for a small business?",
    acceptedAnswerText:
      "If you invoice clients, track expenses, or work with an accountant, software beats scattered spreadsheets—especially when you need consistent GHS balances and tax-ready summaries. Start small with weekly habits and grow into full reporting.",
  },
  {
    questionName: "How does VAT work in accounting software?",
    acceptedAnswerText:
      "Good tools show VAT, NHIL, and GETFund as separate lines where applicable, tied to real transactions—not one blended tax number. Your registration and supply type decide what you charge or claim; confirm with your accountant or GRA.",
  },
  {
    questionName: "Can I track invoices and expenses together?",
    acceptedAnswerText:
      "Yes. Finza connects invoicing, payments, purchases, and reporting so profit and receivables read from the same activity—without manual merges each month.",
  },
];

export const invoicingSoftwareGhanaPaaFaqForSchema = [
  {
    questionName: "What is the best invoicing software in Ghana?",
    acceptedAnswerText:
      "Look for GHS-first invoices, clear unpaid balances, optional quotation-to-invoice flow, and tax lines where applicable. The best tool is the one your team actually uses—start with a free trial and real customer data.",
  },
  {
    questionName: "Can small businesses send invoices online in Ghana?",
    acceptedAnswerText:
      "Yes. Online invoicing helps small businesses look professional, track who paid, and reduce version chaos in email or WhatsApp. Finza is built for Ghana cedis and common Ghana tax presentations.",
  },
  {
    questionName: "How do I track unpaid invoices in GHS?",
    acceptedAnswerText:
      "Use one system that lists open invoices by customer, shows amounts in Ghana cedis, and updates when payments arrive—so collections are not a separate spreadsheet.",
  },
  {
    questionName: "Can invoicing and accounting work in one system?",
    acceptedAnswerText:
      "Yes. When invoices and payments live in the same file as your reports, you avoid reconciling two sources. Finza ties billing to bookkeeping and accounting views.",
  },
];

export const bookkeepingSoftwareGhanaPaaFaqForSchema = [
  {
    questionName: "What does bookkeeping software do for a small business?",
    acceptedAnswerText:
      "It captures sales, expenses, and payments as they happen in GHS, keeps categories consistent, and gives your accountant organized activity instead of year-end panic.",
  },
  {
    questionName: "How often should I update my books in Ghana?",
    acceptedAnswerText:
      "Weekly is ideal for most SMEs—30 minutes to log new activity and check bank or MoMo against what you recorded. Waiting until month-end or December costs more time and mistakes.",
  },
  {
    questionName: "Can I track expenses with bookkeeping software?",
    acceptedAnswerText:
      "Yes. Record supplier bills, receipts, and outflows with categories your accountant recognizes. That discipline feeds clearer profit and tax conversations later.",
  },
  {
    questionName: "Does bookkeeping connect to accounting and invoicing?",
    acceptedAnswerText:
      "In Finza, daily recording supports invoicing and full accounting views—so you do not re-key the same numbers into separate files.",
  },
];

/** Must match pricing page FAQ accordion exactly (visible text only). */
export const pricingPageFaqForSchema = [
  {
    questionName: "How does the 14-day free trial work?",
    acceptedAnswerText:
      "Your first 14 days on any Service plan are free with no card required. At the end of that period, you'll be prompted to subscribe to continue. There is no automatic charge — you choose when to activate billing. If you don't subscribe, your workspace moves to read-only and your data remains intact.",
  },
  {
    questionName: "When am I billed?",
    acceptedAnswerText:
      "Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends. No partial refunds — you keep access through the end of the month you paid for. You can also save 17% by paying annually.",
  },
  {
    questionName: "Can I upgrade or downgrade my tier?",
    acceptedAnswerText:
      "Yes. You can move between Essentials, Professional, and Business tiers at any time. When upgrading, changes apply immediately and your billing is prorated. When downgrading, the new tier takes effect at the start of your next billing cycle.",
  },
  {
    questionName: "Who owns my data?",
    acceptedAnswerText:
      "You do. Your financial records belong to your business. You can export all transaction data and reports to CSV at any time. If you cancel, your data remains exportable for 90 days after your last billing period — after which it is deleted in accordance with our retention policy.",
  },
  {
    questionName: "What happens when I cancel?",
    acceptedAnswerText:
      "You retain full access until the end of your current billing period. After that, your workspace moves to read-only mode — you can view and export everything, but you cannot post new transactions. Your data is not deleted immediately. You can reactivate at any time by renewing a subscription.",
  },
];

export function articleSchema(input: {
  headline: string;
  description: string;
  urlPath: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${BASE}${input.urlPath}`,
    datePublished: input.datePublished,
    author: {
      "@type": "Organization",
      name: input.authorName,
      url: BASE,
    },
    publisher: { "@id": `${BASE}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}${input.urlPath}`,
    },
  };
}
