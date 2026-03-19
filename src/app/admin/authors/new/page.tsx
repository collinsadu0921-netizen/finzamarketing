import { AuthorForm } from "@/components/admin/author-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New author" };

export default function NewAuthorPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/authors"
          className="text-sm text-zinc-400 hover:text-zinc-700"
        >
          ← Authors
        </Link>
        <span className="text-zinc-300">/</span>
        <h1 className="text-xl font-bold text-zinc-900">New author</h1>
      </div>
      <AuthorForm />
    </div>
  );
}
