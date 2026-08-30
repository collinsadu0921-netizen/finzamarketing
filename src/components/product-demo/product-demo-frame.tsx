"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProductDemoFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  showMockup?: boolean;
  mockup?: ReactNode;
};

/**
 * Fixed-aspect product frame with SSR screenshot fallback and optional HTML mockup crossfade.
 */
export function ProductDemoFrame({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 1024px) 96vw, 60vw",
  className,
  showMockup = false,
  mockup,
}: ProductDemoFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]",
        className,
      )}
    >
      <div className="relative aspect-[2400/1350] w-full min-w-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          sizes={sizes}
          className={cn(
            "absolute inset-0 block h-full w-full object-cover object-top transition-opacity duration-300",
            showMockup && mockup ? "opacity-0" : "opacity-100",
          )}
        />
        {mockup && showMockup ? (
          <motion.div
            aria-hidden
            className="absolute inset-0 overflow-hidden bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: "none" }}
          >
            {mockup}
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
