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

const plansData = [
    {
        id: "essentials",
        name: "Essentials",
        subtitle: "Core financial operations for running your business",
        price: "149",
        highlight: false,
        cta: "Start 14-day free trial",
        ctaHref: "https://app.finza.africa/signup?workspace=service&plan=starter&trial=1",
        groups: [
            {
                name: "Financial Operations",
                items: [
                    "Real-time business overview and performance tracking",
                    "Customer management and activity history",
                    "Quote creation and conversion to invoices",
                    "Service-based workflow management"
                ]
            },
            {
                name: "Billing & Cash Management",
                items: [
                    "Proforma invoice generation",
                    "Invoice creation and tracking",
                    "Payment recording and status tracking",
                    "Credit notes and adjustments",
                    "Expense tracking and categorisation"
                ]
            },
            {
                name: "Financial Reporting",
                items: [
                    "Profit & Loss (real-time view)",
                    "Balance Sheet (automatically generated)"
                ]
            },
            {
                name: "Tax & Compliance",
                items: [
                    "VAT tracking and reporting"
                ]
            },
            {
                name: "Business Configuration",
                items: [
                    "Business profile management",
                    "Invoice configuration (numbering, structure)",
                    "Payment setup and preferences",
                    "WhatsApp communication integration"
                ]
            }
        ]
    },
    {
        id: "professional",
        name: "Professional",
        subtitle: "Operational control and structured financial management",
        price: "449",
        highlight: true,
        cta: "Start 14-day free trial",
        ctaHref: "https://app.finza.africa/signup?workspace=service&plan=professional&trial=1",
        addedText: "Everything in Essentials, plus:",
        groups: [
            {
                name: "Operations & Resource Management",
                items: [
                    "Project tracking and management",
                    "Material usage tracking",
                    "Supplier bill management"
                ]
            },
            {
                name: "Workforce & Internal Management",
                items: [
                    "Payroll processing",
                    "Salary advances management",
                    "Team member access control",
                    "Staff management"
                ]
            },
            {
                name: "Financial Management & Reporting",
                items: [
                    "Fixed asset tracking",
                    "Cash flow statement",
                    "Statement of changes in equity"
                ]
            },
            {
                name: "Tax & Regulatory Reporting",
                items: [
                    "VAT return preparation",
                    "Withholding tax (WHT) tracking and returns"
                ]
            },
            {
                name: "Collaboration & Oversight",
                items: [
                    "Accountant collaboration requests",
                    "Accounting activity log"
                ]
            }
        ]
    },
    {
        id: "business",
        name: "Business",
        subtitle: "Full financial control with accounting-grade infrastructure",
        price: "949",
        highlight: false,
        cta: "Start 14-day free trial",
        ctaHref: "https://app.finza.africa/signup?workspace=service&plan=business&trial=1",
        addedText: "Everything in Professional, plus:",
        groups: [
            {
                name: "Core Accounting Infrastructure",
                items: [
                    "General Ledger (system-generated and continuously updated)",
                    "Chart of Accounts management",
                    "Trial Balance (automatically maintained)"
                ]
            },
            {
                name: "Reconciliation & Accuracy Control",
                items: [
                    "Transaction reconciliation",
                    "Bank reconciliation"
                ]
            },
            {
                name: "Financial Governance",
                items: [
                    "Accounting period management",
                    "Period closing controls"
                ]
            },
            {
                name: "Capital & Financial Structuring",
                items: [
                    "Loan tracking and management",
                    "Equity tracking and structuring",
                    "Corporate Income Tax (CIT) provisions"
                ]
            },
            {
                name: "Audit & System Integrity",
                items: [
                    "Full system audit log",
                    "End-to-end financial traceability"
                ]
            }
        ]
    }
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
                            Service Workspace Pricing
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                            Built for service businesses managing clients, invoices, and financial operations.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Choose the plan that matches the level of control your business needs.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ 14-day free trial
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plansData.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col rounded-xl border shadow-sm overflow-hidden ${
                                    plan.highlight
                                        ? "border-zinc-800 bg-white ring-1 ring-zinc-800 transform lg:scale-[1.02] z-10"
                                        : "border-zinc-200 bg-zinc-50/50"
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="bg-[#0F172A] text-white text-center text-xs font-bold py-2 tracking-wide uppercase">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h2>
                                        <p className="text-sm font-medium text-zinc-600 mb-6 min-h-[40px]">
                                            {plan.subtitle}
                                        </p>
                                        <div className="flex items-baseline gap-1.5 mb-2">
                                            <span className="text-4xl font-extrabold text-zinc-900">
                                                GHS {plan.price}
                                            </span>
                                            <span className="text-sm font-medium text-zinc-500">/ month</span>
                                        </div>
                                        <p className="text-xs font-semibold text-emerald-600 mb-6">
                                            14-day free trial on the {plan.name} plan
                                        </p>
                                        
                                        <a
                                            href={plan.ctaHref}
                                            className={`block w-full rounded-md px-4 py-3 text-center text-sm font-bold shadow-sm transition-colors ${
                                                plan.highlight 
                                                    ? "bg-[#0F172A] text-white hover:bg-[#0F172A]/90" 
                                                    : "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                                            }`}
                                        >
                                            {plan.cta}
                                        </a>
                                    </div>

                                    <div className="flex-1">
                                        {plan.addedText && (
                                            <p className="text-sm font-bold text-zinc-900 mt-4 mb-6 pb-2 border-b border-zinc-200">
                                                {plan.addedText}
                                            </p>
                                        )}

                                        <div className={`space-y-8 ${!plan.addedText ? 'mt-4' : ''}`}>
                                            {plan.groups.map((group) => (
                                                <div key={group.name}>
                                                    <p className="text-sm font-bold text-zinc-900 mb-3 block">
                                                        {group.name}
                                                    </p>
                                                    <ul className="space-y-2.5">
                                                        {group.items.map((item) => (
                                                            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                                                                <svg
                                                                    className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2.5"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="leading-snug">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto space-y-4">
                        <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">Built for structured businesses</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Finza is designed for businesses that need accurate numbers, consistent records, and financial visibility as they operate.
                            </p>
                        </div>
                        <p className="text-sm text-zinc-500 pt-4">
                            Note: Trial applies to the selected Service plan. You can subscribe at any time before the trial ends.
                        </p>
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
                                <AccordionTrigger>How does the 14-day free trial work?</AccordionTrigger>
                                <AccordionContent>
                                    Your first 14 days on any Service plan are free with no card required. At the end of that period, you&apos;ll be prompted to subscribe to continue. There is no automatic charge — you choose when to activate billing. If you don&apos;t subscribe, your workspace moves to read-only and your data remains intact.
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
                            Start your 14-day free trial.
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            No card required. Real-time bookkeeping, Ghana VAT handling, and financial reports from day one.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                            <a
                                href="https://app.finza.africa/signup?workspace=service&plan=starter&trial=1"
                                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
                            >
                                Get started free
                            </a>
                            <Link
                                href="/demo"
                                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
                            >
                                Preview the Service Workspace →
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
