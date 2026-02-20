import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
    return (
        <section className="py-24 md:py-32 bg-secondary/30" id="pricing">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Start for free, scale as you grow. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="flex flex-col p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                        <h3 className="text-xl font-semibold text-primary mb-2">Starter</h3>
                        <div className="text-4xl font-extrabold mb-6">$0<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">Perfect for hobbyists and side projects.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold">Get Started</Button>
                        <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> 1 User</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> 5 Projects</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Community Support</li>
                        </ul>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex flex-col p-8 bg-white border-2 border-primary rounded-3xl shadow-2xl relative transform scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Pro</h3>
                        <div className="text-4xl font-extrabold mb-6">$29<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">For professional developers and small teams.</p>
                        <Button className="w-full mb-8 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg">Start Free Trial</Button>
                        <ul className="space-y-4 text-sm text-foreground/80 flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> 5 Users</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Unlimited Projects</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Priority Support</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Advanced Analytics</li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                        <h3 className="text-xl font-semibold text-primary mb-2">Enterprise</h3>
                        <div className="text-4xl font-extrabold mb-6">Custom</div>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">For large organizations with specific needs.</p>
                        <Button variant="outline" className="w-full mb-8 font-semibold">Contact Sales</Button>
                        <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Unlimited Users</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> SLA</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Dedicated Account Manager</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Custom Integrations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
