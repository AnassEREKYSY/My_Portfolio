import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../directives/reveal.directive';
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
  imageUrl?: string;
  githubRepos: {
    label: string;
    url: string;
  }[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  private translationService = inject(TranslationService);
  
  selectedProject: Project | null = null;

  get featured(): Project[] {
    return this.projects.slice(0, 2);
  }

  get others(): Project[] {
    return this.projects.slice(2);
  }

  pad(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedProject) {
      this.closeProject();
    }
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  get projects(): Project[] {
    return [
      {
        name: 'Plumb',
        description: this.translationService.translate('projects.proj11.description'),
        problem: this.translationService.translate('projects.proj11.problem'),
        solution: this.translationService.translate('projects.proj11.solution'),
        stack: [
          'Next.js',
          'React',
          'TypeScript',
          'Supabase',
          'PostgreSQL',
          'Tailwind CSS',
          'Zod',
          'Vercel'
        ],
        features: this.translationService.translateArray('projects.proj11.features'),
        highlights: this.translationService.translateArray('projects.proj11.highlights'),
        impact: this.translationService.translate('projects.proj11.impact'),
        role: this.translationService.translate('projects.proj11.role'),
        imageUrl: 'assets/projects/plumb.webp',
        githubRepos: [
          {
            label: 'Live demo',
            url: 'https://plumb-peach.vercel.app/'
          }
        ]
      },

      {
        name: 'Cockpit',
        description: this.translationService.translate('projects.proj10.description'),
        problem: this.translationService.translate('projects.proj10.problem'),
        solution: this.translationService.translate('projects.proj10.solution'),
        stack: [
          'React',
          'TypeScript',
          'Supabase',
          'PostgreSQL',
          'Vercel'
        ],
        features: this.translationService.translateArray('projects.proj10.features'),
        highlights: this.translationService.translateArray('projects.proj10.highlights'),
        impact: this.translationService.translate('projects.proj10.impact'),
        role: this.translationService.translate('projects.proj10.role'),
        imageUrl: 'assets/projects/cockpit.webp',
        githubRepos: [
          {
            label: 'Live demo',
            url: 'https://business-cockpit-five.vercel.app/'
          }
        ]
      },

      {
        name: 'Buy & Bye',
        description: this.translationService.translate('projects.proj9.description'),
        problem: this.translationService.translate('projects.proj9.problem'),
        solution: this.translationService.translate('projects.proj9.solution'),
        stack: [
          'Laravel',
          'React',
          'PostgreSQL',
          'Docker',
          'CI/CD',
          'DDD',
          'Clean Architecture'
        ],
        features: this.translationService.translateArray('projects.proj9.features'),
        highlights: this.translationService.translateArray('projects.proj9.highlights'),
        impact: this.translationService.translate('projects.proj9.impact'),
        role: this.translationService.translate('projects.proj9.role'),
        imageUrl: 'assets/projects/buyandbye.webp',
        githubRepos: []
      },
  
      {
        name: 'MarketPulse',
        description: this.translationService.translate('projects.proj1.description'),
        problem: this.translationService.translate('projects.proj1.problem'),
        solution: this.translationService.translate('projects.proj1.solution'),
        stack: [
          'Angular',
          '.NET 8',
          'Redis',
          'Docker',
          'Nginx',
          'CI/CD',
          'External Job APIs (Adzuna)'
        ],
        features: this.translationService.translateArray('projects.proj1.features'),
        highlights: this.translationService.translateArray('projects.proj1.highlights'),
        impact: this.translationService.translate('projects.proj1.impact'),
        role: this.translationService.translate('projects.proj1.role'),
        imageUrl: 'assets/projects/marketpulse.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/MarketPulse'
          },
          {
            label: 'MarketPulse',
            url: 'https://marketpulse.anasserekysy.com/'
          }
        ]
      },
  
      {
        name: 'PayChase',
        description: this.translationService.translate('projects.proj2.description'),
        problem: this.translationService.translate('projects.proj2.problem'),
        solution: this.translationService.translate('projects.proj2.solution'),
        stack: [
          'Angular',
          '.NET',
          'Node.js',
          'SQL',
          'Docker',
          'CI/CD'
        ],
        features: this.translationService.translateArray('projects.proj2.features'),
        highlights: this.translationService.translateArray('projects.proj2.highlights'),
        impact: this.translationService.translate('projects.proj2.impact'),
        role: this.translationService.translate('projects.proj2.role'),
        imageUrl: 'assets/projects/paychase.webp',
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
        description: this.translationService.translate('projects.proj3.description'),
        problem: this.translationService.translate('projects.proj3.problem'),
        solution: this.translationService.translate('projects.proj3.solution'),
        stack: [
          'Angular',
          '.NET',
          'SQL',
          'Spotify Developer API'
        ],
        features: this.translationService.translateArray('projects.proj3.features'),
        highlights: this.translationService.translateArray('projects.proj3.highlights'),
        impact: this.translationService.translate('projects.proj3.impact'),
        role: this.translationService.translate('projects.proj3.role'),
        imageUrl: 'assets/projects/melodify.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/Melodify'
          },
          {
            label: 'Melodify',
            url: 'https://melodify.anasserekysy.com/'
          }
        ]
      },
  
      {
        name: 'RaiseUp',
        description: this.translationService.translate('projects.proj6.description'),
        problem: this.translationService.translate('projects.proj6.problem'),
        solution: this.translationService.translate('projects.proj6.solution'),
        stack: [
          'Angular',
          'Node.js'
        ],
        features: this.translationService.translateArray('projects.proj6.features'),
        highlights: this.translationService.translateArray('projects.proj6.highlights'),
        impact: this.translationService.translate('projects.proj6.impact'),
        role: this.translationService.translate('projects.proj6.role'),
        imageUrl: 'assets/projects/raiseup.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/RaiseUp'
          },
          {
            label: 'RaiseUp',
            url: 'https://raiseup.anasserekysy.com/'
          }
        ]
      },
  
      {
        name: 'ShowTracker',
        description: this.translationService.translate('projects.proj7.description'),
        problem: this.translationService.translate('projects.proj7.problem'),
        solution: this.translationService.translate('projects.proj7.solution'),
        stack: [
          'Angular',
          'Node.js',
          'External Content APIs'
        ],
        features: this.translationService.translateArray('projects.proj7.features'),
        highlights: this.translationService.translateArray('projects.proj7.highlights'),
        impact: this.translationService.translate('projects.proj7.impact'),
        role: this.translationService.translate('projects.proj7.role'),
        imageUrl: 'assets/projects/showtracker.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/ShowTracker'
          },
          {
            label: 'ShowTracker',
            url: 'https://showtracker.anasserekysy.com/'
          }
        ]
      },
  
      {
        name: 'CoinHawk',
        description: this.translationService.translate('projects.proj4.description'),
        problem: this.translationService.translate('projects.proj4.problem'),
        solution: this.translationService.translate('projects.proj4.solution'),
        stack: [
          'Angular',
          '.NET',
          'External Crypto APIs',
          'Keycloak'
        ],
        features: this.translationService.translateArray('projects.proj4.features'),
        highlights: this.translationService.translateArray('projects.proj4.highlights'),
        impact: this.translationService.translate('projects.proj4.impact'),
        role: this.translationService.translate('projects.proj4.role'),
        imageUrl: 'assets/projects/coinhawk.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/CoinHawk'
          }
        ]
      },
  
      {
        name: 'Skinet',
        description: this.translationService.translate('projects.proj5.description'),
        problem: this.translationService.translate('projects.proj5.problem'),
        solution: this.translationService.translate('projects.proj5.solution'),
        stack: [
          'Angular',
          '.NET',
          'SQL',
          'Stripe'
        ],
        features: this.translationService.translateArray('projects.proj5.features'),
        highlights: this.translationService.translateArray('projects.proj5.highlights'),
        impact: this.translationService.translate('projects.proj5.impact'),
        role: this.translationService.translate('projects.proj5.role'),
        imageUrl: 'assets/projects/skinet.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/SkiNet'
          }
        ]
      },
  
      {
        name: 'YallaPay',
        description: this.translationService.translate('projects.proj8.description'),
        problem: this.translationService.translate('projects.proj8.problem'),
        solution: this.translationService.translate('projects.proj8.solution'),
        stack: [
          'Node.js',
          'JavaScript',
          'Docker',
          'CI/CD'
        ],
        features: this.translationService.translateArray('projects.proj8.features'),
        highlights: this.translationService.translateArray('projects.proj8.highlights'),
        impact: this.translationService.translate('projects.proj8.impact'),
        role: this.translationService.translate('projects.proj8.role'),
        imageUrl: 'assets/projects/yallapay.webp',
        githubRepos: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/AnassEREKYSY/YallaPay'
          }
        ]
      }
    ];
  }

  trackByIndex(index: number): number {
    return index;
  }
}
