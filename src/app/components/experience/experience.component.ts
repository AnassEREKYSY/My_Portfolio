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
  templateUrl: './experience.component.html'
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
