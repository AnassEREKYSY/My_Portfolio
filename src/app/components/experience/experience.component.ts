import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

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
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-20 lg:py-32 bg-gray-50" id="experience">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ 'experience.title' | translate }}
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ 'experience.subtitle' | translate }}
            </p>
          </div>
          
          <div class="space-y-12">
            <article
              *ngFor="let exp of experiences; let i = index"
              class="relative pl-8 pb-16 last:pb-0"
            >
              <div class="absolute -left-2 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-md"></div>
              
              <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ exp.role }}</h3>
                    <p class="text-xl text-primary-600 font-semibold mb-3">{{ exp.company }}</p>
                    <p class="text-sm text-gray-600 font-medium">
                      <span>{{ exp.period }}</span>
                      <span class="mx-2">•</span>
                      <span>{{ exp.location }}</span>
                    </p>
                  </div>
                </div>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-primary-700">Context & Business Goals</h4>
                  <p class="text-gray-700 leading-relaxed mb-3">{{ exp.context }}</p>
                  <p class="text-gray-600 leading-relaxed italic">{{ exp.businessGoals }}</p>
                </div>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide text-primary-700">Key Responsibilities</h4>
                  <ul class="list-disc list-inside space-y-2 text-gray-700 ml-2">
                    <li *ngFor="let resp of exp.responsibilities" class="leading-relaxed">{{ resp }}</li>
                  </ul>
                </div>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide text-primary-700">Technical Stack</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      *ngFor="let tech of exp.stack"
                      class="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide text-primary-700">Key Achievements & Impact</h4>
                  <ul class="list-disc list-inside space-y-2 text-gray-700 ml-2">
                    <li *ngFor="let achievement of exp.achievements" class="leading-relaxed">{{ achievement }}</li>
                  </ul>
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-200">
                  <p class="text-sm font-medium text-gray-600">
                    <span class="text-primary-600 font-semibold">Impact: </span>
                    <span class="text-gray-700">{{ exp.impact }}</span>
                  </p>
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
export class ExperienceComponent {
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
