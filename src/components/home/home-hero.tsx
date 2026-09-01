import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { MarketingReveal } from "@/components/motion/marketing-reveal";
import { HeroDashboard } from "@/components/home/hero-dashboard";
import { HeroDashboardShell } from "@/components/home/hero-dashboard-shell";
import { homePrimaryBtn, homeSecondaryBtn } from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

const HERO_IMG = {
  src: "/images/finza/finza-dashboard-hero-2026-09.webp",
  alt: "Finza dashboard for Golden hands services Ltd showing available cash, unpaid invoices, profit performance, and August revenue in GHS",
  width: 1024,
  height: 649,
} as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#FAFAF8] pt-12 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg-light" />
      <div className="pointer-events-none absolute inset-0 site-hero-warm-glow" />

      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-10">
          {/* Hero copy — MarketingReveal is safe here (no HTML dashboard inside) */}
          <MarketingReveal variant="hero-settle">
            <div className="min-w-0 space-y-5">
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.15rem]">
                Run your business with clearer numbers.{" "}
                <svg
                  viewBox="0 0 640 480"
                  aria-label="Ghana flag"
                  role="img"
                  className="mb-1 inline-block h-5 w-7 rounded-[2px] shadow-sm sm:h-6 sm:w-8"
                >
                  <path fill="#ef2929" d="M0 0h640v160H0z" />
                  <path fill="#fcdd09" d="M0 160h640v160H0z" />
                  <path fill="#006b3f" d="M0 320h640v160H0z" />
                  <path fill="#000" d="m320 160 39.2 120.6L254.6 210h130.8l-104.6 70.6z" />
                </svg>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
                Create quotes, manage jobs and materials, send invoices, track payments, and understand
                profit in one Ghana-ready workspace.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <a href={starterSignupHref} className={homePrimaryBtn}>
                  Start free trial
                </a>
                <Link href="/pricing" className={homeSecondaryBtn}>
                  View pricing
                </Link>
              </div>
              <p className="text-sm text-zinc-500">
                14-day free trial · No card required · Plans in Ghana cedis
              </p>
            </div>
          </MarketingReveal>

          <div className="relative mx-auto w-full min-w-0 max-w-[720px] lg:max-w-none">
            {/* Desktop: crisp HTML/SVG dashboard — NO transformed ancestor */}
            <div className="hidden lg:block">
              <HeroDashboard>
                <HeroDashboardShell />
              </HeroDashboard>
            </div>

            {/* Tablet + Mobile: static screenshot inside MarketingReveal (safe — raster tolerates settle) */}
            <div className="lg:hidden">
              <MarketingReveal variant="hero-settle">
                <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/[0.07] ring-1 ring-zinc-900/[0.03]">
                  <Image
                    src={HERO_IMG.src}
                    alt={HERO_IMG.alt}
                    width={HERO_IMG.width}
                    height={HERO_IMG.height}
                    priority
                    sizes="(max-width: 640px) 96vw, 90vw"
                    className="block h-auto w-full"
                  />
                </div>
              </MarketingReveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
