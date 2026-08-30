import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero/hero-section.component';
import { WhatIDoSectionComponent } from '../../components/what-i-do/what-i-do-section.component';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { EducationSectionComponent } from '../../components/education/education-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { HowIWorkSectionComponent } from '../../components/how-i-work/how-i-work-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { ThemeControlsComponent } from '../../components/theme-controls/theme-controls.component';
import { LanguageToggleComponent } from '../../components/language-toggle/language-toggle.component';
import { TranslationService } from '../../services/translation.service';
import { translations } from '../../translations';
import { portfolioContentOverrides } from '../../portfolio-content-overrides';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeroSectionComponent,
    WhatIDoSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    HowIWorkSectionComponent,
    ContactSectionComponent,
    ThemeControlsComponent,
    LanguageToggleComponent
  ],
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
  private translationService = inject(TranslationService);

  ngOnInit(): void {
    this.translationService.registerTranslations('en', translations.en);
    this.translationService.registerTranslations('fr', translations.fr);
    this.translationService.registerTranslations('en', portfolioContentOverrides.en);
    this.translationService.registerTranslations('fr', portfolioContentOverrides.fr);

    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.translationService.currentLang;
    }
  }
}
