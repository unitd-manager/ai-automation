import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { useCases } from "@/data/useCases";

const staticRoutes = [
  "",
  "/solutions",
  "/industries",
  "/how-it-works",
  "/pricing",
  "/case-studies",
  "/about",
  "/contact",
  "/resources/roadmap",
  "/resources/ai-audit",
  "/resources/roi-calculator",
  "/resources/blog",
  "/resources/faqs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes = solutions
    .filter((s) => s.slug === "ai-lead-response" || s.slug === "ai-voice-agents")
    .map((s) => `/solutions/${s.slug}`);

  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);
  const useCaseRoutes = useCases.map((useCase) => `/use-cases/${useCase.slug}`);

  const all = [...staticRoutes, ...solutionRoutes, ...industryRoutes, ...useCaseRoutes];

  return all.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
