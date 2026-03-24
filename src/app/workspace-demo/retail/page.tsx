"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export default function RetailDemoPage() {
    const [businessName, setBusinessName] = useState("Retail Store");

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
                        <div className="w-6 h-6 bg-zinc-900 rounded-md" />
                        <span className="font-bold text-base tracking-tight">Finza Retail</span>
                    </div>
                    <nav className="flex-1 p-3 space-y-0.5">
                        {[
                            { label: "Dashboard", active: true },
                            { label: "Sales (POS)", active: false },
                            { label: "Inventory", active: false },
                            { label: "Customers", active: false },
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
                            <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-600 flex-shrink-0">
                                {businessName.charAt(0).toUpperCase()}
                            </div>
                            <div className="text-sm min-w-0">
                                <div className="font-semibold truncate">{businessName}</div>
                                <div className="text-xs text-zinc-500">Retail Admin</div>
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
                                { label: "Today's Revenue", value: "GHS 4,250.00", sub: "+12% vs yesterday", alert: false },
                                { label: "Transactions", value: "142", sub: "+8% vs daily avg", alert: false },
                                { label: "VAT Collected", value: "GHS 638.00", sub: "Output VAT (15%)", alert: false },
                                { label: "Low Stock Items", value: "3 items", sub: "Restock required", alert: true },
                            ].map((c) => (
                                <div key={c.label} className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-medium text-zinc-500">{c.label}</p>
                                        {c.alert && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-0.5" />}
                                    </div>
                                    <p className="text-xl font-extrabold text-zinc-900 mb-1">{c.value}</p>
                                    <p className={`text-xs font-medium ${c.alert ? "text-red-600" : "text-green-600"}`}>{c.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Top Selling Items */}
                            <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Top Selling Items — Today</h3>
                                </div>
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-5 py-3 text-xs font-semibold">Item</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Stock</th>
                                            <th className="px-5 py-3 text-xs font-semibold">Sold</th>
                                            <th className="px-5 py-3 text-xs font-semibold text-right">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        {[
                                            { name: "Paracetamol 500mg", stock: "124 units", stockStatus: "ok", sold: 45, revenue: "GHS 225.00" },
                                            { name: "Vitamin C 1000mg", stock: "12 units", stockStatus: "low", sold: 28, revenue: "GHS 840.00" },
                                            { name: "Cough Syrup (Adult)", stock: "45 units", stockStatus: "ok", sold: 15, revenue: "GHS 450.00" },
                                            { name: "Antibiotic Cream", stock: "80 units", stockStatus: "ok", sold: 12, revenue: "GHS 360.00" },
                                            { name: "Hand Sanitizer 500ml", stock: "8 units", stockStatus: "low", sold: 9, revenue: "GHS 270.00" },
                                        ].map((row) => (
                                            <tr key={row.name} className="hover:bg-zinc-50">
                                                <td className="px-5 py-3 font-medium text-zinc-900 text-sm">{row.name}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                                        row.stockStatus === "low"
                                                            ? "bg-yellow-100 text-yellow-800"
                                                            : "bg-green-100 text-green-800"
                                                    }`}>
                                                        {row.stock}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3 text-zinc-700">{row.sold}</td>
                                                <td className="px-5 py-3 text-right font-medium text-zinc-900">{row.revenue}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Live Feed */}
                            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <h3 className="text-sm font-semibold text-zinc-900">Live Feed</h3>
                                </div>
                                <div className="p-5 space-y-5">
                                    {[
                                        { time: "10:42 AM", title: "Sale #1024", desc: "Cash — GHS 45.00", type: "sale" },
                                        { time: "10:38 AM", title: "Sale #1023", desc: "Mobile Money — GHS 120.00", type: "sale" },
                                        { time: "10:15 AM", title: "Restock", desc: "Vitamin C +50 units", type: "stock" },
                                        { time: "09:55 AM", title: "Sale #1022", desc: "Cash — GHS 210.00", type: "sale" },
                                        { time: "09:30 AM", title: "Shift Start", desc: "John D. logged in", type: "system" },
                                    ].map((act, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                                                act.type === "sale" ? "bg-green-500" : act.type === "stock" ? "bg-blue-500" : "bg-zinc-300"
                                            }`} />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start gap-2">
                                                    <p className="text-xs font-semibold text-zinc-900">{act.title}</p>
                                                    <span className="text-xs text-zinc-400 flex-shrink-0">{act.time}</span>
                                                </div>
                                                <p className="text-xs text-zinc-500 mt-0.5">{act.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-xl border border-zinc-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-zinc-900">Ready to use Finza with your real data?</p>
                                <p className="text-xs text-zinc-500 mt-0.5">250 GHS / month. First month free. No setup fees.</p>
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
                                {
                                    href: "/accounting-for-retail-ghana",
                                    label: "Retail accounting guide",
                                    desc: "Inventory & VAT",
                                },
                                { href: "/pricing", label: "Pricing", desc: "Retail workspace" },
                            ]}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
