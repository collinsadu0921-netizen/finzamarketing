import { createServerClient } from "@/lib/supabase/server";

const SOCIAL_KEYS = [
  "social_twitter",
  "social_linkedin",
  "social_instagram",
  "social_tiktok",
] as const;

export type SocialLinkKey = (typeof SOCIAL_KEYS)[number];

/** Normalize site_settings value_json (string or JSON string) to plain URL text. */
function settingToString(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") {
    const t = value.trim();
    if (t.startsWith('"') && t.endsWith('"')) {
      try {
        return JSON.parse(t) as string;
      } catch {
        return t.slice(1, -1);
      }
    }
    return t;
  }
  return String(value);
}

const FALLBACK_SOCIAL: Record<SocialLinkKey, string> = {
  social_twitter: "https://twitter.com/finzagh",
  social_linkedin: "https://www.linkedin.com/company/finzaafrica",
  social_instagram: "https://www.instagram.com/finzaafrica/",
  social_tiktok: "https://www.tiktok.com/@finzaafrica",
};

/** Public read (RLS) — safe for anonymous visitors. */
export async function getSocialLinks(): Promise<Record<SocialLinkKey, string>> {
  const out: Record<SocialLinkKey, string> = { ...FALLBACK_SOCIAL };

  try {
    const supabase = await createServerClient();
    const { data } = await supabase
      .from("site_settings")
      .select("key, value_json")
      .in("key", [...SOCIAL_KEYS]);

    for (const row of data ?? []) {
      const key = row.key as SocialLinkKey;
      if (!SOCIAL_KEYS.includes(key)) continue;
      const url = settingToString(row.value_json);
      if (url) out[key] = url;
    }
  } catch {
    /* keep fallbacks */
  }

  return out;
}
