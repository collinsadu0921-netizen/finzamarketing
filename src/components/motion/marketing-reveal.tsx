"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { animate, useInView, useReducedMotion, type AnimationPlaybackControls } from "motion/react";
import { cn } from "@/lib/utils";

export type MarketingRevealVariant = "hero-settle" | "clip-scale" | "scale-settle";

type RevealTarget = {
  scale: number;
  y: number;
  opacity: number;
  clipPath?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const NARROW_QUERY = "(max-width: 767px)";
const OPEN_CLIP = "inset(0% 0% 0% 0% round 1rem)";
const PREPARED_CLIP = "inset(5% 5% 5% 5% round 1rem)";

const REST: RevealTarget = {
  scale: 1,
  y: 0,
  opacity: 1,
};

const HERO_FROM: RevealTarget = {
  scale: 0.985,
  y: 10,
  opacity: 1,
};

const CLIP_FROM: RevealTarget = {
  scale: 1.022,
  y: 0,
  opacity: 1,
  clipPath: PREPARED_CLIP,
};

const CLIP_TO: RevealTarget = {
  scale: 1,
  y: 0,
  opacity: 1,
  clipPath: OPEN_CLIP,
};

const SETTLE_FROM: RevealTarget = {
  scale: 0.988,
  y: 12,
  opacity: 0.92,
};

function fromTarget(variant: MarketingRevealVariant, narrow: boolean): RevealTarget {
  if (variant === "hero-settle") {
    return narrow ? { ...HERO_FROM, y: 6 } : HERO_FROM;
  }
  if (variant === "clip-scale" && !narrow) {
    return CLIP_FROM;
  }
  return narrow ? { ...SETTLE_FROM, y: 8, opacity: 0.94 } : SETTLE_FROM;
}

function playTarget(variant: MarketingRevealVariant, narrow: boolean): RevealTarget {
  if (variant === "clip-scale" && !narrow) {
    return CLIP_TO;
  }
  return REST;
}

function durationFor(variant: MarketingRevealVariant, narrow: boolean): number {
  if (narrow) return 0.36;
  if (variant === "clip-scale") return 0.58;
  if (variant === "hero-settle") return 0.42;
  return 0.48;
}

function isApproachingView(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight;
  return rect.top < viewport * 1.18 && rect.bottom > 0;
}

function keyframes(from: RevealTarget, to: RevealTarget) {
  return {
    scale: [from.scale, to.scale],
    y: [from.y, to.y],
    opacity: [from.opacity, to.opacity],
    ...(from.clipPath && to.clipPath
      ? { clipPath: [from.clipPath, to.clipPath] }
      : {}),
  };
}

type MarketingRevealProps = {
  children: ReactNode;
  variant: MarketingRevealVariant;
  className?: string;
};

/**
 * Visible-first screenshot enhancer. Server HTML is the completed frame.
 * JavaScript may apply a modest prepared state, then settle once.
 */
export function MarketingReveal({ children, variant, className }: MarketingRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);
  const playControlsRef = useRef<AnimationPlaybackControls | null>(null);
  const reduceMotion = useReducedMotion();
  const immediate = variant === "hero-settle";
  const inView = useInView(ref, {
    once: true,
    initial: false,
    amount: 0.2,
    margin: "0px 0px 18% 0px",
  });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || reduceMotion !== false || playedRef.current) {
      return;
    }

    const narrow = window.matchMedia(NARROW_QUERY).matches;
    const from = fromTarget(variant, narrow);
    const to = playTarget(variant, narrow);
    const shouldPlay = immediate || inView || isApproachingView(element);

    if (!shouldPlay) {
      const prepared = animate(element, from, { duration: 0 });
      return () => prepared.stop();
    }

    playedRef.current = true;
    playControlsRef.current = animate(element, keyframes(from, to), {
      duration: durationFor(variant, narrow),
      ease: EASE,
    });
  }, [immediate, inView, reduceMotion, variant]);

  useLayoutEffect(() => {
    return () => {
      playControlsRef.current?.stop();
    };
  }, []);

  return (
    <div ref={ref} className={cn("block w-full min-w-0 max-w-full", className)}>
      {children}
    </div>
  );
}
