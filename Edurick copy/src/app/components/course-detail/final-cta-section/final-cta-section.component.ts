import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-cta-section',
  templateUrl: './final-cta-section.component.html',
  styleUrls: ['./final-cta-section.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FinalCTASectionComponent {
  @Output() scrollToBooking = new EventEmitter<void>();

  onScrollToBooking(): void {
    this.scrollToBooking.emit();
  }
} 