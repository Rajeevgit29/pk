# Project Kitab website

The website for **Project Kitab — Har Haath Mein Kitab**, built with Next.js 16 and Tailwind CSS 4.

## Run it on your computer

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000
```

## Where things live

| What | Where |
|---|---|
| **All text, links, contact and donation details** | `src/content/site.ts` |
| Hero photo | `public/images/hero-kids.png` |
| Logo files | `public/brand/` (the originals are in `~/Desktop/project-kitab-logo/`) |
| Brand colours and fonts | `src/app/globals.css` (`@theme` block) |
| Home page sections | `src/components/sections/` |
| Inner pages | `src/app/<page>/page.tsx` |

Anything set to `null` in `site.ts` (a photo, a link, the contact email) shows a tidy
placeholder or falls back to Instagram until you fill it in.

## Adding photos

**Section photos** (What We Do cards, initiatives, Who We Are, Get Involved, blog):
put the file in `public/images/`, then set its `image` in `src/content/site.ts`, for example

```ts
{ title: "Financial Literacy", icon: "rupee", image: { src: "/images/financial-literacy.jpg", alt: "Students learning to budget" } },
```

Next.js serves every photo as a sized AVIF/WebP automatically. Use originals
(from the camera, AirDrop or Drive), not WhatsApp-compressed copies.

**Gallery (Dome Gallery)**: drop the original photos into `photos/gallery/` and run

```bash
npm run gallery
```

This makes a fast thumbnail and a sharp full-size version of each photo and adds them to the dome.
Optional captions for screen readers go in `photos/gallery/captions.json`:
`{ "football-day.jpg": "Children celebrating a goal at Gyaan Through Maidaan" }`.

## Credits

Dome Gallery component adapted from [React Bits](https://reactbits.dev/components/dome-gallery) (MIT).
