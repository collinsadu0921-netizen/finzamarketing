import { Store, Calculator, Smartphone } from "lucide-react";

export function Ghana() {
    return (
        <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
            {/* Background - kept subtle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Built for Ghana</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Built for Ghanaian service businesses with practical workflows for daily operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {/* Native GHS */}
                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="font-bold text-lg">₵</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-3">Native GHS</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Designed from the ground up for the Ghanaian Cedi, handling all formatting and currency specificities natively.
                        </p>
                    </div>

                    {/* VAT Logic */}
                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Calculator className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-3">VAT Logic</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Structured for Ghana VAT presentation so service-business records stay clearer for review.
                        </p>
                    </div>

                    {/* Service operations */}
                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Store className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-3">Service Operations</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Designed for contractors, consultants, agencies, cleaning teams, and other service providers.
                        </p>
                    </div>

                    {/* Mobile Ready */}
                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-3">Mobile Ready</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Fully optimized for mobile devices so teams can handle invoices, expenses, and records from anywhere in Ghana.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
