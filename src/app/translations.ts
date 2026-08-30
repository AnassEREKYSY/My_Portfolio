import { Translations } from './services/translation.service';

export const translations: Record<'en' | 'fr', Translations> = {
  en: {
    nav: {
      main: "Main navigation",
      toggle: "Toggle navigation menu",
      home: "Home",
      about: "About",
      whatIDo: "What I Do",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      lang: {
        en: "Switch to English",
        fr: "Switch to French"
      }
    },
    home: {
      title: "Full-Stack .NET / Angular Developer",
      subtitle: "C# • ASP.NET Core • TypeScript • SQL Server",
      description: "I build and improve business applications, SaaS products and production web platforms with a strong focus on clean architecture, maintainability and reliable delivery.",
      backend: "Backend",
      frontend: "Frontend",
      devops: "DevOps",
      backendTech: ".NET / C# / Node.js",
      frontendTech: "Angular / React",
      devopsTech: "CI/CD • Docker • Azure DevOps",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      availableFor: "Available for",
      positioning: "Available for freelance missions where I can contribute quickly to an existing product or build a new one end-to-end.",
      shortTerm: "Short-term missions",
      longTerm: "Long-term missions",
      location: "Île-de-France & Remote",
      yearsExp: "4+",
      yearsLabel: "Years of experience",
      projectsDelivered: "15+",
      projectsLabel: "Projects delivered",
      technologies: "5+",
      techLabel: "Core technologies",
      quality: "100%",
      qualityLabel: "Quality focus"
    },
    hero: {
      title: "Full-Stack .NET / Angular Developer",
      subtitle: "I design, build and improve business applications and SaaS products with .NET, C#, Angular and modern delivery practices, from REST APIs and SQL to testing, Docker and CI/CD.",
      positioning: "Available for",
      positioningHighlight: "freelance missions",
      positioningSuffix: "in remote or hybrid environments",
      availableForProjects: "Available for new projects",
      viewMyWork: "View My Work",
      getInTouch: "Get In Touch",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      yearsExperience: "Years Experience",
      projectsDelivered: "Projects Delivered",
      qualityFocus: "Quality Focus"
    },
    whatIDo: {
      title: "What I Do",
      subtitle: "End-to-end delivery for business applications, SaaS products and existing codebases",
      frontendTitle: "Frontend Development",
      frontendDesc: "I build maintainable and responsive interfaces with Angular, React and TypeScript, with particular attention to component architecture, usability, performance and smooth integration with backend APIs.",
      backendTitle: "Backend Development",
      backendDesc: "I design business-oriented APIs and backend services with C#, .NET / ASP.NET Core and Node.js, covering application logic, authentication, SQL and NoSQL data access, integrations and maintainable service architecture.",
      devopsTitle: "DevOps, CI/CD & Automation",
      devopsDesc: "I integrate delivery into development through Docker, CI/CD pipelines, Azure DevOps, GitHub Actions, automated testing and deployment workflows, helping teams ship changes with more consistency and less operational friction.",
      expertiseTitle: "End-to-End Full-Stack Delivery",
      expertiseDesc: "I can work across an entire application lifecycle: understanding an existing codebase, designing the solution, building APIs and interfaces, working with data, testing changes and supporting deployment. My focus stays on business needs, technical clarity and long-term maintainability.",
      frontendDev: "Frontend Development",
      backendArch: "Backend Architecture",
      devopsCICD: "DevOps & CI/CD",
      bullet1: "Business-critical applications, ERP modules and production web platforms",
      bullet2: "REST APIs, business workflows, authentication and data-intensive features",
      bullet3: "Legacy modernization, refactoring, migrations and maintainability improvements",
      bullet4: "Automated testing, Docker and CI/CD for reliable application delivery"
    },
    about: {
      title: "About",
      name: "Anass EREKYSY",
      role: "Full-Stack .NET / Angular Developer",
      location: "Paris, France",
      intro: "Full-Stack Developer based in Paris, specialized in .NET / C# and Angular with hands-on experience on ERP systems, production business applications, SaaS products and application modernization.",
      paragraph1: "I am comfortable joining an existing codebase, understanding how the product works, identifying the right level of change and delivering features or fixes without creating unnecessary complexity.",
      expertiseTitle: ".NET / Angular Expertise",
      expertiseDesc: "My core stack is C#, .NET, ASP.NET Core, Angular, TypeScript and SQL. I work across backend and frontend layers, API design, data access, debugging, testing and delivery, while also using React, Node.js and Laravel when they fit the project.",
      devopsTitle: "Reliable Delivery",
      devopsDesc: "I use Docker, CI/CD, Azure DevOps and automated testing as practical engineering tools to make builds, tests and deployments more repeatable and to reduce regressions across environments.",
      productTitle: "Business & Product Context",
      productDesc: "My experience spans ERP, insurance, SaaS, marketplaces, financial workflows, data products, e-commerce and public-sector applications. I care about understanding why a feature exists before deciding how to implement it.",
      missionsTitle: "Freelance & Team Collaboration",
      missionsDesc: "I can work autonomously on a defined scope or integrate into an existing engineering team. I value clear communication, pragmatic technical decisions and steady delivery over unnecessary process or over-engineering.",
      availableTitle: "Available for short or long-term missions",
      availableDesc: "Open to freelance opportunities in Île-de-France, remote or hybrid, especially on .NET / Angular applications, SaaS products, APIs, migrations and modernization work."
    },
    experience: {
      title: "Experience",
      subtitle: "Production applications, ERP systems, migrations and end-to-end product delivery",
      contextGoals: "Context & Business Goals",
      keyResponsibilities: "Key Responsibilities",
      technicalStack: "Technical Stack",
      keyAchievements: "Key Achievements",
      impact: "Impact",
      exp1: {
        role: ".NET / Angular Full Stack Developer | DevOps",
        context: "Production insurance subscription portal with strong requirements around reliability, security and release quality.",
        businessGoals: "Maintain a business-critical platform while modernizing its technical stack and making releases safer and easier to operate.",
        responsibilities: [
          "Maintain and evolve business features across the Angular frontend and .NET backend",
          "Contribute to the progressive migration from Angular 11 to Angular 18 and from .NET Framework 4.8 to .NET 6",
          "Develop and integrate REST APIs while preserving functional continuity across the existing application",
          "Strengthen frontend testing and reduce regression risk on production releases",
          "Improve CI/CD workflows and collaborate with technical and functional teams throughout delivery"
        ],
        achievements: [
          "Contributed to a major frontend and backend modernization without interrupting the product lifecycle",
          "Improved release confidence through stronger automated testing and CI/CD practices",
          "Helped keep a production insurance platform maintainable while its stack evolved"
        ],
        impact: "Supported the long-term modernization and reliability of a production insurance application used in a demanding business environment."
      },
      exp2: {
        role: ".NET / Angular Full Stack Developer",
        context: "Modernization of a legacy CMMS application toward a more maintainable Angular / .NET stack.",
        businessGoals: "Migrate existing functionality progressively while improving code quality, maintainability and the engineering delivery workflow.",
        responsibilities: [
          "Contribute to the progressive migration of legacy application modules to Angular and .NET",
          "Develop frontend and backend features while preserving existing business behavior",
          "Refactor legacy code and apply cleaner structures and design patterns where relevant",
          "Use Azure DevOps for source control, work tracking and application delivery",
          "Collaborate with the project team to validate migrated functionality and maintain technical continuity"
        ],
        achievements: [
          "Contributed to the transition of a business application toward a more modern Angular / .NET architecture",
          "Improved code readability and maintainability through incremental refactoring",
          "Supported a more structured development and delivery workflow with Azure DevOps"
        ],
        impact: "Helped modernize a legacy business application while keeping the migration incremental, controlled and maintainable."
      },
      exp3: {
        role: "Flutter Mobile Developer",
        context: "Offline-first mobile application for managing, classifying, searching and tracking administrative mail within a public institution.",
        businessGoals: "Digitize a manual workflow and provide a simple mobile tool for reliable mail tracking and local data access.",
        responsibilities: [
          "Design application workflows and technical structure using UML and Merise",
          "Develop the mobile application with Flutter and Dart",
          "Implement data entry, classification, search, filtering and tracking features",
          "Build local SQLite persistence with CRUD operations and data consistency controls"
        ],
        achievements: [
          "Delivered a functional offline-first application adapted to an institutional workflow",
          "Structured the application and data model before implementation to improve maintainability"
        ],
        impact: "Provided a practical digital solution for organizing and tracking administrative mail in an environment with local data requirements."
      },
      exp4: {
        role: "PHP Web Developer",
        context: "Business application for managing court hearings, sessions, case information and status workflows.",
        businessGoals: "Support the digitization of hearing management while keeping data and business workflows consistent with institutional requirements.",
        responsibilities: [
          "Contribute to functional and technical design based on business rules",
          "Model SQL entities and relationships for hearing and case management",
          "Develop PHP screens, forms, lists, filters and status workflows",
          "Add validation rules and collaborate with the lead developer on testing and delivery"
        ],
        achievements: [
          "Contributed to a real business application in an institutional environment",
          "Built practical experience with data modeling, business rules and workflow-driven development"
        ],
        impact: "Supported the delivery of a structured web application for managing judicial sessions and case-related workflows."
      },
      exp5: {
        role: ".NET / C# Software Engineer - SOR ERP",
        period: "Apr. 2026 - Present",
        location: "Paris, France · Hybrid",
        context: "SOR is a business-critical ERP used by OPCOs in the professional training sector. It covers contracts, cases, members, reference data, authorizations, BackOffice / Extranet workflows, exports, automated processing and client-specific configuration.",
        businessGoals: "Contribute to the corrective and evolutionary maintenance of a large existing application while protecting business rules, data consistency and multi-client behavior.",
        responsibilities: [
          "Develop and maintain business features in C#, .NET Framework and ASP.NET MVC across a large ERP codebase",
          "Analyze and implement complex business rules around cases, contracts, members, reference data, authorizations and automated workflows",
          "Debug issues end-to-end across MVC controllers, Razor views, JavaScript/jQuery, server-side logic and SQL Server",
          "Design and optimize SQL queries, stored procedures, diagnostic scripts, corrective scripts and rollback strategies",
          "Investigate data inconsistencies and validate technical impacts across different client configurations",
          "Test changes locally and in staging, support technical validation and contribute to application releases",
          "Work with Azure DevOps, Git and Jira for source control, traceability, delivery and technical follow-up"
        ],
        achievements: [
          "Resolved high-impact functional and technical issues across complex ERP modules and business workflows",
          "Delivered SQL Server treatments and corrective scripts with attention to data integrity and rollback safety",
          "Built strong familiarity with navigating and changing a large legacy application without losing sight of business impact"
        ],
        impact: "Contributes to the stability, maintainability and continuous evolution of an ERP supporting sensitive operational processes for multiple organizations."
      },
      exp6: {
        role: "Full-Stack Developer - SaaS, Data & Business Applications",
        period: "08/2024 – 02/2026",
        location: "Remote",
        context: "Design and development of several complete web products as a freelancer: MarketPulse for job-market data aggregation and analytics, RaiseUp for startup/investor matching, PayChase for invoice management and payment reminders, ShowTracker for movies/series tracking, CoinHawk for crypto data monitoring, Melodify for music playlists/favorites, and Skinet for e-commerce with Stripe payments.",
        businessGoals: "Turn product ideas into working web applications by covering architecture, backend, frontend, data, integrations, testing and delivery rather than focusing on a single technical layer.",
        responsibilities: [
          "Build REST APIs with .NET / ASP.NET Core and Node.js for data, profiles, workflows, invoices, reminders, search, favorites, orders, payments and reporting",
          "Develop Angular and React interfaces for dashboards, business workflows and user-facing product experiences",
          "Design data models and work with SQL Server, PostgreSQL, MongoDB and Redis according to application needs",
          "Implement authentication, authorization, external API integrations and business rules across several domains",
          "Add automated tests with tools such as Jest and Playwright and improve application reliability before delivery",
          "Containerize applications with Docker and set up CI/CD workflows for repeatable builds and deployments"
        ],
        achievements: [
          "Delivered multiple end-to-end applications across SaaS, data, marketplace, payments, entertainment and e-commerce domains",
          "Applied the same engineering discipline across different stacks: clear APIs, maintainable components, secure flows, testing and automated delivery",
          "Built practical experience moving from product requirements to architecture, implementation, deployment and iteration"
        ],
        impact: "Shows the ability to own a complete technical scope, switch between business domains and contribute effectively across backend, frontend, data and delivery."
      }
    },
    education: {
      title: "Education",
      subtitle: "Academic background and professional training",
      degree1: {
        title: "Master's Degree - Information Systems Development (Web Development Track)",
        institution: "H3 Hitema",
        location: "Paris, France",
        period: "09/2023 - 08/2025"
      },
      degree2: {
        title: "Bachelor's Degree - Computer Science (Software Development Track)",
        institution: "Aix-Marseille University",
        location: "Marseille, France",
        period: "09/2022 - 07/2023"
      },
      degree3: {
        title: "DUT - Computer Engineering (Software Engineering Option)",
        institution: "Higher School of Technology",
        location: "Meknès, Morocco",
        period: "09/2020 - 07/2022"
      }
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Projects that demonstrate product thinking, architecture, API design, data work and end-to-end delivery.",
      contextProblem: "Context & Problem",
      solutionApproach: "Solution & Approach",
      keyFeatures: "Key Features",
      technicalHighlights: "Technical Highlights",
      technologyStack: "Technology Stack",
      roleImpact: "Role & Impact",
      sourceCode: "Source Code",
      githubRepo: "GitHub Repository",
      proj9: {
        description: "Influencer marketing SaaS platform for managing campaigns, creators, tracked links, promo codes, conversions and commissions.",
        problem: "Brands need a structured way to run performance-based influencer campaigns while keeping products, creator participation, conversion attribution and commissions in one workflow.",
        solution: "Designed a modular Laravel / React platform with clear business domains, secure access control and tracking workflows that connect campaign activity to measurable conversions.",
        features: [
          "Campaign and product management",
          "Creator onboarding and campaign participation workflows",
          "Tracked links, UTM parameters and promo-code attribution",
          "Conversion and commission tracking",
          "Role-based access for different platform users"
        ],
        highlights: [
          "Laravel backend structured around business domains and clear application boundaries",
          "React / TypeScript frontend built around reusable product workflows",
          "PostgreSQL data model for campaigns, users, tracking and conversion data",
          "Authentication, authorization and RBAC across sensitive actions",
          "Dockerized environment and CI/CD-oriented delivery setup"
        ],
        impact: "Demonstrates the ability to design a SaaS product around real acquisition, attribution and monetization workflows rather than isolated technical features.",
        role: "Founder & Full-Stack Developer: product architecture, backend, frontend, database design, security, tracking workflows and delivery setup"
      },
      proj1: {
        description: "Job-market intelligence platform that aggregates public job data and turns it into searchable listings, salary insights, hiring trends and geographic analytics.",
        problem: "Job-market information is fragmented across providers, making it difficult to compare demand, salary levels, locations and hiring trends from a single interface.",
        solution: "Built a full-stack analytical platform that integrates external job APIs, normalizes the data, stores and caches results, and exposes useful insights through dashboards, charts and interactive maps.",
        features: [
          "Advanced job search by keyword, location and employment criteria",
          "Hiring and salary analytics",
          "Interactive job-density and salary maps",
          "Dynamic charts and market dashboards",
          "Paginated and filterable job listings",
          "Caching strategy for expensive and repeated data requests"
        ],
        highlights: [
          ".NET 8 backend using Clean Architecture, CQRS and MediatR",
          "Aggregation and normalization of data from Adzuna and other external job APIs",
          "PostgreSQL persistence and analytical querying",
          "Redis caching for search and analytics workloads",
          "Angular 19 frontend with charts and Leaflet maps",
          "Dockerized application with API documentation through Swagger/OpenAPI"
        ],
        impact: "Shows how I approach a data-heavy product: external integrations, domain separation, caching, analytics, frontend visualization and operational packaging as one coherent system.",
        role: "Full-Stack Developer: architecture, .NET backend, Angular frontend, external API integration, data modeling, caching and Dockerization"
      },
      proj2: {
        description: "B2B SaaS application for invoice management, payment-status tracking and automated follow-up workflows.",
        problem: "Manual invoice follow-up creates repetitive work, inconsistent reminders and poor visibility over unpaid invoices and payment progress.",
        solution: "Designed a modular platform with dedicated backend services for authentication and invoice workflows, a business-oriented frontend and automated delivery through containers and CI/CD.",
        features: [
          "Invoice creation and lifecycle management",
          "Automated payment reminders",
          "Authentication and role-based access",
          "Payment-status dashboards and reporting",
          "Business workflows around clients, invoices and follow-ups"
        ],
        highlights: [
          "Service-oriented backend with clear separation between authentication and invoice domains",
          ".NET and Node.js services behind an Angular frontend",
          "MongoDB and Redis used according to service needs",
          "Dockerized services for consistent development and deployment environments",
          "CI/CD-oriented setup for repeatable build and delivery workflows"
        ],
        impact: "Demonstrates backend decomposition, business workflow design and end-to-end delivery on a SaaS use case tied directly to finance operations.",
        role: "Full-Stack Developer: architecture, backend services, Angular frontend, data layer, testing and DevOps setup"
      },
      proj3: {
        description: "Music web application focused on discovery, playlists, favorites and personal libraries.",
        problem: "The product needed a simple and responsive way for users to browse music, organize content and keep personal selections in one interface.",
        solution: "Built a full-stack Angular / .NET application integrating external music data while keeping user features and backend responsibilities clearly separated.",
        features: [
          "Music search and browsing",
          "Playlist creation and management",
          "User authentication",
          "Favorites and personal library"
        ],
        highlights: [
          "Angular frontend organized around reusable components and user workflows",
          ".NET backend exposing structured REST APIs",
          "Integration with the Spotify Developer API",
          "Focus on responsive interaction and maintainable frontend/backend boundaries"
        ],
        impact: "Shows practical integration of a third-party content API with user-specific business features and a complete web application flow.",
        role: "Full-Stack Developer: frontend, backend APIs, authentication and external API integration"
      },
      proj4: {
        description: "Cryptocurrency monitoring platform for exploring market data, prices and trends through a centralized interface.",
        problem: "Crypto-market data changes quickly and comes from external providers, requiring reliable integration, clear presentation and secure user access.",
        solution: "Built an Angular / .NET application that consumes crypto APIs, structures market data for the frontend and secures user access through Keycloak.",
        features: [
          "Cryptocurrency price tracking",
          "Market overview dashboard",
          "Coin search and filtering",
          "Price and trend visualizations"
        ],
        highlights: [
          "External crypto API integration and data normalization",
          "Keycloak authentication and role-based access",
          ".NET REST API consumed by an Angular frontend",
          "Responsive data visualization focused on readability"
        ],
        impact: "Demonstrates secure external-data integration, authentication and dashboard-oriented frontend development in a fast-changing data domain.",
        role: "Full-Stack Developer: API integration, authentication, backend services and Angular frontend"
      },
      proj5: {
        description: "Full-stack e-commerce application covering catalog, cart, checkout, orders and online payments.",
        problem: "An e-commerce product needs more than product pages: inventory-facing data, shopping workflows, order state and secure payment handling must work together consistently.",
        solution: "Built an Angular / .NET application with a structured backend, product and order workflows, and Stripe integration for secure online payments.",
        features: [
          "Product catalog management",
          "Shopping cart",
          "Secure checkout and Stripe payments",
          "Order management"
        ],
        highlights: [
          "End-to-end e-commerce workflow from catalog to payment",
          "Stripe payment integration",
          "REST APIs for products, orders and checkout flows",
          "Clear separation between business logic, data access and frontend concerns"
        ],
        impact: "Demonstrates implementation of transaction-oriented workflows where business state, API design and external payment integration need to stay consistent.",
        role: "Full-Stack Developer: e-commerce workflows, .NET APIs, Angular frontend and Stripe integration"
      },
      proj6: {
        description: "Marketplace connecting startups and investors through profiles, project discovery and matching-oriented workflows.",
        problem: "Startups need a structured way to present their projects while investors need a simple way to discover relevant opportunities and navigate profile information.",
        solution: "Built a Node.js / Angular marketplace with separate frontend and backend responsibilities, user roles and workflows designed around startup and investor interactions.",
        features: [
          "Startup and investor profiles",
          "Startup project listings",
          "Search and project discovery",
          "Role-specific user workflows"
        ],
        highlights: [
          "Node.js REST API behind an Angular frontend",
          "Clear separation between marketplace domains and presentation logic",
          "Responsive interface focused on fast profile and project discovery",
          "Docker and CI/CD-oriented delivery workflow"
        ],
        impact: "Shows the ability to translate a two-sided marketplace model into clear user roles, API resources and frontend workflows.",
        role: "Full-Stack Developer: marketplace architecture, Node.js backend, Angular frontend and delivery setup"
      },
      proj7: {
        description: "Web application for searching, organizing and tracking TV series and movies.",
        problem: "Users need a simple way to discover content and maintain personal watchlists, favorites and viewing-related preferences without a cluttered experience.",
        solution: "Built a Node.js / Angular application around external movie and TV data, combining API integration with user-specific tracking features and automated tests.",
        features: [
          "Movie and TV search",
          "Watchlists and favorites",
          "Content tracking",
          "User preferences and personal lists"
        ],
        highlights: [
          "External content API integration",
          "Angular frontend with a clean feature-oriented structure",
          "Node.js backend for user and tracking workflows",
          "Jest and Playwright used to secure key application behavior"
        ],
        impact: "Demonstrates API integration, frontend product design and automated testing on a user-focused web application.",
        role: "Full-Stack Developer: Angular frontend, Node.js backend, external API integration and automated testing"
      },
      proj8: {
        description: "Backend system for a digital wallet supporting cashless transactions through an agent-based model.",
        problem: "Wallet operations require strict handling of balances, transaction state and validation because inconsistencies directly affect financial data.",
        solution: "Developed backend services around wallet balances, deposits, withdrawals and transaction history with clear business validation and containerized delivery.",
        features: [
          "Wallet balance management",
          "Deposit and withdrawal workflows",
          "Transaction history tracking",
          "Agent-based transaction validation"
        ],
        highlights: [
          "Business rules centered on transaction consistency",
          "Node.js backend services",
          "Containerized application environment",
          "CI/CD-oriented project structure"
        ],
        impact: "Shows backend-focused work on transactional business logic where consistency and traceability matter more than UI complexity.",
        role: "Backend Developer: backend architecture, transaction workflows, validation and delivery setup"
      }
    },
    skills: {
      title: "Skills & Tooling",
      subtitle: "Core expertise in .NET / C#, Angular and TypeScript, supported by strong API, data, testing and delivery skills",
      methodologies: "Methodologies & Practices",
      frontendCategory: "Frontend",
      backendCategory: "Backend",
      devopsCloudCategory: "DevOps & Cloud",
      qaTestingCategory: "QA & Testing",
      databasesCategory: "Databases",
      architectureDesignCategory: "Architecture & Design",
      toolsCollaborationCategory: "Tools & Collaboration",
      responsiveDesign: "Responsive Design",
      pwaConcepts: "PWA concepts",
      restAPIs: "REST APIs",
      authAuth: "Authentication & Authorization",
      ovhHosting: "OVH Hosting",
      shellBash: "Shell / Bash",
      unitTesting: "Unit Testing",
      integrationTesting: "Integration Testing",
      e2eTesting: "E2E Testing",
      testAutomation: "Test Automation",
      databaseDesign: "Database Design",
      queryOptimization: "Query Optimization",
      cleanArchitecture: "Clean Architecture",
      solidPrinciples: "SOLID Principles",
      layeredArchitecture: "Layered Architecture",
      designPatterns: "Design Patterns",
      agileScrum: "Agile / Scrum",
      vModel: "V-Model",
      safeBasic: "SAFe (basic)",
      codeReview: "Code Review",
      documentation: "Documentation",
      userStories: "User Stories",
      dorDod: "DoR / DoD",
      raci: "RACI",
      rice: "RICE"
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Available for freelance missions and engineering collaborations. If you have an existing codebase to improve or a product to build, let's discuss the context.",
      contactInfo: "Contact Information",
      professionalProfiles: "Professional Profiles",
      location: "Paris, France",
      availability: "Availability",
      availabilityDesc: "Open to short- and long-term missions",
      shortTerm: "Short-term",
      longTerm: "Long-term",
      fullStack: "Full Stack",
      parisRemote: "Paris / Remote"
    },
    howIWork: {
      title: "How I Work",
      subtitle: "A pragmatic approach focused on understanding the product, changing the right things and delivering reliably",
      principle1: {
        title: "Clean & Maintainable Code",
        description: "I aim for code that another developer can understand and change safely. Clear boundaries, sensible naming and simple structures matter more to me than adding patterns for their own sake."
      },
      principle2: {
        title: "Quality Through Testing",
        description: "I use automated tests where they provide real protection: business rules, integrations and critical user flows. The goal is confidence in change, not test volume."
      },
      principle3: {
        title: "Pragmatic DevOps & Automation",
        description: "I use Docker and CI/CD to make environments, builds, tests and deployments more repeatable, reducing manual steps and avoidable release issues."
      },
      principle4: {
        title: "Collaboration & Documentation",
        description: "I communicate clearly with technical and functional stakeholders and document decisions that will matter later, especially around architecture, business rules and operational behavior."
      },
      principle5: {
        title: "Continuous Improvement",
        description: "I improve systems incrementally. On an existing product, I prefer controlled changes that reduce risk and technical debt without blocking delivery."
      },
      principle6: {
        title: "Business-Oriented Delivery",
        description: "I connect technical choices to the actual business need, balancing quality, delivery time, maintainability and the constraints of the existing system."
      },
      processTitle: "Development Process",
      step1: {
        title: "Requirements & Understanding",
        description: "Understand the business goal, the existing system, the constraints and what success looks like before changing code."
      },
      step2: {
        title: "Technical Design",
        description: "Choose the simplest architecture and data model that solve the problem cleanly while fitting the existing codebase."
      },
      step3: {
        title: "Development & Testing",
        description: "Implement incrementally, keep changes reviewable and test the behaviors that matter most to the product."
      },
      step4: {
        title: "CI/CD & Deployment",
        description: "Use automated build, test and deployment workflows to keep releases consistent across environments."
      },
      step5: {
        title: "Review & Improvement",
        description: "Review the result, address feedback and improve performance or maintainability where it creates meaningful value."
      },
      step6: {
        title: "Documentation & Knowledge Sharing",
        description: "Document the decisions, flows and operational knowledge that help the next developer understand and evolve the system."
      }
    }
  },
  fr: {
    nav: {
      main: "Navigation principale",
      toggle: "Ouvrir/fermer le menu de navigation",
      home: "Accueil",
      about: "À propos",
      whatIDo: "Ce que je fais",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      lang: {
        en: "Passer en anglais",
        fr: "Passer en français"
      }
    },
    home: {
      title: "Développeur Full-Stack .NET / Angular",
      subtitle: "C# • ASP.NET Core • TypeScript • SQL Server",
      description: "Je conçois et fais évoluer des applications métier, produits SaaS et plateformes web en production, avec une attention particulière portée à l'architecture, la maintenabilité et la fiabilité des livraisons.",
      backend: "Backend",
      frontend: "Frontend",
      devops: "DevOps",
      backendTech: ".NET / C# / Node.js",
      frontendTech: "Angular / React",
      devopsTech: "CI/CD • Docker • Azure DevOps",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",
      availableFor: "Disponible pour",
      positioning: "Disponible pour des missions freelance où je peux contribuer rapidement sur un produit existant ou prendre en charge un développement de bout en bout.",
      shortTerm: "Missions courtes",
      longTerm: "Missions longues",
      location: "Île-de-France & Remote",
      yearsExp: "4+",
      yearsLabel: "Années d'expérience",
      projectsDelivered: "15+",
      projectsLabel: "Projets livrés",
      technologies: "5+",
      techLabel: "Technologies principales",
      quality: "100%",
      qualityLabel: "Focus qualité"
    },
    hero: {
      title: "Développeur Full-Stack .NET / Angular",
      subtitle: "Je conçois, développe et fais évoluer des applications métier et produits SaaS avec .NET, C# et Angular, des API REST et SQL jusqu'aux tests, Docker, CI/CD et à la mise en production.",
      positioning: "Disponible pour des",
      positioningHighlight: "missions freelance",
      positioningSuffix: "en remote ou hybride",
      availableForProjects: "Disponible pour de nouveaux projets",
      viewMyWork: "Voir mon travail",
      getInTouch: "Me contacter",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      yearsExperience: "Années d'expérience",
      projectsDelivered: "Projets livrés",
      qualityFocus: "Focus qualité"
    },
    whatIDo: {
      title: "Ce que je fais",
      subtitle: "Développement de bout en bout pour applications métier, produits SaaS et codebases existantes",
      frontendTitle: "Développement Frontend",
      frontendDesc: "Je développe des interfaces maintenables et responsives avec Angular, React et TypeScript, avec une attention particulière portée à l'architecture des composants, l'ergonomie, les performances et l'intégration propre avec les API backend.",
      backendTitle: "Développement Backend",
      backendDesc: "Je conçois des API et services backend orientés métier avec C#, .NET / ASP.NET Core et Node.js : logique applicative, authentification, accès aux données SQL et NoSQL, intégrations et architecture maintenable.",
      devopsTitle: "DevOps, CI/CD & Automatisation",
      devopsDesc: "J'intègre la livraison au développement avec Docker, les pipelines CI/CD, Azure DevOps, GitHub Actions et les tests automatisés afin de rendre les builds, validations et déploiements plus cohérents et plus fiables.",
      expertiseTitle: "Développement Full-Stack de bout en bout",
      expertiseDesc: "Je peux intervenir sur l'ensemble du cycle d'une application : comprendre l'existant, concevoir la solution, développer les API et interfaces, travailler sur les données, tester les changements et accompagner la mise en production. Je garde le besoin métier, la clarté technique et la maintenabilité au centre.",
      frontendDev: "Développement Frontend",
      backendArch: "Architecture Backend",
      devopsCICD: "DevOps & CI/CD",
      bullet1: "Applications métier critiques, modules ERP et plateformes web en production",
      bullet2: "API REST, workflows métier, authentification et fonctionnalités orientées données",
      bullet3: "Modernisation legacy, refactoring, migrations et amélioration de la maintenabilité",
      bullet4: "Tests automatisés, Docker et CI/CD pour des livraisons plus fiables"
    },
    about: {
      title: "À propos",
      name: "Anass EREKYSY",
      role: "Développeur Full-Stack .NET / Angular",
      location: "Paris, France",
      intro: "Développeur Full-Stack basé à Paris, spécialisé en .NET / C# et Angular, avec une expérience concrète sur des ERP, applications métier en production, produits SaaS et projets de modernisation.",
      paragraph1: "Je suis à l'aise pour rejoindre une codebase existante, comprendre rapidement son fonctionnement, identifier le bon niveau de changement et livrer des fonctionnalités ou correctifs sans ajouter de complexité inutile.",
      expertiseTitle: "Expertise .NET / Angular",
      expertiseDesc: "Ma stack principale repose sur C#, .NET, ASP.NET Core, Angular, TypeScript et SQL. J'interviens sur le backend, le frontend, les API, l'accès aux données, le debug, les tests et la livraison. J'utilise aussi React, Node.js et Laravel lorsqu'ils sont adaptés au contexte.",
      devopsTitle: "Livraison fiable",
      devopsDesc: "J'utilise Docker, CI/CD, Azure DevOps et les tests automatisés comme des outils d'ingénierie concrets pour rendre les builds, validations et déploiements plus répétables et réduire les régressions entre environnements.",
      productTitle: "Contexte Produit & Métier",
      productDesc: "Mon expérience couvre l'ERP, l'assurance, le SaaS, les marketplaces, les workflows financiers, les produits data, l'e-commerce et le secteur public. Je cherche d'abord à comprendre pourquoi une fonctionnalité existe avant de décider comment l'implémenter.",
      missionsTitle: "Freelance & Collaboration",
      missionsDesc: "Je peux travailler en autonomie sur un périmètre défini ou rejoindre une équipe existante. Je privilégie une communication claire, des décisions techniques pragmatiques et une livraison régulière plutôt que le sur-design ou les process inutiles.",
      availableTitle: "Disponible pour des missions courtes ou longues",
      availableDesc: "Ouvert aux opportunités freelance en Île-de-France, remote ou hybride, notamment autour de .NET / Angular, des produits SaaS, API, migrations et travaux de modernisation."
    },
    experience: {
      title: "Expérience",
      subtitle: "Applications en production, ERP, migrations et développement de produits de bout en bout",
      contextGoals: "Contexte & Objectifs Métier",
      keyResponsibilities: "Responsabilités Clés",
      technicalStack: "Stack Technique",
      keyAchievements: "Réalisations Clés",
      impact: "Impact",
      exp1: {
        role: "Développeur Full Stack .NET / Angular | DevOps",
        context: "Portail de souscription d'assurance utilisé en production, avec de fortes exigences de fiabilité, sécurité et qualité de release.",
        businessGoals: "Maintenir une plateforme métier critique tout en modernisant progressivement sa stack technique et en sécurisant les mises en production.",
        responsibilities: [
          "Maintenir et faire évoluer les fonctionnalités métier côté Angular et .NET",
          "Contribuer à la migration progressive d'Angular 11 vers Angular 18 et de .NET Framework 4.8 vers .NET 6",
          "Développer et intégrer des API REST tout en préservant la continuité fonctionnelle de l'application existante",
          "Renforcer les tests frontend afin de réduire le risque de régression en production",
          "Améliorer les workflows CI/CD et collaborer avec les équipes techniques et fonctionnelles tout au long des livraisons"
        ],
        achievements: [
          "Contribution à une modernisation frontend et backend importante sans interrompre le cycle de vie du produit",
          "Amélioration de la confiance dans les releases grâce aux tests automatisés et aux pratiques CI/CD",
          "Contribution à la maintenabilité d'un portail d'assurance en production pendant l'évolution de sa stack"
        ],
        impact: "Contribution à la modernisation et à la fiabilité dans la durée d'une application d'assurance utilisée dans un environnement métier exigeant."
      },
      exp2: {
        role: "Développeur Full Stack .NET / Angular",
        context: "Modernisation d'une application GMAO legacy vers une stack Angular / .NET plus récente et plus maintenable.",
        businessGoals: "Migrer progressivement les fonctionnalités existantes tout en améliorant la qualité du code, la maintenabilité et le processus de livraison.",
        responsibilities: [
          "Contribuer à la migration progressive de modules legacy vers Angular et .NET",
          "Développer des fonctionnalités frontend et backend en conservant le comportement métier existant",
          "Refactorer du code legacy et appliquer des structures plus propres et des design patterns lorsque pertinent",
          "Utiliser Azure DevOps pour la gestion du code, le suivi du travail et les livraisons",
          "Collaborer avec l'équipe projet pour valider les fonctionnalités migrées et assurer la continuité technique"
        ],
        achievements: [
          "Contribution au passage d'une application métier vers une architecture Angular / .NET plus moderne",
          "Amélioration de la lisibilité et de la maintenabilité du code grâce au refactoring progressif",
          "Contribution à un workflow de développement et de livraison plus structuré avec Azure DevOps"
        ],
        impact: "Participation à la modernisation d'une application métier legacy avec une approche progressive, contrôlée et maintenable."
      },
      exp3: {
        role: "Développeur Mobile Flutter",
        context: "Application mobile offline-first destinée à la gestion, la classification, la recherche et le suivi du courrier au sein d'une institution publique.",
        businessGoals: "Digitaliser un processus manuel et fournir un outil mobile simple pour le suivi fiable du courrier et l'accès local aux données.",
        responsibilities: [
          "Concevoir les workflows et la structure technique avec UML et Merise",
          "Développer l'application mobile avec Flutter et Dart",
          "Implémenter les fonctionnalités de saisie, classification, recherche, filtrage et suivi",
          "Mettre en place la persistance locale SQLite avec opérations CRUD et contrôles de cohérence"
        ],
        achievements: [
          "Livraison d'une application offline-first adaptée à un workflow institutionnel réel",
          "Structuration de l'application et du modèle de données avant implémentation pour améliorer la maintenabilité"
        ],
        impact: "Mise à disposition d'une solution numérique pratique pour organiser et suivre le courrier administratif avec des contraintes de données locales."
      },
      exp4: {
        role: "Développeur Web PHP",
        context: "Application métier pour la gestion des audiences, sessions, dossiers et statuts dans un contexte judiciaire.",
        businessGoals: "Participer à la digitalisation de la gestion des audiences tout en respectant les règles métier et la cohérence des données.",
        responsibilities: [
          "Contribuer à la conception fonctionnelle et technique selon les règles métier",
          "Modéliser les entités et relations SQL nécessaires à la gestion des audiences et dossiers",
          "Développer les écrans PHP, formulaires, listes, filtres et workflows de statuts",
          "Ajouter des validations et collaborer avec le développeur principal sur les tests et la livraison"
        ],
        achievements: [
          "Contribution à une application métier réelle dans un environnement institutionnel",
          "Expérience concrète en modélisation de données, règles métier et développement orienté workflows"
        ],
        impact: "Contribution à la livraison d'une application structurée pour la gestion des audiences et workflows liés aux dossiers judiciaires."
      },
      exp5: {
        role: "Ingénieur Études et Développement .NET / C# - ERP SOR",
        period: "avr. 2026 - aujourd'hui",
        location: "Ville de Paris · Hybride",
        context: "SOR est un ERP métier critique utilisé par les OPCO dans le domaine de la formation professionnelle. Il couvre les contrats, dossiers, adhérents, référentiels, habilitations, workflows BackOffice / Extranet, exports, traitements automatisés et paramétrages clients.",
        businessGoals: "Contribuer à la maintenance corrective et évolutive d'une application existante de grande taille tout en préservant les règles métier, la cohérence des données et les comportements spécifiques aux différents clients.",
        responsibilities: [
          "Développer et maintenir des fonctionnalités métier en C#, .NET Framework et ASP.NET MVC dans une codebase ERP importante",
          "Analyser et implémenter des règles métier complexes autour des dossiers, contrats, adhérents, référentiels, habilitations et traitements automatisés",
          "Débugger des anomalies de bout en bout entre contrôleurs MVC, vues Razor, JavaScript/jQuery, logique serveur et SQL Server",
          "Concevoir et optimiser des requêtes SQL, procédures stockées, scripts de diagnostic, scripts correctifs et stratégies de rollback",
          "Analyser les incohérences de données et valider les impacts techniques selon les différents paramétrages clients",
          "Tester les changements en local et en recette, participer à la validation technique et contribuer aux livraisons",
          "Utiliser Azure DevOps, Git et Jira pour la gestion du code, la traçabilité, le suivi et la livraison"
        ],
        achievements: [
          "Résolution d'anomalies fonctionnelles et techniques à fort impact sur des modules ERP et workflows métier complexes",
          "Livraison de traitements et scripts SQL Server avec une attention particulière portée à l'intégrité des données et au rollback",
          "Développement d'une forte capacité à intervenir dans une application legacy de grande taille sans perdre de vue l'impact métier"
        ],
        impact: "Contribution à la stabilité, la maintenabilité et l'évolution continue d'un ERP supportant des processus opérationnels sensibles pour plusieurs organisations."
      },
      exp6: {
        role: "Développeur Full-Stack - Plateformes SaaS, data & applications métier",
        period: "08/2024 – 02/2026",
        location: "À distance",
        context: "Conception et développement de plusieurs produits web complets en freelance : MarketPulse pour l'agrégation et l'analyse de données du marché de l'emploi, RaiseUp pour la mise en relation startups/investisseurs, PayChase pour la gestion de factures et relances, ShowTracker pour le suivi de films/séries, CoinHawk pour les données crypto, Melodify pour les playlists/favoris et Skinet pour l'e-commerce avec Stripe.",
        businessGoals: "Transformer des idées produit en applications web fonctionnelles en couvrant l'architecture, le backend, le frontend, les données, les intégrations, les tests et la livraison plutôt qu'une seule couche technique.",
        responsibilities: [
          "Développer des API REST avec .NET / ASP.NET Core et Node.js pour des modules de données, profils, workflows, factures, relances, recherche, favoris, commandes, paiements et reporting",
          "Construire des interfaces Angular et React pour des dashboards, workflows métier et expériences utilisateurs",
          "Concevoir les modèles de données et travailler avec SQL Server, PostgreSQL, MongoDB et Redis selon les besoins de chaque application",
          "Implémenter l'authentification, les autorisations, les intégrations d'API externes et les règles métier dans plusieurs domaines",
          "Ajouter des tests automatisés avec des outils comme Jest et Playwright et améliorer la fiabilité avant livraison",
          "Conteneuriser les applications avec Docker et mettre en place des workflows CI/CD pour des builds et déploiements répétables"
        ],
        achievements: [
          "Livraison de plusieurs applications de bout en bout dans les domaines SaaS, data, marketplace, paiements, divertissement et e-commerce",
          "Application d'une discipline d'ingénierie cohérente sur différentes stacks : API claires, composants maintenables, flux sécurisés, tests et livraison automatisée",
          "Expérience concrète du passage d'un besoin produit à l'architecture, l'implémentation, le déploiement puis l'itération"
        ],
        impact: "Démontre la capacité à prendre en charge un périmètre technique complet, changer de contexte métier et contribuer efficacement sur le backend, le frontend, les données et la livraison."
      }
    },
    education: {
      title: "Formation",
      subtitle: "Parcours académique et formation professionnelle",
      degree1: {
        title: "Master Expert en développement du SI - option développement web",
        institution: "H3 Hitema",
        location: "Paris, France",
        period: "09/2023 - 08/2025"
      },
      degree2: {
        title: "Licence informatique parcours métiers du développement informatique",
        institution: "Université d'Aix-Marseille",
        location: "Marseille, France",
        period: "09/2022 - 07/2023"
      },
      degree3: {
        title: "DUT génie informatique option génie logiciel",
        institution: "Ecole Supérieur de Technologie",
        location: "Meknès, Morocco",
        period: "09/2020 - 07/2022"
      }
    },
    projects: {
      title: "Projets Sélectionnés",
      subtitle: "Des projets qui mettent en valeur la compréhension produit, l'architecture, la conception d'API, les données et la livraison de bout en bout.",
      contextProblem: "Contexte & Problème",
      solutionApproach: "Solution & Approche",
      keyFeatures: "Fonctionnalités Clés",
      technicalHighlights: "Points Techniques",
      technologyStack: "Stack Technologique",
      roleImpact: "Rôle & Impact",
      sourceCode: "Code Source",
      githubRepo: "Dépôt GitHub",
      proj9: {
        description: "Plateforme SaaS de marketing d'influence pour gérer campagnes, créateurs, liens trackés, codes promo, conversions et commissions.",
        problem: "Les marques ont besoin d'un workflow structuré pour piloter des campagnes d'influence orientées performance tout en centralisant produits, participation des créateurs, attribution des conversions et commissions.",
        solution: "Conception d'une plateforme modulaire Laravel / React avec des domaines métier clairement séparés, un contrôle d'accès sécurisé et des workflows de tracking reliant l'activité des campagnes aux conversions mesurables.",
        features: [
          "Gestion des campagnes et produits",
          "Onboarding créateurs et workflows de participation aux campagnes",
          "Liens trackés, paramètres UTM et attribution via codes promotionnels",
          "Suivi des conversions et commissions",
          "Gestion des rôles et droits selon les profils utilisateurs"
        ],
        highlights: [
          "Backend Laravel structuré autour des domaines métier et de frontières applicatives claires",
          "Frontend React / TypeScript construit autour de workflows produit réutilisables",
          "Modélisation PostgreSQL pour campagnes, utilisateurs, tracking et conversions",
          "Authentification, autorisation et RBAC sur les actions sensibles",
          "Environnement Dockerisé et structure orientée CI/CD"
        ],
        impact: "Démontre la capacité à concevoir un produit SaaS autour de vrais enjeux d'acquisition, d'attribution et de monétisation, au-delà de fonctionnalités techniques isolées.",
        role: "Fondateur & Développeur Full-Stack : architecture produit, backend, frontend, base de données, sécurité, tracking et mise en place de la livraison"
      },
      proj1: {
        description: "Plateforme d'intelligence du marché de l'emploi qui agrège des données publiques et les transforme en recherche d'offres, analyses salariales, tendances de recrutement et indicateurs géographiques.",
        problem: "Les données du marché de l'emploi sont dispersées entre plusieurs sources, ce qui complique la comparaison de la demande, des salaires, des localisations et des tendances depuis une seule interface.",
        solution: "Développement d'une plateforme analytique full-stack intégrant plusieurs API d'emploi, normalisant les données, stockant et mettant en cache les résultats puis exposant des insights via dashboards, graphiques et cartes interactives.",
        features: [
          "Recherche avancée par mot-clé, localisation et critères d'emploi",
          "Analyses des tendances de recrutement et des salaires",
          "Cartes interactives de densité d'offres et de salaires",
          "Graphiques dynamiques et dashboards marché",
          "Listes paginées et filtrables",
          "Stratégie de cache pour les données coûteuses ou fréquemment consultées"
        ],
        highlights: [
          "Backend .NET 8 avec Clean Architecture, CQRS et MediatR",
          "Agrégation et normalisation de données provenant d'Adzuna et d'autres API d'emploi",
          "PostgreSQL pour la persistance et les requêtes analytiques",
          "Redis pour le cache des recherches et analyses",
          "Frontend Angular 19 avec graphiques et cartes Leaflet",
          "Application Dockerisée avec documentation API Swagger/OpenAPI"
        ],
        impact: "Montre mon approche d'un produit orienté données : intégrations externes, séparation des domaines, cache, analytics, visualisation frontend et packaging opérationnel dans un système cohérent.",
        role: "Développeur Full-Stack : architecture, backend .NET, frontend Angular, intégration d'API externes, modélisation des données, cache et Dockerisation"
      },
      proj2: {
        description: "Application SaaS B2B pour gérer les factures, suivre leur statut et automatiser les workflows de relance.",
        problem: "Le suivi manuel des factures crée du travail répétitif, des relances irrégulières et une faible visibilité sur les impayés et l'avancement des paiements.",
        solution: "Conception d'une plateforme modulaire avec des services backend dédiés à l'authentification et aux workflows de facturation, une interface orientée métier et une livraison automatisée via conteneurs et CI/CD.",
        features: [
          "Création et cycle de vie des factures",
          "Relances de paiement automatisées",
          "Authentification et accès basé sur les rôles",
          "Dashboards et reporting des statuts de paiement",
          "Workflows métier autour des clients, factures et relances"
        ],
        highlights: [
          "Backend orienté services avec séparation claire entre authentification et domaine facturation",
          "Services .NET et Node.js derrière un frontend Angular",
          "MongoDB et Redis utilisés selon les besoins des services",
          "Services Dockerisés pour des environnements cohérents",
          "Structure CI/CD pour automatiser build et livraison"
        ],
        impact: "Démontre la conception de services backend, de workflows métier et d'une livraison de bout en bout sur un cas SaaS directement lié aux opérations financières.",
        role: "Développeur Full-Stack : architecture, services backend, frontend Angular, données, tests et mise en place DevOps"
      },
      proj3: {
        description: "Application web musicale centrée sur la découverte, les playlists, les favoris et les bibliothèques personnelles.",
        problem: "Le produit devait permettre de parcourir des contenus musicaux, les organiser et conserver des sélections personnelles dans une interface simple et responsive.",
        solution: "Développement d'une application full-stack Angular / .NET intégrant des données musicales externes tout en séparant clairement les fonctionnalités utilisateur et les responsabilités backend.",
        features: [
          "Recherche et navigation musicale",
          "Création et gestion de playlists",
          "Authentification utilisateur",
          "Favoris et bibliothèque personnelle"
        ],
        highlights: [
          "Frontend Angular organisé autour de composants réutilisables et workflows utilisateur",
          "Backend .NET exposant des API REST structurées",
          "Intégration de l'API Spotify Developer",
          "Attention portée à la fluidité de l'interface et aux frontières frontend/backend"
        ],
        impact: "Montre une intégration concrète d'API tierce combinée à des fonctionnalités utilisateur et à un flux applicatif complet.",
        role: "Développeur Full-Stack : frontend, API backend, authentification et intégration d'API externe"
      },
      proj4: {
        description: "Plateforme de suivi des cryptomonnaies pour explorer les données marché, prix et tendances depuis une interface centralisée.",
        problem: "Les données crypto évoluent rapidement et proviennent de services externes, ce qui nécessite une intégration fiable, une restitution lisible et un accès utilisateur sécurisé.",
        solution: "Développement d'une application Angular / .NET consommant des API crypto, structurant les données pour le frontend et sécurisant l'accès via Keycloak.",
        features: [
          "Suivi des prix des cryptomonnaies",
          "Dashboard de vue d'ensemble du marché",
          "Recherche et filtrage",
          "Visualisation des prix et tendances"
        ],
        highlights: [
          "Intégration d'API crypto externes et normalisation des données",
          "Authentification Keycloak et contrôle d'accès basé sur les rôles",
          "API REST .NET consommée par un frontend Angular",
          "Visualisations responsive orientées lisibilité"
        ],
        impact: "Démontre l'intégration sécurisée de données externes, l'authentification et le développement de dashboards dans un domaine de données évoluant rapidement.",
        role: "Développeur Full-Stack : intégration API, authentification, services backend et frontend Angular"
      },
      proj5: {
        description: "Application e-commerce full-stack couvrant catalogue, panier, checkout, commandes et paiement en ligne.",
        problem: "Un produit e-commerce ne se limite pas aux pages produits : données catalogue, panier, état des commandes et paiement sécurisé doivent fonctionner ensemble de façon cohérente.",
        solution: "Développement d'une application Angular / .NET avec un backend structuré, des workflows produits et commandes, ainsi qu'une intégration Stripe pour les paiements en ligne.",
        features: [
          "Gestion du catalogue produits",
          "Panier d'achat",
          "Checkout et paiements Stripe sécurisés",
          "Gestion des commandes"
        ],
        highlights: [
          "Workflow e-commerce complet du catalogue au paiement",
          "Intégration Stripe",
          "API REST pour produits, commandes et checkout",
          "Séparation claire entre logique métier, accès aux données et frontend"
        ],
        impact: "Démontre l'implémentation de workflows transactionnels où état métier, conception d'API et paiement externe doivent rester cohérents.",
        role: "Développeur Full-Stack : workflows e-commerce, API .NET, frontend Angular et intégration Stripe"
      },
      proj6: {
        description: "Marketplace reliant startups et investisseurs à travers des profils, la découverte de projets et des workflows adaptés aux deux types d'utilisateurs.",
        problem: "Les startups ont besoin de présenter leurs projets de manière structurée tandis que les investisseurs doivent pouvoir découvrir rapidement des opportunités et parcourir les informations pertinentes.",
        solution: "Développement d'une marketplace Node.js / Angular avec séparation frontend/backend, gestion des rôles et workflows pensés autour des interactions startups/investisseurs.",
        features: [
          "Profils startups et investisseurs",
          "Présentation des projets startups",
          "Recherche et découverte de projets",
          "Workflows adaptés aux rôles utilisateurs"
        ],
        highlights: [
          "API REST Node.js derrière un frontend Angular",
          "Séparation claire entre domaines marketplace et logique de présentation",
          "Interface responsive orientée découverte rapide des profils et projets",
          "Workflow de livraison orienté Docker et CI/CD"
        ],
        impact: "Montre la capacité à traduire un modèle marketplace à deux faces en rôles utilisateurs, ressources API et workflows frontend clairs.",
        role: "Développeur Full-Stack : architecture marketplace, backend Node.js, frontend Angular et mise en place de la livraison"
      },
      proj7: {
        description: "Application web pour rechercher, organiser et suivre films et séries.",
        problem: "Les utilisateurs ont besoin d'un moyen simple de découvrir des contenus et de gérer leurs watchlists, favoris et préférences sans complexifier l'expérience.",
        solution: "Développement d'une application Node.js / Angular basée sur des données externes de films et séries, combinant intégration d'API, fonctionnalités personnalisées et tests automatisés.",
        features: [
          "Recherche de films et séries",
          "Watchlists et favoris",
          "Suivi des contenus",
          "Préférences et listes personnelles"
        ],
        highlights: [
          "Intégration d'API de contenus externes",
          "Frontend Angular avec structure orientée fonctionnalités",
          "Backend Node.js pour les workflows utilisateur et de suivi",
          "Jest et Playwright pour sécuriser les comportements clés"
        ],
        impact: "Démontre l'intégration d'API, la conception frontend orientée produit et les tests automatisés sur une application centrée utilisateur.",
        role: "Développeur Full-Stack : frontend Angular, backend Node.js, intégration d'API externes et tests automatisés"
      },
      proj8: {
        description: "Système backend pour un portefeuille numérique supportant des transactions cashless via un modèle basé sur des agents.",
        problem: "Les opérations de portefeuille nécessitent une gestion stricte des soldes, de l'état des transactions et des validations car toute incohérence impacte directement les données financières.",
        solution: "Développement de services backend autour des soldes, dépôts, retraits et historiques de transactions avec des règles métier explicites et une livraison conteneurisée.",
        features: [
          "Gestion des soldes",
          "Workflows de dépôt et retrait",
          "Historique des transactions",
          "Validation des transactions selon le modèle agent"
        ],
        highlights: [
          "Règles métier centrées sur la cohérence transactionnelle",
          "Services backend Node.js",
          "Environnement applicatif conteneurisé",
          "Structure orientée CI/CD"
        ],
        impact: "Montre un travail backend centré sur une logique transactionnelle où cohérence et traçabilité sont plus importantes que la complexité visuelle.",
        role: "Développeur Backend : architecture backend, workflows transactionnels, validation et mise en place de la livraison"
      }
    },
    skills: {
      title: "Compétences & Outils",
      subtitle: "Expertise principale en .NET / C#, Angular et TypeScript, complétée par de solides compétences en API, données, tests et livraison",
      methodologies: "Méthodologies & Pratiques",
      frontendCategory: "Frontend",
      backendCategory: "Backend",
      devopsCloudCategory: "DevOps & Cloud",
      qaTestingCategory: "QA & Tests",
      databasesCategory: "Bases de données",
      architectureDesignCategory: "Architecture & Design",
      toolsCollaborationCategory: "Outils & Collaboration",
      responsiveDesign: "Design Responsive",
      pwaConcepts: "Concepts PWA",
      restAPIs: "APIs REST",
      authAuth: "Authentification & Autorisation",
      ovhHosting: "Hébergement OVH",
      shellBash: "Shell / Bash",
      unitTesting: "Tests Unitaires",
      integrationTesting: "Tests d'Intégration",
      e2eTesting: "Tests E2E",
      testAutomation: "Automatisation des Tests",
      databaseDesign: "Conception de Base de Données",
      queryOptimization: "Optimisation de Requêtes",
      cleanArchitecture: "Architecture Propre",
      solidPrinciples: "Principes SOLID",
      layeredArchitecture: "Architecture en Couches",
      designPatterns: "Design Patterns",
      agileScrum: "Agile / Scrum",
      vModel: "Modèle V",
      safeBasic: "SAFe (base)",
      codeReview: "Revue de Code",
      documentation: "Documentation",
      userStories: "User Stories",
      dorDod: "DoR / DoD",
      raci: "RACI",
      rice: "RICE"
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle: "Disponible pour des missions freelance et collaborations techniques. Si vous avez une application existante à faire évoluer ou un produit à construire, échangeons sur le contexte.",
      contactInfo: "Informations de Contact",
      professionalProfiles: "Profils Professionnels",
      location: "Paris, France",
      availability: "Disponibilité",
      availabilityDesc: "Ouvert aux missions courtes et longues",
      shortTerm: "Court terme",
      longTerm: "Long terme",
      fullStack: "Full Stack",
      parisRemote: "Paris / Remote"
    },
    howIWork: {
      title: "Comment je travaille",
      subtitle: "Une approche pragmatique : comprendre le produit, modifier ce qui compte et livrer de manière fiable",
      principle1: {
        title: "Code Propre & Maintenable",
        description: "Je cherche à produire du code qu'un autre développeur peut comprendre et faire évoluer en sécurité. Des responsabilités claires, un nommage simple et une structure lisible sont plus importants que l'ajout de patterns pour eux-mêmes."
      },
      principle2: {
        title: "Qualité par les Tests",
        description: "J'utilise les tests automatisés lorsqu'ils protègent réellement le produit : règles métier, intégrations et parcours critiques. L'objectif est la confiance dans le changement, pas le volume de tests."
      },
      principle3: {
        title: "DevOps & Automatisation Pragmatiques",
        description: "J'utilise Docker et CI/CD pour rendre les environnements, builds, tests et déploiements plus répétables et réduire les étapes manuelles et les problèmes évitables en release."
      },
      principle4: {
        title: "Collaboration & Documentation",
        description: "Je communique clairement avec les équipes techniques et fonctionnelles et je documente les décisions qui auront encore de la valeur plus tard, notamment autour de l'architecture, des règles métier et du fonctionnement opérationnel."
      },
      principle5: {
        title: "Amélioration Continue",
        description: "Je préfère améliorer les systèmes progressivement. Sur un produit existant, je privilégie des changements maîtrisés qui réduisent les risques et la dette technique sans bloquer la livraison."
      },
      principle6: {
        title: "Livraison Orientée Métier",
        description: "Je relie les choix techniques au besoin réel, en équilibrant qualité, délai, maintenabilité et contraintes de l'existant."
      },
      processTitle: "Processus de Développement",
      step1: {
        title: "Besoins & Compréhension",
        description: "Comprendre l'objectif métier, le système existant, les contraintes et les critères de réussite avant de modifier le code."
      },
      step2: {
        title: "Conception Technique",
        description: "Choisir l'architecture et le modèle de données les plus simples qui résolvent proprement le problème tout en respectant la codebase existante."
      },
      step3: {
        title: "Développement & Tests",
        description: "Implémenter de manière incrémentale, garder des changements faciles à relire et tester les comportements les plus importants pour le produit."
      },
      step4: {
        title: "CI/CD & Déploiement",
        description: "Utiliser des workflows automatisés de build, test et déploiement pour garder des releases cohérentes entre les environnements."
      },
      step5: {
        title: "Revue & Amélioration",
        description: "Revoir le résultat, intégrer les retours et améliorer les performances ou la maintenabilité lorsqu'il y a une vraie valeur à le faire."
      },
      step6: {
        title: "Documentation & Partage de Connaissances",
        description: "Documenter les décisions, flux et informations opérationnelles qui aideront le prochain développeur à comprendre et faire évoluer le système."
      }
    }
  }
};
