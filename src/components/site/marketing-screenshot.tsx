import Image from "next/image";
import { cn } from "@/lib/utils";

type MarketingScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Gentle float — desktop only; disabled under reduced motion via CSS */
  float?: boolean;
};

/**
 * Straight-on product screenshot frame for marketing pages.
 * No fake browser chrome. Lazy-loads unless priority is set.
 */
export function MarketingScreenshot({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 960px",
  className,
  float = false,
}: MarketingScreenshotProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]",
        float && "marketing-shot-float",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}
