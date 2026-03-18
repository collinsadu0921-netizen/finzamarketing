"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const invoices = [
    { id: "INV-2031", client: "TechStart Ltd", amount: "GHS 8,500.00", issued: "10 Mar 2026", due: "24 Mar 2026", status: "Unpaid" },
    { id: "INV-2030", client: "Global Logistics", amount: "GHS 3,200.00", issued: "8 Mar 2026", due: "22 Mar 2026", status: "Paid" },
    { id: "INV-2029", client: "Accra Media House", amount: "GHS 5,750.00", issued: "5 Mar 2026", due: "19 Mar 2026", status: "Overdue" },
    { id: "INV-2028", client: "BrightPath School", amount: "GHS 2,400.00", issued: "1 Mar 2026", due: "15 Mar 2026", status: "Paid" },
    { id: "INV-2027", client: "TechStart Ltd", amount: "GHS 6,000.00", issued: "20 Feb 2026", due: "6 Mar 2026", status: "Paid" },
];

const statusStyle: Record<string, string> = {
    Paid: "bg-green-100 text-green-800",
    Unpaid: "bg-zinc-100 text-zinc-700",
    Overdue: "bg-red-100 text-red-700",
};

export default function ServiceDemoPage() {
    const [businessName, setBusinessName] = useState("Service Business");

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
                    href="https://app.finza.africa/signup"
                    className="rounded-md bg-[#0F172A] text-white px-3 py-1 text-xs font-semibold hover:bg-[#0F172A]/90 transition-colors"
                >
                    Create account
                </a>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-60 border-r border-zinc-200 bg-white hidden md:flex flex-col flex-shrink-0">
                    <div className="p-5 border-b border-zinc-100 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-md" />
                        <span className="font-bold text-base tracking-tight">Finza Service</span>
                    </div>
                    <nav className="flex-1 p-3 space-y-0.5">
                        {[
                            { label: "Dashboard", active: true },
                            { label: "Invoices", active: false },
                            { label: "Clients", active: false },
                            { label: "Expenses", active: false },
                            { label: "Reports", active: false },
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
                            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-600 flex-shrink-0">
                                {businessName.charAt(0).toUpperCase()}
                            </div>
                            <div className="text-sm min-w-0">
                                <div className="font-semibold truncate">{businessName}</div>
                                <div className="text-xs text-zinc-500">Service Admin</div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 overflow-y-auto">
                    <header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
                        <h1 className="text-sm font-semibold text-zinc-900">Dashboard</h1>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-zinc-500">Mar 2026</span>
                            <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200" />
                        </div>
                    </header>

                    <div className="p-6 space-y-6 max-w-6xl mx-auto">

                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { label: "Revenue (Mar)", value: "GHS 25,850.00", sub: "+18% vs Feb", alert: false },
                                { label: "Outstanding (AR)", value: "GHS 14,250.00", sub: "3 unpaid invoices", alert: true },
                                { label: "Collected (Mar)", value: "GHS 11,600.00", sub: "2 payments received", alert: false },
                                { label: "Expenses (Mar)", value: "GHS 4,320.00", sub: "Recorded & posted", alert: false },
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

                            {/* Invoice list */}
                            <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Recent Invoices</h3>
                                </div>
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-5 py-3 text-xs font-semibold">Invoice</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Client</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Due</th>
                                            <th className="px-5 py-3 text-xs font-semibold text-right">Amount</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        {invoices.map((inv) => (
                                            <tr key={inv.id} className="hover:bg-zinc-50">
                                                <td className="px-5 py-3 font-mono text-xs text-zinc-500">{inv.id}</td>
                                                <td className="px-5 py-3 font-medium text-zinc-900">{inv.client}</td>
                                                <td className="px-5 py-3 text-xs text-zinc-500">{inv.due}</td>
                                                <td className="px-5 py-3 text-right font-semibold text-zinc-900">{inv.amount}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusStyle[inv.status]}`}>
                                                        {inv.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* AR Summary */}
                            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Accounts Receivable</h3>
                                </div>
                                <div className="p-5 space-y-4">
                                    {[
                                        { label: "Current (0–30 days)", amount: "GHS 8,500.00", color: "bg-green-500" },
                                        { label: "Due soon (31–60 days)", amount: "GHS 0.00", color: "bg-zinc-200" },
                                        { label: "Overdue (60+ days)", amount: "GHS 5,750.00", color: "bg-red-500" },
                                    ].map((row) => (
                                        <div key={row.label} className="space-y-1.5">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-zinc-600">{row.label}</span>
                                                <span className="font-semibold text-zinc-900">{row.amount}</span>
                                            </div>
                                            <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${row.color}`}
                                                    style={{ width: row.amount === "GHS 0.00" ? "0%" : row.amount.includes("8,500") ? "60%" : "40%" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-3 border-t border-zinc-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-semibold text-zinc-700">Total Outstanding</span>
                                            <span className="text-sm font-extrabold text-zinc-900">GHS 14,250.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expenses */}
                        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-5 py-4 border-b border-zinc-100">
                                <h3 className="text-sm font-semibold text-zinc-900">Recent Expenses</h3>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                    <tr>
                                        <th className="px-5 py-3 text-xs font-semibold">Description</th>
                                        <th className="px-5 py-3 text-xs font-semibold">Category</th>
                                        <th className="px-5 py-3 text-xs font-semibold">Date</th>
                                        <th className="px-5 py-3 text-xs font-semibold text-right">Amount</th>
                                        <th className="px-5 py-3 text-xs font-semibold">Ledger Entry</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-50">
                                    {[
                                        { desc: "Office Rent — March", category: "Rent", date: "1 Mar 2026", amount: "GHS 2,500.00" },
                                        { desc: "Internet & Comms", category: "Utilities", date: "5 Mar 2026", amount: "GHS 420.00" },
                                        { desc: "Software Subscriptions", category: "Tech", date: "7 Mar 2026", amount: "GHS 800.00" },
                                        { desc: "Staff Transport", category: "Operations", date: "10 Mar 2026", amount: "GHS 600.00" },
                                    ].map((exp) => (
                                        <tr key={exp.desc} className="hover:bg-zinc-50">
                                            <td className="px-5 py-3 font-medium text-zinc-900">{exp.desc}</td>
                                            <td className="px-5 py-3 text-zinc-500">{exp.category}</td>
                                            <td className="px-5 py-3 text-xs text-zinc-500">{exp.date}</td>
                                            <td className="px-5 py-3 text-right font-semibold text-zinc-900">{exp.amount}</td>
                                            <td className="px-5 py-3">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                    Posted
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA */}
                        <div className="rounded-xl border border-zinc-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-zinc-900">Ready to use Finza with your real data?</p>
                                <p className="text-xs text-zinc-500 mt-0.5">200 GHS / month. First month free. No setup fees.</p>
                            </div>
                            <a
                                href="https://app.finza.africa/signup"
                                className="flex-shrink-0 rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F172A]/90 transition-colors"
                            >
                                Get started free →
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
