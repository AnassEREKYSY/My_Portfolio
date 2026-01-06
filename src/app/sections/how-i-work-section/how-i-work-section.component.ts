import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface WorkPrinciple {
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-i-work-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="how-i-work">
      <div class="section-container">
        <div class="max-w-5xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              {{ 'howIWork.title' | translate }}
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              {{ 'howIWork.subtitle' | translate }}
            </p>
          </div>

          <!-- Principles grid -->
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div
              *ngFor="let principle of principles"
              class="card-base p-8 hover-lift"
            >
              <h3 class="text-xl font-bold text-text-primary mb-4">
                {{ principle.title }}
              </h3>
              <p class="text-text-secondary leading-relaxed">
                {{ principle.description }}
              </p>
            </div>
          </div>

          <!-- Process highlight -->
          <div class="card-base p-10 border-l-4 border-accent">
            <h3 class="text-2xl font-bold text-text-primary mb-6">
              {{ 'howIWork.processTitle' | translate }}
            </h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="flex items-start" *ngFor="let step of processSteps.slice(0, 3); let i = index">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">{{ i + 1 }}.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      {{ step.title }}
                    </p>
                    <p class="text-text-secondary text-sm">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start" *ngFor="let step of processSteps.slice(3); let i = index">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">{{ i + 4 }}.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      {{ step.title }}
                    </p>
                    <p class="text-text-secondary text-sm">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HowIWorkSectionComponent {
  private translationService = inject(TranslationService);
  
  get principles(): WorkPrinciple[] {
    return [
      {
        title: this.translationService.translate('howIWork.principle1.title'),
        description: this.translationService.translate('howIWork.principle1.description')
      },
      {
        title: this.translationService.translate('howIWork.principle2.title'),
        description: this.translationService.translate('howIWork.principle2.description')
      },
      {
        title: this.translationService.translate('howIWork.principle3.title'),
        description: this.translationService.translate('howIWork.principle3.description')
      },
      {
        title: this.translationService.translate('howIWork.principle4.title'),
        description: this.translationService.translate('howIWork.principle4.description')
      },
      {
        title: this.translationService.translate('howIWork.principle5.title'),
        description: this.translationService.translate('howIWork.principle5.description')
      },
      {
        title: this.translationService.translate('howIWork.principle6.title'),
        description: this.translationService.translate('howIWork.principle6.description')
      }
    ];
  }
  
  get processSteps() {
    return [
      { title: this.translationService.translate('howIWork.step1.title'), description: this.translationService.translate('howIWork.step1.description') },
      { title: this.translationService.translate('howIWork.step2.title'), description: this.translationService.translate('howIWork.step2.description') },
      { title: this.translationService.translate('howIWork.step3.title'), description: this.translationService.translate('howIWork.step3.description') },
      { title: this.translationService.translate('howIWork.step4.title'), description: this.translationService.translate('howIWork.step4.description') },
      { title: this.translationService.translate('howIWork.step5.title'), description: this.translationService.translate('howIWork.step5.description') },
      { title: this.translationService.translate('howIWork.step6.title'), description: this.translationService.translate('howIWork.step6.description') }
    ];
  }
}
