import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

export interface Translations {
  [key: string]: string | Translations;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<Language, Translations> = {
    en: {},
    fr: {}
  };

  currentLanguage = signal<Language>('en');

  constructor() {
    // Load saved language preference
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      this.currentLanguage.set(saved);
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
        // Fallback to English if translation missing
        if (lang !== 'en') {
          value = this.translations.en;
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
}

