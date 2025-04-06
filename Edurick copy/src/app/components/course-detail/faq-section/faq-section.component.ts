import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FAQSectionComponent {
  @Input() faqs: FAQ[] = [];
} 