import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegistrationPopupComponent implements OnInit {
  @Input() isOpen = false;
  @Input() courseName: any;
  @Input() courseDescription: any;
  @Input() selectedDate: any;
  @Input() originalPrice:any;
  @Input() currentPrice: any;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      termsAccepted: [false, Validators.requiredTrue],
      privacyAccepted: [false, Validators.requiredTrue],
      newsletterSubscription: [false],
      courseName: [''],
      selectedDate: [''],
      originalPrice: [''],
      currentPrice: ['']
    });
  }

  ngOnInit() {
    this.registrationForm.patchValue({
      courseName: this.courseName,
      selectedDate: this.selectedDate,
      originalPrice: this.originalPrice,
      currentPrice: this.currentPrice
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submit.emit(this.registrationForm.value);
    }
  }

  closePopup() {
    this.close.emit();
  }

  // Prevent click propagation from popup content
  onPopupClick(event: Event) {
    event.stopPropagation();
  }
} 