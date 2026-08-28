import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import bgResearch from "@/assets/bg-research.jpg";
import { facilities } from "@/lib/lab-data";

export const Route = createFileRoute("/research/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Instruments and facilities in the DDOmics Lab: anaerobic culture and isolation, sequencing and genomics, and the in-house bioinformatics compute cluster.",
      },
      { property: "og:title", content: "Facilities — DDOmics Lab, NCCS Pune" },
      {
        property: "og:description",
        content:
          "The instruments and facilities behind the lab's wet-lab and computational work.",
      },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <PageHero
        image={bgResearch}
        focal="left"
        height="short"
        eyebrow="Research / Facilities"
        title={
          <>
            Instruments <span className="silver-text">&amp; facilities</span>
          </>
        }
        lede="What the lab can run in-house, from anaerobic culture on the bench to sequencing and the compute behind it."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="art-tile mb-6 aspect-[4/3] w-full overflow-hidden border border-border">
                  <img
                    src={f.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="display-title text-xl lg:text-2xl">
                  {f.title}
                </h2>
                <p className="measure mt-3 leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-20">
            <Link
              to="/research"
              className="eyebrow sheen inline-block border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
            >
              ← Back to Research
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
