import { createServerClient } from "@/lib/supabase/server";
import { CategoryForm } from "@/components/admin/category-form";
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
    .from("categories")
    .select("name")
    .eq("id", id)
    .single();
  return { title: data ? `Edit: ${data.name}` : "Edit category" };
}

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createServerClient();
  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (!category) notFound();

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
        <h1 className="text-xl font-bold text-zinc-900">{category.name}</h1>
      </div>
      <CategoryForm category={category} />
    </div>
  );
}
