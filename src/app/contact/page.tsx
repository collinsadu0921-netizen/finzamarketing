import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Contact Finza — Sales & Support",
  description:
    "Contact Finza: message the team or email hello@finza.africa. Questions about accounting software in Ghana, pricing, or demos.",
  alternates: {
    canonical: "https://www.finza.africa/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-zinc-100 pt-28 pb-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Contact
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                Talk to Finza
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600">
                Ask about workspaces, Ghana tax handling, or getting your accountant set up. For product context, start with{" "}
                <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                  accounting software for Ghana
                </Link>
                .
              </p>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">Email</p>
                <a
                  href="mailto:hello@finza.africa"
                  className="mt-1 inline-block font-medium text-zinc-900 underline underline-offset-2"
                >
                  hello@finza.africa
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/pricing", label: "Pricing", desc: "Plans & workspaces" },
          { href: "/demo", label: "Demo", desc: "Try a workspace" },
        ]}
      />
      <Footer />
    </main>
  );
}
