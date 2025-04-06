import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { footerData } from './footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email: string = '';
  currentYear = new Date().getFullYear();
  footerData = footerData;

  onSubmit() {
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', this.email);
    this.email = '';
  }
} 