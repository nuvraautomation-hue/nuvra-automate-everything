import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  bookingLink: string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.fit": "Pour vous?",
    "nav.book": "Réserver un audit",
    
    // Hero
    "hero.badge": "Système IA installé en 7 jours",
    "hero.title1": "Automatisez vos opérations.",
    "hero.title2": "Augmentez votre rendement.",
    "hero.subtitle": "Système d'automatisation IA complet pour entrepreneurs. Moins de tâches manuelles, plus de croissance.",
    "hero.valueProp": "On automatise tout ce qui vous fait perdre du temps : suivis, rendez-vous, communications, workflows.",
    "hero.cta": "Réserver un audit gratuit",
    "hero.stat1": "7 jours",
    "hero.stat1Label": "Installation complète",
    "hero.stat2": "24/7",
    "hero.stat2Label": "Automatisation active",
    "hero.stat3": "+40%",
    "hero.stat3Label": "Rendement moyen",
    
    // Automation Section
    "automation.title1": "Tout ce qu'on peut",
    "automation.title2": "automatiser",
    "automation.subtitle": "Un écosystème complet qui travaille pour vous, sans intervention manuelle.",
    "automation.feature1.title": "Communications IA",
    "automation.feature1.desc": "Appels, SMS, emails automatisés. Réponses instantanées 24/7 sans intervention humaine.",
    "automation.feature2.title": "Rendez-vous & calendrier",
    "automation.feature2.desc": "Prise de RDV automatique, rappels, confirmations. Zéro no-show, zéro oubli.",
    "automation.feature3.title": "Suivi & relances",
    "automation.feature3.desc": "Séquences de suivi intelligentes, relances automatiques jusqu'à conversion.",
    "automation.feature4.title": "CRM & workflows",
    "automation.feature4.desc": "Pipeline automatisé, tâches déclenchées, rapports en temps réel. Tout est connecté.",
    
    // Process Section
    "process.title1": "Installation en",
    "process.title2": "4 étapes",
    "process.subtitle": "De l'audit à l'automatisation complète en 7 jours.",
    "process.step1.title": "Audit gratuit",
    "process.step1.desc": "On analyse vos processus et identifie les opportunités d'automatisation.",
    "process.step2.title": "Déploiement",
    "process.step2.desc": "Installation et configuration de vos systèmes d'automatisation personnalisés.",
    "process.step3.title": "Automatisation",
    "process.step3.desc": "Connexion CRM, workflows, suivis automatiques activés.",
    "process.step4.title": "Optimisation",
    "process.step4.desc": "Ajustements continus basés sur les performances réelles.",
    
    // CTA Section
    "cta.badge": "Audit gratuit de 30 minutes",
    "cta.title1": "Prêt à",
    "cta.title2": "automatiser",
    "cta.title3": "votre business?",
    "cta.subtitle": "Réservez un audit gratuit de 30 minutes. On analyse vos processus et on vous montre exactement ce qu'on peut automatiser.",
    "cta.button": "Réserver mon audit gratuit",
    
    // About Page
    "about.title1": "À propos de",
    "about.title2": "Nuvra",
    "about.company.title": "À propos de Nuvra",
    "about.company.text1": "Nuvra Automation a été fondée pour aider les entreprises à augmenter leur rendement et à se préparer concrètement à l'avenir.",
    "about.company.text2": "Dans un monde en constante évolution, nous mettons en place des systèmes intelligents qui simplifient les opérations, éliminent les frictions et permettent aux entreprises d'avancer plus efficacement vers le futur.",
    "about.founder.greeting": "Je m'appelle",
    "about.founder.text1": "Passionné par l'entrepreneuriat. J'aime comprendre vos idées, vos blocages et vos objectifs afin de transformer tout cela en projets concrets qui ont du sens.",
    "about.founder.text2": "Mon truc à moi : écouter, simplifier et passer à l'action à vos côtés.",
    
    // Is Nuvra For You Page
    "fit.title1": "Est-ce que Nuvra est fait pour",
    "fit.title2": "votre entreprise?",
    "fit.intro": "Nuvra n'est pas pour tout le monde. Notre solution s'adresse aux entreprises qui veulent structurer et automatiser leurs opérations pour augmenter leur rendement de façon durable.",
    "fit.idealTitle": "Idéal pour",
    "fit.ideal1": "Entreprises avec un volume d'appels entrants ou de demandes régulières",
    "fit.ideal2": "Services professionnels (consultants, agences, cabinets)",
    "fit.ideal3": "PME en croissance qui veulent structurer leurs opérations",
    "fit.ideal4": "Équipes débordées qui perdent du temps sur des tâches répétitives",
    "fit.ideal5": "Entreprises qui perdent des opportunités par manque de suivi",
    "fit.notIdealTitle": "Pas idéal pour",
    "fit.notIdeal1": "Entreprises sans appels ou demandes entrantes régulières",
    "fit.notIdeal2": "Projets ponctuels ou besoins temporaires",
    "fit.notIdeal3": "Entreprises cherchant une solution expérimentale sans engagement",
    "fit.examplesTitle": "Situations concrètes",
    "fit.example1.situation": "« On manque des appels parce que l'équipe est occupée sur le terrain. »",
    "fit.example1.solution": "L'agent vocal répond 24/7, qualifie le lead et planifie le rendez-vous automatiquement.",
    "fit.example2.situation": "« On oublie de faire les suivis après les soumissions. »",
    "fit.example2.solution": "Des relances automatiques sont envoyées selon un calendrier précis jusqu'à obtenir une réponse.",
    "fit.example3.situation": "« On reçoit beaucoup de demandes non qualifiées qui nous font perdre du temps. »",
    "fit.example3.solution": "L'IA qualifie chaque demande avant de l'acheminer, filtrant les opportunités sérieuses.",
    "fit.ctaTitle": "Pas certain si c'est pour vous?",
    "fit.ctaSubtitle": "Réservez un audit gratuit de 30 minutes. On valide ensemble si Nuvra peut vraiment vous aider.",
    "fit.ctaButton": "Réserver mon audit gratuit",
    
    // Footer
    "footer.description": "Système d'automatisation IA complet pour entrepreneurs. Installé en 7 jours.",
    "footer.contact": "Contact",
    "footer.rights": "© 2024 Nuvra Automation inc. Tous droits réservés.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.fit": "For you?",
    "nav.book": "Book an audit",
    
    // Hero
    "hero.badge": "AI system installed in 7 days",
    "hero.title1": "Automate your operations.",
    "hero.title2": "Boost your performance.",
    "hero.subtitle": "Complete AI automation system for entrepreneurs. Less manual work, more growth.",
    "hero.valueProp": "We automate everything that wastes your time: follow-ups, appointments, communications, workflows.",
    "hero.cta": "Book a free audit",
    "hero.stat1": "7 days",
    "hero.stat1Label": "Complete installation",
    "hero.stat2": "24/7",
    "hero.stat2Label": "Active automation",
    "hero.stat3": "+40%",
    "hero.stat3Label": "Average performance",
    
    // Automation Section
    "automation.title1": "Everything we can",
    "automation.title2": "automate",
    "automation.subtitle": "A complete ecosystem that works for you, without manual intervention.",
    "automation.feature1.title": "AI Communications",
    "automation.feature1.desc": "Automated calls, SMS, emails. Instant 24/7 responses without human intervention.",
    "automation.feature2.title": "Appointments & calendar",
    "automation.feature2.desc": "Automatic booking, reminders, confirmations. Zero no-shows, zero oversights.",
    "automation.feature3.title": "Follow-ups & outreach",
    "automation.feature3.desc": "Smart follow-up sequences, automatic reminders until conversion.",
    "automation.feature4.title": "CRM & workflows",
    "automation.feature4.desc": "Automated pipeline, triggered tasks, real-time reports. Everything connected.",
    
    // Process Section
    "process.title1": "Installation in",
    "process.title2": "4 steps",
    "process.subtitle": "From audit to complete automation in 7 days.",
    "process.step1.title": "Free audit",
    "process.step1.desc": "We analyze your processes and identify automation opportunities.",
    "process.step2.title": "Deployment",
    "process.step2.desc": "Installation and configuration of your custom automation systems.",
    "process.step3.title": "Automation",
    "process.step3.desc": "CRM connection, workflows, automatic follow-ups activated.",
    "process.step4.title": "Optimization",
    "process.step4.desc": "Continuous adjustments based on real performance.",
    
    // CTA Section
    "cta.badge": "30-minute free audit",
    "cta.title1": "Ready to",
    "cta.title2": "automate",
    "cta.title3": "your business?",
    "cta.subtitle": "Book a free 30-minute audit. We analyze your processes and show you exactly what we can automate.",
    "cta.button": "Book my free audit",
    
    // About Page
    "about.title1": "About",
    "about.title2": "Nuvra",
    "about.company.title": "About Nuvra",
    "about.company.text1": "Nuvra Automation was founded to help businesses increase their efficiency and concretely prepare for the future.",
    "about.company.text2": "In a constantly evolving world, we implement intelligent systems that simplify operations, eliminate friction, and enable businesses to move more efficiently toward the future.",
    "about.founder.greeting": "My name is",
    "about.founder.text1": "Passionate about entrepreneurship. I love understanding your ideas, your challenges, and your goals to transform them into meaningful concrete projects.",
    "about.founder.text2": "My thing: listening, simplifying, and taking action by your side.",
    
    // Is Nuvra For You Page
    "fit.title1": "Is Nuvra right for",
    "fit.title2": "your business?",
    "fit.intro": "Nuvra isn't for everyone. Our solution is designed for businesses that want to structure and automate their operations to sustainably increase their performance.",
    "fit.idealTitle": "Ideal for",
    "fit.ideal1": "Businesses with regular incoming calls or requests",
    "fit.ideal2": "Professional services (consultants, agencies, firms)",
    "fit.ideal3": "Growing SMBs looking to structure their operations",
    "fit.ideal4": "Overwhelmed teams losing time on repetitive tasks",
    "fit.ideal5": "Businesses missing opportunities due to lack of follow-up",
    "fit.notIdealTitle": "Not ideal for",
    "fit.notIdeal1": "Businesses without regular incoming calls or requests",
    "fit.notIdeal2": "One-time projects or temporary needs",
    "fit.notIdeal3": "Businesses looking for an experimental, no-commitment solution",
    "fit.examplesTitle": "Real-world situations",
    "fit.example1.situation": "\"We miss calls because the team is busy in the field.\"",
    "fit.example1.solution": "The voice agent answers 24/7, qualifies the lead, and schedules the appointment automatically.",
    "fit.example2.situation": "\"We forget to follow up after sending quotes.\"",
    "fit.example2.solution": "Automatic follow-ups are sent on a precise schedule until a response is received.",
    "fit.example3.situation": "\"We receive many unqualified requests that waste our time.\"",
    "fit.example3.solution": "AI qualifies each request before routing it, filtering out serious opportunities.",
    "fit.ctaTitle": "Not sure if it's for you?",
    "fit.ctaSubtitle": "Book a free 30-minute audit. We'll validate together if Nuvra can truly help you.",
    "fit.ctaButton": "Book my free audit",
    
    // Footer
    "footer.description": "Complete AI automation system for entrepreneurs. Installed in 7 days.",
    "footer.contact": "Contact",
    "footer.rights": "© 2024 Nuvra Automation inc. All rights reserved.",
  },
};

const bookingLinks: Record<Language, string> = {
  fr: "https://link.nuvra-automation.com/widget/booking/TSKHG4iPAUloDCyxhAqH",
  en: "https://link.nuvra-automation.com/widget/booking/P2W3P9Mrcpnby4QZCoFa",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const bookingLink = bookingLinks[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, bookingLink }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
