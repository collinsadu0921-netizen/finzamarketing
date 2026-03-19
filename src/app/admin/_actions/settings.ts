"use server";

import { createServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/types/cms";

export async function upsertSettings(
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createServerClient();

  const keys = [
    "seo_title_template",
    "default_meta_description",
    "default_og_image",
    "contact_email",
    "footer_text",
    "social_twitter",
    "social_linkedin",
  ];

  const upserts = keys.map((key) => ({
    key,
    value_json: JSON.stringify(formData.get(key) as string),
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase
    .from("site_settings")
    .upsert(upserts, { onConflict: "key" });

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/settings");
  return { data: null, error: null };
}

export async function upsertSetting(
  key: string,
  value: unknown
): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase.from("site_settings").upsert(
    { key, value_json: value, updated_at: new Date().toISOString() },
    { onConflict: "key" }
  );

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/settings");
  return { data: null, error: null };
}
