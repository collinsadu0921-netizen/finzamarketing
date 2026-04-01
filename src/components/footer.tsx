import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";

export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 text-left">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image src="/logo.png" alt="Finza" width={100} height={30} className="h-7 w-auto" />
                        </Link>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Ledger-first accounting for modern African businesses.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="/features" className="hover:text-zinc-900 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link></li>
                            <li className="flex items-center gap-2"><span className="text-zinc-400">Retail Workspace</span> <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">Soon</span></li>
                            <li className="flex items-center gap-2"><span className="text-zinc-400">Accountant Workspace</span> <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">Soon</span></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link></li>
                            <li><Link href="/security" className="hover:text-zinc-900 transition-colors">Security</Link></li>
                            <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
                            <li><Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link></li>
                            <li><Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li><Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link></li>
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

