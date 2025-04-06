import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">
      <div class="container">
        <h1>Contact Us</h1>
        <p class="subtitle">Get in touch with our team</p>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <i class="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>123 Education Street<br>Tech City, TC 12345</p>
            </div>

            <div class="info-card">
              <i class="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+1 (234) 567-8900</p>
            </div>

            <div class="info-card">
              <i class="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>info@edurick.com</p>
            </div>

            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                #name="ngModel"
                placeholder="Enter your full name"
              >
              <div class="error" *ngIf="name.invalid && (name.dirty || name.touched)">
                Please enter your name
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                #email="ngModel"
                placeholder="Enter your email address"
              >
              <div class="error" *ngIf="email.invalid && (email.dirty || email.touched)">
                Please enter a valid email address
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                required
                #subject="ngModel"
                placeholder="Enter subject"
              >
              <div class="error" *ngIf="subject.invalid && (subject.dirty || subject.touched)">
                Please enter a subject
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                #message="ngModel"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
              <div class="error" *ngIf="message.invalid && (message.dirty || message.touched)">
                Please enter your message
              </div>
            </div>

            <button type="submit" [disabled]="!contactForm.form.valid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    // TODO: Implement form submission
    console.log('Form submitted:', this.formData);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Message sent successfully! We will get back to you soon.');
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1500);
  }
} 