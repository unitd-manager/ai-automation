import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/layout/LegalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How United Technologies collects, uses, and protects the information you share with us.",
  path: "/legal/privacy",
});

const sections: LegalSection[] = [
  {
    title: "Who We Are",
    body: (
      <p>
        United Technologies ("we", "us", "our") designs and implements AI-powered automation for businesses. This policy
        explains what personal information we collect through this website, how we use it, and the choices you have.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    body: (
      <>
        <p>We only collect information you choose to give us or that is needed to run the site:</p>
        <ul>
          <li><strong>Contact and audit forms:</strong> your name, company, email address, industry, website, tools you use, and the details you share about your business challenge.</li>
          <li><strong>Purchases:</strong> your name, email address, company, and billing country when you check out. Card details are entered on Stripe's secure page and never reach our servers.</li>
          <li><strong>Cart:</strong> the packages you add to your cart are saved in your own browser so they are still there when you return.</li>
          <li><strong>Technical data:</strong> basic information such as browser type and pages visited, used to keep the site secure and working.</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <ul>
        <li>To reply to your enquiries and prepare assessments or proposals you request.</li>
        <li>To process payments, deliver the services you purchase, and send receipts.</li>
        <li>To operate, secure, and improve our website and services.</li>
        <li>To meet legal, tax, and accounting obligations.</li>
      </ul>
    ),
  },
  {
    title: "Payments",
    body: (
      <p>
        Payments are handled by <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a>.
        When you pay, Stripe collects and processes your card and billing details under its own privacy policy. We receive
        confirmation of the payment, the amount, and the contact details you gave us, but not your full card number.
      </p>
    ),
  },
  {
    title: "Sharing Your Information",
    body: (
      <>
        <p>We do not sell your personal information. We share it only with service providers that help us run the business, such as payment processing, email delivery, and hosting, and only as far as they need it to do that work.</p>
        <p>We may also disclose information when the law requires it or to protect our rights and the safety of others.</p>
      </>
    ),
  },
  {
    title: "Cookies and Local Storage",
    body: (
      <p>
        The site uses your browser's local storage to remember your cart. Your browser settings let you block or clear
        this at any time, though your cart will then not be saved between visits.
      </p>
    ),
  },
  {
    title: "Data Retention and Security",
    body: (
      <p>
        We keep personal information only as long as needed for the purposes above or as the law requires. We use
        reasonable technical and organisational measures to protect it, but no method of transmission or storage is
        completely secure.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct, or delete the personal information we hold
        about you, or to object to how we use it. To make a request, email{" "}
        <a href="mailto:hello@unitedtechnologies.ai">hello@unitedtechnologies.ai</a>.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on this page with a revised
        effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      titleStart="Your Privacy,"
      titleAccent="Explained"
      intro="This policy explains what information United Technologies collects, why we collect it, and the choices you have."
      effectiveDate="October 2026"
      sections={sections}
    />
  );
}