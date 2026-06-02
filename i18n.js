(function () {
  "use strict";
  const translations = {
    fr: {
      "nav.why": "Pourquoi nous",
      "nav.services": "Services",
      "nav.method": "Méthode",
      "nav.offers": "Offres",
      "nav.reviews": "Avis",
      "nav.faq": "FAQ",
      "nav.book": "Réserver un appel",
      "mobile.home": "Accueil",
      "mobile.results": "Réalisations",
      "mobile.testimonials": "Témoignages",
      "mobile.contact": "Contact",
      "hero.badge": "Agence marketing & communication",
      "hero.title.line1": "Votre marque mérite",
      "hero.title.line2": "d'être vue, reconnue",
      "hero.title.line3": "et choisie.",
      "hero.desc": "Nous développons votre présence digitale, animons vos réseaux sociaux et transformons votre audience en clients — avec stratégie, créativité et rigueur.",
      "hero.book.discovery": "Réserver un appel découverte",
      "hero.discover": "Découvrir nos services →",
      "hero.stat.clients": "Clients accompagnés",
      "hero.stat.satisfaction": "Satisfaction client",
      "hero.stat.years": "Années d'expertise",
      "hero.performance": "Performance réseaux sociaux",
      "hero.performance.badge": "↑ +68% ce mois"
    },
    en: {
      "nav.why": "Why us",
      "nav.services": "Services",
      "nav.method": "Method",
      "nav.offers": "Offers",
      "nav.reviews": "Reviews",
      "nav.faq": "FAQ",
      "nav.book": "Book a call",
      "mobile.home": "Home",
      "mobile.results": "Case Studies",
      "mobile.testimonials": "Testimonials",
      "mobile.contact": "Contact",
      "hero.badge": "Marketing & communication agency",
      "hero.title.line1": "Your brand deserves",
      "hero.title.line2": "to be seen, recognized",
      "hero.title.line3": "and chosen.",
      "hero.desc": "We grow your digital presence, manage your social channels and turn your audience into customers — with strategy, creativity and rigor.",
      "hero.book.discovery": "Book a discovery call",
      "hero.discover": "Discover our services →",
      "hero.stat.clients": "Clients supported",
      "hero.stat.satisfaction": "Client satisfaction",
      "hero.stat.years": "Years of expertise",
      "hero.performance": "Social media performance",
      "hero.performance.badge": "↑ +68% this month"
    }
  };
  let currentLang = "fr";
  try { currentLang = localStorage.getItem("i18n-lang") || "fr"; } catch (e) { currentLang = "fr"; }
  function t(key, lang = currentLang) { return (translations[lang] && translations[lang][key]) || (translations.fr && translations.fr[key]) || key; }
  function setNodeText(el, value) {
    const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (!textNodes.length) { el.textContent = value; return; }
    textNodes[0].textContent = value;
    for (let i = 1; i < textNodes.length; i++) textNodes[i].textContent = '';
  }
  function updateDOM() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (!value || value === key) return;
      if (el.children.length === 0) el.textContent = value;
      else setNodeText(el, value);
    });
    document.querySelectorAll('[data-lang-switcher] [data-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }
  function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'fr';
    try { localStorage.setItem('i18n-lang', currentLang); } catch (e) {}
    updateDOM();
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang-switcher] [data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
    updateDOM();
  });
  window.I18N = { t, setLanguage, getLanguage: () => currentLang };
  window.switchLang = setLanguage;
})();