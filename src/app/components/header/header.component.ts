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
    <header class="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8" [attr.aria-label]="'nav.main' | translate">
        <div class="flex justify-between items-center h-16">
          <a routerLink="/" class="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded">
            <span class="sr-only">Anass EREKYSY</span>
            <span aria-hidden="true">Anass EREKYSY</span>
          </a>
          
          <div class="flex items-center gap-4">
            <!-- Language Switcher -->
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
              <button
                type="button"
                [class.bg-primary-600]="translationService.currentLang === 'en'"
                [class.text-white]="translationService.currentLang === 'en'"
                [class.text-gray-700]="translationService.currentLang !== 'en'"
                class="px-3 py-1 rounded text-sm font-medium transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                (click)="translationService.setLanguage('en')"
                [attr.aria-label]="'nav.lang.en' | translate"
                [attr.aria-pressed]="translationService.currentLang === 'en'"
              >
                EN
              </button>
              <button
                type="button"
                [class.bg-primary-600]="translationService.currentLang === 'fr'"
                [class.text-white]="translationService.currentLang === 'fr'"
                [class.text-gray-700]="translationService.currentLang !== 'fr'"
                class="px-3 py-1 rounded text-sm font-medium transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                (click)="translationService.setLanguage('fr')"
                [attr.aria-label]="'nav.lang.fr' | translate"
                [attr.aria-pressed]="translationService.currentLang === 'fr'"
              >
                FR
              </button>
            </div>
            
            <button
              type="button"
              class="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-600"
              [attr.aria-expanded]="isMenuOpen"
              [attr.aria-controls]="'mobile-menu'"
              (click)="toggleMenu()"
              [attr.aria-label]="'nav.toggle' | translate"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="hidden md:flex space-x-6 items-center">
            <a
              routerLink="/"
              routerLinkActive="text-primary-600 font-semibold"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.home' | translate }}
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-primary-600 font-semibold"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.about' | translate }}
            </a>
            <a
              routerLink="/experience"
              routerLinkActive="text-primary-600 font-semibold"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.experience' | translate }}
            </a>
            <a
              routerLink="/projects"
              routerLinkActive="text-primary-600 font-semibold"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.projects' | translate }}
            </a>
            <a
              routerLink="/skills"
              routerLinkActive="text-primary-600 font-semibold"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.skills' | translate }}
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="text-primary-600 font-semibold"
              class="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              {{ 'nav.contact' | translate }}
            </a>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div
          *ngIf="isMenuOpen"
          id="mobile-menu"
          class="md:hidden pb-4"
        >
          <div class="flex flex-col space-y-2">
            <a
              routerLink="/"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.home' | translate }}
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.about' | translate }}
            </a>
            <a
              routerLink="/experience"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.experience' | translate }}
            </a>
            <a
              routerLink="/projects"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.projects' | translate }}
            </a>
            <a
              routerLink="/skills"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.skills' | translate }}
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="text-primary-600 font-semibold bg-primary-50"
              class="text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              (click)="closeMenu()"
            >
              {{ 'nav.contact' | translate }}
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
}
