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
  templateUrl: './skills.component.html'
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
