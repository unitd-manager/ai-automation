"use client";

import { useState, type FormEvent } from "react";
import buttonStyles from "@/components/ui/Button.module.css";
import styles from "./page.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const requiredFields = [
      ["name", "Name"],
      ["company", "Company"],
      ["email", "Email"],
      ["industry", "Industry"],
    ];

    for (const [field, label] of requiredFields) {
      if (!String(formData.get(field) ?? "").trim()) {
        nextErrors[field] = `${label} is required.`;
      }
    }

    const email = String(formData.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    const website = form.elements.namedItem("website") as HTMLInputElement;
    if (website.value && website.validity.typeMismatch) {
      nextErrors.website = "Enter a valid website URL, including https://.";
    }

    setErrors(nextErrors);
    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      (form.elements.namedItem(firstInvalidField) as HTMLElement).focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();
      if (!response.ok) {
        setSubmitError(result.error || "We couldn't send your request. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Unable to send your request right now. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function clearFieldError(name: string) {
    setErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  }

  if (submitted) {
    return (
      <div className={styles.successBox}>
        <h3 style={{ marginBottom: "0.75rem" }}>Request received.</h3>
        <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
          We&apos;ll follow up within one business day to schedule your AI Audit.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => clearFieldError("name")} />
        {errors.name && <p id="name-error" className={styles.fieldError} role="alert">{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" required autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} onChange={() => clearFieldError("company")} />
        {errors.company && <p id="company-error" className={styles.fieldError} role="alert">{errors.company}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => clearFieldError("email")} />
        {errors.email && <p id="email-error" className={styles.fieldError} role="alert">{errors.email}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="industry">Industry</label>
        <select id="industry" name="industry" required defaultValue="" aria-invalid={Boolean(errors.industry)} aria-describedby={errors.industry ? "industry-error" : undefined} onChange={() => clearFieldError("industry")}>
          <option value="" disabled>Select industry</option>
          <option>HVAC</option>
          <option>Plumbing</option>
          <option>Roofing</option>
          <option>Electrical</option>
          <option>Dental</option>
          <option>Med Spa</option>
          <option>Dermatology</option>
          <option>Construction / General Contracting</option>
          <option>Other</option>
        </select>
        {errors.industry && <p id="industry-error" className={styles.fieldError} role="alert">{errors.industry}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="url" placeholder="https://" aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} onChange={() => clearFieldError("website")} />
        {errors.website && <p id="website-error" className={styles.fieldError} role="alert">{errors.website}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="crm">Current CRM</label>
        <input id="crm" name="crm" type="text" placeholder="e.g. HubSpot, ServiceTitan, none" />
      </div>
      <div className={styles.field}>
        <label htmlFor="volume">Monthly Lead Volume</label>
        <select id="volume" name="volume" defaultValue="">
          <option value="" disabled>Select range</option>
          <option>Under 25</option>
          <option>25–100</option>
          <option>100–500</option>
          <option>500+</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="interest">Interested In</label>
        <select id="interest" name="interest" defaultValue="">
          <option value="" disabled>Select an area</option>
          <option>AI Voice Agent</option>
          <option>Lead Response</option>
          <option>Appointment Automation</option>
          <option>CRM Automation</option>
          <option>Document Automation</option>
          <option>Business Intelligence</option>
          <option>Full AI Infrastructure</option>
        </select>
      </div>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="challenge">Biggest Business Challenge</label>
        <textarea id="challenge" name="challenge" rows={4} placeholder="What's costing your team the most time or revenue right now?" />
      </div>
      <div className={styles.submitRow}>
        {submitError && <p className={styles.fieldError} role="alert">{submitError}</p>}
        <button type="submit" disabled={isSubmitting} className={`${buttonStyles.button} ${buttonStyles.primary} ${buttonStyles.lg}`}>
          {isSubmitting ? "Sending…" : "Request AI Audit"}
        </button>
      </div>
    </form>
  );
}
