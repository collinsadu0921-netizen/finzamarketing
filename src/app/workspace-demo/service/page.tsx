"use client";

import { useEffect, useState } from "react";

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
            {/* Sidebar Mock */}
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
                        <span className="text-sm text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Live Mode</span>
                        <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                    </div>
                </header>

                <div className="p-8 space-y-8 max-w-7xl mx-auto">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Card title="Net Profit (MTD)" value="GHS 45,200.00" trend="+8% vs last month" />
                        <Card title="Outstanding Invoices" value="GHS 12,400.00" trend="2 Overdue" alert />
                        <Card title="Expenses (MTD)" value="GHS 8,500.00" trend="Within budget" />
                        <Card title="Active Projects" value="4" trend="On track" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Invoices Table */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
                                <h3 className="font-semibold">Recent Invoices</h3>
                                <button className="text-sm text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Client</th>
                                            <th className="px-6 py-3 font-medium">Invoice #</th>
                                            <th className="px-6 py-3 font-medium">Status</th>
                                            <th className="px-6 py-3 font-medium text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">TechStart Ltd</td>
                                            <td className="px-6 py-4 text-zinc-500">INV-2024-001</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span></td>
                                            <td className="px-6 py-4 text-right">GHS 5,000.00</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">Global Logistics</td>
                                            <td className="px-6 py-4 text-zinc-500">INV-2024-002</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Paid</span></td>
                                            <td className="px-6 py-4 text-right">GHS 12,500.00</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">Creative Agency</td>
                                            <td className="px-6 py-4 text-zinc-500">INV-2024-003</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Overdue</span></td>
                                            <td className="px-6 py-4 text-right">GHS 800.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Expense Summary */}
                        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100">
                                <h3 className="font-semibold">Recent Expenses</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {[
                                    { category: 'Software Subscription', amount: 'GHS 150.00', date: 'Today' },
                                    { category: 'Office Rent', amount: 'GHS 4,500.00', date: 'Yesterday' },
                                    { category: 'Contractor Payment', amount: 'GHS 2,000.00', date: 'Oct 22' },
                                    { category: 'Utilities', amount: 'GHS 850.00', date: 'Oct 20' },
                                ].map((exp, i) => (
                                    <div key={i} className="flex justify-between items-center pb-4 border-b border-dashed border-zinc-100 last:border-0 last:pb-0">
                                        <div>
                                            <div className="font-medium text-zinc-900">{exp.category}</div>
                                            <div className="text-xs text-zinc-500">{exp.date}</div>
                                        </div>
                                        <div className="font-semibold text-zinc-900">{exp.amount}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-100">
                                <button className="w-full py-2 text-sm font-medium text-zinc-600 bg-white border border-zinc-300 rounded-md hover:bg-zinc-50">Log New Expense</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Card({ title, value, trend, alert }: { title: string, value: string, trend: string, alert?: boolean }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-zinc-500">{title}</h3>
                {alert && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
            </div>
            <div className="text-2xl font-bold text-zinc-900 mb-2">{value}</div>
            <div className={`text-xs font-medium flex items-center ${alert ? 'text-red-600' : 'text-green-600'}`}>
                {trend}
            </div>
        </div>
    );
}
