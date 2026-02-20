"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-[1200px]">
                {/* Left: Logo */}
                <Link href="/" className="font-bold text-2xl tracking-tight text-primary">
                    Finza
                </Link>

                {/* Right: Navigation & Actions */}
                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
                        <Link href="/features" className="hover:text-primary transition-colors">
                            Features
                        </Link>
                        <Link href="/pricing" className="hover:text-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="/accountants" className="hover:text-primary transition-colors">
                            For Accountants
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block"
                        >
                            Login
                        </Link>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md">
                            <Link href="/demo">Book a Demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
