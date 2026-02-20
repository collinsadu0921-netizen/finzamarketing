"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/accountants", label: "For Accountants" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-zinc-100">
            <Container className="flex h-[72px] items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-900">
                    Finza
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-zinc-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-sm font-medium text-zinc-900 hover:text-zinc-700 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/demo"
                            className="rounded-md bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
                        >
                            Book a Demo
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
                <div className="md:hidden border-t border-zinc-100 bg-white absolute w-full left-0 top-[72px] shadow-lg">
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
                            <Link
                                href="/login"
                                className="text-sm font-medium text-zinc-900 hover:text-zinc-700 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/demo"
                                className="rounded-md bg-[#0F172A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}
