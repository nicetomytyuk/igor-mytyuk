# igormytyuk.dev

Personal portfolio of Ihor Mytyuk. Nuxt 4, statically generated, no client-side data fetching.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in .output/public
npm run preview
```

## Where things live

- `app/data/profile.ts` holds every career fact, metric, skill and link. Edit content here, not in components.
- `app/components/` has one component per page section.
- `app/assets/css/main.css` holds the design tokens and shared styles.
- `public/files/Ihor_Mytyuk_Resume.pdf` is the downloadable resume. Replace the file, keep the name.
- `public/sitemap.xml` and `public/robots.txt` are hand-maintained (single page).

## Deployment

GitHub Pages with the custom domain from `public/CNAME`. Pushing to `master` runs
`.github/workflows/deploy.yml`, which builds and publishes `.output/public`.
In the repository settings, Pages must use "GitHub Actions" as its source.
