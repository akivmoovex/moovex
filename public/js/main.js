const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navOverlay = document.querySelector(".nav-overlay");

function setNavOpen(isOpen) {
  mainNav.classList.toggle("open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

function closeNav() {
  if (!mainNav.classList.contains("open")) {
    return;
  }
  setNavOpen(false);
}

function toggleNav() {
  setNavOpen(!mainNav.classList.contains("open"));
}

if (navToggle && mainNav) {
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", toggleNav);

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNav);
  }

  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  const navDrawerClose = mainNav.querySelector(".nav-drawer-close");
  if (navDrawerClose) {
    navDrawerClose.addEventListener("click", closeNav);
  }
}
