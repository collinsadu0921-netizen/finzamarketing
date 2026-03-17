"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServiceDemoPage() {
    const [businessName, setBusinessName] = useState("Service Business");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem("finza_demo_business");
            if (stored) setBusinessName(stored);
        }
    }, []);

    return (
        <div className="flex h-screen bg-zinc-50 font-sans text-zinc-900 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-200 bg-white hidden md:flex flex-col">
                <div className="p-6 border-b border-zinc-100 flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
                    <span className="font-bold text-lg tracking-tight">Finza Service</span>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {['Dashboard', 'Invoices', 'Clients', 'Expenses', 'Reports', 'Settings'].map((item) => (
                        <div key={item} className={`px-3 py-2 rounded-md text-sm font-medium cursor-default transition-colors ${item === 'Dashboard' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}>
                            {item}
                        </div>
                    ))}
                </nav>
                <div className="p-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-600">
                            {businessName.charAt(0).toUpperCase()}
                        </div>
                        <div className="text-sm">
                            <div className="font-medium truncate max-w-[120px]">{businessName}</div>
                            <div className="text-xs text-zinc-500">Service Admin</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
                    <h1 className="text-lg font-semibold">Service Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Demo Mode</span>
                        <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                    </div>
                </header>

                <div className="p-6 space-y-6">
                    {/* Demo banner */}
                    <div className="rounded-xl bg-[#0F172A] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-sm">You&apos;re viewing a live preview of the Finza Service Workspace.</p>
                            <p className="text-zinc-400 text-xs mt-0.5">Create a free account to set up your real workspace with your own data.</p>
                        </div>
                        <a
                            href="https://app.finza.africa"
                            className="shrink-0 rounded-md bg-white text-[#0F172A] px-4 py-2 text-sm font-semibold hover:bg-zinc-100 transition-colors text-center"
                        >
                            Create Account →
                        </a>
                    </div>

                    {/* Real dashboard screenshot */}
                    <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/dashboard-service.png"
                            alt="Finza Service Workspace — Revenue, Expenses, Net Profit, Invoices and Trends"
                            className="w-full block"
                        />
                    </div>

                    {/* Bottom CTA */}
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-zinc-900">Ready to use Finza with your real business data?</p>
                            <p className="text-zinc-500 text-sm mt-0.5">200 GHS / month. No setup fees. Cancel anytime.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
                                Back to site
                            </Link>
                            <a
                                href="https://app.finza.africa"
                                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F172A]/90 transition-colors"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
