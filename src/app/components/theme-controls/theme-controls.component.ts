import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-controls.component.html'
})
export class ThemeControlsComponent {
  themeService = inject(ThemeService);
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

