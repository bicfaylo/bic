// ============================================================
//  EDIT THIS SECTION — your info and your works.
//  Put your phone photos in the /images folder and reference
//  them below, e.g. image: "images/my-photo.jpg"
// ============================================================
const PROFILE = {
  name: "Bic Faylo",
  tagline: "Creative & builder — here's a collection of the work I've been doing.",
  avatar: "images/profile.jpg",
  about: "Write a few sentences about yourself here: who you are, what you do, and what you love working on.",
  skills: ["Photography", "Design", "Web Development", "Video Editing"],
  links: [
    { label: "Email", url: "mailto:chongerabaraka2@gmail.com" },
    { label: "GitHub", url: "https://github.com/bicfaylo" },
    { label: "Instagram", url: "https://instagram.com/" },
  ],
};

const WORKS = [
  { title: "Project One",   category: "Photography", image: "images/work1.jpg", description: "Short description of this work." },
  { title: "Project Two",   category: "Design",      image: "images/work2.jpg", description: "Short description of this work." },
  { title: "Project Three", category: "Web",         image: "images/work3.jpg", description: "Short description of this work." },
  { title: "Project Four",  category: "Photography", image: "images/work4.jpg", description: "Short description of this work." },
  { title: "Project Five",  category: "Design",      image: "images/work5.jpg", description: "Short description of this work." },
  { title: "Project Six",   category: "Web",         image: "images/work6.jpg", description: "Short description of this work." },
];
// ============================================================

const $ = (s) => document.querySelector(s);

// Placeholder shown until a real photo is added
const placeholder = (text) =>
  "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#22252e"/><text x="50%" y="50%" fill="#666b78" font-family="sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle">${text}</text></svg>`
  );
const setImg = (img, src, label) => {
  img.src = src;
  img.onerror = () => { img.onerror = null; img.src = placeholder(label); };
};

document.title = `${PROFILE.name} — Portfolio`;
$("#logo").textContent = PROFILE.name;
$("#name").textContent = PROFILE.name;
$("#footer-name").textContent = PROFILE.name;
$("#tagline").textContent = PROFILE.tagline;
$("#about-text").textContent = PROFILE.about;
$("#year").textContent = "© " + new Date().getFullYear();
setImg($("#avatar"), PROFILE.avatar, "Photo");
PROFILE.skills.forEach((s) => { const li = document.createElement("li"); li.textContent = s; $("#skills").append(li); });
PROFILE.links.forEach((l) => { const a = document.createElement("a"); a.href = l.url; a.textContent = l.label; a.target = "_blank"; $("#links").append(a); });

const grid = $("#grid");
function render(filter) {
  grid.innerHTML = "";
  WORKS.filter((w) => filter === "All" || w.category === filter).forEach((w) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<img alt=""><div class="info"><span class="cat"></span><h3></h3><p></p></div>`;
    setImg(card.querySelector("img"), w.image, w.title);
    card.querySelector("img").alt = w.title;
    card.querySelector(".cat").textContent = w.category;
    card.querySelector("h3").textContent = w.title;
    card.querySelector("p").textContent = w.description;
    card.onclick = () => openLightbox(card.querySelector("img").src, `${w.title} — ${w.description}`);
    grid.append(card);
  });
}

const cats = ["All", ...new Set(WORKS.map((w) => w.category))];
cats.forEach((c) => {
  const b = document.createElement("button");
  b.textContent = c;
  if (c === "All") b.classList.add("active");
  b.onclick = () => {
    document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    render(c);
  };
  $("#filters").append(b);
});
render("All");

const lb = $("#lightbox");
function openLightbox(src, caption) {
  lb.querySelector("img").src = src;
  lb.querySelector(".caption").textContent = caption;
  lb.hidden = false;
}
lb.onclick = (e) => { if (e.target !== lb.querySelector("img")) lb.hidden = true; };
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });
