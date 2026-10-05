import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../directives/reveal.directive';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-what-i-do-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective],
  templateUrl: './what-i-do-section.component.html',
  styleUrls: ['./what-i-do-section.component.css']
})
export class WhatIDoSectionComponent {
  services: Service[] = [
    {
      title: 'frontendTitle',
      description: 'frontendDesc'
    },
    {
      title: 'backendTitle',
      description: 'backendDesc'
    },
    {
      title: 'devopsTitle',
      description: 'devopsDesc'
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
