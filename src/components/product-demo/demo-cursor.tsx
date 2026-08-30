"use client";

import { cn } from "@/lib/utils";

type DemoCursorProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function DemoCursor({ className, style }: DemoCursorProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 28"
      className={cn("pointer-events-none h-4 w-4 drop-shadow-sm", className)}
      style={style}
    >
      <path
        d="M4 2.5 4 22.5 9.5 17 14.5 26 17.5 24.5 12.5 15.5 19 15.5Z"
        fill="#0F172A"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
