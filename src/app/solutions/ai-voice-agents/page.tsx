import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import VoiceHeroVisual from "@/components/hero/VoiceHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-voice-agents"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-voice-agents",
});

export default function VoiceAgentsPage() {
  return <SolutionPage data={data} content={content} visual={<VoiceHeroVisual />} />;
}