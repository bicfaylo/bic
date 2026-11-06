// ============================================================
//  EDIT THIS FILE to update the content of the site.
// ============================================================
const LINKS = [
  { label: "Email", url: "mailto:chongerabaraka1@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/baraka_chongera" },
  { label: "GitHub", url: "https://github.com/bicfaylo" },
  // Add more, e.g.:
  // { label: "Instagram", url: "https://instagram.com/YOUR_HANDLE" },
  // { label: "GitLab", url: "https://gitlab.com/YOUR_USERNAME" },
];

const PROJECTS = [
  {
    title: "Tone Salama: Smart Water Purification & Vending",
    year: "2025", tags: ["IoT", "STM32", "GSM"],
    images: ["images/tone-salama-demo.jpg", "images/tone-salama-unit.jpg"],
    summary: "An IoT-enabled water filtration and coin-operated vending unit that brings safe, affordable drinking water to communities.",
    points: [
      "STM32-based unit with GSM telemetry to a central dashboard for water quality, usage and sales.",
      "Deployed and commercialised: 26 units across 4 regions of Tanzania.",
    ],
    badge: "🏆 Innovation of the Year, Mzumbe Innovation Day 2025",
  },
  {
    title: "Chimbo Mkononi: Agent-Based Digital Commerce",
    year: "2026 – Present", tags: ["Founder", "Web Platform", "E-commerce"],
    images: ["images/chimbo-logo.jpg"],
    summary: "A platform that connects buyers across Tanzania to verified Kariakoo sellers through a network of trusted, certified field agents.",
    points: [
      "Built end-to-end ordering, payment, and agent and customer-management workflows.",
      "Onboarded 12 verified sellers and 8 agents, processing 38 orders to date.",
    ],
  },
  {
    title: "RolaCall: LoRa Digital Customer Care System",
    year: "2025", tags: ["LoRa", "Hardware", "Dashboard"],
    icon: "📡",
    summary: "A long-range wireless call-and-response system for hotels, restaurants and hospitals that works without Wi-Fi.",
    points: [
      "Designed the hardware (transmitter buttons and receiver base).",
      "Built the dashboard and software integration.",
    ],
    badge: "🚀 Best Emerging Startup of the Year, Mzumbe Innovation Day 2025",
  },
  {
    title: "Interactive English Teaching Robot",
    year: "2026", tags: ["Robotics", "Speech", "EdTech"],
    icon: "🤖",
    summary: "A speech-enabled robot that helps primary school pupils learn English through interactive question-and-answer lessons.",
    points: [
      "Designed the 3D-printed head, speaker and microphone unit, and the software.",
      "Lessons run from a laptop dashboard over a local wireless network.",
      "Deployed in a Tanzanian primary school classroom, with multiple units built.",
    ],
    badge: "🎓 Led to an invited guest lecture at MUHAS",
  },
];

const EXPERIENCE = [
  { role: "Founder, Chimbo Mkononi", when: "2026 – Present", text: "Lead product, technology and business operations, from platform architecture to seller onboarding and growth." },
  { role: "Guest Lecturer (Invited), MUHAS", when: "Aug 2026", text: "Taught robotics and AI to master's students in digital health." },
  { role: "Founder, BIC Tech Solutions", when: "2024 – Present", text: "IoT, embedded and full-stack solutions for clients across Mbeya, Morogoro and Dar es Salaam: requirements, hardware, firmware, backend, deployment and support." },
  { role: "Call Centre Assistant, Catholic University College of Mbeya", when: "Feb – Sep 2023", text: "Resolved or routed about 75 student and public enquiries per day, and supported front-office records." },
  { role: "Graphic Designer & IT Technician, Reconciliation Community, Mbeya", when: "Aug – Nov 2022", text: "Produced print and digital designs; maintained office computers, networks and peripherals." },
];

const GALLERY = [
  { src: "images/funguo-fellowship.jpg", caption: "Funguo Youth Ignite Student Founders Fellowship" },
  { src: "images/tone-salama-demo.jpg", caption: "Demonstrating Tone Salama" },
  { src: "images/presenting-2.jpg", caption: "Presenting at a tech workshop" },
  { src: "images/funguo-panel.jpg", caption: "Youth Ignite fellowship session" },
  { src: "images/profile.jpg", caption: "IEEE Region 8 University STEM Outreach" },
  { src: "images/technology-showcase.jpg", caption: "Technology showcase" },
  { src: "images/workshop-1.jpg", caption: "Hands-on technical workshop" },
  { src: "images/exhibition-booth.jpg", caption: "Exhibition booth" },
  { src: "images/speaking.jpg", caption: "Speaking at a session" },
  { src: "images/exhibition-products.jpg", caption: "Engaging visitors at an exhibition" },
  { src: "images/workshop-2.jpg", caption: "Collaborating with partners" },
  { src: "images/presenting-1.jpg", caption: "Pitching to partners" },
  { src: "images/tone-salama-unit.jpg", caption: "A deployed Tone Salama water point" },
  { src: "images/notes.jpg", caption: "Planning the next build" },
];

const SKILLS = {
  "IoT & Embedded": ["Arduino", "ESP32", "STM32", "LoRa", "GSM telemetry", "Sensors", "PCB prototyping"],
  "Software": ["C", "Python", "Java", "JavaScript", "HTML/CSS", "Bootstrap 5", "REST APIs"],
  "Data & Tools": ["PostgreSQL", "MySQL", "Git/GitLab", "Docker", "Linux"],
  "Leadership": ["Project management", "Public speaking", "Team collaboration", "Graphic design", "Social media"],
};
// ============================================================

const $ = (s) => document.querySelector(s);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

const lb = $("#lightbox");
function openLightbox(src, caption) { lb.querySelector("img").src = src; lb.querySelector(".caption").textContent = caption || ""; lb.hidden = false; }
lb.onclick = (e) => { if (e.target.tagName !== "IMG") lb.hidden = true; };
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

PROJECTS.forEach((p) => {
  const card = el("article", "project");
  const media = el("div", "p-media" + (p.images && p.images.length > 1 ? " two" : ""));
  if (p.images) p.images.forEach((src) => {
    const img = el("img"); img.src = src; img.alt = p.title; img.loading = "lazy";
    img.onclick = () => openLightbox(src, p.title); media.append(img);
  });
  else media.append(el("div", "ph", p.icon));
  const body = el("div", "p-body");
  const meta = el("div", "p-meta");
  p.tags.forEach((t) => meta.append(el("span", "tag", t)));
  meta.append(el("span", "year", p.year));
  body.append(meta, el("h3", null, p.title), el("p", null, p.summary));
  const ul = el("ul"); p.points.forEach((x) => ul.append(el("li", null, x))); body.append(ul);
  if (p.badge) body.append(el("span", "badge", p.badge));
  card.append(media, body);
  $("#projects-grid").append(card);
});

EXPERIENCE.forEach((x) => {
  const d = el("div", "t-item");
  d.append(el("span", "when", x.when), el("h3", null, x.role), el("p", null, x.text));
  $("#timeline").append(d);
});

GALLERY.forEach((g) => {
  const f = el("figure"); const img = el("img"); img.src = g.src; img.alt = g.caption; img.loading = "lazy";
  f.append(img, el("figcaption", null, g.caption)); f.onclick = () => openLightbox(g.src, g.caption);
  $("#gallery-grid").append(f);
});

Object.entries(SKILLS).forEach(([group, list]) => {
  const s = el("div", "skill"); s.append(el("h3", null, group));
  const c = el("div", "chips"); list.forEach((x) => c.append(el("span", null, x))); s.append(c);
  $("#skills-grid").append(s);
});

LINKS.forEach((l) => { const a = el("a", null, l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener"; $("#links").append(a); });
$("#year").textContent = new Date().getFullYear();
