import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 left-4 z-50">
      <!-- Theme Toggle -->
      <button
        type="button"
        (click)="toggleTheme()"
        [attr.aria-label]="themeService.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="p-2 rounded-lg backdrop-blur-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        [style.background-color]="'var(--surface)'"
        [style.border-color]="'var(--border)'"
        [style.color]="'var(--text-secondary)'"
        [style.--tw-ring-offset-color]="'var(--bg)'"
      >
        <!-- Moon icon for dark mode -->
        <svg
          *ngIf="themeService.isDark"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <!-- Sun icon for light mode -->
        <svg
          *ngIf="!themeService.isDark"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  `,
  styles: []
})
export class ThemeControlsComponent {
  themeService = inject(ThemeService);
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

