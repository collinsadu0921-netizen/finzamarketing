import Link from "next/link";
import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ── SECTION 1: Hero ── */}
      <section className="py-32 w-full">
        <Container>
          <div className="mx-auto max-w-[800px] space-y-8 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl leading-tight">
              Control your business finances with confidence.
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-zinc-600 sm:text-xl">
              Built for Ghana VAT, structured reporting, and growing businesses that need clarity — not spreadsheets.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
              >
                View Demo
              </Link>
              <Link
                href="#pricing"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: The Problem ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Most businesses don&apos;t struggle with sales. They struggle with financial control.
            </h2>
            <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
              <p>
                When records are scattered and VAT is calculated manually, mistakes happen.
                Missed taxes. Unclear profit. Accountant dependency.
              </p>
              <p className="font-medium text-zinc-800">
                Finza gives you structure from day one — so your numbers work for you, not against you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: What Finza Does ── */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Everything you need to stay compliant and profitable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Sales &amp; Invoice Tracking</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Track revenue, customers, and payments in one structured system.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Built-In Ghana Tax Logic</h3>
              <p className="text-base text-zinc-600 leading-relaxed">VAT, NHIL, GETFund, and levy handling integrated directly into your workflow.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Automated Financial Reports</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Generate income statements, balance sheets, and transaction summaries instantly.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Accountant-Ready Structure</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Give your accountant controlled access without losing visibility over your business.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: How It Works ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              From transaction to financial statement — automatically.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">01</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Record</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Enter sales, invoices, or expenses.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">02</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Process</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Finza handles debits, credits, and tax calculations behind the scenes.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">03</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Report</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Financial statements update instantly — always balanced.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 5: Workspace Options (Pricing) ── */}
      <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Choose your workspace.
            </h2>
            <p className="text-lg text-zinc-600">
              Each workspace is billed separately. Select the one that matches your business model.
            </p>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide pt-2">
              Professional-grade accounting without enterprise complexity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Retail */}
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">For Business Operators</p>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Retail Workspace</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-zinc-900">150 GHS</span>
                <span className="text-base font-medium text-zinc-600"> / month</span>
              </div>
              <p className="text-sm text-zinc-600 mb-6">For inventory-based businesses and point-of-sale operations.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Sales & POS tracking", "Inventory management", "VAT handling", "Automated ledger posting", "Financial reporting"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-600">
                    <svg className="h-5 w-5 text-zinc-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="w-full rounded-md bg-[#0F172A] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors">
                Retail Demo
              </Link>
            </div>

            {/* Service */}
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">For Business Operators</p>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Service Workspace</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-zinc-900">150 GHS</span>
                <span className="text-base font-medium text-zinc-600"> / month</span>
              </div>
              <p className="text-sm text-zinc-600 mb-6">For consultants, agencies, and service providers.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Invoicing & billing", "Expense tracking", "VAT logic", "Automated ledger posting", "Financial reporting"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-600">
                    <svg className="h-5 w-5 text-zinc-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="w-full rounded-md bg-[#0F172A] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors">
                Service Demo
              </Link>
            </div>

            {/* Accountant */}
            <div className="flex flex-col p-8 rounded-lg border border-zinc-700 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">For Accounting Professionals</p>
                <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">Professional Workspace</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Accountant Workspace</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-zinc-900">300 GHS</span>
                <span className="text-base font-medium text-zinc-600"> / month</span>
              </div>
              <p className="text-sm text-zinc-600 mb-6">For accounting professionals managing multiple businesses.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Client workspace oversight", "Period locking", "Journal review controls", "Advanced reporting"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-600">
                    <svg className="h-5 w-5 text-zinc-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="w-full rounded-md bg-[#0F172A] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors">
                Accountant Demo
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-zinc-500 mt-10">No hidden fees. Upgrade anytime.</p>
        </Container>
      </section>

      {/* ── SECTION 6: Who Finza Is Built For ── */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Who Finza is built for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" aria-hidden="true" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-4">Finza is for:</h3>
              <ul className="space-y-4">
                {[
                  "Retail businesses with structured sales operations",
                  "Service businesses that require clean financial records",
                  "Accountants managing multiple clients",
                  "Growing companies preparing for external oversight",
                ].map((item) => (
                  <li key={item} className="flex items-start text-zinc-600">
                    <svg className="h-6 w-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-4">Finza is not for:</h3>
              <ul className="space-y-4">
                {[
                  "Hobby projects",
                  "Personal budgeting",
                  "Businesses avoiding structured accounting",
                  "Short-term bookkeeping shortcuts",
                ].map((item) => (
                  <li key={item} className="flex items-start text-zinc-600">
                    <svg className="h-6 w-6 text-zinc-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-zinc-100">
            <p className="text-lg font-medium text-zinc-900">
              &ldquo;Finza is accounting infrastructure, not a spreadsheet replacement.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-600">
              Clear answers before you commit.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza structures your financial data so your accountant can work more efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does Finza handle Ghana VAT automatically?</AccordionTrigger>
                <AccordionContent>
                  Yes. VAT and applicable levies are calculated within transaction workflows.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I upgrade or switch workspaces later?</AccordionTrigger>
                <AccordionContent>
                  Yes. Workspaces can be changed based on your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Finza uses structured access controls and system-level safeguards to protect your financial records.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Run your business with clarity.
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Structured accounting. Ghana-ready compliance. Professional control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-md bg-[#0F172A] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors w-full sm:w-auto"
              >
                View Demo
              </Link>
              <Link
                href="/demo"
                className="text-base font-semibold text-zinc-900 hover:text-zinc-700 transition-colors"
              >
                Start Workspace
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
