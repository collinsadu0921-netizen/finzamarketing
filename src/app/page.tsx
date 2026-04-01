import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza — The business system that keeps your numbers correct",
  description:
    "Send invoices, track payments, and see your real profit without fixing anything later. Finza is built for Ghanaian businesses to stay correct from day one.",
  alternates: {
    canonical: "https://www.finza.africa",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* SECTION 1 — HERO */}
      <section className="pt-24 pb-20 w-full border-b border-zinc-100 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl leading-[1.1]">
              Run your business.<br />
              <span className="text-[#0F172A]">Your numbers stay correct.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Send invoices, track payments, and see your real profit — without fixing anything later.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#0F172A]/90 transition-all hover:scale-[1.02] text-center inline-block"
              >
                Start free
              </a>
              <p className="text-sm font-semibold text-zinc-400">
                Built on a structured accounting system behind the scenes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — PROBLEM (REALITY) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-snug">
              Your business is moving.<br />
              But your numbers don&apos;t match.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Payments come in", icon: "↓" },
                { label: "Expenses go out", icon: "↑" },
                { label: "But profit is unclear", icon: "?" },
                { label: "Tax becomes guesswork", icon: "!" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-zinc-200 flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-xl font-black text-zinc-400">
                    {item.icon}
                  </div>
                  <p className="font-bold text-zinc-800">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto pt-6">
              <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
                Most businesses don&apos;t have bad accounting.<br />
                <span className="font-extrabold text-zinc-900 mt-2 block text-2xl">They just don&apos;t have a system.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — WHAT FINZA DOES */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">What Finza does</h2>
              <div className="w-12 h-1 bg-[#0F172A] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Invoicing", desc: "Know exactly who owes you — and when." },
                { title: "Payments", desc: "Track money coming in and going out." },
                { title: "Profit", desc: "See your real profit anytime." },
                { title: "Ghana Tax", desc: "VAT, NHIL, and GETFund handled automatically." },
                { title: "Withholding Tax", desc: "Track deductions and know what you're owed." }
              ].map((f, i) => (
                <div key={i} className={`p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col justify-center transition-all hover:bg-zinc-100 hover:shadow-md ${i === 4 ? "lg:col-span-2" : ""}`}>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-3">{f.title}</h3>
                  <p className="text-lg text-zinc-600 font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-24 bg-[#0F172A] border-b border-[#1E293B]">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-14">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Everything connects automatically.
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              {[
                "No missing entries",
                "No broken reports",
                "No manual fixes"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl border border-white/10 w-full md:w-auto">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 font-black text-xl">✓</span>
                  <p className="text-xl font-bold text-white">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — TRUST / ENGINE */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Built properly from the start.
            </h2>

            <div className="space-y-4 max-w-xl mx-auto text-left">
              {[
                "Every transaction is structured",
                "Your reports always match",
                "Your data is ready for accountants"
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-5 bg-white p-6 rounded-xl border border-zinc-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className="w-3 h-3 rounded-full bg-[#0F172A] flex-shrink-0" />
                  <p className="text-xl text-zinc-800 font-bold">{line}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-xl font-black text-[#0F172A] bg-white border-2 border-zinc-200 px-8 py-6 rounded-2xl shadow-lg inline-block">
                Finza records everything correctly behind the scenes —<br className="hidden md:block"/> so you don&apos;t have to fix anything later.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — PROFESSIONAL MODE */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Start simple. Grow without changing systems.
            </h2>
            <div className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto space-y-6">
              <p className="font-medium">When you need deeper accounting, it&apos;s already there — fully structured and ready.</p>
              <div className="bg-zinc-100 rounded-xl p-6 border border-zinc-200 inline-block">
                <p className="font-black text-zinc-900 text-2xl">No migrations. No rebuilding. No starting over.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7 — DIFFERENTIATION CTA */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100 text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-3 text-2xl font-black text-zinc-400 uppercase tracking-widest">
              <p>Not just invoicing.</p>
              <p>Not just bookkeeping.</p>
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-tight">
              A system that keeps your business numbers correct from day one.
            </h2>

            <div className="pt-8">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-xl bg-[#0F172A] px-12 py-5 text-xl font-black text-white shadow-xl hover:bg-[#0F172A]/90 transition-all hover:-translate-y-1 inline-block"
              >
                Start free
              </a>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          {
            href: "/accounting-software-for-service-businesses-ghana",
            label: "Service business accounting",
            desc: "For agencies & consultants",
          },
          {
            href: "/accounting-software-for-retailers-ghana",
            label: "Retail accounting software",
            desc: "For shops & pharmacies",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
