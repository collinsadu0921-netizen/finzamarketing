import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/home-hero";
import {
  HomeDocumentsCostsSection,
  HomeFinalCtaSection,
  HomeGhanaSection,
  HomeJobsMaterialsSection,
  HomePayrollSection,
  HomePerformanceSection,
  HomeRelatedGuidesSection,
  HomeWorkflowSection,
} from "@/components/home/home-sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Software for Service Businesses in Ghana | Finza",
  description:
    "Finza helps Ghanaian service businesses create proposals, quotes and invoices, track payments, capture expenses and incoming documents, manage payroll, and keep records for professional review in GHS.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col max-md:pb-28">
      <HomeHero />
      <HomeWorkflowSection />
      <HomeJobsMaterialsSection />
      <HomeDocumentsCostsSection />
      <HomePayrollSection />
      <HomePerformanceSection />
      <HomeGhanaSection />
      <HomeFinalCtaSection />
      <HomeRelatedGuidesSection />
      <Footer />
    </main>
  );
}
