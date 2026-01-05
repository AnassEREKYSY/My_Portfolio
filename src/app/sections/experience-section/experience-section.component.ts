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
        role: 'Full Stack Developer (.NET / Angular) | DevOps',
        period: '09/2023 – 08/2025',
        location: 'Paris, France',
        context: 'Maintenance and evolution of an enterprise Angular/.NET subscription management portal in a finance-oriented environment.',
        businessGoals: 'Ensure application stability, improve delivery processes, and support long-term evolution of a critical business platform.',
        responsibilities: [
          'Maintain and evolve a production Angular frontend and .NET backend',
          'Implement CI/CD pipelines and DevOps practices to improve delivery reliability',
          'Introduce automated testing to improve code quality and reduce regressions',
          'Collaborate with functional teams to analyze requirements and deliver new features',
          'Participate in code reviews and contribute to technical best practices'
        ],
        stack: [
          'Angular',
          '.NET',
          'TypeScript',
          'SQL',
          'Docker',
          'Azure DevOps',
          'Jest',
          'Cypress'
        ],
        achievements: [
          'Improved deployment reliability through CI/CD automation',
          'Enhanced code quality and maintainability with automated testing',
          'Contributed to the long-term stability of a business-critical application'
        ],
        impact: 'Helped maintain a stable and reliable enterprise application while improving development workflows and delivery quality.'
      },
  
      {
        company: 'Dimo Maint',
        role: 'Full Stack Developer (.NET / Angular)',
        period: '04/2023 – 08/2023',
        location: 'Lyon, France',
        context: 'Migration of a CMMS (Computerized Maintenance Management System) from a legacy stack to Angular and .NET.',
        businessGoals: 'Modernize the application stack and industrialize the development workflow.',
        responsibilities: [
          'Participate in the migration of a legacy CMMS application to Angular and .NET',
          'Develop new frontend and backend features',
          'Industrialize the development workflow using Azure DevOps',
          'Contribute to codebase structuring and technical documentation',
          'Work closely with the team to ensure functional continuity during migration'
        ],
        stack: [
          'Angular',
          '.NET',
          'TypeScript',
          'SQL',
          'Azure DevOps'
        ],
        achievements: [
          'Successfully contributed to the migration toward a modern Angular/.NET stack',
          'Helped industrialize the development process with structured pipelines',
          'Improved maintainability and readability of the codebase'
        ],
        impact: 'Supported the modernization of a business application and improved the development lifecycle.'
      },
  
      {
        company: 'Préfecture de Meknès',
        role: 'Mobile Developer (Flutter)',
        period: '03/2022 – 06/2022',
        location: 'Meknès, Morocco',
        context: 'Development of a mobile application for internal mail management within a public institution.',
        businessGoals: 'Digitize and streamline internal mail processing.',
        responsibilities: [
          'Develop a mobile application using Flutter',
          'Design application architecture using Merise and UML models',
          'Implement core business features for mail tracking',
          'Collaborate with stakeholders to validate functional requirements'
        ],
        stack: [
          'Flutter',
          'Dart',
          'UML',
          'Merise'
        ],
        achievements: [
          'Delivered a functional mobile application adapted to institutional needs',
          'Provided clear technical documentation for future maintenance'
        ],
        impact: 'Contributed to the digitalization of internal processes within a public administration.'
      },
  
      {
        company: 'First Instance Court of Sidi Kacem',
        role: 'Web Developer (PHP)',
        period: '07/2021 – 09/2021',
        location: 'Sidi Kacem, Morocco',
        context: 'Assistance in the development of a case-session management web application for a court.',
        businessGoals: 'Improve the management and organization of court sessions.',
        responsibilities: [
          'Assist in the development of a web application using PHP and HTML/CSS',
          'Contribute to database modeling and business logic implementation',
          'Work closely with the main developer to deliver functional features',
          'Support testing and validation of application workflows'
        ],
        stack: [
          'PHP',
          'HTML',
          'CSS',
          'SQL'
        ],
        achievements: [
          'Contributed to a real institutional web application',
          'Gained experience in business-oriented and regulated environments'
        ],
        impact: 'Supported the delivery of a functional judicial application in a real-world institutional context.'
      }
    ];
  }
  

