import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { publications } from "@/lib/lab-data";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Peer-reviewed publications from the DDOmics Lab on gut, oral and skin microbiomes, diabetes, heart failure and Indian population cohorts.",
      },
      { property: "og:title", content: "Publications — DDOmics Lab, NCCS Pune" },
      {
        property: "og:description",
        content: "Selected peer-reviewed papers from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
          <Reveal>
            <p className="eyebrow mb-5 text-muted-foreground">Publications</p>
            <h1 className="display-title max-w-3xl text-4xl sm:text-5xl lg:text-6xl">Papers from <span className="silver-text">the lab</span></h1>
            <p className="measure mt-8 leading-relaxed text-muted-foreground">
              A selection of peer-reviewed work. Each entry links out to the publisher via DOI.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        {years.map((year) => (
          <section key={year} className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <h2 className="display-title text-3xl text-muted-foreground lg:sticky lg:top-28">{year}</h2>
            </Reveal>
            <ul className="divide-y divide-border border-t border-border lg:col-span-9">
              {publications
                .filter((p) => p.year === year)
                .map((p, i) => (
                  <Reveal as="li" key={p.title} delay={i * 70} className="py-7">
                    <a
                      href={p.doi ? `https://doi.org/${p.doi}` : undefined}
                      target={p.doi ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group block"
                    >
                      <p className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                        {p.title}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {p.authors} · {p.venue}
                      </p>
                      {p.doi && (
                        <span className="eyebrow mt-3 inline-block text-muted-foreground transition-colors group-hover:text-primary">
                          {p.doi} →
                        </span>
                      )}
                    </a>
                  </Reveal>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
