import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-what-i-do-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="what-i-do">
      <div class="section-container">
        <div class="max-w-6xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              What I Do
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              Full-stack development with a focus on scalability, reliability, and engineering excellence
            </p>
          </div>
          
          <!-- Services grid -->
          <div class="grid md:grid-cols-3 gap-8">
            <div
              *ngFor="let service of services"
              class="card-base p-8 hover-lift group"
            >
              <div class="mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span class="text-2xl">{{ service.icon }}</span>
                </div>
                <h3 class="text-xl font-bold text-text-primary mb-3">
                  {{ service.title }}
                </h3>
                <p class="text-text-secondary leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Core expertise highlight -->
          <div class="mt-16 card-base p-10 border-l-4 border-accent">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold text-text-primary mb-4">
                  Full-Stack Expertise
                </h3>
                <p class="text-text-secondary leading-relaxed mb-6">
                  I design and build complete web applications from frontend to backend, 
                  ensuring seamless integration, optimal performance, and maintainable architecture.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium">
                    Frontend Development
                  </span>
                  <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium">
                    Backend Architecture
                  </span>
                  <span class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium">
                    DevOps & CI/CD
                  </span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0">▸</span>
                  <p class="text-text-secondary">Enterprise-grade application development</p>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0">▸</span>
                  <p class="text-text-secondary">Microservices and scalable architectures</p>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0">▸</span>
                  <p class="text-text-secondary">Automated testing and quality assurance</p>
                </div>
                <div class="flex items-start">
                  <span class="text-accent mr-3 mt-1 flex-shrink-0">▸</span>
                  <p class="text-text-secondary">Cloud deployment and infrastructure</p>
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
export class WhatIDoSectionComponent {
  services: Service[] = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, performant user interfaces with Angular, TypeScript, and modern CSS. Focus on user experience, accessibility, and code quality.',
      icon: '⚡'
    },
    {
      title: 'Backend Development',
      description: 'Designing and implementing robust APIs and services using .NET Core and Node.js. Emphasis on scalability, security, and maintainability.',
      icon: '🔧'
    },
    {
      title: 'DevOps & Automation',
      description: 'Setting up CI/CD pipelines, containerization with Docker, and cloud infrastructure. Automating deployments and ensuring reliable delivery.',
      icon: '🚀'
    }
  ];
}

