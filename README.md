# Nicole Portfolio (scaffold)

A minimal scaffold for a sleek, modern portfolio using the recommended stack: Next.js + TypeScript + Tailwind.

What I created
- Minimal Next.js App Router scaffold in `app/` (Home, About, Projects)
- Tailwind + PostCSS config and a small `globals.css`
- `package.json` with scripts
- `public/README.txt` explaining how to place the provided PDF resume

Next steps
1. Copy your resume PDF into `public/resume.pdf`. The attached file is named `Rozzie updated CV.pdf` — run the PowerShell command below from the repo root:

```powershell
Copy-Item -Path "Rozzie updated CV.pdf" -Destination .\public\resume.pdf
```

2. Install dependencies and run locally:

```powershell
# install
npm install

# dev server
npm run dev
```

3. Replace placeholder content in `app/page.tsx`, `app/projects/page.tsx`, and `app/about/page.tsx` with details from your resume and project assets.

Deployment: I recommend Vercel for a frictionless Next.js deploy (connect your GitHub repo and push to `main`).