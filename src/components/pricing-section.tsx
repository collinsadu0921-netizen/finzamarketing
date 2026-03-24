import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
    return (
        <section className="py-24 md:py-32 bg-secondary/30" id="pricing">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Start your 14-day free trial. Choose the plan that matches your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Essentials Plan */}
                    <div className="flex flex-col p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                        <h3 className="text-xl font-semibold text-primary mb-2">Essentials</h3>
                        <div className="text-4xl font-extrabold mb-6">GHS 149<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Core tools to manage operations and billing.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold" asChild>
                            <a href="https://app.finza.africa/signup?workspace=service&plan=starter&trial=1">Start 14-day free trial</a>
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
                        <h3 className="text-xl font-semibold text-primary mb-2">Professional</h3>
                        <div className="text-4xl font-extrabold mb-6">GHS 449<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">For growing teams and active businesses.</p>
                        <Button className="w-full mb-8 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                            <a href="https://app.finza.africa/signup?workspace=service&plan=professional&trial=1">Start 14-day free trial</a>
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
                        <h3 className="text-xl font-semibold text-primary mb-2">Business</h3>
                        <div className="text-4xl font-extrabold mb-6">GHS 949<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Full-scale accounting and control.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold" asChild>
                            <a href="https://app.finza.africa/signup?workspace=service&plan=business&trial=1">Start 14-day free trial</a>
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
