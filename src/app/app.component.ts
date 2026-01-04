import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslationService } from './services/translation.service';
import { translations } from './translations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>
      <main id="main-content" class="flex-grow" role="main">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private translationService = inject(TranslationService);
  title = 'Anass EREKYSY - Portfolio';

  ngOnInit(): void {
    // Register all translations
    this.translationService.registerTranslations('en', translations.en);
    this.translationService.registerTranslations('fr', translations.fr);
    
    // Set HTML lang attribute
    document.documentElement.lang = this.translationService.currentLang;
  }
}
