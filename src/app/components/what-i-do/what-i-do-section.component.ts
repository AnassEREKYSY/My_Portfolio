import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-what-i-do-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './what-i-do-section.component.html'
})
export class WhatIDoSectionComponent {
  services: Service[] = [
    {
      title: 'frontendTitle',
      description: 'frontendDesc',
      icon: '⚡'
    },
    {
      title: 'backendTitle',
      description: 'backendDesc',
      icon: '🔧'
    },
    {
      title: 'devopsTitle',
      description: 'devopsDesc',
      icon: '🚀'
    }
  ];
}



