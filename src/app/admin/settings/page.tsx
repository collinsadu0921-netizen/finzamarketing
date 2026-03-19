import { createServerClient } from "@/lib/supabase/server";
import { SettingsForm } from "@/components/admin/settings-form";
import type { Metadata } from "next";
import type { SiteSettingsMap } from "@/types/cms";

export const metadata: Metadata = { title: "Settings" };

export default async function SettingsPage() {
  const supabase = await createServerClient();
  const { data: rows } = await supabase
    .from("site_settings")
    .select("key, value_json");

  const settings: Partial<SiteSettingsMap> = {};
  for (const row of rows ?? []) {
    // value_json is stored as a JSON string for primitives
    settings[row.key as keyof SiteSettingsMap] =
      typeof row.value_json === "string"
        ? row.value_json
        : (row.value_json as string);
  }

  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Site settings</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Global defaults for SEO, contact info, and social links.
        </p>
      </div>
      <SettingsForm settings={settings} />
    </div>
  );
}
