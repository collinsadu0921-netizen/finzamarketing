"use client";

import { useState } from "react";
import { Container } from "@/components/container";

type BillingCycle = "monthly" | "quarterly" | "annual";

const plansData = [
    {
        id: "essentials",
        name: "Essentials",
        subtitle: "Core financial operations for running your business",
        price: 149,
        highlight: false,
        cta: "Start 14-day free trial",
        planParam: "starter",
        groups: [
            {
                name: "Financial Operations",
                items: [
                    "Real-time business overview and performance tracking",
                    "Customer management and activity history",
                    "Quote creation and conversion to invoices",
                    "Service-based workflow management"
                ]
            },
            {
                name: "Billing & Cash Management",
                items: [
                    "Proforma invoice generation",
                    "Invoice creation and tracking",
                    "Payment recording and status tracking",
                    "Credit notes and adjustments",
                    "Expense tracking and categorisation"
                ]
            },
            {
                name: "Financial Reporting",
                items: [
                    "Profit & Loss (real-time view)",
                    "Balance Sheet (automatically generated)"
                ]
            },
            {
                name: "Tax & Compliance",
                items: [
                    "VAT tracking and reporting"
                ]
            },
            {
                name: "Business Configuration",
                items: [
                    "Business profile management",
                    "Invoice configuration (numbering, structure)",
                    "Payment setup and preferences",
                    "WhatsApp communication integration"
                ]
            }
        ]
    },
    {
        id: "professional",
        name: "Professional",
        subtitle: "Operational control and structured financial management",
        price: 449,
        highlight: true,
        cta: "Start 14-day free trial",
        planParam: "professional",
        addedText: "Everything in Essentials, plus:",
        groups: [
            {
                name: "Operations & Resource Management",
                items: [
                    "Project tracking and management",
                    "Material usage tracking",
                    "Supplier bill management"
                ]
            },
            {
                name: "Workforce & Internal Management",
                items: [
                    "Payroll processing",
                    "Salary advances management",
                    "Team member access control",
                    "Staff management"
                ]
            },
            {
                name: "Financial Management & Reporting",
                items: [
                    "Fixed asset tracking",
                    "Cash flow statement",
                    "Statement of changes in equity"
                ]
            },
            {
                name: "Tax & Regulatory Reporting",
                items: [
                    "VAT return preparation",
                    "Withholding tax (WHT) tracking and returns"
                ]
            },
            {
                name: "Collaboration & Oversight",
                items: [
                    "Accountant collaboration requests",
                    "Accounting activity log"
                ]
            }
        ]
    },
    {
        id: "business",
        name: "Business",
        subtitle: "Full financial control with accounting-grade infrastructure",
        price: 949,
        highlight: false,
        cta: "Start 14-day free trial",
        planParam: "business",
        addedText: "Everything in Professional, plus:",
        groups: [
            {
                name: "Core Accounting Infrastructure",
                items: [
                    "General Ledger (system-generated and continuously updated)",
                    "Chart of Accounts management",
                    "Trial Balance (automatically maintained)"
                ]
            },
            {
                name: "Reconciliation & Accuracy Control",
                items: [
                    "Transaction reconciliation",
                    "Bank reconciliation"
                ]
            },
            {
                name: "Financial Governance",
                items: [
                    "Accounting period management",
                    "Period closing controls"
                ]
            },
            {
                name: "Capital & Financial Structuring",
                items: [
                    "Loan tracking and management",
                    "Equity tracking and structuring",
                    "Corporate Income Tax (CIT) provisions"
                ]
            },
            {
                name: "Audit & System Integrity",
                items: [
                    "Full system audit log",
                    "End-to-end financial traceability"
                ]
            }
        ]
    }
];

export function PricingTiers() {
    const [cycle, setCycle] = useState<BillingCycle>("monthly");

    const getPrice = (monthlyPrice: number) => {
        if (cycle === "quarterly") return monthlyPrice * 3;
        if (cycle === "annual") return monthlyPrice * 12;
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
                <div className="flex justify-center mb-16">
                    <div className="flex bg-zinc-50 border border-zinc-200 p-1.5 rounded-xl shadow-sm relative">
                        {(["monthly", "quarterly", "annual"] as BillingCycle[]).map((c) => (
                            <button
                                key={c}
                                onClick={() => setCycle(c)}
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                                    cycle === c
                                        ? "bg-white text-zinc-900 shadow border border-zinc-200/50"
                                        : "text-zinc-500 hover:text-zinc-900"
                                }`}
                            >
                                <span className="capitalize">{c}</span>
                                {c === "annual" && (
                                    <span className="absolute -top-3 -right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 whitespace-nowrap">
                                        Save up to 20%
                                    </span>
                                )}
                            </button>
                        ))}
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
                                    <h2 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h2>
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
                                                Monthly equivalent: GHS {plan.price}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-xs font-semibold text-emerald-600 mb-6">
                                        14-day free trial on the {plan.name} plan
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
                                    {plan.addedText && (
                                        <p className="text-sm font-bold text-zinc-900 mt-4 mb-6 pb-2 border-b border-zinc-200">
                                            {plan.addedText}
                                        </p>
                                    )}

                                    <div className={`space-y-8 ${!plan.addedText ? 'mt-4' : ''}`}>
                                        {plan.groups.map((group) => (
                                            <div key={group.name}>
                                                <p className="text-sm font-bold text-zinc-900 mb-3 block">
                                                    {group.name}
                                                </p>
                                                <ul className="space-y-2.5">
                                                    {group.items.map((item) => (
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto space-y-4">
                    <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">Built for structured businesses</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Finza is designed for businesses that need accurate numbers, consistent records, and financial visibility as they operate.
                        </p>
                    </div>
                    <p className="text-sm text-zinc-500 pt-4">
                        Note: Trial applies to the selected Service plan. You can subscribe at any time before the trial ends.
                    </p>
                </div>
            </Container>
        </section>
    );
}
