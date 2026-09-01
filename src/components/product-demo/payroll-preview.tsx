"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { PayrollPreviewShell } from "./payroll-preview-shell";

const DESKTOP_QUERY = "(min-width: 1024px)";

type Props = {
  variant?: "default" | "compact";
};

export function PayrollPreview({ variant = "default" }: Props) {
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

    const netCard = shell.querySelector<HTMLElement>(".payroll-summary-net");
    const unpaid = shell.querySelector<HTMLElement>(".payroll-status-unpaid");
    const recovered = shell.querySelector<HTMLElement>('[data-obligation="advances"]');

    if (netCard) {
      t(() => {
        netCard.style.transition = "background-color 400ms ease";
        netCard.style.backgroundColor = "rgb(236 253 245)";
      }, 400);
      t(() => {
        netCard.style.backgroundColor = "";
      }, 1400);
    }

    if (unpaid) {
      t(() => {
        unpaid.style.transition = "box-shadow 350ms ease";
        unpaid.style.boxShadow = "0 0 0 2px rgb(113 113 122 / 0.35)";
      }, 1200);
      t(() => {
        unpaid.style.boxShadow = "";
      }, 2100);
    }

    if (recovered) {
      t(() => {
        recovered.style.transition = "background-color 400ms ease";
        recovered.style.backgroundColor = "rgb(236 253 245 / 0.7)";
      }, 2000);
      t(() => {
        recovered.style.backgroundColor = "";
      }, 3000);
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
      <PayrollPreviewShell variant={variant} />
    </div>
  );
}
