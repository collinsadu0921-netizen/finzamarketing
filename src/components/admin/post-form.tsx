"use client";

import { useActionState, useState } from "react";
import { createPost, updatePost, publishPost, unpublishPost, deletePost } from "@/app/admin/_actions/posts";
import type { Post, Author, Category } from "@/types/cms";
import { MediaUpload } from "@/components/admin/media-upload";

interface PostFormProps {
  post?: Post;
  authors: Author[];
  categories: Category[];
  selectedCategoryIds?: string[];
}

type FormState = { error: string | null };

export function PostForm({
  post,
  authors,
  categories,
  selectedCategoryIds = [],
}: PostFormProps) {
  const isEditing = !!post;
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? "");
  const [ogImage, setOgImage] = useState(post?.og_image ?? "");
  const [checkedCategories, setCheckedCategories] =
    useState<string[]>(selectedCategoryIds);
  const [, setBusy] = useState(false);

  async function boundAction(
    _prev: FormState,
    formData: FormData
  ): Promise<FormState> {
    setBusy(true);
    const res = isEditing
      ? await updatePost(post!.id, formData)
      : await createPost(formData);
    setBusy(false);
    return { error: res?.error ?? null };
  }

  const [state, action, pending] = useActionState(boundAction, { error: null });

  function toggleCategory(id: string) {
    setCheckedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  return (
    <form action={action} className="flex flex-col gap-6">
      {state.error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content column */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Field label="Title" required>
            <input
              name="title"
              type="text"
              required
              defaultValue={post?.title}
              className={inputClass}
              placeholder="My blog post title"
            />
          </Field>

          <Field label="Slug" hint="Auto-generated from title if left blank.">
            <input
              name="slug"
              type="text"
              defaultValue={post?.slug}
              className={inputClass}
              placeholder="my-blog-post-title"
            />
          </Field>

          <Field label="Excerpt">
            <textarea
              name="excerpt"
              rows={2}
              defaultValue={post?.excerpt ?? ""}
              className={inputClass}
              placeholder="Brief summary shown in listings and meta descriptions…"
            />
          </Field>

          <Field label="Content (Markdown)">
            <textarea
              name="content"
              rows={20}
              defaultValue={post?.content ?? ""}
              className={`${inputClass} font-mono text-xs`}
              placeholder="Write your post in Markdown…"
            />
          </Field>
        </div>

        {/* Sidebar column */}
        <div className="flex flex-col gap-5">
          {/* Publish controls */}
          {isEditing && (
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Status
              </p>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    post.status === "published"
                      ? "bg-emerald-500"
                      : "bg-zinc-300"
                  }`}
                />
                <span className="text-sm font-medium text-zinc-700 capitalize">
                  {post.status}
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {post.status === "draft" ? (
                  <form
                    action={async () => {
                      setBusy(true);
                      await publishPost(post.id);
                      setBusy(false);
                    }}
                  >
                    <button
                      type="submit"
                      className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                    >
                      Publish
                    </button>
                  </form>
                ) : (
                  <form
                    action={async () => {
                      setBusy(true);
                      await unpublishPost(post.id);
                      setBusy(false);
                    }}
                  >
                    <button
                      type="submit"
                      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                    >
                      Unpublish
                    </button>
                  </form>
                )}
                <form
                  action={async () => {
                    if (
                      confirm(
                        "Delete this post permanently? This cannot be undone."
                      )
                    ) {
                      await deletePost(post.id);
                    }
                  }}
                >
                  <button
                    type="submit"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Delete post
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Author */}
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Author
            </p>
            <select
              name="author_id"
              defaultValue={post?.author_id ?? ""}
              className={inputClass}
            >
              <option value="">— No author —</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Categories
            </p>
            {categories.length === 0 ? (
              <p className="text-xs text-zinc-400">No categories yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name="category_ids"
                      value={cat.id}
                      checked={checkedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="h-4 w-4 rounded border-zinc-300"
                    />
                    <span className="text-sm text-zinc-700">{cat.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Cover image */}
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Cover image
            </p>
            <input type="hidden" name="cover_image" value={coverImage} />
            <MediaUpload
              currentUrl={coverImage}
              onUpload={(url) => setCoverImage(url)}
              label="Upload cover"
            />
            {coverImage && (
              <div className="mt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Cover"
                  className="h-24 w-full rounded object-cover"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="mt-1 text-xs text-zinc-400 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* noindex */}
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                name="noindex"
                value="true"
                defaultChecked={post?.noindex}
                className="h-4 w-4 rounded border-zinc-300"
              />
              <span className="text-sm text-zinc-700">
                No-index (hide from search)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* SEO section */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-zinc-700">
          SEO & Open Graph
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="SEO title" hint="Overrides page title in <title> tag.">
            <input
              name="seo_title"
              type="text"
              defaultValue={post?.seo_title ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="Meta description">
            <textarea
              name="meta_description"
              rows={2}
              defaultValue={post?.meta_description ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="OG title">
            <input
              name="og_title"
              type="text"
              defaultValue={post?.og_title ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="OG description">
            <textarea
              name="og_description"
              rows={2}
              defaultValue={post?.og_description ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="OG image URL">
            <div className="flex gap-2">
              <input
                type="hidden"
                name="og_image"
                value={ogImage}
              />
              <input
                type="text"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className={inputClass}
                placeholder="https://…"
              />
              <MediaUpload
                currentUrl={ogImage}
                onUpload={(url) => setOgImage(url)}
                label="Upload"
                compact
              />
            </div>
          </Field>
          <Field label="Canonical URL">
            <input
              name="canonical_url"
              type="text"
              defaultValue={post?.canonical_url ?? ""}
              className={inputClass}
              placeholder="https://www.finza.africa/blog/…"
            />
          </Field>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 disabled:opacity-60"
        >
          {pending ? "Saving…" : isEditing ? "Save changes" : "Create post"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-zinc-400">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";
