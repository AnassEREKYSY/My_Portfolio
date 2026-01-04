import { Translations } from './services/translation.service';

export const translations: Record<'en' | 'fr', Translations> = {
  en: {
    nav: {
      main: 'Main navigation',
      toggle: 'Toggle navigation menu',
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      lang: {
        en: 'Switch to English',
        fr: 'Switch to French'
      }
    },
    home: {
      title: 'Senior Full Stack Developer',
      subtitle: '.NET • Angular • DevOps',
      description: 'I transform complex technical challenges into robust and scalable solutions. Expert in full-stack development, DevOps and QA automation.',
      backend: 'Backend',
      frontend: 'Frontend',
      devops: 'DevOps',
      backendTech: '.NET / Node.js',
      frontendTech: 'Angular',
      devopsTech: 'CI/CD • Docker • Cloud',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      availableFor: 'Available for',
      positioning: 'I am looking for short or long-term missions as a Full Stack Developer, in Île-de-France or remotely worldwide.',
      shortTerm: 'Short-term missions',
      longTerm: 'Long-term missions',
      location: 'Île-de-France & Remote',
      yearsExp: '3+',
      yearsLabel: 'Years of experience',
      projectsDelivered: '15+',
      projectsLabel: 'Projects delivered',
      technologies: '5+',
      techLabel: 'Core technologies',
      quality: '100%',
      qualityLabel: 'Quality focus'
    },
    about: {
      title: 'About',
      name: 'Anass EREKYSY',
      role: 'Senior Full Stack Developer',
      location: 'Paris, France',
      intro: 'Senior Full Stack Developer based in Paris, specialized in enterprise application development and robust DevOps pipeline implementation.',
      paragraph1: 'I combine technical expertise with product vision to deliver solutions that meet business needs while maintaining the highest standards of quality and performance.',
      expertiseTitle: 'Full Stack Expertise',
      expertiseDesc: 'Complete mastery of the technical stack, from Angular frontend to .NET APIs, through cloud infrastructure and CI/CD pipelines. This versatility allows me to understand the entire system and optimize interactions between different layers.',
      devopsTitle: 'DevOps & Automation',
      devopsDesc: 'Passionate about industrialization and automation, I have set up CI/CD pipelines to reduce delivery times and improve quality. Expertise in Docker, cloud orchestration, and test automation (unit, integration, E2E).',
      productTitle: 'Product Approach & Business Impact',
      productDesc: 'Beyond code, I am interested in the business impact of my developments. I have worked on critical projects in finance, public sector, and SaaS, where each technical decision has measurable consequences on user experience and company results.',
      missionsTitle: 'Long-term Missions & Client Relations',
      missionsDesc: 'I prefer long-term missions that allow building a relationship of trust, understanding business challenges in depth, and delivering sustainable solutions. Whether freelance or full-time, I commit to quality and longevity of delivered solutions.',
      availableTitle: 'Available for short or long-term missions',
      availableDesc: 'I am looking for stimulating projects in technically demanding environments, where I can bring long-term value. Île-de-France, remote, or hybrid.'
    },
    experience: {
      title: 'Professional Experience',
      subtitle: '3+ years of professional experience delivering impactful solutions'
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of projects representative of my expertise and impact',
      problem: 'Problem',
      solution: 'Solution',
      stack: 'Technical Stack',
      features: 'Key Features',
      highlights: 'Technical Highlights',
      role: 'Role'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technical stack mastered for full-stack development and DevOps'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Available for short or long-term missions. Feel free to contact me to discuss your project.',
      contactInfo: 'Contact Information',
      professionalNetworks: 'Professional Networks',
      location: 'Paris, France',
      available: 'Available for short or long-term missions',
      availableDesc: 'Stimulating projects, technically demanding environments',
      locationLabel: 'Île-de-France • Remote • Hybrid'
    }
  },
  fr: {
    nav: {
      main: 'Navigation principale',
      toggle: 'Ouvrir/fermer le menu de navigation',
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      lang: {
        en: 'Passer en anglais',
        fr: 'Passer en français'
      }
    },
    home: {
      title: 'Développeur Full Stack Senior',
      subtitle: '.NET • Angular • DevOps',
      description: 'Je transforme des défis techniques complexes en solutions robustes et scalables. Expert en développement full-stack, DevOps et automatisation QA.',
      backend: 'Backend',
      frontend: 'Frontend',
      devops: 'DevOps',
      backendTech: '.NET / Node.js',
      frontendTech: 'Angular',
      devopsTech: 'CI/CD • Docker • Cloud',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      availableFor: 'Disponible pour',
      positioning: 'Je recherche des missions courtes ou longues en tant que Développeur Full Stack, en Île-de-France ou en télétravail dans le monde entier.',
      shortTerm: 'Missions courtes',
      longTerm: 'Missions longues',
      location: 'Île-de-France & Remote',
      yearsExp: '3+',
      yearsLabel: "Années d'expérience",
      projectsDelivered: '15+',
      projectsLabel: 'Projets livrés',
      technologies: '5+',
      techLabel: 'Technologies principales',
      quality: '100%',
      qualityLabel: 'Focus qualité'
    },
    about: {
      title: 'À propos',
      name: 'Anass EREKYSY',
      role: 'Développeur Full Stack Senior',
      location: 'Paris, France',
      intro: 'Développeur Full Stack Senior basé à Paris, spécialisé dans le développement d\'applications enterprise et la mise en place de pipelines DevOps robustes.',
      paragraph1: 'Je combine expertise technique et vision produit pour livrer des solutions qui répondent aux besoins métier tout en maintenant les plus hauts standards de qualité et de performance.',
      expertiseTitle: 'Expertise Full Stack',
      expertiseDesc: 'Maîtrise complète de la stack technique, du frontend Angular aux APIs .NET, en passant par l\'infrastructure cloud et les pipelines CI/CD. Cette polyvalence me permet de comprendre l\'ensemble du système et d\'optimiser les interactions entre les différentes couches.',
      devopsTitle: 'DevOps & Automatisation',
      devopsDesc: 'Passionné par l\'industrialisation et l\'automatisation, j\'ai mis en place des pipelines CI/CD pour réduire les délais de livraison et améliorer la qualité. Expertise en Docker, orchestration cloud, et automatisation des tests (unitaires, intégration, E2E).',
      productTitle: 'Approche Produit & Impact Business',
      productDesc: 'Au-delà du code, je m\'intéresse à l\'impact business de mes développements. J\'ai travaillé sur des projets critiques dans la finance, le secteur public, et le SaaS, où chaque décision technique a des conséquences mesurables sur l\'expérience utilisateur et les résultats de l\'entreprise.',
      missionsTitle: 'Missions Longues & Relation Client',
      missionsDesc: 'J\'ai une préférence pour les missions longues qui permettent de construire une relation de confiance, de comprendre en profondeur les enjeux métier, et de livrer des solutions durables. Que ce soit en freelance ou en CDI, je m\'engage sur la qualité et la pérennité des solutions livrées.',
      availableTitle: 'Disponible pour des missions courtes ou longues',
      availableDesc: 'Je recherche des projets stimulants dans des environnements techniques exigeants, où je peux apporter de la valeur à long terme. Île-de-France, remote, ou hybride.'
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Plus de 3 ans d\'expérience professionnelle livrant des solutions à fort impact'
    },
    projects: {
      title: 'Projets',
      subtitle: 'Une sélection de projets représentatifs de mon expertise et de mon impact',
      problem: 'Problème',
      solution: 'Solution',
      stack: 'Stack Technique',
      features: 'Fonctionnalités Clés',
      highlights: 'Points Techniques',
      role: 'Rôle'
    },
    skills: {
      title: 'Compétences Techniques',
      subtitle: 'Stack technique maîtrisée pour le développement full-stack et DevOps'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Disponible pour des missions courtes ou longues. N\'hésitez pas à me contacter pour discuter de votre projet.',
      contactInfo: 'Informations de Contact',
      professionalNetworks: 'Réseaux Professionnels',
      location: 'Paris, France',
      available: 'Disponible pour des missions courtes ou longues',
      availableDesc: 'Projets stimulants, environnements techniques exigeants',
      locationLabel: 'Île-de-France • Remote • Hybride'
    }
  }
};

