import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {
  private themeService = inject(ThemeService);

  yearsExperience = 0;
  projectsDelivered = 0;
  qualityFocus = 0;

  get profileImage(): string {
    return this.themeService.currentTheme() === 'dark'
      ? 'assets/Profile-dark.png'
      : 'assets/Profile.png';
  }

  ngAfterViewInit(): void {
    this.incrementCounter(4, 120, value => this.yearsExperience = value);
    this.incrementCounter(15, 80, value => this.projectsDelivered = value);
    this.incrementCounter(100, 20, value => this.qualityFocus = value);
  }

  /**
   * Increment counter step-by-step with visible latency
   */
  private incrementCounter(
    target: number,
    delayMs: number,
    update: (value: number) => void
  ): void {
    let current = 0;

    const interval = setInterval(() => {
      current++;
      update(current);

      if (current >= target) {
        clearInterval(interval);
        update(target);
      }
    }, delayMs);
  }
}
