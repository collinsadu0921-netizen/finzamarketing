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
import { PlanFitQuestionnaire } from "@/components/plan-fit-questionnaire";
import { PricingTiers } from "./pricing-tiers";
import { getPlanSignupHref, pricingPlansData, PLANS_STARTING_PRICE_GHS } from "@/lib/pricing-plans";
import { GhanaProofChips, PRICING_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";
import { ProductProofSection } from "@/components/product-proof-section";
import {
    homePrimaryBtn,
    homeSecondaryBtn,
    sectionLead,
    sectionTitle,
    siteGhsBadge,
    siteInfoCard,
    sitePageHero,
} from "@/components/home/home-ui";

export const metadata: Metadata = {
    title: "Pricing | Find the Right Finza Plan",
    description:
        "Find the right Finza plan for your Ghanaian service business. Answer a few questions or book a walkthrough. Plans start from GH₵149/month.",
    alternates: {
        canonical: "https://www.finza.africa/pricing",
    },
};

export default function PricingPage() {
    const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

    return (
        <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
            <JsonLd
                data={[
                    faqPageSchema(pricingPageFaqForSchema),
                    breadcrumbListSchema([
                        { name: "Home", path: "/" },
                        { name: "Pricing", path: "/pricing" },
                    ]),
                ]}
            />

            <section className={`${sitePageHero} pt-28 pb-8 md:pb-10`}>
                <div className="pointer-events-none absolute inset-0 site-hero-glow" />
                <Container>
                    <div className="relative max-w-4xl space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Pricing</p>
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                            Find the right Finza plan for your business
                        </h1>
                        <p className={`${sectionLead} font-medium`}>
                            Start with a 14-day free trial, compare public prices in GHS, or use
                            plan fit if you want help choosing.
                        </p>
                        <p className={siteGhsBadge}>
                            Plans start from GH₵{PLANS_STARTING_PRICE_GHS.toLocaleString()}/month
                        </p>
                        <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
                            <a href={starterSignupHref} className={homePrimaryBtn}>
                                Start 14-day free trial
                            </a>
                            <Link href="/contact" className={homeSecondaryBtn}>
                                Book a walkthrough
                            </Link>
                        </div>
                        <GhanaProofChips chips={PRICING_PROOF_CHIPS} size="xs" />
                    </div>
                </Container>
            </section>

            <PricingTiers />

            <ProductProofSection
                assetIds={["dashboard", "invoice-sample"]}
                eyebrow="What the plans support"
                heading="Choose a plan around the work you actually manage"
                lead="The right plan depends on how much of the workflow you want to manage in Finza: invoicing, payment tracking, expenses, payroll, reports, and professional review."
            />

            <PlanFitQuestionnaire />

            <section className="border-b border-zinc-100 bg-white py-12 md:py-14">
                <Container>
                    <div className={`${siteInfoCard} mx-auto max-w-4xl space-y-5 p-6 sm:p-7`}>
                        <h2 className={sectionTitle}>Trial and billing</h2>
                        <div className="space-y-3">
                            <p className={sectionLead}>
                                Your 14-day trial gives you time to explore Finza before choosing a paid
                                plan. No card is required to start. If you want help before starting,
                                use plan fit or book a walkthrough.
                            </p>
                            <p className={sectionLead}>
                                Plans can be billed monthly, quarterly, or annually. Plan changes take
                                effect from the next billing period. Finza does not apply prorated credits
                                for unused time. Cancel before your next billing date to avoid renewal.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-section-surface border-b border-zinc-200/80 py-12 md:py-14">
                <Container>
                    <div className="mx-auto max-w-2xl space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Billing & account</p>
                            <h2 className={sectionTitle}>Common questions</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full rounded-2xl border border-zinc-200/90 bg-white px-4 shadow-sm shadow-zinc-900/[0.04] sm:px-6">
                            {pricingPageFaqForSchema.map((item) => (
                                <AccordionItem key={item.questionName} value={item.questionName}>
                                    <AccordionTrigger>{item.questionName}</AccordionTrigger>
                                    <AccordionContent>{item.acceptedAnswerText}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
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
