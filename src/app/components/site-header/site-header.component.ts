import { AfterViewInit, Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';

interface NavItem {
  id: string;
  key: string;
}

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);
  translationService = inject(TranslationService);

  readonly nav: NavItem[] = [
    { id: 'projects', key: 'hero.projects' },
    { id: 'experience', key: 'hero.experience' },
    { id: 'what-i-do', key: 'nav.whatIDo' },
    { id: 'skills', key: 'hero.skills' },
    { id: 'contact', key: 'nav.contact' }
  ];

  scrolled = signal(false);
  menuOpen = signal(false);
  active = signal<string>('');

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    // Sections render after the header, so wait one tick
    setTimeout(() => {
      for (const id of ['hero', ...this.nav.map(n => n.id)]) {
        const el = document.getElementById(id);
        if (el) {
          this.observer?.observe(el);
        }
      }
    });
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
