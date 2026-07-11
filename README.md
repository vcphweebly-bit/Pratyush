# A Little Universe Made for You

A private interactive memory gift website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, and Canvas Confetti.

The site is intentionally data-driven. Most personal text lives in:

```txt
src/data/content.ts
```

## Install

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Change The Recipient

Open `src/data/content.ts` and edit:

```ts
recipient: {
  name: "Kausiki",
  nickname: "Ziddi",
  initials: "KZ",
  occasion: "Happy Birthday",
  specialDate: "2010-07-18",
  birthDateLabel: "18 July 2010"
}
```

The initials are used for the generated favicon and final sky reveal. The nickname unlocks a hidden note when typed anywhere on the page.

## Change The Password

In `src/data/content.ts`, edit:

```ts
secretCode: "Ziddi,fattu189"
```

The code is checked only in the browser. Do not use this as real security for sensitive information.

## Add Memories

Edit the `memories` array in `src/data/content.ts`.

Each memory supports:

```ts
{
  date: "",
  title: "The Beginning",
  description: "Your real memory text",
  image: "/images/memory-1.jpg",
  x: 18,
  y: 34
}
```

`x` and `y` are percentages used to position the star in the constellation.

## Replace Photographs

Put images in:

```txt
public/images/
```

Recommended dimensions:

- Hero and memory images: 1600 x 1000 or larger
- Polaroids: 1200 x 900
- Album covers: 800 x 800
- Gift photo: 1200 x 900

If an image is missing, the app shows a designed placeholder instead of a broken image icon.

## Add Songs

Put audio files in:

```txt
public/audio/
```

Then edit the `songs` array in `src/data/content.ts`:

```ts
{
  title: "Song Title",
  artist: "Artist Name",
  file: "/audio/song-1.mp3",
  cover: "/images/cover-1.jpg",
  note: "Why this song matters"
}
```

Audio does not autoplay. The visitor must press play first, which keeps the site compatible with browser autoplay rules.

Use music you have the right to share. Commercial songs may require permission or licensing.

## Edit The Letter

Edit `finalLetter` in `src/data/content.ts`.

Use blank lines between paragraphs. The letter opens from a sealed paper and reveals paragraphs gently, with a `Read instantly` option for accessibility.

## Deploy To Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Deploy To Netlify

1. Push the project to a Git repository.
2. Create a new Netlify site from the repository.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Deploy To GitHub Pages

The Vite config uses `base: "./"` so the built files can work from a subpath.

1. Run `npm run build`.
2. Publish the `dist/` folder using your preferred GitHub Pages workflow.

## Personalization Checklist

- Replace recipient name, nickname, initials, occasion, and special date.
- Change the secret code.
- Replace all `[REPLACE WITH ...]`, `[ADD PHOTO HERE]`, and `[WRITE THE REAL MESSAGE HERE]` placeholders.
- Add real images to `public/images/`.
- Add real audio to `public/audio/`.
- Review every open-when message.
- Rewrite the final letter.
- Test the hidden nickname note and moon-click secret.

## What Is Included

- Secret entry screen with incorrect-code shake animation.
- LocalStorage unlock memory.
- Envelope welcome reveal with subtle confetti.
- Floating chapter navigation for mobile and desktop.
- Hero with moon easter egg and day counter.
- Interactive constellation memories.
- Animated vertical timeline.
- Polaroid gallery with lightbox and secret arrow reveal.
- Flip-card observations.
- Local music player with missing-audio fallback.
- Open-when messages.
- Three-step gift box with downloadable keepsake PNG.
- Friendly memory quiz.
- Folded final letter.
- Final sky reveal with initials, confetti, and replay controls.
- Reduced-motion support and image fallbacks.
