# Mohammad Mujahid Ali — Portfolio

A premium, fully responsive 3D developer portfolio built for a QA Automation Engineer & Full-Stack Developer. Designed around a **terminal / CI-pipeline visual identity** — every section is framed like a piece of dev tooling (test consoles, JSON panels, file-path eyebrows) because the content is, literally, that world.

Live design direction: deep near-black UI, signal-green "PASS" accent, ice-blue and amber secondary accents, monospace display type, glassmorphism panels, and an interactive Three.js hero scene built from a wireframe core object + a connected node network (a visual metaphor for test/CI dependency graphs).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS (custom design tokens) |
| Animation | Framer Motion |
| 3D | Three.js + React Three Fiber + drei |
| Icons | react-icons |

GSAP is not required by any current component (Framer Motion covers all scroll/hover/page-transition needs), but it's listed as an optional dependency in `package.json` if you want to add complex scroll-triggered sequences later.

---

## Project Structure

```
src/
├── components/
│   ├── 3d/                  # All Three.js / R3F scene components
│   │   ├── HeroScene.tsx     # Canvas wrapper for the hero background
│   │   ├── CoreObject.tsx    # Rotating wireframe icosahedron "core"
│   │   ├── NodeNetwork.tsx   # Connected-node particle network
│   │   ├── FloatingTokens.tsx# Ambient glass shards
│   │   └── AmbientField.tsx  # Lightweight particle field (used in Skills section)
│   ├── ui/                  # Small reusable presentational pieces
│   │   ├── SectionHeading.tsx
│   │   └── TerminalFrame.tsx
│   ├── CustomCursor.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ScrollProgress.tsx
├── sections/                # One file per page section
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── data/
│   └── resume.ts            # ALL content lives here — edit this file to update the site
├── hooks/
│   ├── useTheme.tsx          # Dark/light mode context
│   └── useMediaQuery.ts      # Reduced-motion, touch-device, breakpoint hooks
├── App.tsx
├── main.tsx
└── index.css                 # Design tokens / global styles
```

**Content is centralized in `src/data/resume.ts`.** To update any text on the site — bio, skills, projects, education, contact info — edit that one file. Every section component reads from it.

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

---

## Replacing Placeholder Content

1. **Resume PDF**: replace `public/Mohammad_Mujahid_Ali_Resume.pdf` with an updated export, keeping the same filename (or update `profile.resumeFile` in `src/data/resume.ts`).
2. **Testimonials**: `src/data/resume.ts` → `testimonials` array. Each entry has a `placeholder: true/false` flag; set to `false` once you add a real quote, and the dashed border styling will switch to solid automatically.
3. **OG/social preview image**: add an `og-cover.png` (1200×630px recommended) to `public/` — referenced in `index.html`.
4. **Domain**: update the canonical URL and OG URLs in `index.html`, and `public/sitemap.xml` / `public/robots.txt`.
5. **Contact form**: currently opens the visitor's email client via `mailto:` with prefilled subject/body (zero backend required). To wire up a real backend (e.g. Formspree, Resend, a serverless function), replace the `handleSubmit` logic in `src/sections/Contact.tsx`.

---

## Performance Notes

- 3D scenes are **lazy-loaded** where appropriate and capped at `dpr={[1, 1.5]}` to avoid over-rendering on high-DPI displays.
- `prefers-reduced-motion` is respected — the hero swaps to a static grid background and all CSS animations collapse to near-zero duration.
- Touch devices get a reduced particle count and skip the heavier floating-shard layer.
- Below-the-fold sections (Projects, Education, Testimonials, Contact) are code-split via `React.lazy` + `Suspense`.
- Custom cursor and OrbitControls-style parallax are disabled entirely on touch devices.

---

## Accessibility

- Skip-to-content link for keyboard users.
- Visible focus rings on all interactive elements (`:focus-visible`).
- `aria-hidden` on all purely decorative 3D/particle layers.
- Reduced-motion media query respected at both the CSS and component level.
- Sufficient color contrast between text and background in both dark and light themes.

---

## SEO Setup Included

- Full meta tag set (title, description, keywords, canonical) in `index.html`.
- Open Graph + Twitter Card tags.
- `Person` JSON-LD structured data.
- `robots.txt` and `sitemap.xml` in `public/`.

Update the placeholder domain (`https://mujahidali.dev/`) throughout once you have a real domain.

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```
Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Set `base: '/<repo-name>/'` in `vite.config.ts` if deploying to a project page.
4. `npm run deploy`

---

## Customization Tips

- **Colors**: all design tokens live in `tailwind.config.js` under `theme.extend.colors` (`signal`, `ice`, `amber`, `base`, `ink`). Change the hex values once to retheme the entire site.
- **Typography**: swap the Google Fonts `<link>` in `index.html` and the `fontFamily` block in `tailwind.config.js`.
- **3D intensity**: reduce `count` props in `NodeNetwork` / lower `dpr` in `HeroScene.tsx` if targeting lower-end devices.

---

Built with care — every line of copy was rewritten from the original resume to read naturally for recruiters while staying 100% factually accurate to the source.
