/*
  GALLERY — add your photos and videos here.

  1. Put the file in the  assets/gallery/  folder.
  2. Set "src" below to its path, e.g. "assets/gallery/fade-1.jpg".
  3. Optional: add a short caption, e.g. "Low taper fade".

  type: "photo"  -> .jpg / .png / .webp
  type: "video"  -> .mp4 (short vertical clips work best; they play muted on loop)
  poster (videos only, optional) -> a still image shown before the video loads
  alt (optional) -> describes the photo for screen readers
  focus (photos only, optional) -> which part of the photo stays in frame, e.g. "center 20%"

  Slots with an empty "src" show a placeholder. Delete any slot you don't need,
  or copy a line to add more.
*/
window.GALLERY = [
  { type: "video", src: "assets/gallery/clip-1.mp4", poster: "assets/gallery/clip-1.jpg", caption: "", alt: "Short clip of a fresh cut" },
  { type: "photo", src: "assets/gallery/cut-1.jpg", caption: "", alt: "Side view of a textured crop with a fade" },
  { type: "photo", src: "assets/gallery/cut-2.jpg", caption: "", alt: "Side view of curly hair with a taper" },
  { type: "photo", src: "assets/gallery/cut-3.jpg", caption: "", alt: "Curly top with a taper, side view" },
  { type: "photo", src: "assets/gallery/cut-4.jpg", caption: "", alt: "Back view of a curly top with a low taper" },
  { type: "video", src: "assets/gallery/clip-2.mp4", poster: "assets/gallery/clip-2.jpg", caption: "", alt: "Short clip of curly cuts" },
  { type: "photo", src: "assets/gallery/cut-5.jpg", caption: "", alt: "Wavy textured top with a taper" },
  { type: "photo", src: "assets/gallery/cut-6.jpg", caption: "", alt: "Back view of a low taper", focus: "center 22%" },
  { type: "photo", src: "assets/gallery/cut-7.jpg", caption: "", alt: "Back view of a short cut with a taper" },
  { type: "photo", src: "assets/gallery/cut-8.jpg", caption: "", alt: "Wavy hair, side view" },
];
