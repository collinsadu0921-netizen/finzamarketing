import Link from "next/link";

import Image from "next/image";

import { FileCheck2, FileText, Smartphone, Sparkles } from "lucide-react";

import { Container } from "@/components/container";

import { GhanaProofChips, HERO_MOBILE_PROOF_CHIPS } from "@/components/site/ghana-proof-chips";

import { homeHeroPrimaryBtn, homeHeroSecondaryBtn } from "@/components/home/home-ui";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);



const FLOAT_CARDS = [

  {

    label: "Invoice sent",

    icon: FileCheck2,

    tone: "bg-emerald-500/15 text-emerald-300",

    position: "left-2 top-12 md:left-4 md:top-14",

    delay: "0s",

  },

  {

    label: "MoMo & bank details",

    icon: Smartphone,

    tone: "bg-emerald-500/15 text-emerald-300",

    position: "right-2 top-8 md:right-4 md:top-10",

    delay: "0.5s",

  },

  {

    label: "VAT · NHIL · GETFund",

    icon: Sparkles,

    tone: "bg-amber-500/15 text-amber-200",

    position: "right-6 bottom-16 md:right-8 md:bottom-20",

    delay: "1.5s",

  },

] as const;



function HeroProofCard({

  label,

  icon: Icon,

  tone,

  position,

  delay,

}: (typeof FLOAT_CARDS)[number]) {

  return (

    <div

      className={`hero-float motion-reduce:animate-none absolute z-20 hidden items-center gap-2 rounded-xl border border-white/15 bg-zinc-900/75 px-2.5 py-1.5 shadow-lg shadow-black/30 backdrop-blur-md md:flex ${position}`}

      style={{ animationDelay: delay }}

    >

      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${tone}`}>

        <Icon className="h-3 w-3" aria-hidden />

      </span>

      <span className="text-[11px] font-semibold text-white/90">{label}</span>

    </div>

  );

}



export function HomeHero() {

  return (

    <section className="relative overflow-hidden bg-[#030712] pt-20 pb-14 text-white md:pb-16">

      <div className="pointer-events-none absolute inset-0 hero-grid-bg" />

      <div className="pointer-events-none absolute inset-0 site-hero-warm-glow" />

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -top-32 left-[-15%] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[120px]" />

        <div className="absolute right-[-12%] top-[10%] h-[380px] w-[380px] rounded-full bg-emerald-500/18 blur-[130px]" />

        <div className="absolute bottom-[-25%] left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-amber-600/12 blur-[110px]" />

      </div>



      <Container>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[42%_58%] lg:items-center lg:gap-8">

          <div className="space-y-6 lg:pr-4">

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">

              <FileText className="h-3.5 w-3.5 text-amber-300/90" aria-hidden />

              Built for service businesses

            </div>

            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Run service work with{" "}
              <span className="bg-gradient-to-r from-sky-300 via-amber-200/95 to-emerald-300 bg-clip-text text-transparent">
                clearer records
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
              Quotes, invoices, payments, expenses, payroll, and reports in one place —
              without chasing scattered files.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">

              <a href={starterSignupHref} className={homeHeroPrimaryBtn}>

                Start free trial

              </a>

              <Link href="/pricing#find-plan" className={homeHeroSecondaryBtn}>

                Find my plan

              </Link>

            </div>

            <GhanaProofChips chips={HERO_MOBILE_PROOF_CHIPS} size="xs" className="md:hidden max-w-md" />

            <p className="text-sm text-zinc-500">

              Plans from GH₵149/month ·{" "}

              <Link

                href="/demo"

                className="font-medium text-zinc-300 underline underline-offset-2 transition-colors hover:text-white"

              >

                Watch product tour

              </Link>

            </p>

          </div>



          <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">

            <div className="hero-glow relative rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 p-2 shadow-2xl shadow-black/50 ring-1 ring-amber-500/10">

              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">

                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />

                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />

                <span className="mx-auto truncate text-[11px] font-medium text-zinc-500">

                  app.finza.africa — Business workspace

                </span>

              </div>

              <div className="overflow-hidden rounded-b-xl bg-slate-950/50">

                <Image

                  src="/images/finza-dashboard-hero.png"

                  alt="Finza dashboard for a Ghanaian service business showing invoices, expenses, payments, reports and tax summary"

                  width={2400}

                  height={1350}

                  priority

                  quality={100}

                  sizes="(max-width: 640px) 96vw, (max-width: 1024px) 55vw, 680px"

                  className="block h-auto w-full"

                />

              </div>

            </div>



            {FLOAT_CARDS.map((card) => (

              <HeroProofCard key={card.label} {...card} />

            ))}

          </div>

        </div>

      </Container>

    </section>

  );

}


