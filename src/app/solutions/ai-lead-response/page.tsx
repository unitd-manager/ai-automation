import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import LeadResponseHeroVisual from "@/components/hero/LeadResponseHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-lead-response"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-lead-response",
});

export default function AiLeadResponsePage() {
  return <SolutionPage data={data} content={content} visual={<LeadResponseHeroVisual />} />;
}