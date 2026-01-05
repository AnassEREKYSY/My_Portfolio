import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  businessGoals: string;
  responsibilities: string[];
  stack: string[];
  achievements: string[];
  impact: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="experience">
      <div class="section-container">
        <div class="max-w-5xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Experience
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              Over 3 years of professional experience delivering impactful solutions
            </p>
          </div>
          
          <!-- Experience timeline -->
          <div class="space-y-16">
            <article
              *ngFor="let exp of experiences; let i = index"
              class="relative"
            >
              <div class="flex gap-8">
                <!-- Timeline indicator -->
                <div class="flex-shrink-0 w-1 flex flex-col items-center">
                  <div class="w-3 h-3 bg-accent rounded-full border-4 border-dark-bg"></div>
                  <div class="flex-1 w-0.5 bg-dark-border mt-2 mb-2" *ngIf="i < experiences.length - 1"></div>
                </div>
                
                <!-- Content -->
                <div class="flex-1 pb-16 last:pb-0">
                  <div class="card-base p-8 hover-lift">
                    <!-- Header -->
                    <div class="mb-8 pb-6 border-b border-dark-border">
                      <h3 class="text-2xl font-bold text-text-primary mb-2">{{ exp.role }}</h3>
                      <p class="text-xl text-accent font-semibold mb-3">{{ exp.company }}</p>
                      <p class="text-sm text-text-muted font-medium">
                        <span>{{ exp.period }}</span>
                        <span class="mx-2 text-dark-border">•</span>
                        <span>{{ exp.location }}</span>
                      </p>
                    </div>
                    
                    <!-- Context -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">Context & Business Goals</h4>
                      <p class="text-text-secondary leading-relaxed mb-3">{{ exp.context }}</p>
                      <p class="text-text-muted leading-relaxed italic text-sm">{{ exp.businessGoals }}</p>
                    </div>
                    
                    <!-- Responsibilities -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">Key Responsibilities</h4>
                      <ul class="list-none space-y-3">
                        <li *ngFor="let resp of exp.responsibilities" class="flex items-start">
                          <span class="text-accent mr-3 mt-1.5 flex-shrink-0">▸</span>
                          <span class="text-text-secondary leading-relaxed">{{ resp }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Stack -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">Technical Stack</h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          *ngFor="let tech of exp.stack"
                          class="px-3 py-1.5 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Achievements -->
                    <div class="mb-8">
                      <h4 class="text-xs font-semibold text-accent mb-4 uppercase tracking-wider">Key Achievements</h4>
                      <ul class="list-none space-y-3">
                        <li *ngFor="let achievement of exp.achievements" class="flex items-start">
                          <span class="text-accent mr-3 mt-1.5 flex-shrink-0">▸</span>
                          <span class="text-text-secondary leading-relaxed">{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Impact -->
                    <div class="pt-6 mt-6 border-t border-dark-border">
                      <p class="text-sm">
                        <span class="text-accent font-semibold">Impact: </span>
                        <span class="text-text-secondary">{{ exp.impact }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceSectionComponent {
  experiences: Experience[] = [
    {
      company: 'Auxia',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'Paris, France',
      context: 'Development of enterprise applications for clients in finance and public sector. Implementation of CI/CD pipelines and test automation.',
      businessGoals: 'Deliver scalable, secure, and maintainable solutions for critical business processes while reducing time-to-market and improving code quality.',
      responsibilities: [
        'Design and develop full-stack applications using Angular and .NET Core',
        'Implement and maintain CI/CD pipelines using Azure DevOps',
        'Write comprehensive test suites (unit, integration, E2E) with >80% coverage',
        'Architect microservices solutions for high-traffic financial applications',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with product managers and stakeholders to define technical requirements'
      ],
      stack: ['Angular', '.NET Core', 'Node.js', 'Docker', 'Azure DevOps', 'PostgreSQL', 'Jest', 'Cypress', 'TypeScript', 'RxJS'],
      achievements: [
        'Implemented a complete CI/CD pipeline reducing deployment time by 80% and enabling daily releases',
        'Developed a scalable microservices architecture for a financial application handling millions of transactions',
        'Achieved >85% test coverage across unit, integration, and E2E tests, reducing production bugs by 70%',
        'Successfully migrated a legacy application to modern Angular/.NET stack, improving performance by 60%',
        'Established coding standards and best practices, improving team productivity by 40%'
      ],
      impact: 'Significantly improved delivery speed and code quality, enabling the team to ship features faster while maintaining high reliability standards.'
    },
    {
      company: 'Dimo Maint',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Paris, France',
      context: 'Development and maintenance of a SaaS industrial maintenance management application. Industrialization of the development process and quality improvement.',
      businessGoals: 'Transform a monolithic legacy application into a modern, scalable SaaS platform while maintaining business continuity and improving user experience.',
      responsibilities: [
        'Develop and maintain Angular frontend and .NET Core backend',
        'Refactor monolithic architecture into modular, maintainable components',
        'Implement automated testing strategies and CI/CD workflows',
        'Optimize database queries and application performance',
        'Collaborate with cross-functional teams to deliver features on time',
        'Document technical decisions and architecture patterns'
      ],
      stack: ['Angular', '.NET Core', 'SQL Server', 'Docker', 'GitLab CI', 'Selenium', 'Entity Framework', 'TypeScript'],
      achievements: [
        'Migrated monolithic application to modular architecture, improving maintainability and reducing technical debt',
        'Industrialized development process with CI/CD and automated tests, reducing manual deployment errors by 90%',
        'Improved application performance by 60% through query optimization and caching strategies',
        'Trained team on DevOps best practices and code quality standards',
        'Reduced application load time from 8s to 3s, significantly improving user experience'
      ],
      impact: 'Enabled the company to scale the platform efficiently while maintaining high code quality and reducing operational costs.'
    },
    {
      company: 'Institutional Projects',
      role: 'Full Stack Developer',
      period: '2019 - 2020',
      location: 'France',
      context: 'Development of applications for public sector and institutions. Focus on security, compliance, and robustness.',
      businessGoals: 'Deliver secure, compliant, and reliable solutions meeting strict regulatory requirements while ensuring long-term maintainability.',
      responsibilities: [
        'Develop secure applications following public sector security standards',
        'Implement authentication and authorization mechanisms',
        'Ensure compliance with data protection regulations (RGPD)',
        'Create comprehensive technical documentation',
        'Participate in security audits and compliance reviews'
      ],
      stack: ['Angular', '.NET Framework', 'SQL Server', 'Azure', 'PowerShell', 'Identity Server'],
      achievements: [
        'Developed applications compliant with public sector security standards (ANSSI guidelines)',
        'Implemented secure deployment processes with full traceability and audit trails',
        'Created comprehensive technical documentation ensuring long-term maintainability',
        'Successfully passed security audits with zero critical findings'
      ],
      impact: 'Delivered mission-critical applications that met all regulatory requirements and established a foundation for secure development practices.'
    }
  ];
}

