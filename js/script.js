// ============================================================
// Ce fichier lit CONTENT (défini dans content.js) et construit
// le contenu de chaque page. Tu n'as normalement pas besoin
// d'y toucher. La nav/footer sont gérés dans nav.js.
// ============================================================

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html) node.innerHTML = opts.html;
  if (opts.text) node.textContent = opts.text;
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  }
  children.forEach(c => c && node.appendChild(c));
  return node;
}

function slugify(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // retire les accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderProfile() {
  const p = CONTENT.profile;
  const fullName = `${p.firstName} ${p.lastName}`;

  document.querySelectorAll("[data-full-name]").forEach(n => n.textContent = fullName);
  document.querySelectorAll("[data-role]").forEach(n => n.textContent = p.role);
  document.querySelectorAll("[data-tagline]").forEach(n => n.textContent = p.tagline);
  document.querySelectorAll("[data-about]").forEach(n => n.textContent = p.aboutText);
  document.querySelectorAll("[data-location]").forEach(n => n.textContent = p.location);
  document.querySelectorAll("[data-email]").forEach(n => {
    n.textContent = p.email;
    n.setAttribute("href", `mailto:${p.email}`);
  });

  const linkedinEl = document.querySelector("[data-linkedin]");
  if (linkedinEl) {
    if (p.linkedin) { linkedinEl.href = p.linkedin; } else { linkedinEl.style.display = "none"; }
  }
  const githubEl = document.querySelector("[data-github]");
  if (githubEl) {
    if (p.github) { githubEl.href = p.github; } else { githubEl.style.display = "none"; }
  }
  const cvEl = document.querySelector("[data-cv]");
  if (cvEl) cvEl.href = p.cvFile;

  const photoContainer = document.querySelector("[data-photo-container]");
  if (photoContainer) {
    if (p.photo) {
      photoContainer.appendChild(el("img", { class: "about-photo", attrs: { src: p.photo, alt: `Photo de ${fullName}` } }));
    } else {
      photoContainer.appendChild(el("div", { class: "about-photo-placeholder", text: "Ta photo ici (assets/photo.jpg)" }));
    }
  }
}

function renderSkills() {
  const container = document.querySelector("[data-skills]");
  if (!container) return;

  CONTENT.skillCategories.forEach(cat => {
    const catBlock = el("div", { class: "skills-category" });
    catBlock.appendChild(el("div", { class: "skills-category-name", text: cat.category }));

    const list = el("ul", { class: "skill-list" });
    cat.items.forEach(item => {
      list.appendChild(el("li", { class: "skill-item", text: item }));
    });
    catBlock.appendChild(list);

    container.appendChild(catBlock);
  });
}

function renderFormations() {
  const container = document.querySelector("[data-formations]");
  if (!container || !CONTENT.formations) return;

  CONTENT.formations.forEach(f => {
    const item = el("div", { class: "timeline-item" });
    item.appendChild(el("div", { class: "timeline-period", text: f.periode }));

    const body = el("div");
    body.appendChild(el("div", { class: "timeline-title", text: f.diplome }));
    body.appendChild(el("div", { class: "timeline-org", text: `${f.etablissement} — ${f.lieu}` }));
    if (f.detail) body.appendChild(el("p", { class: "timeline-detail", text: f.detail }));
    item.appendChild(body);

    container.appendChild(item);
  });
}

function renderExperiences() {
  const container = document.querySelector("[data-experiences]");
  if (!container || !CONTENT.experiences) return;

  CONTENT.experiences.forEach(e => {
    const item = el("div", { class: "timeline-item" });
    item.appendChild(el("div", { class: "timeline-period", text: e.periode }));

    const body = el("div");
    body.appendChild(el("div", { class: "timeline-title", text: e.poste }));
    body.appendChild(el("div", { class: "timeline-org", text: e.entreprise }));
    if (e.description) body.appendChild(el("p", { class: "timeline-detail", text: e.description }));
    item.appendChild(body);

    container.appendChild(item);
  });
}

function renderVieAssociative() {
  const container = document.querySelector("[data-vie-associative]");
  const v = CONTENT.vieAssociative;
  if (!container || !v) return;

  const card = el("div", { class: "assoc-card" });

  const head = el("div", { class: "assoc-head" });
  head.appendChild(el("h3", { text: v.organisation }));
  head.appendChild(el("span", { class: "assoc-period", text: v.periode }));
  card.appendChild(head);

  card.appendChild(el("div", { class: "assoc-role", text: v.role }));

  if (v.missions && v.missions.length) {
    const list = el("ul", { class: "assoc-missions" });
    v.missions.forEach(m => list.appendChild(el("li", { text: m })));
    card.appendChild(list);
  }

  container.appendChild(card);
}

const CONTACT_ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">in</text></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="9 18 3 12 9 6"/><polyline points="15 6 21 12 15 18"/></svg>'
};

function renderContactInfo() {
  const container = document.querySelector("[data-contact]");
  const p = CONTENT.profile;
  if (!container) return;

  const items = [];
  if (p.phone) items.push({ icon: "phone", label: "Téléphone", value: p.phone, href: `tel:${p.phone.replace(/\s+/g, "")}` });
  if (p.email) items.push({ icon: "email", label: "Email", value: p.email, href: `mailto:${p.email}` });
  if (p.location) items.push({ icon: "location", label: "Localisation", value: p.location });
  if (p.linkedin) items.push({ icon: "linkedin", label: "LinkedIn", value: "Voir le profil →", href: p.linkedin });
  if (p.github) items.push({ icon: "github", label: "GitHub", value: "Voir le profil →", href: p.github });

  items.forEach(info => {
    const item = el("div", { class: "info-item" });

    const labelWrap = el("span", { class: "info-label" });
    labelWrap.appendChild(el("span", { class: "info-icon", html: CONTACT_ICONS[info.icon] }));
    labelWrap.appendChild(document.createTextNode(info.label));
    item.appendChild(labelWrap);

    if (info.href) {
      item.appendChild(el("a", {
        class: "info-value",
        text: info.value,
        attrs: { href: info.href, target: info.href.startsWith("http") ? "_blank" : "_self", rel: "noopener" }
      }));
    } else {
      item.appendChild(el("span", { class: "info-value", text: info.value }));
    }

    container.appendChild(item);
  });
}

function groupProjectsByCategory() {
  const groups = {};
  CONTENT.projects.forEach((proj, i) => {
    const key = proj.categorie || "non-classe";
    if (!groups[key]) groups[key] = [];
    groups[key].push({ ...proj, index: i });
  });
  return groups;
}

function renderProjectsHub() {
  const container = document.querySelector("[data-projects-hub]");
  if (!container || !CONTENT.projects) return;

  const groups = groupProjectsByCategory();

  PROJECT_CATEGORIES.forEach(cat => {
    const items = groups[cat.key];
    if (!items || items.length === 0) return;

    const groupWrap = el("div", { class: "hub-group" });
    groupWrap.appendChild(el("div", { class: "hub-group-title", text: cat.label }));

    const grid = el("div", { class: "hub-links-grid" });
      items.forEach(proj => {
      const link = el("a", { class: "hub-link", attrs: { href: `#projet-${slugify(proj.title)}` } });
      link.appendChild(el("span", { class: "hub-num", text: String(proj.index + 1).padStart(2, "0") }));
      link.appendChild(el("span", { text: proj.title }));
      grid.appendChild(link);
    });
    groupWrap.appendChild(grid);

    container.appendChild(groupWrap);
  });
}

function renderProjects() {
  const container = document.querySelector("[data-projects]");
  if (!container || !CONTENT.projects) return;

  const groups = groupProjectsByCategory();

  PROJECT_CATEGORIES.forEach(cat => {
    const items = groups[cat.key];
    if (!items || items.length === 0) return;

    const group = el("div", { class: "project-group" });

    const groupHead = el("div", { class: "section-head project-group-head" });
    groupHead.appendChild(el("h2", { text: cat.label }));
    group.appendChild(groupHead);

    items.forEach(proj => {
      const card = el("div", { class: "project-card", attrs: { id: `projet-${slugify(proj.title)}` } });

      card.appendChild(el("span", { class: "project-num", text: `Réalisation ${String(proj.index + 1).padStart(2, "0")}` }));

      if (proj.image) {
        card.appendChild(el("img", { attrs: { src: proj.image, alt: `Capture du projet ${proj.title}` } }));
      }
      if (proj.context) card.appendChild(el("div", { class: "project-context", text: proj.context }));
      card.appendChild(el("h3", { text: proj.title }));
      card.appendChild(el("p", { text: proj.description }));

      if (proj.stack && proj.stack.length) {
        const stackWrap = el("div", { class: "project-stack" });
        proj.stack.forEach(t => stackWrap.appendChild(el("span", { class: "tag", text: t })));
        card.appendChild(stackWrap);
      }

      if (proj.link || proj.repo) {
        const links = el("div", { class: "project-links" });
        if (proj.link) links.appendChild(el("a", { text: "Voir la démo →", attrs: { href: proj.link, target: "_blank", rel: "noopener" } }));
        if (proj.repo) links.appendChild(el("a", { text: "Code source →", attrs: { href: proj.repo, target: "_blank", rel: "noopener" } }));
        card.appendChild(links);
      }
      
          if (proj.gallery && proj.gallery.length) {
            const galleryClass = proj.galleryStyle === "compact" ? "project-gallery project-gallery--compact" : "project-gallery";
            const gallery = el("div", { class: galleryClass });
            proj.gallery.forEach(item => {
            const block = el("div", { class: "project-gallery-item" });
            block.appendChild(el("img", { attrs: { src: item.image, alt: item.caption || proj.title } }));
            if (item.caption) block.appendChild(el("p", { class: "project-gallery-caption", text: item.caption }));
            gallery.appendChild(block);
          });
          card.appendChild(gallery);
      }

      group.appendChild(card);
    });

    container.appendChild(group);
  });
}

function formatVeilleDate(dateStr) {
  const [year, month] = dateStr.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  const idx = parseInt(month, 10) - 1;
  return `${months[idx] || month} ${year}`;
}

function renderVeille() {
  const container = document.querySelector("[data-veille]");
  if (!container) return;

  if (!CONTENT.veille || CONTENT.veille.length === 0) return;
  const sorted = [...CONTENT.veille].sort((a, b) => b.date.localeCompare(a.date));
  
  sorted.forEach(entry => {
    const item = el("div", { class: "veille-item" });
    item.appendChild(el("div", { class: "veille-date", text: formatVeilleDate(entry.date) }));

    const body = el("div");
    const titleNode = entry.url
      ? el("a", { text: entry.title, attrs: { href: entry.url, target: "_blank", rel: "noopener" } })
      : el("span", { text: entry.title });
    const titleWrap = el("div", { class: "veille-title" });
    titleWrap.appendChild(titleNode);
    body.appendChild(titleWrap);

    if (entry.source) body.appendChild(el("div", { class: "veille-source", text: entry.source }));
    body.appendChild(el("p", { text: entry.summary }));

    if (entry.tags && entry.tags.length) {
      const tagsWrap = el("div", { class: "veille-tags" });
      entry.tags.forEach(t => tagsWrap.appendChild(el("span", { class: "tag", text: t })));
      body.appendChild(tagsWrap);
    }

    item.appendChild(body);
    container.appendChild(item);
  });
}

function renderVeilleIntro() {
  const vi = CONTENT.veilleIntro;
  if (!vi) return;

  const presEl = document.querySelector("[data-veille-presentation]");
  if (presEl) presEl.textContent = vi.presentation;

  const whyEl = document.querySelector("[data-veille-pourquoi]");
  if (whyEl) whyEl.textContent = vi.pourquoi;

  const bornagesContainer = document.querySelector("[data-veille-bornages]");
  if (bornagesContainer && vi.bornages) {
    vi.bornages.forEach(b => {
      const card = el("div", { class: "content-card" });
      card.appendChild(el("h3", { text: b.title }));
      card.appendChild(el("p", { text: b.description }));
      bornagesContainer.appendChild(card);
    });
  }

  const outilsContainer = document.querySelector("[data-veille-outils]");
  if (outilsContainer && vi.outils) {
    vi.outils.forEach(o => {
      const card = el("div", { class: "content-card" });
      card.appendChild(el("h3", { text: o.name }));
      card.appendChild(el("p", { text: o.description }));
      if (o.url) {
        card.appendChild(el("a", { class: "card-link", text: "Voir la source →", attrs: { href: o.url, target: "_blank", rel: "noopener" } }));
      }
      outilsContainer.appendChild(card);
    });
  }
}

function renderRectorat() {
  const r = CONTENT.rectorat;
  if (!r) return;

  const introEl = document.querySelector("[data-rectorat-intro]");
  if (introEl) introEl.textContent = r.introText;

  const infoContainer = document.querySelector("[data-rectorat-infos]");
  if (infoContainer && r.infos) {
    r.infos.forEach(info => {
      const item = el("div", { class: "info-item" });
      item.appendChild(el("span", { class: "info-label", text: info.label }));
      item.appendChild(el("span", { class: "info-value", text: info.value }));
      infoContainer.appendChild(item);
    });
  }

  const docsContainer = document.querySelector("[data-rectorat-docs]");
  if (docsContainer && r.documents) {
    const rendered = new Set();
    r.documents.forEach((doc, i) => {
      if (rendered.has(i)) return;

      if (doc.group) {
        const groupDocs = r.documents
          .map((d, idx) => ({ ...d, idx }))
          .filter(d => d.group === doc.group);
        groupDocs.forEach(d => rendered.add(d.idx));
        docsContainer.appendChild(buildDocPreviewGroup(groupDocs));
      } else if (doc.preview) {
        docsContainer.appendChild(buildDocPreviewCard(doc));
      } else {
        docsContainer.appendChild(buildDocRow(doc));
      }
    });
  }
}

function buildDocRow(doc) {
  const item = el("div", { class: "doc-item" });
  const text = el("div");
  text.appendChild(el("h3", { text: doc.title }));
  if (doc.description) text.appendChild(el("p", { text: doc.description }));
  item.appendChild(text);

  if (doc.file) {
    item.appendChild(el("a", {
      class: "btn btn-secondary",
      text: "Télécharger",
      attrs: { href: doc.file, target: "_blank", rel: "noopener" }
    }));
  } else {
    item.appendChild(el("span", { class: "tag", text: "À déposer" }));
  }

  return item;
}

function buildDocPreviewCard(doc) {
  const card = el("div", { class: "doc-preview-card" });
  card.appendChild(el("h3", { text: doc.title }));
  if (doc.description) card.appendChild(el("p", { class: "doc-preview-intro", text: doc.description }));

  const thumb = el("button", {
    class: "doc-preview-thumb",
    attrs: { type: "button", "aria-label": `Agrandir : ${doc.title}` }
  });
  thumb.appendChild(el("img", { attrs: { src: doc.preview, alt: `Aperçu — ${doc.title}` } }));
  thumb.appendChild(el("span", { class: "zoom-hint", text: "Cliquer pour agrandir" }));
  thumb.addEventListener("click", () => openLightbox(doc.preview, doc.title));
  card.appendChild(thumb);

  if (doc.file) {
    const dl = el("a", {
      class: "btn btn-secondary",
      text: "Télécharger le document",
      attrs: { href: doc.file, target: "_blank", rel: "noopener" }
    });
    card.appendChild(dl);
  }

  return card;
}

function buildDocPreviewGroup(docs) {
  const group = el("div", { class: "doc-preview-group" });
  docs.forEach(doc => {
    if (doc.preview) {
      group.appendChild(buildDocPreviewCard(doc));
    } else {
      group.appendChild(buildDocPlaceholderCard(doc));
    }
  });
  return group;
}

function buildDocPlaceholderCard(doc) {
  const card = el("div", { class: "doc-preview-card" });
  card.appendChild(el("h3", { text: doc.title }));
  if (doc.description) card.appendChild(el("p", { class: "doc-preview-intro", text: doc.description }));

  const box = el("div", { class: "doc-placeholder-box" });
  box.appendChild(el("span", { text: "À venir" }));
  card.appendChild(box);

  return card;
}

function ensureLightbox() {
  let overlay = document.querySelector(".lightbox-overlay");
  if (overlay) return overlay;

  overlay = el("div", { class: "lightbox-overlay", attrs: { role: "dialog", "aria-modal": "true" } });
  const closeBtn = el("button", { class: "lightbox-close", html: "&times;", attrs: { type: "button", "aria-label": "Fermer" } });
  const img = el("img", { attrs: { alt: "" } });

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  return overlay;
}

function openLightbox(src, alt) {
  const overlay = ensureLightbox();
  const img = overlay.querySelector("img");
  img.src = src;
  img.alt = alt || "";
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function initFooterYear() {
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".project-card, .timeline-item, .content-card, .assoc-card, .doc-preview-card, .doc-item, .veille-item, .skills-category, .info-item"
  );
  if (!("IntersectionObserver" in window) || targets.length === 0) return;

  targets.forEach(t => t.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(t => observer.observe(t));
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  renderProfile();
  renderFormations();
  renderExperiences();
  renderSkills();
  renderVieAssociative();
  renderContactInfo();
  renderProjectsHub();
  renderProjects();
  renderVeilleIntro();
  renderVeille();
  renderRectorat();
  initNavToggle();
  initFooterYear();
  initScrollReveal();
});
