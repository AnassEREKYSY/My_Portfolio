import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../directives/reveal.directive';
import { TranslationService } from '../../services/translation.service';

interface Skill {
  name: string;
  logoUrl?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  private translationService = inject(TranslationService);

  get skillCategories(): SkillCategory[] {
    const createSkill = (name: string): Skill => ({ name });

    return [
      {
        name: this.translationService.translate('skills.frontendCategory'),
        skills: [
          createSkill('React'),
          createSkill('Next.js'),
          createSkill('Angular'),
          createSkill('Angular 19'),
          createSkill('TypeScript'),
          createSkill('JavaScript'),
          createSkill('jQuery'),
          createSkill('RxJS'),
          createSkill('HTML5'),
          createSkill('CSS3'),
          createSkill('Tailwind CSS'),
          createSkill('Bootstrap'),
          { name: this.translationService.translate('skills.responsiveDesign'), logoUrl: '' },
          createSkill('Ionic'),
          { name: this.translationService.translate('skills.pwaConcepts'), logoUrl: '' }
        ]
      },
      {
        name: this.translationService.translate('skills.backendCategory'),
        skills: [
          createSkill('.NET'),
          createSkill('C#'),
          createSkill('ASP.NET Core Web API'),
          createSkill('Node.js'),
          createSkill('Express.js'),
          createSkill('Laravel'),
          createSkill('PHP'),
          createSkill('.NET 8'),
          createSkill('.NET Core'),
          createSkill('.NET Framework'),
          createSkill('ASP.NET MVC'),
          createSkill('Razor'),
          createSkill('Python'),
          createSkill('GraphQL'),
          { name: this.translationService.translate('skills.restAPIs'), logoUrl: '' },
          { name: this.translationService.translate('skills.authAuth'), logoUrl: '' },
          createSkill('Stripe'),
          createSkill('Keycloak')
        ]
      },
      {
        name: this.translationService.translate('skills.databasesCategory'),
        skills: [
          createSkill('SQL Server'),
          createSkill('T-SQL'),
          { name: 'Stored Procedures', logoUrl: '' },
          { name: 'SSMS', logoUrl: '' },
          createSkill('PostgreSQL'),
          createSkill('Supabase'),
          createSkill('MongoDB'),
          createSkill('Redis'),
          createSkill('MySQL'),
          { name: this.translationService.translate('skills.databaseDesign'), logoUrl: '' },
          { name: this.translationService.translate('skills.queryOptimization'), logoUrl: '' }
        ]
      },
      {
        name: this.translationService.translate('skills.devopsCloudCategory'),
        skills: [
          createSkill('Docker'),
          { name: 'CI/CD', logoUrl: '' },
          createSkill('Azure DevOps'),
          createSkill('Git'),
          createSkill('GitHub Actions'),
          createSkill('GitLab CI'),
          createSkill('Vercel'),
          createSkill('Azure'),
          createSkill('AWS'),
          createSkill('Nginx'),
          createSkill('Linux'),
          { name: this.translationService.translate('skills.shellBash'), logoUrl: '' }
        ]
      },
      {
        name: this.translationService.translate('skills.qaTestingCategory'),
        skills: [
          createSkill('Jest'),
          createSkill('Playwright'),
          createSkill('Cypress'),
          createSkill('Jasmine'),
          createSkill('Selenium'),
          { name: this.translationService.translate('skills.unitTesting'), logoUrl: '' },
          { name: this.translationService.translate('skills.integrationTesting'), logoUrl: '' },
          { name: this.translationService.translate('skills.e2eTesting'), logoUrl: '' },
          { name: this.translationService.translate('skills.testAutomation'), logoUrl: '' }
        ]
      },
      {
        name: this.translationService.translate('skills.architectureDesignCategory'),
        skills: [
          { name: 'Clean Architecture', logoUrl: '' },
          { name: 'SOLID Principles', logoUrl: '' },
          { name: 'Layered Architecture', logoUrl: '' },
          { name: 'Design Patterns', logoUrl: '' },
          { name: 'DDD (Domain-Driven Design)', logoUrl: '' },
          { name: 'TDD (Test-Driven Development)', logoUrl: '' },
          { name: 'BDD (Behavior-Driven Development)', logoUrl: '' },
          { name: 'UML', logoUrl: '' },
          { name: 'Merise', logoUrl: '' }
        ]
      },
      {
        name: this.translationService.translate('skills.toolsCollaborationCategory'),
        skills: [
          createSkill('Jira'),
          createSkill('VS Code'),
          createSkill('Visual Studio'),
          createSkill('Postman'),
          createSkill('Swagger'),
          createSkill('Notion')
        ]
      }
    ];
  }

  trackByCategoryName(index: number, category: SkillCategory): string {
    return category.name;
  }

  trackBySkillName(index: number, skill: Skill): string {
    return skill.name;
  }

  get methodologies(): string[] {
    return [
      this.translationService.translate('skills.agileScrum'),
      this.translationService.translate('skills.vModel'),
      this.translationService.translate('skills.safeBasic'),
      this.translationService.translate('skills.codeReview'),
      this.translationService.translate('skills.documentation'),
      this.translationService.translate('skills.userStories'),
      this.translationService.translate('skills.dorDod'),
      this.translationService.translate('skills.raci'),
      this.translationService.translate('skills.rice'),
      'Debugging',
      'Performance Optimization',
      'Security',
      'Maintainability'
    ];
  }
}