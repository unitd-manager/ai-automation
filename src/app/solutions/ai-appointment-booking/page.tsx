import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import AppointmentHeroVisual from "@/components/hero/AppointmentHeroVisual";
import { solutions } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";

const content = solutionPages["ai-appointment-booking"];
const data = solutions.find((s) => s.slug === content.dataSlug)!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-appointment-booking",
});

export default function AiAppointmentBookingPage() {
  return <SolutionPage data={data} content={content} visual={<AppointmentHeroVisual />} />;
}