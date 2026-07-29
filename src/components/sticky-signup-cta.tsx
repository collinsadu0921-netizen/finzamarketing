"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackFinzaEvent } from "@/lib/analytics";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const HIDDEN_PREFIXES = ["/admin"];
const SCROLL_SHOW_THRESHOLD = 380;
const BOTTOM_HIDE_OFFSET = 300;
const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

/** Mobile-focused sticky trial bar after scroll (excludes admin). */
export function StickySignupCta() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [nearBottom, setNearBottom] = useState(false);
  const [contactFormInView, setContactFormInView] = useState(false);
  const hidden = !pathname || HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));
  const onContactPage = pathname === "/contact";
  const onPricingPage = pathname === "/pricing";
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

  const primaryHref = onPricingPage ? "/pricing#plans" : starterSignupHref;
  const primaryLabel = onPricingPage ? "Compare plans" : "Start free trial";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200/90 bg-white/95 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-8px_32px_rgba(15,23,42,0.12)] backdrop-blur-lg md:hidden"
      role="region"
      aria-label="Get started"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4">
        <p className="min-w-0 text-sm text-zinc-600">
          <span className="font-bold text-zinc-900">Start free trial</span>
          <span className="text-zinc-500"> · 14 days · No card</span>
        </p>
        <a
          href={primaryHref}
          className="shrink-0 rounded-lg bg-[#0F172A] px-4 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-slate-900/15 transition-colors duration-200 hover:bg-[#1e293b]"
          onClick={() =>
            trackFinzaEvent("sticky_cta_trial_click", {
              cta_label: onPricingPage ? "compare_plans" : "start_free_trial",
            })
          }
        >
          {primaryLabel}
        </a>
      </div>
    </div>
  );
}
