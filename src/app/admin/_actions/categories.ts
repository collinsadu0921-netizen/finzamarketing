"use server";

import { createServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { CategoryInsert, CategoryUpdate, ActionResult } from "@/types/cms";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function createCategory(
  formData: FormData
): Promise<ActionResult<{ id: string }>> {
  const supabase = await createServerClient();

  const name = (formData.get("name") as string)?.trim();
  if (!name) return { data: null, error: "Name is required." };

  const rawSlug = (formData.get("slug") as string)?.trim();
  const insert: CategoryInsert = {
    name,
    slug: rawSlug ? slugify(rawSlug) : slugify(name),
    description: (formData.get("description") as string) || null,
  };

  const { error } = await supabase.from("categories").insert(insert);

  if (error) {
    if (error.code === "23505") {
      return { data: null, error: "A category with this slug already exists." };
    }
    return { data: null, error: error.message };
  }

  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function updateCategory(
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createServerClient();

  const name = (formData.get("name") as string)?.trim();
  if (!name) return { data: null, error: "Name is required." };

  const rawSlug = (formData.get("slug") as string)?.trim();
  const update: CategoryUpdate = {
    name,
    slug: rawSlug ? slugify(rawSlug) : slugify(name),
    description: (formData.get("description") as string) || null,
  };

  const { error } = await supabase
    .from("categories")
    .update(update)
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { data: null, error: "A category with this slug already exists." };
    }
    return { data: null, error: error.message };
  }

  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function deleteCategory(id: string): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}
