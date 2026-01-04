import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-20 lg:py-32 bg-white" id="about">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {{ 'about.title' | translate }}
          </h2>
          
          <div class="prose prose-lg max-w-none">
            <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-10 shadow-sm border border-gray-100">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                {{ 'about.name' | translate }}
              </h3>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>{{ 'about.role' | translate }}</strong> based in {{ 'about.location' | translate }}, specialized in enterprise application development and robust DevOps pipeline implementation.
              </p>
              <p class="text-gray-700 mb-0 leading-relaxed">
                {{ 'about.paragraph1' | translate }}
              </p>
            </div>
            
            <div class="space-y-8">
              <div class="bg-white rounded-lg p-6 border-l-4 border-primary-500 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ 'about.expertiseTitle' | translate }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ 'about.expertiseDesc' | translate }}
                </p>
              </div>
              
              <div class="bg-white rounded-lg p-6 border-l-4 border-primary-500 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ 'about.devopsTitle' | translate }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ 'about.devopsDesc' | translate }}
                </p>
              </div>
              
              <div class="bg-white rounded-lg p-6 border-l-4 border-primary-500 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ 'about.productTitle' | translate }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ 'about.productDesc' | translate }}
                </p>
              </div>
              
              <div class="bg-white rounded-lg p-6 border-l-4 border-primary-500 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ 'about.missionsTitle' | translate }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ 'about.missionsDesc' | translate }}
                </p>
              </div>
            </div>
            
            <div class="mt-12 bg-primary-50 rounded-lg p-8 border-l-4 border-primary-600 shadow-sm">
              <p class="text-gray-800 font-semibold mb-3 text-lg">
                {{ 'about.availableTitle' | translate }}
              </p>
              <p class="text-gray-700 leading-relaxed">
                {{ 'about.availableDesc' | translate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}
