import { cn } from "@/lib/utils";
import { ghanaChipGold, ghanaChipGreen, ghanaChipNavy } from "@/components/home/home-ui";

export type GhanaChipTone = "gold" | "green" | "navy";

const toneClass: Record<GhanaChipTone, string> = {
  gold: ghanaChipGold,
  green: ghanaChipGreen,
  navy: ghanaChipNavy,
};

export type GhanaProofChip = { label: string; tone?: GhanaChipTone };

export function GhanaProofChips({
  chips,
  className,
  size = "sm",
}: {
  chips: GhanaProofChip[];
  className?: string;
  size?: "xs" | "sm";
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Product highlights">
      {chips.map(({ label, tone = "navy" }) => (
        <li key={label}>
          <span
            className={cn(
              "inline-flex items-center rounded-full border font-semibold leading-none",
              size === "xs" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
              toneClass[tone]
            )}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export const PRICING_PROOF_CHIPS: GhanaProofChip[] = [
  { label: "GHS pricing", tone: "gold" },
  { label: "Built-in payroll", tone: "navy" },
  { label: "Ghana tax-ready records", tone: "gold" },
  { label: "Setup walkthrough", tone: "navy" },
];

export const CONTACT_PROOF_CHIPS: GhanaProofChip[] = [
  { label: "Ghana service businesses", tone: "navy" },
  { label: "WhatsApp follow-up", tone: "green" },
  { label: "Setup guidance", tone: "navy" },
];

export const HERO_MOBILE_PROOF_CHIPS: GhanaProofChip[] = [
  { label: "GHS invoices", tone: "gold" },
  { label: "Mobile Money details", tone: "green" },
  { label: "VAT · NHIL · GETFund", tone: "gold" },
  { label: "Customer statements", tone: "navy" },
];
