"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { CustomerStatementShell } from "./customer-statement-shell";

const DESKTOP_QUERY = "(min-width: 1024px)";

type Props = {
  variant?: "default" | "compact";
};

export function CustomerStatementPreview({ variant = "default" }: Props) {
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

    const summaryCards =
      shell.querySelectorAll<HTMLElement>(".stmt-summary-card");
    const rows = shell.querySelectorAll<HTMLElement>(".stmt-row");

    /* Phase 1: Summary card stagger (400ms) */
    summaryCards.forEach((el, i) => {
      t(() => {
        el.style.transition = "background-color 350ms ease";
        el.style.backgroundColor =
          i === 4
            ? "rgb(255 251 235)"
            : i === 5
              ? "rgb(254 242 242)"
              : "rgb(249 250 251)";
      }, 400 + i * 100);
      t(() => {
        el.style.backgroundColor = "";
      }, 400 + i * 100 + 700);
    });

    /* Phase 2: Payment row highlight (1800ms) */
    rows.forEach((row) => {
      if (row.dataset.txType === "payment") {
        t(() => {
          row.style.transition = "background-color 400ms ease";
          row.style.backgroundColor = "rgb(236 253 245 / 0.6)";
        }, 1800);
        t(() => {
          row.style.backgroundColor = "";
        }, 2800);
      }
    });

    /* Phase 3: Outstanding+Overdue emphasis (2600ms) */
    if (summaryCards[4]) {
      t(() => {
        summaryCards[4].style.transition =
          "background-color 400ms ease, box-shadow 400ms ease";
        summaryCards[4].style.backgroundColor = "rgb(254 252 232)";
        summaryCards[4].style.boxShadow =
          "inset 0 -2px 0 rgb(245 158 11 / 0.4)";
      }, 2600);
      t(() => {
        summaryCards[4].style.backgroundColor = "";
        summaryCards[4].style.boxShadow = "";
      }, 3600);
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
      <CustomerStatementShell variant={variant} />
    </div>
  );
}
