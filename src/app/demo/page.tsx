import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
    title: "Product Tour | See How Finza Works",
    description:
        "Watch a Finza product tour for Ghanaian service businesses. See how Finza helps manage proposals, quotes, invoices, payments, expenses, incoming documents, payroll, reports, and accountant-ready records.",
    alternates: {
        canonical: "https://www.finza.africa/demo",
    },
};

export default function DemoPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            {/* HERO */}
            <section className="border-b border-zinc-100 bg-white pt-24 pb-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-8 text-center">
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                            See how Finza works from proposal to payment
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-zinc-600">
                            Watch how a Ghanaian service business can use Finza to prepare client documents, send invoices, track payments, capture expenses and incoming documents, manage payroll, and keep cleaner records for accountant review.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-block rounded-md bg-[#0F172A] px-10 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-[#0F172A]/90"
                            >
                                Book a walkthrough
                            </Link>
                            <Link
                                href="/pricing#find-plan"
                                className="inline-block rounded-md border border-zinc-300 bg-white px-10 py-4 text-center text-lg font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
                            >
                                Find my plan
                            </Link>
                        </div>
                        <p className="text-sm text-zinc-500">
                            Plans start from GH₵149/month. Built for service businesses in GHS.
                        </p>
                    </div>
                </Container>
            </section>

            {/* VIDEO SECTION */}
            <section className="border-b border-zinc-100 bg-zinc-50 py-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Watch the product tour
                        </h2>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            This walkthrough shows how Finza brings the daily work of a service business into one connected workspace - from client documents to payments, expenses, reports, and accountant-ready records.
                        </p>
                        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm md:p-6">
                            <iframe
                                className="aspect-video w-full rounded-lg"
                                src="https://www.youtube.com/embed/ScD8LXyYcTw?si=hmE7b36-nPYlpcs2"
                                title="Finza Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Container>
            </section>

            {/* TOUR OVERVIEW */}
            <section className="border-b border-zinc-100 bg-white py-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            What you will see in the tour
                        </h2>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            Finza is built around the way service businesses actually work. The tour focuses on the full workflow, not only the final invoice.
                        </p>
                        <div className="grid gap-4 text-left sm:grid-cols-2">
                            {[
                                {
                                    t: "1. Prepare the client offer",
                                    d: "Create proposals, quotes, and proformas with customer details, line items, scope, pricing, and terms.",
                                },
                                {
                                    t: "2. Send the invoice",
                                    d: "Turn approved work into a professional invoice with clear totals, due dates, and Ghana tax lines where applicable.",
                                },
                                {
                                    t: "3. Track payment status",
                                    d: "Record full or partial payments and see which invoices are paid, unpaid, overdue, or still outstanding.",
                                },
                                {
                                    t: "4. Capture supporting documents",
                                    d: "Upload receipts, supplier bills, PDFs, and incoming documents so records are easier to review later.",
                                },
                                {
                                    t: "5. Review payroll and expenses",
                                    d: "Keep business costs, payroll records, supplier bills, and customer activity closer to the same workspace.",
                                },
                                {
                                    t: "6. Prepare accountant-ready records",
                                    d: "Use reports, exports, audit logs, period controls, and accounting workflows to support cleaner month-end review.",
                                },
                            ].map((x) => (
                                <div key={x.t} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                    <p className="font-bold text-zinc-900">{x.t}</p>
                                    <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* WHO THE DEMO IS FOR */}
            <section className="border-b border-zinc-100 bg-zinc-50 py-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Built for service businesses that need clearer control
                        </h2>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            Finza is designed for Ghanaian service businesses that want more structure than WhatsApp, Excel, PDFs, and scattered folders can provide.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            It is useful for companies that send client proposals, issue invoices, track payments, manage expenses, handle payroll, and need cleaner records for an accountant.
                        </p>
                        <div className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-4">
                            {[
                                "Cleaning businesses",
                                "Contractors",
                                "Consultants",
                                "Maintenance teams",
                                "Agencies",
                                "Professional service providers",
                                "Field-service businesses",
                                "Growing SMEs with accountant support",
                            ].map((item) => (
                                <div key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* WHAT FINZA HELPS WITH */}
            <section className="border-b border-zinc-100 bg-white py-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            What Finza helps you manage
                        </h2>
                        <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                "Proposals",
                                "Quotes and proformas",
                                "Invoices and receipts",
                                "Customer balances",
                                "Payment recording",
                                "Partial payments",
                                "Overdue invoices",
                                "Expenses",
                                "Supplier bills",
                                "Incoming documents",
                                "Document review",
                                "Payroll",
                                "Ghana tax lines where applicable",
                                "Reports",
                                "Accountant-ready records",
                            ].map((item) => (
                                <li key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* DISCLAIMER */}
            <section className="border-b border-zinc-100 bg-zinc-50 py-20">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Software support, not a replacement for professional advice
                        </h2>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            Finza helps organize business records, documents, payments, and reports. It does not guarantee tax compliance, replace your accountant, or remove the need to review important financial information.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600">
                            Your accountant or tax adviser should confirm the correct treatment for your business.
                        </p>
                    </div>
                </Container>
            </section>

            {/* FINAL CTA */}
            <section className="bg-[#0F172A] py-20 text-center">
                <Container>
                    <div className="mx-auto max-w-2xl space-y-6">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Ready to try Finza with your own business records?
                        </h2>
                        <p className="text-zinc-300">
                            Start with proposals, invoices, payments, expenses, documents, payroll, and reports in one connected workspace.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-block w-full rounded-md bg-white px-8 py-3 text-center text-base font-bold text-zinc-900 shadow sm:w-auto"
                            >
                                Book a walkthrough
                            </Link>
                            <Link href="/pricing#find-plan" className="inline-block w-full text-center text-base font-semibold text-zinc-300 underline-offset-4 hover:text-white sm:w-auto">
                                Find my plan
                            </Link>
                        </div>
                        <p className="text-sm text-zinc-400">
                            Explore more on{" "}
                            <Link href="/features" className="font-semibold text-zinc-200 underline underline-offset-2">
                                features
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact" className="font-semibold text-zinc-200 underline underline-offset-2">
                                contact
                            </Link>
                            .
                        </p>
                    </div>
                </Container>
            </section>

            <RelatedClusterLinks
                related={[
                    {
                        href: "/features",
                        label: "Features",
                        desc: "Proposal to payment workflow",
                    },
                    { href: "/pricing", label: "Pricing", desc: "Plans in GHS" },
                ]}
            />
        </main>
    );
}
