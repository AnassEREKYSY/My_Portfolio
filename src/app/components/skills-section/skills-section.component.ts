import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
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
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  private translationService = inject(TranslationService);

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }

  private getLogoUrl(techName: string): string {
    const logoMap: Record<string, string> = {
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'Angular 19': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
      'RxJS': 'https://rxjs.dev/assets/images/logos/logo.png',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',

      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      '.NET Core': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      '.NET 8': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      '.NET Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      'ASP.NET Core': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      'ASP.NET Core Web API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      'ASP.NET MVC': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      'Razor': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Stripe': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg',
      'Keycloak': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/keycloak.svg',

      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Azure DevOps': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      'GitLab CI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      'GitHub Actions': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      'AWS': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazonaws.svg',
      'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
      'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
      'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',

      'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      'Playwright': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
      'Jasmine': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original.svg',
      'Cypress': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/cypress.svg',
      'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',

      'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'T-SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',

      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Visual Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      'Swagger': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
      'Notion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
      'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
    };

    return logoMap[techName] || '';
  }

  get skillCategories(): SkillCategory[] {
    const createSkill = (name: string): Skill => ({
      name,
      logoUrl: this.getLogoUrl(name)
    });

    return [
      {
        name: this.translationService.translate('skills.frontendCategory'),
        skills: [
          createSkill('Angular'),
          createSkill('Angular 19'),
          createSkill('React'),
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
          createSkill('.NET 8'),
          createSkill('.NET Core'),
          createSkill('.NET Framework'),
          createSkill('C#'),
          createSkill('ASP.NET Core Web API'),
          createSkill('ASP.NET MVC'),
          createSkill('Razor'),
          createSkill('Node.js'),
          createSkill('Express.js'),
          createSkill('Python'),
          createSkill('Laravel'),
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