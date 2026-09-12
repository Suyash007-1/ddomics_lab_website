import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { DomainsMarquee } from "@/components/DomainsMarquee";
import heroBg from "@/assets/microbiome-heads.png";
import artHand from "@/assets/art-hand.png";
import artMicrobes from "@/assets/art-microbes.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DDOmics Lab — Microbiome Research at NCCS Pune" },
      {
        name: "description",
        content:
          "The DDOmics Lab at NCCS Pune studies microbial communities in human health and disease using classic microbiology, next-generation sequencing and multi-omics integration.",
      },
      {
        property: "og:title",
        content: "DDOmics Lab — Microbiome Research at NCCS Pune",
      },
      {
        property: "og:description",
        content:
          "Mapping the Indian microbiome: gut, oral and skin communities across health, disease and early life.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-veil relative -mt-24 flex min-h-[85vh] items-center overflow-hidden text-deep-foreground">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="hero-drift pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--deep)_92%)]"
        />

        {/* Floating concept art */}

        <div className="relative mx-auto w-full max-w-4xl px-6 pt-32 pb-24 text-center">
          <Reveal delay={120}>
            <h1 className="display-title text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              <em>The microbiome is an integral part of</em>
              <br />
              <span className="silver-text">Human Health</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="measure mx-auto mt-8 text-base leading-relaxed opacity-70 sm:text-lg">
              We map microbial communities across Indian populations — gut, oral
              and skin — combining culturomics, next-generation sequencing and
              multi-omics to turn community structure into testable biology.
            </p>
          </Reveal>

          <Reveal
            delay={260}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/research"
              className="eyebrow sheen border border-primary px-7 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore the research
            </Link>
            <Link
              to="/dhiraj-dhotre"
              className="eyebrow sheen border border-silver/50 px-7 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
            >
              Meet the PI
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Research preview */}
      <section className="bg-surface">
        <div className="py-14 lg:py-20">
          <Reveal className="mx-auto mb-10 max-w-2xl px-6 text-center lg:px-10">
            <p className="eyebrow mb-4 text-muted-foreground">Research</p>
            <h2 className="display-title text-3xl lg:text-4xl">
              Our lab researches in the following domains
            </h2>
          </Reveal>

          <DomainsMarquee />
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={artHand}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 hidden h-[85%] object-contain opacity-25 mix-blend-screen lg:block"
        />
        <img
          src={artMicrobes}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-6 hidden h-[70%] object-contain opacity-25 mix-blend-screen lg:block"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <Reveal>
            <hr className="silver-rule mx-auto mb-14 w-72" />
            <h2 className="display-title text-2xl leading-snug sm:text-4xl">
              <em>In the DDOmics Lab, we study</em> microbial communities{" "}
              <em>in human health and disease.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="measure mx-auto mt-8 text-lg leading-relaxed text-muted-foreground">
              The human body carries microbial cells in roughly 1:1 proportion
              to human cells, involved in metabolism, immune modulation, and
              production of antimicrobial agents — and imbalance in these
              communities has been observed across a range of diseases and
              metabolic disorders. We study microbial community structure and
              function using classic microbiology, next-generation sequencing,
              and multi-omics data integration.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h3 className="display-title mt-10 text-xl sm:text-2xl">
              What does India's microbiome look like — and what can it tell us
              about health?
            </h3>
          </Reveal>
        </div>
      </section>
    </>
  );
}
