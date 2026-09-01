import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { GhanaProofChips, HERO_MOBILE_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";
import { ProductScreenshotFrame } from "@/components/site/product-screenshot-frame";
import {
  homeCard,
  homePrimaryBtn,
  homeSecondaryBtn,
  ghanaChipGold,
  ghanaChipGreen,
  ghanaChipNavy,
  sectionLead,
  sectionTitle,
  siteInfoCard,
  sitePageHero,
} from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Product Tour | See How Finza Works",
    description:
        "Watch a Finza product tour for Ghanaian service businesses. See quotes, invoices, payments, expenses, payroll, reports, and records in one workflow.",
    alternates: {
        canonical: "https://www.finza.africa/demo",
    },
};

const TOUR_STEPS = [
    {
        t: "1. Prepare the client offer",
        d: "Create proposals, quotes, and proformas with customer details, scope, pricing, and terms.",
        chip: "Quotes & proformas",
        chipTone: "navy" as const,
    },
    {
        t: "2. Send the invoice",
        d: "Turn approved work into an invoice with clear totals, due dates, and Ghana tax lines where applicable.",
        chip: "GHS invoice",
        chipTone: "gold" as const,
    },
    {
        t: "3. Track payment status",
        d: "Record full or partial payments and see what is paid, unpaid, or overdue.",
        chip: "MoMo & bank details",
        chipTone: "green" as const,
    },
    {
        t: "4. Capture supporting documents",
        d: "Upload receipts, supplier bills, PDFs, and incoming documents for easier review.",
        chip: "VAT · NHIL · GETFund",
        chipTone: "gold" as const,
    },
];

const chipToneClass = {
    navy: ghanaChipNavy,
    gold: ghanaChipGold,
    green: ghanaChipGreen,
};

const AUDIENCE_AND_CAPABILITIES: { label: string; tone?: keyof typeof chipToneClass }[] = [
    { label: "Cleaning businesses", tone: "navy" },
    { label: "Contractors", tone: "navy" },
    { label: "Consultants", tone: "navy" },
    { label: "Agencies", tone: "navy" },
    { label: "GHS invoices", tone: "gold" },
    { label: "Customer statements", tone: "gold" },
    { label: "Mobile Money details", tone: "green" },
    { label: "Built-in payroll", tone: "navy" },
];

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

export default function DemoPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
            <section className={`${sitePageHero} pt-24 pb-6 md:pb-8`}>
                <div className="pointer-events-none absolute inset-0 site-hero-glow" />
                <Container>
                    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-4 text-center lg:text-left">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Product tour</p>
                            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                                See how Finza works from proposal to payment
                            </h1>
                            <p className={`${sectionLead} mx-auto max-w-xl font-medium lg:mx-0`}>
                                Watch Finza handle client documents, invoices, payments, expenses, payroll, and reports for a Ghanaian service business.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                <Link href="#watch-tour" className={homePrimaryBtn}>
                                    Watch the tour
                                </Link>
                                <a href={starterSignupHref} className={homeSecondaryBtn}>
                                    Start free trial
                                </a>
                            </div>
                            <GhanaProofChips
                                chips={HERO_MOBILE_PROOF_CHIPS.slice(0, 3)}
                                size="xs"
                                className="justify-center lg:justify-start"
                            />
                            <p className="text-sm text-zinc-500">
                                <Link href="/contact" className="font-medium text-zinc-700 underline underline-offset-2">
                                    Book a walkthrough
                                </Link>{" "}
                                when you are ready to talk through your business.
                            </p>
                        </div>
                        <ProductScreenshotFrame
                            className="mx-auto hidden w-full max-w-lg lg:block lg:max-w-none"
                            priority
                        />
                    </div>
                </Container>
            </section>

            <section
                id="watch-tour"
                className="scroll-mt-28 home-section-surface border-b border-zinc-200/80 py-10 md:py-12"
            >
                <Container>
                    <div className="mx-auto max-w-4xl space-y-4">
                        <div className="flex flex-wrap items-end justify-between gap-2">
                            <h2 className={sectionTitle}>Watch the product tour</h2>
                            <span className={cn("rounded-full border px-2.5 py-1 text-[11px] font-semibold", ghanaChipGold)}>
                                Real Finza UI
                            </span>
                        </div>
                        <div className={`${homeCard} overflow-hidden p-3 md:p-4`}>
                            <iframe
                                className="aspect-video w-full rounded-xl"
                                src="https://www.youtube.com/embed/ScD8LXyYcTw?si=hmE7b36-nPYlpcs2"
                                title="Finza Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="border-b border-zinc-100 bg-white py-10 md:py-12">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-5">
                        <h2 className={sectionTitle}>What you will see in the tour</h2>
                        <div className="grid gap-3 text-left sm:grid-cols-2">
                            {TOUR_STEPS.map((x) => (
                                <div key={x.t} className={`${siteInfoCard} p-4`}>
                                    <span
                                        className={cn(
                                            "mb-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                                            chipToneClass[x.chipTone]
                                        )}
                                    >
                                        {x.chip}
                                    </span>
                                    <p className="font-bold text-zinc-900">{x.t}</p>
                                    <p className="mt-1.5 text-sm text-zinc-600">{x.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-section-surface border-b border-zinc-200/80 py-10 md:py-12">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-4">
                        <h2 className={sectionTitle}>Built for Ghanaian service businesses</h2>
                        <p className={sectionLead}>
                            For teams that send proposals, issue invoices, track payments, manage expenses and payroll, and work with an accountant.
                        </p>
                        <ul className="flex flex-wrap gap-1.5">
                            {AUDIENCE_AND_CAPABILITIES.map((item) => (
                                <li key={item.label}>
                                    <span
                                        className={cn(
                                            "inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                                            chipToneClass[item.tone ?? "navy"]
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Finza keeps records easier to review. It does not replace your accountant or
                            tax adviser — confirm the correct treatment for your business.
                        </p>
                    </div>
                </Container>
            </section>

            <RelatedClusterLinks
                related={[
                    {
                        href: "/features",
                        label: "Features",
                        desc: "Proposal to payment workflow",
                    },
                    { href: "/pricing#find-plan", label: "Pricing", desc: "Plans in GHS" },
                ]}
            />
            <Footer />
        </main>
    );
}
