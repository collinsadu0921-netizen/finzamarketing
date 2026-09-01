"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { IncomingDocumentsShell } from "./incoming-documents-shell";

const DESKTOP_QUERY = "(min-width: 1024px)";

type Props = {
  variant?: "default" | "compact";
};

export function IncomingDocumentsPreview({ variant = "default" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const playedRef = useRef(false);

  useEffect(() => {
    if (!inView || reduceMotion !== false || playedRef.current) return;
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;

    const shell = ref.current;
    if (!shell) return;

    playedRef.current = true;
    const timeouts: number[] = [];
    const t = (fn: () => void, ms: number) => {
      timeouts.push(window.setTimeout(fn, ms));
    };

    const rows = shell.querySelectorAll<HTMLElement>(".docs-row");
    const counters =
      shell.querySelectorAll<HTMLElement>(".docs-status-counter");

    /* Phase 1: Status counter emphasis (400ms) */
    counters.forEach((el, i) => {
      t(() => {
        el.style.transition = "background-color 350ms ease";
        el.style.backgroundColor = "rgb(240 249 255)";
      }, 400 + i * 120);
      t(() => {
        el.style.backgroundColor = "";
      }, 400 + i * 120 + 600);
    });

    /* Phase 2: First document row emphasis (1200ms) */
    if (rows[0]) {
      t(() => {
        rows[0].style.transition =
          "background-color 400ms ease, box-shadow 400ms ease";
        rows[0].style.backgroundColor = "rgb(255 251 235)";
        rows[0].style.boxShadow =
          "inset 3px 0 0 rgb(245 158 11 / 0.6)";
      }, 1200);
      t(() => {
        rows[0].style.backgroundColor = "";
        rows[0].style.boxShadow = "";
      }, 2200);
    }

    /* Phase 3: Second document row — extracted badge glow (2000ms) */
    if (rows[1]) {
      t(() => {
        rows[1].style.transition = "background-color 400ms ease";
        rows[1].style.backgroundColor = "rgb(236 253 245 / 0.5)";
        const extracted = rows[1].querySelector(
          'span[class*="emerald"]'
        ) as HTMLElement | null;
        if (extracted) {
          extracted.style.transition = "box-shadow 300ms ease";
          extracted.style.boxShadow =
            "0 0 0 2px rgb(16 185 129 / 0.25)";
        }
      }, 2000);
      t(() => {
        rows[1].style.backgroundColor = "";
        const extracted = rows[1].querySelector(
          'span[class*="emerald"]'
        ) as HTMLElement | null;
        if (extracted) {
          extracted.style.boxShadow = "";
        }
      }, 3000);
    }

    /* Phase 4: Third document — linked badge glow (2800ms) */
    if (rows[2]) {
      t(() => {
        rows[2].style.transition = "background-color 400ms ease";
        rows[2].style.backgroundColor = "rgb(240 249 255 / 0.5)";
      }, 2800);
      t(() => {
        rows[2].style.backgroundColor = "";
      }, 3800);
    }

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [inView, reduceMotion]);

  return (
    <div
      ref={ref}
      className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]"
    >
      <IncomingDocumentsShell variant={variant} />
    </div>
  );
}
