(function (window, document) {
  const BICP = window.BICP || (window.BICP = {});
  const translations = window.BICP_TRANSLATIONS || { en: {}, tr: {} };

  function getCurrentLang() {
    return localStorage.getItem("BICP-lang") || "en";
  }

  function t(key) {
    const lang = getCurrentLang();
    const dict = translations[lang] || translations.en || {};
    return dict[key] || (translations.en && translations.en[key]) || key;
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en || {};

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    document.documentElement.lang = lang;

    if (BICP.calendar && typeof BICP.calendar.updateButtonLabel === "function") {
      BICP.calendar.updateButtonLabel();
    }
  }

  BICP.i18n = {
    translations,
    getCurrentLang,
    t,
    applyTranslations
  };
})(window, document);
