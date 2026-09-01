"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const DESKTOP_QUERY = "(min-width: 1024px)";
const CHART_MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];

/**
 * Client island that enhances the SSR dashboard shell with
 * restrained internal animations. Never touches transforms —
 * only manipulates opacity, box-shadow, border-color,
 * background-color, and filter on child elements.
 *
 * Chart bars are fully visible from SSR at their final sizes.
 * Animation adds sequential emphasis — not reveal from empty.
 */
export function HeroDashboardAnimation({
  shellRef,
}: {
  shellRef: React.RefObject<HTMLDivElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const playedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion !== false) return;
    if (playedRef.current) return;
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;

    const shell = shellRef.current;
    if (!shell) return;

    playedRef.current = true;
    const timeouts: number[] = [];
    const t = (fn: () => void, ms: number) => {
      timeouts.push(window.setTimeout(fn, ms));
    };

    const metrics = shell.querySelectorAll<HTMLElement>(".dashboard-metric");
    const profitBox = shell.querySelector<HTMLElement>(".dashboard-profit-box");
    const breakdown = shell.querySelector<HTMLElement>(".dashboard-breakdown");

    /* Phase 1: Metric card emphasis stagger (start ~400ms) */
    metrics.forEach((el, i) => {
      t(() => {
        el.style.transition = "box-shadow 400ms ease, border-color 400ms ease";
        el.style.boxShadow =
          "0 0 0 1px rgb(14 165 233 / 0.18), 0 2px 8px rgb(14 165 233 / 0.10)";
        el.style.borderColor = "rgb(186 230 253)";
      }, 400 + i * 180);
      t(() => {
        el.style.boxShadow = "0 1px 2px rgb(0 0 0 / 0.04)";
        el.style.borderColor = "";
      }, 400 + i * 180 + 700);
    });

    /* Phase 2: Chart month emphasis sweep (start ~1400ms) */
    CHART_MONTHS.forEach((month, idx) => {
      const groups = shell.querySelectorAll<SVGGElement>(
        `[data-chart-month="${month}"]`
      );
      const isAug = month === "Aug";

      groups.forEach((g) => {
        t(() => {
          g.style.transition = "opacity 250ms ease-out";
          g.style.opacity = isAug ? "1" : "0.8";
        }, 1400 + idx * 130);

        if (isAug) {
          const rects = g.querySelectorAll("rect");
          t(() => {
            rects.forEach((r) => {
              r.style.transition = "filter 300ms ease";
              r.style.filter = "brightness(1.2)";
            });
          }, 1400 + idx * 130);
          t(() => {
            rects.forEach((r) => {
              r.style.filter = "";
              r.style.transition = "";
            });
          }, 1400 + idx * 130 + 700);
        }

        t(() => {
          g.style.opacity = "";
          g.style.transition = "";
        }, 1400 + idx * 130 + (isAug ? 700 : 350));
      });
    });

    /* Phase 3: Profit highlight (start ~2400ms) */
    if (profitBox) {
      t(() => {
        profitBox.style.transition =
          "background-color 400ms ease, border-color 400ms ease";
        profitBox.style.backgroundColor = "rgb(236 253 245 / 0.5)";
        profitBox.style.borderColor = "rgb(167 243 208 / 0.8)";
      }, 2400);
      t(() => {
        profitBox.style.backgroundColor = "";
        profitBox.style.borderColor = "transparent";
      }, 3400);
    }

    /* Phase 4: Breakdown emphasis (start ~3000ms) */
    if (breakdown) {
      t(() => {
        breakdown.style.transition =
          "border-color 400ms ease, box-shadow 400ms ease";
        breakdown.style.borderColor = "rgb(196 181 253 / 0.6)";
        breakdown.style.boxShadow =
          "0 0 0 1px rgb(139 92 246 / 0.12), 0 2px 6px rgb(139 92 246 / 0.08)";
      }, 3000);
      t(() => {
        breakdown.style.borderColor = "";
        breakdown.style.boxShadow = "";
      }, 4000);
    }

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [reduceMotion, shellRef]);

  return null;
}
