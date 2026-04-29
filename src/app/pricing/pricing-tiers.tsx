"use client";

import { useState } from "react";
import { Container } from "@/components/container";

type BillingCycle = "monthly" | "quarterly" | "annual";

const plansData = [
    {
        id: "essentials",
        name: "Essentials",
        subtitle: "For service businesses that need professional documents, payment tracking, expenses, and clear business records.",
        price: 149,
        highlight: false,
        cta: "Start 14-day free trial",
        planParam: "starter",
        groupTitle: "Included in Essentials",
        items: [
            "Proposals",
            "Quotes and proformas",
            "Invoices and receipts",
            "Customers",
            "Products and services",
            "Payment recording",
            "Partial payment tracking",
            "Expense tracking",
            "Basic reports",
            "PDF exports",
            "Email sending",
            "Public document links",
            "WhatsApp sharing links",
            "Ghana tax lines where applicable",
        ],
    },
    {
        id: "professional",
        name: "Professional",
        subtitle: "For growing service teams that need better control over bills, documents, payroll, tax records, and team access.",
        price: 449,
        highlight: true,
        cta: "Start 14-day free trial",
        planParam: "professional",
        groupTitle: "Everything in Essentials, plus",
        items: [
            "Supplier bills",
            "Incoming documents",
            "Document upload and review workflow",
            "Payroll",
            "WHT receivable tracking where applicable",
            "VAT, NHIL, and GETFund support where applicable",
            "Customer statements",
            "Team access",
            "Roles and permissions",
            "More detailed reports",
            "Accountant-ready records",
        ],
    },
    {
        id: "business",
        name: "Business",
        subtitle: "For companies that need deeper accounting control, review workflows, exports, and governance.",
        price: 949,
        highlight: false,
        cta: "Start 14-day free trial",
        planParam: "business",
        groupTitle: "Everything in Professional, plus",
        items: [
            "Ledger records",
            "Journal entries",
            "Chart of accounts",
            "Trial balance",
            "Bank reconciliation",
            "Period close and reopen controls",
            "Audit logs",
            "Accounting reports",
            "Report exports",
            "Accounting workspace access",
            "Advanced accountant review support",
        ],
    },
];

export function PricingTiers() {
    const [cycle, setCycle] = useState<BillingCycle>("monthly");

    const getPrice = (monthlyPrice: number) => {
        if (cycle === "quarterly") return Math.round(monthlyPrice * 3 * 0.95);
        if (cycle === "annual") return Math.round(monthlyPrice * 12 * 0.83);
        return monthlyPrice;
    };

    const formatCycleLabel = () => {
        if (cycle === "quarterly") return "/qtr";
        if (cycle === "annual") return "/yr";
        return "/mo";
    };

    return (
        <section className="py-20 bg-white border-b border-zinc-100">
            <Container>
                {/* Billing Toggle */}
                <div className="flex flex-col items-center justify-center mb-16 space-y-8">
                    <div className="flex bg-white border border-zinc-200 p-1.5 rounded-xl shadow-sm relative overflow-x-auto max-w-full">
                        {(["monthly", "quarterly", "annual"] as BillingCycle[]).map((c) => (
                            <button
                                key={c}
                                onClick={() => setCycle(c)}
                                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                                    cycle === c
                                        ? "bg-[#1E293B] text-white shadow border border-transparent"
                                        : "text-zinc-500 hover:text-zinc-900"
                                }`}
                            >
                                <span className="whitespace-nowrap">
                                    {c === "monthly" && "Monthly"}
                                    {c === "quarterly" && "Quarterly — save 5%"}
                                    {c === "annual" && "Annual — save 17%"}
                                </span>
                            </button>
                        ))}
                    </div>
                    
                    <div className="max-w-3xl text-center">
                        <p className="text-[14px] leading-relaxed text-zinc-500">
                            Quarterly and annual prices are calculated from the monthly plan price with the displayed billing-cycle discount.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plansData.map((plan) => (
                        <div
                            key={plan.id}
                            className={`flex flex-col rounded-xl border shadow-sm overflow-hidden ${
                                plan.highlight
                                    ? "border-zinc-800 bg-white ring-1 ring-zinc-800 transform lg:scale-[1.02] z-10"
                                    : "border-zinc-200 bg-zinc-50/50"
                            }`}
                        >
                            {plan.highlight && (
                                <div className="bg-[#0F172A] text-white text-center text-xs font-bold py-2 tracking-wide uppercase">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-7 flex flex-col flex-1">
                                <div className="mb-6">
                                    <div className="mb-4">
                                        <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-sm font-bold ${
                                            plan.id === "essentials" ? "bg-zinc-100 text-zinc-800" :
                                            plan.id === "professional" ? "bg-blue-100 text-blue-700" :
                                            "bg-fuchsia-100 text-fuchsia-700"
                                        }`}>
                                            {plan.name}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-zinc-600 mb-6 min-h-[40px]">
                                        {plan.subtitle}
                                    </p>
                                    <div className="text-4xl font-extrabold text-zinc-900 mb-1">
                                        GHS {getPrice(plan.price).toLocaleString()}
                                        <span className="text-base font-normal text-zinc-500 ml-1.5">{formatCycleLabel()}</span>
                                    </div>
                                    <div className="min-h-[20px] mb-5">
                                        {cycle !== "monthly" && (
                                            <p className={`text-xs ${plan.highlight ? "text-emerald-600 font-semibold" : "text-zinc-500 font-medium"}`}>
                                                GHS {plan.price} / month
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-sm font-semibold text-zinc-700 mb-4">
                                        GHS {plan.price} / month
                                    </p>

                                    <a
                                        href={`https://app.finza.africa/signup?workspace=service&plan=${plan.planParam}&cycle=${cycle}&trial=1`}
                                        className={`block w-full rounded-md px-4 py-3 text-center text-sm font-bold shadow-sm transition-colors ${
                                            plan.highlight
                                                ? "bg-[#0F172A] text-white hover:bg-[#0F172A]/90"
                                                : "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                                        }`}
                                    >
                                        {plan.cta}
                                    </a>
                                </div>

                                <div className="flex-1">
                                    <p className="text-sm font-bold text-zinc-900 mt-4 mb-4 pb-2 border-b border-zinc-200">
                                        {plan.groupTitle}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {plan.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                                                <svg
                                                    className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
