import { Container } from "@/components/container";
import { sectionLead, sectionTitle } from "@/components/home/home-ui";
import { ProductProofImage } from "@/components/product-proof-image";
import { ProductProofStrip } from "@/components/product-proof-strip";
import {
  getFinzaProductAsset,
  isFinzaProductAssetOnDisk,
  type FinzaProductAssetId,
} from "@/lib/finza-product-assets";
import { cn } from "@/lib/utils";

type ProductProofSectionProps = {
  assetIds: FinzaProductAssetId[];
  heading?: string;
  lead?: string;
  eyebrow?: string;
  columns?: 1 | 2;
  variant?: "default" | "muted";
  className?: string;
};

/** Lightweight section wrapper; renders nothing if no assets exist on disk. */
export async function ProductProofSection({
  assetIds,
  heading,
  lead,
  eyebrow = "In Finza",
  columns = 2,
  variant = "muted",
  className,
}: ProductProofSectionProps) {
  const available = assetIds.filter((id) =>
    isFinzaProductAssetOnDisk(getFinzaProductAsset(id))
  );

  if (available.length === 0) {
    return null;
  }

  const bg =
    variant === "muted"
      ? "border-b border-zinc-100 bg-zinc-50/80 py-12 md:py-14"
      : "border-b border-zinc-100 bg-white py-12 md:py-14";

  const showIntro = Boolean(heading || lead);

  return (
    <section className={cn(bg, className)} aria-label="Finza product screens">
      <Container>
        <div className="mx-auto max-w-5xl space-y-6 md:space-y-8">
          {showIntro && (
            <div className="mx-auto max-w-2xl space-y-2 text-center">
              {eyebrow && (
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{eyebrow}</p>
              )}
              {heading && <h2 className={sectionTitle}>{heading}</h2>}
              {lead && <p className={sectionLead}>{lead}</p>}
            </div>
          )}
          {available.length === 1 ? (
            <div className="mx-auto max-w-3xl">
              <ProductProofImage assetId={available[0]} />
            </div>
          ) : (
            <ProductProofStrip assetIds={available} columns={columns} />
          )}
        </div>
      </Container>
    </section>
  );
}
