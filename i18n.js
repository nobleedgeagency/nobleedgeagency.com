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
      "hero.performance.badge": "↑ +68% ce mois",
      "hero.chart.newFollowers": "Nouveaux abonnés",
      "hero.chart.engagementRate": "Taux d'engagement",
      "hero.chart.organicReach": "Portée organique",
      "hero.chart.leadsGenerated": "Leads générés",
      "hero.publish.label": "Publication planifiée",
      "hero.publish.desc": "7 posts cette semaine",
      "hero.report.label": "Rapport livré",
      "hero.report.desc": "Résultats du mois",
      "hero.feature.strategy": "Stratégie personnalisée",
      "hero.feature.results": "Résultats mesurables",
      "hero.feature.human": "Accompagnement humain",
      "hero.feature.datadriven": "Pilotage data-driven",
      "hero.feature.timesaving": "Gain de temps garanti",
      "hero.feature.multichannel": "Expertise multi-canal",
      "why.label": "Pourquoi Noble Edge",
      "why.title.line1": "Arrêtez de publier au hasard.",
      "why.title.line2": "Commencez à construire une marque.",
      "why.subtitle": "Beaucoup de marques sont présentes sur les réseaux. Peu construisent quelque chose de solide. Nous, si.",
      "why.1.title": "Stratégie éditoriale taillée pour toi",
      "why.1.desc": "Pas de contenu copié-collé. Chaque stratégie est construite selon ton secteur, tes objectifs et ton audience.",
      "why.2.title": "Identité visuelle et ton cohérents",
      "why.2.desc": "Charte graphique, voix éditoriale, univers visuel : une identité reconnaissable sur tous tes réseaux.",
      "why.3.title": "Création de contenus régulière",
      "why.3.desc": "Reels, carrousels, stories, posts LinkedIn : des contenus adaptés à chaque plateforme, chaque semaine.",
      "why.4.title": "Tu récupères du temps",
      "why.4.desc": "Fini les heures sur les réseaux. Nous gérons ta présence digitale, tu te concentres sur ton cœur de métier.",
      "why.5.title": "Contenus qui engagent et vendent",
      "why.5.desc": "Chaque contenu est stratégique : engagement, attractivité clientes, leads et réservations.",
      "why.6.title": "Décisions basées sur les données",
      "why.6.desc": "Analyses chiffrées, rapports clairs, ajustements en temps réel. Tu vois l'impact de chaque action.",
      "why.7.title": "Vision orientée ROI",
      "why.7.desc": "Pas juste de la belle com. Nous mesurons engagement, leads, conversions et impact business.",
      "why.8.title": "Un vrai partenaire, pas un prestataire",
      "why.8.desc": "Ajustements rapides, écoute permanente, adaptation à tes besoins. Tu n'es jamais seul.",
      "services.label": "Nos Services",
      "services.title": "Tout ce qu'il faut pour dominer votre marché digital",
      "services.subtitle": "Nous couvrons vos réseaux sociaux, votre visibilité en ligne et votre acquisition clients.",
      "services.1.title": "Community Management clé en main",
      "services.1.desc": "Gestion complète de vos réseaux (Instagram, TikTok, LinkedIn, Facebook, YouTube Shorts, Pinterest). Stratégie, création, publication, modération et collaborations d'influenceurs.",
      "services.1.btn": "Engagement & communauté",
      "services.2.title": "Publicité en ligne (Ads)",
      "services.2.desc": "Campagnes Meta Ads, Google Ads, generation de leads, retargeting et optimisation continue.",
      "services.2.btn": "Leads à la demande",
      "services.3.title": "SEO & Référencement",
      "services.3.desc": "Optimisation on-page, mots-clés, rédaction SEO, SEO local et visibilité organique.",
      "services.3.btn": "Visible sur Google",
      "services.4.title": "Web & Landing Pages",
      "services.4.desc": "Création ou optimisation de landing pages à forte conversion, avec un UX pensé pour convertir les visiteurs.",
      "services.4.btn": "Plus de conversions",
      "services.5.title": "Email marketing & automation",
      "services.5.desc": "Newsletters, séquences automatisées, relances prospects et parcours de nurturing.",
      "services.5.btn": "Revenus automatisés",
      "services.6.title": "Reporting & Analyse",
      "services.6.desc": "Tableaux de bord personnalisés, monitoring KPI, et recommandations stratégiques mensuelles.",
      "services.6.btn": "Décisions plus intelligentes",
      "method.label": "Notre Méthode",
      "method.title": "Notre méthode : Un processus structuré pour des résultats durables",
      "method.subtitle": "Chaque action suit une méthodologie éprouvée en 6 étapes pour maximiser l'impact de chaque euro investi.",
      "method.01.title": "Audit",
      "method.01.desc": "État des lieux complet de votre présence actuelle : réseaux, site, contenu, concurrents, audience.",
      "method.02.title": "Stratégie",
      "method.02.desc": "Définition d'un plan éditorial sur mesure, objectifs SMART et calendrier de publication.",
      "method.03.title": "Création",
      "method.03.desc": "Production de contenus professionnels : visuels, vidéos, copywriting, charte graphique et brand book.",
      "method.04.title": "Diffusion",
      "method.04.desc": "Publication programmatique optimisée par algorithme, community management et campagnes publicitaires.",
      "method.05.title": "Analyse",
      "method.05.desc": "Reporting détaillé mensuel : KPIs, ROI, insights comportementaux et recommandations d'ajustement.",
      "method.06.title": "Optimisation",
      "method.06.desc": "Amélioration continue basée sur les données : A/B testing, ajustement des formats et des plannings.",
      "offers.label": "Nos Offres",
      "offers.title": "Un accompagnement 100% sur mesure",
      "offers.subtitle": "Pas de pack prédéfini. Chaque mission est construite selon vos objectifs, votre secteur et votre budget.",
      "offers.cm.label": "Community Management Sur Mesure",
      "offers.cm.desc": "Une stratégie adaptée à votre marque, vos réseaux, vos objectifs.",
      "results.label": "Nos Résultats",
      "results.title": "Des chiffres qui parlent pour nous",
      "results.subtitle": "Chaque client est une histoire de transformation. Voici ce que notre accompagnement produit concrètement.",
      "results.1.industry": "Restauration",
      "results.1.result": "Restaurant local → marque incontournable",
      "results.2.industry": "E-commerce / Mode",
      "results.2.result": "Boutique en ligne → audience engagée",
      "results.3.industry": "Prestataire de services",
      "results.3.result": "Coach / Consultant → autorité digitale",
      "reviews.label": "Avis Clients",
      "reviews.title": "Ils nous font confiance",
      "reviews.subtitle": "La preuve par les témoignages de nos clients.",
      "reviews.1.name": "Sophie M.",
      "reviews.1.role": "Restauratrice",
      "reviews.1.text": "Depuis que Enzo gère nos réseaux, notre restaurant affiche complet presque tous les week-ends. Stratégie, réactivité et créativité — je recommande les yeux fermés.",
      "reviews.2.name": "Thomas R.",
      "reviews.2.role": "Fondateur startup tech",
      "reviews.2.text": "En 2 mois, notre engagement a été multiplié par 4 et notre pipeline de leads LinkedIn rempli. Communication transparente et résultats concrets.",
      "reviews.3.name": "Amélie D.",
      "reviews.3.role": "Coach sportive",
      "reviews.3.text": "J'avais essayé de gérer mes réseaux moi-même pendant 8 mois... Enrique a tout restructuré en 3 semaines. Mon engagement a explosé.",
      "reviews.4.name": "Karim B.",
      "reviews.4.role": "Agent immobilier",
      "reviews.4.text": "Un audit complet, des objectifs clairs et un plan d'action précis en une semaine. Résultats visibles dès le premier mois.",
      "reviews.5.name": "Laura V.",
      "reviews.5.role": "Fondatrice marque lifestyle",
      "reviews.5.text": "Enzo a refondu notre identité visuelle et optimisé chaque post. Notre reach organique a doublé en 6 semaines.",
      "faq.label": "FAQ",
      "faq.title": "Vos questions, nos réponses",
      "faq.subtitle": "Tout ce que vous voulez savoir sur notre façon de travailler.",
      "faq.1.q": "Quels réseaux sociaux gérez-vous ?",
      "faq.1.a": "Instagram, Facebook, LinkedIn, TikTok, YouTube Shorts, Pinterest et X.",
      "faq.2.q": "Travaillez-vous avec tous les secteurs d'activité ?",
      "faq.2.a": "Oui. Nous avons accompagné des restaurants, startups tech, coachs, marques e-commerce, agences immobilières, prestataires de services et bien d'autres. Notre approche s'adapte à chaque secteur.",
      "faq.3.q": "Comment fonctionne votre offre sur mesure ?",
      "faq.3.a": "Après un appel découverte gratuit, nous établissons un calendrier éditorial personnalisé, créons les contenus, programmons les publications et assurons le suivi communautaire. Un report mensuel vous permet de suivre les performances.",
      "faq.4.q": "Créez-vous aussi les visuels et les textes ?",
      "faq.4.a": "Oui, tout est inclus. Design visuel, rédaction, vidéo, photos : nous gérons la production de A à Z pour garantir une qualité et une cohérence maximale.",
      "faq.5.q": "Comment se passe le premier échange ?",
      "faq.5.a": "Nous faisons un audit rapide de votre présence actuelle. Puis nous identifions ensemble vos objectifs, analysons votre audience et définissons une stratégie claire avec des KPIs mesurables.",
      "faq.6.q": "Faites-vous aussi la publicité payante ?",
      "faq.6.a": "Oui. Nous gérons Meta Ads et Google Ads, avec optimisation continue pour un ROI maximal.",
      "faq.7.q": "Y a-t-il un engagement minimum ?",
      "faq.7.a": "Nous recommandons un minimum de 3 mois pour voir des résultats significatifs. Cependant, nous pouvons adapter le contrat à vos besoins.",
      "contact.label": "Contact",
      "contact.title": "Parlez-nous de votre projet",
      "contact.subtitle": "Prenez 30 minutes pour nous parler de votre projet. Aucun engagement, aucune pression.",
      "contact.form.firstname": "Votre prénom",
      "contact.form.firstname.ph": "Votre prénom",
      "contact.form.lastname": "Votre nom",
      "contact.form.lastname.ph": "Votre nom",
      "contact.form.email": "Email professionnel",
      "contact.form.email.ph": "vous@exemple.com",
      "contact.form.company": "Entreprise",
      "contact.form.company.ph": "Votre entreprise",
      "contact.form.select": "— Sélectionnez une option —",
      "contact.form.select.label": "Quel service vous intéresse ?",
      "contact.form.select.cm": "Community Management",
      "contact.form.select.strategy": "Stratégie de communication",
      "contact.form.select.content": "Création de contenu",
      "contact.form.select.branding": "Branding & Identité visuelle",
      "contact.form.select.ads": "Publicité en ligne (Ads)",
      "contact.form.select.seo": "SEO & Référencement",
      "contact.form.select.web": "Web & Landing page",
      "contact.form.select.email": "Email marketing & Automation",
      "contact.form.select.360": "Accompagnement 360°",
      "contact.form.message": "Décrivez votre projet",
      "contact.form.message.ph": "Parlez-nous de votre projet...",
      "contact.form.submit": "Envoyer ma demande →",
      "contact.form.success": "✅ Message envoyé !",
      "contact.form.success.desc": "Votre messagerie mail vient de s'ouvrir avec votre demande pré-remplie. Cliquez sur Envoyer pour finaliser.",
      "contact.form.confidential": "Vos informations sont confidentielles et ne seront jamais partagées.",
      "footer.about.title": "À propos",
      "footer.about.desc": "Noble Edge Agency. Agence marketing & communication spécialisée en community management, stratégie digitale et création de contenu.",
      "footer.links": "Liens rapides",
      "footer.links.why": "Pourquoi nous",
      "footer.links.services": "Nos services",
      "footer.links.results": "Nos résultats",
      "footer.links.contact": "Contact",
      "footer.copy": "© 2026 Noble Edge Agency. Tous droits réservés.",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "CGV",
      "footer.cookies": "Cookies",
      "cookie.reject": "Refuser",
      "cookie.pref.title": "Préférences cookies",
      "cookie.pref.desc": "Vous pouvez personnaliser vos choix. Les cookies nécessaires restent actifs pour faire fonctionner le site.",
      "cookie.necessary": "Cookies nécessaires",
      "cookie.necessary.desc": "Indispensables au fonctionnement du site et toujours actifs.",
      "cookie.analytics": "Cookies de mesure d'audience",
      "cookie.analytics.desc": "Nous aident à comprendre l'utilisation du site et à l'améliorer.",
      "cookie.personalization": "Cookies de personnalisation",
      "cookie.personalization.desc": "Permettent d'adapter certains contenus ou outils embarqués.",
      "cookie.cancel": "Annuler",
      "cookie.save": "Enregistrer"
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
      "mobile.results": "Results",
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
      "hero.performance.badge": "↑ +68% this month",
      "hero.chart.newFollowers": "New followers",
      "hero.chart.engagementRate": "Engagement rate",
      "hero.chart.organicReach": "Organic reach",
      "hero.chart.leadsGenerated": "Leads generated",
      "hero.publish.label": "Scheduled posts",
      "hero.publish.desc": "7 posts this week",
      "hero.report.label": "Report delivered",
      "hero.report.desc": "Monthly results",
      "hero.feature.strategy": "Custom strategy",
      "hero.feature.results": "Measurable results",
      "hero.feature.human": "Human support",
      "hero.feature.datadriven": "Data-driven approach",
      "hero.feature.timesaving": "Guaranteed time savings",
      "hero.feature.multichannel": "Multi-channel expertise",
      "why.label": "Why Noble Edge",
      "why.title.line1": "Stop posting at random.",
      "why.title.line2": "Start building a brand.",
      "why.subtitle": "Many brands are present on social media. Few build something truly solid. We do.",
      "why.1.title": "Editorial strategy tailored to you",
      "why.1.desc": "No copy-paste content. Every strategy is built based on your sector, your goals and your audience.",
      "why.2.title": "Consistent visual identity and tone",
      "why.2.desc": "Brand guidelines, editorial voice, visual universe: a recognizable identity across all your networks.",
      "why.3.title": "Regular content creation",
      "why.3.desc": "Reels, carousels, stories, LinkedIn posts: content adapted to each platform, every week.",
      "why.4.title": "You get your time back",
      "why.4.desc": "No more hours on social media. We manage your digital presence, you focus on your core business.",
      "why.5.title": "Content that engages and converts",
      "why.5.desc": "Every post is strategic: engagement, customer attraction, leads and bookings.",
      "why.6.title": "Data-driven decisions",
      "why.6.desc": "Detailed analytics, clear reports, real-time adjustments. You see the impact of every action.",
      "why.7.title": "ROI-oriented vision",
      "why.7.desc": "Not just pretty communication. We measure engagement, leads, conversions and business impact.",
      "why.8.title": "A real partner, not a vendor",
      "why.8.desc": "Quick adjustments, constant listening, adaptation to your needs. You are never alone.",
      "services.label": "Our Services",
      "services.title": "Everything you need to dominate your digital market",
      "services.subtitle": "We cover your social media, your online visibility and your customer acquisition.",
      "services.1.title": "All-in-one Community Management",
      "services.1.desc": "Complete management of your networks (Instagram, TikTok, LinkedIn, Facebook, YouTube Shorts, Pinterest). Strategy, creation, posting, moderation and influencer collaborations.",
      "services.1.btn": "Engagement & community",
      "services.2.title": "Online Advertising (Ads)",
      "services.2.desc": "Meta Ads, Google Ads, lead generation, retargeting and continuous optimisation.",
      "services.2.btn": "Leads on demand",
      "services.3.title": "SEO & Ranking",
      "services.3.desc": "On-page optimisation, keywords, SEO writing, local SEO and organic visibility.",
      "services.3.btn": "Visible on Google",
      "services.4.title": "Web & Landing Pages",
      "services.4.desc": "Creation or optimisation of conversion-focused landing pages, with UX designed to convert visitors.",
      "services.4.btn": "More conversions",
      "services.5.title": "Email marketing & automation",
      "services.5.desc": "Newsletters, automated sequences, prospect follow-ups and nurturing flows.",
      "services.5.btn": "Automated revenue",
      "services.6.title": "Reporting & Analysis",
      "services.6.desc": "Custom dashboards, KPI monitoring and monthly strategic recommendations.",
      "services.6.btn": "Smarter decisions",
      "method.label": "Our Method",
      "method.title": "Our method: A structured process for lasting results",
      "method.subtitle": "Every action follows a proven 6-step methodology to maximise the impact of every euro invested.",
      "method.01.title": "Audit",
      "method.01.desc": "Full assessment of your current presence: networks, website, content, competitors, audience.",
      "method.02.title": "Strategy",
      "method.02.desc": "Definition of a custom editorial plan, SMART objectives and content calendar.",
      "method.03.title": "Creation",
      "method.03.desc": "Production of professional content: visuals, videos, copywriting, brand guidelines and brand book.",
      "method.04.title": "Distribution",
      "method.04.desc": "Programmatic posting optimised by algorithm, community management and ad campaigns.",
      "method.05.title": "Analysis",
      "method.05.desc": "Detailed monthly reporting: KPIs, ROI, behavioural insights and adjustment recommendations.",
      "method.06.title": "Optimisation",
      "method.06.desc": "Continuous improvement based on data: A/B testing, format and scheduling adjustments.",
      "offers.label": "Our Offers",
      "offers.title": "100% bespoke support",
      "offers.subtitle": "No predefined package. Every mission is built according to your goals, your sector and your budget.",
      "offers.cm.label": "Custom Community Management",
      "offers.cm.desc": "A strategy adapted to your brand, your networks, your objectives.",
      "results.label": "Our Results",
      "results.title": "Numbers that speak for themselves",
      "results.subtitle": "Every client is a story of transformation. Here is what our support concretely produces.",
      "results.1.industry": "Restaurant",
      "results.1.result": "Local restaurant → unmissable brand",
      "results.2.industry": "E-commerce / Fashion",
      "results.2.result": "Online shop → engaged audience",
      "results.3.industry": "Service provider",
      "results.3.result": "Coach / Consultant → digital authority",
      "reviews.label": "Client Reviews",
      "reviews.title": "They trust us",
      "reviews.subtitle": "Proof through our clients' testimonials.",
      "reviews.1.name": "Sophie M.",
      "reviews.1.role": "Restaurant owner",
      "reviews.1.text": "Since Enzo manages our social media, our restaurant is almost fully booked every weekend. Strategy, responsiveness and creativity — I recommend with my eyes closed.",
      "reviews.2.name": "Thomas R.",
      "reviews.2.role": "Tech startup founder",
      "reviews.2.text": "In 2 months, our engagement multiplied by 4 and our LinkedIn leads pipeline filled up. Transparent communication and concrete results.",
      "reviews.3.name": "Amélie D.",
      "reviews.3.role": "Fitness coach",
      "reviews.3.text": "I tried managing my social media myself for 8 months... Enrique restructured everything in 3 weeks. My engagement exploded.",
      "reviews.4.name": "Karim B.",
      "reviews.4.role": "Estate agent",
      "reviews.4.text": "A full audit, clear objectives and a precise action plan in one week. Visible results from the first month.",
      "reviews.5.name": "Laura V.",
      "reviews.5.role": "Lifestyle brand founder",
      "reviews.5.text": "Enzo redesigned our visual identity and optimised every post. Our organic reach doubled in 6 weeks.",
      "faq.label": "FAQ",
      "faq.title": "Your questions, our answers",
      "faq.subtitle": "Everything you want to know about how we work.",
      "faq.1.q": "Which social networks do you manage?",
      "faq.1.a": "Instagram, Facebook, LinkedIn, TikTok, YouTube Shorts, Pinterest and X.",
      "faq.2.q": "Do you work with all industries?",
      "faq.2.a": "Yes. We have supported restaurants, tech startups, coaches, e-commerce brands, estate agents, service providers and many others. Our approach adapts to every sector.",
      "faq.3.q": "How does your bespoke offer work?",
      "faq.3.a": "After a free discovery call, we set up a custom editorial calendar, create content, schedule posts and provide community follow-up. A monthly report lets you track performance.",
      "faq.4.q": "Do you also create visuals and copy?",
      "faq.4.a": "Yes, everything is included. Visual design, copywriting, video, photos: we handle production from A to Z to guarantee maximum quality and consistency.",
      "faq.5.q": "How does the first exchange go?",
      "faq.5.a": "We do a quick audit of your current presence. Then we identify your goals together, analyse your audience and define a clear strategy with measurable KPIs.",
      "faq.6.q": "Do you also handle paid advertising?",
      "faq.6.a": "Yes. We manage Meta Ads and Google Ads, with continuous optimisation for maximum ROI.",
      "faq.7.q": "Is there a minimum commitment?",
      "faq.7.a": "We recommend a minimum of 3 months to see significant results. However, we can adapt the contract to your needs.",
      "contact.label": "Contact",
      "contact.title": "Tell us about your project",
      "contact.subtitle": "Take 30 minutes to talk to us about your project. No commitment, no pressure.",
      "contact.form.firstname": "First name",
      "contact.form.firstname.ph": "First name",
      "contact.form.lastname": "Last name",
      "contact.form.lastname.ph": "Last name",
      "contact.form.email": "Professional email",
      "contact.form.email.ph": "you@example.com",
      "contact.form.company": "Company",
      "contact.form.company.ph": "Your company",
      "contact.form.select": "— Select an option —",
      "contact.form.select.label": "Which service interests you?",
      "contact.form.select.cm": "Community Management",
      "contact.form.select.strategy": "Communication strategy",
      "contact.form.select.content": "Content creation",
      "contact.form.select.branding": "Branding & Visual identity",
      "contact.form.select.ads": "Online advertising (Ads)",
      "contact.form.select.seo": "SEO & Ranking",
      "contact.form.select.web": "Web & Landing page",
      "contact.form.select.email": "Email marketing & Automation",
      "contact.form.select.360": "360° Support",
      "contact.form.message": "Describe your project",
      "contact.form.message.ph": "Tell us about your project...",
      "contact.form.submit": "Send my request →",
      "contact.form.success": "✅ Message sent!",
      "contact.form.success.desc": "Your email client has just opened with your request pre-filled. Click Send to finalise.",
      "contact.form.confidential": "Your information is confidential and will never be shared.",
      "footer.about.title": "About",
      "footer.about.desc": "Noble Edge Agency. Marketing & communication agency specialised in community management, digital strategy and content creation.",
      "footer.links": "Quick links",
      "footer.links.why": "Why us",
      "footer.links.services": "Our services",
      "footer.links.results": "Our results",
      "footer.links.contact": "Contact",
      "footer.copy": "© 2026 Noble Edge Agency. All rights reserved.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms",
      "footer.cookies": "Cookies",
      "cookie.reject": "Reject",
      "cookie.pref.title": "Cookie Preferences",
      "cookie.pref.desc": "You can customise your choices. Necessary cookies remain active to make the site work.",
      "cookie.necessary": "Necessary cookies",
      "cookie.necessary.desc": "Essential for the site to function and always active.",
      "cookie.analytics": "Analytics cookies",
      "cookie.analytics.desc": "Help us understand how the site is used and improve it.",
      "cookie.personalization": "Personalisation cookies",
      "cookie.personalization.desc": "Allow us to adapt certain content or embedded tools.",
      "cookie.cancel": "Cancel",
      "cookie.save": "Save"
    }
  };

  // Give global access to translations for use in inline scripts (e.g. success message renders)
  window.I18N_T = translations;

  // Current language (persisted in localStorage)
  let currentLang = (function() {
    try {
      var saved = localStorage.getItem('i18n-lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (e) {}
    return 'fr';
  })();

  function t(key, lang) {
    lang = lang || currentLang;
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations.fr && translations.fr[key]) return translations.fr[key];
    return key;
  }

  function setNodeText(el, value) {
    // Replace the first non-whitespace text node, or set textContent if none exists
    var nodes = Array.prototype.slice.call(el.childNodes).filter(function(n) {
      return n.nodeType === Node.TEXT_NODE && n.textContent.trim();
    });
    if (nodes.length === 0) {
      el.textContent = value;
      return;
    }
    nodes[0].textContent = value;
  }

  function updateDOM() {
    // Update <html> lang attribute
    document.documentElement.lang = currentLang;

    // Update all [data-i18n] elements
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function(el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
        el.textContent = value;
      } else {
        setNodeText(el, value);
      }
    });

    // Update labels that have data-i18n-label but are not the main element
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-label]'), function(el) {
      var key = el.getAttribute('data-i18n-label');
      el.textContent = t(key);
    });
  }

  function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'fr';
    try {
      localStorage.setItem('i18n-lang', currentLang);
    } catch (e) {}
    updateDOM();
  }

  // Attach language switcher listeners once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', (function() {
      Array.prototype.forEach.call(document.querySelectorAll('[data-lang-switcher] [data-lang]'), function(btn) {
        btn.addEventListener('click', function() {
          setLanguage(btn.getAttribute('data-lang'));
        });
      });
      updateDOM();
    }));
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-switcher] [data-lang]'), function(btn) {
      btn.addEventListener('click', function() {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
    updateDOM();
  }

  // Public API
  window.I18N = { t: t, setLanguage: setLanguage, getLanguage: function() { return currentLang; } };
  window.switchLang = setLanguage;
})();
