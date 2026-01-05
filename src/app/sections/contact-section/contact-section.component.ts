import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="contact">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">

          <!-- Header -->
          <div class="text-center mb-14">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Let’s Work Together
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
                Professional Profiles
              </h3>

              <div class="flex flex-wrap justify-center gap-6">
                <a href="https://www.linkedin.com/in/anass-erekysy-5a8939204/"
                   target="_blank" rel="noopener noreferrer"
                   class="profile-link">
                  <span class="icon-box-sm">
                    <!-- LinkedIn -->
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5A2.48 2.48 0 002.5 6a2.5 2.5 0 105 0 2.48 2.48 0 00-2.52-2.5zM2.5 21h5V8.5h-5V21zM9 8.5h4.8v1.7h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 6 3.32 6 7.63V21h-5v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/>
                    </svg>
                  </span>
                  LinkedIn
                </a>

                <a href="https://github.com/AnassEREKYSY"
                   target="_blank" rel="noopener noreferrer"
                   class="profile-link">
                  <span class="icon-box-sm">
                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.36-1.37-3.36-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.2 9.2 0 015 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.48A10.2 10.2 0 0022 12.2C22 6.58 17.52 2 12 2z"/>
                    </svg>
                  </span>
                  GitHub
                </a>

                <a href="https://www.malt.fr/profile/anasserekysy"
                   target="_blank" rel="noopener noreferrer"
                   class="profile-link">
                  <span class="icon-box-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 3h3v3"/>
                      <path d="M10 14L21 3"/>
                      <path d="M21 14v7H3V3h7"/>
                    </svg>
                  </span>
                  Malt
                </a>

                <a href="https://app.collective.work/collective/anass-erekysy/profile?tab=1"
                   target="_blank" rel="noopener noreferrer"
                   class="profile-link">
                  <span class="icon-box-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 3h3v3"/>
                      <path d="M10 14L21 3"/>
                      <path d="M21 14v7H3V3h7"/>
                    </svg>
                  </span>
                  Collective
                </a>

                <a href="https://www.upwork.com/freelancers/~019f535ba57e87cbb4"
                   target="_blank" rel="noopener noreferrer"
                   class="profile-link">
                  <span class="icon-box-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 3h3v3"/>
                      <path d="M10 14L21 3"/>
                      <path d="M21 14v7H3V3h7"/>
                    </svg>
                  </span>
                  Upwork
                </a>
              </div>
            </div>

            <!-- Availability -->
            <div class="rounded-xl p-7 text-center"
                 style="background: linear-gradient(180deg, rgba(59,130,246,0.08), rgba(59,130,246,0.04));
                        border: 1px solid rgba(59,130,246,0.18);">
              <p class="text-base font-semibold text-text-primary mb-1">
                Availability
              </p>
              <p class="text-text-secondary mb-4">
                Open to short- and long-term missions
              </p>

              <div class="flex flex-wrap justify-center gap-4">
                <span class="availability-chip">Short-term</span>
                <span class="availability-chip">Long-term</span>
                <span class="availability-chip">Full Stack</span>
                <span class="availability-chip">Paris / Remote</span>
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

    .profile-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-width: 120px;
      padding: 6px 12px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.02);
      color: var(--text-secondary);
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .profile-link:hover {
      color: var(--accent);
      border-color: rgba(255,255,255,0.12);
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
