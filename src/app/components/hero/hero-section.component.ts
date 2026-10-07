import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Stat {
  key: string;
  target: number;
  suffix: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsRow') statsRow?: ElementRef<HTMLElement>;

  readonly stats: Stat[] = [
    { key: 'hero.yearsExperience', target: 5, suffix: '+' },
    { key: 'hero.projectsDelivered', target: 15, suffix: '+' },
    { key: 'hero.qualityFocus', target: 100, suffix: '%' }
  ];

  values = signal<number[]>(this.stats.map(s => s.target));

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const reduce = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof window === 'undefined' || !('IntersectionObserver' in window) || !this.statsRow) {
      return;
    }

    this.values.set(this.stats.map(() => 0));

    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        this.observer?.disconnect();
        this.countUp();
      }
    }, { threshold: 0.4 });

    this.observer.observe(this.statsRow.nativeElement);
  }

  private countUp(): void {
    const duration = 1400;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      this.values.set(this.stats.map(s => Math.round(s.target * ease(t))));
      if (t < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
