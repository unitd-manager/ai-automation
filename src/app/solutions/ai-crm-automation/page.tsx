import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import CrmHeroVisual from "@/components/hero/CrmHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-crm-automation"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-crm-automation",
});

export default function CrmAutomationPage() {
  return <SolutionPage data={data} content={content} visual={<CrmHeroVisual />} />;
}