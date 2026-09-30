import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import WorkflowBoard from "./WorkflowBoard";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description: "One AI automation solution, tailored for all verticals. See the end-to-end flow.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <WorkflowBoard />
      <CTASection
        title="Automate today. Scale tomorrow."
        description="Solve real problems. Automate peak moments. Scale predictably."
      />
    </>
  );
}
