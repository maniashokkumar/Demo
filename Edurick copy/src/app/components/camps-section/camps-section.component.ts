import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RegistrationPopupComponent } from '../registration-popup/registration-popup.component';

interface Lesson {
  day: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  expanded?: boolean;
}

interface Camp {
  title: string;
  image: string;
  originalPrice: string;
  currentPrice: string;
  skills: string[];
  description: string;
  duration: string;
  showLessons?: boolean;
  lessons: Lesson[];
  dateSlots: {
    dateInfo: string;
  }[];
}

interface CampsData {
  sectionTitle: string;
  grades: string[];
  camps: Camp[];
}

@Component({
  selector: 'app-camps-section',
  templateUrl: './camps-section.component.html',
  styleUrls: ['./camps-section.component.scss'],
  standalone: true,
  imports: [CommonModule, RegistrationPopupComponent]
})
export class CampsSectionComponent implements OnInit {
  selectedGrade: string = 'All Grades';
  @Input() campsData: CampsData | undefined;
  
  isRegistrationPopupOpen = false;
  selectedCamp: Camp | null = null;
  selectedDate: string = '';

  ngOnInit() {
    if(this.campsData){
      console.log(this.campsData)
      this.campsData.camps.forEach(camp => {
        camp.showLessons = false;
        camp.lessons.forEach(lesson => {
          lesson.expanded = false;
        });
      });
    }
  }

  selectGrade(grade: string): void {
    this.selectedGrade = grade;
  }

  toggleLessons(camp: Camp): void {
    camp.showLessons = !camp.showLessons;
  }

  toggleLesson(lesson: Lesson): void {
    lesson.expanded = !lesson.expanded;
  }

  openRegistrationPopup(camp: Camp, dateInfo: string): void {
    this.selectedCamp = camp;
    this.selectedDate = dateInfo;
    this.isRegistrationPopupOpen = true;
  }

  closeRegistrationPopup(): void {
    this.isRegistrationPopupOpen = false;
    this.selectedCamp = null;
    this.selectedDate = '';
  }

  handleRegistrationSubmit(formData: any): void {
    console.log('Registration submitted:', formData);
    // Here you would typically send the form data to your backend
    this.closeRegistrationPopup();
  }
}
