import { Metadata } from "next";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Finza Terms of Service — the rules that govern your use of the Finza platform.",
    alternates: {
        canonical: "https://www.finza.africa/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Container className="py-24 max-w-3xl mx-auto">
                <div className="space-y-10">
                    <div className="space-y-4 border-b border-zinc-100 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Legal</p>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Terms of Service</h1>
                        <p className="text-zinc-500 text-sm">Last updated: March 2026</p>
                    </div>

                    <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using Finza, you agree to be bound by these Terms of Service. If you do
                                not agree, you may not use the platform. These terms apply to all users of the Finza
                                platform, including business owners and accounting professionals.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">2. Use of the Service</h2>
                            <p>
                                Finza is intended for legitimate business financial management. You agree to use Finza
                                only for lawful purposes and in accordance with these Terms. You are responsible for the
                                accuracy of data you enter into the platform.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">3. Account Responsibility</h2>
                            <p>
                                You are responsible for maintaining the confidentiality of your account credentials and
                                for all activity that occurs under your account. Notify us immediately of any unauthorized
                                access at{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">4. Billing</h2>
                            <p>
                                Workspace subscriptions are billed monthly. Cancellation takes effect at the end of the
                                current billing period. We reserve the right to change pricing with 30 days&apos; notice.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">5. Limitation of Liability</h2>
                            <p>
                                Finza provides accounting tools to assist you in managing your finances. We are not
                                responsible for decisions made based on data in the platform. You should consult a
                                qualified accountant for professional financial advice.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">6. Contact</h2>
                            <p>
                                For terms-related inquiries, contact us at{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
