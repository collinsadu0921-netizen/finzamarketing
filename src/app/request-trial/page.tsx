import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { GuidedTrialForm } from "@/components/guided-trial-form";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { ProductProofSection } from "@/components/product-proof-section";
import { GhanaProofChips, CONTACT_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  breadcrumbListSchema,
  faqPageSchema,
  guidedTrialFaqForSchema,
} from "@/lib/schema";
import { normalizeTrialPlacement } from "@/lib/trial-request";
import {
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
  siteFormCard,
  siteInfoCard,
  sitePageHero,
} from "@/components/home/home-ui";

export const metadata: Metadata = {
  title: "Request a Guided Trial for Your Ghanaian Business",
  description:
    "Request a guided trial of Finza. Tell us about your business and the Finza team will contact you to understand your needs and guide you through the product.",
  alternates: {
    canonical: "https://www.finza.africa/request-trial",
  },
};

const NEXT_STEPS = [
  {
    title: "Tell us about your business",
    body: "Share your contact details, the work you do, and the capabilities you want to see.",
  },
  {
    title: "We contact you to understand your needs",
    body: "The Finza team follows up to learn how your business runs and what you need from accounting software.",
  },
  {
    title: "We guide you through Finza",
    body: "We take you through the capabilities that matter to your business.",
  },
] as const;

export default async function RequestTrialPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const placement = normalizeTrialPlacement(
    Array.isArray(params.from) ? params.from[0] : params.from
  );

  return (
    <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Request a guided trial", path: "/request-trial" },
          ]),
          faqPageSchema(guidedTrialFaqForSchema),
        ]}
      />

      <section className={`${sitePageHero} pt-28 pb-10 md:pb-12`}>
        <div className="pointer-events-none absolute inset-0 site-hero-glow" />
        <Container>
          <div className="relative mx-auto max-w-4xl space-y-4">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Request a guided trial
            </h1>
            <p className={`${sectionLead} max-w-3xl font-medium`}>
              Tell us about your business and submit your details. The Finza team will contact you,
              understand your needs, and take you through Finza.
            </p>
            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
              <WhatsAppCta
                source="request_trial"
                label="Chat on WhatsApp"
                className={homePrimaryBtn}
                iconClassName="text-[#25D366]"
              />
              <Link href="#request-trial-form" className={homeSecondaryBtn}>
                Request through form
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Both options start the same guided-trial conversation.
            </p>
            <GhanaProofChips chips={CONTACT_PROOF_CHIPS} size="xs" />
          </div>
        </Container>
      </section>

      <section
        id="request-trial-form"
        className="scroll-mt-28 border-b border-zinc-200/80 bg-white py-12 md:py-16"
      >
        <Container>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className={sectionTitle}>What happens next</h2>
                <p className={sectionLead}>
                  Here is what happens after you submit your details.
                </p>
              </div>

              <ol className="space-y-4">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.title} className={`${siteInfoCard} flex gap-4`}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-zinc-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-sm leading-relaxed text-zinc-600">
                Prefer to explore first?{" "}
                <Link href="/product-tour"
                  className="font-semibold text-zinc-900 underline underline-offset-2"
                >Explore the product tour</Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-zinc-900 underline underline-offset-2"
                >
                  contact Finza
                </Link>
                .
              </p>
            </div>

            <div className={siteFormCard}>
              <h2 className="text-xl font-bold text-zinc-900">Tell us about your business</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Fields marked with an asterisk are required. The Finza team will use these details
                to respond to your request.
              </p>
              <div className="mt-6">
                <GuidedTrialForm placement={placement} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProductProofSection
        assetIds={["dashboard", "invoice-sample"]}
        eyebrow="Inside Finza"
        heading="See the workspace you will explore"
        lead="See the work that matters to your business: invoices, quotes, payments, expenses, payroll, reports, and the records behind them."
      />

      <section className="home-section-surface border-b border-zinc-200/80 py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h2 className={sectionTitle}>Common questions</h2>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-2xl border border-zinc-200/90 bg-white px-4 shadow-sm shadow-zinc-900/[0.04] sm:px-6"
            >
              {guidedTrialFaqForSchema.map((item) => (
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
          { href: "/features", label: "Features", desc: "Invoices, quotes, payroll, reports" },
          { href: "/product-tour", label: "Explore the product tour", desc: "Self-guided product tour" },
          { href: "/contact", label: "Contact", desc: "Ask the Finza team" },
        ]}
      />
      <Footer />
    </main>
  );
}
