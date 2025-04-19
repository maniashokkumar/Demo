import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-popup',
  templateUrl: './enquiry-popup.component.html',
  styleUrls: ['./enquiry-popup.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EnquiryPopupComponent {
  @Input() selectedProperty: any;
  @Output() close = new EventEmitter<void>();

  enquiryForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.enquiryForm.valid) {
      console.log('Form submitted:', {
        ...this.enquiryForm.value,
        propertyType: this.selectedProperty.title
      });
      this.closePopup();
    }
  }

  closePopup() {
    this.close.emit();
  }

  get f() {
    return this.enquiryForm.controls;
  }
}
