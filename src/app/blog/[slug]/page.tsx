import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { articleSchema, breadcrumbListSchema } from "@/lib/schema";
import { getBlogClusterForSlug } from "@/lib/blog-cluster-links";
import { getAllSlugs, getPostBySlug } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: `${post.title} | Finza Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.finza.africa/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cluster = getBlogClusterForSlug(slug);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            urlPath: `/blog/${post.slug}`,
            datePublished: post.publishedAt,
            authorName: post.author,
          }),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article>
        <header className="border-b border-zinc-100 pt-28 pb-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
              >
                ← Blog
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {post.publishedAt} · {post.author}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-zinc-600">{post.excerpt}</p>
            </div>
          </Container>
        </header>
        <Container>
          <div className="prose prose-zinc mx-auto max-w-3xl py-12 prose-headings:font-bold prose-p:text-zinc-600 prose-li:text-zinc-600 prose-a:text-zinc-900 prose-a:font-semibold">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
          <div className="mx-auto max-w-3xl border-t border-zinc-100 px-4 py-10 md:px-0">
            <h2 className="text-lg font-bold leading-snug text-zinc-900">
              If you&apos;re still managing this manually, Finza handles it automatically:
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Finza handles the boring alignment work for you: invoices and records stay tied together, payments update balances and status, and your numbers in GHS reflect what actually happened—not a rebuilt spreadsheet at month-end.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-zinc-600">
              <li>Keeps invoices and books reading from the same activity</li>
              <li>Blocks payments on drafts—record them only after the invoice is issued</li>
              <li>Shows tax lines separately where Ghana rules apply—not one mystery percentage</li>
            </ul>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="font-semibold text-zinc-900 underline underline-offset-2"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                View pricing in GHS
              </Link>
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Accounting software Ghana
              </Link>
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Invoicing in GHS
              </Link>
              {cluster ? (
                <Link href={cluster.core.href} className="font-semibold text-zinc-900 underline underline-offset-2">
                  {cluster.core.label}
                </Link>
              ) : null}
            </p>
          </div>
          {cluster ? (
            <div className="mx-auto max-w-3xl border-t border-zinc-100 px-4 pb-16 pt-2 md:px-0">
              <h2 className="text-lg font-bold text-zinc-900">Related reading</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600">
                {cluster.relatedSlugs.map((s) => {
                  const p = getPostBySlug(s);
                  if (!p || s === slug) return null;
                  return (
                    <li key={s}>
                      <Link href={`/blog/${s}`} className="font-semibold text-zinc-900 underline underline-offset-2">
                        {p.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>

      <RelatedClusterLinks
        related={[
          {
            href: "/blog",
            label: "All articles",
            desc: "More guides for Ghana businesses",
          },
          {
            href: "/invoicing-software-ghana",
            label: "Invoicing software Ghana",
            desc: "Send invoices & track in GHS",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
