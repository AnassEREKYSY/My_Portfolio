import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { WhatIDoSectionComponent } from '../../sections/what-i-do-section/what-i-do-section.component';
import { ExperienceSectionComponent } from '../../sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../../sections/projects-section/projects-section.component';
import { EducationSectionComponent } from '../../sections/education-section/education-section.component';
import { SkillsSectionComponent } from '../../sections/skills-section/skills-section.component';
import { HowIWorkSectionComponent } from '../../sections/how-i-work-section/how-i-work-section.component';
import { ContactSectionComponent } from '../../sections/contact-section/contact-section.component';
import { ThemeControlsComponent } from '../../components/theme-controls/theme-controls.component';
import { LanguageToggleComponent } from '../../components/language-toggle/language-toggle.component';
import { TranslationService } from '../../services/translation.service';
import { translations } from '../../translations';

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
    
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.translationService.currentLang;
    }
  }
}

