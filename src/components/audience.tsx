import { Store, Building2, Briefcase, UserCheck } from "lucide-react";

export function Audience() {
    return (
        <section className="py-24 md:py-32 bg-background border-t">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">Who It’s For</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Built for Ghanaian service businesses and growing teams.
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

                    {/* Contractors & field teams */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <Store className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Contractors &amp; Field Teams</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Keep scope, invoicing, and expense records connected across active jobs and client sites.
                        </p>
                    </div>

                    {/* SMEs */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Growing SMEs</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Manage invoices, expenses, payroll, documents, and reports in one business workspace.
                        </p>
                    </div>

                    {/* Accountants */}
                    <div className="p-8 border border-border/50 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-background rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary border shadow-sm group-hover:scale-110 transition-transform">
                            <UserCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary text-center">Accountants</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            Review cleaner client records and support teams with organized, accountant-ready information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
