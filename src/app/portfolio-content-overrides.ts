import { Translations } from './services/translation.service';

export const portfolioContentOverrides: Record<'en' | 'fr', Translations> = {
  en: {
    hero: {
      title: 'Full-Stack .NET / Angular Developer',
      subtitle: 'Full-stack developer specialized in .NET, C# and Angular, building production business applications, SaaS platforms and reliable web products from architecture to deployment.',
      positioning: 'Open to',
      positioningHighlight: 'freelance missions',
      positioningSuffix: 'in remote or hybrid environments',
      availableForProjects: 'Available for new projects',
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      yearsExperience: 'Years Experience',
      projectsDelivered: 'Projects Delivered',
      qualityFocus: 'Quality Focus'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Production experience across business applications, SaaS platforms, migrations and end-to-end product delivery',
      contextGoals: 'Context & Business Goals',
      keyResponsibilities: 'Key Responsibilities',
      technicalStack: 'Technical Stack',
      keyAchievements: 'Key Achievements',
      impact: 'Impact',
      exp1: {
        role: 'Full-Stack .NET / Angular Developer',
        context: 'Production insurance subscription portal with strong reliability, security and release-quality requirements.',
        businessGoals: 'Maintain and modernize a business-critical application while improving delivery reliability and long-term maintainability.',
        responsibilities: [
          'Maintained and developed business features across .NET and Angular',
          'Migrated the frontend progressively from Angular 11 to Angular 18',
          'Contributed to the migration from .NET Framework 4.8 to .NET 6',
          'Developed and integrated REST APIs',
          'Strengthened frontend automated testing and reduced regression risk',
          'Improved CI/CD pipelines and release reliability'
        ],
        achievements: [
          'Supported a major Angular and .NET modernization initiative',
          'Improved application maintainability and delivery reliability',
          'Contributed to the stability of a production insurance platform'
        ],
        impact: 'Helped modernize and secure the evolution of a production application in a regulated environment.'
      },
      exp2: {
        role: 'Full-Stack .NET / Angular Developer',
        context: 'Modernization of a legacy CMMS application toward a newer Angular and .NET architecture.',
        businessGoals: 'Modernize the codebase, improve maintainability and structure delivery with Azure DevOps.',
        responsibilities: [
          'Migrated existing application modules progressively',
          'Developed backend features with C# and .NET',
          'Developed frontend features with Angular and TypeScript',
          'Refactored legacy code using clean-code practices and design patterns',
          'Worked with REST APIs, Git and Azure DevOps',
          'Contributed to CI/CD workflows and technical documentation'
        ],
        achievements: [
          'Contributed to the migration toward a modern .NET / Angular stack',
          'Improved code maintainability and development workflows',
          'Supported more structured delivery through Azure DevOps'
        ],
        impact: 'Supported the modernization of a business application while improving maintainability and delivery practices.'
      },
      exp3: {
        role: 'Flutter Mobile Developer',
        context: 'Offline-first mobile application for administrative mail management within a public institution.',
        businessGoals: 'Digitize mail entry, classification, search and tracking while keeping the application usable offline.',
        responsibilities: [
          'Designed application workflows and architecture using UML and Merise',
          'Developed the mobile application with Flutter and Dart',
          'Implemented local persistence and CRUD operations with SQLite',
          'Built mail entry, classification, search, filtering and tracking features'
        ],
        achievements: [
          'Delivered a functional offline-first mobile application',
          'Structured the application and data model for maintainability'
        ],
        impact: 'Contributed to digitizing an internal administrative workflow with a lightweight mobile solution.'
      },
      exp4: {
        role: 'PHP / SQL Web Developer',
        context: 'Business application for court hearing, session and case management.',
        businessGoals: 'Improve the organization and tracking of hearings and case-related workflows.',
        responsibilities: [
          'Contributed to functional and technical design',
          'Modeled SQL entities and relationships',
          'Developed PHP screens and business workflows',
          'Implemented forms, lists, filters, status tracking and validation rules'
        ],
        achievements: [
          'Contributed to a real institutional business application',
          'Improved data consistency through validation and structured workflows'
        ],
        impact: 'Supported the delivery of a business application in an institutional environment.'
      },
      exp5: {
        role: '.NET / C# Software Engineer - SOR ERP',
        period: 'Apr. 2026 - Present',
        location: 'Paris, France · Hybrid',
        context: 'SOR is a business-critical ERP used by professional training organizations to manage contracts, cases, members, reference data, workflows, automated processing and client-specific configuration.',
        businessGoals: 'Develop, maintain and troubleshoot complex business modules while protecting data consistency and release quality.',
        responsibilities: [
          'Develop and maintain business modules with C#, .NET Framework and ASP.NET MVC',
          'Analyze and implement complex business rules across contracts, cases, members, reference data and workflows',
          'Debug end-to-end flows across C#, Razor, JavaScript/jQuery and SQL Server',
          'Design and optimize SQL queries, stored procedures, diagnostic scripts and rollback scripts',
          'Investigate functional and technical issues across local and staging environments',
          'Support testing, technical validation and application releases',
          'Work with Git, Jira and Azure DevOps throughout the delivery lifecycle'
        ],
        achievements: [
          'Resolved high-impact issues across critical business modules',
          'Delivered complex SQL diagnostics, fixes and rollback strategies',
          'Maintained strong traceability through structured Git and Azure DevOps workflows'
        ],
        impact: 'Contributes to the stability and continuous evolution of a complex ERP used for business-critical processes.'
      },
      exp6: {
        role: 'Freelance Full-Stack Developer - SaaS & Web Products',
        period: 'Aug. 2024 - Feb. 2026',
        location: 'Remote',
        context: 'End-to-end design and development of SaaS products and web applications including MarketPulse, RaiseUp, PayChase, ShowTracker, CoinHawk, Melodify and Skinet.',
        businessGoals: 'Deliver complete, maintainable products covering backend, frontend, data, testing, CI/CD and deployment.',
        responsibilities: [
          'Built REST APIs with .NET, ASP.NET Core and Node.js for data, profiles, workflows, invoicing, search, orders and payments',
          'Developed Angular and React interfaces focused on dashboards, productivity and responsive user experiences',
          'Designed application architecture, data models, authentication and business workflows',
          'Worked with SQL Server, PostgreSQL, MongoDB and Redis',
          'Implemented automated testing, Docker containerization and CI/CD pipelines',
          'Integrated Stripe payments, Keycloak authentication and external APIs where relevant'
        ],
        achievements: [
          'Designed and delivered multiple complete web products across several business domains',
          'Applied consistent architecture, testing and deployment practices across projects',
          'Built experience across data, finance, marketplace, media and e-commerce use cases'
        ],
        impact: 'Demonstrates the ability to understand a product quickly and deliver across the full application lifecycle.'
      },
      exp7: {
        role: 'Founder & Full-Stack Developer',
        period: 'Jan. 2026 - Present',
        location: 'Remote',
        context: 'Buy & Bye is a SaaS platform for influencer marketing, campaign management and conversion tracking.',
        businessGoals: 'Build a maintainable product that connects brands and creators while tracking campaigns, conversions and commissions.',
        responsibilities: [
          'Designed the application architecture and core campaign workflows',
          'Built secure REST APIs with Laravel',
          'Implemented authentication, RBAC and access-control policies',
          'Developed the React and TypeScript dashboard',
          'Built campaign, conversion, tracked-link and promo-code workflows',
          'Designed the PostgreSQL data model and containerized the platform with Docker'
        ],
        achievements: [
          'Delivered the core product architecture across backend, frontend and data layers',
          'Implemented secure role-based workflows and campaign tracking',
          'Established a Dockerized, CI/CD-ready delivery setup'
        ],
        impact: 'Combines hands-on engineering with product and business ownership on a complete SaaS platform.'
      }
    }
  },
  fr: {
    hero: {
      title: 'Développeur Full-Stack .NET / Angular',
      subtitle: 'Développeur Full-Stack spécialisé en .NET, C# et Angular, j’interviens sur des applications métier, plateformes SaaS et produits web en production, de l’architecture à la mise en production.',
      positioning: 'Ouvert aux',
      positioningHighlight: 'missions freelance',
      positioningSuffix: 'en remote ou hybride',
      availableForProjects: 'Disponible pour de nouveaux projets',
      viewMyWork: 'Voir mon travail',
      getInTouch: 'Me contacter',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      yearsExperience: 'Années d’expérience',
      projectsDelivered: 'Projets livrés',
      qualityFocus: 'Focus qualité'
    },
    experience: {
      title: 'Expérience',
      subtitle: 'Expérience en production sur des applications métier, plateformes SaaS, migrations et produits développés de bout en bout',
      contextGoals: 'Contexte & Objectifs Métier',
      keyResponsibilities: 'Responsabilités Clés',
      technicalStack: 'Stack Technique',
      keyAchievements: 'Réalisations Clés',
      impact: 'Impact',
      exp1: {
        role: 'Développeur Full-Stack .NET / Angular',
        context: 'Portail de souscription d’assurance en production avec de fortes exigences de fiabilité, sécurité et qualité de release.',
        businessGoals: 'Maintenir et moderniser une application métier critique tout en renforçant la fiabilité des livraisons et la maintenabilité.',
        responsibilities: [
          'Maintenance et évolution de fonctionnalités métier en .NET et Angular',
          'Migration progressive d’Angular 11 vers Angular 18',
          'Contribution à la migration de .NET Framework 4.8 vers .NET 6',
          'Développement et intégration d’API REST',
          'Renforcement des tests frontend pour limiter les régressions',
          'Amélioration des pipelines CI/CD et sécurisation des mises en production'
        ],
        achievements: [
          'Contribution à une modernisation majeure Angular et .NET',
          'Amélioration de la maintenabilité et de la fiabilité des livraisons',
          'Contribution à la stabilité d’une plateforme d’assurance en production'
        ],
        impact: 'Contribution à la modernisation et à l’évolution fiable d’une application en environnement réglementé.'
      },
      exp2: {
        role: 'Développeur Full-Stack .NET / Angular',
        context: 'Modernisation d’une application GMAO legacy vers une architecture Angular et .NET plus récente.',
        businessGoals: 'Moderniser le code existant, améliorer la maintenabilité et structurer les livraisons avec Azure DevOps.',
        responsibilities: [
          'Migration progressive de modules applicatifs existants',
          'Développement backend en C# / .NET',
          'Développement frontend Angular / TypeScript',
          'Refactoring du code legacy avec des pratiques Clean Code et Design Patterns',
          'Travail avec les API REST, Git et Azure DevOps',
          'Contribution aux pipelines CI/CD et à la documentation technique'
        ],
        achievements: [
          'Contribution à la migration vers une stack .NET / Angular moderne',
          'Amélioration de la maintenabilité du code et des workflows de développement',
          'Structuration des livraisons avec Azure DevOps'
        ],
        impact: 'Contribution à la modernisation d’une application métier et à l’amélioration du cycle de livraison.'
      },
      exp3: {
        role: 'Développeur Mobile Flutter',
        context: 'Application mobile offline-first dédiée à la gestion et au suivi du courrier au sein d’une institution publique.',
        businessGoals: 'Numériser la saisie, la classification, la recherche et le suivi du courrier tout en conservant un fonctionnement hors ligne.',
        responsibilities: [
          'Conception des workflows et de l’architecture avec UML et Merise',
          'Développement de l’application avec Flutter et Dart',
          'Mise en place de la persistance locale et des opérations CRUD avec SQLite',
          'Développement des fonctionnalités de saisie, classification, recherche, filtres et suivi'
        ],
        achievements: [
          'Livraison d’une application mobile offline-first fonctionnelle',
          'Structuration de l’application et du modèle de données pour faciliter la maintenance'
        ],
        impact: 'Contribution à la digitalisation d’un processus administratif interne via une solution mobile légère.'
      },
      exp4: {
        role: 'Développeur Web PHP / SQL',
        context: 'Application métier dédiée à la gestion des audiences, sessions et dossiers judiciaires.',
        businessGoals: 'Améliorer l’organisation et le suivi des audiences et des workflows associés aux dossiers.',
        responsibilities: [
          'Contribution à la conception fonctionnelle et technique',
          'Modélisation des entités et relations SQL',
          'Développement des écrans et workflows métier en PHP',
          'Mise en place de formulaires, listes, filtres, suivi des statuts et validations'
        ],
        achievements: [
          'Contribution à une application métier institutionnelle réelle',
          'Amélioration de la cohérence des données via des validations et workflows structurés'
        ],
        impact: 'Contribution à la livraison d’une application métier dans un environnement institutionnel.'
      },
      exp5: {
        role: 'Ingénieur Études et Développement .NET / C# - ERP SOR',
        period: 'avr. 2026 - aujourd’hui',
        location: 'Paris, France · Hybride',
        context: 'SOR est un ERP métier critique utilisé par les acteurs de la formation professionnelle pour gérer contrats, dossiers, adhérents, référentiels, workflows, traitements automatisés et paramétrages clients.',
        businessGoals: 'Développer, maintenir et diagnostiquer des modules métier complexes tout en préservant la cohérence des données et la qualité des livraisons.',
        responsibilities: [
          'Développement et maintenance de modules métier en C#, .NET Framework et ASP.NET MVC',
          'Analyse et implémentation de règles métier complexes sur les contrats, dossiers, adhérents, référentiels et workflows',
          'Debug de bout en bout sur C#, Razor, JavaScript/jQuery et SQL Server',
          'Conception et optimisation de requêtes SQL, procédures stockées, scripts de diagnostic et rollback',
          'Analyse d’anomalies fonctionnelles et techniques en local et recette',
          'Tests, validation technique et accompagnement des livraisons',
          'Gestion du cycle de développement avec Git, Jira et Azure DevOps'
        ],
        achievements: [
          'Résolution d’anomalies à fort impact sur plusieurs modules métier critiques',
          'Livraison de diagnostics SQL, correctifs et stratégies de rollback complexes',
          'Maintien d’une forte traçabilité via des workflows Git et Azure DevOps structurés'
        ],
        impact: 'Contribution à la stabilité et à l’évolution continue d’un ERP complexe utilisé sur des processus métier critiques.'
      },
      exp6: {
        role: 'Développeur Full-Stack Freelance - SaaS & Produits Web',
        period: 'août 2024 - févr. 2026',
        location: 'À distance',
        context: 'Conception et développement de produits SaaS et applications web de bout en bout : MarketPulse, RaiseUp, PayChase, ShowTracker, CoinHawk, Melodify et Skinet.',
        businessGoals: 'Livrer des produits complets et maintenables couvrant backend, frontend, données, tests, CI/CD et déploiement.',
        responsibilities: [
          'Développement d’API REST avec .NET, ASP.NET Core et Node.js pour des modules data, profils, workflows, facturation, recherche, commandes et paiements',
          'Développement d’interfaces Angular et React orientées dashboards, productivité et expérience responsive',
          'Conception de l’architecture applicative, des modèles de données, de l’authentification et des workflows métier',
          'Utilisation de SQL Server, PostgreSQL, MongoDB et Redis',
          'Mise en place de tests automatisés, Docker et pipelines CI/CD',
          'Intégration de Stripe, Keycloak et d’API externes selon les projets'
        ],
        achievements: [
          'Conception et livraison de plusieurs produits web complets sur différents domaines métier',
          'Application de pratiques cohérentes d’architecture, tests et déploiement sur les projets',
          'Expérience acquise sur des cas d’usage data, finance, marketplace, média et e-commerce'
        ],
        impact: 'Démontre la capacité à comprendre rapidement un produit et à intervenir sur l’ensemble de son cycle de développement.'
      },
      exp7: {
        role: 'Fondateur & Développeur Full-Stack',
        period: 'janv. 2026 - aujourd’hui',
        location: 'À distance',
        context: 'Buy & Bye est une plateforme SaaS de marketing d’influence, de gestion de campagnes et de suivi des conversions.',
        businessGoals: 'Construire un produit maintenable reliant marques et créateurs tout en assurant le suivi des campagnes, conversions et commissions.',
        responsibilities: [
          'Conception de l’architecture applicative et des workflows de campagne',
          'Développement d’API REST sécurisées avec Laravel',
          'Mise en place de l’authentification, du RBAC et des politiques d’accès',
          'Développement du dashboard React / TypeScript',
          'Développement du tracking des campagnes, liens suivis et codes promotionnels',
          'Modélisation PostgreSQL et Dockerisation de la plateforme'
        ],
        achievements: [
          'Livraison du socle produit sur les couches backend, frontend et données',
          'Mise en place de workflows sécurisés par rôles et du tracking de campagne',
          'Mise en place d’un environnement Dockerisé prêt pour CI/CD'
        ],
        impact: 'Combine développement full-stack, architecture produit et vision business sur une plateforme SaaS complète.'
      }
    }
  }
};
