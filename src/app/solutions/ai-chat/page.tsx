import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import ChatHeroVisual from "@/components/hero/ChatHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-chat"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-chat",
});

export default function AiChatPage() {
  return <SolutionPage data={data} content={content} visual={<ChatHeroVisual />} />;
}