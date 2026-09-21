import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Accounting Software in Ghana (2026): Buyer Guide",
  description:
    "A 2026 buyer guide to accounting software in Ghana: what to compare, options including Finza, QuickBooks, Sage, Zoho Books and Odoo, and where Finza may fit.",
  alternates: {
    canonical: "https://www.finza.africa/best-accounting-software-ghana",
  },
};

export default function BestAccountingSoftwareGhanaPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          softwareApplicationSchema(),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Best accounting software Ghana", path: "/best-accounting-software-ghana" },
          ]),
          faqPageSchema([
            {
              questionName: "What is the best accounting software in Ghana?",
              acceptedAnswerText:
                "The best accounting software depends on your business needs. Ghanaian service businesses should look for software that supports invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.",
            },
            {
              questionName: "Is Finza accounting software for Ghanaian service businesses?",
              acceptedAnswerText:
                "Yes. Finza is built for Ghanaian service businesses that need to manage proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.",
            },
            {
              questionName: "Is Finza only for invoicing?",
              acceptedAnswerText:
                "No. Finza includes invoicing, but it also supports proposals, quotes, proformas, receipts, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.",
            },
            {
              questionName: "Does Finza replace an accountant?",
              acceptedAnswerText:
                "No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.",
            },
            {
              questionName: "Can I try Finza before paying?",
              acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold text-zinc-500">
              Finza publishes this guide. Finza is one of the products discussed below.
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Best accounting software in Ghana: a 2026 buyer guide
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              “Best” depends on your business. This guide compares what Ghanaian businesses should check before buying, then looks at Finza and established alternatives including QuickBooks, Sage, Zoho Books, and Odoo. Finza publishes this guide and is one of the products discussed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Book a Finza walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">Compare Finza plans</Link>
            </div>
            <p className="text-sm text-zinc-500">
              14-day free trial, no card required. Verify competitor pricing and features on their official sites before choosing.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">What Ghanaian businesses should compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "GHS support",
                  d: "Can the product work in Ghana cedis, or will exchange-rate swings change your real cost?",
                },
                {
                  t: "Invoicing and quotations",
                  d: "Can you create quotes, proformas, invoices, receipts, and payment instructions clients can act on?",
                },
                {
                  t: "Bookkeeping and expenses",
                  d: "Can you capture receipts, supplier bills, and daily expenses without waiting until year-end?",
                },
                {
                  t: "Payroll",
                  d: "If you have staff, can you run monthly payroll with PAYE, SSNIT/pension, and payslips?",
                },
                {
                  t: "Ghana tax handling",
                  d: "Can VAT, NHIL, GETFund, and WHT appear clearly where applicable, without claiming automatic filing?",
                },
                {
                  t: "Accountant access",
                  d: "Can your accountant export, review, and hand off records without rebuilding your spreadsheets?",
                },
                {
                  t: "Reporting",
                  d: "Do profit, position, receivables, and tax-summary reports match how you run the business?",
                },
                {
                  t: "Pricing model",
                  d: "Is pricing fixed in GHS, or USD-based? Are payroll, users, and modules billed separately?",
                },
                {
                  t: "Business size",
                  d: "Is the product aimed at micro-businesses, SMEs, or larger ERP-style operations?",
                },
                {
                  t: "Integrations",
                  d: "Do you need bank feeds, payment links, WhatsApp sharing, or other tools your clients already use?",
                },
                {
                  t: "Implementation needs",
                  d: "Will you go live in hours, or do you need consultants, hosting, and data migration?",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-white p-5">
                  <p className="text-sm font-bold text-zinc-900 mb-1">{x.t}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Options businesses may consider</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              The table uses only capabilities we could confirm from official vendor pages or Finza product pages as of 2026. Blank or cautious cells mean we could not verify that point from those sources. Confirm current details with each vendor before you buy.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 text-left text-xs font-bold uppercase tracking-wide text-zinc-500">
                    <th className="py-3 pr-4">Product</th>
                    <th className="py-3 px-3">Ghana / GHS focus</th>
                    <th className="py-3 px-3">Invoicing</th>
                    <th className="py-3 px-3">Payroll</th>
                    <th className="py-3 px-3">Accounting</th>
                    <th className="py-3 pl-3">Typical fit</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-semibold text-zinc-900">Finza</td>
                    <td className="py-3 px-3">Native GHS; Ghana tax-line support where applicable</td>
                    <td className="py-3 px-3">Quotes, proformas, invoices, receipts, WhatsApp sharing</td>
                    <td className="py-3 px-3">Built-in Ghana PAYE, SSNIT/Tier 1 & Tier 2, payslips</td>
                    <td className="py-3 px-3">Ledger, reports, accountant exports, period controls</td>
                    <td className="py-3 pl-3">Ghanaian service businesses and owner-led SMEs</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-semibold text-zinc-900">QuickBooks</td>
                    <td className="py-3 px-3">Ghana appears on Intuit’s global country list. A Ghana-specific GHS price list and GRA tax pack were not confirmed on Intuit pages reviewed.</td>
                    <td className="py-3 px-3">Yes — official site covers invoicing, recording payments, and expense tracking</td>
                    <td className="py-3 px-3">Not confirmed for Ghana PAYE or SSNIT from Intuit pages reviewed</td>
                    <td className="py-3 px-3">Yes — official site positions QuickBooks as accounting/bookkeeping software with reporting</td>
                    <td className="py-3 pl-3">SMEs using a widely adopted international package</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-semibold text-zinc-900">Sage</td>
                    <td className="py-3 px-3">Ghana is listed on Sage Africa’s Accounting country selector. Published signup pricing observed in South African Rands, not GHS.</td>
                    <td className="py-3 px-3">Yes — Sage Accounting covers invoices, payments, cash-flow tracking, and expenses</td>
                    <td className="py-3 px-3">Sage payroll products publish Ghana tax summaries for 2026. Confirm which Sage product and Ghana coverage you need.</td>
                    <td className="py-3 px-3">Yes — Sage Accounting is positioned as accounting software for small businesses and sole traders</td>
                    <td className="py-3 pl-3">Teams already using Sage in Africa, or needing Sage payroll tax packs</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-semibold text-zinc-900">Zoho Books</td>
                    <td className="py-3 px-3">International cloud accounting with multi-currency. A Ghana-specific GRA tax pack was not confirmed on Zoho’s homepage.</td>
                    <td className="py-3 px-3">Yes — official site covers invoices, quotes, and online payment links</td>
                    <td className="py-3 px-3">Not confirmed for Ghana PAYE or SSNIT from official Zoho Payroll pages reviewed</td>
                    <td className="py-3 px-3">Yes — invoicing, expenses, inventory, projects, and reports on the official site</td>
                    <td className="py-3 pl-3">SMEs wanting a general cloud accounting suite, including a free plan for very small volume</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-semibold text-zinc-900">Odoo</td>
                    <td className="py-3 px-3">ERP with invoicing and accounting apps. Official invoicing page cites multi-currency and a broad country list. A first-party Ghana GRA localization was not confirmed there.</td>
                    <td className="py-3 px-3">Yes — official invoicing app covers invoices, reminders, subscriptions, and payments</td>
                    <td className="py-3 px-3">Not confirmed as native Ghana PAYE/SSNIT payroll on Odoo’s official invoicing page</td>
                    <td className="py-3 px-3">Yes — accounting sits inside a broader ERP (sales, projects, and related apps)</td>
                    <td className="py-3 pl-3">Businesses that need a customizable ERP and can handle implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-500">
              <strong className="text-zinc-700">Sources consulted (2026):</strong>{" "}
              <a href="https://quickbooks.intuit.com/global/" className="underline underline-offset-2">
                Intuit QuickBooks Global
              </a>
              ;{" "}
              <a href="https://quickbooks.intuit.com/global/pricing/" className="underline underline-offset-2">
                QuickBooks Global pricing
              </a>
              ;{" "}
              <a href="https://www.sage.com/africa/sage-business-cloud/accounting/" className="underline underline-offset-2">
                Sage Africa Accounting
              </a>
              ;{" "}
              <a href="https://za-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=201214085142023" className="underline underline-offset-2">
                Sage Ghana payroll tax summaries
              </a>
              ;{" "}
              <a href="https://www.zoho.com/books/" className="underline underline-offset-2">
                Zoho Books
              </a>
              ;{" "}
              <a href="https://www.odoo.com/app/invoicing" className="underline underline-offset-2">
                Odoo Invoicing
              </a>
              ; Finza product pages on this site. Details change — verify with each vendor.
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">When Finza may fit</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for Ghanaian service businesses that need the daily workflow and the records behind it in one place: proposals, quotes, invoices, payments, receipts, expenses, supplier bills, incoming documents, payroll, reports, and accountant handoff, all in GHS.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Ghana-focused records and tax-line support where applicable",
                "Service workflows: quotes to invoices to receipts",
                "GHS invoicing and customer balance tracking",
                "Built-in monthly payroll with PAYE and SSNIT/Tier 1 & Tier 2",
                "Payslips by email or WhatsApp link",
                "Salary-payment recording against bank, cash, or MoMo accounts",
                "Expense and supplier-bill capture",
                "Reports and exports for accountant review",
                "14-day free trial; no card required",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-zinc-600">
              It is usually a stronger fit for businesses that invoice clients regularly and want one system than for businesses that only need a one-page invoice template.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">When another option may suit you better</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "You already run on QuickBooks or Sage",
                  d: "If your accountant and team are trained there and the cost works, switching may not be worth the disruption.",
                },
                {
                  t: "You need heavy inventory or manufacturing",
                  d: "Odoo or an ERP-style system may handle stock, production, and multi-company needs more deeply.",
                },
                {
                  t: "You are a micro business with very few transactions",
                  d: "A simple spreadsheet or free Zoho Books tier may be enough until volume grows.",
                },
                {
                  t: "You need local GRA e-filing automation",
                  d: "No tool here should claim automatic filing. Confirm with the vendor and your tax adviser before relying on any export for submission.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-sm font-bold text-zinc-900 mb-1">{x.t}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">How to compare total cost</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Look beyond the headline monthly price. Add up users, modules, payroll, accountant seats, exchange-rate risk, implementation time, training, and data migration. A product that looks cheaper on the landing page can become expensive once you add what you actually need.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Base subscription",
                "Per-user fees",
                "Payroll module or add-on",
                "Multi-currency or GHS pricing",
                "Implementation or partner setup",
                "Training and support",
                "Data migration from spreadsheets",
                "Year-one total, not just month one",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900">Software support, not a compliance guarantee</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Accounting software can organize records, tax lines where applicable, reports, and exports, but it does not guarantee tax compliance, file statutory returns automatically, or replace an accountant, tax adviser, payroll adviser, or GRA guidance.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Confirm the correct treatment and filing steps for your business with the relevant professional or authority.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>What is the best accounting software in Ghana?</AccordionTrigger>
                <AccordionContent>
                  The best accounting software depends on your business needs. Ghanaian service businesses should look for software that supports invoices, payments, expenses, documents, payroll, reports, Ghana tax lines where applicable, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Is Finza accounting software for Ghanaian service businesses?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghanaian service businesses that need to manage proposals, quotes, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in GHS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is Finza only for invoicing?</AccordionTrigger>
                <AccordionContent>
                  No. Finza includes invoicing, but it also supports proposals, quotes, proformas, receipts, payments, expenses, supplier bills, incoming documents, payroll, reports, and accountant-ready records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza replace an accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records for accountant review. Your accountant or tax adviser should still confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Can I try Finza before paying?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza offers a 14-day free trial. No card is required to start.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="border-b border-zinc-100 bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Try Finza for your Ghanaian service business</h2>
            <p className="text-zinc-300">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
              >
                Book a walkthrough
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Find my plan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/accounting-software-ghana", label: "Accounting software Ghana", desc: "Reports and records" },
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "PAYE, payslips & advances" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
        ]}
      />
      <Footer />
    </main>
  );
}
