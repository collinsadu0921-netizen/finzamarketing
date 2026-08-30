"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DemoCursor } from "@/components/product-demo/demo-cursor";
import {
  JOBS_MATERIALS_DEMO,
  sceneReached,
  type JobsMaterialsDemoScene,
} from "@/components/product-demo/demo-fixtures";
import { JobsMaterialsTable } from "@/components/product-demo/jobs-materials-table";
import { cn } from "@/lib/utils";

type JobsMaterialsShellProps = {
  scene: JobsMaterialsDemoScene;
  showCursor: boolean;
  compact?: boolean;
};

export function JobsMaterialsShell({ scene, showCursor, compact = false }: JobsMaterialsShellProps) {
  const invoicePulse = scene === "invoice-pulse";
  const invoiceFocused = sceneReached(scene, "cursor-invoice");
  const showInvoiceCursor = showCursor && scene === "cursor-invoice";

  return (
    <div className="relative flex h-full min-h-0 w-full min-w-0 flex-col bg-white text-zinc-900">
      {/* Browser chrome */}
      <div className="flex shrink-0 items-center gap-1.5 border-b border-zinc-200/80 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-2.5 sm:gap-2.5 sm:p-3">
        {/* Job header */}
        <div className="flex shrink-0 flex-wrap items-start justify-between gap-2 border-b border-zinc-200/80 pb-2">
          <div className="min-w-0 flex-1 space-y-1">
            <h3 className="text-[11px] font-bold leading-snug text-zinc-900 sm:text-xs md:text-sm">
              {JOBS_MATERIALS_DEMO.jobName}
            </h3>
            <div className="flex items-center gap-1.5 text-[9px] text-zinc-600 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden />
              <span>{JOBS_MATERIALS_DEMO.jobStatus}</span>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
            <span className="rounded-md border border-zinc-200 bg-white px-2 py-1 text-[9px] font-medium text-zinc-700 sm:text-[10px]">
              Edit
            </span>
            <span className="relative inline-flex">
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className={cn(
                  "inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-[9px] font-semibold text-white transition-transform duration-300 sm:text-[10px]",
                  invoicePulse && "scale-[1.03] ring-2 ring-emerald-300/80",
                  invoiceFocused && !invoicePulse && "ring-1 ring-emerald-300/60",
                )}
              >
                <ArrowRight className="h-3 w-3" aria-hidden />
                Invoice
              </button>
              {showInvoiceCursor ? (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute left-[70%] top-[85%] z-20"
                  initial={{ opacity: 0, x: -10, y: -6 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DemoCursor />
                </motion.span>
              ) : null}
            </span>
            <span className="rounded-md border border-red-200/80 bg-red-50 px-2 py-1 text-[9px] font-medium text-red-700 sm:text-[10px]">
              Cancel job
            </span>
          </div>
        </div>

        {/* Details panel */}
        <div className="grid shrink-0 gap-2 rounded-md border border-zinc-200/80 bg-zinc-50/50 p-2 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="grid grid-cols-3 gap-2 text-[9px] sm:text-[10px]">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
                Status
              </p>
              <p className="mt-0.5 font-medium text-zinc-800">{JOBS_MATERIALS_DEMO.jobStatus}</p>
            </div>
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
                Start Date
              </p>
              <p className="mt-0.5 font-medium text-zinc-800">{JOBS_MATERIALS_DEMO.startDate}</p>
            </div>
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
                End Date
              </p>
              <p className="mt-0.5 font-medium text-zinc-800">{JOBS_MATERIALS_DEMO.endDate}</p>
            </div>
          </div>
          {!compact ? (
            <div className="min-w-0 sm:max-w-[11rem]">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
                Linked Proforma
              </p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="min-w-0 flex-1 truncate rounded-md border border-zinc-200 bg-white px-2 py-1 text-[9px] text-zinc-600 sm:text-[10px]">
                  {JOBS_MATERIALS_DEMO.proformaLabel}
                </span>
                <span className="shrink-0 rounded-md bg-violet-100 px-2 py-1 text-[9px] font-semibold text-violet-800 sm:text-[10px]">
                  Link
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Materials section */}
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
          <div className="flex shrink-0 items-center justify-between gap-2">
            <p className="text-[9px] font-bold uppercase tracking-wide text-zinc-800 sm:text-[10px]">
              Materials Used
            </p>
            <p className="text-[9px] font-bold tabular-nums text-zinc-900 sm:text-[10px]">
              Total: {JOBS_MATERIALS_DEMO.materialsSectionTotal}
            </p>
          </div>

          <div className="shrink-0 rounded-md border border-zinc-200/80 bg-zinc-50/40 p-2">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-[9px]">
              Allocate Material
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
              <span className="min-w-[5rem] flex-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[9px] text-zinc-500 sm:text-[10px]">
                Select material...
              </span>
              <span className="w-10 rounded-md border border-zinc-200 bg-white px-2 py-1 text-center text-[9px] text-zinc-500 sm:text-[10px]">
                Qty
              </span>
              <span className="rounded-md bg-zinc-500 px-2 py-1 text-[9px] font-semibold text-white sm:text-[10px]">
                Allocate
              </span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            <JobsMaterialsTable
              scene={scene}
              compact={compact}
              showConfirmCursor={
                showCursor && (scene === "cursor-confirm" || scene === "confirm-press")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
