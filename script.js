// Booking link used by every "Book" button on the page
const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0UjPtJcfBA-aLopesDjRm_BAy6O2QgBzfdG4esqzQrdxKEREC4SrlNGe_8fjV171M1Wu7a_Krc";

document.querySelectorAll("[data-book]").forEach((a) => {
  a.href = BOOKING_URL;
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  document.body.classList.toggle("nav-open", !open);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  }
});

// Copy discount code
const codeBtn = document.querySelector(".code");
codeBtn.addEventListener("click", async () => {
  const label = codeBtn.querySelector(".code__label");
  try {
    await navigator.clipboard.writeText(codeBtn.dataset.code);
    label.textContent = "Copied";
  } catch {
    label.textContent = "Code: " + codeBtn.dataset.code;
  }
  setTimeout(() => (label.textContent = "Copy code"), 2000);
});

// Gallery
const grid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxMedia = lightbox.querySelector(".lightbox__media");

function placeholder(item) {
  const el = document.createElement("div");
  el.className = "tile tile--empty";
  el.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">${
      item.type === "video"
        ? '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>'
        : '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>'
    }</svg>
    <span>${item.type === "video" ? "Video" : "Photo"} coming soon</span>`;
  return el;
}

function openLightbox(item) {
  lightboxMedia.innerHTML = "";
  let media;
  if (item.type === "video") {
    media = document.createElement("video");
    media.src = item.src;
    media.controls = true;
    media.autoplay = true;
    media.playsInline = true;
  } else {
    media = document.createElement("img");
    media.src = item.src;
    media.alt = item.caption || "Haircut by Anshu Blends";
  }
  lightboxMedia.append(media);
  if (item.caption) {
    const cap = document.createElement("p");
    cap.textContent = item.caption;
    lightboxMedia.append(cap);
  }
  lightbox.showModal();
}

function closeLightbox() {
  lightbox.close();
}
lightbox.addEventListener("close", () => (lightboxMedia.innerHTML = ""));
lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

(window.GALLERY || []).forEach((item) => {
  let tile;
  if (!item.src) {
    tile = placeholder(item);
  } else {
    tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";
    tile.setAttribute("aria-label", `View ${item.type}${item.caption ? ": " + item.caption : ""}`);
    if (item.type === "video") {
      const v = document.createElement("video");
      v.src = item.src;
      if (item.poster) v.poster = item.poster;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = "metadata";
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.autoplay = true;
      tile.append(v);
      tile.insertAdjacentHTML("beforeend", '<span class="tile__play" aria-hidden="true"></span>');
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.caption || "Haircut by Anshu Blends";
      img.loading = "lazy";
      tile.append(img);
    }
    if (item.caption) {
      const cap = document.createElement("span");
      cap.className = "tile__caption";
      cap.textContent = item.caption;
      tile.append(cap);
    }
    tile.addEventListener("click", () => openLightbox(item));
  }
  if (item.type === "video") tile.classList.add("tile--tall");
  grid.append(tile);
});
