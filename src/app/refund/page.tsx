import { Metadata } from "next";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
    title: "Refund and Cancellation Policy",
    description:
        "Finza Refund and Cancellation Policy — how subscription payments, cancellations, and refunds work for Finza business plans.",
    alternates: {
        canonical: "https://www.finza.africa/refund",
    },
};

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-white">
            <Container className="py-24 max-w-3xl mx-auto">
                <div className="space-y-10">
                    <div className="space-y-4 border-b border-zinc-100 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Legal</p>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                            Refund and Cancellation Policy
                        </h1>
                        <p className="text-zinc-500 text-sm">Effective date: 17 November 2026</p>
                    </div>

                    <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">1. Introduction</h2>
                            <p>
                                Finza provides subscription-based business management software to companies, organisations,
                                and other business entities. This Refund and Cancellation Policy governs subscriptions
                                purchased for business and professional use.
                            </p>
                            <p>
                                By purchasing a Finza subscription, the subscribing business agrees to the applicable
                                subscription terms, including the payment, cancellation, and refund conditions outlined
                                below.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">2. Subscription Payments</h2>
                            <p>Finza offers monthly, quarterly, and annual subscription plans.</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Subscription fees are payable in advance.</li>
                                <li>Access to paid features is provided according to the purchased subscription.</li>
                                <li>Subscription pricing and billing periods are confirmed before payment.</li>
                                <li>
                                    Discounts, promotional offers, and negotiated rates apply only under their agreed
                                    conditions.
                                </li>
                            </ul>
                            <p>
                                The subscribing business is responsible for selecting a plan appropriate for its operational
                                requirements.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">3. Non-Refundable Subscriptions</h2>
                            <p>
                                <strong>
                                    All subscription payments are generally final and non-refundable once the subscription
                                    has been activated and the contracted services have been made available.
                                </strong>
                            </p>
                            <p>Finza does not ordinarily issue refunds or prorated credits for:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Unused subscription periods.</li>
                                <li>Early cancellation.</li>
                                <li>Changes in business requirements.</li>
                                <li>A business deciding to discontinue using Finza.</li>
                                <li>Failure to use all features included in a purchased plan.</li>
                                <li>Business closure, restructuring, or changes in management.</li>
                                <li>Requests to downgrade during an active billing period.</li>
                            </ul>
                            <p>Exceptions are addressed in Section 5.</p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">4. Annual Subscriptions</h2>
                            <p>
                                Annual subscriptions provide access to the selected Finza plan for 12 months. Annual
                                subscription payments are made in advance and may include preferential pricing.
                            </p>
                            <p>Where a business purchases an annual subscription:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>The subscription remains valid for the agreed 12-month period.</li>
                                <li>Early cancellation does not ordinarily qualify for a refund.</li>
                                <li>Unused months are not eligible for prorated reimbursement.</li>
                                <li>
                                    Cancellation prevents future renewal without terminating the remaining paid subscription
                                    period.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">5. Refund Exceptions</h2>
                            <p>Finza may issue refunds under the following circumstances:</p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>
                                    <strong>Duplicate payments:</strong> A verified duplicate payment has been processed.
                                </li>
                                <li>
                                    <strong>Incorrect billing:</strong> Finza has collected an amount exceeding the agreed
                                    subscription fee.
                                </li>
                                <li>
                                    <strong>Failure to deliver contracted services:</strong> Finza is unable to provide the
                                    purchased service and cannot provide an appropriate remedy.
                                </li>
                                <li>
                                    <strong>Material service failure:</strong> A substantial, verified failure prevents the
                                    business from using the contracted service, and an appropriate resolution cannot be
                                    provided.
                                </li>
                                <li>
                                    <strong>Legal obligations:</strong> A refund or other remedy is required under applicable
                                    law or the governing agreement.
                                </li>
                            </ul>
                            <p>
                                Refund decisions will be based on the circumstances, contractual obligations, and applicable
                                law.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">6. Subscription Cancellation</h2>
                            <p>
                                Businesses may request cancellation by contacting{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>
                                . Cancellation ordinarily takes effect at the end of the current paid billing period.
                            </p>
                            <p>Following cancellation:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>
                                    The business retains access until the paid subscription expires, subject to the
                                    applicable agreement.
                                </li>
                                <li>No further renewal charges will be collected.</li>
                                <li>Unused subscription periods are not ordinarily refundable.</li>
                                <li>Continued access after the subscription expires requires renewal.</li>
                            </ul>
                            <p>
                                Where automatic renewal is enabled, cancellation must be requested before the applicable
                                renewal date to prevent the next charge.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">7. Plan Upgrades and Downgrades</h2>
                            <p>Businesses may request changes to their subscription plans.</p>
                            <p>
                                Upgrades may take effect during an active billing period under an agreed payment
                                arrangement. Downgrades ordinarily take effect at the beginning of the next billing period.
                            </p>
                            <p>
                                Finza does not ordinarily issue refunds or credits for unused features when a business
                                voluntarily downgrades.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">8. Promotional and Negotiated Subscriptions</h2>
                            <p>
                                Finza may offer introductory discounts, promotional rates, and individually negotiated
                                subscription pricing. Such arrangements are subject to the agreed terms.
                            </p>
                            <p>Unless expressly agreed otherwise:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Promotional pricing applies only for the specified period.</li>
                                <li>Special pricing does not automatically continue upon renewal.</li>
                                <li>Subsequent renewals are subject to the applicable agreed renewal pricing.</li>
                                <li>Discounted subscriptions remain subject to this Refund and Cancellation Policy.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">9. Free Trials</h2>
                            <p>Finza may provide trial access to eligible businesses.</p>
                            <p>
                                Trial access allows businesses to evaluate the software before purchasing a paid
                                subscription. A free trial does not automatically create a payment obligation.
                            </p>
                            <p>
                                A business that elects to continue using Finza after its trial must purchase an applicable
                                subscription.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">10. Service Availability</h2>
                            <p>Finza aims to maintain reliable access to its services.</p>
                            <p>
                                Occasional maintenance, technical interruptions, and updates may occur. Temporary service
                                interruptions do not automatically entitle a business to a refund.
                            </p>
                            <p>
                                Where a material service failure prevents access to contracted functionality, Finza will
                                assess the circumstances and determine an appropriate remedy in accordance with the
                                agreement and applicable law.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">11. Business Data After Cancellation</h2>
                            <p>
                                Businesses remain responsible for exporting records they require before their subscription
                                expires.
                            </p>
                            <p>
                                Data access, retention, and deletion following cancellation are governed by Finza&apos;s Terms
                                of Service, Privacy Policy, and applicable legal obligations.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">12. Refund Requests and Billing Disputes</h2>
                            <p>
                                Businesses seeking a refund or reporting a billing discrepancy must contact{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>
                                .
                            </p>
                            <p>The request should include:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Registered business name.</li>
                                <li>Finza account email.</li>
                                <li>Subscription plan.</li>
                                <li>Payment date and transaction reference.</li>
                                <li>Description of the billing issue or refund request.</li>
                            </ul>
                            <p>Finza will review the request and communicate the outcome.</p>
                            <p>
                                Approved refunds will be processed through an appropriate payment method within a reasonable
                                period or any period required by law.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">13. Changes to This Policy</h2>
                            <p>
                                Finza may update this policy to reflect changes in its services, commercial practices, or
                                legal obligations. Updates will be published on the official Finza website.
                            </p>
                            <p>
                                Material changes affecting existing contractual commitments will be handled in accordance
                                with the applicable agreement and law.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">14. Governing Law</h2>
                            <p>This policy is governed by the laws of the Republic of Ghana.</p>
                            <p>
                                Nothing in this policy excludes contractual remedies or statutory rights that cannot legally
                                be excluded.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-zinc-900">15. Contact Information</h2>
                            <p>
                                For refund and cancellation enquiries, contact{" "}
                                <a href="mailto:hello@finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    hello@finza.africa
                                </a>{" "}
                                or visit{" "}
                                <a href="https://www.finza.africa" className="text-zinc-900 font-medium underline underline-offset-2">
                                    https://www.finza.africa
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
            <RelatedClusterLinks
                related={[
                    { href: "/terms", label: "Terms of Service", desc: "Subscription terms" },
                    { href: "/privacy", label: "Privacy Policy", desc: "Data use" },
                    { href: "/contact", label: "Contact", desc: "Billing questions" },
                ]}
            />
            <Footer />
        </main>
    );
}
