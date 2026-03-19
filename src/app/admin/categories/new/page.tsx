import { CategoryForm } from "@/components/admin/category-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New category" };

export default function NewCategoryPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/categories"
          className="text-sm text-zinc-400 hover:text-zinc-700"
        >
          ← Categories
        </Link>
        <span className="text-zinc-300">/</span>
        <h1 className="text-xl font-bold text-zinc-900">New category</h1>
      </div>
      <CategoryForm />
    </div>
  );
}
