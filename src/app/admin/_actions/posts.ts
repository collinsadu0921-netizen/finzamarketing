"use server";

import { createServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { PostInsert, PostUpdate, ActionResult } from "@/types/cms";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function createPost(
  formData: FormData
): Promise<ActionResult<{ id: string }>> {
  const supabase = await createServerClient();

  const title = (formData.get("title") as string)?.trim();
  const rawSlug = (formData.get("slug") as string)?.trim();

  if (!title) return { data: null, error: "Title is required." };

  const slug = rawSlug ? slugify(rawSlug) : slugify(title);

  const insert: PostInsert = {
    title,
    slug,
    excerpt: (formData.get("excerpt") as string) || null,
    content: (formData.get("content") as string) || null,
    cover_image: (formData.get("cover_image") as string) || null,
    author_id: (formData.get("author_id") as string) || null,
    status: "draft",
    seo_title: (formData.get("seo_title") as string) || null,
    meta_description: (formData.get("meta_description") as string) || null,
    og_title: (formData.get("og_title") as string) || null,
    og_description: (formData.get("og_description") as string) || null,
    og_image: (formData.get("og_image") as string) || null,
    canonical_url: (formData.get("canonical_url") as string) || null,
    noindex: formData.get("noindex") === "true",
    published_at: null,
  };

  const { data, error } = await supabase
    .from("posts")
    .insert(insert)
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return { data: null, error: "A post with this slug already exists." };
    }
    return { data: null, error: error.message };
  }

  // Handle categories
  const categoryIds = formData.getAll("category_ids") as string[];
  if (categoryIds.length > 0) {
    await supabase.from("post_categories").insert(
      categoryIds.map((category_id) => ({ post_id: data.id, category_id }))
    );
  }

  revalidatePath("/admin/posts");
  redirect(`/admin/posts/${data.id}/edit`);
}

export async function updatePost(
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createServerClient();

  const title = (formData.get("title") as string)?.trim();
  const rawSlug = (formData.get("slug") as string)?.trim();

  if (!title) return { data: null, error: "Title is required." };

  const update: PostUpdate = {
    title,
    slug: rawSlug ? slugify(rawSlug) : undefined,
    excerpt: (formData.get("excerpt") as string) || null,
    content: (formData.get("content") as string) || null,
    cover_image: (formData.get("cover_image") as string) || null,
    author_id: (formData.get("author_id") as string) || null,
    seo_title: (formData.get("seo_title") as string) || null,
    meta_description: (formData.get("meta_description") as string) || null,
    og_title: (formData.get("og_title") as string) || null,
    og_description: (formData.get("og_description") as string) || null,
    og_image: (formData.get("og_image") as string) || null,
    canonical_url: (formData.get("canonical_url") as string) || null,
    noindex: formData.get("noindex") === "true",
  };

  const { error } = await supabase.from("posts").update(update).eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { data: null, error: "A post with this slug already exists." };
    }
    return { data: null, error: error.message };
  }

  // Replace categories
  const categoryIds = formData.getAll("category_ids") as string[];
  await supabase.from("post_categories").delete().eq("post_id", id);
  if (categoryIds.length > 0) {
    await supabase.from("post_categories").insert(
      categoryIds.map((category_id) => ({ post_id: id, category_id }))
    );
  }

  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}/edit`);
  return { data: null, error: null };
}

export async function publishPost(id: string): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase
    .from("posts")
    .update({ status: "published", published_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}/edit`);
  return { data: null, error: null };
}

export async function unpublishPost(id: string): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase
    .from("posts")
    .update({ status: "draft", published_at: null })
    .eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}/edit`);
  return { data: null, error: null };
}

export async function deletePost(id: string): Promise<ActionResult> {
  const supabase = await createServerClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) return { data: null, error: error.message };

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}
