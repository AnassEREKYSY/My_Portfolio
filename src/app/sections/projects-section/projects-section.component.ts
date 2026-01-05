import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  highlights: string[];
  impact: string;
  role: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 lg:py-32 border-b border-dark-border" id="projects">
      <div class="section-container">
        <div class="max-w-7xl mx-auto">
          <!-- Section header -->
          <div class="text-center mb-20">
            <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Selected Projects
            </h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">
              Case studies of projects demonstrating engineering excellence and business impact
            </p>
          </div>
          
          <!-- Projects grid -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article
              *ngFor="let project of projects"
              class="card-base p-8 hover-lift flex flex-col"
            >
              <h3 class="text-2xl font-bold text-text-primary mb-4">{{ project.name }}</h3>
              <p class="text-text-secondary mb-6 leading-relaxed flex-grow">{{ project.description }}</p>
              
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Problem</h4>
                <p class="text-sm text-text-secondary leading-relaxed">{{ project.problem }}</p>
              </div>
              
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Solution</h4>
                <p class="text-sm text-text-secondary leading-relaxed">{{ project.solution }}</p>
              </div>
              
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">Technical Stack</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let tech of project.stack"
                    class="px-3 py-1.5 bg-dark-muted/50 text-text-secondary rounded border border-dark-border text-xs font-medium hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">Key Features</h4>
                <ul class="list-none space-y-2">
                  <li *ngFor="let feature of project.features" class="flex items-start">
                    <span class="text-accent mr-2 mt-1 flex-shrink-0 text-xs">▸</span>
                    <span class="text-sm text-text-secondary leading-relaxed">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">Technical Highlights</h4>
                <ul class="list-none space-y-2">
                  <li *ngFor="let highlight of project.highlights" class="flex items-start">
                    <span class="text-accent mr-2 mt-1 flex-shrink-0 text-xs">▸</span>
                    <span class="text-sm text-text-secondary leading-relaxed">{{ highlight }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="pt-6 mt-auto border-t border-dark-border space-y-2">
                <p class="text-sm text-text-secondary">
                  <span class="font-semibold text-text-primary">Role: </span>{{ project.role }}
                </p>
                <p class="text-sm text-text-muted italic">
                  {{ project.impact }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsSectionComponent {
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
      impact: 'Enabled businesses to process international payments securely with full compliance and real-time visibility.',
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
      impact: 'Delivered a scalable P2P payment solution supporting multiple countries and payment methods.',
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
      impact: 'Built a scalable streaming platform with intelligent recommendations and social features.',
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
      impact: 'Delivered a high-performance trading platform with real-time data and advanced analytics.',
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
      impact: 'Enabled startups to efficiently manage fundraising campaigns with comprehensive analytics.',
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
      impact: 'Built an intelligent e-commerce platform with personalized recommendations driving higher conversion rates.',
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
      impact: 'Created an engaging content discovery platform with personalized recommendations and social features.',
      role: 'Full Stack Developer - Complete development, API integrations, UX optimization'
    }
  ];
}

