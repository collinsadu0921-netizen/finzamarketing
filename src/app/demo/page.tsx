"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

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
        "Configuring tax logic...",
        "Initializing reporting engine...",
    ];

    const workspaces = [
        {
            id: "retail",
            title: "Retail Workspace",
            desc: "POS, inventory & sales.",
        },
        {
            id: "service",
            title: "Service Workspace",
            desc: "Invoicing, AR & billing.",
        },
        {
            id: "accountant",
            title: "Accountant Workspace",
            desc: "Client ledger management.",
        },
    ];

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

        // Rotate loading messages while processing
        const messageInterval = setInterval(() => {
            setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
        }, 800);

        try {
            // Send lead data to API route (webhook + optional email)
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
            // We don't block the demo on API failure — continue regardless
        } catch {
            // Silent fail — demo UX is never blocked by a network error
        }

        // Store in localStorage so workspace demo pages can read the business name
        if (typeof window !== "undefined") {
            localStorage.setItem("finza_demo_workspace", selectedWorkspace);
            localStorage.setItem("finza_demo_business", formData.businessName || "My Business");
            localStorage.setItem("finza_demo_mode", "true");
        }

        // Hold the loading screen for a beat, then redirect
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

                    {/* Preview badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-600">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Simulated preview — not a live account
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                        Preview Finza
                    </h1>
                    <p className="text-base text-zinc-600 max-w-md mx-auto leading-relaxed">
                        Walk through a workspace environment with sample data. Takes 30 seconds.
                    </p>
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
                                Each workspace has a different operating model — same ledger engine underneath.
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
                    </div>

                    <div className="w-full h-px bg-zinc-100" />

                    {/* Step 2: Details */}
                    <div className="space-y-5">
                        <div>
                            <p className="text-sm font-semibold text-zinc-900">Your details</p>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Used to personalise the preview and follow up if you'd like to talk.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="businessName" className="block text-sm font-medium text-zinc-700">
                                    Business Name
                                </label>
                                <input
                                    id="businessName"
                                    name="businessName"
                                    required
                                    autoComplete="organization"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all"
                                    placeholder="Acme Ltd"
                                    onChange={handleInputChange}
                                    value={formData.businessName}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                                    Work Email
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
                                    Monthly Revenue
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
                                        <option value="">Select range...</option>
                                        <option value="pre-revenue">Pre-revenue</option>
                                        <option value="<10k">&lt; 10k GHS</option>
                                        <option value="10k-50k">10k – 50k GHS</option>
                                        <option value="50k-200k">50k – 200k GHS</option>
                                        <option value="200k+">200k+ GHS</option>
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
                                    Current Method
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
                                        <option value="">How do you track finances now?</option>
                                        <option value="excel">Spreadsheets</option>
                                        <option value="paper">Pen &amp; Paper</option>
                                        <option value="software">Other Software</option>
                                        <option value="new">New Business</option>
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
                            Preview workspace →
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
                <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5 text-center space-y-1.5">
                    <p className="text-sm font-semibold text-zinc-900">
                        You&apos;re viewing a simulated environment.
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Sample data is used throughout. Your real business data will live in your Finza account — create one at{" "}
                        <a
                            href="https://app.finza.africa/signup"
                            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
                        >
                            app.finza.africa
                        </a>
                        .
                    </p>
                </div>

                {/* Back link */}
                <div className="text-center">
                    <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
