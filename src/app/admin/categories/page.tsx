import { createServerClient } from "@/lib/supabase/server";
import { deleteCategory } from "@/app/admin/_actions/categories";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Categories" };

export default async function CategoriesPage() {
  const supabase = await createServerClient();
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Categories</h1>
          <p className="mt-1 text-sm text-zinc-500">
            {categories?.length ?? 0} categor
            {categories?.length !== 1 ? "ies" : "y"}
          </p>
        </div>
        <Link
          href="/admin/categories/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
        >
          + New category
        </Link>
      </div>

      {!categories?.length ? (
        <div className="rounded-lg border border-dashed border-zinc-200 py-16 text-center">
          <p className="text-sm text-zinc-400">No categories yet.</p>
          <Link
            href="/admin/categories/new"
            className="mt-3 inline-block text-sm font-medium text-zinc-600 underline-offset-2 hover:underline"
          >
            Create the first category →
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="px-4 py-3 text-left font-medium text-zinc-500">
                  Name
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-zinc-500 md:table-cell">
                  Slug
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-zinc-500 lg:table-cell">
                  Description
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-3 font-medium text-zinc-900">
                    {cat.name}
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-zinc-400 md:table-cell">
                    {cat.slug}
                  </td>
                  <td className="hidden max-w-xs truncate px-4 py-3 text-zinc-500 lg:table-cell">
                    {cat.description ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/categories/${cat.id}/edit`}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                      >
                        Edit
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await deleteCategory(cat.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="text-xs font-medium text-red-400 hover:text-red-600"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
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
