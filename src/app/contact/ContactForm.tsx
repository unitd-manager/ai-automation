"use client";

import { useState, type FormEvent } from "react";
import buttonStyles from "@/components/ui/Button.module.css";
import styles from "./page.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your CRM, email service, or form backend (e.g. HubSpot, Formspree, a Next.js API route).
    setSubmitted(true);
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" required autoComplete="organization" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="industry">Industry</label>
        <select id="industry" name="industry" required defaultValue="">
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
      </div>
      <div className={styles.field}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="url" placeholder="https://" />
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
        <button type="submit" className={`${buttonStyles.button} ${buttonStyles.primary} ${buttonStyles.lg}`}>
          Request AI Audit
        </button>
      </div>
    </form>
  );
}
