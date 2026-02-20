import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 text-left">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-zinc-900">Finza</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Ledger-first accounting for modern African businesses.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="/features" className="hover:text-zinc-900 transition-colors">Retail Workspace</Link></li>
                            <li><Link href="/features" className="hover:text-zinc-900 transition-colors">Service Workspace</Link></li>
                            <li><Link href="/accountants" className="hover:text-zinc-900 transition-colors">Accountant Workspace</Link></li>
                            <li><Link href="/#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">Security</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-200 text-center">
                    <p className="text-sm text-zinc-500">
                        &copy; 2026 Finza. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
