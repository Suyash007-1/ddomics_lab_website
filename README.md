# DDOmics Lab Website 

Static React application for the DDOmics Lab website.
This is the proposed base website prototype for use.

## Development

You need Node.js and npm.

```sh
git clone <your-repository-url>
cd ddomics-lab-framework
npm install
npm run dev
```

## Deployment

The included GitHub Actions workflow builds and deploys the site to GitHub Pages. It assumes the repository is named `ddomics_lab_website`, so the Vite base path is `/ddomics_lab_website/`. If you ever rename the repo, update `base` in `vite.config.ts` to match.
