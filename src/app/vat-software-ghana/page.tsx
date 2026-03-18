import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VAT Software in Ghana | Finza",
  description:
    "Finza is VAT software built for Ghana — calculating VAT, NHIL, and GETFund at the point of every transaction and posting each levy to a separate ledger account. GRA-ready reports included.",
  alternates: {
    canonical: "https://finza.africa/vat-software-ghana",
  },
};

export default function VatSoftwareGhanaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              VAT software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              VAT software for Ghanaian businesses.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Finza calculates Ghana VAT, NHIL, and GETFund at the point of every transaction — posting each levy to a separate ledger account automatically. GRA-ready VAT reports are always available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors text-center">
                Start free — no card required
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors text-center">
                View demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* GHANA VAT STRUCTURE */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana&apos;s tax structure</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Ghana does not have a simple VAT system.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Many businesses and their accountants think of Ghana&apos;s transaction tax as simply &quot;VAT at 15%.&quot; In practice, Ghana applies three separate levies on applicable transactions — and they must be tracked separately to comply correctly with GRA requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "VAT",
                  rate: "15%",
                  full: "Value Added Tax",
                  desc: "The primary consumption tax collected on taxable goods and services. Output VAT is collected from customers; input VAT is paid on purchases. The net position (output minus input) is what is remitted to GRA.",
                },
                {
                  name: "NHIL",
                  rate: "2.5%",
                  full: "National Health Insurance Levy",
                  desc: "A levy applied in addition to VAT. NHIL goes to the National Health Insurance Authority to fund Ghana's public health insurance system. It must be shown separately on tax invoices.",
                },
                {
                  name: "GETFund",
                  rate: "2.5%",
                  full: "Ghana Education Trust Fund",
                  desc: "A levy applied alongside VAT and NHIL to fund education infrastructure in Ghana. GETFund is tracked separately from VAT and NHIL for reporting and remittance purposes.",
                },
              ].map((t) => (
                <div key={t.name} className="p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="text-xl font-extrabold text-zinc-900">{t.name}</p>
                    <span className="text-sm font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-0.5">{t.rate}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">{t.full}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              For a GRA-registered business raising a taxable invoice of GHS 5,000, the total tax-inclusive amount is GHS 5,000 × (1 + 15% + 2.5% + 2.5%) = GHS 6,000. Each levy must appear separately on the invoice and be tracked separately in the accounting records.
            </p>
            <Link href="/ghana-vat-nhil-getfund" className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors">
              Full guide: Ghana VAT, NHIL, and GETFund explained →
            </Link>
          </div>
        </Container>
      </section>

      {/* WHY EXISTING METHODS FAIL */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem with current methods</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Why spreadsheets and manual methods get Ghana VAT wrong.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  headline: "VAT is often calculated as a single figure",
                  body: "Most businesses apply a flat percentage without separating VAT, NHIL, and GETFund. The invoice shows one tax line. The accounting record shows one tax amount. GRA compliance requires all three to be separated.",
                },
                {
                  headline: "VAT is calculated at period end, not at transaction",
                  body: "The typical approach is to tally up revenue at month- or quarter-end and apply the VAT rate. This means the accounting records between transactions are incorrect. The VAT liability account cannot be trusted at any point during the period.",
                },
                {
                  headline: "Input VAT is not tracked properly",
                  body: "Businesses that purchase taxable goods or services can reclaim the input VAT. But without a proper accounting system tracking input VAT purchase by purchase, the reclaimable amount is unknown — or estimated — at filing time.",
                },
                {
                  headline: "GRA report has to be assembled by hand",
                  body: "Because the underlying records are not structured correctly, the VAT return requires a manual compilation step. This is time-consuming, error-prone, and produces a report that may not reconcile with the accounting records.",
                },
              ].map((item) => (
                <div key={item.headline} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="flex-shrink-0 w-1 rounded-full bg-red-400 self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.headline}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW FINZA SOLVES IT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza handles VAT</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Every transaction calculates and separates all three levies.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              When you raise an invoice or record a sale in Finza, the system automatically calculates VAT, NHIL, and GETFund on the taxable amount. Each levy is posted to its own ledger account — VAT Output, NHIL Payable, and GETFund Payable — as separate credit entries. At no point are they combined into a single tax line in the accounting records.
            </p>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Invoice of GHS 5,000 — journal entry</p>
              <div className="grid grid-cols-3 text-xs font-bold text-zinc-400 pb-2 border-b border-zinc-200">
                <span>Account</span>
                <span className="text-center">Dr</span>
                <span className="text-right">Cr</span>
              </div>
              {[
                { account: "Accounts Receivable", dr: "GHS 6,000.00", cr: "" },
                { account: "Revenue", dr: "", cr: "GHS 5,000.00" },
                { account: "VAT Output (15%)", dr: "", cr: "GHS 750.00" },
                { account: "NHIL Payable (2.5%)", dr: "", cr: "GHS 125.00" },
                { account: "GETFund Payable (2.5%)", dr: "", cr: "GHS 125.00" },
              ].map((row) => (
                <div key={row.account} className="grid grid-cols-3 text-sm py-1">
                  <span className="text-zinc-700">{row.account}</span>
                  <span className="text-center font-semibold text-blue-700">{row.dr}</span>
                  <span className="text-right font-semibold text-zinc-600">{row.cr}</span>
                </div>
              ))}
              <p className="text-xs text-zinc-500 pt-2">All three levies are posted separately. No manual step required.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "GRA-ready VAT report — always current",
                  body: "Because VAT is posted correctly at every transaction, your VAT control account is always accurate. At period end, the VAT report shows opening balance, output VAT collected, input VAT reclaimable, reversals, and net VAT payable — formatted for GRA filing.",
                },
                {
                  title: "Input VAT tracked per purchase",
                  body: "Every taxable purchase you record in Finza creates an input VAT entry. Your net VAT position — the amount actually owed to GRA after subtracting reclaimable input — is visible at all times.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex-shrink-0 w-1 rounded-full bg-[#0F172A] self-stretch" />
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-1.5">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LINKS + CTA */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Ghana VAT guide", desc: "VAT, NHIL, GETFund explained", href: "/ghana-vat-nhil-getfund" },
                { label: "Invoice software", desc: "Invoicing with automatic VAT", href: "/invoice-software-ghana" },
                { label: "Features", desc: "Full accounting system", href: "/features" },
                { label: "Pricing", desc: "Workspace plans", href: "/pricing" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-zinc-400 transition-colors">
                  <p className="text-sm font-bold text-zinc-900">{l.label}</p>
                  <p className="text-xs text-zinc-500 mt-1">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0F172A] text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              VAT handled correctly — at every transaction.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              VAT, NHIL, and GETFund separated automatically. GRA-ready reports always available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="https://app.finza.africa/signup" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
                Get started free
              </a>
              <Link href="/demo" className="text-base font-semibold text-zinc-400 hover:text-white transition-colors">
                View demo →
              </Link>
            </div>
            <p className="text-xs text-zinc-500 pt-1">No card required · First month free</p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
