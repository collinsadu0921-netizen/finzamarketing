"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type BillingCycle = "monthly" | "quarterly" | "annual";

export function PricingSection() {
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
        <section className="py-24 md:py-32 bg-secondary/30" id="pricing">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Start your 14-day free trial. Choose the plan that matches your business.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="flex bg-white/50 border border-zinc-200 p-1.5 rounded-xl shadow-sm relative overflow-x-auto max-w-full">
                        {(["monthly", "quarterly", "annual"] as BillingCycle[]).map((c) => (
                            <button
                                key={c}
                                onClick={() => setCycle(c)}
                                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                                    cycle === c
                                        ? "bg-white text-zinc-900 shadow border border-zinc-200/50"
                                        : "text-zinc-500 hover:text-zinc-900"
                                }`}
                            >
                                <span className="capitalize whitespace-nowrap">{c}</span>
                                {c === "quarterly" && (
                                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                        Save 5%
                                    </span>
                                )}
                                {c === "annual" && (
                                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                        Save 17%
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Essentials Plan */}
                    <div className="flex flex-col p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-bold bg-zinc-100 text-zinc-800">
                                Essentials
                            </span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1">
                            GHS {getPrice(149).toLocaleString()}
                            <span className="text-base font-normal text-muted-foreground">{formatCycleLabel()}</span>
                        </div>
                        <div className="min-h-[20px] mb-5">
                            {cycle !== "monthly" && (
                                <p className="text-xs text-muted-foreground font-medium">Monthly equivalent: GHS 149</p>
                            )}
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Core tools to manage operations and billing.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold" asChild>
                            <a href={`https://app.finza.africa/signup?workspace=service&plan=starter&cycle=${cycle}&trial=1`}>Start 14-day free trial</a>
                        </Button>
                        <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Dashboard, Customers, Quotes</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Invoices & Payments</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Profit & Loss, Balance Sheet</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Basic VAT Report</li>
                        </ul>
                    </div>

                    {/* Professional Plan */}
                    <div className="flex flex-col p-8 bg-white border-2 border-primary rounded-3xl shadow-2xl relative transform scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700">
                                Professional
                            </span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1">
                            GHS {getPrice(449).toLocaleString()}
                            <span className="text-base font-normal text-muted-foreground">{formatCycleLabel()}</span>
                        </div>
                        <div className="min-h-[20px] mb-5">
                            {cycle !== "monthly" && (
                                <p className="text-xs font-semibold text-emerald-600">Monthly equivalent: GHS 449</p>
                            )}
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">For growing teams and active businesses.</p>
                        <Button className="w-full mb-8 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                            <a href={`https://app.finza.africa/signup?workspace=service&plan=professional&cycle=${cycle}&trial=1`}>Start 14-day free trial</a>
                        </Button>
                        <ul className="space-y-4 text-sm text-foreground/80 flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Everything in Essentials</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Projects & Materials</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Payroll & Staff Management</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> VAT & WHT Returns</li>
                        </ul>
                    </div>

                    {/* Business Plan */}
                    <div className="flex flex-col p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-bold bg-fuchsia-100 text-fuchsia-700">
                                Business
                            </span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1">
                            GHS {getPrice(949).toLocaleString()}
                            <span className="text-base font-normal text-muted-foreground">{formatCycleLabel()}</span>
                        </div>
                        <div className="min-h-[20px] mb-5">
                            {cycle !== "monthly" && (
                                <p className="text-xs text-muted-foreground font-medium">Monthly equivalent: GHS 949</p>
                            )}
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Full-scale accounting and control.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold" asChild>
                            <a href={`https://app.finza.africa/signup?workspace=service&plan=business&cycle=${cycle}&trial=1`}>Start 14-day free trial</a>
                        </Button>
                        <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Everything in Professional</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Full General Ledger</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Trail Balance & Recons</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Full Audit Logs & Period Locks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
