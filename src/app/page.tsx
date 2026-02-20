import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  const features = [
    {
      title: "Ledger-first core",
      description: "Every transaction posts to an immutable double-entry ledger.",
    },
    {
      title: "Ghana-compliant tax engine",
      description: "VAT, NHIL, GETFund, and levies built into the system logic.",
    },
    {
      title: "Accountant workspace",
      description: "Period locking, journal controls, and structured reporting.",
    },
    {
      title: "Multi-industry ready",
      description: "Built for retail, service businesses, and growing enterprises.",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-32 w-full">
        <Container>
          <div className="mx-auto max-w-[800px] space-y-8 text-center flex flex-col items-center">
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
        </Container>
      </section>

      {/* Why Finza Section */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Built differently from day one.
            </h2>
            <p className="text-lg text-zinc-600">
              Finza is not a spreadsheet clone. It is financial infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col p-6 rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
