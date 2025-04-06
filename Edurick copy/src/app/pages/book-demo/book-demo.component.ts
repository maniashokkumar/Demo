import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="book-demo">
      <div class="container">
        <h1>Book a Free Demo Class</h1>
        <p class="subtitle">Experience our teaching methodology and start your learning journey today</p>

        <form (ngSubmit)="onSubmit()" #demoForm="ngForm" class="demo-form">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              [(ngModel)]="formData.fullName"
              required
              #fullName="ngModel"
              placeholder="Enter your full name"
            >
            <div class="error" *ngIf="fullName.invalid && (fullName.dirty || fullName.touched)">
              Please enter your full name
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
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              [(ngModel)]="formData.phone"
              required
              #phone="ngModel"
              placeholder="Enter your phone number"
            >
            <div class="error" *ngIf="phone.invalid && (phone.dirty || phone.touched)">
              Please enter your phone number
            </div>
          </div>

          <div class="form-group">
            <label for="course">Preferred Course</label>
            <select
              id="course"
              name="course"
              [(ngModel)]="formData.course"
              required
              #course="ngModel"
            >
              <option value="">Select a course</option>
              <option *ngFor="let course of courses" [value]="course.id">
                {{ course.title }}
              </option>
            </select>
            <div class="error" *ngIf="course.invalid && (course.dirty || course.touched)">
              Please select a course
            </div>
          </div>

          <div class="form-group">
            <label for="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              [(ngModel)]="formData.date"
              required
              #date="ngModel"
              [min]="minDate"
            >
            <div class="error" *ngIf="date.invalid && (date.dirty || date.touched)">
              Please select a date
            </div>
          </div>

          <div class="form-group">
            <label for="time">Preferred Time</label>
            <select
              id="time"
              name="time"
              [(ngModel)]="formData.time"
              required
              #time="ngModel"
            >
              <option value="">Select a time slot</option>
              <option *ngFor="let slot of timeSlots" [value]="slot">
                {{ slot }}
              </option>
            </select>
            <div class="error" *ngIf="time.invalid && (time.dirty || time.touched)">
              Please select a time slot
            </div>
          </div>

          <div class="form-group">
            <label for="notes">Additional Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              [(ngModel)]="formData.notes"
              rows="4"
              placeholder="Any specific requirements or questions?"
            ></textarea>
          </div>

          <button type="submit" [disabled]="!demoForm.form.valid || isSubmitting">
            {{ isSubmitting ? 'Booking...' : 'Book My Demo' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./book-demo.component.scss']
})
export class BookDemoComponent {
  formData = {
    fullName: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    time: '',
    notes: ''
  };

  courses = [
    { id: 1, title: 'Introduction to Robotics' },
    { id: 2, title: 'IoT Fundamentals' },
    { id: 3, title: 'AI & Machine Learning' }
  ];

  timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM'
  ];

  minDate = new Date().toISOString().split('T')[0];
  isSubmitting = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    // TODO: Implement form submission
    console.log('Form submitted:', this.formData);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      // Show success message and redirect
      alert('Demo class booked successfully! We will contact you shortly.');
      this.router.navigate(['/']);
    }, 1500);
  }
} 