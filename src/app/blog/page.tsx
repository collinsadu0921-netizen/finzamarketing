import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Finza Blog — Accounting, VAT & Ghana Business",
  description:
    "Articles on ledger-first accounting, Ghana VAT/NHIL/GETFund, and moving off spreadsheets. From Finza, accounting software built for Ghana.",
  alternates: {
    canonical: "https://www.finza.africa/blog",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Blog
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Ideas for better books in Ghana
            </h1>
            <p className="text-lg text-zinc-600">
              Practical notes on ledgers, tax structure, and operations — not generic filler. For the product story, see{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ul className="mx-auto max-w-3xl divide-y divide-zinc-100 border-t border-zinc-100">
            {sorted.map((post) => (
              <li key={post.slug} className="py-8">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    {post.publishedAt} · {post.author}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-zinc-900 group-hover:text-zinc-600">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4">
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/best-accounting-software-ghana",
            label: "Choosing software",
            desc: "Evaluation framework",
          },
          { href: "/how-vat-works-ghana", label: "How VAT works", desc: "Ghana guide" },
        ]}
      />
      <Footer />
    </main>
  );
}
