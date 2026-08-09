import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { methods, researchTracks } from "@/lib/lab-data";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Five active research tracks: the Indian Human Microbiome Initiative, mother & infant microbiome, SARS-CoV-2 surveillance, gluten spectrum disorders and the gut–brain axis.",
      },
      { property: "og:title", content: "Research — DDOmics Lab, NCCS Pune" },
      {
        property: "og:description",
        content: "Microbiome research tracks spanning population cohorts, early life, and disease.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
          <Reveal>
            <p className="eyebrow mb-5 text-muted-foreground">Research</p>
            <h1 className="display-title max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              Mapping microbial communities across populations, life stages and disease
            </h1>
            <p className="measure mt-8 leading-relaxed text-muted-foreground">
              Our work moves between the bench and the cluster: anaerobic culture and isolation on one side,
              metagenomic and metabolomic analysis on the other. Below are the five tracks currently running in
              the lab.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {researchTracks.map((t, i) => (
          <Reveal
            as="section"
            key={t.code}
            className="grid grid-cols-1 gap-8 border-b border-border py-16 lg:grid-cols-12 lg:py-24"
          >
            <div className="lg:col-span-4">
              <span className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {t.code}
              </span>
              <h2 id={t.code.replace(/[^a-z0-9]/gi, "").toLowerCase()} className="display-title mt-4 text-2xl lg:text-3xl">
                {t.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed">{t.summary}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="display-title mb-12 text-2xl lg:text-3xl">How we work</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {methods.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <h3 className="display-title mb-3 text-xl">{m.title}</h3>
                <p className="text-sm leading-relaxed opacity-60">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
