"use client";

import { useEffect, useState } from "react";

export default function RetailDemoPage() {
    const [businessName, setBusinessName] = useState("Retail Store");

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
                    <div className="w-6 h-6 bg-zinc-900 rounded-md"></div>
                    <span className="font-bold text-lg tracking-tight">Finza Retail</span>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {['Dashboard', 'Sales (POS)', 'Inventory', 'Customers', 'Reports', 'Settings'].map((item) => (
                        <div key={item} className={`px-3 py-2 rounded-md text-sm font-medium cursor-default transition-colors ${item === 'Dashboard' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}>
                            {item}
                        </div>
                    ))}
                </nav>
                <div className="p-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-600">
                            {businessName.charAt(0).toUpperCase()}
                        </div>
                        <div className="text-sm">
                            <div className="font-medium truncate max-w-[120px]">{businessName}</div>
                            <div className="text-xs text-zinc-500">Retail Admin</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
                    <h1 className="text-lg font-semibold">Retail Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Live Mode</span>
                        <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                    </div>
                </header>

                <div className="p-8 space-y-8 max-w-7xl mx-auto">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Card title="Today's Sales" value="GHS 4,250.00" trend="+12% vs yesterday" />
                        <Card title="Transactions" value="142" trend="+8% vs avg" />
                        <Card title="VAT Collected" value="GHS 850.00" trend="18.5% effective" />
                        <Card title="Low Stock Items" value="3" trend="Action required" alert />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Inventory Table */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
                                <h3 className="font-semibold">Top Selling Items</h3>
                                <button className="text-sm text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-100">
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Item Name</th>
                                            <th className="px-6 py-3 font-medium">Stock Status</th>
                                            <th className="px-6 py-3 font-medium">Sold Today</th>
                                            <th className="px-6 py-3 font-medium text-right">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-3 font-medium">Paracetamol 500mg</td>
                                            <td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High (124)</span></td>
                                            <td className="px-6 py-3">45</td>
                                            <td className="px-6 py-3 text-right">GHS 225.00</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-3 font-medium">Vitamin C 1000mg</td>
                                            <td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Low (12)</span></td>
                                            <td className="px-6 py-3">28</td>
                                            <td className="px-6 py-3 text-right">GHS 840.00</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-3 font-medium">Cough Syrup (Adult)</td>
                                            <td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">OK (45)</span></td>
                                            <td className="px-6 py-3">15</td>
                                            <td className="px-6 py-3 text-right">GHS 450.00</td>
                                        </tr>
                                        <tr className="group hover:bg-zinc-50">
                                            <td className="px-6 py-3 font-medium">Antibiotic Cream</td>
                                            <td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">OK (80)</span></td>
                                            <td className="px-6 py-3">12</td>
                                            <td className="px-6 py-3 text-right">GHS 180.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-zinc-100">
                                <h3 className="font-semibold">Live Feed</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {[
                                    { time: '10:42 AM', title: 'Sale #1024', desc: 'Cash payment received', amount: '+ GHS 45.00', type: 'sale' },
                                    { time: '10:38 AM', title: 'Sale #1023', desc: 'Mobile Money payment', amount: '+ GHS 120.00', type: 'sale' },
                                    { time: '10:15 AM', title: 'Restock', desc: 'Vitamin C 1000mg added', amount: '+50 units', type: 'stock' },
                                    { time: '09:55 AM', title: 'Shift Start', desc: 'John D. logged in', amount: '', type: 'system' },
                                ].map((act, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${act.type === 'sale' ? 'bg-green-500' : act.type === 'stock' ? 'bg-blue-500' : 'bg-zinc-300'}`} />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm font-medium text-zinc-900">{act.title}</p>
                                                <span className="text-xs text-zinc-500">{act.time}</span>
                                            </div>
                                            <p className="text-xs text-zinc-500 mt-0.5">{act.desc}</p>
                                            {act.amount && <p className="text-xs font-semibold text-zinc-700 mt-1">{act.amount}</p>}
                                        </div>
                                    </div>
                                ))}
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
