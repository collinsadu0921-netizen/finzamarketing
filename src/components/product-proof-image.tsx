import Image from "next/image";
import { homeCard } from "@/components/home/home-ui";
import { cn } from "@/lib/utils";
import {
  getFinzaProductAsset,
  isFinzaProductAssetOnDisk,
  type FinzaProductAssetId,
} from "@/lib/finza-product-assets";

type ProductProofImageProps = {
  assetId: FinzaProductAssetId;
  eyebrow?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Single sanitized product screenshot with caption. Renders nothing if the file
 * is not yet present under `public/images/finza/` (build-safe).
 */
export async function ProductProofImage({
  assetId,
  eyebrow,
  caption,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw",
}: ProductProofImageProps) {
  const asset = getFinzaProductAsset(assetId);

  if (!isFinzaProductAssetOnDisk(asset)) {
    return null;
  }

  const ratio = asset.width / asset.height;
  const figcaptionText = caption ?? asset.caption ?? asset.description;

  return (
    <figure className={cn(homeCard, "overflow-hidden p-0", className)}>
      <div className="border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{eyebrow}</p>
        )}
        <p className={cn("text-sm font-semibold text-zinc-900", eyebrow && "mt-1")}>{asset.title}</p>
      </div>
      <div className="relative w-full bg-zinc-50" style={{ aspectRatio: String(ratio) }}>
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          sizes={sizes}
          className={cn("block h-auto w-full", imageClassName)}
        />
      </div>
      {figcaptionText && (
        <figcaption className="border-t border-zinc-100 px-4 py-3 text-sm leading-relaxed text-zinc-600">
          {figcaptionText}
        </figcaption>
      )}
    </figure>
  );
}
