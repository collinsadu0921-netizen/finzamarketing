import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/home-hero";
import {
  HomeDocumentsCostsSection,
  HomeFinalCtaSection,
  HomeGhanaSection,
  HomeJobsMaterialsSection,
  HomePayrollSection,
  HomeFaqSection,
  HomePerformanceSection,
  HomeRelatedGuidesSection,
  HomeWorkflowSection,
} from "@/components/home/home-sections";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, homePageFaqForSchema, softwareApplicationSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Finza — Accounting Software for Ghanaian Businesses",
  },
  description:
    "Finza is accounting software for Ghanaian businesses and SMEs. Create invoices, accept Mobile Money payments through your own Hubtel account, track expenses and supplier bills, run payroll, and see how the business is performing in GHS.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col max-md:pb-28">
      <JsonLd data={[softwareApplicationSchema(), faqPageSchema(homePageFaqForSchema)]} />
      <HomeHero />
      <HomeWorkflowSection />
      <HomeJobsMaterialsSection />
      <HomeDocumentsCostsSection />
      <HomePayrollSection />
      <HomePerformanceSection />
      <HomeGhanaSection />
      <HomeFaqSection />
      <HomeFinalCtaSection />
      <HomeRelatedGuidesSection />
      <Footer />
    </main>
  );
}
