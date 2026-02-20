import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden flex flex-col items-center text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-primary-foreground/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1]">Ready to Stop Manual Posting?</h2>
                <p className="text-xl md:text-2xl mb-12 opacity-80 leading-relaxed max-w-2xl mx-auto">
                    Experience the future of automated accounting in Ghana today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" variant="secondary" className="h-16 px-12 text-lg font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto text-primary bg-white hover:bg-white/90">
                        Book a Demo
                    </Button>
                </div>
            </div>
        </section>
    );
}
