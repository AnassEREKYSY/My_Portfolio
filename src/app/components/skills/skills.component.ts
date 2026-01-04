import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-20 lg:py-32 bg-gray-50" id="skills">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ 'skills.title' | translate }}
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ 'skills.subtitle' | translate }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              *ngFor="let category of skillCategories"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-5 flex items-center">
                <span class="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>
                {{ category.name }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let skill of category.skills"
                  class="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              Methodologies & Tools
            </h3>
            <div class="flex flex-wrap justify-center gap-3">
              <span
                *ngFor="let methodology of methodologies"
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-200"
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
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'PWA', 'Ionic']
    },
    {
      name: 'Backend',
      skills: ['.NET Core', '.NET Framework', 'C#', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices', 'ASP.NET', 'Express.js']
    },
    {
      name: 'DevOps & Cloud',
      skills: ['Docker', 'CI/CD', 'Azure DevOps', 'GitLab CI', 'Azure', 'AWS', 'Linux', 'Nginx', 'Kubernetes', 'Terraform']
    },
    {
      name: 'QA & Testing',
      skills: ['Jest', 'Jasmine', 'Cypress', 'Selenium', 'Unit Testing', 'E2E Testing', 'Test Automation', 'Integration Testing', 'Mocking']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization', 'Entity Framework', 'Mongoose']
    },
    {
      name: 'Architecture & Methodologies',
      skills: ['Clean Architecture', 'SOLID Principles', 'Design Patterns', 'Microservices', 'Event-Driven Architecture', 'Domain-Driven Design']
    },
    {
      name: 'Tools & Others',
      skills: ['Git', 'PowerShell', 'Bash', 'VS Code', 'Visual Studio', 'Postman', 'Swagger', 'JIRA', 'Confluence']
    }
  ];

  methodologies: string[] = [
    'Agile/Scrum',
    'TDD',
    'Clean Architecture',
    'SOLID Principles',
    'Design Patterns',
    'Code Review',
    'Documentation',
    'Pair Programming',
    'Continuous Integration',
    'Continuous Deployment'
  ];
}
