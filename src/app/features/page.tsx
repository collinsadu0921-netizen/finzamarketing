import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, RotateCw, ShoppingCart, PieChart, Lock, Users, FileText, Briefcase, Calculator } from "lucide-react";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Powerful Features for Modern Accounting</h1>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto">
                        Everything you need to automate your finances, from transaction to tax return.
                    </p>
                </div>
            </section>

            {/* Auto-Posting Engine */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative aspect-video bg-secondary/50 rounded-2xl border shadow-lg overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        <RotateCw className="w-20 h-20 text-primary opacity-20" />
                        <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-md border flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                            <div>
                                <div className="text-sm font-bold text-primary">Transaction Processed</div>
                                <div className="text-xs text-muted-foreground">Ledger updated instantly</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">Core Engine</div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Auto-Posting Engine</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Say goodbye to manual data entry. Our engine automatically classifies transactions and posts double-entry records to your general ledger in real-time.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Automatic categorization</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Double-entry compliance</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Instant reconciliation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* VAT Logic */}
            <section className="py-24 border-b bg-secondary/20">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">Compliance</div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Ghana VAT Logic</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Built-in support for Ghana's specific tax structures. Whether you are on the Standard Rate or Flat Rate Scheme, we calculate it correctly every time.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3"><Calculator className="w-5 h-5 text-primary" /> NHIL, GETFund & COVID-19 Levy</li>
                            <li className="flex items-center gap-3"><Calculator className="w-5 h-5 text-primary" /> Automatic input/output tax separation</li>
                            <li className="flex items-center gap-3"><Calculator className="w-5 h-5 text-primary" /> GRA-ready reports</li>
                        </ul>
                    </div>
                    <div className="relative aspect-video bg-white rounded-2xl border shadow-lg overflow-hidden flex items-center justify-center p-8">
                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="font-semibold text-primary">Subtotal</span>
                                <span>GH₵ 1,000.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>NHIL (2.5%)</span>
                                <span>GH₵ 25.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>GETFund (2.5%)</span>
                                <span>GH₵ 25.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>COVID-19 (1%)</span>
                                <span>GH₵ 10.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>VAT (12.5%)</span>
                                <span>GH₵ 159.00</span> // (1000+25+25+10 * 15%) simplified for mock
                            </div>
                            <div className="flex justify-between items-center border-t pt-2 font-bold text-primary text-lg">
                                <span>Total</span>
                                <span>GH₵ 1,219.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Mode */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative aspect-video bg-secondary/50 rounded-2xl border shadow-lg overflow-hidden flex items-center justify-center">
                        <Briefcase className="w-20 h-20 text-primary opacity-20" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">For Agencies & Freelancers</div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Service Mode</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Track billable hours, manage project-based expenses, and send professional invoices that get executed faster.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Retainer management</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Expense rebilling</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Client portals</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Retail Mode */}
            <section className="py-24 border-b bg-secondary/20">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">For Shops & Inventory</div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Retail Mode</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Keep your inventory in sync with your accounts. Track stock levels, cost of goods sold, and daily sales automatically.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3"><ShoppingCart className="w-5 h-5 text-primary" /> Real-time stock tracking</li>
                            <li className="flex items-center gap-3"><ShoppingCart className="w-5 h-5 text-primary" /> COGS calculation</li>
                            <li className="flex items-center gap-3"><ShoppingCart className="w-5 h-5 text-primary" /> Supplier management</li>
                        </ul>
                    </div>
                    <div className="relative aspect-video bg-white rounded-2xl border shadow-lg overflow-hidden flex items-center justify-center">
                        <ShoppingCart className="w-20 h-20 text-primary opacity-20" />
                    </div>
                </div>
            </section>

            {/* Reports */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative aspect-video bg-secondary/50 rounded-2xl border shadow-lg overflow-hidden flex items-center justify-center">
                        <FileText className="w-20 h-20 text-primary opacity-20" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">Insights</div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Financial Reports</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Generate balance sheets, profit & loss statements, and cash flow reports that are ready for your accountant or the taxman.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3"><PieChart className="w-5 h-5 text-primary" /> Real-time P&L</li>
                            <li className="flex items-center gap-3"><PieChart className="w-5 h-5 text-primary" /> Balance Sheet</li>
                            <li className="flex items-center gap-3"><PieChart className="w-5 h-5 text-primary" /> Aged Receivables</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Period Locking & Multi-User */}
            <section className="py-24 bg-secondary/20">
                <div className="container mx-auto px-6 max-w-[1200px] grid md:grid-cols-2 gap-12">

                    <div className="bg-background p-10 rounded-3xl border shadow-sm">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Period Locking</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Close your books at the end of the month or year. prevent accidental edits to historical data once reports have been filed.
                        </p>
                    </div>

                    <div className="bg-background p-10 rounded-3xl border shadow-sm">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Multi-User Roles</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Invite your team and your accountant. Control who can view, edit, or approve transactions with granular permission settings.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
