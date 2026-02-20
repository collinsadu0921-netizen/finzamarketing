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

    const loadingMessages = [
        "Setting up ledger structure...",
        "Configuring tax logic...",
        "Initializing reporting engine...",
    ];

    const workspaces = [
        { id: "retail", title: "Retail Workspace", desc: "For inventory & sales." },
        { id: "service", title: "Service Workspace", desc: "For agencies & billing." },
        { id: "accountant", title: "Accountant Workspace", desc: "For client ledgers." },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormValid = selectedWorkspace && formData.businessName && formData.email && formData.revenue && formData.method;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);

        // Rotate loading messages
        const messageInterval = setInterval(() => {
            setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
        }, 800);

        // Simulate backend process and redirect
        setTimeout(() => {
            clearInterval(messageInterval);

            // Store demo session data
            if (typeof window !== 'undefined') {
                localStorage.setItem("finza_demo_workspace", selectedWorkspace);
                localStorage.setItem("finza_demo_business", formData.businessName || "My Business");
                localStorage.setItem("finza_demo_mode", "true");
            }

            router.push(`/workspace-demo/${selectedWorkspace}`);
        }, 2400);
    };

    if (isSubmitting) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
                <div className="text-center space-y-8 max-w-sm w-full">
                    <div className="relative w-16 h-16 mx-auto">
                        <div className="absolute inset-0 rounded-full border-4 border-zinc-200" />
                        <div className="absolute inset-0 rounded-full border-4 border-zinc-900 border-t-transparent animate-spin" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-zinc-900">Preparing your workspace...</h2>
                        <p className="text-sm text-zinc-500 font-medium animate-pulse">
                            {loadingMessages[loadingStep]}
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-50 py-24 px-6 flex justify-center">
            <div className="w-full max-w-[720px] space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <Link href="/" className="text-zinc-900 font-bold text-xl block mb-8">Finza</Link>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        Start your Finza workspace
                    </h1>
                    <p className="text-lg text-zinc-600">
                        Choose your environment and begin with a structured demo.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-zinc-200 shadow-sm p-8 space-y-8">
                    {/* Step 1: Workspace Selection */}
                    <div className="space-y-4">
                        <label className="block text-sm font-semibold text-zinc-900">Select Workspace</label>
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

                    {/* Step 2: Qualification Form */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700">Business Name</label>
                                <input
                                    name="businessName"
                                    required
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all"
                                    placeholder="Acme Corp"
                                    onChange={handleInputChange}
                                    value={formData.businessName}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700">Work Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all"
                                    placeholder="you@company.com"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700">Monthly Revenue</label>
                                <div className="relative">
                                    <select
                                        name="revenue"
                                        required
                                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all appearance-none bg-white"
                                        onChange={handleInputChange}
                                        value={formData.revenue}
                                    >
                                        <option value="">Select range...</option>
                                        <option value="pre-revenue">Pre-revenue</option>
                                        <option value="<10k">&lt; 10k GHS</option>
                                        <option value="10k-50k">10k - 50k GHS</option>
                                        <option value="50k-200k">50k - 200k GHS</option>
                                        <option value="200k+">200k+ GHS</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700">Current Method</label>
                                <div className="relative">
                                    <select
                                        name="method"
                                        required
                                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none focus:border-transparent transition-all appearance-none bg-white"
                                        onChange={handleInputChange}
                                        value={formData.method}
                                    >
                                        <option value="">Select method...</option>
                                        <option value="excel">Spreadsheets</option>
                                        <option value="paper">Pen & Paper</option>
                                        <option value="software">Other Software</option>
                                        <option value="new">New Business</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className="w-full rounded-md bg-[#0F172A] px-4 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Continue to Demo
                    </button>
                </form>
            </div>
        </main>
    );
}
