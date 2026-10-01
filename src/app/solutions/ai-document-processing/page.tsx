import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import DocumentHeroVisual from "@/components/hero/DocumentHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-document-processing"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-document-processing",
});

export default function DocumentProcessingPage() {
  return <SolutionPage data={data} content={content} visual={<DocumentHeroVisual />} />;
}