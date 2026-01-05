import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { WhatIDoSectionComponent } from '../../sections/what-i-do-section/what-i-do-section.component';
import { ExperienceSectionComponent } from '../../sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../../sections/projects-section/projects-section.component';
import { SkillsSectionComponent } from '../../sections/skills-section/skills-section.component';
import { HowIWorkSectionComponent } from '../../sections/how-i-work-section/how-i-work-section.component';
import { ContactSectionComponent } from '../../sections/contact-section/contact-section.component';
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
    SkillsSectionComponent,
    HowIWorkSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-dark-bg">
      <app-header></app-header>
      <main id="main-content" class="flex-grow" role="main">
        <app-hero-section></app-hero-section>
        <app-what-i-do-section></app-what-i-do-section>
        <app-experience-section></app-experience-section>
        <app-projects-section></app-projects-section>
        <app-skills-section></app-skills-section>
        <app-how-i-work-section></app-how-i-work-section>
        <app-contact-section></app-contact-section>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
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

