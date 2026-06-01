(function () {
  "use strict";

  const translations = {
    fr: {},
    en: {}
  };

  let currentLang = "fr";

  try {
    currentLang = localStorage.getItem("i18n-lang") || "fr";
  } catch (e) {
    currentLang = "fr";
  }

  function t(key, lang = currentLang) {
    return (translations[lang] && translations[lang][key]) || key;
  }

  function updateDOM() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value && value !== key) {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-lang-switcher] [data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "fr";
    try {
      localStorage.setItem("i18n-lang", currentLang);
    } catch (e) {}
    updateDOM();
  }

  function switchLang(lang) {
    setLanguage(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang-switcher] [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });

    updateDOM();
  });

  window.I18N = { t, setLanguage, getLanguage: () => currentLang };
  window.switchLang = switchLang;
})();
