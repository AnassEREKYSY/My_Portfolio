import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../directives/reveal.directive';
import { TranslationService } from '../../services/translation.service';

interface Education {
  title: string;
  institution: string;
  location: string;
  period: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  private translationService = inject(TranslationService);

  get educationList(): Education[] {
    return [
      {
        title: this.translationService.translate('education.degree1.title'),
        institution: this.translationService.translate('education.degree1.institution'),
        location: this.translationService.translate('education.degree1.location'),
        period: this.translationService.translate('education.degree1.period')
      },
      {
        title: this.translationService.translate('education.degree2.title'),
        institution: this.translationService.translate('education.degree2.institution'),
        location: this.translationService.translate('education.degree2.location'),
        period: this.translationService.translate('education.degree2.period')
      },
      {
        title: this.translationService.translate('education.degree3.title'),
        institution: this.translationService.translate('education.degree3.institution'),
        location: this.translationService.translate('education.degree3.location'),
        period: this.translationService.translate('education.degree3.period')
      }
    ];
  }

  trackByIndex(index: number): number {
    return index;
  }
}
