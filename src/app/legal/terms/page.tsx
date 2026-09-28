import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "United Technologies terms of service.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: "160px" }}>
      <div className="container container-narrow">
        <h1 style={{ fontSize: "var(--fs-h1)", marginBottom: "1.5rem" }}>Terms of Service</h1>
        <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          This page is a placeholder. Replace this content with your finalized terms of service before launch.
        </p>
      </div>
    </section>
  );
}
