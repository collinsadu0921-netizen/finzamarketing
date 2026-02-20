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
              Modern accounting infrastructure for serious African businesses.
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-zinc-600 sm:text-xl">
              Finza is a ledger-first accounting system built for compliance, clarity, and scale — starting with Ghana.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
              >
                Start Free Demo
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                See How It Works
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
              Built differently from day one.
            </h2>
            <p className="text-lg text-zinc-600">
              Finza is not a spreadsheet clone. It is financial infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              How Finza works
            </h2>
            <p className="text-lg text-zinc-600">
              From transaction to financial clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Record",
                description: "Create invoices, record expenses, or process sales.",
              },
              {
                number: "02",
                title: "Auto-post",
                description: "Every action automatically posts to the double-entry ledger.",
              },
              {
                number: "03",
                title: "Report",
                description: "Generate real-time financial statements and tax-ready reports.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <div className="text-4xl font-bold text-zinc-200 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Choose Your Workspace
            </h2>
            <p className="text-lg text-zinc-600">
              Finza is one platform with specialized environments for different business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Workspace",
                price: "150 GHS",
                description: "Built for retail stores and inventory-driven businesses.",
                features: [
                  "Sales & POS tracking",
                  "Inventory management",
                  "VAT handling",
                  "Auto-posting ledger",
                  "Financial reports",
                ],
                cta: "Start Retail Demo",
              },
              {
                title: "Service Workspace",
                price: "150 GHS",
                description: "Designed for service businesses and growing SMEs.",
                features: [
                  "Invoicing & billing",
                  "Expense management",
                  "VAT logic",
                  "Auto-posting ledger",
                  "Financial reports",
                ],
                cta: "Start Service Demo",
              },
              {
                title: "Accountant Workspace",
                price: "300 GHS",
                description: "For accountants managing multiple businesses.",
                features: [
                  "Client workspace management",
                  "Period locking",
                  "Journal controls",
                  "Advanced reporting",
                  "Ledger oversight tools",
                ],
                cta: "Start Accountant Demo",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  {plan.title}
                </h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-base font-medium text-zinc-600"> / month</span>
                </div>
                <p className="text-sm text-zinc-600 mb-6">{plan.description}</p>

                <ul className="mb-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-zinc-600">
                      <svg
                        className="h-5 w-5 text-zinc-900 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className="w-full rounded-md bg-[#0F172A] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & Infrastructure Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Built for financial integrity.
            </h2>
            <p className="text-lg text-zinc-600">
              Finza is engineered for accuracy, compliance, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Immutable Ledger Core",
                description: "Every transaction is posted through a structured double-entry engine. Records cannot be silently altered or rewritten.",
              },
              {
                title: "Compliance by Design",
                description: "Ghana tax logic including VAT, NHIL, and GETFund is embedded directly into transaction workflows.",
              },
              {
                title: "Structured Controls",
                description: "Period locking, journal oversight, and accountant-level visibility ensure operational discipline.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col p-8 rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
                <AccordionTrigger>Is Finza a replacement for my accountant?</AccordionTrigger>
                <AccordionContent>
                  No. Finza is built to work alongside accountants. The Accountant Workspace is designed to improve collaboration and oversight.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I switch from Excel or another accounting system?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is designed for structured migration. Your business data can be imported and organized into the ledger system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my financial data secure?</AccordionTrigger>
                <AccordionContent>
                  Finza uses structured ledger logic and controlled workflows to protect data integrity. Records are not silently editable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I upgrade workspaces later?</AccordionTrigger>
                <AccordionContent>
                  Yes. Businesses can switch or add workspaces as operational needs grow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do I need accounting knowledge to use Finza?</AccordionTrigger>
                <AccordionContent>
                  No. Daily operations are simple. The system handles posting logic automatically.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
    </main>
  );
}
