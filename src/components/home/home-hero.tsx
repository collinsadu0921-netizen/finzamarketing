import Link from "next/link";
import { Container } from "@/components/container";
import { MarketingReveal } from "@/components/motion/marketing-reveal";
import { MarketingScreenshot } from "@/components/site/marketing-screenshot";
import { homePrimaryBtn, homeSecondaryBtn } from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#FAFAF8] pt-12 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg-light" />
      <div className="pointer-events-none absolute inset-0 site-hero-warm-glow" />

      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-10">
          <div className="min-w-0 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Business software for Ghanaian service teams
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.15rem]">
              Run your service business with clearer numbers.
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

          <div className="relative mx-auto w-full min-w-0 max-w-[720px] lg:max-w-none">
            <MarketingReveal variant="hero-settle">
              <MarketingScreenshot
                src="/images/finza/finza-dashboard-hero.webp"
                alt="Finza dashboard for a Ghanaian service business showing revenue, expenses, invoices, and activity in GHS"
                width={2400}
                height={1350}
                priority
                float
                sizes="(max-width: 640px) 96vw, (max-width: 1024px) 90vw, 680px"
              />
            </MarketingReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
