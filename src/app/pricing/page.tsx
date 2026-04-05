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
import { HowFinzaHelpsDayToDay, WhyBusinessesChooseFinza } from "@/components/seo-marketing-blocks";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema, pricingPageFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Pricing — Finza Plans in Ghana Cedis (GHS) | Small Business & Accountants",
    description:
        "Finza Service workspace pricing in GHS: Essentials GHS 149/mo, Professional GHS 449/mo, Business GHS 949/mo. For small businesses and accountants in Ghana. 14-day free trial, no card to start.",
    alternates: {
        canonical: "https://www.finza.africa/pricing",
    },
};

import { PricingTiers } from "./pricing-tiers";

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
                            Pricing in Ghana cedis (GHS)
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                            Clear plans for <strong className="text-zinc-900">small businesses and accountants in Ghana</strong>—one Service workspace, three tiers (Essentials, Professional, Business). All prices in <strong className="text-zinc-900">GHS</strong>.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Pick the tier that matches how much control and depth you need. Manage invoices, quotes, expenses, and reports in one place. Professional and Business plans are built for teams that also run monthly payroll—PAYE, SSNIT, approvals, and payslips—so staff costs stay consistent with your books. Read how it works on our{" "}
                            <Link href="/payroll-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                                Ghana payroll software
                            </Link>{" "}
                            page.
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

            {/* ── PRICING TIERS ── */}
            <PricingTiers />

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
                                Every Finza plan includes a full financial engine behind the scenes—so what you record matches what you see in reports, without manual assembly.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Reliable totals",
                                    desc: "Activity stays structured behind the scenes so profit, balances, and tax-related views stay consistent with what you entered.",
                                },
                                {
                                    title: "Real-time reports",
                                    desc: "Income statement and balance sheet — always current, never assembled by hand.",
                                },
                                {
                                    title: "Ghana tax lines",
                                    desc: "Support for VAT, NHIL, and GETFund presentation where applicable—confirm what applies with your accountant.",
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
                                    Subscriptions are billed monthly on the same date you activated. Payments are processed via Paystack. You can cancel at any time before the next billing date and retain access until the period ends. No partial refunds — you keep access through the end of the month you paid for. You can also save 17% by paying annually.
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

            <WhyBusinessesChooseFinza className="bg-white" />

            <HowFinzaHelpsDayToDay className="bg-zinc-50" />

            {/* ── FINAL CTA ── */}
            <section className="py-24 bg-[#0F172A] text-center">
                <Container>
                    <div className="max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Start your 14-day free trial.
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            No card required to start. Invoices, quotes, and expense tracking in GHS—Ghana tax lines where applicable—with reports your accountant can use.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                            <a
                                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
                            >
                                Try Finza free
                            </a>
                            <Link
                                href="/demo"
                                className="text-base font-semibold text-zinc-400 hover:text-white transition-colors"
                            >
                                Try the interactive demo →
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <RelatedClusterLinks
                related={[
                    { href: "/features", label: "Features", desc: "Invoices, quotes, reports" },
                    {
                        href: "/invoicing-software-ghana",
                        label: "Invoicing software Ghana",
                        desc: "Send invoices online",
                    },
                ]}
            />
            <Footer />
        </main>
    );
}
