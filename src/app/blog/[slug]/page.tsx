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
import { GhanaInvoiceTemplateCta, GhanaInvoiceTemplateLead } from "@/components/blog/ghana-invoice-template";
import { getAllSlugs, getPostBySlug } from "@/lib/blog-posts";

const GHANA_INVOICE_TEMPLATE_SLUG = "invoice-template-ghana";

interface Props {
  params: Promise<{ slug: string }>;
}

function getBlogCtaCopy(coreHref?: string) {
  if (coreHref === "/vat-software-ghana") {
    return {
      heading: "Keep tax-related records easier to review",
      body:
        "For VAT, NHIL, GETFund, and WHT topics, Finza helps keep document totals, payment records, and Ghana tax lines closer together where they apply.",
      bullets: ["Review Ghana tax lines where applicable", "Keep invoice and payment records connected", "Confirm final treatment with your accountant or GRA"],
    };
  }
  if (coreHref === "/bookkeeping-software-ghana") {
    return {
      heading: "Turn the bookkeeping habit into a system",
      body:
        "Finza helps keep receipts, expenses, supplier bills, payment notes, and incoming documents organized before accountant review.",
      bullets: ["Capture receipts and supporting documents", "Keep expenses and bills easier to review", "Prepare cleaner weekly records in GHS"],
    };
  }
  if (coreHref === "/invoicing-software-ghana") {
    return {
      heading: "Create and follow invoices in GHS",
      body:
        "Finza helps create quotes, proformas, invoices, and receipts, then keeps payment records and customer balances tied to the same workflow.",
      bullets: ["Send invoice links by email or WhatsApp", "Record full or partial payments", "Review customer balances in GHS"],
    };
  }
  if (coreHref === "/quotation-software-ghana") {
    return {
      heading: "Move from quote to invoice without retyping",
      body:
        "Finza helps service businesses prepare client offers, confirm scope, and continue into invoicing when the work is approved.",
      bullets: ["Prepare quotes and proformas", "Keep scope and pricing clear", "Continue into invoice records in GHS"],
    };
  }
  return {
    heading: "Keep accounting records easier to review",
    body:
      "Finza helps keep invoices, payments, costs, payroll records, reports, and accountant handoff closer together in one GHS workspace.",
    bullets: ["Review balances and records in GHS", "Prepare cleaner accountant handoff", "Keep tax-line context where applicable"],
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: `${post.title} | Blog`,
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
  const cta = getBlogCtaCopy(cluster?.core.href);
  const isGhanaInvoiceTemplate = slug === GHANA_INVOICE_TEMPLATE_SLUG;

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
                Back to blog
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {post.publishedAt} / {post.author}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-zinc-600">{post.excerpt}</p>
              {isGhanaInvoiceTemplate ? (
                <div className="mt-8">
                  <GhanaInvoiceTemplateLead />
                </div>
              ) : null}
            </div>
          </Container>
        </header>
        <Container>
          <div className={`mx-auto max-w-3xl ${isGhanaInvoiceTemplate ? "py-10" : "py-12"}`}>
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2
                    className={
                      isGhanaInvoiceTemplate
                        ? "mb-4 mt-12 text-2xl font-bold tracking-tight text-zinc-900 first:mt-0"
                        : "mb-4 mt-10 text-2xl font-bold tracking-tight text-zinc-900 first:mt-0"
                    }
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-8 text-xl font-bold text-zinc-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p
                    className={
                      isGhanaInvoiceTemplate
                        ? "mb-6 text-base leading-7 text-zinc-600"
                        : "mb-5 text-base leading-7 text-zinc-600"
                    }
                  >
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul
                    className={
                      isGhanaInvoiceTemplate
                        ? "mb-8 list-disc space-y-2.5 pl-6 text-base leading-7 text-zinc-600"
                        : "mb-6 list-disc space-y-2 pl-6 text-base leading-7 text-zinc-600"
                    }
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol
                    className={
                      isGhanaInvoiceTemplate
                        ? "mb-8 list-decimal space-y-2.5 pl-6 text-base leading-7 text-zinc-600"
                        : "mb-6 list-decimal space-y-2 pl-6 text-base leading-7 text-zinc-600"
                    }
                  >
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-zinc-900">{children}</strong>
                ),
                a: ({ href = "", children }) => {
                  const isTemplateDownload = href === "/templates/ghana-invoice-template.csv";
                  if (isTemplateDownload) {
                    return (
                      <a
                        href={href}
                        download
                        className="mb-6 mt-2 inline-flex items-center justify-center rounded-md bg-[#0F172A] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0F172A]/90"
                      >
                        {children}
                      </a>
                    );
                  }

                  return (
                    <a
                      href={href}
                      className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
          {isGhanaInvoiceTemplate ? (
            <GhanaInvoiceTemplateCta />
          ) : (
            <div className="mx-auto max-w-3xl border-t border-zinc-100 px-4 py-10 md:px-0">
              <h2 className="text-lg font-bold leading-snug text-zinc-900">
                {cta.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {cta.body}
              </p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-zinc-600">
                {cta.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {cluster ? (
                  <Link href={cluster.core.href} className="font-semibold text-zinc-900 underline underline-offset-2">
                    {cluster.core.label}
                  </Link>
                ) : null}
                <Link href="/pricing#plans" className="font-semibold text-zinc-900 underline underline-offset-2">
                  Compare plans
                </Link>
                <Link href="/demo" className="font-semibold text-zinc-900 underline underline-offset-2">
                  Product tour
                </Link>
              </p>
            </div>
          )}
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
        mode="no-primary"
        related={[
          {
            href: "/blog",
            label: "All articles",
            desc: "More guides for Ghana businesses",
          },
          cluster
            ? { href: cluster.core.href, label: cluster.core.label, desc: "Related Finza product page" }
            : { href: "/accounting-software-ghana", label: "Accounting software Ghana", desc: "GHS records and reports" },
          { href: "/pricing#plans", label: "Pricing", desc: "Compare plans in GHS" },
        ]}
      />
      <Footer />
    </main>
  );
}
