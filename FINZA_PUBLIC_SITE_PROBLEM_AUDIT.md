# Finza Public Site Problem Audit

Audit scope: public marketing website source in `src/app`, `src/components`, `src/lib`, `public/images`, plus public route intent inferred from code. Live rendering, rankings, analytics, Search Console, Core Web Vitals, and server logs were **not verified** in this audit.

## Executive summary

### Top 5 most serious problems

1. **The site promises a 14-day free trial in many places, but the live pricing flow does not expose a trial/signup CTA.** The rendered `/pricing` page uses plan-fit plus walkthrough lead capture, while `src/app/pricing/pricing-tiers.tsx` contains the unused signup links.
2. **Pricing clarity is weaker than it should be for SME buyers.** Starting price is visible, but full plan prices and differences are not shown in the active pricing page, and `PlanTierSummaries` says exact pricing is confirmed after walkthrough or plan-fit.
3. **FAQ/schema drift creates AI-search and rich-result risk.** Homepage injects FAQ JSON-LD but has no visible FAQ section; pricing FAQ schema contains questions/answers that do not fully match the visible accordion.
4. **Trust proof is thin for finance software.** There are security/about pages and Ghana-specific wording, but no named company proof, accountant proof, testimonials, real sample invoice/report/statement assets, public WhatsApp number, physical/company details, or response-time promise.
5. **SEO architecture is broad but risks cannibalization.** Several pages target overlapping accounting/bookkeeping/service-business intents with similar templates.

### Biggest SEO risk

Duplicate or near-duplicate commercial intent across accounting, bookkeeping, small-business, and service-business routes may split authority and reduce the chance that the strongest hub ranks for “accounting software Ghana” and related searches.

### Biggest conversion risk

Visitors are asked to choose between `Book a walkthrough`, `Find my plan`, `Product tour`, and repeated “14-day free trial” messaging without a visible self-serve trial path on `/pricing`.

### Biggest trust risk

Finza asks businesses to trust it with finance records, payroll, tax lines, and customer balances, but the public site gives little verifiable external proof: no named customers, no testimonials, no accountant partner proof, no real document/report examples beyond a dashboard screenshot and CSS tiles.

### Biggest AI visibility risk

Structured FAQ content is not consistently visible on-page, and much of the SEO content repeats similar capability lists. AI answer engines need quotable, visible, specific examples and consistent schema-to-page alignment.

## Severity table

| Severity | Problem | Page/File | Why it matters | Fix direction |
| -------- | ------- | --------- | -------------- | ------------- |
| Critical | Free trial promise has no visible trial CTA on active pricing page | `/pricing`, `src/app/pricing/page.tsx`, `src/app/pricing/pricing-tiers.tsx`, `src/lib/pricing-plans.ts` | Creates mismatch between “14-day free trial” promises and the actual conversion path | Decide trial vs sales-assisted strategy; either render trial signup or remove trial promises |
| Critical | Homepage FAQ schema is injected without visible FAQ content | `/`, `src/app/page.tsx`, `src/lib/schema.ts` | FAQ rich-result and AI-answer mismatch risk | Add visible FAQ matching schema or remove homepage FAQ JSON-LD |
| High | Pricing plan differences and exact prices are not clear enough | `/pricing`, `src/components/plan-tier-summaries.tsx`, `src/lib/pricing-plans.ts` | SME buyers cannot easily compare plans without quiz/contact | Add visible plan comparison or improve summaries with prices/features |
| High | Plan-fit funnel ends only in lead capture | `/pricing#find-plan`, `src/components/plan-fit-questionnaire.tsx`, `src/components/plan-fit-lead-form.tsx` | High-friction path for self-serve buyers | Add trial/signup path or make plan-fit shorter and clearer |
| High | Trust proof is missing or unverifiable | `/`, `/pricing`, `/contact`, `/about`, `/security`, `public/images` | Finance software needs strong confidence signals | Add real customer/accountant proof, sample outputs, company details |
| High | FAQ/schema mismatch on pricing | `/pricing`, `src/app/pricing/page.tsx`, `src/lib/schema.ts` | Structured data differs from visible content | Use one source of truth for FAQ arrays and accordions |
| High | Blog template has visible encoding corruption and overclaiming CTA copy | `/blog/[slug]`, `src/app/blog/[slug]/page.tsx` | Looks unprofessional to users/crawlers and weakens trust | Fix UTF-8 characters and soften “handles it automatically” claims |
| High | Duplicate SEO intent across several accounting/bookkeeping pages | Multiple SEO routes under `src/app` | May cannibalize rankings and dilute topical authority | Merge, canonicalize, or sharply differentiate pages |
| Medium | Footer under-links major SEO hubs | `src/components/footer.tsx` | Weak internal linking to `/accounting-software-ghana`, `/bookkeeping-software-ghana`, `/vat-software-ghana` | Add hub links or a “Guides” footer column |
| Medium | Navbar omits product tour and core SEO hubs | `src/components/navbar.tsx` | Discovery of demo and hubs depends on body links | Add Product tour or Solutions navigation if it fits |
| Medium | Demo page lacks footer | `/demo`, `src/app/demo/page.tsx` | Product-tour page becomes a dead end with no legal/trust/footer links | Add footer while preserving page length or replacing related links |
| Medium | Contact form is heavy and API validation differs from UI | `/contact`, `src/components/contact-form.tsx`, `src/app/api/contact/route.ts` | Client requires five fields, API only requires email/message for walkthrough requests | Align server validation and consider reducing friction |
| Medium | No visible privacy/spam reassurance near forms | `/contact`, `/pricing#find-plan` | Finance leads may hesitate to submit WhatsApp/email | Add short privacy note; consider spam protection |
| Medium | Mobile sticky CTA may overlap pages without bottom padding | `src/app/layout.tsx`, `src/components/sticky-signup-cta.tsx`, several page files | Many pages do not include `max-md:pb-28` | Apply consistent mobile bottom spacing or conditional sticky behavior |
| Medium | Per-page Open Graph/Twitter metadata is limited | Global `src/app/layout.tsx`; child route metadata | Shared social cards may not reflect individual landing pages | Add per-page OG URL/title/description helper |
| Medium | No real document/report/customer statement screenshots | `public/images`, homepage document section | Product proof is weaker than copy promises | Add real screenshots/assets when available |
| Medium | Ghana payroll limits not consistently explained | `/payroll-software-ghana`, `/payroll-software-tema`, `src/lib/schema.ts` | PAYE/SSNIT claims can create overclaim risk | Add consistent “what Finza does/does not file” language |
| Medium | MoMo/bank tracking is mentioned but not explained | Homepage/demo chips, scattered copy | Ghana payment reality is a strong differentiator but underdeveloped | Add compact workflow/FAQ explaining recording vs reconciliation |
| Low | `html lang` is `en` rather than `en-GH` | `src/app/layout.tsx` | Minor localization signal | Consider `lang="en-GH"` if appropriate |
| Low | `lastModified` in sitemap uses build time for every URL | `src/app/sitemap.ts` | Search engines may see all pages as updated on every deploy | Use real update dates or file/CMS timestamps |

## Detailed findings

## 1. Positioning

### Finding 1.1 — Homepage explains workflow well, but the headline is less keyword-direct than the site’s SEO ambition

**Problem:** The homepage hero is customer-friendly but less explicit for “accounting software Ghana” and “invoicing software Ghana” than the root metadata.

**Evidence:**  
Route: `https://www.finza.africa/`  
File: `src/components/home/home-hero.tsx`  
Visitor sees: `Run service work with clearer records` and supporting copy about quotes, invoices, payments, expenses, payroll, and reports in one GHS workspace.  
File: `src/app/layout.tsx` has default title `Finza — Accounting & Invoicing Software for Ghana (GHS)`.

**Impact:** The homepage is clear for humans but may rely too heavily on metadata and internal hub pages for the core search phrase. Google may treat `/accounting-software-ghana` as the better commercial page, while the homepage under-leverages its authority.

**Severity:** Medium

**Recommended fix direction:** Keep the current clean hero, but make the homepage’s first visible product definition more direct, or strengthen the first section/internal links to the accounting/invoicing hubs.

### Finding 1.2 — “Service businesses” positioning is strong, but retail/demo routes may confuse the boundary

**Problem:** The main site positions Finza for Ghanaian service businesses, while `/accounting-for-retail-ghana`, `/accounting-software-for-retailers-ghana`, and `/workspace-demo/retail` exist.

**Evidence:**  
Routes: `https://www.finza.africa/accounting-for-retail-ghana`, `https://www.finza.africa/accounting-software-for-retailers-ghana`, `https://www.finza.africa/workspace-demo/retail`  
Files: `src/app/accounting-for-retail-ghana/page.tsx`, `src/app/accounting-software-for-retailers-ghana/page.tsx`, `src/app/workspace-demo/retail/page.tsx`

**Impact:** Even if retail pages are noindexed or demo-only, their existence can create internal positioning confusion for future editors and sales conversations.

**Severity:** Low

**Recommended fix direction:** Keep retail pages noindexed until the product truly serves that segment; avoid linking them from public conversion flows.

### Finding 1.3 — “What Finza does better than Excel/WhatsApp” is present but not always near the first decision point

**Problem:** The homepage eventually explains scattered files and WhatsApp/spreadsheets, but the hero CTA area does not immediately frame “why switch now.”

**Evidence:**  
Route: `https://www.finza.africa/`  
File: `src/components/home/home-sections.tsx` contains `Your business should not run on scattered records`; hero in `src/components/home/home-hero.tsx` focuses on product categories and GHS workspace.

**Impact:** New visitors may understand categories, but not the urgency versus Excel/WhatsApp until after scrolling.

**Severity:** Medium

**Recommended fix direction:** Bring one concise contrast proof into hero/supporting chip area without adding paragraphs.

## 2. Conversion

### Finding 2.1 — Free trial promise is not matched by the active `/pricing` page

**Problem:** Many pages say there is a 14-day free trial, but the current rendered pricing page does not show a “Start free trial” CTA.

**Evidence:**  
Route: `https://www.finza.africa/pricing`  
File: `src/app/pricing/page.tsx` renders `PlanFitQuestionnaire`, trial/billing copy, FAQ, `PlanTierSummaries`.  
File: `src/app/pricing/pricing-tiers.tsx` contains `href={`https://app.finza.africa/signup?...&trial=1`}` and “Start 14-day free trial” but is not imported by `/pricing`.  
File: `src/lib/pricing-plans.ts` has `cta: "Start 14-day free trial"` for each plan.  
Examples of visible trial mentions appear in `src/app/pricing/page.tsx`, `src/app/accounting-software-ghana/page.tsx`, `src/app/invoicing-software-ghana/page.tsx`, and many SEO pages.

**Impact:** Visitors who are ready to try may be forced into a walkthrough or quiz. This is the highest conversion trust gap because copy and action do not match.

**Severity:** Critical

**Recommended fix direction:** Choose the conversion strategy. If self-serve trial exists, expose it on `/pricing` and after plan-fit. If not, remove/rewrite trial promises across visible pages, schema, and metadata.

### Finding 2.2 — CTAs compete: walkthrough, plan-fit, product tour, trial, pricing, contact

**Problem:** The site has several next steps with unclear hierarchy.

**Evidence:**  
Files: `src/components/navbar.tsx`, `src/app/layout.tsx`, `src/components/sticky-signup-cta.tsx`, `src/components/home/home-hero.tsx`, `src/app/pricing/page.tsx`, `src/app/contact/page.tsx`, `src/app/demo/page.tsx`  
Visitor sees: `Book a walkthrough`, `Find my plan`, `Watch product tour`, `Pricing`, `Login`, and repeated “14-day free trial” claims.

**Impact:** Conversion intent is fragmented. “Find my plan” sounds self-serve but ends in a lead form; “free trial” is promised but not actionable on `/pricing`.

**Severity:** Critical

**Recommended fix direction:** Define primary conversion by visitor intent: trial for self-serve, walkthrough for assisted buyers, plan-fit as a helper not a dead end.

### Finding 2.3 — Plan-fit is high-friction for mobile visitors

**Problem:** The plan-fit path requires 8 questions, then a form with name, business name, phone, email, and optional message.

**Evidence:**  
Route: `https://www.finza.africa/pricing#find-plan`  
Files: `src/lib/plan-fit-questions.ts`, `src/components/plan-fit-questionnaire.tsx`, `src/components/plan-fit-lead-form.tsx`

**Impact:** Ghana SME mobile visitors may abandon before they receive value. The recommendation appears only after every question is answered, and there is no immediate signup/trial path from the result.

**Severity:** High

**Recommended fix direction:** Reduce plan-fit to fewer gating questions or show progressive value earlier; add a clear next action for trial/signup if available.

### Finding 2.4 — Contact form is heavy for first contact

**Problem:** The walkthrough form asks for five required fields, including message text, before any conversation.

**Evidence:**  
Route: `https://www.finza.africa/contact`  
File: `src/components/contact-form.tsx` requires full name, business name, phone/WhatsApp, email, and message with `minLength={10}`.

**Impact:** Strong lead quality, but higher friction for mobile users or visitors who simply want to ask if Finza fits.

**Severity:** Medium

**Recommended fix direction:** Consider making the message optional for walkthroughs or using a guided dropdown, while preserving required phone/WhatsApp for Ghana follow-up.

## 3. Pricing

### Finding 3.1 — Pricing page shows starting price but not a usable comparison

**Problem:** `/pricing` says plans start from GH₵149/month, but the active page does not show a full pricing table or clear side-by-side plan differences.

**Evidence:**  
Route: `https://www.finza.africa/pricing`  
Files: `src/app/pricing/page.tsx`, `src/components/plan-tier-summaries.tsx`, `src/lib/pricing-plans.ts`  
`PlanTierSummaries` shows descriptions only; `pricingPlansData` contains detailed prices/features but is only used by unused `PricingTiers`.

**Impact:** Serious buyers cannot decide whether Essentials, Professional, or Business is right without completing a quiz or booking a walkthrough.

**Severity:** High

**Recommended fix direction:** Surface a compact comparison table or make plan summaries include price and strongest differentiators.

### Finding 3.2 — “Exact pricing is confirmed” conflicts with shown prices

**Problem:** The site displays explicit monthly prices but `PlanTierSummaries` says exact pricing is confirmed after walkthrough or plan-fit answers.

**Evidence:**  
File: `src/components/plan-tier-summaries.tsx` says `Exact pricing is confirmed after your walkthrough or plan-fit answers.`  
File: `src/lib/pricing-plans.ts` lists `149`, `449`, and `949`.  
File: `src/components/plan-fit-questionnaire.tsx` displays `GH₵{monthlyPrice}/month`.

**Impact:** Conflicting pricing language reduces trust.

**Severity:** High

**Recommended fix direction:** Decide whether prices are public fixed prices or sales-confirmed estimates; rewrite all pricing language accordingly.

### Finding 3.3 — Signup plan parameter uses `starter` for Essentials

**Problem:** Customer-facing plan name is Essentials, but signup URL uses `plan=starter`.

**Evidence:**  
File: `src/lib/pricing-plans.ts` has `essentials.planParam: "starter"`.  
File: `src/app/pricing/pricing-tiers.tsx` builds signup URLs with `plan=${plan.planParam}`.

**Impact:** If exposed in the UI, users or support teams may see confusing plan names in URLs/app analytics.

**Severity:** Low

**Recommended fix direction:** Align app plan slugs and marketing plan names, or hide technical slugs from users.

## 4. Trust

### Finding 4.1 — No real customer proof or accountant proof on core pages

**Problem:** The site has no named testimonials, customer logos, case studies, accountant partner quote, usage count, or pilot references.

**Evidence:**  
Routes checked from code: `/`, `/pricing`, `/contact`, `/demo`, `/about`, `/security`.  
Files: `src/components/home/home-sections.tsx`, `src/app/about/page.tsx`, `src/app/security/page.tsx`, `src/components/footer.tsx`.  
`src/components/seo-marketing-blocks.tsx` contains “Used by businesses across Ghana,” but this is not substantiated with visible proof.

**Impact:** Financial software requires higher trust than a typical SaaS landing page. Lack of proof weakens conversion versus QuickBooks/Sage or accountant recommendations.

**Severity:** High

**Recommended fix direction:** Add only real proof: named customer quote, accountant quote, anonymized but specific pilot metric if approved, or “currently onboarding pilot businesses” if that is the truth.

### Finding 4.2 — Contact details are limited

**Problem:** Public contact is primarily form + `hello@finza.africa`; no public phone/WhatsApp number, office/company registration, team/founder identity, or response-time promise was verified in code.

**Evidence:**  
Files: `src/app/contact/page.tsx`, `src/components/contact-form.tsx`, `src/components/footer.tsx`, `src/app/about/page.tsx`.

**Impact:** Ghana SME buyers often want a reachable person before trusting finance/payroll software.

**Severity:** High

**Recommended fix direction:** Add public WhatsApp/contact channel or response-time expectation, plus company identity details if business-approved.

### Finding 4.3 — Product proof assets are limited

**Problem:** `public/images` has only dashboard assets; no real invoice, quote, receipt, customer statement, payroll, or report screenshot assets.

**Evidence:**  
Directory: `public/images` contains `finza-dashboard-hero.png` and `Dashboard image for the website.png`.

**Impact:** The site claims invoices, receipts, customer statements, reports, and tax lines but cannot show real output examples.

**Severity:** Medium

**Recommended fix direction:** Add approved real screenshots or sanitized product examples. Do not use fake screenshots.

### Finding 4.4 — Security page is useful but core pages do not surface its strongest reassurances

**Problem:** `/security` likely has the detailed trust explanation, but core conversion pages rely on general chips and CTAs.

**Evidence:**  
Route: `https://www.finza.africa/security`  
File: `src/app/security/page.tsx`; footer links to Security, but homepage/pricing do not prominently summarize data ownership/export/security.

**Impact:** Visitors may not reach security before making a decision.

**Severity:** Medium

**Recommended fix direction:** Add a compact trust strip or link near pricing/forms: roles, audit logs, exports, privacy, accountant access.

## 5. SEO

### Finding 5.1 — Accounting/service-business/small-business pages risk cannibalization

**Problem:** Several routes target similar keywords with similar structure and overlapping claims.

**Evidence:**  
Routes include:  
- `https://www.finza.africa/accounting-software-ghana`  
- `https://www.finza.africa/accounting-for-service-business-ghana`  
- `https://www.finza.africa/accounting-software-for-service-businesses-ghana`  
- `https://www.finza.africa/accounting-for-small-business-ghana`  
- `https://www.finza.africa/small-business-accounting-ghana`  
- `https://www.finza.africa/best-accounting-software-ghana`

**Impact:** Google may not know which page should rank for “service business accounting software Ghana” or “small business accounting Ghana.”

**Severity:** High

**Recommended fix direction:** Map each route to one search intent. Merge or canonicalize duplicates; keep one commercial page and one supporting guide where needed.

### Finding 5.2 — Blog and landing page target the same “best accounting software Ghana” query

**Problem:** There is both a commercial page and a blog post targeting the same phrase.

**Evidence:**  
Route: `https://www.finza.africa/best-accounting-software-ghana`  
Blog route inferred from `src/lib/blog-posts.ts`: `https://www.finza.africa/blog/best-accounting-software-ghana`.

**Impact:** These may compete against each other instead of reinforcing one another.

**Severity:** Medium

**Recommended fix direction:** Make landing page the canonical commercial target; rewrite blog as a checklist/supporting article or canonicalize if appropriate.

### Finding 5.3 — Footer under-links major SEO hubs

**Problem:** Footer Product links omit several important hubs.

**Evidence:**  
File: `src/components/footer.tsx` links Features, `/pricing#find-plan`, `/invoicing-software-ghana`, `/invoice-calculator-ghana`, `/payroll-software-ghana`, `/accountants`. It omits `/accounting-software-ghana`, `/bookkeeping-software-ghana`, `/vat-software-ghana`, `/quickbooks-alternative-ghana`.

**Impact:** Important SEO pages receive less sitewide link equity and are harder for users to discover.

**Severity:** Medium

**Recommended fix direction:** Add hub links in footer or a compact “Guides” column.

### Finding 5.4 — Missing high-intent pages

**Problem:** Several Ghana-specific commercial searches do not have dedicated routes.

**Evidence:**  
Route list from `src/app` has no dedicated pages for customer statement software Ghana, Mobile Money payment tracking, WHT software Ghana, Xero alternative Ghana, GRA filing/compliance software, proforma invoice software Ghana, PAYE calculator Ghana, accounting software for agencies/consultants/logistics.

**Impact:** Finza may miss long-tail, high-intent searches where local context matters.

**Severity:** Medium

**Recommended fix direction:** Add pages only where the product genuinely supports the workflow and the page can be specific, not templated.

## 6. AI visibility

### Finding 6.1 — Invisible FAQ schema on homepage

**Problem:** Homepage includes `faqPageSchema(homePageFaqForSchema)` but no visible FAQ accordion/content.

**Evidence:**  
File: `src/app/page.tsx` injects FAQ JSON-LD.  
File: `src/lib/schema.ts` defines `homePageFaqForSchema`.  
Homepage components in `src/components/home/home-sections.tsx` do not render that FAQ.

**Impact:** AI systems and Google rich-result systems may distrust schema that is not visible to users.

**Severity:** Critical

**Recommended fix direction:** Render the FAQ visibly or remove homepage FAQ JSON-LD.

### Finding 6.2 — Pricing FAQ schema does not fully match visible FAQ

**Problem:** `pricingPageFaqForSchema` includes content that is not fully represented in the visible `/pricing` accordion.

**Evidence:**  
File: `src/lib/schema.ts` has `pricingPageFaqForSchema` including plan guidance and payment processing fee answers.  
File: `src/app/pricing/page.tsx` visible FAQ does not include every schema question and uses different wording for “Which plan should I start with?”

**Impact:** This weakens AEO/GEO readiness and rich-result eligibility.

**Severity:** High

**Recommended fix direction:** Use shared FAQ arrays for both visible accordions and JSON-LD.

### Finding 6.3 — Content is often generic capability lists instead of quotable examples

**Problem:** Many pages repeat similar lists of proposals, invoices, payments, expenses, payroll, reports, and accountant-ready records.

**Evidence:**  
Multiple routes under `src/app` show repeated product list patterns; examples include `/features`, `/accounting-software-ghana`, `/best-accounting-software-ghana`, `/small-business-accounting-ghana`.

**Impact:** AI answer engines prefer specific examples, definitions, workflows, tables, and concrete “how it works” explanations.

**Severity:** Medium

**Recommended fix direction:** Add distinctive examples to priority pages: a GHS invoice workflow, MoMo payment recording flow, accountant review handoff, VAT/NHIL/GETFund example. Avoid adding generic paragraphs.

## 7. Technical SEO

### Finding 7.1 — Blog template has visible encoding corruption

**Problem:** Blog pages render corrupted characters.

**Evidence:**  
Route: `https://www.finza.africa/blog/[slug]`  
File: `src/app/blog/[slug]/page.tsx` contains `ÔåÉ Blog`, `┬À`, and `ÔÇö` in visible UI/copy.

**Impact:** This is a quality and trust issue for users, Google, and AI crawlers.

**Severity:** High

**Recommended fix direction:** Replace corrupted characters with normal ASCII/UTF-8 punctuation.

### Finding 7.2 — Per-page Open Graph is not defined for most routes

**Problem:** Child page metadata generally sets title/description/canonical but not per-page `openGraph` or `twitter`.

**Evidence:**  
File: `src/app/layout.tsx` defines global OG/Twitter metadata with `openGraph.url` as homepage.  
Example page files such as `src/app/pricing/page.tsx`, `src/app/contact/page.tsx`, `src/app/demo/page.tsx` set `metadata` without OG overrides.

**Impact:** Social shares and preview cards may use generic homepage metadata instead of page-specific messages.

**Severity:** Medium

**Recommended fix direction:** Add a metadata helper that sets canonical, OG URL/title/description, and Twitter title/description per route.

### Finding 7.3 — Sitemap `lastModified` updates all URLs on every build

**Problem:** `sitemap.ts` uses `const now = new Date()` for every entry.

**Evidence:**  
File: `src/app/sitemap.ts`.

**Impact:** Search engines may see unreliable freshness signals.

**Severity:** Low

**Recommended fix direction:** Use real page/blog modified dates or CMS timestamps.

### Finding 7.4 — Robots does not disallow API routes

**Problem:** Robots disallows admin/workspace-demo/private, but not `/api/`.

**Evidence:**  
File: `src/app/robots.ts`.

**Impact:** Low crawl hygiene issue; not usually severe because API routes should not be linked.

**Severity:** Low

**Recommended fix direction:** Consider adding `/api/` to disallow list.

### Finding 7.5 — Mobile rendering and Core Web Vitals were not verified

**Problem:** No browser/device audit was performed in this pass.

**Evidence:**  
Not verified: Lighthouse, CrUX, Search Console, real mobile viewport screenshots, network waterfalls.

**Impact:** Mobile-first Ghana traffic may expose issues not visible from source inspection.

**Severity:** Medium

**Recommended fix direction:** Run Lighthouse/mobile browser audit on homepage, pricing, contact, demo, and top SEO pages.

## 8. Content

### Finding 8.1 — Blog CTA overclaims automation

**Problem:** Blog footer copy says “Finza handles it automatically” and “Blocks payments on drafts.”

**Evidence:**  
Route: `https://www.finza.africa/blog/[slug]`  
File: `src/app/blog/[slug]/page.tsx`.

**Impact:** This may overpromise product behavior unless verified against the app.

**Severity:** High

**Recommended fix direction:** Reword to product-safe language: “designed to help,” “keeps records tied together,” and only mention blocking behavior if app behavior is verified.

### Finding 8.2 — Blog posts are likely too thin for competitive informational searches

**Problem:** Blog content is stored statically and appears short/formulaic in `src/lib/blog-posts.ts`.

**Evidence:**  
File: `src/lib/blog-posts.ts`; blog routes under `https://www.finza.africa/blog/[slug]`.

**Impact:** Posts may rank for long-tail only, and may not be distinctive enough for AI Overviews.

**Severity:** Medium

**Recommended fix direction:** Expand the top 5 posts with Ghana-specific worked examples, screenshots, checklists, and FAQs.

### Finding 8.3 — Repetitive “accountant-ready records” and feature stacks reduce distinctiveness

**Problem:** Many pages repeat similar capability lists and “accountant-ready records” phrasing.

**Evidence:**  
Files across `src/app/*/page.tsx`, especially SEO routes.

**Impact:** Users and Google may perceive templated copy rather than specific page value.

**Severity:** Medium

**Recommended fix direction:** Make each page own one unique angle: collections, documents, payroll, accountant handoff, VAT lines, service operations, etc.

## 9. Product explanation

### Finding 9.1 — Payment recording vs reconciliation is unclear

**Problem:** The site mentions Mobile Money, bank details, payment recording, partial payments, and bank reconciliation, but does not clearly explain the difference.

**Evidence:**  
Files: `src/components/home/home-hero.tsx`, `src/app/demo/page.tsx`, `src/lib/pricing-plans.ts`.

**Impact:** Buyers may assume automatic MoMo/bank sync or gateway payment processing when the product may only record payment details.

**Severity:** Medium

**Recommended fix direction:** Add explicit FAQ: “Does Finza connect to MoMo or bank accounts?” and explain what is recorded manually vs reconciled.

### Finding 9.2 — Payroll boundaries are not visible enough

**Problem:** PAYE/SSNIT language exists, but statutory filing/export boundaries are not consistently explained on national payroll/pricing surfaces.

**Evidence:**  
Files: `src/lib/schema.ts` has payroll FAQ constants; `src/app/payroll-software-tema/page.tsx` is more explicit than `src/app/payroll-software-ghana/page.tsx`.  
Routes: `https://www.finza.africa/payroll-software-ghana`, `https://www.finza.africa/payroll-software-tema`.

**Impact:** Payroll is a high-risk category. If visitors expect GRA/SSNIT filing, trust can be damaged.

**Severity:** Medium

**Recommended fix direction:** Add consistent “what Finza does / does not do” payroll FAQ across payroll page, pricing, and features.

### Finding 9.3 — Reports are named too generically

**Problem:** The site often says “reports,” “exports,” “accountant-ready records,” and “accounting visibility” without naming the reports buyers expect.

**Evidence:**  
Files: `src/app/accounting-software-ghana/page.tsx`, `src/app/features/page.tsx`, `src/lib/pricing-plans.ts`.

**Impact:** Accountants/business owners may not know whether Finza provides receivables, P&L, trial balance, customer statements, tax summaries, or aging reports.

**Severity:** Medium

**Recommended fix direction:** List a small set of verified report names by plan.

## 10. Ghana localization

### Finding 10.1 — Ghana tax language is strong but sometimes too cautious/repetitive

**Problem:** “where applicable” appears frequently, which is legally careful but can sound repetitive.

**Evidence:**  
Multiple files under `src/app`, `src/lib/pricing-plans.ts`, and `src/lib/schema.ts`.

**Impact:** Readers may not understand practical examples of when VAT/NHIL/GETFund/WHT applies.

**Severity:** Low

**Recommended fix direction:** Keep disclaimers, but add examples like “VAT-registered service business” vs “not registered yet” on key pages.

### Finding 10.2 — Mobile Money is present as a label but not enough as a workflow

**Problem:** MoMo appears in chips/copy, but the site does not explain how a Ghanaian SME records a MoMo payment, bank transfer, partial payment, or receipt.

**Evidence:**  
Files: `src/components/home/home-hero.tsx`, `src/app/demo/page.tsx`, blog posts mention MoMo.

**Impact:** This is a likely local differentiator versus generic accounting software and should be clearer.

**Severity:** Medium

**Recommended fix direction:** Add a concise workflow example in invoicing/payment content.

### Finding 10.3 — Some service-business examples are present, but vertical coverage is incomplete

**Problem:** Cleaning and contractors have pages; agencies, consultants, logistics, professional services, and maintenance are mostly mentions rather than dedicated content.

**Evidence:**  
Routes include `accounting-software-for-cleaning-business-ghana` and `invoice-software-for-contractors-ghana`; no dedicated agency/consultant/logistics pages in route list.

**Impact:** Finza may miss vertical long-tail searches and buyer self-identification.

**Severity:** Medium

**Recommended fix direction:** Add vertical pages only where there is enough product-specific content and real examples.

## 11. Mobile UX

### Finding 11.1 — Sticky CTA padding is inconsistent across pages

**Problem:** Sticky CTA is global, but not every public route has bottom padding to prevent overlap on mobile.

**Evidence:**  
File: `src/app/layout.tsx` renders `StickySignupCta` globally.  
Files with `max-md:pb-28` include homepage, pricing, contact, demo. Many SEO pages/features/about/security do not use that class.

**Impact:** Sticky CTA may cover footer links or final CTAs on mobile.

**Severity:** Medium

**Recommended fix direction:** Apply bottom padding globally to public layout or make sticky bar route-aware/height-aware.

### Finding 11.2 — Plan-fit on mobile likely requires significant scrolling

**Problem:** The questionnaire includes 8 full question groups, then a result, then a lead form.

**Evidence:**  
Files: `src/lib/plan-fit-questions.ts`, `src/components/plan-fit-questionnaire.tsx`.

**Impact:** Mobile-first Ghana visitors may drop before completing the flow.

**Severity:** High

**Recommended fix direction:** Shorten the quiz, group questions, or show a recommendation/trial path sooner.

### Finding 11.3 — Mobile rendering was not visually verified

**Problem:** This audit did not include browser screenshots or device testing.

**Evidence:**  
Not verified: real mobile nav behavior, tap targets, sticky bar overlap, form field keyboard behavior, YouTube embed performance.

**Impact:** Source code suggests likely risks but does not prove viewport behavior.

**Severity:** Medium

**Recommended fix direction:** Run manual mobile QA on core routes and top SEO pages.

## 12. Forms

### Finding 12.1 — Contact API validation differs from client-required fields

**Problem:** The contact form requires full name, business name, phone, email, and message, but the API only validates email and message for generic/walkthrough contact submissions.

**Evidence:**  
Files: `src/components/contact-form.tsx`, `src/app/api/contact/route.ts`.  
API branch after `source !== pricing_plan_fit` checks only `email` and `message` length before delivery.

**Impact:** Bot or bypassed submissions can produce incomplete leads even though the UI appears stricter.

**Severity:** Medium

**Recommended fix direction:** Align server validation with `walkthrough_request` required fields, without changing delivery behavior.

### Finding 12.2 — No spam protection is visible

**Problem:** Forms submit directly to `/api/contact`; no honeypot, Turnstile, rate limiting, or CAPTCHA is visible in source.

**Evidence:**  
Files: `src/components/contact-form.tsx`, `src/components/plan-fit-lead-form.tsx`, `src/app/api/contact/route.ts`.

**Impact:** Spam can degrade lead quality and deliverability.

**Severity:** Medium

**Recommended fix direction:** Add low-friction spam protection such as honeypot/rate limit/Turnstile.

### Finding 12.3 — No privacy reassurance near lead submit

**Problem:** Forms do not link to privacy policy or explain what will happen with submitted contact details beyond confirmation.

**Evidence:**  
Files: `src/components/contact-form.tsx`, `src/components/plan-fit-lead-form.tsx`.

**Impact:** Finance software visitors may hesitate to submit phone/email.

**Severity:** Low

**Recommended fix direction:** Add one short privacy sentence near submit, preferably without increasing form height materially.

## Quick wins

- Fix blog template encoding corruption in `src/app/blog/[slug]/page.tsx`.
- Sync `/pricing` visible FAQ with `pricingPageFaqForSchema`, or stop using mismatched FAQ schema.
- Remove homepage FAQ JSON-LD or add a compact visible FAQ section matching it.
- Add `Footer` to `/demo` or replace the related-links tail with footer navigation.
- Change footer Pricing link from `/pricing#find-plan` to `/pricing` so users see full pricing context.
- Add missing footer links to `/accounting-software-ghana`, `/bookkeeping-software-ghana`, and `/vat-software-ghana`.
- Clarify `PlanTierSummaries` pricing language.
- Add privacy reassurance under forms.
- Add server-side required checks for `walkthrough_request` name/company/phone.
- Add `/api/` to robots disallow if desired.
- Standardize `Find my plan` vs `Find your plan`.

## High-impact fixes

- Decide and implement the main conversion strategy: self-serve trial, sales-assisted walkthrough, or hybrid with clear hierarchy.
- Surface real plan pricing/features on `/pricing`, using existing `pricingPlansData` if accurate.
- Add real trust proof: testimonials, accountant quote, customer type/city proof, public WhatsApp/contact details, and sample outputs.
- Create a stronger product proof library: real invoice, receipt, customer statement, payroll, report, and accountant export screenshots.
- Consolidate duplicate accounting/bookkeeping/service-business pages with redirects/canonicals.
- Build a shared FAQ system so visible accordions and JSON-LD cannot drift.
- Add analytics events for quiz start/completion, recommendation view, form submit, trial click, demo click.
- Expand top blog posts into specific Ghana examples with tables/checklists.
- Add mobile QA pass and fix sticky CTA overlap globally.

## Missing pages/content

Ordered by priority:

1. **Mobile Money payment tracking / recording Ghana** — explain MoMo, bank transfer, partial payments, receipts, and reconciliation boundaries.
2. **Customer statement software Ghana** — high fit with service businesses and collections.
3. **WHT software / withholding tax records Ghana** — WHT is mentioned but has no focused page.
4. **GRA filing / tax filing boundaries guide** — clarify what Finza does and does not file.
5. **Xero alternative Ghana** — competitor intent gap after QuickBooks and Sage pages.
6. **Proforma invoice software Ghana** — specific document workflow intent.
7. **Receipt software Ghana** — narrow high-intent document query.
8. **PAYE calculator Ghana** — natural companion to payroll pages.
9. **Accounting software for agencies Ghana** — vertical service-business landing page.
10. **Accounting software for consultants Ghana** — vertical service-business landing page.
11. **Accounting software for logistics/service fleets Ghana** — only if product examples can support it.
12. **Data export / leaving Finza FAQ or page** — trust objection for finance records.

## Do-not-change warnings

- Do not remove Ghana-specific terms like GHS, VAT, NHIL, GETFund, WHT, Mobile Money, WhatsApp, bank details, customer statements, or accountant review.
- Do not remove disclaimers that Finza does not replace accountant/tax/legal/GRA advice.
- Do not remove `/accounting-software-ghana`; it is the main commercial hub.
- Do not remove the clean white SaaS layout or make pages more cluttered.
- Do not add fake testimonials, fake logos, fake screenshots, or unsupported security claims.
- Do not index retail/POS routes unless the product is ready for that market.
- Do not remove `/pricing#find-plan` unless replacing it with an equal or clearer plan-selection flow.
- Do not weaken `Login` route behavior; navbar correctly points to `https://app.finza.africa/login`.

## Open questions

- Is the 14-day free trial currently live and self-serve in the app? If yes, what is the correct signup URL and plan parameter mapping?
- Are GH₵149 / GH₵449 / GH₵949 final public prices, or indicative prices confirmed after sales contact?
- Should Finza prioritize self-serve trial conversion or assisted walkthrough conversion for Ghana SMEs?
- Can Finza publish named customer proof, accountant quotes, pilot references, or anonymized metrics?
- Does Finza calculate payroll only, or does it also support PAYE/SSNIT filing/export in any form?
- Does Finza integrate with Mobile Money or bank feeds, or only record payment details manually?
- Which exact reports are available by plan: P&L, balance sheet, trial balance, receivables aging, tax summary, customer statements?
- What data export formats are supported if a customer leaves?
- Is there a public company address, registration detail, or WhatsApp number that can be shown?
- Are CMS-managed blog posts intended to replace `src/lib/blog-posts.ts` soon?
- Do Search Console or analytics show which SEO pages are already getting impressions/conversions?
- What pages are currently indexed despite noindex/robots settings? **Not verified** in this audit.
