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

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Finza",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Ledger-first accounting for Ghanaian businesses with VAT, NHIL, and GETFund handled at transaction level.",
    url: `${BASE}/accounting-software-ghana`,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "200",
      highPrice: "700",
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

/** Matches homepage “Common questions” accordion (Section 11). */
export const homePageFaqForSchema = [
  {
    questionName: "Does Finza replace my accountant?",
    acceptedAnswerText:
      "No. Finza gives your accountant a clean, complete ledger to work from instead of a pile of spreadsheets. They spend less time fixing data and more time advising your business. Many accountants in Ghana actively recommend Finza to clients specifically because the books arrive in good order.",
  },
  {
    questionName: "Does Finza handle Ghana VAT automatically?",
    acceptedAnswerText:
      "Yes. VAT (15%), NHIL (2.5%), and GETFund (2.5%) are calculated at the point of transaction and posted as separate ledger entries. GRA-ready VAT reports are always available — there is no end-of-month tax calculation step.",
  },
  {
    questionName: "What happens if I make an error?",
    acceptedAnswerText:
      "You post a reversing journal entry. The original entry stays in the ledger — the reversal corrects the effect. Your historical record remains untouched and fully auditable. This is the same standard followed in professional accounting practice.",
  },
  {
    questionName: "Can I upgrade or switch workspaces?",
    acceptedAnswerText:
      "Yes. Workspaces can be added or changed as your business needs evolve. Each workspace is billed separately and maintains its own ledger — switching or adding one does not affect existing data.",
  },
  {
    questionName: "Can I migrate from spreadsheets?",
    acceptedAnswerText:
      "Yes. You start with a clean ledger and an opening balance entry. From that point forward, all transactions are posted automatically. You do not need to import historical spreadsheet data — most businesses open with an opening trial balance and move forward.",
  },
];

/** Matches pricing page billing FAQ accordion. */
export const pricingPageFaqForSchema = [
  {
    questionName: "How does the free month work?",
    acceptedAnswerText:
      "Your first month on any workspace is free with no card required. At the end of that period, you'll be prompted to subscribe to continue. There is no automatic charge — you choose when to activate billing. If you don't subscribe, your workspace moves to read-only and your data remains intact.",
  },
  {
    questionName: "When am I billed?",
    acceptedAnswerText:
      "Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends. No partial refunds — you keep access through the end of the month you paid for.",
  },
  {
    questionName: "Can I have more than one workspace?",
    acceptedAnswerText:
      "Yes. Workspaces are independent and billed separately. A business owner could hold a Retail Workspace for their shop and a Service Workspace for a consultancy they also operate. An accountant could hold an Accountant Workspace while their clients hold their own workspaces. Each workspace has its own ledger — they do not share data.",
  },
  {
    questionName: "Can I switch or add a different workspace?",
    acceptedAnswerText:
      "Yes. You can add a different workspace type at any time. Each workspace maintains its own ledger, so your existing data is never affected when you add or change a workspace. You cannot currently merge two workspaces — each maintains separate books.",
  },
  {
    questionName: "Who owns my data?",
    acceptedAnswerText:
      "You do. Your financial records belong to your business. You can export all transaction data and reports to CSV at any time. If you cancel, your data remains exportable for 90 days after your last billing period — after which it is deleted in accordance with our retention policy.",
  },
  {
    questionName: "What happens when I cancel?",
    acceptedAnswerText:
      "You retain full access until the end of your current billing period. After that, your workspace moves to read-only mode — you can view and export everything, but you cannot post new transactions. Your data is not deleted immediately. You can reactivate at any time by choosing a subscription plan.",
  },
  {
    questionName: "Does my accountant pay separately for access?",
    acceptedAnswerText:
      "Yes. Your accountant manages their own Accountant Workspace (GHS 700/month), which gives them access to your workspace as a client. Your own workspace subscription (Retail or Service) is billed separately. The accountant's fee covers their professional tools — your workspace fee covers your own ledger.",
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
