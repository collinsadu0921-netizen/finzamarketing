import Image from "next/image";

const floatingCards = [
  { label: "Invoice Sent", tone: "bg-sky-500", position: "left-3 top-10 lg:left-4 lg:top-10", delay: "0s", visibility: "hidden md:flex" },
  { label: "Quote Approved", tone: "bg-emerald-500", position: "right-3 top-8 lg:right-4 lg:top-8", delay: "0.2s", visibility: "hidden md:flex" },
  { label: "Payment Received", tone: "bg-violet-500", position: "left-4 bottom-18 lg:left-5 lg:bottom-24", delay: "0.4s", visibility: "hidden lg:flex" },
  { label: "Expense Recorded", tone: "bg-amber-500", position: "right-4 bottom-20 lg:right-5 lg:bottom-24", delay: "0.6s", visibility: "hidden lg:flex" },
  { label: "WhatsApp Delivery", tone: "bg-teal-500", position: "left-1/2 -translate-x-1/2 top-3", delay: "0.8s", visibility: "flex" },
  { label: "Tax Summary", tone: "bg-indigo-500", position: "right-1/2 translate-x-1/2 bottom-3", delay: "1s", visibility: "hidden md:flex" },
  { label: "Payroll Run", tone: "bg-pink-500", position: "left-1/2 -translate-x-1/2 bottom-12", delay: "1.2s", visibility: "hidden md:flex" },
];

export function AnimatedDashboardHero() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-4">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:14px_14px]" />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1200 700"
      >
        <path d="M80 220 C300 120 520 260 740 170 C900 105 1040 145 1120 210" stroke="#cbd5e1" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
        <path d="M120 520 C310 430 560 550 820 470 C960 430 1060 470 1130 540" stroke="#dbeafe" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
      </svg>

      <div className="relative rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-[0_10px_35px_rgba(15,23,42,0.1)] sm:p-2.5">
        <Image
          src="/images/Dashboard image for the website.png"
          alt="Finza dashboard preview with service-business records and invoice workflow"
          width={1600}
          height={1000}
          priority
          quality={100}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1100px"
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>

      {floatingCards.map((card) => (
        <div
          key={card.label}
          className={`hero-card ${card.position} ${card.visibility} absolute items-center gap-2 rounded-2xl border border-zinc-200 bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur`}
          style={{ animationDelay: card.delay }}
        >
          <span className={`${card.tone} hero-glow h-2.5 w-2.5 rounded-full`} />
          <span>{card.label}</span>
        </div>
      ))}
    </div>
  );
}

