(function () {
  "use strict";

  function setYear() {
    const year = document.querySelector("#year");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  function setupReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
  }

  function setupActiveNav() {
    const navLinks = [...document.querySelectorAll(".nav-primary a[href^='#']")];
    if (!navLinks.length) return;

    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href");
        return id && id.length > 1 ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const setActiveById = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveById(entry.target.id);
        });
      },
      { rootMargin: "-44% 0px -44% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function init() {
    setYear();
    setupReveal();
    setupActiveNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
