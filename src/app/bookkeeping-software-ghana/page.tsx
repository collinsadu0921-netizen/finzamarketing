import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  HowFinzaHelpsDayToDay,
  MidPageCtaBand,
  WhyBusinessesChooseFinza,
  WhyBusinessesTrustFinza,
} from "@/components/seo-marketing-blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import {
  bookkeepingSoftwareGhanaFaqForSchema,
  bookkeepingSoftwareGhanaPaaFaqForSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bookkeeping Software in Ghana — Track Expenses & Stay Updated | Finza",
  description:
    "Log spending and sales in GHS every week—not in a December panic. Give your accountant clean activity and stay ready for tax questions. Start free; built for Ghana businesses.",
  alternates: {
    canonical: "https://www.finza.africa/bookkeeping-software-ghana",
  },
};

export default function BookkeepingSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Bookkeeping software for Ghana", path: "/bookkeeping-software-ghana" },
          ]),
          faqPageSchema([...bookkeepingSoftwareGhanaFaqForSchema, ...bookkeepingSoftwareGhanaPaaFaqForSchema]),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Bookkeeping software · Ghana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Bookkeeping software in Ghana—record transactions, track expenses, stay current in GHS
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              <strong className="text-zinc-900">Small businesses in Ghana</strong> stay out of trouble by logging sales and spending as they happen—not only at year-end. Finza helps you <strong className="text-zinc-900">manage business finances in one place</strong> in{" "}
              <strong className="text-zinc-900">Ghana cedis (GHS)</strong>, with room for your accountant to review without rebuilding your week from receipts.
            </p>
            <p className="max-w-2xl text-sm text-zinc-500">
              Finza bookkeeping ties into{" "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                invoicing
              </Link>{" "}
              and{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software Ghana
              </Link>{" "}
              so you do not maintain three parallel lists.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                View pricing in GHS
              </Link>
              <Link href="/features" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                Features
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold text-zinc-900">Transactions pile up until someone has a crisis day</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              If your accountant asks for data you do not have ready, the root cause is often here: money moves through MoMo, bank, and cash. Expenses sit on personal cards. By month-end nobody knows which GHS belongs to the business. That is not a discipline failure—it is what happens without a simple daily habit and one place to put it.
            </p>
          </div>
        </Container>
      </section>

      <MidPageCtaBand title="Spend 30 minutes this week—save days at year-end." className="bg-white py-10" />

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Record as you go—expenses, sales, and payments in GHS</h2>
            <p className="text-lg font-semibold leading-relaxed text-zinc-900">
              What you log each week is the same activity your accounting views use—no second rebuild before the accountant visits.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza is built so routine activity takes minutes: what came in, what went out, and who it was for. Categories stay consistent so your accountant recognizes them. Tax-related amounts can appear on activity <strong className="text-zinc-900">where applicable</strong>—your registration and supply type decide what applies. When you need profit and tax summaries—not only a list of entries—pair this habit with{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              . For outflows-only discipline, see{" "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                expense tracking software Ghana
              </Link>
              .
            </p>
            <p className="text-sm font-medium text-zinc-600">
              Designed for how businesses actually operate in Ghana—quick MoMo entries, cash spends, and weekly discipline instead of December panic.
            </p>
            <p className="text-sm text-zinc-500">
              Under the hood, Finza keeps entries structured so your reports and summaries stay aligned with what you recorded—without you thinking like an accountant.
            </p>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it works in practice</p>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-600">
                <li>Pick a fixed weekly slot—same day, same thirty minutes.</li>
                <li>Enter sales and expenses while you still remember the receipt—not from memory in April.</li>
                <li>Tag items the way your accountant expects (no mystery “misc”).</li>
                <li>Match bank and MoMo hits to what you already logged so GHS cash is real.</li>
              </ol>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                What you log is what rolls into accounting views—Finza keeps the thread so you are not re-keying the same week twice.
              </p>
            </div>
            <div className="grid gap-6 border-t border-zinc-200 pt-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What stays in sync</p>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-600">
                  <li>Weekly entries feed the same file your accountant reviews</li>
                  <li>Changes stay traceable instead of silent overwrites in a sheet</li>
                  <li>Invoices and payments you record here match the story in reports</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza helps you avoid</p>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-600">
                  <li>Year-end archaeology to find missing GHS</li>
                  <li>Personal and business spend mixed without you noticing</li>
                  <li>Profit guesses because nothing was captured on time</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Stay current every week</p>
            <h2 className="text-3xl font-bold text-zinc-900">A weekly rhythm beats a monthly panic</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Block thirty minutes: capture new expenses, confirm sales, reconcile what hit the bank. When you stay current every week in <strong className="text-zinc-900">GHS</strong>, month-end is a short review—not a forensic project. <strong className="text-zinc-900">Accountants managing clients</strong> get files they can actually sign off.
            </p>
            <ul className="space-y-2 text-zinc-600">
              <li>✓ Less “where did this GHS go?” at the wrong time</li>
              <li>✓ Cleaner handover for tax and filing conversations</li>
              <li>✓ Owners see a truer picture of cash and spending</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">Related</p>
            <p className="mt-2">
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline">
                Accounting software Ghana
              </Link>
              {" · "}
              <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                Expense tracking Ghana
              </Link>
              {" · "}
              <Link href="/invoicing-software-ghana" className="font-semibold text-zinc-900 underline">
                Invoicing software Ghana
              </Link>
              {" · "}
              <Link href="/quotation-software-ghana" className="font-semibold text-zinc-900 underline">
                Quotation software Ghana
              </Link>
              {" · "}
              <Link href="/blog" className="font-semibold text-zinc-900 underline">
                Blog
              </Link>
              {" · "}
              <Link href="/bookkeeping-for-small-business-ghana" className="font-semibold text-zinc-900 underline">
                Bookkeeping for small business (habit guide)
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions about bookkeeping software in Ghana</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="paa-what-bk">
                <AccordionTrigger>What does bookkeeping software do for a small business?</AccordionTrigger>
                <AccordionContent>
                  It captures sales, expenses, and payments as they happen in GHS, keeps categories consistent, and gives your accountant organized activity instead of year-end panic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-often">
                <AccordionTrigger>How often should I update my books in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Weekly works for most SMEs—short sessions beat marathon catch-ups. Use a simple checklist from our{" "}
                  <Link href="/blog/bookkeeping-checklist-ghana" className="font-semibold text-zinc-900 underline">
                    bookkeeping checklist
                  </Link>{" "}
                  article.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-exp">
                <AccordionTrigger>Can I track expenses with bookkeeping software?</AccordionTrigger>
                <AccordionContent>
                  Yes. Record receipts, supplier bills, and outflows with labels your accountant recognizes. See also{" "}
                  <Link href="/expense-tracking-software-ghana" className="font-semibold text-zinc-900 underline">
                    expense tracking software Ghana
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paa-connect">
                <AccordionTrigger>Does bookkeeping connect to accounting and invoicing?</AccordionTrigger>
                <AccordionContent>
                  In Finza, daily recording supports invoicing and full accounting views—one stack instead of three files.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">More questions about Finza</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="week">
                <AccordionTrigger>What does bookkeeping software help me do each week?</AccordionTrigger>
                <AccordionContent>
                  Record sales and expenses as they happen, categorize spending, and stay current in GHS—so you are not catching up only at month-end.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="small">
                <AccordionTrigger>How do small businesses in Ghana stay current?</AccordionTrigger>
                <AccordionContent>
                  Use one place for money in and out, reconcile regularly, and keep receipts organized. Finza keeps activity together instead of splitting it across apps and sheets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax">
                <AccordionTrigger>Does bookkeeping include tax visibility?</AccordionTrigger>
                <AccordionContent>
                  You can see tax-related amounts on activity where applicable. Filing positions depend on your business—your accountant confirms what applies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accountant">
                <AccordionTrigger>Can my accountant review my bookkeeping in Finza?</AccordionTrigger>
                <AccordionContent>
                  Yes. Accountants managing clients save time when daily recording already happened in a structured system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <WhyBusinessesTrustFinza className="bg-white" />

      <WhyBusinessesChooseFinza />

      <HowFinzaHelpsDayToDay className="bg-zinc-50" />

      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-3xl font-extrabold text-white">Stay current in GHS—not only at year-end</h2>
            <p className="text-sm text-zinc-400">Built for the Ghana market</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1" className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900">
                Try Finza free
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                See how it works
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        related={[
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports & tax summaries" },
          { href: "/features", label: "Features", desc: "What Finza includes" },
        ]}
      />
      <Footer />
    </main>
  );
}
