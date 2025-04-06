import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { RegistrationPopupComponent } from '../../registration-popup/registration-popup.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [CommonModule, VideoModalComponent, RegistrationPopupComponent]
})
export class HeroSectionComponent {
  @Input() courseTitle: string = '';
  @Input() courseDescription: string = '';
  @Output() openVideo = new EventEmitter<void>();

  isVideoModalOpen = false;
  isRegistrationPopupOpen = false;
  videoUrl = 'https://www.youtube.com/embed/your-video-id'; // Replace with your actual video URL

  courseDetails = {
    name: 'STEM Education Certification',
    description: 'Transform your teaching career with our comprehensive STEM certification program.'
  };

  openVideoModal(): void {
    this.isVideoModalOpen = true;
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false;
  }

  onOpenVideo(): void {
    this.openVideoModal();
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