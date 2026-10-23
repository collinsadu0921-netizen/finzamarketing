import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";
import { GhanaProofChips, CONTACT_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";
import {
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
  siteFormCard,
  sitePageHero,
} from "@/components/home/home-ui";

export const metadata: Metadata = {
  title: "Contact Finza - Questions and Support",
  description:
    "Contact Finza with questions about the product, records, payroll, or partnerships. Request a guided trial to have the Finza team take you through the product.",
  alternates: {
    canonical: "https://www.finza.africa/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqPageSchema([
            {
              questionName: "How can I evaluate Finza?",
              acceptedAnswerText: "Request a guided trial. Finza will contact you to understand your business needs and guide you through the product.",
            },
            {
              questionName: "Can I contact Finza before requesting a guided trial?",
              acceptedAnswerText:
                "Yes. Use this page for general questions. Request a guided trial when you want the Finza team to understand your business and take you through Finza.",
            },
            {
              questionName: "Can accountants contact Finza?",
              acceptedAnswerText:
                "Yes. Accountants can ask how Finza handles records, reports, exports, audit logs, and review workflows.",
            },
            {
              questionName: "Can I ask about Ghana tax lines?",
              acceptedAnswerText:
                "Yes. Finza supports Ghana tax lines where applicable, but your accountant or tax adviser should confirm the correct treatment for your business.",
            },
            {
              questionName: "Can I ask about partnerships or integrations?",
              acceptedAnswerText:
                "Yes. You can contact us about partnerships, integrations, or business collaboration.",
            },
          ]),
        ]}
      />

      <section className={`${sitePageHero} pt-28 pb-8 md:pb-10`}>
        <div className="pointer-events-none absolute inset-0 site-hero-glow" />
        <Container>
          <div className="relative mx-auto max-w-4xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Contact</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Contact Finza
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
              Send a message if you have a question. If you want the Finza team to understand your
              business and take you through Finza, request a guided trial.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/request-trial?from=contact" className={homePrimaryBtn}>
                Request a guided trial
              </Link>
              <WhatsAppCta
                source="contact"
                label="Chat on WhatsApp"
                className={homeSecondaryBtn}
                iconClassName="text-[#25D366]"
              />
            </div>
            <p className="text-sm text-zinc-500">
              Prefer to explore first?{" "}
              <Link href="/product-tour" className="font-medium text-zinc-700 underline underline-offset-2">Explore the product tour</Link>
            </p>
            <GhanaProofChips chips={CONTACT_PROOF_CHIPS} size="xs" className="max-w-md md:hidden" />
          </div>
        </Container>
      </section>

      <section
        id="contact-form"
        className="scroll-mt-28 border-b border-zinc-200/80 bg-white py-10 md:py-12"
      >
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="space-y-3 lg:pt-1">
              <h2 className={sectionTitle}>Send a message</h2>
              <p className={sectionLead}>
                Fill in your details and we&apos;ll respond to your question.
              </p>
              <GhanaProofChips chips={CONTACT_PROOF_CHIPS} size="xs" className="hidden max-w-sm md:flex" />
            </div>
            <div className={siteFormCard}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section-surface border-b border-zinc-200/80 py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="w-full rounded-2xl border border-zinc-200/90 bg-white px-4 shadow-sm sm:px-6">
              <AccordionItem value="q1">
                <AccordionTrigger>How can I evaluate Finza?</AccordionTrigger>
                <AccordionContent>
                  Request a guided trial. Finza will contact you to understand your business needs and guide you through the product.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I contact Finza before requesting a guided trial?</AccordionTrigger>
                <AccordionContent>
                  Yes. Use this page for general questions. Request a guided trial when you want the Finza team to understand your business and take you through Finza.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Can accountants contact Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. Accountants can ask how Finza handles records, reports, exports, audit logs, and review workflows.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can I ask about Ghana tax lines?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza supports Ghana tax lines where applicable, but your accountant or tax adviser should confirm the correct treatment for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Can I ask about partnerships or integrations?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can contact us about partnerships, integrations, or business collaboration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/product-tour", label: "Explore the product tour", desc: "Self-guided product tour" },
          { href: "/request-trial?from=contact", label: "Request a guided trial", desc: "Tell us about your business" },
          { href: "/features", label: "Features", desc: "See Finza features" },
        ]}
      />
      <Footer />
    </main>
  );
}
