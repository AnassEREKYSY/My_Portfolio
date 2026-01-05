import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="relative min-h-screen flex items-center justify-center border-b border-dark-border overflow-hidden" id="hero">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="section-container relative z-10 py-32">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Main headline -->
          <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-text-primary mb-8 leading-tight tracking-tight">
            Full Stack Developer
            <span class="block text-accent mt-4">Building Scalable Solutions</span>
          </h1>
          
          <!-- Subheadline -->
          <p class="text-xl sm:text-2xl text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            Over 3 years of experience building scalable and reliable web applications using .NET, Angular, Node.js, and modern DevOps practices.
          </p>
          
          <!-- Positioning statement -->
          <div class="mb-16">
            <p class="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Open to <span class="text-accent font-medium">short- and long-term missions</span> as a Full Stack Developer
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              class="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg shadow-lg hover:shadow-xl"
            >
              View My Work
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-dark-surface text-text-primary font-semibold rounded-lg border border-dark-border hover:border-accent/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              Get In Touch
            </a>
          </div>
          
          <!-- Quick stats -->
          <div class="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-dark-border">
            <div>
              <div class="text-4xl font-bold text-accent mb-2">3+</div>
              <div class="text-sm text-text-muted uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-accent mb-2">15+</div>
              <div class="text-sm text-text-muted uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-accent mb-2">100%</div>
              <div class="text-sm text-text-muted uppercase tracking-wider">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  `,
  styles: []
})
export class HeroSectionComponent {}

