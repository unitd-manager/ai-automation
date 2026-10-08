import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/layout/LegalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that apply when you use the United Technologies website and purchase our services.",
  path: "/legal/terms",
});

const sections: LegalSection[] = [
  {
    title: "Acceptance of These Terms",
    body: (
      <p>
        By using this website or purchasing from United Technologies ("we", "us", "our"), you agree to these terms. If you
        are using the site on behalf of a business, you confirm you have authority to bind that business.
      </p>
    ),
  },
  {
    title: "Our Services",
    body: (
      <p>
        We design, build, and support AI automation solutions such as voice agents, chat, lead response, appointment
        booking, follow-up, CRM automation, and document processing. The exact scope, deliverables, and timeline for your
        project are set out in your proposal or order confirmation.
      </p>
    ),
  },
  {
    title: "Packages, Pricing, and Payment",
    body: (
      <>
        <p>Prices are shown on our pricing page. Some packages are listed as a starting price, and the final price for larger projects is confirmed with you before work begins.</p>
        <p>Payments are processed securely by Stripe. By paying, you confirm that the payment details you provide are valid and that you are authorised to use them. Taxes, where applicable, are your responsibility unless stated otherwise.</p>
      </>
    ),
  },
  {
    title: "Your Responsibilities",
    body: (
      <ul>
        <li>Give us accurate information and timely access to the systems, accounts, and people we need to deliver the work.</li>
        <li>Make sure you have the right to share any data, recordings, or content you provide to us.</li>
        <li>Comply with the laws that apply to your use of automation, including rules on calls, messages, recording, and consent.</li>
      </ul>
    ),
  },
  {
    title: "Third-Party Tools",
    body: (
      <p>
        Our solutions connect to third-party tools such as CRMs, calendars, phone systems, and AI providers. Those tools
        are governed by their own terms, and we are not responsible for their availability or changes.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <p>
        The website, its content, and our pre-existing tools and methods remain our property. Unless your agreement says
        otherwise, you keep ownership of your own data and content, and you receive the right to use the deliverables we
        create for you in your business.
      </p>
    ),
  },
  {
    title: "Cancellations and Refunds",
    body: (
      <p>
        Cancellation and refund terms depend on the package and are stated in your proposal or order confirmation. If you
        have a question about a payment, contact us and we'll look into it.
      </p>
    ),
  },
  {
    title: "Disclaimers and Limitation of Liability",
    body: (
      <>
        <p>AI systems can make mistakes, so we provide our services and website "as is" and do not guarantee specific business results or uninterrupted operation.</p>
        <p>To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profits or lost data, and our total liability for any claim is limited to the amount you paid us for the service the claim relates to.</p>
      </>
    ),
  },
  {
    title: "Changes and Governing Law",
    body: (
      <p>
        We may update these terms from time to time, and the latest version will always be on this page. These terms are
        governed by the laws of the jurisdiction in which United Technologies is registered.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      titleStart="Terms of"
      titleAccent="Service"
      intro="These terms explain the rules for using our website and the basis on which we provide our services."
      effectiveDate="October 2026"
      sections={sections}
    />
  );
}