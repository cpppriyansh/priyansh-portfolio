import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";

export async function generateStaticParams() {
  // Return empty array since we're not using blog posts
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `${params.slug} | ${SITE_INFO.name}`,
    description: `Component: ${params.slug}`,
    alternates: {
      canonical: `${SITE_INFO.url}/components/${params.slug}`,
    },
    openGraph: {
      title: `${params.slug} | ${SITE_INFO.name}`,
      description: `Component: ${params.slug}`,
      type: "website",
      url: `${SITE_INFO.url}/components/${params.slug}`,
      siteName: SITE_INFO.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.slug} | ${SITE_INFO.name}`,
      description: `Component: ${params.slug}`,
    },
  };
}

// Simplified JSON-LD for components
function getPageJsonLd(slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${slug} | ${SITE_INFO.name}`,
    "description": `Component: ${slug}`,
    "url": `${SITE_INFO.url}/components/${slug}`,
    "author": {
      "@type": "Person",
      "name": USER.displayName,
      "url": SITE_INFO.url
    }
  };
}

export default function ComponentPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const jsonLd = getPageJsonLd(slug);

  return (
    <div className="container relative max-w-4xl py-6 lg:py-10">
      <Button
        variant="outline"
        className="mb-6 inline-flex items-center justify-center gap-2 text-sm"
        asChild
      >
        <Link href="/components">
          Back to components
        </Link>
      </Button>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="inline-block font-heading text-4xl font-bold tracking-tight lg:text-5xl">
              {slug}
            </h1>
            <p className="text-xl text-muted-foreground">
              Component: {slug}
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate mt-8 dark:prose-invert">
        <p>This is a placeholder for the {slug} component documentation.</p>
      </div>
    </div>
  );
}
