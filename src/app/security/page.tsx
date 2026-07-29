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
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Security and Trust | Finza Business Software for Ghana",
  description:
    "Learn how Finza supports business separation, role-based access, audit logs, period controls, tokenized public document links, and payment-provider secret handling for Ghanaian businesses.",
  alternates: {
    canonical: "https://www.finza.africa/security",
  },
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Security", path: "/security" },
          ]),
          faqPageSchema([
            {
              questionName: "Does Finza support user permissions?",
              acceptedAnswerText:
                "Yes. Finza supports team, role, and permission workflows so businesses can manage access to records and actions.",
            },
            {
              questionName: "Does Finza separate business records?",
              acceptedAnswerText:
                "Finza supports business and workspace separation so users work inside permitted business contexts.",
            },
            {
              questionName: "Are public document links controlled?",
              acceptedAnswerText:
                "Finza supports tokenized public document links for client-facing documents. Businesses should still share those links carefully and only with intended recipients.",
            },
            {
              questionName: "Does Finza include audit logs?",
              acceptedAnswerText:
                "Finza includes audit log surfaces and audit-related workflows in supported areas of the application.",
            },
            {
              questionName: "Does Finza guarantee compliance?",
              acceptedAnswerText:
                "No. Finza helps organize records and access controls. It does not guarantee tax compliance or replace professional tax, legal, or security advice.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Security and trust for business records in Ghana
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Finza helps Ghanaian businesses manage invoices, payments, documents, payroll, reports, and records for professional review with workspace separation, user permissions, audit logs, period controls, and controlled document-sharing flows.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/pricing#find-plan"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center"
              >
                Find my plan
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Security is a shared responsibility. Finza provides controls to help organize and protect business records, but every business should also manage users, passwords, devices, and internal processes carefully.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Business records need more than storage</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Invoices, receipts, payments, payroll records, supplier bills, documents, and reports are sensitive business records. They need clear ownership, controlled access, activity visibility, and structured review.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built with controls that help businesses keep records organized by workspace and business context instead of mixing operational and accounting information carelessly.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Business and workspace separation</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports multi-business and workspace-based access patterns so users only work inside the business contexts they are permitted to access.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              This helps separate service operations, accounting workflows, team access, and business records.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Business separation",
                  d: "Business records are organized by business context.",
                },
                {
                  t: "Workspace access",
                  d: "Service and accounting workspaces can be handled through access-aware routes and layouts.",
                },
                {
                  t: "User permissions",
                  d: "Team members can be managed with role and permission logic.",
                },
                {
                  t: "Review access",
                  d: "Review workflows can be controlled separately from daily operational work.",
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

      {/* SECTION 3 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Role-based access and permissions</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Not every user should see or change the same information. Finza supports team and permission workflows so a business can manage who has access to important records and actions.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              This is especially important when a business has owners, staff, and professional reviewers working around the same records.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-zinc-700">
              {[
                "Team access management",
                "Role and permission handling",
                "Accounting access controls",
                "Workspace-aware routing",
                "Access-denied handling where applicable",
                "Business-member access checks",
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
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Controlled public document sharing</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports tokenized public document links for client-facing documents such as quotes, proformas, invoices, proposals, and receipts.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              These links make it easier to share documents with clients without sending every file manually. Businesses should still treat public document links carefully and avoid sharing them with unintended recipients.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Tokenized public document routes",
                "Client-facing quote, proforma, invoice, proposal, and receipt views",
                "Public document access without exposing the full app workspace",
                "Useful for email and WhatsApp link sharing",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 5 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Audit logs and period controls</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza includes audit log surfaces and period-control workflows that support review of important activity and accounting periods.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              These controls help businesses and professional reviewers understand what happened, when records were changed, and how period review is being managed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Audit logs",
                  d: "Review activity history where audit logging is available.",
                },
                {
                  t: "Period controls",
                  d: "Support period close and reopen workflows where applicable.",
                },
                {
                  t: "Review context",
                  d: "Give professional reviewers better context during month-end and period review.",
                },
                {
                  t: "Record visibility",
                  d: "Help reduce confusion caused by disconnected records and manual summaries.",
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

      {/* SECTION 6 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Payment-provider settings and sensitive credentials</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza includes payment-provider configuration flows and specific handling for payment-provider secrets.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Payment integrations depend on the provider, environment, and account setup. Businesses should only connect providers they are authorized to use and should keep provider credentials restricted to trusted administrators.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Payment-provider configuration support",
                "Specific secret-handling logic for payment-provider credentials",
                "Admin-level care required for provider setup",
                "Provider availability depends on the configured payment flow",
                "Hubtel invoice payments (optional): Accept online invoice payments through Hubtel using your connected merchant account. Hubtel approval and credentials are required.",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 7 */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What Finza does not claim</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Security should not be marketed with vague promises. Finza should not be described as a replacement for internal controls, professional review, or careful business processes.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              {[
                "Finza does not guarantee tax compliance.",
                "Finza does not replace professional review.",
                "Finza does not remove the need for strong passwords and careful user management.",
                "Finza should not be described as having verified backup and restore workflows unless those workflows are confirmed.",
                "Finza should not be described as encrypting all data unless that scope is technically verified.",
                "Finza should not be described as providing full Hubtel, full MTN MoMo, or Stripe support unless those implementations are confirmed.",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SECTION 8 */}
      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Practical security habits for businesses</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Software controls work best when the business also follows practical security habits.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              {[
                "Give access only to users who need it",
                "Review team access when staff leave",
                "Use strong passwords and secure devices",
                "Avoid sharing public document links carelessly",
                "Keep payment-provider credentials restricted",
                "Review records regularly with your professional adviser",
              ].map((item) => (
                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
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
                <AccordionTrigger>Does Finza support user permissions?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports team, role, and permission workflows so businesses can manage access to records and actions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Does Finza separate business records?</AccordionTrigger>
                <AccordionContent>
                  Finza supports business and workspace separation so users work inside permitted business contexts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Are public document links controlled?</AccordionTrigger>
                <AccordionContent>
                  Finza supports tokenized public document links for client-facing documents. Businesses should still share those links carefully and only with intended recipients.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Does Finza include audit logs?</AccordionTrigger>
                <AccordionContent>
                  Finza includes audit log surfaces and audit-related workflows in supported areas of the application.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Does Finza guarantee compliance?</AccordionTrigger>
                <AccordionContent>
                  No. Finza helps organize records and access controls. It does not guarantee tax compliance or replace professional tax, legal, or security advice.
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
              Keep business records better organized and easier to review
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Use Finza to manage invoices, payments, documents, payroll, reports, access controls, and records for professional review in one connected workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/contact"
                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
              >
                Book a walkthrough
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-zinc-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
              >
                Contact us
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
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records" },
          { href: "/privacy", label: "Privacy", desc: "Data and rights" },
          { href: "/terms", label: "Terms", desc: "Platform terms" },
          { href: "/contact", label: "Contact", desc: "Talk to the team" },
        ]}
      />
      <Footer />
    </main>
  );
}
