import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  template: `
    <header class="bg-dark-surface/80 backdrop-blur-sm border-b border-dark-border sticky top-0 z-50" role="banner">
      <nav class="section-container" [attr.aria-label]="'nav.main' | translate">
        <div class="flex justify-between items-center h-20">
          <a 
            href="#hero" 
            class="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded"
          >
            <span class="sr-only">Anass EREKYSY</span>
            <span aria-hidden="true" class="tracking-tight">Anass EREKYSY</span>
          </a>
          
          <div class="flex items-center gap-6">
            <!-- Language Switcher -->
            <div class="flex items-center gap-1 bg-dark-muted/50 border border-dark-border rounded-lg p-1">
              <button
                type="button"
                [class.bg-accent]="translationService.currentLang === 'en'"
                [class.text-white]="translationService.currentLang === 'en'"
                [class.text-text-secondary]="translationService.currentLang !== 'en'"
                class="px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg"
                (click)="translationService.setLanguage('en')"
                aria-label="Switch to English"
                [attr.aria-pressed]="translationService.currentLang === 'en'"
              >
                EN
              </button>
              <button
                type="button"
                [class.bg-accent]="translationService.currentLang === 'fr'"
                [class.text-white]="translationService.currentLang === 'fr'"
                [class.text-text-secondary]="translationService.currentLang !== 'fr'"
                class="px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg"
                (click)="translationService.setLanguage('fr')"
                aria-label="Switch to French"
                [attr.aria-pressed]="translationService.currentLang === 'fr'"
              >
                FR
              </button>
            </div>
            
            <button
              type="button"
              class="md:hidden p-2 rounded-md text-text-secondary hover:text-accent hover:bg-dark-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              [attr.aria-expanded]="isMenuOpen"
              [attr.aria-controls]="'mobile-menu'"
              (click)="toggleMenu()"
              aria-label="Toggle navigation menu"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="hidden md:flex space-x-8 items-center">
            <a
              href="#what-i-do"
              class="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded px-1"
              (click)="scrollToSection($event, 'what-i-do')"
            >
              What I Do
            </a>
            <a
              href="#experience"
              class="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded px-1"
              (click)="scrollToSection($event, 'experience')"
            >
              Experience
            </a>
            <a
              href="#projects"
              class="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded px-1"
              (click)="scrollToSection($event, 'projects')"
            >
              Projects
            </a>
            <a
              href="#skills"
              class="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded px-1"
              (click)="scrollToSection($event, 'skills')"
            >
              Skills
            </a>
            <a
              href="#contact"
              class="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded px-1"
              (click)="scrollToSection($event, 'contact')"
            >
              Contact
            </a>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div
          *ngIf="isMenuOpen"
          id="mobile-menu"
          class="md:hidden pb-6 pt-4 border-t border-dark-border"
        >
          <div class="flex flex-col space-y-1">
            <a
              href="#what-i-do"
              class="text-text-secondary hover:text-accent hover:bg-dark-muted/30 transition-colors rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              (click)="scrollToSection($event, 'what-i-do'); closeMenu()"
            >
              What I Do
            </a>
            <a
              href="#experience"
              class="text-text-secondary hover:text-accent hover:bg-dark-muted/30 transition-colors rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              (click)="scrollToSection($event, 'experience'); closeMenu()"
            >
              Experience
            </a>
            <a
              href="#projects"
              class="text-text-secondary hover:text-accent hover:bg-dark-muted/30 transition-colors rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              (click)="scrollToSection($event, 'projects'); closeMenu()"
            >
              Projects
            </a>
            <a
              href="#skills"
              class="text-text-secondary hover:text-accent hover:bg-dark-muted/30 transition-colors rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              (click)="scrollToSection($event, 'skills'); closeMenu()"
            >
              Skills
            </a>
            <a
              href="#contact"
              class="text-text-secondary hover:text-accent hover:bg-dark-muted/30 transition-colors rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              (click)="scrollToSection($event, 'contact'); closeMenu()"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
