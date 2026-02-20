import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <div className="py-32 w-full">
        <div className="mx-auto max-w-[800px] space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl leading-tight">
            Modern accounting infrastructure for serious African businesses.
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-zinc-600 sm:text-xl">
            Finza is a ledger-first accounting system built for compliance, clarity, and scale — starting with Ghana.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/demo"
              className="rounded-md bg-[#0F172A] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors"
            >
              Start Free Demo
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
