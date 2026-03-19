import { Metadata } from "next";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Finza Privacy Policy — how we collect, use, and protect your data.",
    alternates: {
        canonical: "https://www.finza.africa/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Container className="py-24 max-w-3xl mx-auto">
                <div className="space-y-10">
                    <div className="space-y-4 border-b border-zinc-100 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Legal</p>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Privacy Policy</h1>
                        <p className="text-zinc-500 text-sm">Last updated: March 2026</p>
                    </div>

                    <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us, including business name, email address,
                                and financial records you enter into the Finza platform. We also collect usage data such
                                as log files, IP addresses, and browser type to operate and improve our service.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">2. How We Use Your Information</h2>
                            <p>
                                We use your information to provide and maintain the Finza service, process transactions,
                                send service-related communications, and comply with legal obligations including Ghana Revenue
                                Authority (GRA) requirements where applicable.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">3. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your financial data. Access is
                                controlled through role-based permissions. We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">4. Data Retention</h2>
                            <p>
                                We retain your data for as long as your account is active or as required by law. Financial
                                records may be retained for a minimum of 7 years in compliance with Ghanaian accounting
                                and tax regulations.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">5. Contact Us</h2>
                            <p>
                                For privacy-related inquiries, contact us at{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
            <RelatedClusterLinks
                related={[
                    { href: "/security", label: "Security", desc: "Data & integrity" },
                    { href: "/contact", label: "Contact", desc: "Privacy questions" },
                ]}
            />
            <Footer />
        </main>
    );
}
