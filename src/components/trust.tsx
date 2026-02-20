import { Shield, Fingerprint, Database, Cloud } from "lucide-react";

export function Trust() {
    return (
        <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Bank-Grade Security</h2>
                    <p className="text-xl opacity-80 leading-relaxed">
                        Your financial data is protected by industry-leading security standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-12 text-center">
                    {/* Secure Cloud Hosting */}
                    <div className="group">
                        <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                            <Cloud className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Secure Cloud Hosting</h3>
                        <p className="text-sm opacity-70 leading-relaxed">
                            Data stored in redundant, high-availability data centers with 99.9% uptime.
                        </p>
                    </div>

                    {/* Role-based Access */}
                    <div className="group">
                        <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Role-Based Access</h3>
                        <p className="text-sm opacity-70 leading-relaxed">
                            Granular permissions ensure employees only access what they need.
                        </p>
                    </div>

                    {/* Encrypted Authentication */}
                    <div className="group">
                        <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Encrypted Auth</h3>
                        <p className="text-sm opacity-70 leading-relaxed">
                            256-bit encryption for all data in transit and at rest.
                        </p>
                    </div>

                    {/* Data Backups */}
                    <div className="group">
                        <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Automated Backups</h3>
                        <p className="text-sm opacity-70 leading-relaxed">
                            Daily updates prevent data loss and ensure point-in-time recovery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
