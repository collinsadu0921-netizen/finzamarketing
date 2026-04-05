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
import { breadcrumbListSchema, faqPageSchema, payrollSoftwareTemaFaqForSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Payroll Software in Tema for PAYE, SSNIT & Payslips | Finza",
  description:
    "Run monthly payroll in Tema with PAYE and SSNIT handling, approved payroll records, and payslips by email or WhatsApp.",
  alternates: {
    canonical: "https://www.finza.africa/payroll-software-tema",
  },
};

export default function PayrollSoftwareTemaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Payroll software in Tema", path: "/payroll-software-tema" },
          ]),
          faqPageSchema(payrollSoftwareTemaFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 pt-28 pb-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Tema · Payroll · PAYE · SSNIT
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Payroll software in Tema for PAYE, SSNIT, and monthly payslips
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              Tema’s economy leans on movement and scale—<strong className="text-zinc-900">logistics and haulage</strong>,{" "}
              <strong className="text-zinc-900">warehousing and distribution</strong>, <strong className="text-zinc-900">industrial maintenance</strong>, and service firms supporting port-side and corridor traffic. More staff and shift-style work mean payroll mistakes show up fast: wrong SSNIT base, PAYE bands applied loosely, or payslips that never leave HR’s inbox. Finza helps{" "}
              <strong className="text-zinc-900">employers in Tema</strong> run a proper monthly cycle—draft review, approval, then payslips your crew can open on email or WhatsApp.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
              Finza does not claim a physical office in Tema; you use the same secure cloud payroll as teams anywhere in Ghana. This page speaks to how payroll pressure tends to show up when operations are busy and headcount is not trivial.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-[#0F172A] px-6 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90"
              >
                Try Finza free
              </a>
              <Link href="/demo" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                See how it works
              </Link>
              <Link href="/pricing" className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                View pricing in GHS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Who we mean</p>
            <h2 className="text-2xl font-bold text-zinc-900">Operations-heavy employers—not desk-only shops</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Categories that commonly need tighter payroll include <strong className="text-zinc-900">fleet and transport coordinators</strong>,{" "}
              <strong className="text-zinc-900">third-party logistics</strong>, <strong className="text-zinc-900">cold-chain and distribution</strong>,{" "}
              <strong className="text-zinc-900">security and facilities contractors</strong>, and <strong className="text-zinc-900">manufacturing support services</strong>. The thread is headcount, overtime, and bonuses that cannot be “eyeballed” on a calculator every month.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The problem</p>
            <h2 className="text-3xl font-bold text-zinc-900">Busy yards still need correct PAYE and SSNIT</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              When dispatch runs late, payroll is easy to postpone—until staff ask for payslips or finance cannot match salary expense to cash out.{" "}
              <strong className="text-zinc-900">Payroll software Tema</strong> buyers usually want one approved run, clear net pay, and records that do not fight the rest of the books. Spreadsheets shared on personal drives are where errors hide.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">The solution</p>
            <h2 className="text-3xl font-bold text-zinc-900">Monthly payroll with Ghana rules—not a generic HR suite</h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Finza supports <strong className="text-zinc-900">PAYE</strong> on progressive bands, <strong className="text-zinc-900">SSNIT</strong> employee and employer contributions from basic salary (per your setup), bonus and overtime where inputs require different treatment, and <strong className="text-zinc-900">approval</strong> before payroll is official. After approval, generate payslips and send by email or WhatsApp. For the full national payroll story, read{" "}
              <Link href="/payroll-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                payroll software Ghana
              </Link>
              —this Tema page is the same product with a local commercial angle.
            </p>
            <p className="text-xs text-zinc-500">
              Finza is not GRA filing software, SSNIT submission software, or bank salary file export unless explicitly shipped; confirm statutory steps with your accountant.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">How it works in practice</p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-600">
              <li>Keep staff salary, allowances, and deductions current before the month closes.</li>
              <li>Open the monthly payroll run and review draft gross, PAYE, SSNIT, and net pay.</li>
              <li>Approve payroll so the run becomes the official record—and can update accounting where your plan allows.</li>
              <li>Generate payslips and send them so drivers, warehouse staff, and office teams see the same numbers.</li>
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-bold text-zinc-900">Built for Ghana payroll workflows</h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              Whether your team is in Tema, Takoradi, or Tamale, you run Ghana payroll in GHS with the same controls. See{" "}
              <Link href="/pricing" className="font-semibold text-zinc-900 underline underline-offset-2">
                pricing in GHS
              </Link>{" "}
              and tie staff costs back to wider books via{" "}
              <Link href="/accounting-software-ghana" className="font-semibold text-zinc-900 underline underline-offset-2">
                accounting software for Ghana
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-zinc-900">Common questions</h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="tema">
                <AccordionTrigger>Does Finza support payroll for employers in Tema?</AccordionTrigger>
                <AccordionContent>
                  Yes. Employers in Tema use the same Ghana payroll product as businesses elsewhere: monthly runs, PAYE and SSNIT based on your setup, approval before payroll is official, and payslips by email or WhatsApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paye">
                <AccordionTrigger>Can Finza calculate PAYE and SSNIT?</AccordionTrigger>
                <AccordionContent>
                  Yes. PAYE follows Ghana progressive bands on taxable income where applicable; SSNIT uses employee and employer contributions from basic salary according to payroll inputs. Confirm final positions with your accountant or the relevant authorities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="payslips">
                <AccordionTrigger>Can I send payslips to employees?</AccordionTrigger>
                <AccordionContent>
                  Yes. After you approve payroll, you can generate payslips and send them by email or WhatsApp so staff see gross pay, deductions, and net pay clearly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accounting">
                <AccordionTrigger>Does payroll connect to accounting records?</AccordionTrigger>
                <AccordionContent>
                  After approval, payroll records are official in Finza and approved payroll can post into accounting so staff costs align with your books—subject to your plan and configuration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="bg-[#0F172A] py-16 text-center">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="text-2xl font-extrabold text-white">Payroll your crew can trust</h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://app.finza.africa/signup?workspace=service&plan=starter&cycle=monthly&trial=1"
                className="rounded-md bg-white px-8 py-3 text-sm font-bold text-zinc-900"
              >
                Try Finza free
              </a>
              <Link href="/payroll-software-ghana" className="rounded-md border border-zinc-500 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Full payroll guide
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/payroll-software-ghana", label: "Payroll Ghana", desc: "PAYE & SSNIT hub" },
          { href: "/invoicing-software-ghana", label: "Invoicing", desc: "Bill in GHS" },
          { href: "/features", label: "Features", desc: "Capabilities" },
        ]}
      />
      <Footer />
    </main>
  );
}
