import { createServerClient } from "@/lib/supabase/server";
import { deleteAuthor } from "@/app/admin/_actions/authors";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Authors" };

export default async function AuthorsPage() {
  const supabase = await createServerClient();
  const { data: authors } = await supabase
    .from("authors")
    .select("*")
    .order("name");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Authors</h1>
          <p className="mt-1 text-sm text-zinc-500">
            {authors?.length ?? 0} author{authors?.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/authors/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
        >
          + New author
        </Link>
      </div>

      {!authors?.length ? (
        <div className="rounded-lg border border-dashed border-zinc-200 py-16 text-center">
          <p className="text-sm text-zinc-400">No authors yet.</p>
          <Link
            href="/admin/authors/new"
            className="mt-3 inline-block text-sm font-medium text-zinc-600 underline-offset-2 hover:underline"
          >
            Add the first author →
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
                  Role
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {authors.map((author) => (
                <tr key={author.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {author.image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={author.image_url}
                          alt={author.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-600">
                          {author.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="font-medium text-zinc-900">
                        {author.name}
                      </span>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 text-zinc-500 md:table-cell">
                    {author.role ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/authors/${author.id}/edit`}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                      >
                        Edit
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await deleteAuthor(author.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="text-xs font-medium text-red-400 hover:text-red-600"
                          onClick={() => {}}
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
