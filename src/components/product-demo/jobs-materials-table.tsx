"use client";

import { AnimatePresence, motion } from "motion/react";
import { DemoCursor } from "@/components/product-demo/demo-cursor";
import {
  JOBS_MATERIAL_ROWS,
  JOBS_MATERIALS_DEMO,
  sceneReached,
  type JobsMaterialsDemoScene,
} from "@/components/product-demo/demo-fixtures";
import { cn } from "@/lib/utils";

type JobsMaterialsTableProps = {
  scene: JobsMaterialsDemoScene;
  compact?: boolean;
  showConfirmCursor?: boolean;
};

function StatusBadge({ label, tone }: { label: string; tone: "allocated" | "confirmed" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-1.5 py-px text-[9px] font-semibold leading-tight sm:px-2 sm:text-[10px]",
        tone === "allocated" && "bg-amber-100 text-amber-900 ring-1 ring-amber-200/80",
        tone === "confirmed" && "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/80",
      )}
    >
      {label}
    </span>
  );
}

export function JobsMaterialsTable({
  scene,
  compact = false,
  showConfirmCursor = false,
}: JobsMaterialsTableProps) {
  const cementFocused = sceneReached(scene, "cement-focus");
  const cementSuccess = sceneReached(scene, "success-highlight");
  const confirmPressed = scene === "confirm-press";
  const cementConfirmed = sceneReached(scene, "confirmed");
  const totalEmphasis = sceneReached(scene, "total-emphasis");

  return (
    <div className="min-w-0 overflow-hidden rounded-md border border-zinc-200/90 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-[9px] sm:text-[10px]">
          <thead>
            <tr className="border-b border-zinc-200/80 bg-zinc-50/80 text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
              <th className="px-2 py-1.5 text-left font-semibold">Material</th>
              <th className="px-1.5 py-1.5 text-right font-semibold">Qty</th>
              <th className="hidden px-1.5 py-1.5 text-right font-semibold sm:table-cell">Unit Cost</th>
              <th className="px-1.5 py-1.5 text-right font-semibold">Total</th>
              <th className="px-1.5 py-1.5 text-left font-semibold">Status</th>
              {!compact ? (
                <th className="hidden px-1.5 py-1.5 text-left font-semibold md:table-cell">Date</th>
              ) : null}
              <th className="px-2 py-1.5 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {JOBS_MATERIAL_ROWS.map((row) => {
              const isCement = row.animatable === true;
              const focused = isCement && cementFocused;
              const success = isCement && cementSuccess;
              const confirmed = isCement && cementConfirmed;

              return (
                <tr
                  key={row.material}
                  className={cn(
                    "border-b border-zinc-100/90 transition-colors duration-300",
                    focused && "bg-zinc-100/70",
                    success && "bg-emerald-50/80",
                  )}
                >
                  <td className="px-2 py-1.5 font-medium text-zinc-800">{row.material}</td>
                  <td className="px-1.5 py-1.5 text-right tabular-nums text-zinc-700">{row.qty}</td>
                  <td className="hidden px-1.5 py-1.5 text-right tabular-nums text-zinc-700 sm:table-cell">
                    {row.unitCost}
                  </td>
                  <td className="px-1.5 py-1.5 text-right font-medium tabular-nums text-zinc-900">
                    {row.total}
                  </td>
                  <td className="px-1.5 py-1.5">
                    {isCement ? (
                      <div className="relative h-[18px] min-w-[4.5rem]">
                        <AnimatePresence mode="wait" initial={false}>
                          {confirmed ? (
                            <motion.span
                              key="confirmed"
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.92 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute inset-0 flex items-center"
                            >
                              <StatusBadge
                                label={JOBS_MATERIALS_DEMO.statusConfirmed}
                                tone="confirmed"
                              />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="allocated"
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.92 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="absolute inset-0 flex items-center"
                            >
                              <StatusBadge
                                label={JOBS_MATERIALS_DEMO.statusAllocated}
                                tone="allocated"
                              />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <StatusBadge label={JOBS_MATERIALS_DEMO.statusAllocated} tone="allocated" />
                    )}
                  </td>
                  {!compact ? (
                    <td className="hidden px-1.5 py-1.5 text-zinc-500 md:table-cell">{row.date}</td>
                  ) : null}
                  <td className="px-2 py-1.5">
                    {isCement ? (
                      <div className="relative h-[18px] min-w-[5.5rem]">
                        <AnimatePresence mode="wait" initial={false}>
                          {!confirmed ? (
                            <motion.span
                              key="actions"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.16 }}
                              className="absolute inset-0 flex items-center gap-1.5"
                            >
                              <span
                                className={cn(
                                  "relative font-semibold text-emerald-700 transition-transform duration-150",
                                  confirmPressed && "scale-95 opacity-80",
                                )}
                              >
                                Confirm
                                {showConfirmCursor ? (
                                  <motion.span
                                    aria-hidden
                                    className="pointer-events-none absolute left-[85%] top-[90%] z-20"
                                    initial={{ opacity: 0, x: -8, y: -4 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                  >
                                    <DemoCursor />
                                  </motion.span>
                                ) : null}
                              </span>
                              {!compact ? (
                                <span className="font-medium text-sky-700">Return</span>
                              ) : null}
                            </motion.span>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <span className="font-semibold text-emerald-700">Confirm</span>
                        {!compact ? <span className="font-medium text-sky-700">Return</span> : null}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr
              className={cn(
                "border-t border-zinc-200/90 bg-zinc-50/50 transition-colors duration-300",
                totalEmphasis && "bg-emerald-50/60 ring-1 ring-inset ring-emerald-200/70",
              )}
            >
              <td colSpan={100} className="px-2 py-1.5">
                <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px]">
                  <span className="font-semibold text-zinc-700">Total Material Cost</span>
                  <span className="font-bold tabular-nums text-zinc-900">
                    {JOBS_MATERIALS_DEMO.totalMaterialCost}
                  </span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
