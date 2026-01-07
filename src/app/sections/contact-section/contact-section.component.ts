import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="contact">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">

          <!-- Header -->
          <div class="text-center mb-14">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              {{ 'contact.title' | translate }}
            </h2>
          </div>

          <!-- Card -->
          <div class="card-base p-8 md:p-9 space-y-12">

            <!-- Email + Location (CENTERED GROUP) -->
            <div class="flex justify-center">
              <div class="flex flex-col sm:flex-row items-center gap-10 text-center">
                
                <a href="mailto:ereanass@gmail.com" class="contact-row">
                  <span class="icon-box">
                    <!-- Mail -->
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16v16H4z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </span>
                  <span>ereanass&#64;gmail.com</span>
                </a>

                <div class="contact-row text-text-secondary">
                  <span class="icon-box">
                    <!-- Location -->
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span>Paris, France</span>
                </div>

              </div>
            </div>

            <!-- Professional Profiles -->
            <div class="text-center space-y-6">
              <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider">
                {{ 'contact.professionalProfiles' | translate }}
              </h3>

              <div class="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/anass-erekysy-5a8939204/"
                   target="_blank" rel="noopener noreferrer"
                   class="social-button linkedin-button">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span class="social-text">LinkedIn</span>
                </a>

                <a href="https://github.com/AnassEREKYSY"
                   target="_blank" rel="noopener noreferrer"
                   class="social-button github-button">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="social-text">GitHub</span>
                </a>

                <a href="https://www.malt.fr/profile/anasserekysy"
                   target="_blank" rel="noopener noreferrer"
                   class="social-button malt-button">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 3h3v3"/>
                    <path d="M10 14L21 3"/>
                    <path d="M21 14v7H3V3h7"/>
                  </svg>
                  <span class="social-text">Malt</span>
                </a>

                <a href="https://app.collective.work/collective/anass-erekysy/profile?tab=1"
                   target="_blank" rel="noopener noreferrer"
                   class="social-button collective-button">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 3h3v3"/>
                    <path d="M10 14L21 3"/>
                    <path d="M21 14v7H3V3h7"/>
                  </svg>
                  <span class="social-text">Collective</span>
                </a>

                <a href="https://www.upwork.com/freelancers/~019f535ba57e87cbb4"
                   target="_blank" rel="noopener noreferrer"
                   class="social-button upwork-button">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                  <span class="social-text">Upwork</span>
                </a>
              </div>
            </div>

            <!-- Availability -->
            <div class="rounded-xl p-7 text-center"
                 style="background: linear-gradient(180deg, rgba(59,130,246,0.08), rgba(59,130,246,0.04));
                        border: 1px solid rgba(59,130,246,0.18);">
              <p class="text-base font-semibold text-text-primary mb-1">
                {{ 'contact.availability' | translate }}
              </p>
              <p class="text-text-secondary mb-4">
                {{ 'contact.availabilityDesc' | translate }}
              </p>

              <div class="flex flex-wrap justify-center gap-4">
                <span class="availability-chip">{{ 'contact.shortTerm' | translate }}</span>
                <span class="availability-chip">{{ 'contact.longTerm' | translate }}</span>
                <span class="availability-chip">{{ 'contact.fullStack' | translate }}</span>
                <span class="availability-chip">{{ 'contact.parisRemote' | translate }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .social-button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      color: white;
      text-decoration: none;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      min-width: 140px;
      justify-content: flex-start;
    }

    .social-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .social-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .social-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .linkedin-button {
      background: #0077B5;
    }

    .linkedin-button:hover {
      background: #006399;
    }

    .github-button {
      background: #000000;
    }

    html.light .github-button {
      background: #24292e;
    }

    .github-button:hover {
      background: #1a1a1a;
    }

    html.light .github-button:hover {
      background: #1c2128;
    }

    .malt-button {
      background: #FF6B35;
    }

    .malt-button:hover {
      background: #e55a2b;
    }

    .collective-button {
      background: #6366F1;
    }

    .collective-button:hover {
      background: #4f46e5;
    }

    .upwork-button {
      background: #14A800;
    }

    .upwork-button:hover {
      background: #0f7d00;
    }

    .icon-box {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.02);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-box-sm {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.02);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-box svg,
    .icon-box-sm svg {
      width: 15px;
      height: 15px;
      opacity: 0.75;
    }

    .availability-chip {
      padding: 5px 12px;
      border-radius: 9999px;
      font-size: 0.8rem;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.03);
      color: var(--text-secondary);
    }
  `]
})
export class ContactSectionComponent {}
