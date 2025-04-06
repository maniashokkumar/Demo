import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPopupComponent } from '../../registration-popup/registration-popup.component';

@Component({
  selector: 'app-floating-book-button',
  templateUrl: './floating-book-button.component.html',
  styleUrls: ['./floating-book-button.component.scss'],
  standalone: true,
  imports: [CommonModule, RegistrationPopupComponent]
})
export class FloatingBookButtonComponent {
  isVisible = false;
  isRegistrationPopupOpen = false;

  courseDetails = {
    name: 'STEM Education Certification',
    description: 'Transform your teaching career with our comprehensive STEM certification program.'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when user scrolls more than 100px
    this.isVisible = window.scrollY > 100;
  }

  openRegistrationPopup() {
    this.isRegistrationPopupOpen = true;
  }

  closeRegistrationPopup() {
    this.isRegistrationPopupOpen = false;
  }

  handleRegistrationSubmit(formData: any) {
    console.log('Registration form submitted:', formData);
    // Here you would typically send the data to your backend
    this.closeRegistrationPopup();
  }
} 