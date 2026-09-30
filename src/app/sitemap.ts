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

const dedicatedPageRoutes: Record<string, string> = {
  "ai-lead-response": "/solutions/ai-lead-response",
  "ai-voice-agents": "/solutions/ai-voice-agents",
  "ai-chat": "/solutions/ai-chat",
  "appointment-automation": "/solutions/ai-appointment-booking",
  "follow-up-automation": "/solutions/ai-follow-up",
  "crm-automation": "/solutions/ai-crm-automation",
  "document-automation": "/solutions/ai-document-processing",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes = solutions
    .filter((s) => s.slug in dedicatedPageRoutes)
    .map((s) => dedicatedPageRoutes[s.slug]);

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