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
              My approach to building reliable, maintainable software
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
                    <p class="text-text-primary font-semibold mb-1">Requirements & Planning</p>
                    <p class="text-text-secondary text-sm">Understand business goals, define technical requirements, and plan architecture</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">2.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">Design & Architecture</p>
                    <p class="text-text-secondary text-sm">Design scalable architecture, define APIs, and establish coding standards</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">3.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">Development & Testing</p>
                    <p class="text-text-secondary text-sm">Write clean, tested code following TDD principles and best practices</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">4.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">CI/CD & Deployment</p>
                    <p class="text-text-secondary text-sm">Automate testing and deployment, ensure reliable delivery pipelines</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">5.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">Monitoring & Optimization</p>
                    <p class="text-text-secondary text-sm">Monitor performance, gather feedback, and continuously improve</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0 font-bold">6.</span>
                  <div>
                    <p class="text-text-primary font-semibold mb-1">Documentation & Knowledge Sharing</p>
                    <p class="text-text-secondary text-sm">Document decisions, share knowledge, and ensure maintainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HowIWorkSectionComponent {
  principles: WorkPrinciple[] = [
    {
      title: 'Code Quality First',
      description: 'I prioritize clean, maintainable code over quick fixes. Every line is written with future developers in mind, following SOLID principles and design patterns.'
    },
    {
      title: 'Test-Driven Development',
      description: 'Comprehensive testing is not optional. I write tests alongside code, ensuring reliability and making refactoring safe and confident.'
    },
    {
      title: 'Automation & DevOps',
      description: 'Manual processes are error-prone. I automate everything possible: testing, deployment, monitoring, and infrastructure provisioning.'
    },
    {
      title: 'Collaboration & Communication',
      description: 'Technical excellence means nothing without clear communication. I document decisions, share knowledge, and work closely with teams.'
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly. I stay current with best practices, experiment with new tools, and continuously improve my craft.'
    },
    {
      title: 'Business Impact Focus',
      description: 'Code serves business goals. I understand requirements deeply, ask the right questions, and deliver solutions that create real value.'
    }
  ];
}

