import { createServerClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText, Users, Tag, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

async function getStats() {
  const supabase = await createServerClient();

  const [postsTotal, postsPublished, authors, categories] = await Promise.all([
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase
      .from("posts")
      .select("id", { count: "exact", head: true })
      .eq("status", "published"),
    supabase.from("authors").select("id", { count: "exact", head: true }),
    supabase.from("categories").select("id", { count: "exact", head: true }),
  ]);

  return {
    totalPosts: postsTotal.count ?? 0,
    publishedPosts: postsPublished.count ?? 0,
    totalAuthors: authors.count ?? 0,
    totalCategories: categories.count ?? 0,
  };
}

async function getRecentPosts() {
  const supabase = await createServerClient();
  const { data } = await supabase
    .from("posts")
    .select("id, title, status, updated_at, slug")
    .order("updated_at", { ascending: false })
    .limit(8);
  return data ?? [];
}

export default async function DashboardPage() {
  const [stats, recentPosts] = await Promise.all([
    getStats(),
    getRecentPosts(),
  ]);

  const draftCount = stats.totalPosts - stats.publishedPosts;

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Overview of your Finza content.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">
              Total posts
            </CardTitle>
            <FileText className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              {stats.totalPosts}
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {stats.publishedPosts} published · {draftCount} draft
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">
              Published
            </CardTitle>
            <ExternalLink className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-600">
              {stats.publishedPosts}
            </div>
            <p className="mt-1 text-xs text-zinc-400">Live on finza.africa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">
              Authors
            </CardTitle>
            <Users className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              {stats.totalAuthors}
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              <Link
                href="/admin/authors"
                className="text-zinc-500 underline-offset-2 hover:underline"
              >
                Manage authors
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">
              Categories
            </CardTitle>
            <Tag className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              {stats.totalCategories}
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              <Link
                href="/admin/categories"
                className="text-zinc-500 underline-offset-2 hover:underline"
              >
                Manage categories
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent posts */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-zinc-900">
            Recent posts
          </h2>
          <Link
            href="/admin/posts/new"
            className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700"
          >
            + New post
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-zinc-200 py-12 text-center">
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
                {recentPosts.map((post) => (
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
    </div>
  );
}
