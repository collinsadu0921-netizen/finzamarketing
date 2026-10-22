"use client";

import { useEffect } from "react";
import { trackFinzaEvent } from "@/lib/analytics";
import { normalizeTrialPlacement, GUIDED_TRIAL_PATH } from "@/lib/trial-request";

/**
 * Delegated CTA tracking for every link to the guided trial page.
 * Only the placement value is sent; never form or personal data.
 */
export function TrialCtaAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin || url.pathname !== GUIDED_TRIAL_PATH) {
        return;
      }

      trackFinzaEvent("guided_trial_request_click", {
        cta_placement: normalizeTrialPlacement(url.searchParams.get("from")),
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
