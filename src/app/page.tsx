import Link from "next/link";
import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/footer";

export default function Home() {
  const features = [
    {
      title: "Ledger-first core",
      description: "Every transaction posts to an immutable double-entry ledger.",
    },
    {
      title: "Ghana-compliant tax engine",
      description: "VAT, NHIL, GETFund, and levies built into the system logic.",
    },
    {
      title: "Accountant workspace",
      description: "Period locking, journal controls, and structured reporting.",
    },
    {
      title: "Multi-industry ready",
      description: "Built for retail, service businesses, and growing enterprises.",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-32 w-full">
        <Container>
          <div className="mx-auto max-w-[800px] space-y-8 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl leading-tight">
              Premium accounting built for Ghana.
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-zinc-600 sm:text-xl">
              Finza delivers structured, ledger-based accounting in a clean, intuitive environment designed for growing businesses.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
              >
                View Demo
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                System Workflow
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Finza Section */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Engineered for control.
            </h2>
            <p className="text-lg text-zinc-600">
              Finza enforces accounting standards at the source. It is not just a spreadsheet replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Double-entry core</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Every entry balances. Records are immutable.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Local tax engine</h3>
              <p className="text-base text-zinc-600 leading-relaxed">VAT, levies, and withholding rules built into the workflow.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Accountant oversight</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Tools for audit capability, review, and period locking.</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Scalable architecture</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Designed to support high-volume data and multiple users.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Operational Workflow
            </h2>
            <p className="text-lg text-zinc-600">
              Automated logic from input to reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">01</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Record</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Record invoices, sales, or expenses.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">02</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Process</h3>
              <p className="text-base text-zinc-600 leading-relaxed">The engine handles debits, credits, and tax calculations.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="text-4xl font-bold text-zinc-200 mb-6">03</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Report</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Generate standard financial statements instantly.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Workspace Options
            </h2>
            <p className="text-lg text-zinc-600">
              Select the environment that matches your business model.
            </p>
            <p className="text-sm font-medium text-zinc-500 pt-2 uppercase tracking-wide">
              Professional-grade accounting without enterprise complexity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">For Business Operators</p>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Retail Workspace</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-zinc-900">150 GHS</span>
                <span className="text-base font-medium text-zinc-600"> / month</span>
              </div>
              <p className="text-sm text-zinc-600 mb-6">For high-volume inventory and sales.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Sales & POS tracking", "Inventory management", "VAT handling", "Auto-posting ledger", "Financial reports"].map((feature) => (
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

            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">For Business Operators</p>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Service Workspace</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-zinc-900">150 GHS</span>
                <span className="text-base font-medium text-zinc-600"> / month</span>
              </div>
              <p className="text-sm text-zinc-600 mb-6">For agencies, consultants, and service providers.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Invoicing & billing", "Expense management", "VAT logic", "Auto-posting ledger", "Financial reports"].map((feature) => (
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
              <p className="text-sm text-zinc-600 mb-6">Oversee and manage multiple business workspaces from a single professional dashboard.</p>
              <ul className="mb-8 space-y-3 flex-1">
                {["Client workspace management", "Period locking", "Journal controls", "Advanced reporting", "Ledger oversight tools"].map((feature) => (
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
        </Container>
      </section>

      {/* Trust & Infrastructure Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Audit-ready infrastructure.
            </h2>
            <p className="text-lg text-zinc-600">
              Engineered for compliance and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Structured Workflows</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Transactions follow strict double-entry logic. The system enforces clarity and balance without clutter.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Regulatory Logic</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Ghana tax logic including VAT, NHIL, and GETFund is embedded directly into transaction workflows.</p>
            </div>
            <div className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Controlled Editing</h3>
              <p className="text-base text-zinc-600 leading-relaxed">Period locking, journal oversight, and accountant-level visibility ensure operational discipline.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-zinc-500 italic">
              “Financial software should protect your numbers — not manipulate them.”
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
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
                  No. Finza is built to work alongside accountants. The Accountant Workspace is designed to improve collaboration and oversight.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is migration difficult?</AccordionTrigger>
                <AccordionContent>
                  No. Finza is designed for structured migration. Your business data can be imported and organized into the ledger system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How is data integrity protected?</AccordionTrigger>
                <AccordionContent>
                  Finza uses structured ledger logic and controlled workflows. Records are not silently editable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I upgrade workspaces later?</AccordionTrigger>
                <AccordionContent>
                  Yes. Businesses can switch or add workspaces as operational needs grow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do I need accounting knowledge?</AccordionTrigger>
                <AccordionContent>
                  No. Daily operations are simple. The system handles posting logic automatically.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Structure your financial operations.
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Start with a system built for clarity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-md bg-[#0F172A] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors w-full sm:w-auto"
              >
                View Demo
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold text-zinc-900 hover:text-zinc-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning Section */}
      <section className="py-20 bg-white border-t border-zinc-200">
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
                  "Businesses preparing for growth or external oversight"
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
                  "Short-term bookkeeping shortcuts"
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
              “Finza is accounting infrastructure, not a spreadsheet replacement.”
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
