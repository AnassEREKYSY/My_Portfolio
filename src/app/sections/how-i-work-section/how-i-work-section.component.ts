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
  templateUrl: './how-i-work-section.component.html'
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
