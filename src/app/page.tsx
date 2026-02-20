
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Trust } from "@/components/trust";
import { Problem } from "@/components/problem";

import { Autoposting } from "@/components/autoposting";
import { Ghana } from "@/components/ghana";
import { Audience } from "@/components/audience";
import { PricingSection } from "@/components/pricing-section";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Autoposting />
      <Ghana />
      <Audience />
      <PricingSection />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
