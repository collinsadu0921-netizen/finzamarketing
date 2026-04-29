"use client";

import { useMemo, useState } from "react";

type LineItem = {
  id: number;
  description: string;
  quantity: string;
  unitPrice: string;
};

type TaxMode = "none" | "vat_bundle";
const VAT_RATE = 0.15;
const NHIL_RATE = 0.025;
const GETFUND_RATE = 0.025;
const TOTAL_TAX_RATE = VAT_RATE + NHIL_RATE + GETFUND_RATE;

function toNumber(value: string) {
  const n = parseFloat(value.replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function money(value: number) {
  return value.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function InvoiceCalculatorGhana() {
  const [businessName, setBusinessName] = useState("Your Service Business");
  const [customerName, setCustomerName] = useState("Customer Name");
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: "Service line", quantity: "1", unitPrice: "1000" },
  ]);
  const [discount, setDiscount] = useState("0");
  const [taxMode, setTaxMode] = useState<TaxMode>("vat_bundle");
  const [useWht, setUseWht] = useState(false);
  const [whtRate, setWhtRate] = useState("5");
  const [amountPaid, setAmountPaid] = useState("0");

  const totals = useMemo(() => {
    const subtotal = lineItems.reduce((acc, item) => {
      const qty = Math.max(0, toNumber(item.quantity));
      const unit = Math.max(0, toNumber(item.unitPrice));
      return acc + qty * unit;
    }, 0);

    const discountValue = Math.min(Math.max(0, toNumber(discount)), subtotal);
    const discountedTotal = Math.max(0, subtotal - discountValue);

    const taxableBase =
      taxMode === "vat_bundle" ? discountedTotal / (1 + TOTAL_TAX_RATE) : discountedTotal;
    const vat = taxMode === "vat_bundle" ? taxableBase * VAT_RATE : 0;
    const nhil = taxMode === "vat_bundle" ? taxableBase * NHIL_RATE : 0;
    const getfund = taxMode === "vat_bundle" ? taxableBase * GETFUND_RATE : 0;

    // In tax-inclusive mode, gross total is the discounted entered amount.
    const grossTotal = taxMode === "vat_bundle" ? discountedTotal : taxableBase;
    const whtRateValue = Math.max(0, toNumber(whtRate)) / 100;
    const whtDeduction = useWht ? grossTotal * whtRateValue : 0;
    const paid = Math.max(0, toNumber(amountPaid));
    const amountDue = grossTotal - whtDeduction - paid;

    return {
      subtotal,
      discountValue,
      taxableBase,
      vat,
      nhil,
      getfund,
      grossTotal,
      whtDeduction,
      paid,
      amountDue,
    };
  }, [lineItems, discount, taxMode, useWht, whtRate, amountPaid]);

  const addLine = () => {
    setLineItems((prev) => [
      ...prev,
      { id: Date.now(), description: "", quantity: "1", unitPrice: "0" },
    ]);
  };

  const updateLine = (id: number, key: keyof LineItem, value: string) => {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const removeLine = (id: number) => {
    setLineItems((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm space-y-5">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Invoice Inputs
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-zinc-700">
            Business/service name
            <input
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-sm text-zinc-700">
            Customer name
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-zinc-900">Invoice line items</p>
          {lineItems.map((item) => (
            <div
              key={item.id}
              className="grid gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-3 sm:grid-cols-12"
            >
              <input
                value={item.description}
                onChange={(e) => updateLine(item.id, "description", e.target.value)}
                placeholder="Description"
                className="rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-6"
              />
              <input
                value={item.quantity}
                onChange={(e) => updateLine(item.id, "quantity", e.target.value)}
                placeholder="Qty"
                inputMode="decimal"
                className="rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-3"
              />
              <input
                value={item.unitPrice}
                onChange={(e) => updateLine(item.id, "unitPrice", e.target.value)}
                placeholder="Unit price"
                inputMode="decimal"
                className="rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-3"
              />
              {lineItems.length > 1 ? (
                <button
                  type="button"
                  onClick={() => removeLine(item.id)}
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 sm:col-span-12 sm:justify-self-start"
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <button
            type="button"
            onClick={addLine}
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Add line
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-zinc-700">
            Discount (GHS)
            <input
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              inputMode="decimal"
              className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>

          <label className="text-sm text-zinc-700">
            Tax mode
            <select
              value={taxMode}
              onChange={(e) => setTaxMode(e.target.value as TaxMode)}
              className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            >
              <option value="none">No tax</option>
              <option value="vat_bundle">VAT/NHIL/GETFund example</option>
            </select>
          </label>
        </div>

        <div className="rounded-lg border border-zinc-200 p-4 space-y-3">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800">
            <input
              type="checkbox"
              checked={useWht}
              onChange={(e) => setUseWht(e.target.checked)}
            />
            Apply WHT deduction
          </label>
          {useWht ? (
            <label className="text-sm text-zinc-700 block">
              WHT rate (%)
              <input
                value={whtRate}
                onChange={(e) => setWhtRate(e.target.value)}
                inputMode="decimal"
                className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              />
            </label>
          ) : null}
          <label className="text-sm text-zinc-700 block">
            Amount paid (GHS)
            <input
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              inputMode="decimal"
              className="mt-1.5 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Invoice Preview
        </p>
        <div className="rounded-lg border border-zinc-200 overflow-hidden">
          <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3">
            <p className="text-sm font-semibold text-zinc-900">Invoice preview</p>
          </div>
          <div className="p-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">From</span>
              <span className="font-semibold text-zinc-900">{businessName || "—"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Bill to</span>
              <span className="font-semibold text-zinc-900">{customerName || "—"}</span>
            </div>

            <div className="border-t border-zinc-200 pt-3">
              <div className="grid grid-cols-12 text-xs font-bold text-zinc-500 pb-2">
                <span className="col-span-6">Line item</span>
                <span className="col-span-2 text-right">Qty</span>
                <span className="col-span-2 text-right">Unit</span>
                <span className="col-span-2 text-right">Total</span>
              </div>
              <div className="space-y-1">
                {lineItems.map((item) => {
                  const qty = Math.max(0, toNumber(item.quantity));
                  const unit = Math.max(0, toNumber(item.unitPrice));
                  const total = qty * unit;
                  return (
                    <div key={item.id} className="grid grid-cols-12 text-xs text-zinc-700">
                      <span className="col-span-6 truncate">{item.description || "Service line"}</span>
                      <span className="col-span-2 text-right">{qty}</span>
                      <span className="col-span-2 text-right">{money(unit)}</span>
                      <span className="col-span-2 text-right font-semibold">{money(total)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-3 space-y-1">
              <div className="flex justify-between"><span>Subtotal</span><span>GHS {money(totals.subtotal)}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>- GHS {money(totals.discountValue)}</span></div>
              <div className="flex justify-between"><span>VAT</span><span>GHS {money(totals.vat)}</span></div>
              <div className="flex justify-between"><span>NHIL</span><span>GHS {money(totals.nhil)}</span></div>
              <div className="flex justify-between"><span>GETFund</span><span>GHS {money(totals.getfund)}</span></div>
              <div className="flex justify-between"><span>WHT deduction</span><span>- GHS {money(totals.whtDeduction)}</span></div>
              <div className="flex justify-between"><span>Amount paid</span><span>- GHS {money(totals.paid)}</span></div>
              <div className="h-px bg-zinc-200 my-2" />
              <div className="flex justify-between font-extrabold text-zinc-900">
                <span>Balance due</span>
                <span>GHS {money(totals.amountDue)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

