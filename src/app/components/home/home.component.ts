import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  template: `
    <section class="bg-gradient-to-br from-gray-50 to-white py-24 lg:py-36" id="home">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            {{ 'home.title' | translate }}
            <span class="block text-primary-600 mt-3">{{ 'home.subtitle' | translate }}</span>
          </h1>
          
          <p class="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            {{ 'home.description' | translate }}
          </p>
          
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <div class="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">{{ 'home.backend' | translate }}</span>
              <p class="text-lg font-bold text-primary-600 mt-1">{{ 'home.backendTech' | translate }}</p>
            </div>
            <div class="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">{{ 'home.frontend' | translate }}</span>
              <p class="text-lg font-bold text-primary-600 mt-1">{{ 'home.frontendTech' | translate }}</p>
            </div>
            <div class="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">{{ 'home.devops' | translate }}</span>
              <p class="text-lg font-bold text-primary-600 mt-1">{{ 'home.devopsTech' | translate }}</p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              routerLink="/projects"
              class="inline-flex items-center justify-center px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {{ 'home.viewProjects' | translate }}
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a
              routerLink="/contact"
              class="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 hover:shadow-md"
            >
              {{ 'home.contactMe' | translate }}
            </a>
          </div>
          
          <div class="mt-16 pt-8 border-t border-gray-200">
            <p class="text-sm font-medium text-gray-700 mb-4">{{ 'home.availableFor' | translate }}:</p>
            <p class="text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              {{ 'home.positioning' | translate }}
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <span class="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">{{ 'home.shortTerm' | translate }}</span>
              <span class="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">{{ 'home.longTerm' | translate }}</span>
              <span class="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">{{ 'home.location' | translate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Quick Stats Section -->
    <section class="bg-white py-20 border-t border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-4">
            <div class="text-5xl font-bold text-primary-600 mb-2">{{ 'home.yearsExp' | translate }}</div>
            <div class="text-gray-600 font-medium">{{ 'home.yearsLabel' | translate }}</div>
          </div>
          <div class="p-4">
            <div class="text-5xl font-bold text-primary-600 mb-2">{{ 'home.projectsDelivered' | translate }}</div>
            <div class="text-gray-600 font-medium">{{ 'home.projectsLabel' | translate }}</div>
          </div>
          <div class="p-4">
            <div class="text-5xl font-bold text-primary-600 mb-2">{{ 'home.technologies' | translate }}</div>
            <div class="text-gray-600 font-medium">{{ 'home.techLabel' | translate }}</div>
          </div>
          <div class="p-4">
            <div class="text-5xl font-bold text-primary-600 mb-2">{{ 'home.quality' | translate }}</div>
            <div class="text-gray-600 font-medium">{{ 'home.qualityLabel' | translate }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {}
