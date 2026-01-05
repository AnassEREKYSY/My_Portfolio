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
          <!-- Section header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Let's Work Together
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              Open to short- and long-term missions as a Full Stack Developer
            </p>
          </div>
          
          <!-- Contact card -->
          <div class="card-base p-10 md:p-12">
            <div class="grid md:grid-cols-2 gap-12 mb-10">
              <!-- Contact info -->
              <div>
                <h3 class="text-xl font-semibold text-text-primary mb-6">Contact Information</h3>
                <div class="space-y-5">
                  <a
                    href="mailto:ereanass@gmail.com"
                    class="flex items-center text-text-secondary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded"
                  >
                    <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    contact&#64;anass-erekysy.dev
                  </a>
                  
                  <div class="flex items-center text-text-secondary">
                    <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Paris, France
                  </div>
                </div>
              </div>
              
              <!-- Professional networks -->
              <div>
                <h3 class="text-xl font-semibold text-text-primary mb-6">Professional Networks</h3>
                <div class="flex flex-col space-y-4">
                  <a
                    href="https://www.linkedin.com/in/anass-erekysy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-text-secondary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded"
                  >
                    <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  
                  <a
                    href="https://github.com/anass-erekysy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-text-secondary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded"
                  >
                    <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
              <p class="text-lg font-semibold text-text-primary mb-3">
                Available for short- and long-term missions
              </p>
              <p class="text-text-secondary mb-4">
                Full Stack Developer
              </p>
              <div class="flex flex-wrap justify-center gap-3 mt-6">
                <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded-full text-sm font-medium border border-dark-border">
                  Short-term missions
                </span>
                <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded-full text-sm font-medium border border-dark-border">
                  Long-term missions
                </span>
                <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded-full text-sm font-medium border border-dark-border">
                  Île-de-France
                </span>
                <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded-full text-sm font-medium border border-dark-border">
                  Remote Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactSectionComponent {}

