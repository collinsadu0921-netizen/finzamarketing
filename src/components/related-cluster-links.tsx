"use client";

import Link from "next/link";
import { Container } from "@/components/container";

const DEFAULT_PRIMARY = {
  href: "/accounting-software-ghana",
  label: "Accounting software for Ghana",
  desc: "Month-end reports, GHS records, and accountant handoff",
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
      primary?: RelatedLink;
      related: RelatedLink[];
      heading?: string;
    }
  | {
      /** Use on `/accounting-software-ghana` to avoid self-link; supply three related pages */
      mode: "no-primary";
      related: RelatedLink[];
      heading?: string;
    };

/**
 * Site-wide SEO cluster pattern: surface a contextually relevant hub
 * plus related routes (or three related routes on the hub page).
 */
export function RelatedClusterLinks(props: RelatedClusterLinksProps) {
  const heading = props.heading ?? "Related guides";
  const primary = props.mode === "no-primary" ? null : props.primary ?? DEFAULT_PRIMARY;

  const rawItems: (RelatedLink | null)[] =
    props.mode === "no-primary"
      ? [...props.related]
      : [primary, ...props.related];

  const seen = new Set<string>();
  const items = rawItems.filter((item): item is RelatedLink => {
    if (!item) return false;
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  }).slice(0, 3);

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
