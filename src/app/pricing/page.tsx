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

export const metadata: Metadata = {
    title: "Pricing — Accounting Software for Ghanaian Businesses | Finza",
    description:
        "Finza workspace pricing: Retail at GHS 250/month, Service at GHS 200/month, Accountant at GHS 700/month. First month free, no card required. Cancel anytime.",
    alternates: {
        canonical: "https://finza.africa/pricing",
    },
};

const workspaces = [
    {
        id: "retail",
        name: "Retail Workspace",
        audience: "For shops, pharmacies & inventory businesses",
        price: "250",
        description:
            "For businesses that sell physical goods. POS, stock tracking, and accounting work as one system. Every sale posts inventory, COGS, and VAT to the ledger automatically.",
        features: [
            "Point-of-sale with automatic ledger posting",
            "Inventory tracking — stock levels always current",
            "COGS calculated and posted with every sale",
            "Ghana VAT, NHIL and GETFund separated at transaction",
            "Real-time income statement and balance sheet",
            "Aged receivables and transaction history",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: false,
        seoLink: "/accounting-software-for-retailers-ghana",
        seoLabel: "Retail accounting software →",
    },
    {
        id: "service",
        name: "Service Workspace",
        audience: "For agencies, consultants & service providers",
        price: "200",
        description:
            "For businesses that bill for services. Raise invoices, track what clients owe, record expenses — all posted to a live balanced ledger without any manual accounting step.",
        features: [
            "Invoice creation with automatic AR posting",
            "Payment recording clears receivables instantly",
            "Expense tracking with immediate ledger entries",
            "Ghana VAT, NHIL and GETFund on all invoices",
            "Real-time P&L, balance sheet, aged AR",
            "Period management and audit trail",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: false,
        seoLink: "/accounting-software-for-service-businesses-ghana",
        seoLabel: "Service business accounting →",
    },
    {
        id: "accountant",
        name: "Accountant Workspace",
        audience: "For accounting firms and freelance accountants",
        price: "700",
        description:
            "Manage multiple Ghanaian client ledgers from a single professional workspace. Period locking, manual journal entries, reversal-based corrections, and structured client oversight.",
        features: [
            "Access to all client workspaces under one login",
            "Manual journal entries and adjustments",
            "Period locking — freeze closed books permanently",
            "Corrections via reversals — audit trail never modified",
            "GRA-ready VAT reports for each client",
            "Real-time trial balance, P&L, and balance sheet per client",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: true,
        seoLink: "/accountants",
        seoLabel: "About the accountant workspace →",
    },
];

const comparisonRows = [
    { feature: "General ledger (double-entry)", retail: true, service: true, accountant: true },
    { feature: "Real-time financial reports", retail: true, service: true, accountant: true },
    { feature: "Ghana VAT, NHIL & GETFund", retail: true, service: true, accountant: true },
    { feature: "Point-of-sale (POS)", retail: true, service: false, accountant: false },
    { feature: "Inventory tracking & COGS", retail: true, service: false, accountant: false },
    { feature: "Invoicing with AR posting", retail: false, service: true, accountant: false },
    { feature: "Accounts receivable & aged AR", retail: false, service: true, accountant: false },
    { feature: "Manual journal entries", retail: false, service: false, accountant: true },
    { feature: "Period locking", retail: false, service: false, accountant: true },
    { feature: "Multi-client workspace access", retail: false, service: false, accountant: true },
    { feature: "Reversal-based corrections", retail: true, service: true, accountant: true },
    { feature: "Audit-ready records", retail: true, service: true, accountant: true },
    { feature: "Data export (CSV)", retail: true, service: true, accountant: true },
];

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">

            {/* ── HEADER ── */}
            <section className="pt-28 pb-16 border-b border-zinc-100">
                <Container>
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
                            Simple pricing.<br />Built for Ghanaian businesses.
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            One workspace per business type. No hidden tiers, no feature gating. Start free — upgrade when you&apos;re ready.
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

            {/* ── WHICH WORKSPACE SHOULD I CHOOSE ── */}
            <section className="py-14 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Choosing a workspace</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Which workspace should I choose?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                {
                                    workspace: "Retail Workspace",
                                    price: "GHS 250/mo",
                                    for: "You sell physical goods, manage stock, and process sales at a point of sale — whether in a shop, pharmacy, or market stall. You need inventory tracking and automatic COGS accounting.",
                                },
                                {
                                    workspace: "Service Workspace",
                                    price: "GHS 200/mo",
                                    for: "You bill clients for services — consulting, design, construction, healthcare, logistics. You raise invoices, track what clients owe, and record operating expenses.",
                                },
                                {
                                    workspace: "Accountant Workspace",
                                    price: "GHS 700/mo",
                                    for: "You are an accountant or bookkeeper managing Ghanaian clients. You need journal entry access, the ability to lock periods, and oversight of multiple client ledgers from one login.",
                                },
                            ].map((block) => (
                                <div key={block.workspace} className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <p className="text-sm font-bold text-zinc-900">{block.workspace}</p>
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
                        {workspaces.map((ws) => (
                            <div
                                key={ws.id}
                                className={`flex flex-col rounded-xl border shadow-sm overflow-hidden ${
                                    ws.highlight
                                        ? "border-zinc-800 bg-white ring-1 ring-zinc-800"
                                        : "border-zinc-200 bg-white"
                                }`}
                            >
                                {ws.highlight && (
                                    <div className="bg-[#0F172A] text-white text-center text-xs font-bold py-2 tracking-wide uppercase">
                                        For Accountants
                                    </div>
                                )}

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
                                            {ws.audience}
                                        </p>
                                        <h2 className="text-xl font-bold text-zinc-900 mb-3">{ws.name}</h2>
                                        <div className="flex items-baseline gap-1.5 mb-4">
                                            <span className="text-4xl font-extrabold text-zinc-900">
                                                GHS {ws.price}
                                            </span>
                                            <span className="text-sm font-medium text-zinc-500">/ month</span>
                                        </div>
                                        <p className="text-xs font-semibold text-emerald-600 mb-4">
                                            First month free — no card needed
                                        </p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            {ws.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {ws.features.map((f) => (
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
                                            href={ws.ctaHref}
                                            className="block w-full rounded-md bg-[#0F172A] px-4 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
                                        >
                                            {ws.cta} — no card required
                                        </a>
                                        <Link
                                            href={ws.demo}
                                            className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
                                        >
                                            Preview this workspace
                                        </Link>
                                        <Link
                                            href={ws.seoLink}
                                            className="block text-center text-xs text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-2"
                                        >
                                            {ws.seoLabel}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-zinc-500 mt-10">
                        Each workspace is billed separately. You can hold multiple workspaces under one account.
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
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Retail</th>
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Service</th>
                                        <th className="text-center px-4 py-4 font-semibold text-zinc-900">Accountant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, i) => (
                                        <tr key={row.feature} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                                            <td className="px-6 py-3.5 text-zinc-700">{row.feature}</td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.retail ? (
                                                    <svg className="h-4 w-4 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <span className="text-zinc-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.service ? (
                                                    <svg className="h-4 w-4 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <span className="text-zinc-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                {row.accountant ? (
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
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Every workspace includes</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Core system — no add-ons needed.
                            </h2>
                            <p className="text-sm text-zinc-600">
                                Every Finza workspace ships with the complete accounting engine. There are no feature tiers or bolt-on modules.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "General ledger",
                                    desc: "All transactions post to a double-entry general ledger automatically. The ledger is always balanced.",
                                },
                                {
                                    title: "Real-time financial reports",
                                    desc: "Income statement, balance sheet, and trial balance — always current, never assembled by hand.",
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
                                    title: "Period management",
                                    desc: "Open and close accounting periods. Lock history once reviewed. Prevent back-dated entries.",
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
                                    Your first month on any workspace is free with no card required. At the end of that period, you&apos;ll be prompted to subscribe to continue. There is no automatic charge — you choose when to activate billing. If you don&apos;t subscribe, your workspace moves to read-only and your data remains intact.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="billing-cycle">
                                <AccordionTrigger>When am I billed?</AccordionTrigger>
                                <AccordionContent>
                                    Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends. No partial refunds — you keep access through the end of the month you paid for.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="multiple-workspaces">
                                <AccordionTrigger>Can I have more than one workspace?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Workspaces are independent and billed separately. A business owner could hold a Retail Workspace for their shop and a Service Workspace for a consultancy they also operate. An accountant could hold an Accountant Workspace while their clients hold their own workspaces. Each workspace has its own ledger — they do not share data.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="upgrade">
                                <AccordionTrigger>Can I switch or add a different workspace?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can add a different workspace type at any time. Each workspace maintains its own ledger, so your existing data is never affected when you add or change a workspace. You cannot currently merge two workspaces — each maintains separate books.
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
                                    You retain full access until the end of your current billing period. After that, your workspace moves to read-only mode — you can view and export everything, but you cannot post new transactions. Your data is not deleted immediately. You can reactivate at any time by choosing a subscription plan.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="accountant-pricing">
                                <AccordionTrigger>Does my accountant pay separately for access?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Your accountant manages their own Accountant Workspace (GHS 700/month), which gives them access to your workspace as a client. Your own workspace subscription (Retail or Service) is billed separately. The accountant&apos;s fee covers their professional tools — your workspace fee covers your own ledger.
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

            <Footer />
        </main>
    );
}
