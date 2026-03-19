import { createServerClient } from "@/lib/supabase/server";
import { AuthorForm } from "@/components/admin/author-form";
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
    .from("authors")
    .select("name")
    .eq("id", id)
    .single();
  return { title: data ? `Edit: ${data.name}` : "Edit author" };
}

export default async function EditAuthorPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createServerClient();
  const { data: author } = await supabase
    .from("authors")
    .select("*")
    .eq("id", id)
    .single();

  if (!author) notFound();

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
        <h1 className="text-xl font-bold text-zinc-900">{author.name}</h1>
      </div>
      <AuthorForm author={author} />
    </div>
  );
}
