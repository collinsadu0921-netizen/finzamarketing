"use client";

import { useMemo, useState } from "react";

/** Illustrative calculator using standard Ghana headline rates; not tax advice. */
export function GhanaVatCalculator() {
  const [netStr, setNetStr] = useState("1000");

  const net = useMemo(() => {
    const n = parseFloat(netStr.replace(/,/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [netStr]);

  const vat = net * 0.15;
  const nhil = net * 0.025;
  const getfund = net * 0.025;
  const gross = net + vat + nhil + getfund;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Example calculation
      </p>
      <p className="mt-2 text-sm text-zinc-600">
        Net amount (GHS, before levies). Rates shown: VAT 15%, NHIL 2.5%, GETFund
        2.5% on the net base — illustrative for planning; your registered treatment
        may differ by supply type.
      </p>
      <label className="mt-4 block text-sm font-medium text-zinc-700">
        Net amount (GHS)
        <input
          type="text"
          inputMode="decimal"
          value={netStr}
          onChange={(e) => setNetStr(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
      </label>
      <div className="mt-6 space-y-2 border-t border-zinc-100 pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-600">VAT (15%)</span>
          <span className="font-semibold tabular-nums text-zinc-900">
            GHS {vat.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-600">NHIL (2.5%)</span>
          <span className="font-semibold tabular-nums text-zinc-900">
            GHS {nhil.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-600">GETFund (2.5%)</span>
          <span className="font-semibold tabular-nums text-zinc-900">
            GHS {getfund.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-t border-zinc-100 pt-2 text-base">
          <span className="font-bold text-zinc-900">Total with levies</span>
          <span className="font-extrabold tabular-nums text-zinc-900">
            GHS {gross.toFixed(2)}
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        Effective 1 January 2026, NHIL and GETFund follow Ghana&apos;s revised VAT
        framework including input tax deduction treatment — track inputs and outputs
        separately in your ledger.
      </p>
    </div>
  );
}
