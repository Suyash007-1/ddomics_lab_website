import { Link } from "@tanstack/react-router";
import { researchTracks } from "@/lib/lab-data";

/** Infinite sliding ribbon of research domains — title above, a symbolic
 * image beneath, each card linking straight to its dedicated research page.
 * Mirrors ImageMarquee's motion so it reads as the same pattern used for
 * the lab-life photo ribbon. Not capped at a fixed count — however many
 * tracks exist in researchTracks, they all appear here. */
export function DomainsMarquee() {
  const items = [...researchTracks, ...researchTracks];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="domains-marquee-track gap-6">
        {items.map((t, i) => (
          <Link
            key={`${t.slug}-${i}`}
            to="/research/$trackSlug"
            params={{ trackSlug: t.slug }}
            className="lift-card sheen group block w-72 shrink-0 border border-deep-foreground/15 bg-deep p-6 sm:w-80"
          >
            <h3 className="display-title text-lg leading-snug text-deep-foreground transition-colors group-hover:text-primary">
              {t.title}
            </h3>
            <div className="art-tile mt-5 aspect-[4/3] w-full overflow-hidden border border-deep-foreground/10">
              <img
                src={t.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-deep to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-deep to-transparent sm:w-24" />
    </div>
  );
}
