import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  businessGoals: string;
  responsibilities: string[];
  stack: string[];
  achievements: string[];
  impact: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  private translationService = inject(TranslationService);
  expandedIndexes = new Set<number>();

  toggleExpanded(index: number): void {
    if (this.expandedIndexes.has(index)) {
      this.expandedIndexes.delete(index);
    } else {
      this.expandedIndexes.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedIndexes.has(index);
  }
  
  get experiences(): Experience[] {
    const lang = this.translationService.currentLanguage();
    return [
      {
        company: 'RS2i',
        role: this.translationService.translate('experience.exp5.role'),
        period: this.translationService.translate('experience.exp5.period'),
        location: this.translationService.translate('experience.exp5.location'),
        context: this.translationService.translate('experience.exp5.context'),
        businessGoals: this.translationService.translate('experience.exp5.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp5.responsibilities'),
        stack: [
          'C#', '.NET Framework', 'ASP.NET MVC', 'Razor',
          'JavaScript', 'jQuery', 'SQL Server', 'T-SQL',
          'Stored Procedures', 'SSMS', 'Azure DevOps', 'Git', 'Jira'
        ],
        achievements: this.translationService.translateArray('experience.exp5.achievements'),
        impact: this.translationService.translate('experience.exp5.impact')
      },

      {
        company: 'Freelance',
        role: this.translationService.translate('experience.exp6.role'),
        period: this.translationService.translate('experience.exp6.period'),
        location: this.translationService.translate('experience.exp6.location'),
        context: this.translationService.translate('experience.exp6.context'),
        businessGoals: this.translationService.translate('experience.exp6.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp6.responsibilities'),
        stack: [
          '.NET 8', 'ASP.NET Core Web API', 'Node.js', 'Angular 19',
          'TypeScript', 'SQL Server', 'PostgreSQL', 'MongoDB',
          'Redis', 'Stripe', 'Keycloak', 'Jest', 'Playwright', 'Docker', 'CI/CD'
        ],
        achievements: this.translationService.translateArray('experience.exp6.achievements'),
        impact: this.translationService.translate('experience.exp6.impact')
      },

      {
        company: 'Auxia',
        role: this.translationService.translate('experience.exp1.role'),
        period: '09/2023 – 08/2025',
        location: 'Paris, France',
        context: this.translationService.translate('experience.exp1.context'),
        businessGoals: this.translationService.translate('experience.exp1.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp1.responsibilities'),
        stack: [
          'Angular',
          '.NET',
          'TypeScript',
          'SQL',
          'Docker',
          'Azure DevOps',
          'Jest',
          'Cypress'
        ],
        achievements: this.translationService.translateArray('experience.exp1.achievements'),
        impact: this.translationService.translate('experience.exp1.impact')
      },
  
      {
        company: 'Dimo Maint',
        role: this.translationService.translate('experience.exp2.role'),
        period: '04/2023 – 08/2023',
        location: 'Lyon, France',
        context: this.translationService.translate('experience.exp2.context'),
        businessGoals: this.translationService.translate('experience.exp2.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp2.responsibilities'),
        stack: [
          'Angular',
          '.NET',
          'TypeScript',
          'SQL',
          'Azure DevOps'
        ],
        achievements: this.translationService.translateArray('experience.exp2.achievements'),
        impact: this.translationService.translate('experience.exp2.impact')
      },
  
      {
        company: 'Préfecture',
        role: this.translationService.translate('experience.exp3.role'),
        period: '03/2022 – 06/2022',
        location: 'Meknès, Morocco',
        context: this.translationService.translate('experience.exp3.context'),
        businessGoals: this.translationService.translate('experience.exp3.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp3.responsibilities'),
        stack: [
          'Flutter',
          'Dart',
          'UML',
          'Merise'
        ],
        achievements: this.translationService.translateArray('experience.exp3.achievements'),
        impact: this.translationService.translate('experience.exp3.impact')
      },
  
      {
        company: 'First Instance Court',
        role: this.translationService.translate('experience.exp4.role'),
        period: '07/2021 – 09/2021',
        location: 'Sidi Kacem, Morocco',
        context: this.translationService.translate('experience.exp4.context'),
        businessGoals: this.translationService.translate('experience.exp4.businessGoals'),
        responsibilities: this.translationService.translateArray('experience.exp4.responsibilities'),
        stack: [
          'PHP',
          'HTML',
          'CSS',
          'SQL'
        ],
        achievements: this.translationService.translateArray('experience.exp4.achievements'),
        impact: this.translationService.translate('experience.exp4.impact')
      }
    ];
  }
}

