"use client";

import { useRef } from "react";
import { HeroDashboardAnimation } from "@/components/home/hero-dashboard-animation";

/**
 * Thin client wrapper around the server-rendered dashboard shell.
 * Provides a ref so the animation island can reach into the DOM.
 * Children (the shell) are server-rendered and streamed in SSR.
 */
export function HeroDashboard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]"
    >
      {children}
      <HeroDashboardAnimation shellRef={ref} />
    </div>
  );
}
