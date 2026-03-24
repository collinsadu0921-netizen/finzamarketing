import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema, pricingPageFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Pricing — Accounting Software for Ghanaian Businesses | Finza",
    description:
        "Finza software pricing: Essentials at GHS 149/mo, Professional at GHS 449/mo, Business at GHS 949/mo. First month free, no card required. Cancel anytime.",
    alternates: {
        canonical: "https://www.finza.africa/pricing",
    },
};

const plans = [
    {
        id: "essentials",
        name: "Essentials",
        audience: "Core tools to manage operations and billing",
        price: "149",
        description:
            "The essential operational toolset. Manage customers, send quotes, raise invoices, record payments and track basic expenses. Includes fundamental reporting and WhatsApp integration.",
        features: [
            "Dashboard, Customers, Quotes & Services",
            "Proforma Invoices, Invoices & Payments",
            "Credit Notes & Expenses",
            "Profit & Loss and Balance Sheet",
            "Basic VAT Report",
            "WhatsApp connection & Business Profile",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        highlight: false,
    },
    {
        id: "professional",
        name: "Professional",
        audience: "For growing teams and active businesses",
        price: "449",
        description:
            "Advanced operational tools on top of everything in Essentials. Manage team members, track projects and materials, handle payroll, fixed assets and precise statutory returns.",
        features: [
            "Everything in Essentials",
            "Projects, Materials & Supplier Bills",
            "Payroll, Salary Advances & Staff Management",
            "Fixed Assets & Cash Flow Statement",
            "VAT Returns & WHT Returns",
            "Accountant Requests & Activity Log",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        highlight: true,
    },
    {
        id: "business",
        name: "Business",
        audience: "Full-scale accounting and control",
        price: "949",
        description:
            "Complete end-to-end accounting. Take complete control with a full double-entry General Ledger, Bank Reconciliation, Trial Balance, Period management and audit trails.",
        features: [
            "Everything in Professional",
            "Full General Ledger & Chart of Accounts",
            "Trial Balance & Reconciliations",
            "Accounting Periods & CIT Provisions",
            "Loans & Equity Management",
            "Bank Reconciliation & Full Audit Log",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        highlight: false,
    },
];

const comparisonRows = [
    { feature: "Dashboard, Customers, Quotes, Services", essentials: true, professional: true, business: true },
    { feature: "Proforma Invoices, Invoices, Payments", essentials: true, professional: true, business: true },
    { feature: "Credit Notes, Expenses", essentials: true, professional: true, business: true },
    { feature: "Profit & Loss, Balance Sheet", essentials: true, professional: true, business: true },
    { feature: "VAT Report, Business Profile", essentials: true, professional: true, business: true },
    { feature: "WhatsApp Integration", essentials: true, professional: true, business: true },
    { feature: "Projects, Materials, Supplier Bills", essentials: false, professional: true, business: true },
    { feature: "Payroll & Salary Advances", essentials: false, professional: true, business: true },
    { feature: "Cash Flow Statement, Changes in Equity", essentials: false, professional: true, business: true },
    { feature: "VAT Returns, WHT Returns", essentials: false, professional: true, business: true },
    { feature: "Fixed Assets", essentials: false, professional: true, business: true },
    { feature: "Team Members, Staff Management", essentials: false, professional: true, business: true },
    { feature: "Accountant Requests, Activity Log", essentials: false, professional: true, business: true },
    { feature: "General Ledger, Chart of Accounts", essentials: false, professional: false, business: true },
    { feature: "Trial Balance", essentials: false, professional: false, business: true },
    { feature: "Bank Reconciliation, Reconciliation", essentials: false, professional: false, business: true },
    { feature: "Accounting Periods", essentials: false, professional: false, business: true },
    { feature: "Loans & Equity, CIT Provisions", essentials: false, professional: false, business: true },
    { feature: "Full System Audit Log", essentials: false, professional: false, business: true },
];

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <JsonLd
                data={[
                    faqPageSchema(pricingPageFaqForSchema),
                    breadcrumbListSchema([
                        { name: "Home", path: "/" },
                        { name: "Pricing", path: "/pricing" },
                    ]),
                ]}
            />

            {/* ── HEADER ── */}
            <section className="pt-28 pb-16 border-b border-zinc-100">
                <Container>
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
                            Simple pricing.<br />Built for Ghanaian businesses.
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            One platform, three powerful tiers. Clear monthly pricing to match your growth. Save up to 20% on annual billing. Start free — upgrade when you&apos;re ready. For what sits behind these plans, read {" "}
                            <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                                accounting software for Ghana
                            </Link>
                            ; questions before you buy go to{" "}
                            <Link href="/contact" className="font-semibold text-zinc-900 underline underline-offset-2">
                                contact
                            </Link>
                            .
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ First month free
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ No card required to start
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ Cancel anytime
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── WHICH PLAN SHOULD I CHOOSE ── */}
            <section className="py-14 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Choosing a plan</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Which plan should I choose?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                {
                                    plan: "Essentials",
                                    price: "GHS 149/mo",
                                    for: "You run a simple service business or consultancy. You need to send professional quotes, invoice clients, track what you are owed, and monitor basic expenses.",
                                },
                                {
                                    plan: "Professional",
                                    price: "GHS 449/mo",
                                    for: "Your business is growing. You manage teams, need to track projects, handle fixed assets, run payroll, and automatically generate precise VAT & WHT statutory returns.",
                                },
                                {
                                    plan: "Business",
                                    price: "GHS 949/mo",
                                    for: "You need complete accounting control. You want a full general ledger, trial balances, bank reconciliations, and tight period locking with comprehensive audit logs.",
                                },
                            ].map((block) => (
                                <div key={block.plan} className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <p className="text-sm font-bold text-zinc-900">{block.plan}</p>
                                        <span className="text-xs font-semibold text-zinc-500">{block.price}</span>
                                    </div>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{block.for}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── PRICING TIERS ── */}
            <section className="py-20 bg-white border-b border-zinc-100">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col rounded-xl border shadow-sm overflow-hidden ${
                                    plan.highlight
                                        ? "border-zinc-800 bg-white ring-1 ring-zinc-800 transform scale-105 z-10"
                                        : "border-zinc-200 bg-white"
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="bg-[#0F172A] text-white text-center text-xs font-bold py-2 tracking-wide uppercase">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
                                            {plan.audience}
                                        </p>
                                        <h2 className="text-xl font-bold text-zinc-900 mb-3">{plan.name}</h2>
                                        <div className="flex items-baseline gap-1.5 mb-4">
                                            <span className="text-4xl font-extrabold text-zinc-900">
                                                GHS {plan.price}
                                            </span>
                                            <span className="text-sm font-medium text-zinc-500">/ month</span>
                                        </div>
                                        <p className="text-xs font-semibold text-emerald-600 mb-4">
                                            First month free — no card needed
                                        </p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((f: string) => (
                                            <li key={f} className="flex items-start gap-3 text-sm text-zinc-700">
                                                <svg
                                                    className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="space-y-3 mt-auto">
                                        <a
                                            href={plan.ctaHref}
                                            className={`block w-full rounded-md px-4 py-3 text-center text-sm font-bold shadow-sm transition-colors ${
                                                plan.highlight 
                                                    ? "bg-[#0F172A] text-white hover:bg-[#0F172A]/90" 
                                                    : "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                                            }`}
                                        >
                                            {plan.cta} — no card required
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-zinc-500 mt-10">
                        You can upgrade or downgrade your plan at any time based on your business needs.
                    </p>
                </Container>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Feature comparison</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                What&apos;s included in each workspace.
                            </h2>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-zinc-200 bg-zinc-50">
                                        <th className="text-left px-6 py-4 font-semibold text-zinc-900">Feature</th>
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Essentials</th>
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Professional</th>
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Business</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, i) => (
                                        <tr key={row.feature} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                                            <td className="px-6 py-3.5 text-zinc-700">{row.feature}</td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.essentials ? (
                                                    <svg className="h-4 w-4 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <span className="text-zinc-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.professional ? (
                                                    <svg className="h-4 w-4 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <span className="text-zinc-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.business ? (
                                                    <svg className="h-4 w-4 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <span className="text-zinc-300">—</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── WHAT'S INCLUDED IN EVERY WORKSPACE ── */}
            <section className="py-20 bg-white border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-10">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Every plan includes</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Core system — robust foundation.
                            </h2>
                            <p className="text-sm text-zinc-600">
                                Every Finza plan ships with a complete double-entry accounting engine handling the hard work in the background.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Double-entry engine",
                                    desc: "All transactions post to a balanced ledger automatically behind the scenes. No manual debits or credits required.",
                                },
                                {
                                    title: "Real-time reports",
                                    desc: "Income statement and balance sheet — always current, never assembled by hand.",
                                },
                                {
                                    title: "Ghana tax handling",
                                    desc: "VAT (15%), NHIL (2.5%), and GETFund (2.5%) calculated and separated at transaction level.",
                                },
                                {
                                    title: "Audit-ready records",
                                    desc: "Append-only entries. Corrections are reversals, not deletions. Audit trail is always intact.",
                                },
                                {
                                    title: "Role-based access",
                                    desc: "Control what team members can see and do depending on their responsibilities.",
                                },
                                {
                                    title: "Data export",
                                    desc: "Export transaction history and reports to CSV at any time. Your data is always yours.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50">
                                    <p className="text-sm font-bold text-zinc-900 mb-1">{item.title}</p>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Billing & account</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Common questions
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="free-trial">
                                <AccordionTrigger>How does the free month work?</AccordionTrigger>
                                <AccordionContent>
                                    Your first month on any plan is free with no card required. At the end of that period, you&apos;ll be prompted to subscribe to continue. There is no automatic charge — you choose when to activate billing. If you don&apos;t subscribe, your workspace moves to read-only and your data remains intact.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="billing-cycle">
                                <AccordionTrigger>When am I billed?</AccordionTrigger>
                                <AccordionContent>
                                    Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends. No partial refunds — you keep access through the end of the month you paid for. You can also save up to 20% by paying annually.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="upgrade">
                                <AccordionTrigger>Can I upgrade or downgrade my tier?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can move between Essentials, Professional, and Business tiers at any time. When upgrading, changes apply immediately and your billing is prorated. When downgrading, the new tier takes effect at the start of your next billing cycle.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="data-ownership">
                                <AccordionTrigger>Who owns my data?</AccordionTrigger>
                                <AccordionContent>
                                    You do. Your financial records belong to your business. You can export all transaction data and reports to CSV at any time. If you cancel, your data remains exportable for 90 days after your last billing period — after which it is deleted in accordance with our retention policy.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="cancel">
                                <AccordionTrigger>What happens when I cancel?</AccordionTrigger>
                                <AccordionContent>
                                    You retain full access until the end of your current billing period. After that, your workspace moves to read-only mode — you can view and export everything, but you cannot post new transactions. Your data is not deleted immediately. You can reactivate at any time by renewing a subscription.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-24 bg-[#0F172A] text-center">
                <Container>
                    <div className="max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Start free — no card required.
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            First month on us. Real-time bookkeeping, Ghana VAT handling, and financial reports from day one.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                            <a
                                href="https://app.finza.africa/signup"
                                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
                            >
                                Get started free
                            </a>
                            <Link
                                href="/demo"
                                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
                            >
                                Preview a workspace →
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <RelatedClusterLinks
                related={[
                    {
                        href: "/best-accounting-software-ghana",
                        label: "Choose accounting software",
                        desc: "Buyer framework",
                    },
                    { href: "/demo", label: "Try the demo", desc: "Workspace preview" },
                ]}
            />
            <Footer />
        </main>
    );
}
