// i18n.js - FR/EN Translation System for Noble Edge Agency
(function() {
  "use strict";

  const translations = {
    fr: {
      // Buttons
      "btn.reserver": "Réserver un appel",
      "btn.open": "Ouvrir le menu",

      // Navbar
      "label.agency-badge": "Agence marketing & communication",

      // Hero Section
      "hero.title.part1": "Votre marque mérite",
      "hero.title.part2": "d'être vue, reconnue",
      "hero.title.part3": "et choisie.",
      "hero.subtitle": "Nous développons votre présence digitale, animons vos réseaux sociaux et transformons votre audience en clients — avec stratégie, créativité et rigueur.",
      "hero.cta1": "Réserver un appel découverte",
      "hero.cta2.text": "Découvrir nos services",

      // Hero Stats
      "hero.stat1.value": "+40",
      "hero.stat1.label": "Clients accompagnés",
      "hero.stat2.value": "98%",
      "hero.stat2.label": "Satisfaction client",
      "hero.stat3.value": "5+",
      "hero.stat3.label": "Années d'expertise",

      // Hero Trust Badges
      "trust1": "Stratégie personnalisée",
      "trust2": "Résultats mesurables",
      "trust3": "Accompagnement humain",
      "trust4": "Pilotage data-driven",
      "trust5": "Gain de temps garanti",
      "trust6": "Expertise multi-canal",

      // Why Section
      "why.label": "POURQUOI NOBLE EDGE",
      "why.title": "Arrêtez de publier au hasard. Commencez à construire une marque.",
      "why.subtitle": "Beaucoup de marques sont présentes sur les réseaux. Très peu construisent une véritable stratégie. Voici ce qui nous différencie.",
      "why.1.title": "Stratégie taillée pour vous",
      "why.1.desc": "Pas de template copié-collé. Chaque stratégie est construite selon votre secteur, vos objectifs et votre audience.",
      "why.2.title": "Image de marque cohérente",
      "why.2.desc": "Charte graphique, ton éditorial, univers visuel : nous construisons une identité reconnaissable et mémorable.",
      "why.3.title": "Communication régulière et pro",
      "why.3.desc": "Fini les longues périodes de silence. Nous assurons une présence constante avec des contenus pertinents.",
      "why.4.title": "Vous gagnez du temps",
      "why.4.desc": "Déléguer votre communication, c'est récupérer des heures précieuses. Nous gérons tout, vous validez.",
      "why.5.title": "Contenus qui engagent et vendent",
      "why.5.desc": "Nos contenus sont pensés pour générer de l'engagement, attirer votre clientèle cible et accompagner le parcours d'achat.",
      "why.6.title": "Décisions basées sur les données",
      "why.6.desc": "Chaque action est analysée, mesurée et optimisée. Rapports clairs chaque mois, ajustements en temps réel.",
      "why.7.title": "Vision orientée ROI",
      "why.7.desc": "Chaque action est pensée pour générer un retour sur investissement mesurable : notoriété, leads ou ventes directes.",
      "why.8.title": "Un vrai partenaire, pas un prestataire",
      "why.8.desc": "Nous nous impliquons dans votre marque comme si c'était la nôtre. Transparence totale, succès partagé.",

      // Services Section
      "services.label": "NOS SERVICES",
      "services.title": "Tout ce dont vous avez besoin\n pour votre présence digitale",
      "services.subtitle": "Nous couvrons l'ensemble des besoins pour développer\n votre marque sur les réseaux sociaux et au-delà.",
      "services.featured.title": "Services complémentaires",
      "services.card.1.title": "Communication stratégique",
      "services.card.1.desc": "Audit digital, positionnement, ligne éditoriale",
      "services.card.2.title": "Création de contenu",
      "services.card.2.desc": "Visuels, carrousels, stories, Reels, scripts",
      "services.card.3.title": "Branding & Identité visuelle",
      "services.card.3.desc": "Logo, charte graphique, palette de couleurs",
      "services.card.4.title": "Publicité en ligne",
      "services.card.4.desc": "Meta Ads, Google Ads, génération de leads",
      "services.card.5.title": "SEO & Référencement",
      "services.card.5.desc": "Optimisation on-page, mots-clés, rédaction SEO",
      "services.card.6.title": "Web & Landing pages",
      "services.card.6.desc": "Création ou optimisation de landing pages",
      "services.card.7.title": "Email marketing & Automation",
      "services.card.7.desc": "Newsletters, séquences automatisées",
      "services.card.8.title": "Reporting & Analyse",
      "services.card.8.desc": "Tableaux de bord personnalisés, suivi KPIs",

      // Featured Services List
      "services.featured.list1": "Stratégie de communication",
      "services.featured.list2": "Création de contenu",
      "services.featured.list3": "Branding & Identité visuelle",
      "services.featured.list4": "Publicité en ligne",
      "services.featured.list5": "SEO & Référencement",
      "services.featured.list6": "Web & Landing pages",
      "services.featured.list7": "Email marketing & Automation",
      "services.featured.list8": "Reporting & Analyse",
      "services.featured.outcome1": "Audit digital, positionnement, ligne éditoriale",
      "services.featured.outcome2": "Visuels, carrousels, stories, Reels, copywriting",
      "services.featured.outcome3": "Logo, charte graphique, palette de couleurs",
      "services.featured.outcome4": "Meta Ads, Google Ads, campagnes, lead generation",
      "services.featured.outcome5": "Optimisation on-page, mots-clés, rédaction SEO",
      "services.featured.outcome6": "Landing pages optimisées pour la conversion",
      "services.featured.outcome7": "Newsletters, séquences automatisées",
      "services.featured.outcome8": "Tableaux de bord personnalisés, recommandations",

      // Methodology Section
      "method.label": "NOTRE MÉTHODE",
      "method.title": "Un processus structuré",
      "method.subtitle": "Pour des résultats durables",
      "method.description": "Chaque action suit un processus éprouvé en 6 étapes.",
      "method.step1.num": "01",
      "method.step1.title": "Audit",
      "method.step1.desc": "Analyse complète de votre présence digitale, vos concurrents et vos opportunités inexploitées.",
      "method.step1.outcome": "Nous savons exactement où vous en êtes",
      "method.step2.num": "02",
      "method.step2.title": "Stratégie",
      "method.step2.desc": "Définition des objectifs, des cibles, des plateformes prioritaires et de la ligne éditoriale.",
      "method.step2.outcome": "Une direction claire et actionnable",
      "method.step3.num": "03",
      "method.step3.title": "Création",
      "method.step3.desc": "Production de contenus visuels, textuels et vidéo alignés avec votre identité de marque.",
      "method.step3.outcome": "Des contenus qui reflètent vos valeurs",
      "method.step4.num": "04",
      "method.step4.title": "Diffusion",
      "method.step4.desc": "Publication au bon moment, sur les bonnes plateformes, avec une fréquence optimisée.",
      "method.step4.outcome": "Portée maximale garantie",
      "method.step5.num": "05",
      "method.step5.title": "Analyse",
      "method.step5.desc": "Suivi des KPIs clés, analyse des performances et identification des leviers à activer.",
      "method.step5.outcome": "Vous savez ce qui fonctionne",
      "method.step6.num": "06",
      "method.step6.title": "Optimisation",
      "method.step6.desc": "Ajustements continus de la stratégie et des contenus pour améliorer les résultats chaque mois.",
      "method.step6.outcome": "Progression constante",

      // Offer Section
      "offer.label": "NOTRE OFFRE",
      "offer.title": "Un community management\n 100% sur mesure",
      "offer.subtitle": "Pas de pack prédéfini. Chaque mission est construite selon vos objectifs, votre secteur et votre budget.",
      "offer.featured.label": "Community Management clé en main",
      "offer.featured.item1": "Gestion complète de vos réseaux sociaux",
      "offer.featured.item2": "Calendrier éditorial mensuel",
      "offer.featured.item3": "Création de visuels & contenus",
      "offer.featured.item4": "Rédaction de captions engageantes",
      "offer.featured.item5": "Publication programmée & optimisée",
      "offer.featured.item6": "Modération des messages & commentaires",
      "offer.featured.item7": "Animation de communauté",
      "offer.featured.item8": "Stratégie d'engagement personnalisée",
      "offer.featured.item9": "Reporting mensuel des performances",
      "offer.featured.item10": "Recommandations d'optimisation",
      "offer.cta1": "Démarrer mon community management",
      "offer.cta2": "Obtenir mon devis personnalisé",
      "offer.disclaimer": "Le volume de publications, les réseaux gérés et les services inclus sont définis selon vos besoins.",

      // Results Section
      "results.label": "NOS RÉSULTATS",
      "results.title": "Des résultats concrets\n pour chaque secteur",
      "results.subtitle": "Chaque secteur a ses spécificités. Voici des exemples de ce que nous obtenons.",
      "results.stat1.value": "+40",
      "results.stat1.label": "Clients accompagnés",
      "results.stat2.value": "+240%",
      "results.stat2.label": "Engagement moyen généré",
      "results.stat3.value": "200k+",
      "results.stat3.label": "Impressions générées",
      "results.stat4.value": "98%",
      "results.stat4.label": "Taux de satisfaction",
      "results.case1.label": "Restaurant",
      "results.case1.value": "+67%",
      "results.case1.desc": "Réservations en plus",
      "results.case2.label": "E-commerce mode",
      "results.case2.value": "×3",
      "results.case2.desc": "Chiffre d'affaires",
      "results.case3.label": "Coach business",
      "results.case3.value": "+120",
      "results.case3.desc": "Leads qualifiés"
    },
    en: {
      // Buttons
      "btn.reserver": "Book a Call",
      "btn.open": "Open Menu",

      // Navbar
      "label.agency-badge": "Marketing & Communication Agency",

      // Hero Section
      "hero.title.part1": "Your brand deserves",
      "hero.title.part2": "to be seen, recognized",
      "hero.title.part3": "and chosen.",
      "hero.subtitle": "We build your digital presence, manage your social media and turn your audience into customers — with strategy, creativity and precision.",
      "hero.cta1": "Book a Discovery Call",
      "hero.cta2.text": "Discover Our Services",

      // Hero Stats
      "hero.stat1.value": "+40",
      "hero.stat1.label": "Clients Served",
      "hero.stat2.value": "98%",
      "hero.stat2.label": "Client Satisfaction",
      "hero.stat3.value": "5+",
      "hero.stat3.label": "Years of Expertise",

      // Hero Trust Badges
      "trust1": "Personalized Strategy",
      "trust2": "Measurable Results",
      "trust3": "Human Support",
      "trust4": "Data-Driven Approach",
      "trust5": "Time Savings Guaranteed",
      "trust6": "Multi-Channel Expertise",

      // Why Section
      "why.label": "WHY NOBLE EDGE",
      "why.title": "Stop posting randomly. Start building a brand.",
      "why.subtitle": "Many brands are on social media. Very few build a real strategy. Here's what sets us apart.",
      "why.1.title": "Strategy Tailored to You",
      "why.1.desc": "No copy-paste templates. Every strategy is built around your industry, goals and audience.",
      "why.2.title": "Coherent Brand Image",
      "why.2.desc": "Brand guidelines, editorial tone, visual identity: we build a recognizable and memorable brand.",
      "why.3.title": "Regular & Professional Communication",
      "why.3.desc": "No more long silences. We ensure a constant presence with relevant content.",
      "why.4.title": "Save Time",
      "why.4.desc": "Outsourcing your communication gives you back precious hours. We handle everything, you approve.",
      "why.5.title": "Engaging Content That Sells",
      "why.5.desc": "Our content is designed to generate engagement, attract your target audience and support the buying journey.",
      "why.6.title": "Data-Driven Decisions",
      "why.6.desc": "Every action is analyzed, measured and optimized. Clear reports every month, real-time adjustments.",
      "why.7.title": "ROI-Focused Vision",
      "why.7.desc": "Every action is designed for measurable ROI: awareness, leads or direct sales.",
      "why.8.title": "A True Partner, Not a Vendor",
      "why.8.desc": "We invest in your brand as if it were our own. Total transparency, shared success.",

      // Services Section
      "services.label": "OUR SERVICES",
      "services.title": "Everything you need\n for your digital presence",
      "services.subtitle": "We cover all the needs to develop\n your brand on social media and beyond.",
      "services.featured.title": "Complementary Services",
      "services.card.1.title": "Strategic Communication",
      "services.card.1.desc": "Digital audit, positioning, editorial line",
      "services.card.2.title": "Content Creation",
      "services.card.2.desc": "Visuals, carousels, stories, Reels, scripts",
      "services.card.3.title": "Branding & Visual Identity",
      "services.card.3.desc": "Logo, brand guidelines, color palette",
      "services.card.4.title": "Online Advertising",
      "services.card.4.desc": "Meta Ads, Google Ads, lead generation",
      "services.card.5.title": "SEO & Search Ranking",
      "services.card.5.desc": "On-page optimization, keywords, SEO content",
      "services.card.6.title": "Web & Landing Pages",
      "services.card.6.desc": "Creation or optimization of conversion landing pages",
      "services.card.7.title": "Email Marketing & Automation",
      "services.card.7.desc": "Newsletters, automated sequences",
      "services.card.8.title": "Reporting & Analytics",
      "services.card.8.desc": "Custom dashboards, KPI tracking",

      // Featured Services List
      "services.featured.list1": "Strategic Communication",
      "services.featured.list2": "Content Creation",
      "services.featured.list3": "Branding & Visual Identity",
      "services.featured.list4": "Online Advertising",
      "services.featured.list5": "SEO & Search Ranking",
      "services.featured.list6": "Web & Landing Pages",
      "services.featured.list7": "Email Marketing & Automation",
      "services.featured.list8": "Reporting & Analytics",
      "services.featured.outcome1": "Digital audit, positioning, editorial line",
      "services.featured.outcome2": "Visuals, carousels, stories, Reels, copywriting",
      "services.featured.outcome3": "Logo, brand guidelines, color palette",
      "services.featured.outcome4": "Meta Ads, Google Ads, campaigns, lead gen",
      "services.featured.outcome5": "On-page optimization, keywords, SEO content",
      "services.featured.outcome6": "Conversion-optimized landing pages",
      "services.featured.outcome7": "Newsletters, automated sequences",
      "services.featured.outcome8": "Custom dashboards, recommendations",

      // Methodology Section
      "method.label": "OUR METHOD",
      "method.title": "A Structured Process",
      "method.subtitle": "For Lasting Results",
      "method.description": "Every action follows a proven 6-step process.",
      "method.step1.num": "01",
      "method.step1.title": "Audit",
      "method.step1.desc": "Complete analysis of your digital presence, competitors and untapped opportunities.",
      "method.step1.outcome": "We know exactly where you stand",
      "method.step2.num": "02",
      "method.step2.title": "Strategy",
      "method.step2.desc": "Defining objectives, targets, priority platforms and editorial direction.",
      "method.step2.outcome": "A clear and actionable direction",
      "method.step3.num": "03",
      "method.step3.title": "Creation",
      "method.step3.desc": "Production of visual, textual and video content aligned with your brand identity.",
      "method.step3.outcome": "Content that reflects your values",
      "method.step4.num": "04",
      "method.step4.title": "Distribution",
      "method.step4.desc": "Publishing at the right time, on the right platforms, with optimized frequency.",
      "method.step4.outcome": "Maximum reach guaranteed",
      "method.step5.num": "05",
      "method.step5.title": "Analysis",
      "method.step5.desc": "Tracking key KPIs, performance analysis and identifying levers to activate.",
      "method.step5.outcome": "You know what works",
      "method.step6.num": "06",
      "method.step6.title": "Optimization",
      "method.step6.desc": "Continuous adjustments to strategy and content to improve results every month.",
      "method.step6.outcome": "Constant progression",

      // Offer Section
      "offer.label": "OUR OFFER",
      "offer.title": "100% Tailored\n Community Management",
      "offer.subtitle": "No predefined packages. Every mission is built around your objectives, your sector and your budget.",
      "offer.featured.label": "Turn-Key Community Management",
      "offer.featured.item1": "Full management of your social networks",
      "offer.featured.item2": "Monthly editorial calendar",
      "offer.featured.item3": "Visual & content creation",
      "offer.featured.item4": "Engaging caption writing",
      "offer.featured.item5": "Scheduled & optimized publishing",
      "offer.featured.item6": "Message & comment moderation",
      "offer.featured.item7": "Community engagement",
      "offer.featured.item8": "Personalized engagement strategy",
      "offer.featured.item9": "Monthly performance reporting",
      "offer.featured.item10": "Optimization recommendations",
      "offer.cta1": "Start My Community Management",
      "offer.cta2": "Get My Custom Quote",
      "offer.disclaimer": "Publication volume, managed networks and included services are defined according to your needs.",

      // Results Section
      "results.label": "OUR RESULTS",
      "results.title": "Concrete results\n for every sector",
      "results.subtitle": "Every sector has its specifics. Here are examples of what we achieve.",
      "results.stat1.value": "+40",
      "results.stat1.label": "Clients Served",
      "results.stat2.value": "+240%",
      "results.stat2.label": "Average Engagement Boost",
      "results.stat3.value": "200k+",
      "results.stat3.label": "Impressions Generated",
      "results.stat4.value": "98%",
      "results.stat4.label": "Satisfaction Rate",
      "results.case1.label": "Restaurant",
      "results.case1.value": "+67%",
      "results.case1.desc": "More Reservations",
      "results.case2.label": "Fashion E-commerce",
      "results.case2.value": "x3",
      "results.case2.desc": "Revenue Growth",
      "results.case3.label": "Business Coach",
      "results.case3.value": "+120",
      "results.case3.desc": "Qualified Leads",
    },
    // Testimonials Section
    "testimonials.label": "AVIS CLIENTS",
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.subtitle": "Ils nous ont fait confiance. Voici ce qu'ils en pensent.",
    "testimonials.1.name": "Sophie M.",
    "testimonials.1.role": "Restauratrice, Lyon",
    "testimonials.1.text": "Depuis que Noble Edge gère nos réseaux, notre restaurant affiche complet presque tous les week-ends. Stratégie, réactivité et créativité — je recommande les yeux fermés.",
    "testimonials.2.name": "Thomas R.",
    "testimonials.2.role": "Fondateur, e-commerce mode",
    "testimonials.2.text": "En 2 mois, notre engagement a été multiplié par 4. L'équipe comprend vraiment notre secteur et nos contenus ressemblent enfin à notre marque.",
    "testimonials.3.name": "Amélie D.",
    "testimonials.3.role": "Coach business, Paris",
    "testimonials.3.text": "J'avais essayé de gérer mes réseaux moi-même mais je n'avais ni le temps ni les compétences. Aujourd'hui je génère des leads qualifiés chaque semaine.",
    "testimonials.4.name": "Karim B.",
    "testimonials.4.role": "Directeur, PME bâtiment",
    "testimonials.4.text": "Un audit complet, des objectifs clairs et un plan d'action précis. 4 mois plus tard, notre présence digitale est méconnaissable. Excellent investissement.",

    // EN Testimonials
    "testimonials.en.label": "CLIENT TESTIMONIALS",
    "testimonials.en.title": "What Our Clients Say",
    "testimonials.en.subtitle": "They trusted us. Here's what they think.",
    "testimonials.en.1.text": "Since Noble Edge took over our social media, our restaurant is almost fully booked every weekend. Strategy, reactivity and creativity — I recommend them blindfolded.",
    "testimonials.en.2.text": "In 2 months, our engagement increased 4x. The team truly understands our industry and our content finally looks like our brand.",
    "testimonials.en.3.text": "I tried managing my social media myself but I had neither the time nor the skills. Now I generate qualified leads every week.",
    "testimonials.en.4.text": "A complete audit, clear objectives and a precise action plan. 4 months later, our digital presence is unrecognizable. Excellent investment.",

    // FAQ Section
    "faq.label": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.subtitle": "Tout ce que vous voulez savoir sur notre agence.",
    "faq.1.q": "Quels réseaux sociaux gérez-vous ?",
    "faq.1.a": "Nous gérons Instagram, Facebook, LinkedIn, TikTok, YouTube Shorts, Pinterest et X.",
    "faq.2.q": "Travaillez-vous avec tous les secteurs d'activité ?",
    "faq.2.a": "Oui. Restauration, e-commerce, immobilier, santé, mode, services BtoB, coaching, artisanat, tourisme, startup tech...",
    "faq.3.q": "Comment fonctionne votre offre sur mesure ?",
    "faq.3.a": "Lors de notre appel découverte, nous analysons vos besoins, vos objectifs et votre budget. Nous construisons ensuite une proposition personnalisée adaptée à votre situation.",
    "faq.4.q": "Créez-vous aussi les visuels et les textes ?",
    "faq.4.a": "Absolument. Visuels, carrousels, Reels, captions, scripts — nous gérons toute la production. Vous n'avez besoin que de valider.",
    "faq.5.q": "Comment se passe le premier échange ?",
    "faq.5.a": "Un appel découverte gratuit de 30 minutes. On comprend votre situation, vos objectifs, et on vous prépare une proposition sur mesure sous 48h. Aucun engagement.",
    "faq.6.q": "Faites-vous aussi la publicité payante ?",
    "faq.6.a": "Oui. Meta Ads, Google Ads, TikTok Ads — stratégie, création des visuels, paramétrage, ciblage, budget et optimisation continue.",
    "faq.7.q": "Y a-t-il un engagement minimum ?",
    "faq.7.a": "Nos missions sont sans engagement minimum. Nous recommandons cependant 3 mois pour voir des résultats significatifs.",

    // EN FAQ
    "faq.en.label": "FAQ",
    "faq.en.title": "Frequently Asked Questions",
    "faq.en.subtitle": "Everything you want to know about our agency.",
    "faq.en.1.q": "Which social media platforms do you manage?",
    "faq.en.1.a": "We manage Instagram, Facebook, LinkedIn, TikTok, YouTube Shorts, Pinterest and X.",
    "faq.en.2.q": "Do you work with all industries?",
    "faq.en.2.a": "Yes. Restaurants, e-commerce, real estate, healthcare, fashion, B2B services, coaching, crafts, tourism, tech startups...",
    "faq.en.3.q": "How does your custom offer work?",
    "faq.en.3.a": "During our discovery call, we analyze your needs, objectives and budget. We then build a personalized proposal tailored to your situation.",
    "faq.en.4.q": "Do you also create visuals and copy?",
    "faq.en.4.a": "Absolutely. Visuals, carousels, Reels, captions, scripts — we handle all production. You just need to approve.",
    "faq.en.5.q": "How does the first meeting work?",
    "faq.en.5.a": "A free 30-minute discovery call. We understand your situation and objectives, then prepare a custom proposal within 48 hours. No commitment.",
    "faq.en.6.q": "Do you also do paid advertising?",
    "faq.en.6.a": "Yes. Meta Ads, Google Ads, TikTok Ads — strategy, visual creation, setup, targeting, budget and continuous optimization.",
    "faq.en.7.q": "Is there a minimum commitment?",
    "faq.en.7.a": "Our missions have no minimum commitment. We recommend 3 months however to see significant results.",

    // Contact / CTA Section
    "contact.label": "PASSEZ À L'ACTION",
    "contact.title": "Prêt à transformer\n votre présence digitale ?",
    "contact.subtitle": "Parlez-nous de votre projet. On vous répond sous 24h.",
    "contact.cta.label": "Pourquoi nous contacter ?",
    "contact.cta.1": "Appel gratuit & sans engagement",
    "contact.cta.2": "Réponse sous 24h",
    "contact.cta.3": "Proposition personnalisée",
    "contact.cta.4": "Accompagnement humain",
    "contact.form.title": "Parlez-nous de votre projet",
    "contact.form.firstname": "Prénom",
    "contact.form.firstnamePhrase": "Prénom *",
    "contact.form.lastname": "Nom",
    "contact.form.lastnamePhrase": "Nom *",
    "contact.form.email": "Email professionnel",
    "contact.form.emailPhrase": "Email professionnel *",
    "contact.form.company": "Entreprise",
    "contact.form.service": "Quel service vous intéresse ?",
    "contact.form.message": "Décrivez votre projet",
    "contact.form.messagePhrase": "Décrivez votre projet *",
    "contact.form.submit": "Envoyer ma demande",
    "contact.form.success": "Merci ! Votre demande a bien été envoyée.",

    // EN Contact
    "contact.en.title": "Ready to Transform\n Your Digital Presence?",
    "contact.en.subtitle": "Tell us about your project. We'll respond within 24 hours.",
    "contact.en.cta.label": "Why Contact Us?",
    "contact.en.cta.1": "Free Call & No Commitment",
    "contact.en.cta.2": "Response Within 24 Hours",
    "contact.en.cta.3": "Personalized Proposal",
    "contact.en.cta.4": "Human Support",
    "contact.en.form.title": "Tell Us About Your Project",
    "contact.en.form.firstname": "First Name",
    "contact.en.form.firstnamePhrase": "First Name *",
    "contact.en.form.lastname": "Last Name",
    "contact.en.form.lastnamePhrase": "Last Name *",
    "contact.en.form.email": "Work Email",
    "contact.en.form.emailPhrase": "Work Email *",
    "contact.en.form.company": "Company",
    "contact.en.form.service": "Which service interests you?",
    "contact.en.form.message": "Describe your project",
    "contact.en.form.messagePhrase": "Describe your project *",
    "contact.en.form.submit": "Send My Request",
    "contact.en.form.success": "Thank you! Your request has been sent.",

    // Footer
    "footer.agency-name": "Noble Edge",
    "footer.desc": "Agence marketing & communication spécialisée dans le community management, la stratégie digitale et la création de contenu.",
    "footer.nav.label": "Navigation",
    "footer.nav.sections": "Sections",
    "footer.nav.contact": "Contact",
    "footer.social.label": "Réseaux sociaux",
    "footer.copyright": "© 2026 Noble Edge Agency. Tous droits réservés.",

    // EN Footer
    "footer.en.desc": "Marketing and communication agency specializing in community management, digital strategy and content creation.",
    "footer.en.nav.label": "Navigation",
    "footer.en.nav.sections": "Sections",
    "footer.en.nav.contact": "Contact",
    "footer.en.social.label": "Social Media",
    "footer.en.copyright": "© 2026 Noble Edge Agency. All rights reserved."
  }
};

  // =================================================================
  // i18n Core Functions
  // =================================================================

  let currentLang = localStorage.getItem('i18n-lang') || 'fr';

  // Get translation by key
  function t(key, lang) {
    lang = lang || currentLang;
    const keys = key.split('.');
    let val = translations[lang] || translations.fr;
    for (let i = 0; i < keys.length; i++) {
      if (val && typeof val === 'object' && keys[i] in val) {
        val = val[keys[i]];
      } else {
        return key; // fallback to key if not found
      }
    }
    return val || key;
  }

  // Set language and update DOM
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'fr';
    currentLang = lang;
    localStorage.setItem('i18n-lang', lang);
    document.documentElement.lang = lang;
    updateDOM();
    updateSwitcherUI();
  }

  // Update all elements with data-i18n attributes
  function updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.getAttribute('placeholder') === t(key, 'fr') || el.getAttribute('data-i18n-placeholder')) {
            var originalPlaceholder = el.getAttribute('data-i18n-placeholder') || el.getAttribute('placeholder');
            el.placeholder = t(key);
          }
          if (el.value === t(key, 'fr')) {
            el.value = t(key);
          }
        } else if (el.tagName === 'LABEL') {
          el.textContent = value;
        } else {
          el.textContent = value;
        }
      }
    });

    // Update title if needed
    var titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      document.title = t(titleEl.getAttribute('data-i18n-title'));
    }
  }

  // Update language switcher UI
  function updateSwitcherUI() {
    const switchers = document.querySelectorAll('[data-lang-switcher]');
    switchers.forEach(function(el) {
      el.querySelectorAll('[data-lang]').forEach(function(btn) {
        if (btn.getAttribute('data-lang') === currentLang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });
  }

  // Initialize on page load
  function init() {
    // Create switcher if not exists
    var navbar = document.querySelector('.navbar, nav, header');
    if (navbar && !document.querySelector('[data-lang-switcher]')) {
      var switcher = document.createElement('div');
      switcher.className = 'lang-switcher';
      switcher.setAttribute('data-lang-switcher', '');
      switcher.innerHTML = '<button data-lang="fr" aria-label="Français">FR</button><button data-lang="en" aria-label="English">EN</button>';
      navbar.appendChild(switcher);

      // Add click handlers
      switcher.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-lang')) {
          setLanguage(e.target.getAttribute('data-lang'));
        }
      });
    }

    setLanguage(currentLang);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.I18N = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: function() { return currentLang; },
    translations: translations
  };

})();
