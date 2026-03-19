"use client";

import { useActionState } from "react";
import { upsertSettings } from "@/app/admin/_actions/settings";
import type { SiteSettingsMap } from "@/types/cms";

interface SettingsFormProps {
  settings: Partial<SiteSettingsMap>;
}

type FormState = { error: string | null; success: boolean };

export function SettingsForm({ settings }: SettingsFormProps) {
  const [state, action, pending] = useActionState(
    async (_prev: FormState, formData: FormData) => {
      const res = await upsertSettings(formData);
      if (res.error) return { error: res.error, success: false };
      return { error: null, success: true };
    },
    { error: null, success: false }
  );

  return (
    <form action={action} className="flex flex-col gap-6 max-w-2xl">
      {state.error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Settings saved.
        </div>
      )}

      <Section title="SEO defaults">
        <Field label="Title template" hint='Use %s as a placeholder, e.g. "Finza — %s"'>
          <input
            name="seo_title_template"
            type="text"
            defaultValue={String(settings.seo_title_template ?? "")}
            className={inputClass}
            placeholder="Finza — %s"
          />
        </Field>
        <Field
          label="Default meta description"
          hint="Fallback for pages/posts without their own description."
        >
          <textarea
            name="default_meta_description"
            rows={2}
            defaultValue={String(settings.default_meta_description ?? "")}
            className={inputClass}
          />
        </Field>
        <Field label="Default OG image URL">
          <input
            name="default_og_image"
            type="text"
            defaultValue={String(settings.default_og_image ?? "")}
            className={inputClass}
            placeholder="https://www.finza.africa/og-default.png"
          />
        </Field>
      </Section>

      <Section title="Contact & identity">
        <Field label="Contact email">
          <input
            name="contact_email"
            type="email"
            defaultValue={String(settings.contact_email ?? "")}
            className={inputClass}
            placeholder="hello@finza.africa"
          />
        </Field>
        <Field label="Footer text">
          <input
            name="footer_text"
            type="text"
            defaultValue={String(settings.footer_text ?? "")}
            className={inputClass}
            placeholder="© 2026 Finza Africa Ltd. All rights reserved."
          />
        </Field>
      </Section>

      <Section title="Social links">
        <Field label="Twitter / X URL">
          <input
            name="social_twitter"
            type="url"
            defaultValue={String(settings.social_twitter ?? "")}
            className={inputClass}
            placeholder="https://twitter.com/finzaafrica"
          />
        </Field>
        <Field label="LinkedIn URL">
          <input
            name="social_linkedin"
            type="url"
            defaultValue={String(settings.social_linkedin ?? "")}
            className={inputClass}
            placeholder="https://linkedin.com/company/finzaafrica"
          />
        </Field>
      </Section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-60"
        >
          {pending ? "Saving…" : "Save settings"}
        </button>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <h3 className="mb-4 text-sm font-semibold text-zinc-700">{title}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      {children}
      {hint && <p className="text-xs text-zinc-400">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";
