import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Accounting Software for Service Businesses in Ghana | Finza",
  description:
    "Finza is accounting software for Ghanaian service businesses. Raise invoices, track accounts receivable, record expenses, and handle Ghana VAT — all posted to a live ledger automatically.",
  alternates: {
    canonical: "https://www.finza.africa/accounting-software-for-service-businesses-ghana",
  },
};

export default function ServiceBusinessAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Service business accounting · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Accounting software for service businesses in Ghana.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza gives Ghanaian service businesses complete financial control — project profitability, payroll management, automated VAT & WHT returns, and a continuously balanced general ledger. Not just invoicing, but accounting-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                Start free — no card required
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                Preview the platform
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Built for Ghanaian service providers</p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                For businesses that bill clients for services.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Consulting and advisory firms",
                "Creative agencies and studios",
                "IT and software companies",
                "Construction and engineering",
                "Logistics and transport",
                "Clinics and healthcare",
                "Legal and professional services",
                "Event management and media",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3.5 rounded-lg border border-zinc-200 bg-white">
                  <svg className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Service businesses outgrow basic invoicing tools quickly.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Most service businesses start by sending invoices and hoping the money arrives. But as consulting firms, agencies, and clinics grow, they realize that invoicing is only 10% of the financial picture.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Managing projects, tracking supplier bills, processing payroll, recording staff salary advances, and filing Ghana Withholding Tax (WHT) correctly require serious accounting infrastructure. Without a unified ledger, financial data fragments across spreadsheets, leaving owners blind to their true cash position and profitability.
            </p>
            <div className="space-y-4">
              {[
                {
                  headline: "Project costs are disconnected from revenue",
                  body: "You know what you billed the client, but the material costs, supplier bills, and staff time are tracked in separate spreadsheets. You don't know if the project was actually profitable.",
                },
                {
                  headline: "WHT and VAT liabilities are a mess",
                  body: "Ghanaian service businesses deal heavily with Withholding Tax. When tax logic isn't built into the ledger at the transaction level, period-end returns become a frantic, error-prone reconstruction.",
                },
                {
                  headline: "No real financial governance",
                  body: "Basic tools don't offer bank reconciliation, period locking, or full audit logs. When errors happen, history is quietly overwritten instead of properly reversed, destroying the audit trail.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="flex-shrink-0 w-1 rounded-full bg-red-400 self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.headline}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW FINZA SOLVES IT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza works</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Accounting-grade infrastructure for serious operations.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Finza is built on a double-entry general ledger. Every operational action — from client invoicing and project tracking to payroll processing and supplier bill payments — automatically posts balanced journal entries. You get complete financial traceability and audit-ready reports without manual intervention.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Project & Material Tracking",
                  body: "Group invoices, supplier bills, and material usage by project. Finza links operational costs directly to client revenue, giving you real-time profitability tracking for every consulting gig or contract.",
                },
                {
                  title: "Payroll & Staff Management",
                  body: "Process payroll, track staff costs, and manage salary advances directly within the system. Payroll expenses hit your income statement immediately, ensuring your net profitability is accurate.",
                },
                {
                  title: "Statutory Tax Returns (VAT & WHT)",
                  body: "Withholding tax and VAT schedules are dynamically generated from your ledger. Whether you are withholding tax from a supplier or tracking VAT output on a service matrix, Finza prepares the exact figures for GRA.",
                },
                {
                  title: "Reconciliations & Audit Integrity",
                  body: "Lock accounting periods, reconcile bank transactions against your ledger, and track every single modification through an immutable system audit log. Built for businesses that need to pass strict financial audits.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT SERVICE BUSINESSES KNOW AT ALL TIMES */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What you always know</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                What you will always know — at any point in time.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { q: "Was that specific project actually profitable?", a: "Project tracking links your supplier bills and material costs directly to your client invoices for instant margin visibility." },
                { q: "Are we bleeding cash on fixed expenses?", a: "The live profit and loss statement, backed by the general ledger, tracks operational overhead automatically." },
                { q: "What is my true WHT and VAT liability?", a: "Statutory returns are actively prepared in the background at the transaction level—ready to file at any time." },
                { q: "Are staff salary advances accounted for?", a: "Advances are properly treated as receivables against staff profiles, automatically deducting from payroll processing." },
                { q: "Does our bank balance match our books?", a: "Bank reconciliation modules ensure your cash flow statement perfectly aligns with your actual bank feeds." },
                { q: "Can my books survive an external audit?", a: "Yes. Period closing controls, append-only reversals, and full system audit logs enforce accounting governance." },
              ].map((item) => (
                <div key={item.q} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50">
                  <p className="text-sm font-semibold text-zinc-900 mb-2">{item.q}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LINKS + CTA */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Invoice software Ghana", desc: "Invoicing with AR posting", href: "/invoice-software-ghana" },
                { label: "Features", desc: "Full accounting system", href: "/features" },
                { label: "Pricing", desc: "View flexible plans", href: "/pricing" },
                { label: "VAT software Ghana", desc: "VAT, NHIL & GETFund", href: "/vat-software-ghana" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors">
                  <p className="text-sm font-bold text-zinc-900">{l.label}</p>
                  <p className="text-xs text-zinc-500 mt-1">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Take complete financial control.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Accounting software for Ghanaian service businesses. Full general ledger, WHT returns, payroll, and strict audit logs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                Preview the platform →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">First month free · Cancel anytime</p>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-for-service-business-ghana",
            label: "Service accounting guide",
            desc: "Invoices & AR",
          },
          { href: "/invoice-software-ghana", label: "Invoice software", desc: "Ghana billing" },
        ]}
      />
      <Footer />
    </main>
  );
}
