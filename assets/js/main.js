(function (window, document) {
  const BICP = window.BICP || (window.BICP = {});
  const i18n = BICP.i18n || {};
  const applyTranslations = i18n.applyTranslations || (() => {});
  const getCurrentLang = i18n.getCurrentLang || (() => "en");

  function initNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!navToggle || !navLinks) {
      return;
    }

    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  function initLanguageSwitch() {
    const langButtons = document.querySelectorAll(".lang-btn");
    if (!langButtons.length) {
      return;
    }

    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang") || "en";
        localStorage.setItem("BICP-lang", lang);
        langButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyTranslations(lang);
        if (BICP.calendar && typeof BICP.calendar.initCalendarButton === "function") {
          BICP.calendar.initCalendarButton();
        }
      });
    });

    const savedLang = getCurrentLang();
    applyTranslations(savedLang);
    langButtons.forEach((btn) => {
      if (btn.getAttribute("data-lang") === savedLang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function initFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function initPricing() {
    if (
      document.getElementById("pricing-page") &&
      BICP.pricing &&
      typeof BICP.pricing.initPricingPage === "function"
    ) {
      BICP.pricing.initPricingPage();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initLanguageSwitch();
    initFooterYear();
    initPricing();

    if (BICP.calendar && typeof BICP.calendar.initCalendarButton === "function") {
      BICP.calendar.initCalendarButton();
    }
  });
})(window, document);
