import Link from "next/link";

const TEMPLATE_HREF = "/templates/ghana-invoice-template.csv";

const PREVIEW_LINES = [
  { description: "Site consultation", qty: "1", price: "800.00", amount: "800.00" },
  { description: "Installation labour", qty: "2", price: "1,200.00", amount: "2,400.00" },
  { description: "Materials", qty: "1", price: "950.00", amount: "950.00" },
] as const;

export function GhanaInvoiceTemplateLead() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
        Download the free Ghana invoice template
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600">
        The template opens in <strong className="font-semibold text-zinc-900">Microsoft Excel</strong>{" "}
        and can also be imported into{" "}
        <strong className="font-semibold text-zinc-900">Google Sheets</strong>. It is set up for{" "}
        <strong className="font-semibold text-zinc-900">Ghana cedis (GHS)</strong> and includes space
        for business details, customer details, invoice number, dates, line items, payment
        instructions, and optional tax or levy lines.
      </p>
      <GhanaInvoiceDownloadCard />
      <GhanaInvoicePreview />
    </section>
  );
}

export function GhanaInvoiceDownloadCard() {
  return (
    <div className="mt-6 flex flex-col gap-5 rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          FREE DOWNLOAD
        </p>
        <p className="mt-1.5 text-lg font-bold text-zinc-900">Ghana Invoice Template</p>
        <p className="mt-1 text-sm leading-6 text-zinc-600">
          Works with Microsoft Excel and Google Sheets
        </p>
      </div>
      <div className="shrink-0 sm:text-right">
        <a
          href={TEMPLATE_HREF}
          download
          className="inline-flex w-full items-center justify-center rounded-md bg-[#0F172A] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0F172A]/90 sm:w-auto"
        >
          Download invoice template
        </a>
        <p className="mt-2 text-center text-xs text-zinc-500 sm:text-right">No signup required</p>
      </div>
    </div>
  );
}

export function GhanaInvoicePreview() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          Template preview
        </p>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-zinc-900">North Ridge Services</p>
            <p className="mt-1 text-sm text-zinc-500">Accra, Ghana</p>
          </div>
          <div className="text-sm sm:text-right">
            <p className="font-semibold text-zinc-900">Invoice # INV-0042</p>
            <p className="mt-1 text-zinc-500">Date: 12 Apr 2026</p>
          </div>
        </div>

        <div className="mt-4 border-t border-zinc-100 pt-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Customer</p>
          <p className="mt-1 font-medium text-zinc-900">Ridge Office Fit-out Ltd</p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-left text-xs font-bold uppercase tracking-wide text-zinc-500">
                <th className="py-2 pr-3 font-bold">Description</th>
                <th className="py-2 px-3 text-right font-bold">Qty</th>
                <th className="py-2 px-3 text-right font-bold">Unit price</th>
                <th className="py-2 pl-3 text-right font-bold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {PREVIEW_LINES.map((line) => (
                <tr key={line.description} className="border-b border-zinc-100 text-zinc-700">
                  <td className="py-2.5 pr-3">{line.description}</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">{line.qty}</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">GHS {line.price}</td>
                  <td className="py-2.5 pl-3 text-right font-medium tabular-nums text-zinc-900">
                    GHS {line.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 ml-auto max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between text-zinc-600">
            <span>Subtotal</span>
            <span className="tabular-nums">GHS 4,150.00</span>
          </div>
          <div className="flex justify-between text-zinc-600">
            <span>Tax / levy</span>
            <span className="tabular-nums">GHS 0.00</span>
          </div>
          <div className="flex justify-between border-t border-zinc-200 pt-2 font-bold text-zinc-900">
            <span>Total due</span>
            <span className="tabular-nums">GHS 4,150.00</span>
          </div>
        </div>

        <div className="mt-5 border-t border-zinc-100 pt-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Payment details
          </p>
          <p className="mt-1 text-zinc-700">Bank transfer or Mobile Money</p>
          <p className="mt-0.5 text-zinc-500">Reference: INV-0042</p>
        </div>
      </div>
    </div>
  );
}

export function GhanaInvoiceTemplateCta() {
  return (
    <div className="mx-auto max-w-3xl border-t border-zinc-100 px-4 py-10 md:px-0">
      <h2 className="text-lg font-bold leading-snug text-zinc-900">
        Outgrown invoice templates?
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        Create invoices, record payments, issue receipts, and track customer balances in one GHS
        workspace.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/invoicing-software-ghana"
          className="inline-flex items-center justify-center rounded-md bg-[#0F172A] px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0F172A]/90"
        >
          Invoicing software in Ghana
        </Link>
        <Link
          href="/pricing#plans"
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50"
        >
          Compare plans
        </Link>
      </div>
    </div>
  );
}
