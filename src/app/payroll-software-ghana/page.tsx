import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, faqPageSchema, payrollSoftwareGhanaFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Payroll Software in Ghana for PAYE, SSNIT & Payslips | Finza",
  description:
    "Run monthly payroll in Ghana with PAYE and SSNIT handling, bonus and overtime support, approved payroll records, and payslips by email or WhatsApp.",
  alternates: {
    canonical: "https://www.finza.africa/payroll-software-ghana",
  },
};

const handles = [
  {
    title: "Monthly payroll runs",
    body: "Run payroll around your calendar month so gross pay, deductions, and net pay stay organized in one place.",
  },
  {
    title: "Active staff profiles",
    body: "Keep salary, allowances, and deductions on staff records so each run starts from information you already maintain.",
  },
  {
    title: "PAYE calculations",
    body: "PAYE follows Ghana progressive bands on taxable income, based on gross pay and applicable deductions where they apply.",
  },
  {
    title: "SSNIT employee and employer",
    body: "Employee and employer SSNIT contributions are calculated from basic salary according to your payroll setup.",
  },
  {
    title: "Bonus handling",
    body: "Include bonuses in the run with treatment that can differ from regular pay depending on the payroll case and inputs.",
  },
  {
    title: "Overtime handling",
    body: "Record overtime so it can follow the right tax treatment for that payroll—separate from regular salary where the setup requires it.",
  },
  {
    title: "Net pay",
    body: "See net pay after PAYE, SSNIT, and other deductions so you know what staff should receive.",
  },
  {
    title: "Approval before payroll is official",
    body: "Review draft totals, then approve payroll so the run becomes the record your team relies on.",
  },
  {
    title: "Payslips by email or WhatsApp",
    body: "After approval, generate payslips and send them through channels people already check every day.",
  },
  {
    title: "Salary advances and repayments",
    body: "Record advances and track repayment against payroll so nothing disappears into informal notes.",
  },
  {
    title: "Role-based payroll permissions",
    body: "Give the right people view, run creation, approval, or payslip access—without sharing one generic login.",
  },
];

const avoid = [
  "Calculating SSNIT on the wrong salary base",
  "Treating bonus and overtime like ordinary salary when the rules call for something different",
  "Changing payroll after approval without proper controls",
  "Month-end numbers in spreadsheets that do not match what finance booked",
  "Manually building every payslip in Word or PDF",
];

export default function PayrollSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Payroll software for Ghana", path: "/payroll-software-ghana" },
          ]),
          faqPageSchema(payrollSoftwareGhanaFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Ghana payroll · PAYE · SSNIT · Payslips
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Payroll software in Ghana for PAYE, SSNIT, and monthly payslips
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              Run monthly payroll in Ghana with clearer PAYE and SSNIT calculations, bonus and overtime handling, approved payroll
              records, and payslips your team can receive by email or WhatsApp.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              Finza focuses on payroll calculation, records, approval, payslip delivery, and how payroll connects to your
              books—not a full HR system and not global payroll.
            </p>
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                View pricing in GHS
              </Link>
              <a
                href="#how-payroll-works"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                See how payroll works
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Payroll gets risky when the rules are handled manually</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Many Ghana teams still run <strong className="text-zinc-900">monthly payroll</strong> in spreadsheets. PAYE bands are easy
              to misapply, <strong className="text-zinc-900">SSNIT</strong> is sometimes calculated on the wrong base, and bonus or{" "}
              <strong className="text-zinc-900">overtime</strong> does not always get the same tax treatment as basic salary. Totals
              handed to finance may not match what accounting recorded.{" "}
              <strong className="text-zinc-900">Payslip software</strong> should not mean rebuilding every slip by hand each month.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Payroll built for how Ghana businesses actually operate</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza helps you run <strong className="text-zinc-900">one payroll per month</strong> with{" "}
              <strong className="text-zinc-900">PAYE payroll Ghana</strong> logic and{" "}
              <strong className="text-zinc-900">SSNIT payroll software Ghana</strong> expectations in mind: employee and employer
              contributions based on <strong className="text-zinc-900">basic salary</strong> (where your setup applies), bonus and
              overtime handled with the right separation <strong className="text-zinc-900">where applicable</strong>, a clear approval
              step before payroll is official, and <strong className="text-zinc-900">payslips</strong> generated after approval—not
              before.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              The goal is practical control: fewer surprises for staff, fewer arguments with finance, and{" "}
              <strong className="text-zinc-900">payroll posting to accounting</strong> so your records match what you approved. Bonus
              and overtime tax in Ghana can be handled with separate treatment where the payroll case calls for it—not one blanket rule
              for every line. If you need <strong className="text-zinc-900">payroll software with payslips</strong> in Ghana, delivery by
              email or WhatsApp sits in the same flow after approval.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What Finza handles</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Ghana payroll software for the monthly cycle</h2>
              <p className="max-w-2xl text-base text-zinc-600">
                If you are comparing <strong className="text-zinc-900">payroll software Ghana</strong> options, these are the payroll
                jobs Finza is designed for—without promising features we do not ship.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {handles.map((item) => (
                <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold text-zinc-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ghana rules, explained plainly</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Built for Ghana PAYE and SSNIT rules</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-zinc-600">
              <li>
                <strong className="text-zinc-900">SSNIT</strong> uses employee and employer contributions worked from{" "}
                <strong className="text-zinc-900">basic salary</strong>, based on the payroll setup and staff profile.
              </li>
              <li>
                <strong className="text-zinc-900">PAYE</strong> follows <strong className="text-zinc-900">progressive tax bands</strong>{" "}
                on taxable income that reflects gross pay and applicable deductions, where they apply.
              </li>
              <li>
                <strong className="text-zinc-900">Bonus and overtime</strong> can follow different tax treatment depending on the
                payroll case, staff type, and how you enter the amounts.
              </li>
              <li>
                Calculations use the <strong className="text-zinc-900">payroll month</strong> as the effective date so the run matches
                the period you are closing.
              </li>
            </ul>
            <p className="text-sm text-zinc-500">
              Finza is not GRA filing software, SSNIT submission software, or bank salary file export unless and until we ship those
              features. Confirm statutory filings and final positions with your accountant and the relevant institutions.
            </p>
          </div>
        </Container>
      </section>

      <section id="how-payroll-works" className="scroll-mt-28 border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Typical workflow</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">How payroll works in practice</h2>
            </div>
            <ol className="list-decimal space-y-6 pl-5 text-base leading-relaxed text-zinc-600">
              <li>
                <strong className="text-zinc-900">Maintain staff salary, allowances, and deductions</strong> so each person&apos;s
                profile matches what you pay in real life.
              </li>
              <li>
                <strong className="text-zinc-900">Create the monthly payroll run</strong> for the period you are processing.
              </li>
              <li>
                <strong className="text-zinc-900">Review draft totals</strong> for gross pay, PAYE, SSNIT, and net pay before anything
                becomes official.
              </li>
              <li>
                <strong className="text-zinc-900">Approve payroll</strong> so records lock in and accounting can update correctly.
              </li>
              <li>
                <strong className="text-zinc-900">Generate and send payslips</strong> by email or WhatsApp so staff see their
                breakdown quickly.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 rounded-xl border border-zinc-200 bg-white px-8 py-10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">What updates for you</p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Totals stay tied to the run you approved</h2>
            <ul className="space-y-3 text-base leading-relaxed text-zinc-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                Payroll totals are calculated from the payroll run—not from a side spreadsheet you hope still matches.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                Approval is the checkpoint: you review before payroll is finalized.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                After approval, payroll can post into accounting so staff costs line up with the rest of your books, where your plan
                supports it.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                Payslips are generated after approval so what staff receive matches the official run.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Risks to remove</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What Finza helps you avoid</h2>
            <ul className="space-y-3">
              {avoid.map((line) => (
                <li key={line} className="flex gap-3 text-base text-zinc-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Salary advances</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Track salary advances without losing control</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When someone takes an advance, it should not live only in someone&apos;s memory or a private sheet. Finza lets you record{" "}
              <strong className="text-zinc-900">salary advances</strong> and track <strong className="text-zinc-900">repayment</strong>{" "}
              against approved or locked payroll so the balance is visible and deductions stay consistent with what leadership agreed.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Access control</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Separate payroll access by responsibility</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Not everyone needs to approve payroll. Finza supports permissions such as{" "}
              <strong className="text-zinc-900">view payroll</strong>, <strong className="text-zinc-900">create runs</strong>,{" "}
              <strong className="text-zinc-900">approve or lock payroll</strong>, and{" "}
              <strong className="text-zinc-900">generate payslips</strong>. Owners can delegate data entry while keeping approval with
              the right people.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-sm text-zinc-600">
            <p className="font-bold text-zinc-900">Related in Finza</p>
            <p className="mt-2 leading-relaxed">
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Accounting software Ghana
              </Link>
              {" · "}
              <Link href="/bookkeeping-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Bookkeeping software Ghana
              </Link>
              {" · "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                Pricing in GHS
              </Link>
              {" · "}
              <Link href="/best-accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                Best accounting software Ghana
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="ghana">
                <AccordionTrigger>Does Finza support payroll for businesses in Ghana?</AccordionTrigger>
                <AccordionContent>
                  Yes. Finza is built for Ghana payroll: monthly payroll runs, PAYE and SSNIT calculations based on your payroll
                  setup, approval before payroll becomes official, and payslips you can share by email or WhatsApp—without positioning
                  the product as a full HR suite or global payroll.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paye-ssnit">
                <AccordionTrigger>Does Finza calculate PAYE and SSNIT?</AccordionTrigger>
                <AccordionContent>
                  Yes. PAYE follows Ghana progressive tax bands on taxable income from gross pay and applicable deductions, where
                  applicable. SSNIT uses employee and employer contributions based on basic salary, according to the payroll inputs
                  and staff type. Calculations use the payroll month as the effective date. Confirm final positions with your
                  accountant or the relevant authorities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="bonus-ot">
                <AccordionTrigger>Can Finza handle bonus and overtime in payroll?</AccordionTrigger>
                <AccordionContent>
                  Yes. Bonus and overtime can be included in the payroll run, with tax treatment that can differ depending on the
                  payroll case and how items are entered. Your setup and inputs determine how they flow—work with your accountant
                  where you are unsure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="payslips">
                <AccordionTrigger>Can I send payslips to employees?</AccordionTrigger>
                <AccordionContent>
                  Yes. After payroll is approved, you can generate payslips and send them through channels your team already uses—email
                  or WhatsApp—so staff receive a clear breakdown without manual document prep for every person.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accounting">
                <AccordionTrigger>Does payroll update accounting records?</AccordionTrigger>
                <AccordionContent>
                  After you approve payroll, records become official in Finza and totals are calculated from the approved run. Approved
                  payroll can post into accounting so staff costs stay aligned with your books—subject to your plan and configuration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="advances">
                <AccordionTrigger>Can I track salary advances?</AccordionTrigger>
                <AccordionContent>
                  Yes. Salary advances can be recorded and repayment tracked against approved or locked payroll so advances are visible
                  in the system instead of handled off-book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="permissions">
                <AccordionTrigger>Can different team members have different payroll permissions?</AccordionTrigger>
                <AccordionContent>
                  Yes. Role-based payroll permissions let you separate who can view payroll, create runs, approve or lock payroll, and
                  generate payslips—so owners can delegate work without giving everyone approval control.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Run Ghana payroll with clearer control</h2>
            <p className="text-base text-zinc-400">
              PAYE, SSNIT, payslips, and records that can line up with your accounting—without spreadsheet guesswork.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900 shadow-sm hover:bg-zinc-100"
              >
                Try Finza free
              </a>
              <Link href="/pricing" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View pricing in GHS
              </Link>
              <a
                href="#how-payroll-works"
                className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how payroll works
              </a>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/accounting-software-ghana", label: "Accounting Ghana", desc: "Full product overview" },
          { href: "/bookkeeping-software-ghana", label: "Bookkeeping", desc: "Daily records in GHS" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Bill clients online" },
        ]}
      />
      <Footer />
    </main>
  );
}
