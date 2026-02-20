import { AlertTriangle, Calculator, FileWarning } from "lucide-react";

export function Problem() {
    return (
        <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 -z-10" />

            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
                        Accounting in Ghana Shouldn’t Be Guesswork.
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Stop wasting hours fixing mistakes and calculating VAT. Let the system handle the heavy lifting.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Card 1: Manual Posting */}
                    <div className="p-10 bg-background rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group">
                        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 text-red-600 group-hover:scale-110 transition-transform">
                            <FileWarning className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Manual Posting</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Entering data manually is slow, boring, and prone to costly human errors that compound over time.
                        </p>
                    </div>

                    {/* Card 2: VAT Confusion */}
                    <div className="p-10 bg-background rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 text-amber-600 group-hover:scale-110 transition-transform">
                            <Calculator className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">VAT Confusion</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Navigating complex VAT regulations without automated tools often leads to underpayment or penalties.
                        </p>
                    </div>

                    {/* Card 3: Accountant Fixes Errors */}
                    <div className="p-10 bg-background rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Accountant Fixes</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Your accountant spends more time correcting simple mistakes than providing valuable financial advice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
