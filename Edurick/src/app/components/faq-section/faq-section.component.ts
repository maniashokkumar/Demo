import { Component } from '@angular/core';
interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  faqItems: FaqItem[] = [
    {
      question: 'What is the day-to-day schedule like?',
      answer: 'The school day is a mix of scheduled, live classes with instruction from certified teachers, assignments and practice skills that students complete at their own pace, and breaks to fit in social activities or other needs.',
      isOpen: true
    },
    {
      question: 'What is my involvement as a parent or guardian?',
      answer: 'As a parent or guardian, you will need to provide support, ensure your student attends classes, help them stay organized, and communicate with teachers as needed.',
      isOpen: false
    },
    {
      question: 'What materials are sent to me?',
      answer: 'You will receive all necessary learning materials, including textbooks, workbooks, and access to online resources. Some specific supplies may also be provided depending on the courses.',
      isOpen: false
    },
    {
      question: 'How do I enroll my student?',
      answer: 'To enroll your student, complete the online application form, submit required documentation such as proof of residence and birth certificate, and participate in an orientation session.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
