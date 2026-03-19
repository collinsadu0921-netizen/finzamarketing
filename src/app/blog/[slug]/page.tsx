import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { articleSchema, breadcrumbListSchema } from "@/lib/schema";
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
        </Container>
      </article>

      <RelatedClusterLinks
        related={[
          {
            href: "/blog",
            label: "All articles",
            desc: "Finza blog index",
          },
          {
            href: "/how-vat-works-ghana",
            label: "How VAT works in Ghana",
            desc: "Tax cluster guide",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
