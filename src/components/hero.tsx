import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px] flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">

                {/* Left: Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                        Now Live in Ghana 🇬🇭
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
                        Accurate Accounting. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Automatically.</span>
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                        Finza posts every sale, invoice, expense and payment directly to your ledger — with Ghana VAT built in.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all gap-2" asChild>
                            <Link href="/demo">
                                Book a Demo <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-2 hover:bg-muted/50 gap-2" asChild>
                            <Link href="#how-it-works">
                                <PlayCircle className="w-4 h-4" /> See How It Works
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right: Product Mockup Placeholder */}
                <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
                    <div className="relative aspect-[4/3] bg-secondary/50 rounded-2xl shadow-2xl border border-border/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                        {/* Placeholder UI */}
                        <div className="absolute inset-4 bg-background rounded-xl shadow-inner border border-border/20 flex flex-col p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="space-y-2">
                                    <div className="h-4 w-32 bg-muted rounded-md animate-pulse" />
                                    <div className="h-3 w-20 bg-muted/50 rounded-md animate-pulse" />
                                </div>
                                <div className="h-8 w-8 bg-primary/10 rounded-full" />
                            </div>
                            <div className="space-y-4 flex-1">
                                <div className="h-12 w-full bg-secondary/30 rounded-lg animate-pulse" />
                                <div className="h-12 w-full bg-secondary/30 rounded-lg animate-pulse delay-100" />
                                <div className="h-12 w-full bg-secondary/30 rounded-lg animate-pulse delay-200" />
                            </div>
                            <div className="mt-auto pt-6 border-t flex justify-between items-center">
                                <div className="h-4 w-24 bg-muted rounded-md" />
                                <div className="h-8 w-24 bg-primary rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 -z-10 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        </section>
    );
}
