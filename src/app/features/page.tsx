import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema } from "@/lib/schema";
import {
  FeaturesAssistSection,
  FeaturesDocumentsCostsSection,
  FeaturesExploreNav,
  FeaturesFinalCtaSection,
  FeaturesHero,
  FeaturesInvoiceCollectSection,
  FeaturesJobsMaterialsSection,
  FeaturesPayrollTeamSection,
  FeaturesReportsControlsSection,
  FeaturesWinWorkSection,
} from "@/components/features/features-sections";

export const metadata: Metadata = {
  title: "Features — Accounting, Invoicing, Payroll & Reports in Ghana",
  description:
    "Finza features for Ghanaian businesses: quotes, invoices, Hubtel invoice payments, expenses, supplier bills, payroll, reports, and Ghana tax lines where applicable.",
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
      <FeaturesDocumentsCostsSection />
      <FeaturesPayrollTeamSection />
      <FeaturesReportsControlsSection />
      <FeaturesAssistSection />
      <FeaturesFinalCtaSection />
      <Footer />
    </main>
  );
}
