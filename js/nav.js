// ============================================================
// Navigation et footer partagés sur toutes les pages.
// Pour ajouter/renommer une page : modifie uniquement NAV_LINKS
// ci-dessous, ça se répercute automatiquement partout.
// ============================================================

const NAV_LINKS = [
  { href: "index.html", label: "Mon profil", page: "profil" },
  { href: "realisations.html", label: "Réalisations professionnelles", page: "realisations" },
  { href: "veille.html", label: "Veille technologique", page: "veille" },
  {
    label: "Rectorat",
    children: [
      { href: "rectorat.html", label: "E5", page: "rectorat" },
      { href: "rectorat-e6.html", label: "E6", page: "rectorat-e6" }
    ]
  }
];

function renderNav() {
  const mount = document.querySelector("[data-site-nav]");
  if (!mount) return;

  const currentPage = document.body.dataset.page || "";
  const initials = (CONTENT.profile.firstName[0] || "") + (CONTENT.profile.lastName[0] || "");

  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.setAttribute("aria-label", "Navigation principale");

  const linksHtml = NAV_LINKS.map(link => {
    if (link.children) {
      const isParentActive = link.children.some(c => c.page === currentPage);
      const childrenHtml = link.children.map(child => `
        <a href="${child.href}"${child.page === currentPage ? ' class="active" aria-current="page"' : ""}>${child.label}</a>
      `).join("");
      return `
        <li class="nav-dropdown">
          <button type="button" class="nav-dropdown-trigger${isParentActive ? " active" : ""}">${link.label} <span class="nav-dropdown-arrow">▾</span></button>
          <div class="nav-dropdown-menu">${childrenHtml}</div>
        </li>
      `;
    }
    return `<li><a href="${link.href}"${link.page === currentPage ? ' class="active" aria-current="page"' : ""}>${link.label}</a></li>`;
  }).join("");

  nav.innerHTML = `
    <div class="wrap">
      <ul class="nav-links">${linksHtml}</ul>
      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
    </div>
  `;

  mount.replaceWith(nav);
  initNavDropdowns();
}

function initNavDropdowns() {
  document.querySelectorAll(".nav-dropdown-trigger").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = trigger.closest(".nav-dropdown");
      const isOpen = dropdown.classList.contains("open");
      document.querySelectorAll(".nav-dropdown.open").forEach(d => d.classList.remove("open"));
      if (!isOpen) dropdown.classList.add("open");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-dropdown.open").forEach(d => d.classList.remove("open"));
  });
}

function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="wrap">
      © <span data-year></span> — <span data-full-name>Prénom Nom</span> — Portfolio BTS SIO SLAM
    </div>
  `;
  mount.replaceWith(footer);
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initScrollTopButton() {
  const btn = document.createElement("button");
  btn.className = "scroll-top-btn";
  btn.setAttribute("aria-label", "Remonter en haut de la page");
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
}
