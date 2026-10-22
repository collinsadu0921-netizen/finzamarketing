"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { homePrimaryBtn, siteFormInput } from "@/components/home/home-ui";
import { trackFinzaEvent } from "@/lib/analytics";
import type { TrialPlacement } from "@/lib/trial-request";

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "primaryNeed"
  | "role"
  | "businessType"
  | "teamSize"
  | "context"
  | "consent";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  primaryNeed: string;
  role: string;
  businessType: string;
  teamSize: string;
  context: string;
  consent: boolean;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  primaryNeed: "",
  role: "",
  businessType: "",
  teamSize: "",
  context: "",
  consent: false,
};

const BUSINESS_TYPES = [
  "Retail or wholesale",
  "Construction or trades",
  "Manufacturing or production",
  "Technology or media",
  "Hospitality or food",
  "Transport or logistics",
  "Another type of business",
] as const;

const TEAM_SIZES = ["Just me", "2–5 people", "6–15 people", "16 or more"] as const;

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid work email address.";
  }
  if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone or WhatsApp number we can reach you on.";
  }
  if (values.company.trim().length < 2) {
    errors.company = "Enter your business or company name.";
  }
  if (values.primaryNeed.trim().length < 10) {
    errors.primaryNeed =
      "Tell us a little about your business need or the capabilities you want to explore (at least 10 characters).";
  }
  if (!values.consent) {
    errors.consent = "Please confirm that Finza may use these details to respond to your request.";
  }

  return errors;
}

export function GuidedTrialForm({ placement }: { placement: TrialPlacement }) {
  const uid = useId();
  const fieldId = (name: FieldName) => `${uid}-${name}`;
  const errorId = (name: FieldName) => `${uid}-${name}-error`;

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [formError, setFormError] = useState("");
  const startedTrackedRef = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submittedRef = useRef(false);

  useEffect(() => {
    if (status === "ok") {
      successRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      summaryRef.current?.focus();
    }
  }, [errors]);

  function markStarted() {
    if (!startedTrackedRef.current) {
      startedTrackedRef.current = true;
      trackFinzaEvent("guided_trial_form_start", { cta_placement: placement });
    }
  }

  function update<K extends keyof FormValues>(name: K, value: FormValues[K]) {
    markStarted();
    setValues((current) => ({ ...current, [name]: value }));
    if (name !== "role" && name !== "businessType" && name !== "teamSize" && name !== "context") {
      setErrors((current) => {
        if (!current[name as FieldName]) return current;
        const next = { ...current };
        delete next[name as FieldName];
        return next;
      });
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittedRef.current || status === "sending" || status === "ok") {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError("");

    if (Object.keys(nextErrors).length > 0) {
      trackFinzaEvent("guided_trial_form_error", {
        cta_placement: placement,
        stage: "validation",
      });
      return;
    }

    submittedRef.current = true;
    setStatus("sending");
    trackFinzaEvent("guided_trial_form_submit", { cta_placement: placement });

    const form = event.currentTarget;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "guided_trial_request",
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          primary_need: values.primaryNeed.trim(),
          role: values.role.trim(),
          business_type: values.businessType,
          team_size: values.teamSize,
          context: values.context.trim(),
          placement,
          privacy_consent: values.consent,
          website: (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "",
        }),
      });

      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        submittedRef.current = false;
        setFormError(
          json.error ??
            "We could not send your request. Please try again, or email hello@finza.africa."
        );
        setStatus("err");
        trackFinzaEvent("guided_trial_form_error", {
          cta_placement: placement,
          stage: "server",
        });
        return;
      }

      setStatus("ok");
      trackFinzaEvent("guided_trial_form_success", { cta_placement: placement });
    } catch {
      submittedRef.current = false;
      setFormError(
        "Network error. Please check your connection and try again, or email hello@finza.africa."
      );
      setStatus("err");
      trackFinzaEvent("guided_trial_form_error", {
        cta_placement: placement,
        stage: "network",
      });
    }
  }

  if (status === "ok") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 outline-none sm:p-8"
      >
        <h3 className="text-lg font-bold text-emerald-950">Your request is in.</h3>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900">
          The Finza team will contact you using the details you provided to understand your
          business and take you through Finza. Keep an eye on your email and phone.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900">
          If your plans change, you can reach us at{" "}
          <a
            href="mailto:hello@finza.africa"
            className="font-semibold underline underline-offset-2"
          >
            hello@finza.africa
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div
        ref={summaryRef}
        tabIndex={-1}
        aria-live="assertive"
        className="outline-none"
      >
        {Object.keys(errors).length > 0 ? (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <p className="font-semibold">Please check the highlighted fields.</p>
            <p className="mt-1">
              Your request has not been sent yet. Fix the fields below and submit again.
            </p>
          </div>
        ) : null}
      </div>

      {status === "err" && formError ? (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {formError}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("name")} className="block text-sm font-medium text-zinc-700">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={siteFormInput}
          />
          {errors.name ? (
            <p id={errorId("name")} className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldId("email")} className="block text-sm font-medium text-zinc-700">
            Work email <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            maxLength={200}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={siteFormInput}
          />
          {errors.email ? (
            <p id={errorId("email")} className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldId("phone")} className="block text-sm font-medium text-zinc-700">
            Phone or WhatsApp <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            maxLength={40}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={siteFormInput}
          />
          {errors.phone ? (
            <p id={errorId("phone")} className="mt-1.5 text-sm text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldId("company")} className="block text-sm font-medium text-zinc-700">
            Business or company name <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            required
            autoComplete="organization"
            maxLength={200}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? errorId("company") : undefined}
            className={siteFormInput}
          />
          {errors.company ? (
            <p id={errorId("company")} className="mt-1.5 text-sm text-red-700">
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("primaryNeed")} className="block text-sm font-medium text-zinc-700">
          Primary business need or capabilities of interest <span className="text-red-600">*</span>
        </label>
        <p id={`${uid}-primaryNeed-hint`} className="mt-1 text-xs leading-relaxed text-zinc-500">
          For example: invoicing and payment tracking, quotes, expenses and supplier bills, payroll,
          reports, Ghana tax lines, or accountant review.
        </p>
        <textarea
          id={fieldId("primaryNeed")}
          name="primary_need"
          required
          rows={4}
          maxLength={2000}
          value={values.primaryNeed}
          onChange={(event) => update("primaryNeed", event.target.value)}
          aria-invalid={Boolean(errors.primaryNeed)}
          aria-describedby={
            errors.primaryNeed
              ? `${uid}-primaryNeed-hint ${errorId("primaryNeed")}`
              : `${uid}-primaryNeed-hint`
          }
          className={siteFormInput}
        />
        {errors.primaryNeed ? (
          <p id={errorId("primaryNeed")} className="mt-1.5 text-sm text-red-700">
            {errors.primaryNeed}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor={fieldId("role")} className="block text-sm font-medium text-zinc-700">
            Your role <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id={fieldId("role")}
            name="role"
            type="text"
            autoComplete="organization-title"
            maxLength={120}
            value={values.role}
            onChange={(event) => update("role", event.target.value)}
            className={siteFormInput}
          />
        </div>

        <div>
          <label htmlFor={fieldId("businessType")} className="block text-sm font-medium text-zinc-700">
            Business type <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <select
            id={fieldId("businessType")}
            name="business_type"
            value={values.businessType}
            onChange={(event) => update("businessType", event.target.value)}
            className={siteFormInput}
          >
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={fieldId("teamSize")} className="block text-sm font-medium text-zinc-700">
            Team size <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <select
            id={fieldId("teamSize")}
            name="team_size"
            value={values.teamSize}
            onChange={(event) => update("teamSize", event.target.value)}
            className={siteFormInput}
          >
            <option value="">Select a size</option>
            {TEAM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("context")} className="block text-sm font-medium text-zinc-700">
          Additional context <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <textarea
          id={fieldId("context")}
          name="context"
          rows={3}
          maxLength={2000}
          value={values.context}
          onChange={(event) => update("context", event.target.value)}
          placeholder="Anything else that would help us prepare for the conversation?"
          className={siteFormInput}
        />
      </div>

      {/* Honeypot: hidden from people, tempting to automated submissions. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={fieldId("consent")}
            name="privacy_consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? errorId("consent") : `${uid}-consent-hint`}
            className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
          />
          <label htmlFor={fieldId("consent")} className="text-sm leading-relaxed text-zinc-700">
            I agree that Finza may use these details to respond to my request.{" "}
            <span className="text-red-600">*</span>
          </label>
        </div>
        <p id={`${uid}-consent-hint`} className="mt-1.5 text-xs leading-relaxed text-zinc-500">
          See the{" "}
          <Link href="/privacy" className="font-medium text-zinc-900 underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        {errors.consent ? (
          <p id={errorId("consent")} className="mt-1.5 text-sm text-red-700">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${homePrimaryBtn} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}
      >
        {status === "sending" ? "Sending request…" : "Request a guided trial"}
      </button>

      <p className="text-xs leading-relaxed text-zinc-500">
        We will only use these details to respond to your Finza request. No spam. You can also email{" "}
        <a
          href="mailto:hello@finza.africa"
          className="font-medium text-zinc-900 underline underline-offset-2"
        >
          hello@finza.africa
        </a>
        .
      </p>
    </form>
  );
}
