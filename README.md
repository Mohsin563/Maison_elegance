# Maison Élégance

React (Vite) site built from the UX Pilot design export.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure

```
src/
  App.jsx               page composition (section order)
  main.jsx              entry + stylesheet imports
  data/content.js       ALL copy, products, prices, stats (edit here)
  context/BagContext    shopping-bag state (add / remove / totals)
  hooks/useReveal       scroll-in animation
  components/           one file per section (Hero, Collections, ...)
  styles/
    base.css            tokens, reset, buttons, placeholders
    layout.css          navbar, ticker, footer, bag drawer
    sections.css        per-section styles
```

## Adding photography

The PDF export contained no usable image files, so images are tonal
placeholders. Put photos in `public/images/` and set the `image` field on
any item in `src/data/content.js`, e.g. `image: "/images/manteau-aurore.jpg"`.
For the hero, edit the `<Placeholder>` in `components/Hero.jsx` and add `src`.
