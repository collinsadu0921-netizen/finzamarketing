"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    firstLinkRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 shadow-sm shadow-zinc-900/[0.03] backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between">
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

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://app.finza.africa/login"
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
            >
              Login
            </a>
            <a
              href={starterSignupHref}
              className="rounded-lg bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition-all duration-200 hover:bg-[#1e293b] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Start free trial
            </a>
          </div>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-md p-2 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 md:hidden"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen ? (
        <div
          id={menuId}
          className="absolute left-0 top-[68px] w-full border-t border-zinc-100 bg-white shadow-lg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="block rounded-md py-2.5 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-zinc-100" />
            <a
              href="https://app.finza.africa/login"
              className="block py-2.5 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href={starterSignupHref}
              className="mt-1 rounded-lg bg-[#0F172A] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#1e293b]"
              onClick={() => setIsOpen(false)}
            >
              Start free trial
            </a>
          </Container>
        </div>
      ) : null}
    </nav>
  );
}
