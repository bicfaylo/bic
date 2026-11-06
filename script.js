// ============================================================
//  EDIT THIS SECTION to update the content of the site.
//  Logos: put files in images/logos/ with the names used below
//  (e.g. images/logos/fieldlink.png). Until a logo file exists,
//  a text wordmark is shown in its place.
// ============================================================
const ROLES = ["IoT Engineer", "Embedded Systems Developer", "Full-Stack Developer", "Robotics & AI Builder", "Tech Entrepreneur"];

const SOCIAL = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/baraka_chongera", icon: "linkedin" },
  { label: "GitHub", url: "https://github.com/bicfaylo", icon: "github" },
  { label: "Email", url: "mailto:chongerabaraka1@gmail.com", icon: "mail" },
  // { label: "Instagram", url: "https://instagram.com/YOUR_HANDLE", icon: "instagram" },
  // { label: "GitLab", url: "https://gitlab.com/YOUR_USERNAME", icon: "gitlab" },
];

const PROJECTS = [
  {
    title: "Tone Salama: Smart Water Purification & Vending",
    year: "2025", tags: ["IoT", "STM32", "GSM"],
    images: ["images/tone-salama-demo.jpg", "images/tone-salama-unit.jpg"],
    summary: "An IoT-enabled filtration and coin-operated vending unit that brings safe, affordable drinking water to communities.",
    points: [
      "Remote monitoring of water quality, usage and sales.",
      "Built on STM32 with GSM telemetry to a central dashboard.",
      "Deployed and commercialised: 26 units across 4 regions, serving 26 customers.",
    ],
    badge: "🏆 Innovation of the Year, Mzumbe University Innovation Day 2025",
  },
  {
    title: "English Teaching Robot: Interactive AI Classroom Robot",
    year: "2026", tags: ["Robotics", "AI", "EdTech"],
    images: ["images/robot-group.jpg", "images/robot-single.jpg"],
    summary: "An interactive, voice-based robot that helps Tanzanian primary school students learn English.",
    points: [
      "Runs from a laptop dashboard over a mobile router.",
      "Designed and built the hardware, including a 3D-printed head and speaker/microphone body.",
      "Multiple units deployed in a live classroom.",
    ],
    badge: "🎓 Led to a guest lecture invitation at MUHAS",
  },
  {
    title: "Field Link: Student Field Attachment Platform",
    year: "2026 – Present", tags: ["Founder", "Web Platform", "WhatsApp"],
    logo: "images/logos/fieldlink.png", wordmark: ["Field Link", "fieldlink.ac"],
    link: { label: "Visit fieldlink.ac", url: "https://fieldlink.ac" },
    summary: "A web platform matching university and college students to field attachment placements.",
    points: [
      "Students apply for placements via the web and WhatsApp and are matched to host organisations.",
      "135+ student applications received; 60+ students placed across 20+ host organisations.",
    ],
  },
  {
    title: "Chimbo Mkononi: Agent-Based Digital Commerce",
    year: "2026 – Present", tags: ["Founder", "E-commerce", "Platform"],
    logo: "images/chimbo-logo.jpg",
    link: { label: "Visit chimbomkononi.co.tz", url: "https://www.chimbomkononi.co.tz" },
    summary: "A platform connecting buyers across Tanzania to verified Kariakoo sellers through certified agents.",
    points: [
      "Lead product, technology and business operations, from platform architecture to seller onboarding and growth.",
      "Built end-to-end ordering, payment, and agent and customer-management workflows.",
      "Onboarded 12 verified sellers and 8 agents, processing 150+ orders to date.",
    ],
  },
  {
    title: "MUHAS Digital Health & Innovation Event System",
    year: "Oct 2026 – Present", tags: ["Full-Stack", "Events", "Digital Health"],
    logo: "images/logos/muhas.png", wordmark: ["MUHAS", "Digital Health & Innovation"],
    link: { label: "Visit muhas-dhi.ac.tz", url: "https://muhas-dhi.ac.tz" },
    summary: "The event management system and official website for MUHAS's Digital Health and Innovation conference.",
    points: [
      "Delegate registration, payment-linked QR name tags, on-site check-in and email reminders.",
      "Maintain the official event website: speaker profiles, new content pages, and design and usability improvements.",
    ],
  },
];

const SKILLS = [
  { icon: "📡", name: "IoT & Embedded", list: ["Arduino", "ESP32", "STM32", "LoRa", "GSM", "Sensors", "PCB prototyping"] },
  { icon: "💻", name: "Programming & Web", list: ["C", "Python", "Java", "JavaScript", "HTML/CSS", "Bootstrap 5", "REST APIs"] },
  { icon: "🤖", name: "Robotics & AI", list: ["Robot design", "3D printing", "Voice interaction", "AI & LLM APIs"] },
  { icon: "🗄️", name: "Databases & Tools", list: ["PostgreSQL", "MySQL", "Git/GitLab", "Docker", "Linux", "Graphic design"] },
];

const EXPERIENCE = [
  { role: "Digital Health Developer", org: "Muhimbili University of Health and Allied Sciences (MUHAS)", when: "Oct 2026 – Present", text: "Developing the event management system for the Digital Health and Innovation conference, and maintaining the official event website." },
  { role: "Founder", org: "Field Link", when: "2026 – Present", text: "Built and run fieldlink.ac. Placed 60+ students across 20+ host organisations from 135+ applications." },
  { role: "Founder", org: "Chimbo Mkononi", when: "2026 – Present", text: "Agent-based digital commerce platform with 12 verified sellers, 8 agents and 150+ orders." },
  { role: "Guest Lecturer (Robotics & AI)", org: "MUHAS", when: "Aug 2026", text: "Invited to teach robotics and AI fundamentals to master's students in digital health, in recognition of the English teaching robot." },
  { role: "Founder", org: "BIC Tech Solutions", when: "2024 – Present", text: "IoT, embedded and full-stack solutions for clients across Mbeya, Morogoro and Dar es Salaam, covering the full cycle from requirements to after-sales support." },
  { role: "Call Centre Assistant (Part-time)", org: "Catholic University College of Mbeya", when: "Feb – Sep 2023", text: "Handled front-line enquiries, resolving or routing 75 calls per day, with front-office admin support." },
  { role: "Graphic Designer & IT Technician (Part-time)", org: "Reconciliation Community, Mbeya", when: "Aug – Nov 2022", text: "Produced digital and print designs and maintained office computers, networks and peripherals." },
];

const EDUCATION = [
  { role: "Bachelor of ICT with Management", org: "Mzumbe University, Morogoro", when: "2024 – Present", text: "Information systems, programming and management." },
  { role: "Diploma in ICT", org: "Catholic University College of Mbeya (CUCoM)", when: "2020 – 2022", text: "GPA: 3.57 / 5.0" },
  { role: "Certificate in ICT", org: "St. Augustine University of Tanzania (SAUT), Mbeya", when: "2019 – 2020", text: "GPA: 4.65 / 5.0" },
];

const AWARDS = [
  { role: "Innovation of the Year", org: "Mzumbe University Innovation Day", when: "2025", text: "Awarded for Tone Salama, an IoT-enabled smart water purification and vending system." },
  { role: "Best Emerging Startup of the Year", org: "Mzumbe University Innovation Day", when: "2025", text: "Awarded for RolaCall, a LoRa-based digital customer care system." },
];

const PARTNERS = [
  { name: "MUHAS", note: "Digital health & teaching" },
  { name: "Mzumbe University", note: "Innovation Day awards" },
  { name: "IEEE Region 8", note: "University STEM Outreach" },
  { name: "Funguo Programme", note: "Youth Ignite Fellowship" },
  { name: "CUCoM", note: "Diploma & staff role" },
  { name: "SAUT Mbeya", note: "Certificate in ICT" },
];

const GALLERY = [
  { src: "images/robot-group.jpg", caption: "English teaching robots" },
  { src: "images/funguo-fellowship.jpg", caption: "Funguo Youth Ignite Student Founders Fellowship" },
  { src: "images/tone-salama-demo.jpg", caption: "Demonstrating Tone Salama" },
  { src: "images/presenting-2.jpg", caption: "Presenting at a tech workshop" },
  { src: "images/funguo-panel.jpg", caption: "Youth Ignite fellowship session" },
  { src: "images/profile.jpg", caption: "IEEE Region 8 University STEM Outreach" },
  { src: "images/technology-showcase.jpg", caption: "Technology showcase" },
  { src: "images/workshop-1.jpg", caption: "Hands-on technical workshop" },
  { src: "images/exhibition-booth.jpg", caption: "Exhibition booth" },
  { src: "images/exhibition-products.jpg", caption: "Engaging visitors at an exhibition" },
  { src: "images/workshop-2.jpg", caption: "Collaborating with partners" },
  { src: "images/presenting-1.jpg", caption: "Pitching to partners" },
  { src: "images/tone-salama-unit.jpg", caption: "A deployed Tone Salama water point" },
  { src: "images/notes.jpg", caption: "Planning the next build" },
];

const REFEREES = [
  { name: "Priscilla Kessy", role: "Assistant Lecturer", org: "University of Dodoma (UDOM)" },
  { name: "Lugano Emmanuel Mwakapuku", role: "ICT Officer / Software Developer", org: "Ministry of Water" },
  { name: "Queen-Ruth Msina", role: "Regional Digital Health Advisor", org: "East African Community Secretariat" },
];
// ============================================================

const $ = (s) => document.querySelector(s);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

const ICONS = {
  linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.7V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z"/>',
  github: '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>',
  mail: '<path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 10V9.85l-8 5-8-5V17z"/>',
  instagram: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.05 0-4.1.06C4.6 2.2 2.2 4.6 2.06 7.9 2 8.95 2 9.3 2 12s0 3.05.06 4.1c.15 3.3 2.55 5.7 5.84 5.84C8.95 22 9.3 22 12 22s3.05 0 4.1-.06c3.3-.15 5.7-2.55 5.84-5.84C22 15.05 22 14.7 22 12s0-3.05-.06-4.1C21.8 4.6 19.4 2.2 16.1 2.06 15.05 2 14.7 2 12 2z"/>',
  gitlab: '<path d="M12 21.5 15.7 10H8.3zM12 21.5 8.3 10H3.1zM3.1 10l-1.1 3.4a.75.75 0 0 0 .27.84L12 21.5zM3.1 10h5.2L6.06 3.1a.38.38 0 0 0-.72 0zM12 21.5 15.7 10h5.2zM20.9 10l1.1 3.4a.75.75 0 0 1-.27.84L12 21.5zM20.9 10h-5.2l2.24-6.9a.38.38 0 0 1 .72 0z"/>',
};

// Preloader
window.addEventListener("load", () => setTimeout(() => $("#preloader").classList.add("done"), 300));
setTimeout(() => $("#preloader").classList.add("done"), 2500);
document.querySelectorAll(".load-text span").forEach((s, i) => s.style.setProperty("--i", i));

// Sticky nav + mobile menu + active link
const nav = $("#navbar"), menu = $("#navMenu");
const onScroll = () => {
  nav.classList.toggle("sticky", window.scrollY > 40);
  let current = "top";
  document.querySelectorAll("main section[id]").forEach((s) => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  menu.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", onScroll); onScroll();
$("#navToggle").onclick = () => menu.classList.toggle("open");
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

// Rotating roles (typing effect)
(() => {
  const t = $("#rotator"); let r = 0, i = ROLES[0].length, del = true;
  const tick = () => {
    const w = ROLES[r];
    if (del) { i--; if (i === 0) { del = false; r = (r + 1) % ROLES.length; } }
    else { i++; if (i === ROLES[r].length) { del = true; t.textContent = ROLES[r]; return setTimeout(tick, 1800); } }
    t.textContent = ROLES[r].slice(0, i) || " ";
    setTimeout(tick, del ? 45 : 85);
  };
  setTimeout(tick, 2200);
})();

// Social icons
SOCIAL.forEach((s) => {
  const li = el("li"), a = el("a"); a.href = s.url; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", s.label);
  a.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[s.icon] || ""}</svg>`; li.append(a); $("#social").append(li);
});

// Media helper: image, or logo with wordmark fallback
function logoTile(p) {
  const box = el("div", "pf-logo");
  const showWordmark = () => {
    box.innerHTML = ""; const w = el("div", "wordmark");
    w.append(el("b", null, p.wordmark ? p.wordmark[0] : p.title), el("small", null, p.wordmark ? p.wordmark[1] : ""));
    box.append(w);
  };
  if (p.logo) { const img = el("img"); img.src = p.logo; img.alt = p.title + " logo"; img.onerror = showWordmark; box.append(img); }
  else showWordmark();
  return box;
}

// Portfolio
PROJECTS.forEach((p, idx) => {
  const item = el("div", "pf-item reveal");
  const thumb = el("div", "pf-thumb");
  if (p.images) { const img = el("img"); img.src = p.images[0]; img.alt = p.title; img.loading = "lazy"; thumb.append(img); }
  else thumb.append(logoTile(p));
  const ov = el("div", "pf-overlay"), tags = el("div", "pf-tags");
  p.tags.forEach((t) => tags.append(el("span", null, t)));
  ov.append(tags, el("span", "pf-arrow", "→")); thumb.append(ov);
  item.append(thumb, el("h4", null, p.title), el("div", "pf-meta", p.year));
  item.onclick = () => openProject(idx);
  $("#portfolioGrid").append(item);
});

const modal = $("#modal");
function openProject(idx) {
  const p = PROJECTS[idx], body = $("#modalBody"); body.innerHTML = "";
  const media = el("div", "m-media");
  if (p.images) p.images.forEach((src) => { const img = el("img"); img.src = src; img.alt = p.title; media.append(img); });
  else media.append(logoTile(p));
  const c = el("div", "m-content"), tags = el("div", "pf-tags");
  p.tags.forEach((t) => tags.append(el("span", null, t)));
  c.append(tags, el("h3", null, p.title), el("p", null, p.year + " · " + p.summary));
  const ul = el("ul"); p.points.forEach((x) => ul.append(el("li", null, x))); c.append(ul);
  if (p.badge) c.append(el("div", "m-badge", p.badge));
  if (p.link) { const l = el("div", "m-links"), a = el("a", "btn", p.link.label + " ↗"); a.href = p.link.url; a.target = "_blank"; a.rel = "noopener"; l.append(a); c.append(l); }
  body.append(media, c); modal.hidden = false; document.body.style.overflow = "hidden";
}
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; };
$("#modalClose").onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };

// Skills
SKILLS.forEach((s) => {
  const card = el("div", "skill reveal"); card.append(el("div", "s-icon", s.icon), el("h4", null, s.name));
  const chips = el("div", "chips"); s.list.forEach((x) => chips.append(el("span", null, x))); card.append(chips);
  $("#skillsGrid").append(card);
});

// Timelines
const fillTimeline = (sel, list) => list.forEach((x) => {
  const it = el("div", "tl-item reveal"), head = el("div", "tl-head"), left = el("div");
  left.append(el("h4", null, x.role), el("p", null, x.org)); head.append(left, el("span", "when", x.when));
  it.append(head, el("p", null, x.text)); $(sel).append(it);
});
fillTimeline("#expTimeline", EXPERIENCE);
fillTimeline("#eduTimeline", EDUCATION);
fillTimeline("#awardTimeline", AWARDS);

// Partners
PARTNERS.forEach((p) => { const d = el("div", "partner reveal"); d.append(el("b", null, p.name), el("span", null, p.note)); $("#partners").append(d); });

// Gallery + lightbox
const lb = $("#lightbox");
GALLERY.forEach((g) => {
  const f = el("figure", "reveal"), img = el("img"); img.src = g.src; img.alt = g.caption; img.loading = "lazy";
  f.append(img, el("figcaption", null, g.caption));
  f.onclick = () => { lb.querySelector("img").src = g.src; lb.querySelector(".caption").textContent = g.caption; lb.hidden = false; };
  $("#galleryGrid").append(f);
});
lb.onclick = (e) => { if (e.target.tagName !== "IMG") lb.hidden = true; };
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { lb.hidden = true; closeModal(); } });

// Referees
REFEREES.forEach((r) => {
  const c = el("div", "referee reveal");
  c.append(el("div", "avatar", r.name.split(" ").map((w) => w[0]).slice(0, 2).join("")), el("h4", null, r.name), el("p", "role", r.role), el("p", "org", r.org));
  $("#refereesGrid").append(c);
});

// Contact form -> email app
$("#contactForm").onsubmit = (e) => {
  e.preventDefault();
  const name = $("#cName").value, email = $("#cEmail").value, phone = $("#cPhone").value, msg = $("#cMsg").value;
  const body = `${msg}\n\nFrom: ${name}\nEmail: ${email}${phone ? "\nPhone: " + phone : ""}`;
  window.location.href = `mailto:chongerabaraka1@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(body)}`;
};

// Counters + reveal on scroll
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  const t = en.target; io.unobserve(t);
  if (t.classList.contains("timer")) {
    const to = +t.dataset.to, start = performance.now();
    const step = (now) => { const k = Math.min((now - start) / 1500, 1); t.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  } else t.classList.add("in");
}), { threshold: 0.12 });
document.querySelectorAll(".timer, .reveal").forEach((x) => io.observe(x));
document.querySelectorAll(".service, .fact, .about-imgs img, .heading").forEach((x) => { x.classList.add("reveal"); io.observe(x); });

$("#year").textContent = new Date().getFullYear();
