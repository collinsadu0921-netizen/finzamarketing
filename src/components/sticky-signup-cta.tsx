"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackFinzaEvent } from "@/lib/analytics";

const HIDDEN_PREFIXES = ["/admin"];

const SIGNUP =
  "https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1";

/** Fixed bottom bar after scroll — keeps signup visible (excludes admin). */
export function StickySignupCta() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const hidden = !pathname || HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));
  const show = !hidden && scrollY > 380;

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(onScroll, 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hidden]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md"
      role="region"
      aria-label="Sign up"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-center text-sm text-zinc-600 sm:text-left">
          <span className="font-bold text-zinc-900">Start managing your business properly</span>
          <span className="text-zinc-500"> — in Ghana cedis with Finza.</span>
        </p>
        <div className="flex flex-shrink-0 justify-center gap-2 sm:justify-end">
          <a
            href={SIGNUP}
            className="rounded-md bg-[#0F172A] px-4 py-2 text-center text-sm font-bold text-white hover:bg-[#0F172A]/90"
            onClick={() =>
              trackFinzaEvent("sticky_cta_signup_click", {
                cta_label: "try_free_in_ghs",
              })
            }
          >
            Try free in GHS
          </a>
          <Link
            href="/pricing"
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            onClick={() =>
              trackFinzaEvent("sticky_cta_pricing_click", {
                cta_label: "view_pricing",
              })
            }
          >
            View pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
