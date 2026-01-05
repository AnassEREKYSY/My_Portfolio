import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkPrinciple {
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-i-work-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="how-i-work">
      <div class="section-container">
        <div class="max-w-5xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              How I Work
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              My approach to delivering reliable, maintainable, and business-oriented software
            </p>
          </div>

          <!-- Principles grid -->
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div
              *ngFor="let principle of principles"
              class="card-base p-8 hover-lift"
            >
              <h3 class="text-xl font-bold text-text-primary mb-4">
                {{ principle.title }}
              </h3>
              <p class="text-text-secondary leading-relaxed">
                {{ principle.description }}
              </p>
            </div>
          </div>

          <!-- Process highlight -->
          <div class="card-base p-10 border-l-4 border-accent">
            <h3 class="text-2xl font-bold text-text-primary mb-6">
              Development Process
            </h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">1.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      Requirements & Understanding
                    </p>
                    <p class="text-text-secondary text-sm">
                      Analyze business needs, understand functional constraints, and clarify expectations with stakeholders.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">2.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      Technical Design
                    </p>
                    <p class="text-text-secondary text-sm">
                      Define application structure, data models, and technical choices with a focus on clarity and maintainability.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">3.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      Development & Testing
                    </p>
                    <p class="text-text-secondary text-sm">
                      Implement features incrementally with clean code and automated tests to reduce regressions and improve reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">4.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      CI/CD & Deployment
                    </p>
                    <p class="text-text-secondary text-sm">
                      Use CI/CD pipelines and containerization to ensure consistent builds, testing, and deployments.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">5.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      Review & Improvement
                    </p>
                    <p class="text-text-secondary text-sm">
                      Review code, address feedback, and continuously improve performance, quality, and usability.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">6.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">
                      Documentation & Knowledge Sharing
                    </p>
                    <p class="text-text-secondary text-sm">
                      Document key decisions and share knowledge to ensure long-term maintainability and team alignment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HowIWorkSectionComponent {
  principles: WorkPrinciple[] = [
    {
      title: 'Clean & Maintainable Code',
      description:
        'I focus on writing clean, readable, and maintainable code with a clear structure and consistent conventions, making applications easier to understand and evolve.'
    },
    {
      title: 'Quality Through Testing',
      description:
        'I use automated testing to secure application behavior and reduce regressions, relying on unit, integration, and end-to-end tests when relevant.'
    },
    {
      title: 'Pragmatic DevOps & Automation',
      description:
        'I leverage CI/CD pipelines and containerization to automate builds, tests, and deployments, improving delivery reliability and consistency.'
    },
    {
      title: 'Collaboration & Documentation',
      description:
        'I collaborate closely with technical and functional teams, communicate clearly, and document technical decisions to ensure alignment and maintainability.'
    },
    {
      title: 'Continuous Improvement',
      description:
        'I continuously refine my approach by learning from real projects, feedback, and best practices rather than following rigid methodologies.'
    },
    {
      title: 'Business-Oriented Delivery',
      description:
        'I keep business objectives in mind, balancing technical quality with practical constraints to deliver solutions that create real value.'
    }
  ];
}
