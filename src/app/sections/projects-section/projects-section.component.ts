import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  highlights: string[];
  impact: string;
  role: string;
  githubRepos: {
    label: string;
    url: string;
  }[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="projects">
      <div class="section-container">
        <div class="max-w-7xl mx-auto">

          <!-- Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Selected Projects
            </h2>
            <p class="text-lg text-text-secondary max-w-2xl mx-auto">
              Real-world projects showcasing architecture choices, technical depth, and delivery-focused engineering.
            </p>
          </div>

          <!-- Cards -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article
              *ngFor="let project of projects"
              (click)="openProject(project)"
              class="card-base p-7 hover-lift cursor-pointer flex flex-col"
            >
              <h3 class="text-xl font-bold text-text-primary mb-3">
                {{ project.name }}
              </h3>

              <p class="text-text-secondary text-sm mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.stack" class="tech-chip">
                  {{ tech }}
                </span>
              </div>

              <!-- Repos -->
              <div class="mt-auto pt-4 border-t border-dark-border flex flex-wrap gap-3">
                <a
                  *ngFor="let repo of project.githubRepos"
                  [href]="repo.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  (click)="$event.stopPropagation()"
                  class="repo-link"
                >
                  ↗ {{ repo.label }}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <div
      *ngIf="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      (click)="closeProject()"
    >
      <div class="modal-card" (click)="$event.stopPropagation()">

        <!-- Header -->
        <div class="flex justify-between items-start mb-8">
          <div>
            <h3 class="text-2xl font-bold text-text-primary">
              {{ selectedProject.name }}
            </h3>
            <p class="text-text-secondary mt-2 max-w-2xl">
              {{ selectedProject.description }}
            </p>
          </div>
          <button
            class="text-text-muted hover:text-text-primary text-xl"
            (click)="closeProject()"
          >
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="space-y-10 text-sm">

          <section>
            <h4 class="modal-section-title">Context & Problem</h4>
            <p class="modal-text">{{ selectedProject.problem }}</p>
          </section>

          <section>
            <h4 class="modal-section-title">Solution & Approach</h4>
            <p class="modal-text">{{ selectedProject.solution }}</p>
          </section>

          <section class="grid md:grid-cols-2 gap-10">
            <div>
              <h4 class="modal-section-title">Key Features</h4>
              <ul class="list-disc pl-5 space-y-1 modal-text">
                <li *ngFor="let feature of selectedProject.features">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div>
              <h4 class="modal-section-title">Technical Highlights</h4>
              <ul class="list-disc pl-5 space-y-1 modal-text">
                <li *ngFor="let highlight of selectedProject.highlights">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h4 class="modal-section-title">Technology Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of selectedProject.stack" class="tech-chip">
                {{ tech }}
              </span>
            </div>
          </section>

          <section>
            <h4 class="modal-section-title">Role & Impact</h4>
            <p class="modal-text">
              <strong>{{ selectedProject.role }}</strong><br />
              <span class="italic">{{ selectedProject.impact }}</span>
            </p>
          </section>

          <section>
            <h4 class="modal-section-title">Source Code</h4>
            <div class="flex flex-wrap gap-4">
              <a
                *ngFor="let repo of selectedProject.githubRepos"
                [href]="repo.url"
                target="_blank"
                class="repo-link"
              >
                ↗ {{ repo.label }}
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .tech-chip {
      padding: 4px 10px;
      font-size: 0.75rem;
      border-radius: 9999px;
      border: 1px solid var(--dark-border);
      color: var(--text-secondary);
      background: rgba(255,255,255,0.05);
    }

    .repo-link {
      font-size: 0.85rem;
      color: var(--accent);
      font-weight: 500;
    }

    .modal-card {
      background: rgba(26, 33, 50, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 16px;
      max-width: 900px;
      width: 92%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 36px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .modal-section-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 8px;
    }

    .modal-text {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `]
})
export class ProjectsSectionComponent {

  selectedProject: Project | null = null;

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  projects: Project[] = [
    {
      name: 'PayChase',
      description: 'B2B SaaS application for invoice management and automated payment follow-ups.',
      problem: 'Small and medium businesses relied on manual invoice tracking and reminders, leading to delayed payments and poor cash-flow visibility.',
      solution: 'Design and development of a modular SaaS platform with dedicated backend services to manage invoices, automate reminders, and track payment statuses.',
      stack: [
        'Angular',
        '.NET',
        'Node.js',
        'SQL',
        'Docker',
        'CI/CD'
      ],
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
      role: 'Full Stack Developer – Architecture design, frontend development, backend services, DevOps setup',
      githubRepos: [
        {
          label: 'Auth Service',
          url: 'https://github.com/AnassEREKYSY/PayChase_AuthService'
        },
        {
          label: 'Invoices Service',
          url: 'https://github.com/AnassEREKYSY/PayChase_InvoicesService'
        }
      ]
    },
  
    {
      name: 'Melodify',
      description: 'Music streaming web application inspired by Spotify, focused on playlists and user interactions.',
      problem: 'Users needed a simple platform to browse music, manage playlists, and interact with content in a clean UI.',
      solution: 'Development of a full-stack web application integrating the Spotify Developer API for music data and user features.',
      stack: [
        'Angular',
        '.NET',
        'SQL',
        'Spotify Developer API'
      ],
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
      role: 'Full Stack Developer – Frontend, backend APIs, external API integration',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/Melodify'
        }
      ]
    },
  
    {
      name: 'CoinHawk',
      description: 'Cryptocurrency monitoring platform for tracking prices and market trends.',
      problem: 'Crypto users needed a clear and reliable way to monitor market prices and trends in real time.',
      solution: 'Development of a web application consuming public crypto APIs and presenting market data through dashboards.',
      stack: [
        'Angular',
        '.NET',
        'External Crypto APIs',
        'Keycloak'
      ],
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
      role: 'Full Stack Developer – API integration, authentication, frontend development',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/CoinHawk'
        }
      ]
    },
  
    {
      name: 'Skinet',
      description: 'E-commerce web application for online product sales and payment processing.',
      problem: 'Need for a simple, secure, and complete e-commerce workflow for online sales.',
      solution: 'Development of a full-stack e-commerce platform covering product catalog, cart, checkout, and payments.',
      stack: [
        'Angular',
        '.NET',
        'SQL',
        'Stripe'
      ],
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
      role: 'Full Stack Developer – E-commerce features, payment integration, backend APIs',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/SkiNet'
        }
      ]
    },
  
    {
      name: 'RaiseUp',
      description: 'Marketplace platform connecting startups with potential investors.',
      problem: 'Startups lacked a centralized platform to showcase projects and reach investors efficiently.',
      solution: 'Development of a marketplace web application enabling project presentation and user interactions.',
      stack: [
        'Angular',
        'Node.js'
      ],
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
      role: 'Full Stack Developer – Marketplace design and implementation',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/RaiseUp'
        }
      ]
    },
  
    {
      name: 'ShowTracker',
      description: 'Web application for tracking TV series and movies.',
      problem: 'Users wanted an easy way to track watched content and discover new shows.',
      solution: 'Development of a web application integrating external movie and TV APIs.',
      stack: [
        'Angular',
        'Node.js',
        'External Content APIs'
      ],
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
      role: 'Full Stack Developer – Frontend, backend, and API integration',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/ShowTracker'
        }
      ]
    },
  
    {
      name: 'YallaPay',
      description: 'Backend system for a digital wallet supporting cashless transactions through an agent-based model.',
      problem: 'Digital wallet applications require secure, consistent, and auditable transaction handling.',
      solution: 'Development of backend services managing wallet balances, deposits, withdrawals, and transaction workflows.',
      stack: [
        'Node.js',
        'JavaScript',
        'Docker',
        'CI/CD'
      ],
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
      role: 'Backend Developer – Backend architecture and business logic implementation',
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/YallaPay'
        }
      ]
    }
  ]; 
}

