import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link2, Users, FileBarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Accountants",
    description: "Manage all your clients in one place with Finza Partner Program.",
};

export default function AccountantsPage() {
    return (
        <main className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
                {/* Abstract background shape */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                    <div className="inline-flex items-center rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-semibold bg-primary-foreground/10 text-primary-foreground mb-8">
                        Finza Partner Program
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
                        Supercharge Your <br /> Accounting Practice
                    </h1>
                    <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Manage all your clients from a single dashboard. Automated data entry means you spend less time fixing errors and more time advising.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold shadow-xl bg-white text-primary hover:bg-white/90" asChild>
                            <Link href="/demo">Join Partner Program</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href="#benefits">View Benefits</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section id="benefits" className="py-24 md:py-32 bg-background">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Benefit 1 */}
                        <div className="p-10 rounded-3xl bg-secondary/20 border border-border/50">
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 border">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Client Portal</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Access all your client files from one secure login. Switch between organizations instantly without re-authenticating.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="p-10 rounded-3xl bg-secondary/20 border border-border/50">
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 border">
                                <FileBarChart className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Audit-Ready Data</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Say goodbye to shoeboxes of receipts. Every transaction is digitally recorded, categorized, and backed by source documents.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="p-10 rounded-3xl bg-secondary/20 border border-border/50">
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 border">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Compliance First</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Built-in Ghana VAT, WHT, and GRA reporting standards ensure your clients are always compliant with local regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 border-y bg-muted/30">
                <div className="container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-primary mb-6">Seamless Integrations</h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Finza works with the tools you already use. Export data to Excel, connect with payroll software, or use our API for custom workflows.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-medium text-primary">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Export to CSV/Excel
                            </li>
                            <li className="flex items-center gap-3 font-medium text-primary">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                GRA Portal Integration (Coming Soon)
                            </li>
                            <li className="flex items-center gap-3 font-medium text-primary">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Bank Feeds API
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        {/* Visual Representation of Integration */}
                        <div className="relative w-full max-w-md aspect-square bg-background rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center p-12 animate-spin-slow-reverse">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-xl z-20">Finza</div>
                            </div>
                            {/* Orbiting Icons */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md border z-20">
                                <span className="font-bold text-green-600">Excel</span>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-xl shadow-md border z-20">
                                <span className="font-bold text-blue-600">Banks</span>
                            </div>
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md border z-20">
                                <span className="font-bold text-red-600">GRA</span>
                            </div>
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md border z-20">
                                <span className="font-bold text-purple-600">Payroll</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
