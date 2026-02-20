"use client";

import { useEffect, useState } from "react";

export default function AccountantDemoPage() {
    const [businessName, setBusinessName] = useState("Accounting Firm");

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
                    <div className="w-6 h-6 bg-indigo-600 rounded-md"></div>
                    <span className="font-bold text-lg tracking-tight">Finza Portal</span>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {['Overview', 'Clients', 'Journal Entries', 'Reports', 'Audit Log', 'Settings'].map((item) => (
                        <div key={item} className={`px-3 py-2 rounded-md text-sm font-medium cursor-default transition-colors ${item === 'Overview' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}>
                            {item}
                        </div>
                    ))}
                </nav>
                <div className="p-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-600">
                            {businessName.charAt(0).toUpperCase()}
                        </div>
                        <div className="text-sm">
                            <div className="font-medium truncate max-w-[120px]">{businessName}</div>
                            <div className="text-xs text-zinc-500">Managing Partner</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
                    <h1 className="text-lg font-semibold">Accountant Portal</h1>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-md border border-green-200">
                            SYSTEM SECURE
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                    </div>
                </header>

                <div className="p-8 space-y-8 max-w-7xl mx-auto">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Card title="Active Clients" value="12" trend="+2 this month" />
                        <Card title="Pending Reviews" value="5" trend="Requires attention" alert />
                        <Card title="Journal Batches" value="142" trend="Processed today" />
                        <Card title="Period Status" value="Oct OPEN" trend="Sep: LOCKED" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Client List */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
                                <h3 className="font-semibold">Client Overview</h3>
                                <button className="text-sm text-indigo-600 hover:underline">Manage Clients</button>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Client Name</th>
                                            <th className="px-6 py-3 font-medium">Type</th>
                                            <th className="px-6 py-3 font-medium">Ledger Status</th>
                                            <th className="px-6 py-3 font-medium text-right">Draft Entries</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">Accra Retail</td>
                                            <td className="px-6 py-4 text-zinc-500">Retail</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Balanced</span></td>
                                            <td className="px-6 py-4 text-right">0</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">TechStart Ltd</td>
                                            <td className="px-6 py-4 text-zinc-500">Service</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Pending Review</span></td>
                                            <td className="px-6 py-4 text-right">14</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-4 font-medium">Global Logistics</td>
                                            <td className="px-6 py-4 text-zinc-500">Service</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Balanced</span></td>
                                            <td className="px-6 py-4 text-right">2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Journals / Activity */}
                        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100">
                                <h3 className="font-semibold">Recent Journals</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {[
                                    { id: 'JE-10492', desc: 'Payroll Adjustment', amount: 'GHS 12,500.00', status: 'Posted' },
                                    { id: 'JE-10493', desc: 'VAT Remittance', amount: 'GHS 4,200.00', status: 'Draft' },
                                    { id: 'JE-10494', desc: 'Depreciation Run', amount: 'GHS 850.00', status: 'Posted' },
                                    { id: 'JE-10495', desc: 'Expense Correction', amount: 'GHS 150.00', status: 'Pending' },
                                ].map((je, i) => (
                                    <div key={i} className="flex flex-col gap-1 pb-4 border-b border-dashed border-zinc-100 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-xs text-zinc-500">{je.id}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${je.status === 'Posted' ? 'bg-green-100 text-green-800' : 'bg-zinc-100 text-zinc-600'}`}>
                                                {je.status}
                                            </span>
                                        </div>
                                        <div className="text-sm font-medium text-zinc-900">{je.desc}</div>
                                        <div className="text-xs text-zinc-500">{je.amount}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-100">
                                <button className="w-full py-2 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800">Create Manual Journal</button>
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
