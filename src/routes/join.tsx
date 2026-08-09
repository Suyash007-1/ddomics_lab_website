import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { lab } from "@/lib/lab-data";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Lab — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Open positions for postdocs, Ph.D. students and MSc project students in microbiome sequencing, metabolomics and anaerobic isolation at NCCS Pune.",
      },
      { property: "og:title", content: "Join the Lab — DDOmics Lab, NCCS Pune" },
      {
        property: "og:description",
        content: "Postdoc, Ph.D. and MSc project opportunities in the DDOmics Lab.",
      },
    ],
  }),
  component: JoinPage,
});

const roles = [
  {
    title: "Postdoctoral researchers",
    body: "We're looking for postdocs with a background in NGS, data analysis, metabolomics, anaerobic isolation, or animal studies. Write to the PI with a CV and a short statement of research interests.",
  },
  {
    title: "Ph.D. students",
    body: "Motivated students are welcome to apply through the NCCS doctoral programme. Candidates with CSIR/UGC-NET, DBT-JRF, ICMR or equivalent fellowships are encouraged to get in touch before the interview cycle.",
  },
  {
    title: "MSc project students",
    body: "Students seeking a 6–12 month dissertation project can write in directly. Projects span wet-lab microbiology, sequencing library preparation and computational microbiome analysis.",
  },
];

function JoinPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
          <Reveal>
            <p className="eyebrow mb-5 text-muted-foreground">Join the Lab</p>
            <h1 className="display-title max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Let's collaborate
            </h1>
            <p className="measure mt-8 leading-relaxed text-muted-foreground">
              The lab sits at the intersection of microbiology, sequencing and data science. If you want to
              work on the Indian microbiome at scale, there's likely a project here for you.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {roles.map((r, i) => (
          <Reveal
            as="section"
            key={r.title}
            className="grid grid-cols-1 gap-6 border-b border-border py-14 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display-title mt-3 text-2xl">{r.title}</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground lg:col-span-8">{r.body}</p>
          </Reveal>
        ))}
      </div>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <Reveal>
            <h2 className="display-title text-3xl lg:text-4xl">Write to us</h2>
            <p className="measure mx-auto mt-6 leading-relaxed opacity-60">
              Include a CV, a brief note on what you'd like to work on, and your expected start date.
            </p>
            <a
              href={`mailto:${lab.email}`}
              className="eyebrow mt-8 inline-block rounded-full bg-background px-6 py-3 text-foreground transition-opacity hover:opacity-80"
            >
              {lab.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
