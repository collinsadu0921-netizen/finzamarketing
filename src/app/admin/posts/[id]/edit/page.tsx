import { createServerClient } from "@/lib/supabase/server";
import { PostForm } from "@/components/admin/post-form";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createServerClient();
  const { data } = await supabase
    .from("posts")
    .select("title")
    .eq("id", id)
    .single();
  return { title: data ? `Edit: ${data.title}` : "Edit post" };
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createServerClient();

  const [{ data: post }, { data: authors }, { data: categories }, { data: postCats }] =
    await Promise.all([
      supabase.from("posts").select("*").eq("id", id).single(),
      supabase.from("authors").select("*").order("name"),
      supabase.from("categories").select("*").order("name"),
      supabase.from("post_categories").select("category_id").eq("post_id", id),
    ]);

  if (!post) notFound();

  const selectedCategoryIds = (postCats ?? []).map((r) => r.category_id);

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
        <h1 className="text-xl font-bold text-zinc-900">{post.title}</h1>
      </div>

      <PostForm
        post={post}
        authors={authors ?? []}
        categories={categories ?? []}
        selectedCategoryIds={selectedCategoryIds}
      />
    </div>
  );
}
