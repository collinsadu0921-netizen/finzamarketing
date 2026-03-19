"use client";

import { useActionState, useState } from "react";
import { createAuthor, updateAuthor } from "@/app/admin/_actions/authors";
import type { Author } from "@/types/cms";
import { MediaUpload } from "@/components/admin/media-upload";

interface AuthorFormProps {
  author?: Author;
}

type FormState = { error: string | null };

export function AuthorForm({ author }: AuthorFormProps) {
  const isEditing = !!author;
  const [imageUrl, setImageUrl] = useState(author?.image_url ?? "");

  async function boundAction(
    _prev: FormState,
    formData: FormData
  ): Promise<FormState> {
    const res = isEditing
      ? await updateAuthor(author!.id, formData)
      : await createAuthor(formData);
    return { error: res?.error ?? null };
  }

  const [state, action, pending] = useActionState(boundAction, {
    error: null,
  });

  return (
    <form action={action} className="flex flex-col gap-5 max-w-lg">
      {state.error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <Field label="Name" required>
        <input
          name="name"
          type="text"
          required
          defaultValue={author?.name}
          className={inputClass}
          placeholder="Jane Mensah"
        />
      </Field>

      <Field label="Role / Title">
        <input
          name="role"
          type="text"
          defaultValue={author?.role ?? ""}
          className={inputClass}
          placeholder="Senior Accountant"
        />
      </Field>

      <Field label="Bio">
        <textarea
          name="bio"
          rows={4}
          defaultValue={author?.bio ?? ""}
          className={inputClass}
          placeholder="Short bio shown on blog posts…"
        />
      </Field>

      <Field label="Profile image">
        <input type="hidden" name="image_url" value={imageUrl} />
        <MediaUpload
          currentUrl={imageUrl}
          onUpload={(url) => setImageUrl(url)}
          label="Upload photo"
        />
        {imageUrl && (
          <div className="mt-2 flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="Author"
              className="h-12 w-12 rounded-full object-cover"
            />
            <button
              type="button"
              onClick={() => setImageUrl("")}
              className="text-xs text-zinc-400 hover:text-red-500"
            >
              Remove
            </button>
          </div>
        )}
      </Field>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-60"
        >
          {pending
            ? "Saving…"
            : isEditing
            ? "Save changes"
            : "Create author"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";
