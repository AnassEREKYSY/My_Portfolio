import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="fixed top-4 right-4 z-50">
      <div class="flex items-center gap-1 bg-dark-muted/50 border border-dark-border rounded-lg p-1 backdrop-blur-sm"
           [class.bg-light-muted]="themeService.currentTheme() === 'light'"
           [class.border-light-border]="themeService.currentTheme() === 'light'">
        <button
          type="button"
          [class.bg-accent]="translationService.currentLanguage() === 'fr'"
          [class.text-white]="translationService.currentLanguage() === 'fr'"
          [class.text-text-secondary]="translationService.currentLanguage() !== 'fr'"
          class="px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          (click)="translationService.setLanguage('fr')"
          [attr.aria-label]="'nav.lang.fr' | translate"
          [attr.aria-pressed]="translationService.currentLanguage() === 'fr'"
        >
          FR
        </button>
        <button
          type="button"
          [class.bg-accent]="translationService.currentLanguage() === 'en'"
          [class.text-white]="translationService.currentLanguage() === 'en'"
          [class.text-text-secondary]="translationService.currentLanguage() !== 'en'"
          class="px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          (click)="translationService.setLanguage('en')"
          [attr.aria-label]="'nav.lang.en' | translate"
          [attr.aria-pressed]="translationService.currentLanguage() === 'en'"
        >
          EN
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class LanguageToggleComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);
}

