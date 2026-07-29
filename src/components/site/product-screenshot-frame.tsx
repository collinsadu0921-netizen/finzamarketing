import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** light = marketing pages on white; dark = homepage hero */
  variant?: "light" | "dark";
  priority?: boolean;
};

export function ProductScreenshotFrame({
  className,
  variant = "light",
  priority = false,
}: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "hero-glow relative overflow-hidden rounded-2xl p-2 ring-1",
        isDark
          ? "border border-white/15 bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 shadow-2xl shadow-black/50 ring-white/10"
          : "border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.08] ring-zinc-900/[0.04]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3 py-2.5",
          isDark ? "border-white/10" : "border-zinc-100"
        )}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <span
          className={cn(
            "mx-auto truncate text-[11px] font-medium",
            isDark ? "text-zinc-500" : "text-zinc-400"
          )}
        >
          app.finza.africa — Business workspace
        </span>
      </div>
      <div className={cn("overflow-hidden rounded-b-xl", isDark ? "bg-slate-950/50" : "bg-zinc-50")}>
        <Image
          src="/images/finza/finza-dashboard-hero.webp"
          alt="Finza workspace showing invoices, payments, expenses, and reports"
          width={2400}
          height={1350}
          priority={priority}
          sizes="(max-width: 768px) 96vw, 520px"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
