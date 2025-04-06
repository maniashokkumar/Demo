import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingTier {
  name: string;
  modules: string[];
}

@Component({
  selector: 'app-curriculum-section',
  templateUrl: './curriculum-section.component.html',
  styleUrls: ['./curriculum-section.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CurriculumSectionComponent {
  @Input() pricingTiers: PricingTier[] = [];
  @Input() selectedTier: string = '';

  getSelectedTierModules(): string[] {
    const selectedTier = this.pricingTiers.find(tier => tier.name === this.selectedTier);
    return selectedTier ? selectedTier.modules : [];
  }
} 