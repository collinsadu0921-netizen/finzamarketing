import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Finza | Business Software for Ghanaian Service Businesses",
  description:
    "Contact Finza about business software for Ghanaian service businesses, including proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records.",
  alternates: {
    canonical: "https://www.finza.africa/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqPageSchema([
            {
              questionName: "Can I try Finza before contacting you?",
              acceptedAnswerText: "Yes. Finza offers a 14-day free trial. No card is required to start.",
            },
            {
              questionName: "Can I contact Finza before choosing a plan?",
              acceptedAnswerText:
                "Yes. You can contact Finza if you need help understanding which plan fits your business.",
            },
            {
              questionName: "Can accountants contact Finza?",
              acceptedAnswerText:
                "Yes. Accountants can contact Finza to understand how business records, reports, exports, audit logs, and accountant-ready workflows are organized.",
            },
            {
              questionName: "Can I ask about Ghana tax lines?",
              acceptedAnswerText:
                "Yes. Finza supports Ghana tax lines where applicable, but your accountant or tax adviser should confirm the correct treatment for your business.",
            },
            {
              questionName: "Can I ask about partnerships or integrations?",
              acceptedAnswerText:
                "Yes. You can contact Finza about relevant partnerships, integrations, or business collaboration.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Contact Finza
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Have questions about using Finza for your Ghanaian service business? Contact us about proposals, quotes, invoices, payments, expenses, incoming documents, payroll, reports, accountant-ready records, pricing, or setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Start 14-day free trial
              </a>
              <Link
                href="/pricing#find-plan"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors text-center"
              >
                Find my plan
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              No card required to start. You can also explore the product tour before contacting us.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What can we help with?</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built for service businesses that want cleaner records from daily work - from client documents and payments to expenses, payroll, reports, and accountant review.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Use this page if you want help understanding whether Finza fits your business, team, or accounting workflow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Product questions",
                  d: "Ask about proposals, quotes, proformas, invoices, receipts, payments, documents, payroll, and reports.",
                },
                {
                  t: "Pricing questions",
                  d: "Ask about Essentials, Professional, Business, billing cycles, and the 14-day free trial.",
                },
                {
                  t: "Setup questions",
                  d: "Ask about getting your business workspace ready for daily use.",
                },
                {
                  t: "Accountant review",
                  d: "Ask how Finza helps prepare cleaner records for accountant review.",
                },
                {
                  t: "Partnerships",
                  d: "Contact us about relevant partnerships, integrations, or business collaboration.",
                },
                {
                  t: "Support",
                  d: "Ask for help with using Finza or understanding where to find a feature.",
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
      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Before you contact us</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              These pages may answer your question faster.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {[
                { href: "/features", label: "See features" },
                { href: "/pricing", label: "View pricing" },
                { href: "/demo", label: "Watch the product tour" },
                { href: "/accountants", label: "For accountants" },
                { href: "/security", label: "Security and trust" },
                { href: "/vat-software-ghana", label: "VAT software in Ghana" },
                { href: "/payroll-software-ghana", label: "Payroll software in Ghana" },
              ].map((x) => (
                <Link key={x.href} href={x.href} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-zinc-700 hover:bg-white">
                  {x.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Tell us about your business</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When contacting Finza, include a short description of your business and what you want to manage better.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">Useful details include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Your business type",
                "Whether you mainly sell services, products, or both",
                "Whether you need proposals, quotes, invoices, or receipts",
                "Whether you work with an accountant",
                "Whether you need payroll, expenses, bills, or document tracking",
                "Which plan you are considering",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">For Ghanaian service businesses</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is especially useful for service businesses that manage client work, send documents, track payments, record expenses, and prepare information for accountant review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-zinc-700">
              {[
                "Cleaning companies",
                "Contractors",
                "Consultants",
                "Maintenance teams",
                "Agencies",
                "Professional service providers",
                "Field-service businesses",
                "Growing SMEs",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Important note</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps organize business records, documents, payments, reports, and accountant-ready information. It does not replace accountant review, tax advice, payroll advice, legal advice, or GRA guidance.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Your accountant, tax adviser, payroll adviser, or legal adviser should confirm the correct treatment for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT FORM MECHANISM (PRESERVED) */}
      <section className="border-b border-zinc-100 py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Send us a message</h2>
              <p className="text-base text-zinc-600 leading-relaxed">
                Use the form for enquiries. You can also email us directly.
              </p>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">Email</p>
                <a
                  href="mailto:hello@finza.africa"
                  className="mt-1 inline-block font-medium text-zinc-900 underline underline-offset-2"
                >
                  hello@finza.africa
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
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
                <AccordionTrigger>Can I try Finza before contacting you?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza offers a 14-day free trial. No card is required to start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I contact Finza before choosing a plan?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can contact Finza if you need help understanding which plan fits your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can accountants contact Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. Accountants can contact Finza to understand how business records, reports, exports, audit logs, and accountant-ready workflows are organized.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can I ask about Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports Ghana tax lines where applicable, but your accountant or tax adviser should confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Can I ask about partnerships or integrations?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can contact Finza about relevant partnerships, integrations, or business collaboration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Start with clearer business records
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&billing_cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Start 14-day free trial
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                See how Finza works
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/features", label: "Features", desc: "Product capabilities" },
          { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
          { href: "/demo", label: "Demo", desc: "See how Finza works" },
          { href: "/accountants", label: "For accountants", desc: "Accountant-ready records" },
          { href: "/security", label: "Security", desc: "Trust and controls" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Tax line clarity" },
          { href: "/payroll-software-ghana", label: "Payroll", desc: "Payroll records" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Invoices and payments" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
        ]}
      />
      <Footer />
    </main>
  );
}
