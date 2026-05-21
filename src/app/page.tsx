import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/pricing-section";
import { HomeHero } from "@/components/home/home-hero";
import {
  HomeAssistSection,
  HomeDocumentsSection,
  HomeOperationsSection,
  HomeProblemSection,
  HomeSeoLinksSection,
  HomeTrustAndCtaSection,
  HomeWorkflowSection,
} from "@/components/home/home-sections";
import { faqPageSchema, homePageFaqForSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Software for Service Businesses in Ghana | Finza",
  description:
    "Finza helps Ghanaian service businesses create proposals, quotes and invoices, track payments, capture expenses and incoming documents, manage payroll, and keep accountant-ready records in GHS.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col max-md:pb-28">
      <JsonLd data={faqPageSchema(homePageFaqForSchema)} />

      <HomeHero />
      <HomeProblemSection />
      <HomeWorkflowSection />
      <HomeDocumentsSection />
      <HomeOperationsSection />
      <HomeAssistSection />
      <PricingSection />
      <HomeTrustAndCtaSection />
      <HomeSeoLinksSection />

      <RelatedClusterLinks
        heading="More from Finza"
        related={[
          { href: "/features", label: "Features", desc: "Explore Finza features" },
          { href: "/demo", label: "Product tour", desc: "See how Finza works" },
        ]}
      />
      <Footer />
    </main>
  );
}
