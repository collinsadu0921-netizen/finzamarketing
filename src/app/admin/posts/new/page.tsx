import { createServerClient } from "@/lib/supabase/server";
import { PostForm } from "@/components/admin/post-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New post" };

export default async function NewPostPage() {
  const supabase = await createServerClient();

  const [{ data: authors }, { data: categories }] = await Promise.all([
    supabase.from("authors").select("*").order("name"),
    supabase.from("categories").select("*").order("name"),
  ]);

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/posts"
          className="text-sm text-zinc-400 hover:text-zinc-700"
        >
          ← Posts
        </Link>
        <span className="text-zinc-300">/</span>
        <h1 className="text-xl font-bold text-zinc-900">New post</h1>
      </div>

      <PostForm
        authors={authors ?? []}
        categories={categories ?? []}
      />
    </div>
  );
}
