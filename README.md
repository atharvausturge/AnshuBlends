# Anshu Blends website

A static site. Open `index.html` in a browser to preview it. To put it online, upload the whole folder to any static host (Netlify Drop, GitHub Pages, Vercel, etc.).

## Add photos and videos

1. Drop the files into `assets/gallery/`.
2. Open `gallery.js` and fill in `src` for each slot, for example:

```js
{ type: "photo", src: "assets/gallery/low-taper.jpg", caption: "Low taper fade" },
{ type: "video", src: "assets/gallery/fade-clip.mp4", poster: "", caption: "Burst fade" },
```

Empty slots show a "coming soon" placeholder. Delete any slots you don't need, or copy a line to add more. Videos play muted on a loop. Short vertical `.mp4` clips under about 10 MB work best. Visitors can tap any item to see it full size.

## Change prices or info

- Prices and services: the `Services` section in `index.html`
- Booking link: `BOOKING_URL` at the top of `script.js`. Every "Book" button uses it.
- Phone, email, address, and socials: the `Contact` section in `index.html`
