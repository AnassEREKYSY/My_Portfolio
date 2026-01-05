import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section
      class="relative min-h-screen flex items-center justify-center border-b border-dark-border overflow-hidden"
      id="hero"
    >
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle at 1px 1px,
              rgba(59,130,246,0.3) 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        ></div>
      </div>

      <div class="section-container relative z-10 py-32">
        <div class="max-w-6xl mx-auto text-center">

          <!-- Headline -->
          <h1
            class="text-6xl sm:text-7xl lg:text-8xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Full Stack Developer
          </h1>

          <!-- Subheadline -->
          <p
            class="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Over 3 years of experience building scalable and reliable web applications
            using .NET, Angular, Node.js, and modern DevOps practices.
          </p>

          <!-- Positioning -->
          <p class="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto mb-14">
            Open to
            <span class="text-accent font-medium">
              short- and long-term missions
            </span>
            as a Full Stack Developer
          </p>

          <!-- CTA BUTTONS -->
          <div class="flex flex-wrap justify-center gap-4 items-center mb-20">

            <!-- Primary -->
            <a
              href="#projects"
              class="inline-flex items-center justify-center
                     px-8 py-4 min-w-[180px]
                     bg-accent text-white font-semibold rounded-lg
                     hover:bg-accent/90
                     shadow-md hover:shadow-lg
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-accent
                     focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              View My Work
            </a>

            <!-- Secondary -->
            <a
              href="#contact"
              class="inline-flex items-center justify-center
                     px-8 py-4 min-w-[180px]
                     bg-dark-surface text-text-primary font-semibold rounded-lg
                     border border-dark-border
                     hover:border-accent/50 hover:bg-dark-muted/40
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-accent
                     focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              Get In Touch
            </a>

            <!-- Navigation buttons -->
            <a
              href="#experience"
              class="inline-flex items-center justify-center
                     px-7 py-4 min-w-[150px]
                     bg-transparent text-text-secondary font-medium rounded-lg
                     border border-dark-border
                     hover:text-accent hover:border-accent/50
                     hover:bg-dark-muted/30
                     transition-all duration-200"
            >
              Experience
            </a>

            <a
              href="#projects"
              class="inline-flex items-center justify-center
                     px-7 py-4 min-w-[150px]
                     bg-transparent text-text-secondary font-medium rounded-lg
                     border border-dark-border
                     hover:text-accent hover:border-accent/50
                     hover:bg-dark-muted/30
                     transition-all duration-200"
            >
              Projects
            </a>

            <a
              href="#skills"
              class="inline-flex items-center justify-center
                     px-7 py-4 min-w-[150px]
                     bg-transparent text-text-secondary font-medium rounded-lg
                     border border-dark-border
                     hover:text-accent hover:border-accent/50
                     hover:bg-dark-muted/30
                     transition-all duration-200"
            >
              Skills
            </a>
          </div>

          <!-- Animated Stats -->
          <div
            class="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-dark-border"
          >
            <div>
              <div class="text-4xl font-bold text-accent mb-2">
                {{ yearsExperience }}+
              </div>
              <div class="text-sm text-text-muted uppercase tracking-wider">
                Years Experience
              </div>
            </div>

            <div>
              <div class="text-4xl font-bold text-accent mb-2">
                {{ projectsDelivered }}+
              </div>
              <div class="text-sm text-text-muted uppercase tracking-wider">
                Projects Delivered
              </div>
            </div>

            <div>
              <div class="text-4xl font-bold text-accent mb-2">
                {{ qualityFocus }}%
              </div>
              <div class="text-sm text-text-muted uppercase tracking-wider">
                Quality Focus
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          class="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  `,
  styles: []
})
export class HeroSectionComponent implements AfterViewInit {

  yearsExperience = 0;
  projectsDelivered = 0;
  qualityFocus = 0;

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
