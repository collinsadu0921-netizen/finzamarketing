"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/invoice-calculator-ghana", label: "Invoice calculator" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 shadow-sm shadow-zinc-900/[0.03] backdrop-blur-md">
            <Container className="flex h-[68px] items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/logo.png" 
                        alt="Finza" 
                        width={108} 
                        height={32} 
                        className="h-7 w-auto" 
                        priority 
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-zinc-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://app.finza.africa/login"
                            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href={starterSignupHref}
                            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50"
                        >
                            Start free trial
                        </a>
                        <Link
                            href="/contact"
                            className="rounded-lg bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition-all duration-200 hover:bg-[#1e293b] hover:shadow-lg"
                        >
                            Book a walkthrough
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-zinc-100 bg-white absolute w-full left-0 top-[68px] shadow-lg">
                    <Container className="py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="border-zinc-100" />
                        <div className="flex flex-col gap-3 pt-2">
                            <a
                                href="https://app.finza.africa/login"
                                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                href={starterSignupHref}
                                className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Start free trial
                            </a>
                            <Link
                                href="/contact"
                                className="rounded-md bg-[#0F172A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a walkthrough
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}
