import { CheckCircle2, FileJson, Lock, PieChart, RefreshCw, Scale, FileText, Server } from "lucide-react";

export function Autoposting() {
    return (
        <section className="py-24 md:py-32 bg-background border-y relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left: Step Flow Visual */}
                    <div className="relative p-8 md:p-12 bg-secondary/30 rounded-3xl border border-border/50 shadow-inner h-full flex flex-col justify-center">

                        {/* Connecting Line */}
                        <div className="absolute left-[3.25rem] md:left-[4.25rem] top-20 bottom-20 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

                        <div className="space-y-12 relative z-10 my-auto">
                            {/* Step 1 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <FileJson className="w-6 h-6" />
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-border/40 flex-1 transition-all group-hover:shadow-md group-hover:-translate-y-1">
                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Input</div>
                                    <div className="font-semibold text-primary">Transaction Occurs</div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <RefreshCw className="w-6 h-6 animate-spin-slow" />
                                </div>
                                <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 flex-1 transition-all group-hover:bg-primary/10 group-hover:-translate-y-1">
                                    <div className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-1">Processing</div>
                                    <div className="font-semibold text-primary">Auto-Classification & VAT</div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border shadow-sm flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-border/40 flex-1 transition-all group-hover:shadow-md group-hover:-translate-y-1">
                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Output</div>
                                    <div className="font-semibold text-primary">Books Balanced Instantly</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Explanation */}
                    <div>
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-primary/10 text-primary mb-8 border-primary/20">
                            Core Engine
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-8 leading-[1.1]">
                            The Ledger Updates Itself.
                        </h2>
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                                    <Server className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">Double-Entry Auto-Generated</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Finza instantly creates debit and credit entries for every transaction, adhering to strict accounting standards.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">Real-Time VAT</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        VAT (Standard, Flat Rate, etc.) is automatically calculated, separated, and posted to the correct liability accounts.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">Balanced Books</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Your trial balance is always equal. We prevent unbalanced entries from ever hitting the ledger.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">Period Locking</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Secure your financial history by locking closed periods, preventing accidental or unauthorized edits.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 5 */}
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">Accountant-Ready Reports</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Generate Balance Sheet, P&L, and Cash Flow statements that are ready for audit at any moment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
