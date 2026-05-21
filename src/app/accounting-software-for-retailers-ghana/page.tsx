import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finza Ghana Service Business Focus | Finza",
  description:
    "Finza is currently focused on Ghanaian service businesses. Retail and POS features are not being publicly marketed yet.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RetailAccountingGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Finza is currently focused on service businesses in Ghana.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Retail and POS features are not being publicly marketed yet. For current service-business features, use the links below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <Link href="/features" className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                Features
              </Link>
              <Link href="/pricing#find-plan" className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                Pricing
              </Link>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                Demo
              </Link>
              <Link href="/accounting-software-ghana" className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                Accounting software Ghana
              </Link>
              <Link href="/invoicing-software-ghana" className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 sm:col-span-2">
                Invoicing software Ghana
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
