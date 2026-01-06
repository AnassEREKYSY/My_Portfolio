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
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="experience">
      <div class="section-container">
        <div class="max-w-5xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              {{ 'experience.title' | translate }}
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              {{ 'experience.subtitle' | translate }}
            </p>
          </div>
          
          <!-- Experience timeline -->
          <div class="space-y-16">
            <article
              *ngFor="let exp of experiences; let i = index"
              class="relative"
            >
              <div class="flex gap-8">
                <!-- Timeline indicator -->
                <div class="flex-shrink-0 w-1 flex flex-col items-center">
                  <div class="w-3 h-3 bg-accent rounded-full border-4 border-dark-bg"></div>
                  <div class="flex-1 w-0.5 bg-dark-border mt-2 mb-2" *ngIf="i < experiences.length - 1"></div>
                </div>
                
                <!-- Content -->
                <div class="flex-1 pb-16 last:pb-0">
                  <div class="card-base p-8 hover-lift">
                    <!-- Header -->
                    <div class="mb-8 pb-6 border-b border-dark-border">
                      <h3 class="text-2xl font-bold text-text-primary mb-2">{{ exp.role }}</h3>
                      <p class="text-xl text-accent font-semibold mb-3">{{ exp.company }}</p>
                      <p class="text-sm text-text-muted font-medium">
                        <span>{{ exp.period }}</span>
                        <span class="mx-2 text-dark-border">•</span>
                        <span>{{ exp.location }}</span>
                      </p>
                    </div>
                    
                    <!-- Context -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">{{ 'experience.contextGoals' | translate }}</h4>
                      <p class="text-text-secondary leading-relaxed mb-3">{{ exp.context }}</p>
                      <p class="text-text-muted leading-relaxed italic text-sm">{{ exp.businessGoals }}</p>
                    </div>
                    
                    <!-- Responsibilities -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">{{ 'experience.keyResponsibilities' | translate }}</h4>
                      <ul class="list-none space-y-3">
                        <li *ngFor="let resp of exp.responsibilities" class="flex items-start">
                          <span class="text-accent mr-3 mt-1.5 flex-shrink-0">▸</span>
                          <span class="text-text-secondary leading-relaxed">{{ resp }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Stack -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">{{ 'experience.technicalStack' | translate }}</h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          *ngFor="let tech of exp.stack"
                          class="px-3 py-1.5 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Achievements -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">{{ 'experience.keyAchievements' | translate }}</h4>
                      <ul class="list-none space-y-3">
                        <li *ngFor="let achievement of exp.achievements" class="flex items-start">
                          <span class="text-accent mr-3 mt-1.5 flex-shrink-0">▸</span>
                          <span class="text-text-secondary leading-relaxed">{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Impact -->
                    <div class="pt-6 mt-6 border-t border-dark-border">
                      <p class="text-sm">
                        <span class="text-accent font-semibold">{{ 'experience.impact' | translate }}: </span>
                        <span class="text-text-secondary">{{ exp.impact }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceSectionComponent {
  private translationService = inject(TranslationService);
  
  get experiences(): Experience[] {
    const lang = this.translationService.currentLanguage();
    return [
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
        company: 'Préfecture de Meknès',
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
        company: 'First Instance Court of Sidi Kacem',
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

