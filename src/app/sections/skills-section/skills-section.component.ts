import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="skills">
      <div class="section-container">
        <div class="max-w-6xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Skills & Tooling
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              Technical expertise and tools I use to build reliable, scalable applications
            </p>
          </div>
          
          <!-- Skills grid -->
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              *ngFor="let category of skillCategories"
              class="card-base p-6 hover-lift"
            >
              <h3 class="text-lg font-bold text-text-primary mb-5 flex items-center">
                <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                {{ category.name }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let skill of category.skills"
                  class="px-3 py-1.5 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Methodologies -->
          <div class="mt-16 card-base p-10">
            <h3 class="text-2xl font-bold text-text-primary mb-8 text-center">
              Methodologies & Practices
            </h3>
            <div class="flex flex-wrap justify-center gap-3">
              <span
                *ngFor="let methodology of methodologies"
                class="px-4 py-2 bg-dark-muted/50 text-text-secondary rounded-full text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors border border-dark-border"
              >
                {{ methodology }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsSectionComponent {
    skillCategories: SkillCategory[] = [
      {
        name: 'Frontend',
        skills: [
          'Angular',
          'TypeScript',
          'RxJS',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Bootstrap',
          'Responsive Design',
          'Ionic (basic)',
          'PWA concepts'
        ]
      },
      {
        name: 'Backend',
        skills: [
          '.NET',
          '.NET Core',
          '.NET Framework',
          'C#',
          'Node.js',
          'REST APIs',
          'GraphQL',
          'ASP.NET Core',
          'Express.js',
          'Authentication & Authorization'
        ]
      },
      {
        name: 'DevOps & Cloud',
        skills: [
          'Docker',
          'CI/CD',
          'Azure DevOps',
          'GitLab CI',
          'GitHub Actions',
          'Jenkins',
          'AWS',
          'Azure',
          'Terraform',
          'Kubernetes',
          'Ansible',
          'Docker',
          'Prometheus',
          'Grafana',
          'OVH Hosting',
          'Linux',
          'Nginx',
          'Shell / Bash'
        ]
      },
      {
        name: 'QA & Testing',
        skills: [
          'Jest',
          'Jasmine',
          'Cypress',
          'Selenium',
          'Playwright',
          'Unit Testing',
          'Integration Testing',
          'E2E Testing',
          'Test Automation'
        ]
      },
      {
        name: 'Databases',
        skills: [
          'SQL Server',
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'Firebase',
          'Database Design',
          'Query Optimization',
          'Entity Framework'
        ]
      },
      {
        name: 'Architecture & Design',
        skills: [
          'Clean Architecture',
          'SOLID Principles',
          'Layered Architecture',
          'Design Patterns',
          'UML',
          'Merise'
        ]
      },
      {
        name: 'Tools & Collaboration',
        skills: [
          'Git',
          'Visual Studio',
          'VS Code',
          'Postman',
          'Swagger',
          'Notion',
          'Jira',
          'Mantis'
        ]
      }
    ];
  
    methodologies: string[] = [
      'Agile / Scrum',
      'V-Model',
      'SAFe (basic)',
      'Code Review',
      'Documentation',
      'User Stories',
      'DoR / DoD',
      'RACI',
      'RICE'
    ];
  }
  

