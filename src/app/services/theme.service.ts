import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>('light'); // Default to light

  constructor() {
    // Load saved theme preference, default to light if none saved
    const saved = localStorage.getItem('portfolio-theme') as Theme;
    if (saved && (saved === 'dark' || saved === 'light')) {
      this.currentTheme.set(saved);
    } else {
      // Default to light
      this.currentTheme.set('light');
      localStorage.setItem('portfolio-theme', 'light');
    }

    // Apply theme on initialization
    this.applyTheme(this.currentTheme());

    // Watch for theme changes and apply them
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      // Remove both classes first
      html.classList.remove('dark', 'light');
      // Add the appropriate class
      html.classList.add(theme);
      // Also set a data attribute for additional styling if needed
      html.setAttribute('data-theme', theme);
    }
  }

  get isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}

