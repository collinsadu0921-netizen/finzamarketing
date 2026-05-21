"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackFinzaEvent } from "@/lib/analytics";

const HIDDEN_PREFIXES = ["/admin"];
const SCROLL_SHOW_THRESHOLD = 380;
const BOTTOM_HIDE_OFFSET = 140;

/** Fixed bottom bar after scroll — walkthrough + plan-fit (excludes admin). */
export function StickySignupCta() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [nearBottom, setNearBottom] = useState(false);
  const [contactFormInView, setContactFormInView] = useState(false);
  const hidden = !pathname || HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));
  const onContactPage = pathname === "/contact";
  const show =
    !hidden &&
    scrollY > SCROLL_SHOW_THRESHOLD &&
    !nearBottom &&
    !(onContactPage && contactFormInView);

  useEffect(() => {
    if (hidden) return;

    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      setNearBottom(y + viewHeight >= docHeight - BOTTOM_HIDE_OFFSET);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(onScroll, 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hidden]);

  useEffect(() => {
    if (hidden || !onContactPage) {
      setContactFormInView(false);
      return;
    }

    const formSection = document.getElementById("contact-form");
    if (!formSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setContactFormInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(formSection);
    return () => observer.disconnect();
  }, [hidden, onContactPage]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200/90 bg-white/90 py-3 shadow-[0_-8px_32px_rgba(15,23,42,0.12)] backdrop-blur-lg"
      role="region"
      aria-label="Get started"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-center text-sm text-zinc-600 sm:text-left">
          <span className="font-bold text-zinc-900">Find the right Finza plan</span>
          <span className="text-zinc-500">{" \u2014 for your service business in Ghana."}</span>
        </p>
        <div className="flex flex-shrink-0 justify-center gap-2 sm:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-[#0F172A] px-4 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-slate-900/15 transition-all duration-200 hover:bg-[#1e293b]"
            onClick={() =>
              trackFinzaEvent("sticky_cta_walkthrough_click", {
                cta_label: "book_walkthrough",
              })
            }
          >
            Book a walkthrough
          </Link>
          <Link
            href="/pricing#find-plan"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-zinc-900 shadow-sm transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50"
            onClick={() =>
              trackFinzaEvent("sticky_cta_plan_fit_click", {
                cta_label: "find_my_plan",
              })
            }
          >
            Find my plan
          </Link>
        </div>
      </div>
    </div>
  );
}
