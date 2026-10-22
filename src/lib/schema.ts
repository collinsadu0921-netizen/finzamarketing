const BASE = "https://www.finza.africa";

export const organizationAndWebsiteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Finza",
      url: BASE,
      description:
        "Finza is accounting software for businesses in Ghana. It covers invoicing, bookkeeping, expenses, payroll, and financial reports in Ghana cedis.",
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/og-image.png`,
      },
      sameAs: [
        "https://twitter.com/finzagh",
        "https://www.linkedin.com/company/finzaafrica",
        "https://www.instagram.com/finza.africa/",
        "https://www.tiktok.com/@finza.africa",
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

/** SoftwareApplication — visible, verified product capabilities. */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE}/#software`,
    name: "Finza",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Accounting Software",
    operatingSystem: "Web",
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    description:
      "Accounting software for Ghanaian businesses and SMEs. Create invoices in GHS, record payments, optionally accept online invoice payments through the business's own Hubtel account, track expenses and supplier bills, run monthly payroll, and review financial reports. Ghana tax lines (VAT, NHIL, GETFund, WHT) are supported where applicable.",
    url: BASE,
    featureList: [
      "Quotes, proforma invoices, invoices, receipts, and payment tracking in GHS",
      "Optional Hubtel Online Checkout on public invoices using the business's own Hubtel merchant account",
      "Recording of cash, bank, and mobile-money payments",
      "Expenses and incoming documents",
      "Supplier bills",
      "Built-in monthly payroll",
      "Ghana PAYE calculations",
      "Employee and employer pension contributions",
      "SSNIT/Tier 1 and Tier 2 breakdowns",
      "Salary advances and repayments",
      "Employee payslips with email and WhatsApp-link sharing",
      "Salary-payment recording against cash, bank, and mobile-money accounts",
      "Payroll summary, PAYE, GRA DT 107A, SSNIT, and obligations exports",
      "Approved payroll journals and payroll liabilities",
      "Profit and Loss, Balance Sheet, and VAT report",
      "General ledger, journals, and period locking",
      "Ghana tax lines (VAT, NHIL, GETFund, WHT) where applicable",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Ghanaian businesses and SMEs",
      geographicArea: { "@type": "Country", name: "Ghana" },
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
    questionName: "What is Finza?",
    acceptedAnswerText:
      "Finza is accounting software for businesses in Ghana. It is used to create invoices and quotes, track payments, record expenses and supplier bills, run payroll, and review financial reports in Ghana cedis (GHS).",
  },
  {
    questionName: "Is Finza for small businesses in Ghana?",
    acceptedAnswerText:
      "Yes. Finza is accounting software for small businesses, growing businesses, and other Ghanaian SMEs that want to send invoices, track payments in GHS, record expenses, and keep books without spreadsheet chaos. Accountants and other professional advisers can also review client records in Finza.",
  },
  {
    questionName: "Can customers pay invoices with Mobile Money?",
    acceptedAnswerText:
      "Yes. You can show Mobile Money or bank details on an invoice and record the payment yourself. If you connect your own Hubtel merchant account, customers can also pay from the public invoice page through Hubtel Online Checkout, including the Mobile Money methods available on that Hubtel account. Finza records the payment after Hubtel confirms it. Finza does not hold the funds.",
  },
  {
    questionName: "Does Finza work with Hubtel?",
    acceptedAnswerText:
      "Yes. A business can connect its own Hubtel API ID, API key, and merchant account so customers pay invoices on Hubtel checkout. Hubtel approval is required. These payments go to your own Hubtel merchant account, and Finza records the invoice payment after Hubtel confirms it.",
  },
  {
    questionName: "How does Finza handle Ghana tax lines?",
    acceptedAnswerText:
      "Finza supports common Ghana tax line presentation on invoices and activity—including VAT, NHIL, and GETFund where applicable. What applies depends on your business and registration; confirm with your professional adviser or GRA.",
  },
  {
    questionName: "Can my professional adviser work with my Finza data?",
    acceptedAnswerText:
      "Yes. Finza is built so professional advisers can review organized records, tax summaries, and reports instead of rebuilding from PDFs and scattered sheets.",
  },
  {
    questionName: "How do I start using Finza?",
    acceptedAnswerText:
      "Request a guided trial from the Finza website. Tell us about your business and the Finza team will contact you to understand your needs and arrange a guided trial.",
  },
  {
    questionName: "Where can I see Finza's features?",
    acceptedAnswerText:
      "See the Features page for capabilities. If you want help evaluating how those capabilities fit your business, request a guided trial and the Finza team will guide you.",
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
      "You get profit and position views in Ghana cedis (GHS), plus tax-related summaries that help you and your professional adviser see VAT, NHIL, and GETFund where applicable—without blending everything into one mystery total.",
  },
  {
    questionName: "How does Finza help my professional adviser?",
    acceptedAnswerText:
      "Your professional adviser gets cleaner records, clearer period work, and less time fixing spreadsheets. They can review, adjust, and support closing the books instead of reconstructing them.",
  },
  {
    questionName: "Is Ghana tax treatment the same for every business?",
    acceptedAnswerText:
      "No. Tax lines and registration depend on your business and supply type. Finza supports common presentations where applicable; your professional adviser or GRA confirms what applies to you.",
  },
  {
    questionName: "Can small businesses and SMEs in Ghana use Finza?",
    acceptedAnswerText:
      "Yes. Finza is built for Ghanaian businesses and SMEs that invoice customers, track expenses, and need reports in GHS. Small and growing businesses across Ghana can use it. Request a guided trial to see how Finza fits your business.",
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
      "No. Small businesses and growing SMEs in Ghana use online invoicing to look professional and stay on top of who owes what.",
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
      "Where applicable, quotations can reflect common Ghana tax line presentation. Final treatment depends on your business and registration—confirm with your professional adviser.",
  },
  {
    questionName: "Who is quotation software for in Ghana?",
    acceptedAnswerText:
      "Ghanaian businesses that price work before they bill, including small and growing businesses and owner-led teams that send quotes or proformas.",
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
      "You can see tax-related amounts on activity where applicable. Filing positions depend on your business—your professional adviser confirms what applies.",
  },
  {
    questionName: "Can my professional adviser review my bookkeeping in Finza?",
    acceptedAnswerText:
      "Yes. Professional advisers managing clients save time when daily recording already happened in a structured system.",
  },
];

export { payrollSoftwareGhanaFaqForSchema } from "./payroll-content";

/** Must match /accounting-software-accra FAQ accordion exactly. */
export const accountingSoftwareAccraFaqForSchema = [
  {
    questionName: "Is Finza suitable for businesses in Accra?",
    acceptedAnswerText:
      "Yes. Finza is built for Ghana businesses operating from Accra and anywhere else in the country - cloud software built around Ghana cedi workflows. It fits growing companies and finance teams that invoice often, record expenses, and need reports and tax summaries without spreadsheet chaos.",
  },
  {
    questionName: "Can Finza handle accounting in Ghana cedis?",
    acceptedAnswerText:
      "Yes. Amounts, customer balances, and reports are in Ghana cedis (GHS). Tax-related summaries can reflect VAT, NHIL, and GETFund where applicable to your setup—confirm final treatment with your professional adviser or GRA.",
  },
  {
    questionName: "Does Finza support invoices and reports together?",
    acceptedAnswerText:
      "Yes. Invoicing, payments, and expenses feed the same workspace as profit and position views—so you are not reconciling a billing tool against a separate report file each month.",
  },
  {
    questionName: "Can professional advisers use Finza with business owners?",
    acceptedAnswerText:
      "Yes. Owners and operators can record day-to-day activity; professional advisers can review organized records, tax summaries, and reports instead of rebuilding from PDFs and chat threads.",
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
    questionName: "Is Finza suitable for businesses in Kumasi?",
    acceptedAnswerText:
      "Yes. Businesses in Kumasi use the same Ghana product: invoices in GHS, payment tracking, and quotes that can become invoices without retyping.",
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
      "Yes. PAYE follows Ghana progressive bands on taxable income where applicable; SSNIT uses employee and employer contributions from basic salary according to payroll inputs. Confirm final positions with your professional adviser or the relevant authorities.",
  },
  {
    questionName: "Can I send payslips to employees?",
    acceptedAnswerText:
      "Yes. After you approve payroll, you can generate payslips and send them by email or WhatsApp so staff see gross pay, deductions, and net pay clearly.",
  },
  {
    questionName: "Does payroll connect to accounting records?",
    acceptedAnswerText:
      "After approval, payroll records are official in Finza and approved payroll can post into accounting so staff costs align with your books.",
  },
];

/** PAA-style questions — must match on-page accordion on accounting / invoicing / bookkeeping hubs. */
export const accountingSoftwareGhanaPaaFaqForSchema = [
  {
    questionName: "What is the best accounting software in Ghana?",
    acceptedAnswerText:
      "The best fit depends on your business: invoicing frequency, whether you need clear VAT/NHIL/GETFund lines, and how you work with professional advisers. Compare options in our buyer guide, then evaluate software that keeps quotes, invoices, and reports in one place in GHS.",
  },
  {
    questionName: "Do I need accounting software for a small business?",
    acceptedAnswerText:
      "If you invoice clients, track expenses, or work with professional advisers, software beats scattered spreadsheets—especially when you need consistent GHS balances and tax-ready summaries. Start small with weekly habits and grow into full reporting.",
  },
  {
    questionName: "How does VAT work in accounting software?",
    acceptedAnswerText:
      "Good tools show VAT, NHIL, and GETFund as separate lines where applicable, tied to real transactions—not one blended tax number. Your registration and supply type decide what you charge or claim; confirm with your professional adviser or GRA.",
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
      "Look for GHS-first invoices, clear unpaid balances, optional quotation-to-invoice flow, and tax lines where applicable. The best tool is the one your team actually uses—request a guided trial and evaluate it with real customer data when you are ready.",
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
      "It captures sales, expenses, and payments as they happen in GHS, keeps categories consistent, and gives your professional adviser organized activity instead of year-end panic.",
  },
  {
    questionName: "How often should I update my books in Ghana?",
    acceptedAnswerText:
      "Weekly is ideal for most SMEs—30 minutes to log new activity and check bank or MoMo against what you recorded. Waiting until month-end or December costs more time and mistakes.",
  },
  {
    questionName: "Can I track expenses with bookkeeping software?",
    acceptedAnswerText:
      "Yes. Record supplier bills, receipts, and outflows with categories your professional adviser recognizes. That discipline feeds clearer profit and tax conversations later.",
  },
  {
    questionName: "Does bookkeeping connect to accounting and invoicing?",
    acceptedAnswerText:
      "In Finza, daily recording supports invoicing and full accounting views—so you do not re-key the same numbers into separate files.",
  },
];

/** Must match the /request-trial FAQ accordion exactly (visible text only). */
export const guidedTrialFaqForSchema = [
  {
    questionName: "What happens after I request a guided trial?",
    acceptedAnswerText:
      "The Finza team will contact you using the details you provide, understand your business needs, and take you through Finza.",
  },
  {
    questionName: "Do I need to provide payment details?",
    acceptedAnswerText:
      "No. The request form asks for business and contact details only.",
  },
  {
    questionName: "What can we cover in the guided trial?",
    acceptedAnswerText:
      "Tell us what matters to your business. The conversation can cover invoicing, quotes, payments, expenses, supplier bills, payroll, reports, Ghana tax lines where applicable, and how you work with your accountant.",
  },
  {
    questionName: "Can I still request a guided trial if I am not sure what I need?",
    acceptedAnswerText:
      "Yes. Describe your business and your current process in the form. The Finza team will help you identify the capabilities worth evaluating.",
  },
  {
    questionName: "Can I explore the product before requesting a guided trial?",
    acceptedAnswerText:
      "Yes. Use the product tour to explore Finza at your own pace, then request a guided trial when you want the Finza team to take you through it.",
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
    dateModified: input.datePublished,
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
