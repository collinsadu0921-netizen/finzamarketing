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
    title: "Pricing | Finza Plans for Ghanaian Service Businesses",
    description:
        "Choose a Finza plan for your Ghanaian service business. Start with a 14-day free trial, then manage proposals, invoices, payments, expenses, payroll, documents, reports, and accountant-ready records in GHS.",
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

            {/* HERO */}
            <section className="pt-28 pb-16 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
                            Simple pricing for Ghanaian service businesses
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                            Start with the tools your business needs today, then move to deeper controls as your operations grow. Finza helps you manage proposals, invoices, payments, expenses, payroll, documents, reports, and accountant-ready records in GHS.
                        </p>
                        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                            <a
                                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                                className="inline-block rounded-md bg-[#0F172A] px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
                            >
                                Start 14-day free trial
                            </a>
                            <Link
                                href="/demo"
                                className="inline-block rounded-md border border-zinc-300 bg-white px-8 py-3 text-base font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
                            >
                                See how Finza works
                            </Link>
                        </div>
                        <p className="text-sm text-zinc-500">No card required to start. Choose monthly, quarterly, or annual billing.</p>
                    </div>
                </Container>
            </section>

            {/* ── PRICING TIERS ── */}
            <PricingTiers />

            {/* PRICING NOTES */}
            <section className="py-14 bg-white border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                            What happens after the trial?
                        </h2>
                        <p className="text-base leading-relaxed text-zinc-600">
                            Your 14-day trial gives you time to explore Finza before choosing a paid plan. No card is required to start.
                        </p>
                        <p className="text-base leading-relaxed text-zinc-600">
                            When the trial ends, you can choose the plan and billing cycle that fits your business. If a paid subscription is not activated, access may move to a limited or read-only state depending on your account status.
                        </p>
                    </div>
                </Container>
            </section>

            {/* BILLING RULES */}
            <section className="py-14 bg-zinc-50 border-b border-zinc-100">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Billing rules
                            </h2>
                        </div>
                        <p className="text-base leading-relaxed text-zinc-600">
                            Plans can be billed monthly, quarterly, or annually. Quarterly and annual billing give you the displayed savings compared with monthly billing.
                        </p>
                        <p className="text-base leading-relaxed text-zinc-600">
                            Plan changes take effect from the next billing period unless otherwise shown during checkout. Finza does not apply prorated adjustments or credits for unused time.
                        </p>
                        <p className="text-base leading-relaxed text-zinc-600">
                            You can cancel before your next billing date to avoid renewal. After cancellation, access continues until the end of the paid billing period.
                        </p>
                    </div>
                </Container>
            </section>

            {/* INTERNAL LINKS */}
            <section className="py-20 bg-white border-b border-zinc-100">
                <Container>
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-wrap gap-3">
                            <Link href="/features" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Features
                            </Link>
                            <Link href="/demo" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Demo
                            </Link>
                            <Link href="/contact" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Contact
                            </Link>
                            <Link href="/security" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Security
                            </Link>
                            <Link href="/accountants" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Accountants
                            </Link>
                            <Link href="/invoicing-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Invoicing software Ghana
                            </Link>
                            <Link href="/accounting-software-ghana" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:border-zinc-400">
                                Accounting software Ghana
                            </Link>
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
                                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Finza offers a 14-day free trial. No card is required to start.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="change-plan">
                                <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can change plans as your business needs change. Plan changes take effect from the next billing period unless otherwise shown during checkout. Finza does not apply prorated adjustments or credits for unused time.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="cancel">
                                <AccordionTrigger>Can I cancel?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. You can cancel before your next billing date to avoid renewal. If you cancel, access continues until the end of the paid billing period.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="fees">
                                <AccordionTrigger>Do the prices include payment processing fees?</AccordionTrigger>
                                <AccordionContent>
                                    The plan price covers your Finza subscription. Any payment processing fees, provider charges, or taxes that apply are shown separately where relevant.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="which-plan">
                                <AccordionTrigger>Which plan should I start with?</AccordionTrigger>
                                <AccordionContent>
                                    Start with Essentials if you mainly need proposals, quotes, invoices, payments, expenses, and basic reports. Choose Professional if you need supplier bills, incoming documents, payroll, WHT, VAT support, and team access. Choose Business if you need deeper accounting controls such as ledger records, journals, trial balance, bank reconciliation, period locking, audit logs, and exports.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="accountant">
                                <AccordionTrigger>Does Finza replace my accountant?</AccordionTrigger>
                                <AccordionContent>
                                    No. Finza helps organize your business records and reports. Your accountant or tax adviser should confirm the correct treatment for your business.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#0F172A] text-center">
                <Container>
                    <div className="max-w-xl mx-auto space-y-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Start with the plan that fits your business today
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            Use Finza to manage proposals, invoices, payments, expenses, documents, payroll, reports, and accountant-ready records in one connected workspace.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                            <a
                                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                                className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center"
                            >
                                Start 14-day free trial
                            </a>
                            <Link
                                href="/demo"
                                className="text-base font-semibold text-zinc-300 hover:text-white transition-colors"
                            >
                                See how Finza works
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
