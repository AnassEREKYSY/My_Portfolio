import { Translations } from './services/translation.service';

export const translations: Record<'en' | 'fr', Translations> = {
  en: {
    nav: {
      main: 'Main navigation',
      toggle: 'Toggle navigation menu',
      home: 'Home',
      about: 'About',
      whatIDo: 'What I Do',
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
      positioning: 'I am looking for short or long-term missions as a Full Stack Developer.',
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
    hero: {
      title: 'Full Stack Developer',
      subtitle: 'Over 3 years of experience building scalable and reliable web applications using .NET, Angular, Node.js, and modern DevOps practices.',
      positioning: 'Open to',
      positioningHighlight: 'short- and long-term missions',
      positioningSuffix: 'as a Full Stack Developer',
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      yearsExperience: 'Years Experience',
      projectsDelivered: 'Projects Delivered',
      qualityFocus: 'Quality Focus'
    },
    whatIDo: {
      title: 'What I Do',
      subtitle: 'Full-stack development with a focus on scalability, reliability, and engineering excellence',
      frontendTitle: 'Frontend Development',
      frontendDesc: 'Designing and building modern, performant web interfaces primarily with Angular/React and TypeScript/JavaScript. Strong focus on clean architecture, maintainable code, responsive design, and user experience, using modern CSS solutions such as Tailwind CSS and Bootstrap.',
      backendTitle: 'Backend Development',
      backendDesc: 'Developing robust and scalable backend services and REST APIs using .NET Core and Node.js. Experienced in business-oriented application logic, database integration (SQL and NoSQL), authentication, and building maintainable, secure backend architectures.',
      devopsTitle: 'DevOps, CI/CD & Automation',
      devopsDesc: 'Implementing CI/CD pipelines, containerization with Docker, and cloud-ready infrastructures. Hands-on experience with GitHub Actions, GitLab CI, Azure DevOps, monitoring tools, and automated testing to ensure reliable, high-quality deliveries.',
      expertiseTitle: 'Full-Stack Expertise',
      expertiseDesc: 'I design and build complete web applications, covering both frontend and backend layers, with a strong focus on clean architecture, performance, and long-term maintainability.',
      frontendDev: 'Frontend Development',
      backendArch: 'Backend Architecture',
      devopsCICD: 'DevOps & CI/CD',
      bullet1: 'Development of business-critical and enterprise-oriented web applications',
      bullet2: 'Scalable and modular application architectures using modern frameworks',
      bullet3: 'Automated testing, quality assurance, and reliable delivery pipelines',
      bullet4: 'Containerized deployments and CI/CD-driven infrastructure workflows'
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
      title: 'Experience',
      subtitle: 'Over 3 years of professional experience delivering impactful solutions',
      contextGoals: 'Context & Business Goals',
      keyResponsibilities: 'Key Responsibilities',
      technicalStack: 'Technical Stack',
      keyAchievements: 'Key Achievements',
      impact: 'Impact',
      exp1: {
        role: 'Full Stack Developer (.NET / Angular) | DevOps',
        context: 'Maintenance and evolution of an enterprise Angular/.NET subscription management portal in a finance-oriented environment.',
        businessGoals: 'Ensure application stability, improve delivery processes, and support long-term evolution of a critical business platform.',
        responsibilities: [
          'Maintain and evolve a production Angular frontend and .NET backend',
          'Implement CI/CD pipelines and DevOps practices to improve delivery reliability',
          'Introduce automated testing to improve code quality and reduce regressions',
          'Collaborate with functional teams to analyze requirements and deliver new features',
          'Participate in code reviews and contribute to technical best practices'
        ],
        achievements: [
          'Improved deployment reliability through CI/CD automation',
          'Enhanced code quality and maintainability with automated testing',
          'Contributed to the long-term stability of a business-critical application'
        ],
        impact: 'Helped maintain a stable and reliable enterprise application while improving development workflows and delivery quality.'
      },
      exp2: {
        role: 'Full Stack Developer (.NET / Angular)',
        context: 'Migration of a CMMS (Computerized Maintenance Management System) from a legacy stack to Angular and .NET.',
        businessGoals: 'Modernize the application stack and industrialize the development workflow.',
        responsibilities: [
          'Participate in the migration of a legacy CMMS application to Angular and .NET',
          'Develop new frontend and backend features',
          'Industrialize the development workflow using Azure DevOps',
          'Contribute to codebase structuring and technical documentation',
          'Work closely with the team to ensure functional continuity during migration'
        ],
        achievements: [
          'Successfully contributed to the migration toward a modern Angular/.NET stack',
          'Helped industrialize the development process with structured pipelines',
          'Improved maintainability and readability of the codebase'
        ],
        impact: 'Supported the modernization of a business application and improved the development lifecycle.'
      },
      exp3: {
        role: 'Mobile Developer (Flutter)',
        context: 'Development of a mobile application for internal mail management within a public institution.',
        businessGoals: 'Digitize and streamline internal mail processing.',
        responsibilities: [
          'Develop a mobile application using Flutter',
          'Design application architecture using Merise and UML models',
          'Implement core business features for mail tracking',
          'Collaborate with stakeholders to validate functional requirements'
        ],
        achievements: [
          'Delivered a functional mobile application adapted to institutional needs',
          'Provided clear technical documentation for future maintenance'
        ],
        impact: 'Contributed to the digitalization of internal processes within a public administration.'
      },
      exp4: {
        role: 'Web Developer (PHP)',
        context: 'Assistance in the development of a case-session management web application for a court.',
        businessGoals: 'Improve the management and organization of court sessions.',
        responsibilities: [
          'Assist in the development of a web application using PHP and HTML/CSS',
          'Contribute to database modeling and business logic implementation',
          'Work closely with the main developer to deliver functional features',
          'Support testing and validation of application workflows'
        ],
        achievements: [
          'Contributed to a real institutional web application',
          'Gained experience in business-oriented and regulated environments'
        ],
        impact: 'Supported the delivery of a functional judicial application in a real-world institutional context.'
      }
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'Real-world projects showcasing architecture choices, technical depth, and delivery-focused engineering.',
      contextProblem: 'Context & Problem',
      solutionApproach: 'Solution & Approach',
      keyFeatures: 'Key Features',
      technicalHighlights: 'Technical Highlights',
      technologyStack: 'Technology Stack',
      roleImpact: 'Role & Impact',
      sourceCode: 'Source Code',
      githubRepo: 'GitHub Repository',
      proj1: {
        description: 'B2B SaaS application for invoice management and automated payment follow-ups.',
        problem: 'Small and medium businesses relied on manual invoice tracking and reminders, leading to delayed payments and poor cash-flow visibility.',
        solution: 'Design and development of a modular SaaS platform with dedicated backend services to manage invoices, automate reminders, and track payment statuses.',
        features: [
          'Invoice creation, management, and status tracking',
          'Automated email reminders for unpaid invoices',
          'Authentication and role-based access',
          'Payment status dashboard and reporting',
          'Business-oriented workflows'
        ],
        highlights: [
          'Service-oriented architecture with independent backend services',
          'Clear separation between authentication and business domains',
          'Dockerized services for local and production environments',
          'Scalable and maintainable backend design'
        ],
        impact: 'Improved payment follow-up efficiency and provided better cash-flow visibility for businesses.',
        role: 'Full Stack Developer – Architecture design, frontend development, backend services, DevOps setup'
      },
      proj2: {
        description: 'Music streaming web application inspired by Spotify, focused on playlists and user interactions.',
        problem: 'Users needed a simple platform to browse music, manage playlists, and interact with content in a clean UI.',
        solution: 'Development of a full-stack web application integrating the Spotify Developer API for music data and user features.',
        features: [
          'Music search and browsing',
          'Playlist creation and management',
          'User authentication',
          'Favorites and personal library'
        ],
        highlights: [
          'Clean and modular Angular frontend',
          'Structured backend API',
          'Integration with external third-party APIs',
          'Focus on usability and performance'
        ],
        impact: 'Delivered a functional streaming-like experience with essential social and playlist features.',
        role: 'Full Stack Developer – Frontend, backend APIs, external API integration'
      },
      proj3: {
        description: 'Cryptocurrency monitoring platform for tracking prices and market trends.',
        problem: 'Crypto users needed a clear and reliable way to monitor market prices and trends in real time.',
        solution: 'Development of a web application consuming public crypto APIs and presenting market data through dashboards.',
        features: [
          'Real-time cryptocurrency price tracking',
          'Market overview dashboard',
          'Coin search and filtering',
          'Price evolution charts'
        ],
        highlights: [
          'Secure authentication with Keycloak',
          'External API consumption and data normalization',
          'Clear and readable data visualizations',
          'Responsive user interface'
        ],
        impact: 'Enabled users to easily monitor crypto markets through a centralized interface.',
        role: 'Full Stack Developer – API integration, authentication, frontend development'
      },
      proj4: {
        description: 'E-commerce web application for online product sales and payment processing.',
        problem: 'Need for a simple, secure, and complete e-commerce workflow for online sales.',
        solution: 'Development of a full-stack e-commerce platform covering product catalog, cart, checkout, and payments.',
        features: [
          'Product catalog management',
          'Shopping cart',
          'Secure checkout and payments',
          'Order management'
        ],
        highlights: [
          'End-to-end e-commerce workflow',
          'Stripe payment integration',
          'Clean and maintainable codebase',
          'Separation of business and infrastructure concerns'
        ],
        impact: 'Provided a functional and secure e-commerce solution ready for online sales.',
        role: 'Full Stack Developer – E-commerce features, payment integration, backend APIs'
      },
      proj5: {
        description: 'Marketplace platform connecting startups with potential investors.',
        problem: 'Startups lacked a centralized platform to showcase projects and reach investors efficiently.',
        solution: 'Development of a marketplace web application enabling project presentation and user interactions.',
        features: [
          'Startup project listings',
          'User roles (startup / investor)',
          'Project discovery and browsing',
          'Basic interaction features'
        ],
        highlights: [
          'Marketplace-oriented architecture',
          'Clear separation between frontend and backend',
          'Focus on simplicity and usability'
        ],
        impact: 'Enabled startups to showcase projects and connect with potential investors.',
        role: 'Full Stack Developer – Marketplace design and implementation'
      },
      proj6: {
        description: 'Web application for tracking TV series and movies.',
        problem: 'Users wanted an easy way to track watched content and discover new shows.',
        solution: 'Development of a web application integrating external movie and TV APIs.',
        features: [
          'Watchlist and favorites',
          'Series and movie tracking',
          'Content discovery',
          'User preferences management'
        ],
        highlights: [
          'External API integration',
          'Responsive and intuitive UI',
          'Clean frontend architecture'
        ],
        impact: 'Delivered a lightweight and user-friendly entertainment tracking application.',
        role: 'Full Stack Developer – Frontend, backend, and API integration'
      },
      proj7: {
        description: 'Backend system for a digital wallet supporting cashless transactions through an agent-based model.',
        problem: 'Digital wallet applications require secure, consistent, and auditable transaction handling.',
        solution: 'Development of backend services managing wallet balances, deposits, withdrawals, and transaction workflows.',
        features: [
          'Wallet balance management',
          'Deposit and withdrawal workflows',
          'Transaction history tracking',
          'Agent-based transaction validation'
        ],
        highlights: [
          'Business-oriented backend logic',
          'Transaction consistency and validation',
          'Containerized backend services',
          'CI/CD-ready architecture'
        ],
        impact: 'Provided a solid backend foundation for a digital wallet application.',
        role: 'Backend Developer – Backend architecture and business logic implementation'
      }
    },
    skills: {
      title: 'Skills & Tooling',
      subtitle: 'Technical expertise and tools I use to build reliable, scalable applications',
      methodologies: 'Methodologies & Practices'
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Available for short or long-term missions. Feel free to contact me to discuss your project.',
      contactInfo: 'Contact Information',
      professionalProfiles: 'Professional Profiles',
      location: 'Paris, France',
      availability: 'Availability',
      availabilityDesc: 'Open to short- and long-term missions',
      shortTerm: 'Short-term',
      longTerm: 'Long-term',
      fullStack: 'Full Stack',
      parisRemote: 'Paris / Remote'
    },
    howIWork: {
      title: 'How I Work',
      subtitle: 'My approach to delivering reliable, maintainable, and business-oriented software',
      principle1: {
        title: 'Clean & Maintainable Code',
        description: 'I focus on writing clean, readable, and maintainable code with a clear structure and consistent conventions, making applications easier to understand and evolve.'
      },
      principle2: {
        title: 'Quality Through Testing',
        description: 'I use automated testing to secure application behavior and reduce regressions, relying on unit, integration, and end-to-end tests when relevant.'
      },
      principle3: {
        title: 'Pragmatic DevOps & Automation',
        description: 'I leverage CI/CD pipelines and containerization to automate builds, tests, and deployments, improving delivery reliability and consistency.'
      },
      principle4: {
        title: 'Collaboration & Documentation',
        description: 'I collaborate closely with technical and functional teams, communicate clearly, and document technical decisions to ensure alignment and maintainability.'
      },
      principle5: {
        title: 'Continuous Improvement',
        description: 'I continuously refine my approach by learning from real projects, feedback, and best practices rather than following rigid methodologies.'
      },
      principle6: {
        title: 'Business-Oriented Delivery',
        description: 'I keep business objectives in mind, balancing technical quality with practical constraints to deliver solutions that create real value.'
      },
      processTitle: 'Development Process',
      step1: {
        title: 'Requirements & Understanding',
        description: 'Analyze business needs, understand functional constraints, and clarify expectations with stakeholders.'
      },
      step2: {
        title: 'Technical Design',
        description: 'Define application structure, data models, and technical choices with a focus on clarity and maintainability.'
      },
      step3: {
        title: 'Development & Testing',
        description: 'Implement features incrementally with clean code and automated tests to reduce regressions and improve reliability.'
      },
      step4: {
        title: 'CI/CD & Deployment',
        description: 'Use CI/CD pipelines and containerization to ensure consistent builds, testing, and deployments.'
      },
      step5: {
        title: 'Review & Improvement',
        description: 'Review code, address feedback, and continuously improve performance, quality, and usability.'
      },
      step6: {
        title: 'Documentation & Knowledge Sharing',
        description: 'Document key decisions and share knowledge to ensure long-term maintainability and team alignment.'
      }
    }
  },
  fr: {
    nav: {
      main: 'Navigation principale',
      toggle: 'Ouvrir/fermer le menu de navigation',
      home: 'Accueil',
      about: 'À propos',
      whatIDo: 'Ce que je fais',
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
      positioning: 'Je recherche des missions courtes ou longues en tant que Développeur Full Stack.',
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
    hero: {
      title: 'Développeur Full Stack',
      subtitle: 'Plus de 3 ans d\'expérience dans le développement d\'applications web scalables et fiables utilisant .NET, Angular, Node.js et les pratiques DevOps modernes.',
      positioning: 'Ouvert aux',
      positioningHighlight: 'missions courtes et longues',
      positioningSuffix: 'en tant que Développeur Full Stack',
      viewMyWork: 'Voir mon travail',
      getInTouch: 'Me contacter',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      yearsExperience: 'Années d\'expérience',
      projectsDelivered: 'Projets livrés',
      qualityFocus: 'Focus qualité'
    },
    whatIDo: {
      title: 'Ce que je fais',
      subtitle: 'Développement full-stack axé sur la scalabilité, la fiabilité et l\'excellence technique',
      frontendTitle: 'Développement Frontend',
      frontendDesc: 'Conception et développement d\'interfaces web modernes et performantes principalement avec Angular/React et TypeScript/JavaScript. Forte attention portée à l\'architecture propre, au code maintenable, au design responsive et à l\'expérience utilisateur, en utilisant des solutions CSS modernes telles que Tailwind CSS et Bootstrap.',
      backendTitle: 'Développement Backend',
      backendDesc: 'Développement de services backend robustes et scalables et d\'APIs REST en utilisant .NET Core et Node.js. Expérience en logique applicative orientée métier, intégration de bases de données (SQL et NoSQL), authentification, et construction d\'architectures backend maintenables et sécurisées.',
      devopsTitle: 'DevOps, CI/CD & Automatisation',
      devopsDesc: 'Mise en place de pipelines CI/CD, conteneurisation avec Docker, et infrastructures prêtes pour le cloud. Expérience pratique avec GitHub Actions, GitLab CI, Azure DevOps, outils de monitoring, et tests automatisés pour garantir des livraisons fiables et de haute qualité.',
      expertiseTitle: 'Expertise Full-Stack',
      expertiseDesc: 'Je conçois et développe des applications web complètes, couvrant à la fois les couches frontend et backend, avec une forte attention portée à l\'architecture propre, la performance et la maintenabilité à long terme.',
      frontendDev: 'Développement Frontend',
      backendArch: 'Architecture Backend',
      devopsCICD: 'DevOps & CI/CD',
      bullet1: 'Développement d\'applications web critiques et orientées entreprise',
      bullet2: 'Architectures applicatives scalables et modulaires utilisant des frameworks modernes',
      bullet3: 'Tests automatisés, assurance qualité et pipelines de livraison fiables',
      bullet4: 'Déploiements conteneurisés et workflows d\'infrastructure pilotés par CI/CD'
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
      title: 'Expérience',
      subtitle: 'Plus de 3 ans d\'expérience professionnelle livrant des solutions à fort impact',
      contextGoals: 'Contexte & Objectifs Métier',
      keyResponsibilities: 'Responsabilités Clés',
      technicalStack: 'Stack Technique',
      keyAchievements: 'Réalisations Clés',
      impact: 'Impact',
      exp1: {
        role: 'Développeur Full Stack (.NET / Angular) | DevOps',
        context: 'Maintenance et évolution d\'un portail de gestion d\'abonnements Angular/.NET en environnement orienté finance.',
        businessGoals: 'Assurer la stabilité de l\'application, améliorer les processus de livraison et soutenir l\'évolution à long terme d\'une plateforme métier critique.',
        responsibilities: [
          'Maintenir et faire évoluer un frontend Angular et un backend .NET en production',
          'Implémenter des pipelines CI/CD et des pratiques DevOps pour améliorer la fiabilité des livraisons',
          'Introduire des tests automatisés pour améliorer la qualité du code et réduire les régressions',
          'Collaborer avec les équipes fonctionnelles pour analyser les besoins et livrer de nouvelles fonctionnalités',
          'Participer aux revues de code et contribuer aux meilleures pratiques techniques'
        ],
        achievements: [
          'Amélioration de la fiabilité des déploiements grâce à l\'automatisation CI/CD',
          'Amélioration de la qualité et de la maintenabilité du code avec des tests automatisés',
          'Contribution à la stabilité à long terme d\'une application métier critique'
        ],
        impact: 'Aide à maintenir une application d\'entreprise stable et fiable tout en améliorant les workflows de développement et la qualité des livraisons.'
      },
      exp2: {
        role: 'Développeur Full Stack (.NET / Angular)',
        context: 'Migration d\'un CMMS (Système de Gestion de Maintenance Assistée par Ordinateur) d\'une stack legacy vers Angular et .NET.',
        businessGoals: 'Moderniser la stack applicative et industrialiser le workflow de développement.',
        responsibilities: [
          'Participer à la migration d\'une application CMMS legacy vers Angular et .NET',
          'Développer de nouvelles fonctionnalités frontend et backend',
          'Industrialiser le workflow de développement en utilisant Azure DevOps',
          'Contribuer à la structuration du codebase et à la documentation technique',
          'Travailler en étroite collaboration avec l\'équipe pour assurer la continuité fonctionnelle pendant la migration'
        ],
        achievements: [
          'Contribution réussie à la migration vers une stack Angular/.NET moderne',
          'Aide à l\'industrialisation du processus de développement avec des pipelines structurés',
          'Amélioration de la maintenabilité et de la lisibilité du codebase'
        ],
        impact: 'Soutien à la modernisation d\'une application métier et amélioration du cycle de vie de développement.'
      },
      exp3: {
        role: 'Développeur Mobile (Flutter)',
        context: 'Développement d\'une application mobile pour la gestion du courrier interne au sein d\'une institution publique.',
        businessGoals: 'Numériser et rationaliser le traitement du courrier interne.',
        responsibilities: [
          'Développer une application mobile en utilisant Flutter',
          'Concevoir l\'architecture de l\'application en utilisant des modèles Merise et UML',
          'Implémenter les fonctionnalités métier principales pour le suivi du courrier',
          'Collaborer avec les parties prenantes pour valider les exigences fonctionnelles'
        ],
        achievements: [
          'Livraison d\'une application mobile fonctionnelle adaptée aux besoins institutionnels',
          'Fourniture d\'une documentation technique claire pour la maintenance future'
        ],
        impact: 'Contribution à la numérisation des processus internes au sein d\'une administration publique.'
      },
      exp4: {
        role: 'Développeur Web (PHP)',
        context: 'Assistance au développement d\'une application web de gestion des sessions d\'audience pour un tribunal.',
        businessGoals: 'Améliorer la gestion et l\'organisation des sessions d\'audience.',
        responsibilities: [
          'Assister au développement d\'une application web en utilisant PHP et HTML/CSS',
          'Contribuer à la modélisation de la base de données et à l\'implémentation de la logique métier',
          'Travailler en étroite collaboration avec le développeur principal pour livrer des fonctionnalités',
          'Soutenir les tests et la validation des workflows de l\'application'
        ],
        achievements: [
          'Contribution à une application web institutionnelle réelle',
          'Acquisition d\'expérience dans des environnements orientés métier et réglementés'
        ],
        impact: 'Soutien à la livraison d\'une application judiciaire fonctionnelle dans un contexte institutionnel réel.'
      }
    },
    projects: {
      title: 'Projets Sélectionnés',
      subtitle: 'Projets réels mettant en valeur les choix d\'architecture, la profondeur technique et l\'ingénierie axée sur la livraison.',
      contextProblem: 'Contexte & Problème',
      solutionApproach: 'Solution & Approche',
      keyFeatures: 'Fonctionnalités Clés',
      technicalHighlights: 'Points Techniques',
      technologyStack: 'Stack Technologique',
      roleImpact: 'Rôle & Impact',
      sourceCode: 'Code Source',
      githubRepo: 'Dépôt GitHub',
      proj1: {
        description: 'Application SaaS B2B pour la gestion des factures et le suivi automatisé des paiements.',
        problem: 'Les petites et moyennes entreprises dépendaient du suivi manuel des factures et des rappels, entraînant des retards de paiement et une mauvaise visibilité de la trésorerie.',
        solution: 'Conception et développement d\'une plateforme SaaS modulaire avec des services backend dédiés pour gérer les factures, automatiser les rappels et suivre les statuts de paiement.',
        features: [
          'Création, gestion et suivi du statut des factures',
          'Rappels par email automatisés pour les factures impayées',
          'Authentification et accès basé sur les rôles',
          'Tableau de bord et reporting du statut des paiements',
          'Workflows orientés métier'
        ],
        highlights: [
          'Architecture orientée services avec des services backend indépendants',
          'Séparation claire entre les domaines d\'authentification et métier',
          'Services conteneurisés pour les environnements locaux et de production',
          'Conception backend scalable et maintenable'
        ],
        impact: 'Amélioration de l\'efficacité du suivi des paiements et meilleure visibilité de la trésorerie pour les entreprises.',
        role: 'Développeur Full Stack – Conception d\'architecture, développement frontend, services backend, configuration DevOps'
      },
      proj2: {
        description: 'Application web de streaming musical inspirée de Spotify, axée sur les playlists et les interactions utilisateur.',
        problem: 'Les utilisateurs avaient besoin d\'une plateforme simple pour parcourir la musique, gérer les playlists et interagir avec le contenu dans une interface propre.',
        solution: 'Développement d\'une application web full-stack intégrant l\'API Spotify Developer pour les données musicales et les fonctionnalités utilisateur.',
        features: [
          'Recherche et navigation musicale',
          'Création et gestion de playlists',
          'Authentification utilisateur',
          'Favoris et bibliothèque personnelle'
        ],
        highlights: [
          'Frontend Angular propre et modulaire',
          'API backend structurée',
          'Intégration avec des APIs tierces externes',
          'Focus sur l\'utilisabilité et les performances'
        ],
        impact: 'Livraison d\'une expérience de streaming fonctionnelle avec des fonctionnalités sociales et de playlist essentielles.',
        role: 'Développeur Full Stack – Frontend, APIs backend, intégration d\'API externe'
      },
      proj3: {
        description: 'Plateforme de suivi des cryptomonnaies pour le suivi des prix et des tendances du marché.',
        problem: 'Les utilisateurs de crypto avaient besoin d\'un moyen clair et fiable de suivre les prix du marché et les tendances en temps réel.',
        solution: 'Développement d\'une application web consommant des APIs crypto publiques et présentant les données du marché via des tableaux de bord.',
        features: [
          'Suivi des prix des cryptomonnaies en temps réel',
          'Tableau de bord de vue d\'ensemble du marché',
          'Recherche et filtrage de pièces',
          'Graphiques d\'évolution des prix'
        ],
        highlights: [
          'Authentification sécurisée avec Keycloak',
          'Consommation d\'API externe et normalisation des données',
          'Visualisations de données claires et lisibles',
          'Interface utilisateur responsive'
        ],
        impact: 'Permis aux utilisateurs de suivre facilement les marchés crypto via une interface centralisée.',
        role: 'Développeur Full Stack – Intégration d\'API, authentification, développement frontend'
      },
      proj4: {
        description: 'Application web e-commerce pour la vente en ligne de produits et le traitement des paiements.',
        problem: 'Besoin d\'un workflow e-commerce simple, sécurisé et complet pour les ventes en ligne.',
        solution: 'Développement d\'une plateforme e-commerce full-stack couvrant le catalogue de produits, le panier, le checkout et les paiements.',
        features: [
          'Gestion du catalogue de produits',
          'Panier d\'achat',
          'Checkout et paiements sécurisés',
          'Gestion des commandes'
        ],
        highlights: [
          'Workflow e-commerce de bout en bout',
          'Intégration de paiement Stripe',
          'Codebase propre et maintenable',
          'Séparation des préoccupations métier et infrastructure'
        ],
        impact: 'Fourni une solution e-commerce fonctionnelle et sécurisée prête pour les ventes en ligne.',
        role: 'Développeur Full Stack – Fonctionnalités e-commerce, intégration de paiement, APIs backend'
      },
      proj5: {
        description: 'Plateforme de marketplace connectant les startups avec des investisseurs potentiels.',
        problem: 'Les startups manquaient d\'une plateforme centralisée pour présenter leurs projets et atteindre efficacement les investisseurs.',
        solution: 'Développement d\'une application web marketplace permettant la présentation de projets et les interactions utilisateur.',
        features: [
          'Listings de projets de startups',
          'Rôles utilisateur (startup / investisseur)',
          'Découverte et navigation de projets',
          'Fonctionnalités d\'interaction de base'
        ],
        highlights: [
          'Architecture orientée marketplace',
          'Séparation claire entre frontend et backend',
          'Focus sur la simplicité et l\'utilisabilité'
        ],
        impact: 'Permis aux startups de présenter leurs projets et de se connecter avec des investisseurs potentiels.',
        role: 'Développeur Full Stack – Conception et implémentation de marketplace'
      },
      proj6: {
        description: 'Application web pour le suivi des séries TV et des films.',
        problem: 'Les utilisateurs voulaient un moyen simple de suivre le contenu regardé et découvrir de nouvelles séries.',
        solution: 'Développement d\'une application web intégrant des APIs externes de films et de séries TV.',
        features: [
          'Liste de souhaits et favoris',
          'Suivi des séries et films',
          'Découverte de contenu',
          'Gestion des préférences utilisateur'
        ],
        highlights: [
          'Intégration d\'API externe',
          'Interface utilisateur responsive et intuitive',
          'Architecture frontend propre'
        ],
        impact: 'Livraison d\'une application de suivi de divertissement légère et conviviale.',
        role: 'Développeur Full Stack – Frontend, backend et intégration d\'API'
      },
      proj7: {
        description: 'Système backend pour un portefeuille numérique supportant les transactions sans espèces via un modèle basé sur des agents.',
        problem: 'Les applications de portefeuille numérique nécessitent une gestion de transactions sécurisée, cohérente et auditable.',
        solution: 'Développement de services backend gérant les soldes de portefeuille, les dépôts, les retraits et les workflows de transaction.',
        features: [
          'Gestion du solde du portefeuille',
          'Workflows de dépôt et de retrait',
          'Suivi de l\'historique des transactions',
          'Validation de transaction basée sur des agents'
        ],
        highlights: [
          'Logique backend orientée métier',
          'Cohérence et validation des transactions',
          'Services backend conteneurisés',
          'Architecture prête pour CI/CD'
        ],
        impact: 'Fourni une base backend solide pour une application de portefeuille numérique.',
        role: 'Développeur Backend – Architecture backend et implémentation de la logique métier'
      }
    },
    skills: {
      title: 'Compétences & Outils',
      subtitle: 'Expertise technique et outils que j\'utilise pour construire des applications fiables et scalables',
      methodologies: 'Méthodologies & Pratiques'
    },
    contact: {
      title: 'Travaillons ensemble',
      subtitle: 'Disponible pour des missions courtes ou longues. N\'hésitez pas à me contacter pour discuter de votre projet.',
      contactInfo: 'Informations de Contact',
      professionalProfiles: 'Profils Professionnels',
      location: 'Paris, France',
      availability: 'Disponibilité',
      availabilityDesc: 'Ouvert aux missions courtes et longues',
      shortTerm: 'Court terme',
      longTerm: 'Long terme',
      fullStack: 'Full Stack',
      parisRemote: 'Paris / Remote'
    },
    howIWork: {
      title: 'Comment je travaille',
      subtitle: 'Mon approche pour livrer des logiciels fiables, maintenables et orientés métier',
      principle1: {
        title: 'Code Propre & Maintenable',
        description: 'Je me concentre sur l\'écriture de code propre, lisible et maintenable avec une structure claire et des conventions cohérentes, rendant les applications plus faciles à comprendre et à faire évoluer.'
      },
      principle2: {
        title: 'Qualité par les Tests',
        description: 'J\'utilise des tests automatisés pour sécuriser le comportement de l\'application et réduire les régressions, en m\'appuyant sur des tests unitaires, d\'intégration et end-to-end lorsque c\'est pertinent.'
      },
      principle3: {
        title: 'DevOps & Automatisation Pragmatiques',
        description: 'J\'exploite les pipelines CI/CD et la conteneurisation pour automatiser les builds, tests et déploiements, améliorant la fiabilité et la cohérence des livraisons.'
      },
      principle4: {
        title: 'Collaboration & Documentation',
        description: 'Je collabore étroitement avec les équipes techniques et fonctionnelles, communique clairement et documente les décisions techniques pour assurer l\'alignement et la maintenabilité.'
      },
      principle5: {
        title: 'Amélioration Continue',
        description: 'Je raffine continuellement mon approche en apprenant des projets réels, des retours et des meilleures pratiques plutôt qu\'en suivant des méthodologies rigides.'
      },
      principle6: {
        title: 'Livraison Orientée Métier',
        description: 'Je garde les objectifs métier à l\'esprit, équilibrant la qualité technique avec les contraintes pratiques pour livrer des solutions qui créent une vraie valeur.'
      },
      processTitle: 'Processus de Développement',
      step1: {
        title: 'Besoins & Compréhension',
        description: 'Analyser les besoins métier, comprendre les contraintes fonctionnelles et clarifier les attentes avec les parties prenantes.'
      },
      step2: {
        title: 'Conception Technique',
        description: 'Définir la structure de l\'application, les modèles de données et les choix techniques avec un focus sur la clarté et la maintenabilité.'
      },
      step3: {
        title: 'Développement & Tests',
        description: 'Implémenter les fonctionnalités de manière incrémentale avec du code propre et des tests automatisés pour réduire les régressions et améliorer la fiabilité.'
      },
      step4: {
        title: 'CI/CD & Déploiement',
        description: 'Utiliser les pipelines CI/CD et la conteneurisation pour assurer des builds, tests et déploiements cohérents.'
      },
      step5: {
        title: 'Revue & Amélioration',
        description: 'Réviser le code, traiter les retours et améliorer continuellement les performances, la qualité et l\'utilisabilité.'
      },
      step6: {
        title: 'Documentation & Partage de Connaissances',
        description: 'Documenter les décisions clés et partager les connaissances pour assurer la maintenabilité à long terme et l\'alignement de l\'équipe.'
      }
    }
  }
};

