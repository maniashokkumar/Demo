import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="faq-page">
      <div class="container">
        <h1>Frequently Asked Questions</h1>
        <p class="subtitle">Find answers to common questions about our services</p>

        <div class="faq-grid">
          <div class="faq-section">
            <h2>General Questions</h2>
            <div class="faq-item" *ngFor="let item of generalQuestions">
              <div class="faq-question" (click)="toggleQuestion(item)">
                <h3>{{ item.question }}</h3>
                <i class="fas" [class.fa-chevron-down]="!item.isOpen" [class.fa-chevron-up]="item.isOpen"></i>
              </div>
              <div class="faq-answer" [class.open]="item.isOpen">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <div class="faq-section">
            <h2>Course Related</h2>
            <div class="faq-item" *ngFor="let item of courseQuestions">
              <div class="faq-question" (click)="toggleQuestion(item)">
                <h3>{{ item.question }}</h3>
                <i class="fas" [class.fa-chevron-down]="!item.isOpen" [class.fa-chevron-up]="item.isOpen"></i>
              </div>
              <div class="faq-answer" [class.open]="item.isOpen">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <div class="faq-section">
            <h2>Payment & Pricing</h2>
            <div class="faq-item" *ngFor="let item of paymentQuestions">
              <div class="faq-question" (click)="toggleQuestion(item)">
                <h3>{{ item.question }}</h3>
                <i class="fas" [class.fa-chevron-down]="!item.isOpen" [class.fa-chevron-up]="item.isOpen"></i>
              </div>
              <div class="faq-answer" [class.open]="item.isOpen">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <h2>Still Have Questions?</h2>
          <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
          <a routerLink="/contact" class="contact-button">Get in Touch</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  generalQuestions = [
    {
      question: 'What is Edurick?',
      answer: 'Edurick is a mobile-first ed-tech platform specializing in STEM education, offering courses in robotics, IoT, coding, and AI.',
      isOpen: false
    },
    {
      question: 'How do I get started?',
      answer: 'You can start by booking a free demo class through our website. This will help you understand our teaching methodology and choose the right course for you.',
      isOpen: false
    },
    {
      question: 'Do you offer offline classes?',
      answer: 'Yes, we offer both online and offline classes. You can choose the mode that best suits your learning style and schedule.',
      isOpen: false
    }
  ];

  courseQuestions = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer courses in Robotics, IoT, Programming, and AI. Each course is designed with a practical, hands-on approach.',
      isOpen: false
    },
    {
      question: 'How long are the courses?',
      answer: 'Course duration varies from 8 to 12 weeks, depending on the complexity and depth of the subject matter.',
      isOpen: false
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, upon successful completion of any course, you will receive a certificate from Edurick.',
      isOpen: false
    }
  ];

  paymentQuestions = [
    {
      question: 'What are the payment options?',
      answer: 'We accept all major credit cards, debit cards, and UPI payments. We also offer EMI options for certain courses.',
      isOpen: false
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with our services.',
      isOpen: false
    },
    {
      question: 'Do you offer scholarships?',
      answer: 'Yes, we offer scholarships for meritorious students. Please contact our support team for more information.',
      isOpen: false
    }
  ];

  toggleQuestion(item: { isOpen: boolean }) {
    item.isOpen = !item.isOpen;
  }
} 