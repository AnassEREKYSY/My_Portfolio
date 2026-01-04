import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  highlights: string[];
  role: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-20 lg:py-32 bg-white" id="projects">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ 'projects.title' | translate }}
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ 'projects.subtitle' | translate }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article
              *ngFor="let project of projects"
              class="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col transform hover:-translate-y-1"
            >
              <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.name }}</h3>
                <p class="text-gray-700 mb-5 leading-relaxed flex-grow">{{ project.description }}</p>
                
                <div class="mb-5">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-primary-700">{{ 'projects.problem' | translate }}</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ project.problem }}</p>
                </div>
                
                <div class="mb-5">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-primary-700">{{ 'projects.solution' | translate }}</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ project.solution }}</p>
                </div>
                
                <div class="mb-5">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide text-primary-700">{{ 'projects.stack' | translate }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      *ngFor="let tech of project.stack"
                      class="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div class="mb-5">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-primary-700">{{ 'projects.features' | translate }}</h4>
                  <ul class="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-1">
                    <li *ngFor="let feature of project.features" class="leading-relaxed">{{ feature }}</li>
                  </ul>
                </div>
                
                <div class="mb-5">
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-primary-700">{{ 'projects.highlights' | translate }}</h4>
                  <ul class="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-1">
                    <li *ngFor="let highlight of project.highlights" class="leading-relaxed">{{ highlight }}</li>
                  </ul>
                </div>
                
                <div class="pt-5 mt-auto border-t border-gray-200">
                  <p class="text-sm text-gray-600">
                    <span class="font-semibold text-gray-900">{{ 'projects.role' | translate }}: </span>{{ project.role }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'PayChase',
      description: 'Secure payment platform for businesses with multi-currency management and advanced reporting.',
      problem: 'Need for a unified payment solution to manage international transactions with regulatory compliance and real-time reporting.',
      solution: 'Full-stack application with secure REST API, integration of multiple payment processors, analytical dashboard and notification system.',
      stack: ['Angular', '.NET Core', 'PostgreSQL', 'Stripe API', 'Docker', 'Azure', 'Jest', 'Cypress', 'Azure DevOps'],
      features: [
        'Multi-currency management and automatic conversion',
        'Real-time analytical dashboard',
        'Stripe and PayPal integration',
        'Notification and alert system',
        'Report export (PDF, Excel)',
        'Refund and dispute management'
      ],
      highlights: [
        'Microservices architecture with asynchronous communication',
        'End-to-end encryption of sensitive data',
        'Automated tests with >85% coverage (unit, integration, E2E)',
        'CI/CD pipeline with automated deployment',
        'Centralized monitoring and logging with Azure Application Insights',
        'API rate limiting and security best practices'
      ],
      role: 'Lead Developer - Architecture design, backend/frontend development, DevOps implementation'
    },
    {
      name: 'YallaPay',
      description: 'Mobile and web peer-to-peer money transfer application with multi-country support.',
      problem: 'Create a fast, secure and accessible money transfer solution for international users with support for multiple payment methods.',
      solution: 'Progressive Web App (PWA) with scalable backend, integration of local payment services, KYC verification system and intuitive user interface.',
      stack: ['Angular', 'Ionic', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Twilio', 'Docker', 'GitLab CI'],
      features: [
        'Instant transfers between users',
        'Support for multiple currencies and countries',
        'Integrated identity verification (KYC)',
        'Transaction history',
        'Real-time push notifications',
        'Referral and rewards system'
      ],
      highlights: [
        'PWA with offline mode and synchronization',
        'Event-driven architecture for scalability',
        'Redis cache for optimal performance',
        'Integration of local payment services',
        'E2E tests with Cypress',
        'CI/CD pipeline with automated testing and deployment'
      ],
      role: 'Full Stack Developer - Complete development, integrations, performance optimization'
    },
    {
      name: 'Melodify',
      description: 'Music streaming platform with AI recommendations and collaborative playlist creation.',
      problem: 'Develop a streaming platform with personalized recommendation algorithms and advanced social features.',
      solution: 'Responsive web application with REST API, ML-based recommendation system, optimized audio streaming and social features.',
      stack: ['Angular', '.NET Core', 'PostgreSQL', 'Redis', 'FFmpeg', 'TensorFlow.js', 'Docker', 'Azure', 'Jest'],
      features: [
        'High-quality audio streaming',
        'ML-based personalized recommendations',
        'Collaborative playlists',
        'New artist discovery',
        'Favorites and personal library system',
        'Social sharing and integrations'
      ],
      highlights: [
        'Streaming optimization with intelligent buffering',
        'Custom recommendation algorithm using machine learning',
        'Real-time audio processing with FFmpeg',
        'Redis cache for latency reduction',
        'Scalable architecture for millions of users',
        'Automated testing strategy with high coverage'
      ],
      role: 'Senior Developer - Backend architecture, recommendation algorithms, streaming optimization'
    },
    {
      name: 'CoinHawk',
      description: 'Cryptocurrency trading platform with advanced technical analysis and portfolio management.',
      problem: 'Create a trading platform with technical analysis tools, portfolio management and fast order execution.',
      solution: 'Web application with WebSocket for real-time data, exchange integration, graphical analysis tools and notification system.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'WebSocket', 'Chart.js', 'Docker', 'AWS', 'Jest'],
      features: [
        'Real-time trading with WebSocket',
        'Advanced technical analysis charts',
        'Multi-exchange portfolio management',
        'Customized price alerts',
        'Transaction history',
        'P&L calculation and statistics'
      ],
      highlights: [
        'WebSocket for ultra-fast real-time data',
        'Integration of multiple exchanges (Binance, Coinbase)',
        'Complex financial calculations server-side',
        'Performance optimization for minimal latency',
        'Security system with 2FA',
        'Automated testing and CI/CD pipeline'
      ],
      role: 'Full Stack Developer - Real-time architecture, exchange integrations, UI/UX design'
    },
    {
      name: 'RaiseUp',
      description: 'Crowdfunding platform for startups with campaign management and analytics.',
      problem: 'Develop a platform allowing startups to raise funds with campaign tracking, analytics and investor management.',
      solution: 'Complete application with campaign system, payment management, analytics dashboard and investor communication tools.',
      stack: ['Angular', '.NET Core', 'SQL Server', 'Stripe', 'SendGrid', 'Azure', 'Power BI', 'Docker', 'Azure DevOps'],
      features: [
        'Campaign creation and funding management',
        'Secure payment system',
        'Analytics dashboard for project owners',
        'Investor management and communications',
        'Data reporting and export',
        'Multi-channel notification system'
      ],
      highlights: [
        'Modular architecture for extensibility',
        'Integration of secure payment services',
        'Real-time analytics with Power BI',
        'Workflow system for campaign validation',
        'Comprehensive automated tests',
        'CI/CD pipeline with automated deployments'
      ],
      role: 'Lead Developer - Architecture design, full-stack development, third-party integrations'
    },
    {
      name: 'Skinet',
      description: 'Skincare products e-commerce with personalized recommendations and routine tracking.',
      problem: 'Create an e-commerce platform with skin type-based recommendation system, routine tracking and optimal user experience.',
      solution: 'Complete e-commerce application with diagnostic quiz, AI recommendations, order management and personalized routine tracking.',
      stack: ['Angular', '.NET Core', 'PostgreSQL', 'Stripe', 'SendGrid', 'Docker', 'Azure', 'Jest'],
      features: [
        'Skin type diagnostic quiz',
        'Personalized product recommendations',
        'Shopping cart and secure checkout',
        'Skincare routine tracking',
        'Review and rating system',
        'Loyalty program'
      ],
      highlights: [
        'ML-based recommendation algorithm',
        'SEO optimization for natural search ranking',
        'Stripe integration for secure payments',
        'Transactional notification system',
        'Advanced e-commerce analytics',
        'Automated testing and CI/CD implementation'
      ],
      role: 'Full Stack Developer - E-commerce development, recommendation system, conversion optimization'
    },
    {
      name: 'ShowTracker',
      description: 'TV series tracking application with recommendations and content discovery.',
      problem: 'Develop an application allowing users to track their favorite series, discover new content and receive recommendations.',
      solution: 'Web and mobile application with content API integration, recommendation system, episode tracking and social features.',
      stack: ['Angular', 'Ionic', 'Node.js', 'MongoDB', 'TMDB API', 'Firebase', 'Docker', 'Jest'],
      features: [
        'Episode and series tracking',
        'Personalized recommendations',
        'New content discovery',
        'Favorites and watchlist',
        'Integration with streaming APIs',
        'Social features (sharing, reviews)'
      ],
      highlights: [
        'Integration of multiple content APIs (TMDB)',
        'Caching system for performance',
        'PWA with offline mode',
        'User preference-based recommendations',
        'Intuitive and responsive user interface',
        'Automated testing and deployment pipeline'
      ],
      role: 'Full Stack Developer - Complete development, API integrations, UX optimization'
    }
  ];
}
