import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import FollowUpHeroVisual from "@/components/hero/FollowUpHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-follow-up"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-follow-up",
});

export default function AiFollowUpPage() {
  return <SolutionPage data={data} content={content} visual={<FollowUpHeroVisual />} />;
}