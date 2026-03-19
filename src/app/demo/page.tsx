"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export default function DemoPage() {
    const router = useRouter();
    const [selectedWorkspace, setSelectedWorkspace] = useState("");
    const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        revenue: "",
        method: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0);
    const [submitError, setSubmitError] = useState("");

    const loadingMessages = [
        "Setting up ledger structure...",
        "Configuring Ghana tax logic...",
        "Initialising reporting engine...",
    ];

    const workspaces = [
        {
            id: "retail",
            title: "Retail Workspace",
            desc: "POS, inventory & sales.",
            preview: [
                "See how a POS sale posts to the ledger automatically",
                "View inventory tracking and COGS accounting in action",
                "Check VAT, NHIL, and GETFund separated per transaction",
            ],
        },
        {
            id: "service",
            title: "Service Workspace",
            desc: "Invoicing, AR & billing.",
            preview: [
                "Raise an invoice and watch it post to accounts receivable",
                "Record a payment and see the receivable clear instantly",
                "View the income statement update in real time",
            ],
        },
        {
            id: "accountant",
            title: "Accountant Workspace",
            desc: "Client ledger management.",
            preview: [
                "Navigate client workspaces from one professional login",
                "Post a manual journal entry with full audit trail",
                "Lock a period and see how history is protected",
            ],
        },
    ];

    const selectedWorkspaceData = workspaces.find((w) => w.id === selectedWorkspace);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (submitError) setSubmitError("");
    };

    const isFormValid =
        selectedWorkspace &&
        formData.businessName &&
        formData.email &&
        formData.revenue &&
        formData.method;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setSubmitError("");

        const messageInterval = setInterval(() => {
            setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
        }, 800);

        try {
            await fetch("/api/demo-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    workspace: selectedWorkspace,
                    businessName: formData.businessName,
                    email: formData.email,
                    revenue: formData.revenue,
                    method: formData.method,
                }),
            });
        } catch {
            // Silent fail — demo UX is never blocked by a network error
        }

        if (typeof window !== "undefined") {
            localStorage.setItem("finza_demo_workspace", selectedWorkspace);
            localStorage.setItem("finza_demo_business", formData.businessName || "My Business");
            localStorage.setItem("finza_demo_mode", "true");
        }

        setTimeout(() => {
            clearInterval(messageInterval);
            router.push(`/workspace-demo/${selectedWorkspace}`);
        }, 2400);
    };

    // ── Loading screen ────────────────────────────────────────────────────────
    if (isSubmitting) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
                <div className="text-center space-y-8 max-w-sm w-full">
                    <div className="relative w-16 h-16 mx-auto">
                        <div className="absolute inset-0 rounded-full border-4 border-zinc-200" />
                        <div className="absolute inset-0 rounded-full border-4 border-zinc-900 border-t-transparent animate-spin" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-zinc-900">Preparing your preview...</h2>
                        <p className="text-sm text-zinc-500 font-medium animate-pulse">
                            {loadingMessages[loadingStep]}
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    // ── Form ──────────────────────────────────────────────────────────────────
    return (
        <main className="min-h-screen bg-zinc-50 py-20 px-6 flex justify-center">
            <div className="w-full max-w-[720px] space-y-10">

                {/* Header */}
                <div className="text-center space-y-3">
                    <Link href="/" className="text-zinc-900 font-bold text-xl block mb-6">
                        Finza
                    </Link>

                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-600">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Simulated preview — not a live account
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                        Preview Finza
                    </h1>
                    <p className="text-base text-zinc-600 max-w-md mx-auto leading-relaxed">
                        Choose a workspace and walk through a real environment with sample data. Takes about 2 minutes.
                    </p>
                </div>

                {/* What you will see */}
                <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5 space-y-4">
                    <p className="text-sm font-bold text-zinc-900">What you will see in the demo</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {workspaces.map((ws) => (
                            <div
                                key={ws.id}
                                className={cn(
                                    "rounded-lg border p-4 transition-all",
                                    selectedWorkspace === ws.id
                                        ? "border-zinc-900 bg-zinc-50"
                                        : "border-zinc-200 bg-white"
                                )}
                            >
                                <p className="text-xs font-bold text-zinc-900 mb-2">{ws.title}</p>
                                <ul className="space-y-1.5">
                                    {ws.preview.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-xs text-zinc-600">
                                            <span className="mt-1 w-1 h-1 rounded-full bg-zinc-400 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form card */}
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-zinc-200 shadow-sm p-8 space-y-8">

                    {/* Step 1: Workspace */}
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-semibold text-zinc-900">
                                Which workspace do you want to preview?
                            </label>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Each workspace has a different operating model — all running on the same ledger engine.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {workspaces.map((ws) => (
                                <button
                                    key={ws.id}
                                    type="button"
                                    onClick={() => setSelectedWorkspace(ws.id)}
                                    className={cn(
                                        "flex flex-col text-left p-4 rounded-lg border transition-all",
                                        selectedWorkspace === ws.id
                                            ? "border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900"
                                            : "border-zinc-200 hover:border-zinc-400 bg-white"
                                    )}
                                >
                                    <span className="font-semibold text-zinc-900 text-sm">{ws.title}</span>
                                    <span className="text-xs text-zinc-500 mt-1">{ws.desc}</span>
                                </button>
                            ))}
                        </div>
                        {selectedWorkspaceData && (
                            <div className="rounded-md bg-zinc-50 border border-zinc-200 px-4 py-3">
                                <p className="text-xs font-semibold text-zinc-700 mb-1">In this preview you will see:</p>
                                <ul className="space-y-1">
                                    {selectedWorkspaceData.preview.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-xs text-zinc-600">
                                            <svg className="h-3 w-3 text-zinc-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="w-full h-px bg-zinc-100" />

                    {/* Step 2: Details */}
                    <div className="space-y-5">
                        <div>
                            <p className="text-sm font-semibold text-zinc-900">Your details</p>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Used to personalise the preview. We may follow up — but only if you&apos;d like to talk.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="businessName" className="block text-sm font-medium text-zinc-700">
                                    Business name
                                </label>
                                <input
                                    id="businessName"
                                    name="businessName"
                                    required
                                    autoComplete="organization"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all"
                                    placeholder="e.g. Ama Foods Ltd"
                                    onChange={handleInputChange}
                                    value={formData.businessName}
                                />
                                <p className="text-xs text-zinc-400">Will appear in the demo interface</p>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                                    Work email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all"
                                    placeholder="you@company.com"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="revenue" className="block text-sm font-medium text-zinc-700">
                                    Monthly revenue (GHS)
                                </label>
                                <div className="relative">
                                    <select
                                        id="revenue"
                                        name="revenue"
                                        required
                                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all appearance-none bg-white"
                                        onChange={handleInputChange}
                                        value={formData.revenue}
                                    >
                                        <option value="">Select a range...</option>
                                        <option value="pre-revenue">Pre-revenue / just starting</option>
                                        <option value="<10k">Below 10,000 GHS</option>
                                        <option value="10k-50k">10,000 – 50,000 GHS</option>
                                        <option value="50k-200k">50,000 – 200,000 GHS</option>
                                        <option value="200k+">200,000+ GHS</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="method" className="block text-sm font-medium text-zinc-700">
                                    Current method
                                </label>
                                <div className="relative">
                                    <select
                                        id="method"
                                        name="method"
                                        required
                                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all appearance-none bg-white"
                                        onChange={handleInputChange}
                                        value={formData.method}
                                    >
                                        <option value="">How do you manage finances now?</option>
                                        <option value="excel">Spreadsheets (Excel / Google Sheets)</option>
                                        <option value="paper">Pen & paper / manual records</option>
                                        <option value="software">Another accounting software</option>
                                        <option value="accountant">My accountant manages everything</option>
                                        <option value="new">New business — nothing yet</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Error state */}
                    {submitError && (
                        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {submitError}
                        </div>
                    )}

                    {/* Submit */}
                    <div className="space-y-3">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className="w-full rounded-md bg-[#0F172A] px-4 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Launch workspace preview →
                        </button>

                        <p className="text-xs text-center text-zinc-500 leading-relaxed">
                            By continuing, you agree to our{" "}
                            <Link href="/privacy" className="underline underline-offset-2 hover:text-zinc-700">
                                Privacy Policy
                            </Link>
                            . We may follow up based on your details.
                        </p>
                    </div>
                </form>

                {/* Below-form clarification */}
                <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5 space-y-3">
                    <p className="text-sm font-semibold text-zinc-900">
                        This is a simulated environment.
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Sample data is used throughout. No real transactions are posted. Your actual business data will live in your Finza account — create one at{" "}
                        <a
                            href="https://app.finza.africa/signup"
                            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
                        >
                            app.finza.africa
                        </a>
                        .
                    </p>
                    <div className="flex gap-4 pt-1">
                        <Link href="/features" className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors">
                            What Finza does
                        </Link>
                        <Link href="/pricing" className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/accountants" className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors">
                            For accountants
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>

            <RelatedClusterLinks
                related={[
                    {
                        href: "/accounting-for-small-business-ghana",
                        label: "Small business accounting",
                        desc: "Practical guide",
                    },
                    { href: "/pricing", label: "Pricing", desc: "Workspaces" },
                ]}
            />
        </main>
    );
}
