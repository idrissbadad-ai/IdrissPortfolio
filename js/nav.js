// ============================================================
// Navigation et footer partagés sur toutes les pages.
// Pour ajouter/renommer une page : modifie uniquement NAV_LINKS
// ci-dessous, ça se répercute automatiquement partout.
// ============================================================

const NAV_LINKS = [
  { href: "index.html", label: "Mon profil", page: "profil" },
  { href: "realisations.html", label: "Réalisations professionnelles", page: "realisations" },
  { href: "veille.html", label: "Veille technologique", page: "veille" },
  { href: "rectorat.html", label: "Rectorat", page: "rectorat" }
];

function renderNav() {
  const mount = document.querySelector("[data-site-nav]");
  if (!mount) return;

  const currentPage = document.body.dataset.page || "";

  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.setAttribute("aria-label", "Navigation principale");

  nav.innerHTML = `
    <div class="wrap">
      <ul class="nav-links">
        ${NAV_LINKS.map(link => `
          <li><a href="${link.href}"${link.page === currentPage ? ' class="active" aria-current="page"' : ""}>${link.label}</a></li>
        `).join("")}
      </ul>
      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
    </div>
  `;

  mount.replaceWith(nav);
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
