"use client";

import { useActionState } from "react";
import { createCategory, updateCategory } from "@/app/admin/_actions/categories";
import type { Category } from "@/types/cms";

interface CategoryFormProps {
  category?: Category;
}

type FormState = { error: string | null };

export function CategoryForm({ category }: CategoryFormProps) {
  const isEditing = !!category;

  async function boundAction(
    _prev: FormState,
    formData: FormData
  ): Promise<FormState> {
    const res = isEditing
      ? await updateCategory(category!.id, formData)
      : await createCategory(formData);
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

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-zinc-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          defaultValue={category?.name}
          className={inputClass}
          placeholder="Accounting Tips"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-zinc-700">Slug</label>
        <input
          name="slug"
          type="text"
          defaultValue={category?.slug}
          className={inputClass}
          placeholder="accounting-tips"
        />
        <p className="text-xs text-zinc-400">
          Auto-generated from name if left blank.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-zinc-700">Description</label>
        <textarea
          name="description"
          rows={3}
          defaultValue={category?.description ?? ""}
          className={inputClass}
          placeholder="Brief description of this category…"
        />
      </div>

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
            : "Create category"}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";
