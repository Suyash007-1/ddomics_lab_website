/**
 * Resolves a path inside `public/` to a URL that respects Vite's `base`
 * config (set in vite.config.ts, e.g. "/ddomics-lab-framework/").
 *
 * Hardcoding paths like "/images/foo.jpg" breaks on GitHub Pages project
 * sites, because the site is served from
 * "https://<user>.github.io/<repo>/" and not from the domain root — the
 * leading "/" makes the browser look for the image at
 * "https://<user>.github.io/images/foo.jpg", which doesn't exist.
 *
 * Always use this helper (or import.meta.env.BASE_URL directly) instead of
 * a bare "/..." path when referencing files in `public/`.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/ddomics-lab-framework/"
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}${cleanPath}`;
}
