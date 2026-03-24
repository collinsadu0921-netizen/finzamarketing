import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export const metadata: Metadata = {
  title: "Ghana VAT, NHIL and GETFund — How They Work | Finza",
  description:
    "A complete guide to Ghana's indirect tax structure effective 1 January 2026 — VAT (15%), NHIL (2.5%), and GETFund (2.5%) with input tax deduction treatment for NHIL and GETFund — and how Finza handles all three automatically.",
  alternates: {
    canonical: "https://www.finza.africa/ghana-vat-nhil-getfund",
  },
};

export default function GhanaVatNhilGetfundPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <section className="pt-28 pb-20 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wide uppercase">
              Ghana tax guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Ghana VAT, NHIL and GETFund — explained.
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Ghana does not apply a single VAT rate. It applies three separate indirect levies on applicable transactions. Understanding how they work — and how they must be tracked — matters for every registered business. This page explains the structure and how Finza handles all three automatically.
            </p>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Framework in effect</p>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Effective 1 January 2026, Finza follows Ghana&apos;s revised VAT framework: VAT remains 15%, NHIL remains 2.5%, and GETFund remains 2.5%. Under this framework, NHIL and GETFund are treated as input tax deductions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* THE THREE LEVIES */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The three levies</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Three levies. Three separate accounts. One transaction.
              </h2>
              <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
                When a VAT-registered business in Ghana raises a taxable invoice, three levies apply. Each has its own rate, its own statutory purpose, and its own remittance path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "VAT",
                  rate: "15%",
                  full: "Value Added Tax",
                  authority: "Ghana Revenue Authority (GRA)",
                  body: "The primary consumption tax in Ghana. Collected at the point of sale from the customer and remitted to GRA. Input VAT paid on taxable purchases can be deducted from output VAT collected, leaving only the net amount payable. The standard rate is 15%.",
                  note: "Input VAT on qualifying purchases is reclaimable.",
                },
                {
                  name: "NHIL",
                  rate: "2.5%",
                  full: "National Health Insurance Levy",
                  authority: "National Health Insurance Authority",
                  body: "Applied on the same taxable base as VAT. NHIL is collected alongside VAT but remitted to the National Health Insurance Fund to finance Ghana's public health insurance system. It is shown separately on GRA-issued tax invoices.",
                  note: "Effective 1 January 2026, NHIL is treated as an input tax deduction under Ghana's revised VAT framework.",
                },
                {
                  name: "GETFund",
                  rate: "2.5%",
                  full: "Ghana Education Trust Fund Levy",
                  authority: "GETFund Secretariat",
                  body: "Applied on the same taxable base as VAT and NHIL. GETFund proceeds are earmarked for educational infrastructure projects across Ghana. It is collected at point of transaction and must be shown as a separate line on the tax invoice.",
                  note: "Effective 1 January 2026, GETFund is treated as an input tax deduction under Ghana's revised VAT framework.",
                },
              ].map((t) => (
                <div key={t.name} className="flex flex-col p-7 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="text-xl font-extrabold text-zinc-900">{t.name}</p>
                    <span className="text-sm font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-0.5">{t.rate}</span>
                  </div>
                  <p className="text-xs font-semibold text-zinc-400 mb-1">{t.full}</p>
                  <p className="text-xs text-zinc-400 mb-4">Remitted to: {t.authority}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-3 flex-1">{t.body}</p>
                  <p className="text-xs font-semibold text-zinc-500 bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CALCULATION EXAMPLE */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Worked example</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                What a Ghana tax invoice looks like.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              A consulting firm raises an invoice for services at GHS 5,000. The firm is VAT-registered under the standard scheme. Here is how the levies are calculated and charged:
            </p>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Tax Invoice — Services rendered</p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  { label: "Net service value", value: "GHS 5,000.00", sub: false },
                  { label: "VAT (15% × GHS 5,000)", value: "GHS 750.00", sub: true },
                  { label: "NHIL (2.5% × GHS 5,000)", value: "GHS 125.00", sub: true },
                  { label: "GETFund (2.5% × GHS 5,000)", value: "GHS 125.00", sub: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between text-sm ${row.sub ? "text-zinc-600" : "font-semibold text-zinc-900"}`}>
                    <span className={row.sub ? "pl-4" : ""}>{row.label}</span>
                    <span className="font-semibold tabular-nums">{row.value}</span>
                  </div>
                ))}
                <div className="h-px bg-zinc-200 my-2" />
                <div className="flex justify-between text-sm font-extrabold text-zinc-900">
                  <span>Total (tax-inclusive)</span>
                  <span className="tabular-nums">GHS 6,000.00</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-zinc-200 bg-white">
                <p className="text-xs text-zinc-500">Each levy must be shown separately on the invoice. They each go to a separate ledger account.</p>
              </div>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              The total tax charge is GHS 1,000 — not &quot;VAT of GHS 1,000&quot; but VAT, NHIL, and GETFund each at their separate rates. These are separate liabilities with separate remittance paths. Treating them as a single number is both incorrect accounting and a compliance risk.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW ACCOUNTING SHOULD RECORD IT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Accounting treatment</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                How the accounting journal entry should look.
              </h2>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              When a taxable invoice is raised, the correct double-entry journal entry has five lines — not two or three. Each levy must be credited to its own account. This is what Finza posts automatically:
            </p>
            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Journal Entry — Invoice raised: GHS 5,000 service</p>
              </div>
              <div className="p-6 space-y-1">
                <div className="grid grid-cols-3 text-xs font-bold text-zinc-400 pb-3 border-b border-zinc-100 mb-3">
                  <span>Account</span>
                  <span className="text-center">Debit (Dr)</span>
                  <span className="text-right">Credit (Cr)</span>
                </div>
                {[
                  { account: "Accounts Receivable", dr: "GHS 6,000.00", cr: "", note: "Total amount owed by client" },
                  { account: "Revenue — Services", dr: "", cr: "GHS 5,000.00", note: "Net service value" },
                  { account: "VAT Output (15%)", dr: "", cr: "GHS 750.00", note: "Liability to GRA" },
                  { account: "NHIL Payable (2.5%)", dr: "", cr: "GHS 125.00", note: "Liability to NHIA" },
                  { account: "GETFund Payable (2.5%)", dr: "", cr: "GHS 125.00", note: "Liability to GETFund" },
                ].map((row) => (
                  <div key={row.account} className="grid grid-cols-3 text-sm py-2 border-b border-zinc-50">
                    <div>
                      <span className="text-zinc-700">{row.account}</span>
                      <p className="text-xs text-zinc-400 mt-0.5">{row.note}</p>
                    </div>
                    <span className="text-center font-semibold text-blue-700 pt-1">{row.dr}</span>
                    <span className="text-right font-semibold text-zinc-600 pt-1">{row.cr}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 text-sm pt-3 font-extrabold text-zinc-900">
                  <span>Total</span>
                  <span className="text-center">GHS 6,000.00</span>
                  <span className="text-right">GHS 6,000.00</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-zinc-200 bg-zinc-50">
                <p className="text-xs text-zinc-500">Finza posts this entry automatically when you raise the invoice. No manual accounting step required.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINZA HANDLES ALL THREE */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How Finza handles Ghana tax</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                All three levies — handled correctly at every transaction.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Calculated at the point of transaction",
                  body: "When you raise an invoice or record a POS sale in Finza, VAT, NHIL, and GETFund are calculated on the taxable amount immediately. You do not calculate tax at period end — it is already done.",
                },
                {
                  title: "Posted to separate ledger accounts",
                  body: "Each levy is posted to its own liability account. VAT Output, NHIL Payable, and GETFund Payable are three distinct accounts in the general ledger. They are never combined or bundled.",
                },
                {
                  title: "GRA-ready VAT report always current",
                  body: "Your VAT control account shows every output VAT entry and every input VAT entry — from the first transaction to the most recent. The report is available for any period, at any time. At filing time, the report is ready. There is no manual assembly step.",
                },
                {
                  title: "Input tax tracked on purchases",
                  body: "When you record a taxable purchase, input VAT is posted to an Input VAT account. Effective 1 January 2026, NHIL and GETFund are also treated as input tax deductions under Ghana's revised framework — and are tracked accordingly. The net position for each levy is always visible. You know exactly what you owe to GRA at any point in time.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
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
      <section className="py-16 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Related</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "VAT software Ghana", desc: "VAT software for Ghanaian businesses", href: "/vat-software-ghana" },
                { label: "Invoice software", desc: "Invoicing with automatic VAT", href: "/invoice-software-ghana" },
                { label: "Accounting software Ghana", desc: "Full accounting system", href: "/accounting-software-ghana" },
                { label: "For accountants", desc: "Professional workspace", href: "/accountants" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors">
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
              Ghana VAT handled correctly — automatically.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              VAT, NHIL, and GETFund calculated and separated at every transaction. GRA-ready reports always available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href="/pricing" className="rounded-md bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors w-full sm:w-auto text-center">
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

      <RelatedClusterLinks
        related={[
          { href: "/how-vat-works-ghana", label: "How VAT works", desc: "Ghana overview" },
          { href: "/vat-software-ghana", label: "VAT software", desc: "Product angle" },
        ]}
      />
      <Footer />
    </main>
  );
}
