import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

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
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="projects">
      <div class="section-container">
        <div class="max-w-7xl mx-auto">

          <!-- Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {{ 'projects.title' | translate }}
            </h2>
            <p class="text-lg text-text-secondary max-w-2xl mx-auto">
              {{ 'projects.subtitle' | translate }}
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
      class="modal-overlay"
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
            <h4 class="modal-section-title">{{ 'projects.contextProblem' | translate }}</h4>
            <p class="modal-text">{{ selectedProject.problem }}</p>
          </section>

          <section>
            <h4 class="modal-section-title">{{ 'projects.solutionApproach' | translate }}</h4>
            <p class="modal-text">{{ selectedProject.solution }}</p>
          </section>

          <section class="grid md:grid-cols-2 gap-10">
            <div>
              <h4 class="modal-section-title">{{ 'projects.keyFeatures' | translate }}</h4>
              <ul class="list-disc pl-5 space-y-1 modal-text">
                <li *ngFor="let feature of selectedProject.features">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div>
              <h4 class="modal-section-title">{{ 'projects.technicalHighlights' | translate }}</h4>
              <ul class="list-disc pl-5 space-y-1 modal-text">
                <li *ngFor="let highlight of selectedProject.highlights">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h4 class="modal-section-title">{{ 'projects.technologyStack' | translate }}</h4>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of selectedProject.stack" class="tech-chip">
                {{ tech }}
              </span>
            </div>
          </section>

          <section>
            <h4 class="modal-section-title">{{ 'projects.roleImpact' | translate }}</h4>
            <p class="modal-text">
              <strong>{{ selectedProject.role }}</strong><br />
              <span class="italic">{{ selectedProject.impact }}</span>
            </p>
          </section>

          <section>
            <h4 class="modal-section-title">{{ 'projects.sourceCode' | translate }}</h4>
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
      border: 1px solid var(--border);
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
    }

    html.light .tech-chip {
      background: rgba(0, 0, 0, 0.05);
      border-color: var(--border);
    }

    .tech-chip:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .repo-link {
      font-size: 0.85rem;
      color: var(--accent);
      font-weight: 500;
      transition: opacity 0.2s ease;
    }

    .repo-link:hover {
      opacity: 0.8;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    html.light .modal-overlay {
      background: rgba(0, 0, 0, 0.5);
    }

    .modal-card {
      background: var(--surface);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 16px;
      max-width: 900px;
      width: 92%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 36px;
      border: 1px solid var(--border);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    }

    html.light .modal-card {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
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

    /* Scrollbar styling for modal */
    .modal-card::-webkit-scrollbar {
      width: 8px;
    }

    .modal-card::-webkit-scrollbar-track {
      background: var(--muted);
      border-radius: 4px;
    }

    .modal-card::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 4px;
    }

    .modal-card::-webkit-scrollbar-thumb:hover {
      background: var(--accent);
    }
  `]
})
export class ProjectsSectionComponent {
  private translationService = inject(TranslationService);
  
  selectedProject: Project | null = null;

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  get projects(): Project[] {
    return [
    {
      name: 'PayChase',
      description: this.translationService.translate('projects.proj1.description'),
      problem: this.translationService.translate('projects.proj1.problem'),
      solution: this.translationService.translate('projects.proj1.solution'),
      stack: [
        'Angular',
        '.NET',
        'Node.js',
        'SQL',
        'Docker',
        'CI/CD'
      ],
      features: this.translationService.translateArray('projects.proj1.features'),
      highlights: this.translationService.translateArray('projects.proj1.highlights'),
      impact: this.translationService.translate('projects.proj1.impact'),
      role: this.translationService.translate('projects.proj1.role'),
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
      description: this.translationService.translate('projects.proj2.description'),
      problem: this.translationService.translate('projects.proj2.problem'),
      solution: this.translationService.translate('projects.proj2.solution'),
      stack: [
        'Angular',
        '.NET',
        'SQL',
        'Spotify Developer API'
      ],
      features: this.translationService.translateArray('projects.proj2.features'),
      highlights: this.translationService.translateArray('projects.proj2.highlights'),
      impact: this.translationService.translate('projects.proj2.impact'),
      role: this.translationService.translate('projects.proj2.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/Melodify'
        }
      ]
    },
  
    {
      name: 'CoinHawk',
      description: this.translationService.translate('projects.proj3.description'),
      problem: this.translationService.translate('projects.proj3.problem'),
      solution: this.translationService.translate('projects.proj3.solution'),
      stack: [
        'Angular',
        '.NET',
        'External Crypto APIs',
        'Keycloak'
      ],
      features: this.translationService.translateArray('projects.proj3.features'),
      highlights: this.translationService.translateArray('projects.proj3.highlights'),
      impact: this.translationService.translate('projects.proj3.impact'),
      role: this.translationService.translate('projects.proj3.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/CoinHawk'
        }
      ]
    },
  
    {
      name: 'Skinet',
      description: this.translationService.translate('projects.proj4.description'),
      problem: this.translationService.translate('projects.proj4.problem'),
      solution: this.translationService.translate('projects.proj4.solution'),
      stack: [
        'Angular',
        '.NET',
        'SQL',
        'Stripe'
      ],
      features: this.translationService.translateArray('projects.proj4.features'),
      highlights: this.translationService.translateArray('projects.proj4.highlights'),
      impact: this.translationService.translate('projects.proj4.impact'),
      role: this.translationService.translate('projects.proj4.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/SkiNet'
        }
      ]
    },
  
    {
      name: 'RaiseUp',
      description: this.translationService.translate('projects.proj5.description'),
      problem: this.translationService.translate('projects.proj5.problem'),
      solution: this.translationService.translate('projects.proj5.solution'),
      stack: [
        'Angular',
        'Node.js'
      ],
      features: this.translationService.translateArray('projects.proj5.features'),
      highlights: this.translationService.translateArray('projects.proj5.highlights'),
      impact: this.translationService.translate('projects.proj5.impact'),
      role: this.translationService.translate('projects.proj5.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/RaiseUp'
        }
      ]
    },
  
    {
      name: 'ShowTracker',
      description: this.translationService.translate('projects.proj6.description'),
      problem: this.translationService.translate('projects.proj6.problem'),
      solution: this.translationService.translate('projects.proj6.solution'),
      stack: [
        'Angular',
        'Node.js',
        'External Content APIs'
      ],
      features: this.translationService.translateArray('projects.proj6.features'),
      highlights: this.translationService.translateArray('projects.proj6.highlights'),
      impact: this.translationService.translate('projects.proj6.impact'),
      role: this.translationService.translate('projects.proj6.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/ShowTracker'
        }
      ]
    },
  
    {
      name: 'YallaPay',
      description: this.translationService.translate('projects.proj7.description'),
      problem: this.translationService.translate('projects.proj7.problem'),
      solution: this.translationService.translate('projects.proj7.solution'),
      stack: [
        'Node.js',
        'JavaScript',
        'Docker',
        'CI/CD'
      ],
      features: this.translationService.translateArray('projects.proj7.features'),
      highlights: this.translationService.translateArray('projects.proj7.highlights'),
      impact: this.translationService.translate('projects.proj7.impact'),
      role: this.translationService.translate('projects.proj7.role'),
      githubRepos: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/AnassEREKYSY/YallaPay'
        }
      ]
    }
  ];
  }
}

