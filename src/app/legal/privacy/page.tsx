import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "United Technologies privacy policy.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: "160px" }}>
      <div className="container container-narrow">
        <h1 style={{ fontSize: "var(--fs-h1)", marginBottom: "1.5rem" }}>Privacy Policy</h1>
        <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          This page is a placeholder. Replace this content with your finalized privacy policy, covering what data is
          collected through this site and forms, how it is used, and how customers can request its deletion.
        </p>
      </div>
    </section>
  );
}
