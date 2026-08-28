import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Latest News & Media — DDOmics Lab" },
      {
        name: "description",
        content:
          "Publication alerts, media coverage, talks and lab life from the DDOmics Lab microbiome group at NCCS Pune.",
      },
      { property: "og:title", content: "Latest News & Media — DDOmics Lab" },
      {
        property: "og:description",
        content:
          "Publication alerts, talks and lab life from the DDOmics Lab at NCCS Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <NewsListing
      items={newsItems}
      eyebrow="Newsroom"
      title={
        <>
          <em>Latest</em> News <em>&amp;</em> Media
        </>
      }
      lede="Publication alerts, talks, press and everyday life inside the lab. Use the News menu above to jump straight to a section."
    />
  );
}
