import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema } from "@/lib/schema";
import {
  FeaturesAssistSection,
  FeaturesCostsPayrollSection,
  FeaturesExploreNav,
  FeaturesFinalCtaSection,
  FeaturesHero,
  FeaturesInvoiceCollectSection,
  FeaturesJobsMaterialsSection,
  FeaturesReportsControlsSection,
  FeaturesWinWorkSection,
} from "@/components/features/features-sections";

export const metadata: Metadata = {
  title: "Features | Finza Business Software for Ghanaian Service Businesses",
  description:
    "Explore Finza features for Ghanaian service businesses: proposals, quotes, invoices, payments, expenses, incoming documents, payroll, reports, Ghana tax lines, and records for professional review.",
  alternates: {
    canonical: "https://www.finza.africa/features",
  },
};

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />

      <FeaturesHero />
      <FeaturesExploreNav />
      <FeaturesWinWorkSection />
      <FeaturesJobsMaterialsSection />
      <FeaturesInvoiceCollectSection />
      <FeaturesCostsPayrollSection />
      <FeaturesReportsControlsSection />
      <FeaturesAssistSection />
      <FeaturesFinalCtaSection />
      <Footer />
    </main>
  );
}
