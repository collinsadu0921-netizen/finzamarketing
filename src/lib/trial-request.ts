/** Guided trial request — canonical route and safe CTA placement attribution. */

export const GUIDED_TRIAL_PATH = "/request-trial";

export const TRIAL_PLACEMENTS = [
  "navbar",
  "homepage",
  "features",
  "blog",
  "sticky_mobile",
  "contact",
  "demo",
  "product_tour",
  "footer",
  "legacy_pricing",
  "landing_page",
] as const;

export type TrialPlacement = (typeof TRIAL_PLACEMENTS)[number];

export function isTrialPlacement(value: unknown): value is TrialPlacement {
  return typeof value === "string" && (TRIAL_PLACEMENTS as readonly string[]).includes(value);
}

export function normalizeTrialPlacement(value: unknown): TrialPlacement {
  return isTrialPlacement(value) ? value : "landing_page";
}

/** Adds non-sensitive placement metadata; never include form or personal data. */
export function getGuidedTrialHref(placement: TrialPlacement = "landing_page"): string {
  return `${GUIDED_TRIAL_PATH}?from=${placement}`;
}
