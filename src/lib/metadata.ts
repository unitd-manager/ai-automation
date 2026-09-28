import type { Metadata } from "next";

const SITE_NAME = "United Technologies";
const SITE_URL = "https://www.unitedtechnologies.ai";
const DEFAULT_DESCRIPTION =
  "United Technologies designs and implements AI-powered workflows that respond to customers, qualify leads, book appointments, and connect your business systems.";

interface BuildMetadataArgs {
  title: string;
  description?: string;
  path: string;
  image?: string;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = "/og-default.png",
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
