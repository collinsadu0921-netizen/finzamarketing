"use client";

import { usePathname } from "next/navigation";
import { WhatsAppCta } from "@/components/whatsapp-cta";

/**
 * Public-page floating contact button. Hidden on form-heavy pages where it
 * could obscure controls, and inside the authenticated admin workspace.
 */
const HIDDEN_PREFIXES = ["/admin", "/request-trial", "/contact"] as const;

export function FloatingWhatsAppButton() {
  const pathname = usePathname();

  if (
    !pathname ||
    HIDDEN_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    )
  ) {
    return null;
  }

  return (
    <WhatsAppCta
      source="floating_button"
      iconOnly
      ariaLabel="Chat with Finza on WhatsApp"
      className="fixed right-[calc(env(safe-area-inset-right)+1rem)] bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] z-40 h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/25 ring-1 ring-black/5 transition-colors duration-200 hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 md:right-[calc(env(safe-area-inset-right)+1.5rem)] md:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]"
      iconClassName="h-6 w-6"
    />
  );
}
