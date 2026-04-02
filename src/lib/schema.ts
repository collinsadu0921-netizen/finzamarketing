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
      sameAs: ["https://twitter.com/finzagh"],
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
