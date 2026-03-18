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
    title: "Pricing — Finza",
    description:
        "Simple, transparent pricing for Finza workspaces. Retail at 250 GHS/month, Service at 200 GHS/month, Accountant at 700 GHS/month. First month free, no card required.",
    alternates: {
        canonical: "https://finza.africa/pricing",
    },
};

const workspaces = [
    {
        id: "retail",
        name: "Retail Workspace",
        audience: "For inventory-based businesses",
        price: "250",
        description:
            "Designed for businesses that sell physical goods. POS, stock, and accounting work as one system.",
        features: [
            "Point-of-sale with automatic ledger posting",
            "Inventory tracking and COGS calculation",
            "Ghana VAT, NHIL and GETFund handling",
            "Real-time income statement and balance sheet",
            "Aged receivables and transaction history",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: false,
    },
    {
        id: "service",
        name: "Service Workspace",
        audience: "For agencies and service providers",
        price: "200",
        description:
            "Designed for businesses that bill for services. Invoicing and accounts receivable feed the ledger directly.",
        features: [
            "Invoice creation with automatic AR posting",
            "Payment recording clears receivables instantly",
            "Expense tracking with immediate ledger entries",
            "Ghana VAT, NHIL and GETFund on invoices",
            "Real-time P&L, balance sheet, aged AR",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: false,
    },
    {
        id: "accountant",
        name: "Accountant Workspace",
        audience: "For accounting professionals",
        price: "700",
        description:
            "Manage multiple client ledgers from a single portal. Purpose-built for accountants, not business owners.",
        features: [
            "Oversight of multiple client workspaces",
            "Manual journal entry and adjustments",
            "Period locking — freeze closed books",
            "Corrections via reversals, not deletion",
            "Audit log for all actions across clients",
        ],
        cta: "Start free",
        ctaHref: "https://app.finza.africa/signup",
        demo: "/demo",
        highlight: true,
    },
];

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">

            {/* ── HEADER ── */}
            <section className="pt-28 pb-16 border-b border-zinc-100">
                <Container>
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
                            Simple pricing.<br />Built for growing businesses.
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            One workspace per business type. No hidden tiers, no feature gating. Start free and upgrade only when you&apos;re ready.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ First month free
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ No card required to start
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600">
                                ✓ Upgrade anytime
                            </span>
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
                                    {/* Top */}
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

                                    {/* Features */}
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

                                    {/* Actions */}
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Common note */}
                    <p className="text-center text-sm text-zinc-500 mt-10">
                        Each workspace is billed separately. You can hold multiple workspaces under one account.
                    </p>
                </Container>
            </section>

            {/* ── WHAT'S INCLUDED IN EVERY WORKSPACE ── */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-10">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Every workspace includes</p>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Core system — no add-ons needed.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "General ledger",
                                    desc: "All transactions post to a double-entry general ledger automatically.",
                                },
                                {
                                    title: "Real-time reports",
                                    desc: "Income statement, balance sheet, and trial balance always current.",
                                },
                                {
                                    title: "Ghana tax handling",
                                    desc: "VAT, NHIL, and GETFund calculated and separated at transaction level.",
                                },
                                {
                                    title: "Audit-ready records",
                                    desc: "Append-only entries. Corrections are reversals, not deletions.",
                                },
                                {
                                    title: "Period management",
                                    desc: "Open and close accounting periods. Lock history once reviewed.",
                                },
                                {
                                    title: "Data export",
                                    desc: "Export transaction history and reports to CSV at any time.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
                                    <p className="text-sm font-bold text-zinc-900 mb-1">{item.title}</p>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 bg-white border-b border-zinc-100">
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
                                    Your first month on any workspace is free with no card required. At the end of that period, you&apos;ll be prompted to subscribe to continue. No automatic charge — you choose when to activate billing.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="billing-cycle">
                                <AccordionTrigger>When am I billed?</AccordionTrigger>
                                <AccordionContent>
                                    Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="multiple-workspaces">
                                <AccordionTrigger>Can I have more than one workspace?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Workspaces are independent and billed separately. A business owner could hold a Retail Workspace, and the same account could also connect to an Accountant Workspace if they manage clients.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="upgrade">
                                <AccordionTrigger>Can I switch or upgrade my workspace?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can add a different workspace type at any time. Each workspace maintains its own ledger, so your existing data is never affected when you add or change a workspace.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="data-ownership">
                                <AccordionTrigger>Who owns my data?</AccordionTrigger>
                                <AccordionContent>
                                    You do. Your financial records belong to your business. You can export all transaction data and reports at any time in CSV format. If you cancel, your data remains exportable for 90 days after your last billing period.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="cancel">
                                <AccordionTrigger>What happens when I cancel?</AccordionTrigger>
                                <AccordionContent>
                                    You retain full access until the end of your current billing period. After that, your workspace moves to read-only mode. Your data is not deleted — you can export everything and reactivate at any time.
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
                            First month on us. Upgrade anytime. Cancel anytime.
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
