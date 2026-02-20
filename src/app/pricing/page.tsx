import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Simple, transparent pricing for Ghanaian businesses of all sizes.",
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto">
                        No hidden fees. No credit card required to start.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <div className="pt-12">
                <PricingSection />
            </div>

            {/* FAQ Section */}
            <section className="py-24 bg-secondary/30 border-t">
                <div className="container mx-auto px-6 max-w-[800px]">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Do you support Ghana VAT?</AccordionTrigger>
                            <AccordionContent>
                                Yes! Finza is built specifically for the Ghanaian market. We support Standard Rate, Flat Rate Scheme, and all relevant levies (NHIL, GETFund, COVID-19).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I invite my accountant?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. You can invite your accountant or bookkeeper to your organization for free. They will have their own login and permissions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is my data secure?</AccordionTrigger>
                            <AccordionContent>
                                We use bank-grade encryption and secure cloud hosting. Your data is backed up daily and you can export it at any time.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                            <AccordionContent>
                                Yes, our Starter plan is free forever for small businesses. The Pro plan comes with a 14-day free trial.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Which currency do you support?</AccordionTrigger>
                            <AccordionContent>
                                Our primary currency is Ghana Cedis (GHS), but we support multi-currency transactions in USD, GBP, and EUR with automatic exchange rate updates.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </section>

            <Footer />
        </main>
    );
}
