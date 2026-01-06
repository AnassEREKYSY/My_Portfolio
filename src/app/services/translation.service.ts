import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

export interface Translations {
  [key: string]: string | string[] | Translations;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<Language, Translations> = {
    en: {},
    fr: {}
  };

  currentLanguage = signal<Language>('fr'); // Default to French

  constructor() {
    // Load saved language preference, default to French if none saved
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      this.currentLanguage.set(saved);
    } else {
      // First visit: default to French
      this.currentLanguage.set('fr');
      localStorage.setItem('portfolio-language', 'fr');
    }
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('portfolio-language', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  registerTranslations(lang: Language, translations: Translations): void {
    this.translations[lang] = { ...this.translations[lang], ...translations };
  }

  translate(key: string, params?: Record<string, string>): string {
    const lang = this.currentLanguage();
    const keys = key.split('.');
    let value: any = this.translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to French if translation missing
        if (lang !== 'fr') {
          value = this.translations.fr;
          for (const k2 of keys) {
            if (value && typeof value === 'object' && k2 in value) {
              value = value[k2];
            } else {
              return key;
            }
          }
        } else {
          return key;
        }
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Replace parameters
    if (params) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
    }

    return value;
  }

  get currentLang(): Language {
    return this.currentLanguage();
  }

  translateArray(key: string): string[] {
    const lang = this.currentLanguage();
    const keys = key.split('.');
    let value: any = this.translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to French if translation missing
        if (lang !== 'fr') {
          value = this.translations.fr;
          for (const k2 of keys) {
            if (value && typeof value === 'object' && k2 in value) {
              value = value[k2];
            } else {
              return [];
            }
          }
        } else {
          return [];
        }
      }
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [];
  }
}

