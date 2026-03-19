"use server";

import { createServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { AuthorInsert, AuthorUpdate, ActionResult } from "@/types/cms";

export async function createAuthor(
  formData: FormData
): Promise<ActionResult<{ id: string }>> {
  const supabase = await createServerClient();

  const name = (formData.get("name") as string)?.trim();
  if (!name) return { data: null, error: "Name is required." };

  const insert: AuthorInsert = {
    name,
    role: (formData.get("role") as string) || null,
    bio: (formData.get("bio") as string) || null,
    image_url: (formData.get("image_url") as string) || null,
  };

  const { error } = await supabase.from("authors").insert(insert);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/authors");
  redirect("/admin/authors");
}

export async function updateAuthor(
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createServerClient();

  const name = (formData.get("name") as string)?.trim();
  if (!name) return { data: null, error: "Name is required." };

  const update: AuthorUpdate = {
    name,
    role: (formData.get("role") as string) || null,
    bio: (formData.get("bio") as string) || null,
    image_url: (formData.get("image_url") as string) || null,
  };

  const { error } = await supabase.from("authors").update(update).eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/authors");
  redirect("/admin/authors");
}

export async function deleteAuthor(id: string): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase.from("authors").delete().eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/authors");
  redirect("/admin/authors");
}
