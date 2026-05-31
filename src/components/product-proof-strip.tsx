import { cn } from "@/lib/utils";
import {
  getFinzaProductAsset,
  isFinzaProductAssetOnDisk,
  type FinzaProductAssetId,
} from "@/lib/finza-product-assets";
import { ProductProofImage } from "@/components/product-proof-image";

type ProductProofStripProps = {
  assetIds: FinzaProductAssetId[];
  className?: string;
  columns?: 1 | 2;
};

/**
 * Responsive row of product proof images. Skips assets that are not on disk yet.
 */
export async function ProductProofStrip({
  assetIds,
  className,
  columns = 2,
}: ProductProofStripProps) {
  const available = assetIds.filter((id) => isFinzaProductAssetOnDisk(getFinzaProductAsset(id)));

  if (available.length === 0) {
    return null;
  }

  const gridClass =
    columns === 1
      ? "grid max-w-3xl grid-cols-1 gap-6"
      : "grid gap-6 md:grid-cols-2";

  return (
    <div className={cn(gridClass, className)} aria-label="Finza product screenshots">
      {available.map((id) => (
        <ProductProofImage key={id} assetId={id} />
      ))}
    </div>
  );
}
