import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { RelatedClusterLinks } from "@/components/related-cluster-links";
import { JsonLd } from "@/components/json-ld";
import { PayrollPreview } from "@/components/product-demo/payroll-preview";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";
import {
  PAYROLL_CAPABILITY_GROUPS,
  PAYROLL_H1,
  PAYROLL_OPENING,
  PAYROLL_WORKFLOW_STEPS,
  payrollSoftwareGhanaFaqForSchema,
} from "@/lib/payroll-content";
import { getPlanSignupHref, pricingPlansData } from "@/lib/pricing-plans";
import {
  homePrimaryBtn,
  homeSecondaryBtn,
  sectionLead,
  sectionTitle,
} from "@/components/home/home-ui";

export const metadata: Metadata = {
  title: "Built-in Payroll Software for Ghanaian Businesses",
  description:
    "Manage monthly payroll inside Finza—from salary calculations and approvals to payslips, payment tracking, and accounting records. Available on Professional and Business plans.",
  alternates: {
    canonical: "https://www.finza.africa/payroll-software-ghana",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const starterSignupHref = getPlanSignupHref(pricingPlansData[0].planParam);

export default function PayrollSoftwareGhanaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white max-md:pb-28">
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Payroll software for Ghana", path: "/payroll-software-ghana" },
          ]),
          faqPageSchema(payrollSoftwareGhanaFaqForSchema),
        ]}
      />

      <section className="border-b border-zinc-100 bg-[#FAFAF8] pt-24 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="mx-auto max-w-6xl grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Professional and Business
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                {PAYROLL_H1}
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600">{PAYROLL_OPENING}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={starterSignupHref} className={homePrimaryBtn}>
                  Start free trial
                </a>
                <Link href="/pricing#plans" className={homeSecondaryBtn}>
                  Compare plans
                </Link>
              </div>
              <p className="text-sm text-zinc-500">
                14-day free trial · No card required · Plans in Ghana cedis
              </p>
            </div>
            <PayrollPreview />
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <h2 className={sectionTitle}>From salary calculation to payslip</h2>
            <p className={`${sectionLead} mx-auto max-w-2xl`}>
              {PAYROLL_WORKFLOW_STEPS.join(" → ")}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-zinc-50/80 py-14 md:py-16">
        <Container>
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <h2 className={sectionTitle}>What built-in payroll covers</h2>
              <p className={sectionLead}>
                Monthly payroll in Finza is built for Ghanaian businesses that need
                calculations, payslips, payment tracking, and statutory exports in
                one workspace.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PAYROLL_CAPABILITY_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]"
                >
                  <h3 className="text-base font-bold text-zinc-900">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{group.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 bg-white py-14 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className={sectionTitle}>Common questions</h2>
            <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
              {payrollSoftwareGhanaFaqForSchema.map((item) => (
                <details key={item.questionName} className="group py-4">
                  <summary className="cursor-pointer list-none text-left text-sm font-semibold text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.questionName}
                      <span
                        aria-hidden
                        className="mt-0.5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                      >
                        ▾
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 pr-8 text-sm leading-relaxed text-zinc-600">
                    {item.acceptedAnswerText}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-zinc-800/10 bg-gradient-to-br from-[#0F172A] via-[#0f172a] to-[#1e293b] py-16 text-center sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl space-y-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Run monthly payroll inside Finza
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              Included in Professional and Business. Start a 14-day free trial or
              compare plans in Ghana cedis.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href={starterSignupHref}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-zinc-900 shadow-lg hover:bg-zinc-100"
              >
                Start free trial
              </a>
              <Link
                href="/pricing#plans"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/15"
              >
                Compare plans
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <RelatedClusterLinks
        mode="no-primary"
        related={[
          { href: "/features#payroll-team", label: "Features", desc: "See payroll in the product" },
          { href: "/pricing#plans", label: "Pricing", desc: "Professional and Business" },
          { href: "/accounting-software-ghana", label: "Accounting", desc: "Reports and records" },
        ]}
      />
      <Footer />
    </main>
  );
}
