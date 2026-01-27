import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './language-toggle.component.html'
})
export class LanguageToggleComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);
}

