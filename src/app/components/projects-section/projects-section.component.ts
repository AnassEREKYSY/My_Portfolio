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
  imageUrl?: string;
  hasEmptyIcon?: boolean;
  githubRepos: {
    label: string;
    url: string;
  }[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
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
        imageUrl: 'assets/MarketPulse.png',
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
      imageUrl: 'assets/Paychase.png',
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
      imageUrl: 'assets/Melodify.png',
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
      imageUrl: 'assets/RaiseUp.png',
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
      imageUrl: 'assets/ShowTracker.png',
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
      imageUrl: 'assets/CoinHawk.png',
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
      imageUrl: 'assets/Skinet.png',
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
      imageUrl: 'assets/Yallapay.png',
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

