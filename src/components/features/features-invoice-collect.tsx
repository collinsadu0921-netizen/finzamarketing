import { Check, FileText } from "lucide-react";
import { sectionLead, sectionTitle } from "@/components/home/home-ui";

const STAGES = [
  {
    label: "Create",
    body: "Customer details, dates, line items, discounts, Ghana tax, and withholding tax.",
  },
  {
    label: "Send",
    body: "PDF, email, WhatsApp, or a tokenised public link, with recurring billing for repeat work.",
  },
  {
    label: "Track",
    body: "Invoice status, balances, and part payments stay visible against the same record.",
  },
] as const;

const CAPABILITIES = [
  "Proposals, quotes, estimates, and proformas",
  "Invoices with due dates and Ghana tax lines",
  "Recurring invoices for repeat billing",
  "A reusable services catalogue",
  "Foreign-currency invoice entry with books in GHS",
  "PDF, email, WhatsApp, and public links",
] as const;

export function FeaturesInvoiceCollectExperience() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
      <header className="space-y-4">
        <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-950">
          Sales &amp; invoicing
        </span>
        <h2 className={sectionTitle}>
          Move from proposal to invoice without rebuilding the details.
        </h2>
        <p className={sectionLead}>
          Build proposals, quotes, estimates, proformas, and invoices with clear
          pricing, due dates, and Ghana tax lines. Share them the way your
          customers already work.
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
          <span>Proposal</span>
          <span aria-hidden>→</span>
          <span>Quote</span>
          <span aria-hidden>→</span>
          <span>Estimate</span>
          <span aria-hidden>→</span>
          <span>Proforma</span>
          <span aria-hidden>→</span>
          <span>Invoice</span>
        </p>
        <span className="inline-flex rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">
          Essentials
        </span>
      </header>

      <div className="space-y-6">
        <ol className="divide-y divide-zinc-200 border-y border-zinc-200">
          {STAGES.map((stage, index) => (
            <li
              key={stage.label}
              className="grid gap-1.5 py-3.5 sm:grid-cols-[4.5rem_1fr] sm:gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-400">
                  0{index + 1}
                </span>
                <span className="text-sm font-bold text-zinc-900">
                  {stage.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>

        <ul className="grid gap-x-6 gap-y-2 text-sm text-zinc-700 sm:grid-cols-2">
          {CAPABILITIES.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <FileText className="h-3.5 w-3.5 text-amber-700" aria-hidden />
          One document record from first quote to final invoice.
        </p>
      </div>
    </div>
  );
}
