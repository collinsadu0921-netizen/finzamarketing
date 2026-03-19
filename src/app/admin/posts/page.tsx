import { createServerClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Posts" };

export default async function PostsPage() {
  const supabase = await createServerClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, status, published_at, updated_at, author_id")
    .order("updated_at", { ascending: false });

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Posts</h1>
          <p className="mt-1 text-sm text-zinc-500">
            {posts?.length ?? 0} total posts
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
        >
          + New post
        </Link>
      </div>

      {!posts?.length ? (
        <div className="rounded-lg border border-dashed border-zinc-200 py-16 text-center">
          <p className="text-sm text-zinc-400">No posts yet.</p>
          <Link
            href="/admin/posts/new"
            className="mt-3 inline-block text-sm font-medium text-zinc-600 underline-offset-2 hover:underline"
          >
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="px-4 py-3 text-left font-medium text-zinc-500">
                  Title
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-zinc-500 md:table-cell">
                  Slug
                </th>
                <th className="px-4 py-3 text-left font-medium text-zinc-500">
                  Status
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-zinc-500 lg:table-cell">
                  Updated
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-3 font-medium text-zinc-900">
                    {post.title}
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-zinc-400 md:table-cell">
                    /blog/{post.slug}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={
                        post.status === "published" ? "default" : "secondary"
                      }
                      className={
                        post.status === "published"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                          : ""
                      }
                    >
                      {post.status}
                    </Badge>
                  </td>
                  <td className="hidden px-4 py-3 text-xs text-zinc-400 lg:table-cell">
                    {new Date(post.updated_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
