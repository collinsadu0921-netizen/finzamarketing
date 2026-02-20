import { Store, Building2, Briefcase, UserCheck } from "lucide-react";

export function Audience() {
    return (
        <section className="py-24 md:py-32 bg-background border-t">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Who It’s For</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Tailored solutions for every type of Ghanaian business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service Businesses */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <Briefcase className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Service Businesses</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Keep track of billable hours, project expenses, and client invoicing with ease.
                        </p>
                    </div>

                    {/* Retail Stores */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <Store className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Retail Stores</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Simplify inventory management and daily sales tracking across multiple locations.
                        </p>
                    </div>

                    {/* SMEs */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">SMEs</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            All-in-one financial management to scale operations without the complexity.
                        </p>
                    </div>

                    {/* Accountants */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <UserCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Accountants</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Access client data instantly, perform audits efficiently, and ensure full compliance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
