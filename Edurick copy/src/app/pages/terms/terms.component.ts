import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="terms-page">
      <div class="container">
        <h1>Terms of Service</h1>
        <p class="last-updated">Last updated: {{ currentDate }}</p>

        <section class="terms-section">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing and using Edurick's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.</p>
        </section>

        <section class="terms-section">
          <h2>2. Use License</h2>
          <div class="license-content">
            <p>Permission is granted to temporarily access and use Edurick's services for personal, non-commercial purposes, subject to the following restrictions:</p>
            <ul>
              <li>You must not modify or copy the materials</li>
              <li>You must not use the materials for any commercial purpose</li>
              <li>You must not attempt to decompile or reverse engineer any software</li>
              <li>You must not remove any copyright or proprietary notations</li>
            </ul>
          </div>
        </section>

        <section class="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul class="responsibilities-list">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </section>

        <section class="terms-section">
          <h2>4. Course Content</h2>
          <p>All course content, materials, and resources provided through our services are protected by copyright and other intellectual property rights. You may not reproduce, distribute, or create derivative works without our explicit permission.</p>
        </section>

        <section class="terms-section">
          <h2>5. Payment Terms</h2>
          <div class="payment-terms">
            <p>By enrolling in our paid courses, you agree to:</p>
            <ul>
              <li>Pay all fees in accordance with the pricing established for the course</li>
              <li>Provide valid payment information</li>
              <li>Accept our refund policy</li>
              <li>Understand that prices are subject to change with notice</li>
            </ul>
          </div>
        </section>

        <section class="terms-section">
          <h2>6. Disclaimer</h2>
          <p>The materials on Edurick's website and services are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section class="terms-section">
          <h2>7. Contact Information</h2>
          <div class="contact-info">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p><i class="fas fa-envelope"></i> legal@edurick.com</p>
            <p><i class="fas fa-phone"></i> +1 (234) 567-8900</p>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
} 