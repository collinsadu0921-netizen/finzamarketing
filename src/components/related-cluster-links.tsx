"use client";

import Link from "next/link";
import { Container } from "@/components/container";

const PRIMARY = {
  href: "/accounting-software-ghana",
  label: "Accounting software for Ghana",
  desc: "Ledger-first product overview",
};

export interface RelatedLink {
  href: string;
  label: string;
  desc?: string;
}

type RelatedClusterLinksProps =
  | {
      /** Default: primary hub + two related pages */
      mode?: "with-primary";
      related: [RelatedLink, RelatedLink];
      heading?: string;
    }
  | {
      /** Use on `/accounting-software-ghana` to avoid self-link; supply three related pages */
      mode: "no-primary";
      related: [RelatedLink, RelatedLink, RelatedLink];
      heading?: string;
    };

/**
 * Site-wide SEO cluster pattern: surface the primary money page
 * plus two contextually related routes (or three related routes on the hub page).
 */
export function RelatedClusterLinks(props: RelatedClusterLinksProps) {
  const heading = props.heading ?? "Related guides";

  const items: RelatedLink[] =
    props.mode === "no-primary"
      ? [...props.related]
      : [PRIMARY, props.related[0], props.related[1]];

  return (
    <section className="border-b border-zinc-100 bg-zinc-50 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {heading}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400"
              >
                <p className="text-sm font-bold text-zinc-900">{l.label}</p>
                {l.desc ? (
                  <p className="mt-1 text-xs text-zinc-500">{l.desc}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
