import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/container";
import { getSocialLinks } from "@/lib/site-settings-public";

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 5.2-1.74V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export async function Footer() {
  const social = await getSocialLinks();

  const items = [
    { href: social.social_twitter, label: "Finza on X (Twitter)", Icon: Twitter },
    { href: social.social_linkedin, label: "Finza on LinkedIn", Icon: Linkedin },
    { href: social.social_instagram, label: "Finza on Instagram", Icon: Instagram },
    { href: social.social_tiktok, label: "Finza on TikTok", Icon: TikTokGlyph },
  ].filter((x) => x.href?.trim());

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-left">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Finza" width={100} height={30} className="h-7 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-600">
              Ledger-first accounting for modern African businesses.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/features" className="transition-colors hover:text-zinc-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-zinc-900">
                  Pricing
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-400">Retail Workspace</span>{" "}
                <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-zinc-400">
                  Soon
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-400">Accountant Workspace</span>{" "}
                <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-zinc-400">
                  Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/about" className="transition-colors hover:text-zinc-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/security" className="transition-colors hover:text-zinc-900">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-zinc-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-zinc-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-zinc-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-zinc-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-zinc-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5 border-t border-zinc-200 pt-10">
            {items.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-10 border-t border-zinc-200 pt-8 text-center">
          <p className="text-sm text-zinc-500">&copy; 2026 Finza. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
