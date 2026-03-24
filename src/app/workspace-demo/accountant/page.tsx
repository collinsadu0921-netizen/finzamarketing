"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export default function AccountantDemoPage() {
    const [businessName, setBusinessName] = useState("Accounting Firm");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("finza_demo_business");
            if (stored) setBusinessName(stored);
        }
    }, []);

    return (
        <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900 overflow-hidden">

            {/* ── Preview banner ── */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-2.5 bg-amber-50 border-b border-amber-200 text-xs text-amber-800 font-medium z-20">
                <Link href="/" className="font-bold text-zinc-900 hover:text-zinc-600 transition-colors">
                    ← finza.africa
                </Link>
                <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                    Preview environment — not live data
                </span>
                <a
                    href="/pricing"
                    className="rounded-md bg-[#0F172A] text-white px-3 py-1 text-xs font-semibold hover:bg-[#0F172A]/90 transition-colors"
                >
                    Create account
                </a>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-60 border-r border-zinc-200 bg-white hidden md:flex flex-col flex-shrink-0">
                    <div className="p-5 border-b border-zinc-100 flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-600 rounded-md" />
                        <span className="font-bold text-base tracking-tight">Finza Portal</span>
                    </div>
                    <nav className="flex-1 p-3 space-y-0.5">
                        {[
                            { label: "Overview", active: true },
                            { label: "Clients", active: false },
                            { label: "Journal Entries", active: false },
                            { label: "Reports", active: false },
                            { label: "Audit Log", active: false },
                            { label: "Settings", active: false },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className={`px-3 py-2 rounded-md text-sm font-medium cursor-default transition-colors ${
                                    item.active
                                        ? "bg-zinc-100 text-zinc-900"
                                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"
                                }`}
                            >
                                {item.label}
                            </div>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-zinc-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-600 flex-shrink-0">
                                {businessName.charAt(0).toUpperCase()}
                            </div>
                            <div className="text-sm min-w-0">
                                <div className="font-semibold truncate">{businessName}</div>
                                <div className="text-xs text-zinc-500">Managing Partner</div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 overflow-y-auto">
                    <header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
                        <h1 className="text-sm font-semibold text-zinc-900">Accountant Portal</h1>
                        <div className="flex items-center gap-3">
                            <div className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-200">
                                SYSTEM SECURE
                            </div>
                            <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200" />
                        </div>
                    </header>

                    <div className="p-6 space-y-6 max-w-6xl mx-auto">

                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { label: "Active Clients", value: "12", sub: "+2 this month", alert: false },
                                { label: "Pending Reviews", value: "5 entries", sub: "Awaiting approval", alert: true },
                                { label: "Journals Posted", value: "142", sub: "This period", alert: false },
                                { label: "Period Status", value: "Mar OPEN", sub: "Feb: LOCKED", alert: false },
                            ].map((c) => (
                                <div key={c.label} className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-medium text-zinc-500">{c.label}</p>
                                        {c.alert && <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-0.5" />}
                                    </div>
                                    <p className="text-xl font-extrabold text-zinc-900 mb-1">{c.value}</p>
                                    <p className={`text-xs font-medium ${c.alert ? "text-amber-600" : "text-green-600"}`}>{c.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Client workspace table */}
                            <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Client Workspaces</h3>
                                </div>
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-5 py-3 text-xs font-semibold">Client</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Type</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Ledger</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Period</th>
                                            <th className="px-5 py-3 text-xs font-semibold text-right">Draft Entries</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        {[
                                            { name: "Accra Retail Ltd", type: "Retail", ledger: "Balanced", period: "Mar OPEN", drafts: 0 },
                                            { name: "TechStart Ltd", type: "Service", ledger: "Pending Review", period: "Mar OPEN", drafts: 14 },
                                            { name: "Global Logistics", type: "Service", ledger: "Balanced", period: "Mar OPEN", drafts: 2 },
                                            { name: "BrightPath School", type: "Service", ledger: "Balanced", period: "Feb LOCKED", drafts: 0 },
                                            { name: "Kumasi Foods", type: "Retail", ledger: "Pending Review", period: "Mar OPEN", drafts: 7 },
                                        ].map((client) => (
                                            <tr key={client.name} className="hover:bg-zinc-50">
                                                <td className="px-5 py-3 font-medium text-zinc-900">{client.name}</td>
                                                <td className="px-5 py-3 text-zinc-500">{client.type}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                                        client.ledger === "Balanced"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                    }`}>
                                                        {client.ledger}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3 text-xs text-zinc-500">{client.period}</td>
                                                <td className="px-5 py-3 text-right">
                                                    <span className={`text-sm font-semibold ${client.drafts > 0 ? "text-amber-600" : "text-zinc-400"}`}>
                                                        {client.drafts}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Recent journals */}
                            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Recent Journals</h3>
                                </div>
                                <div className="p-5 space-y-4">
                                    {[
                                        { id: "JE-10495", desc: "Payroll Adjustment", amount: "GHS 12,500.00", status: "Posted" },
                                        { id: "JE-10494", desc: "VAT Remittance", amount: "GHS 4,200.00", status: "Draft" },
                                        { id: "JE-10493", desc: "Depreciation Run", amount: "GHS 850.00", status: "Posted" },
                                        { id: "JE-10492", desc: "Expense Reversal", amount: "GHS 320.00", status: "Posted" },
                                        { id: "JE-10491", desc: "Accrued Salary", amount: "GHS 8,000.00", status: "Draft" },
                                    ].map((je) => (
                                        <div key={je.id} className="flex flex-col gap-1 pb-4 border-b border-dashed border-zinc-100 last:border-0 last:pb-0">
                                            <div className="flex justify-between items-center">
                                                <span className="font-mono text-xs text-zinc-400">{je.id}</span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                                    je.status === "Posted"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-zinc-100 text-zinc-600"
                                                }`}>
                                                    {je.status}
                                                </span>
                                            </div>
                                            <div className="text-sm font-medium text-zinc-900">{je.desc}</div>
                                            <div className="text-xs text-zinc-500">{je.amount}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Period locks */}
                        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-5 py-4 border-b border-zinc-100">
                                <h3 className="text-sm font-semibold text-zinc-900">Period Status — All Clients</h3>
                            </div>
                            <div className="px-5 py-4">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {[
                                        { period: "Jan 2026", status: "Locked" },
                                        { period: "Feb 2026", status: "Locked" },
                                        { period: "Mar 2026", status: "Open" },
                                        { period: "Apr 2026", status: "Future" },
                                    ].map((p) => (
                                        <div key={p.period} className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50">
                                            <span className="text-xs font-semibold text-zinc-700">{p.period}</span>
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                                p.status === "Locked"
                                                    ? "bg-zinc-800 text-white"
                                                    : p.status === "Open"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-zinc-100 text-zinc-400"
                                            }`}>
                                                {p.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-xl border border-zinc-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-zinc-900">Manage your real clients with Finza</p>
                                <p className="text-xs text-zinc-500 mt-0.5">700 GHS / month. First month free. Connect client workspaces from day one.</p>
                            </div>
                            <a
                                href="/pricing"
                                className="flex-shrink-0 rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F172A]/90 transition-colors"
                            >
                                Get started free →
                            </a>
                        </div>

                        <RelatedClusterLinks
                            related={[
                                { href: "/accountants", label: "For accountants", desc: "Practice workspace" },
                                { href: "/security", label: "Security", desc: "Data & audit trail" },
                            ]}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
