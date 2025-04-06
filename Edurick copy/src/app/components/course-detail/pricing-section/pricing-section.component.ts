import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingTier {
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  sessions: number;
  modules: string[];
  certifications: string[];
}

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PricingSectionComponent implements AfterViewInit {
  @ViewChild('pricingGrid') pricingGrid!: ElementRef;
  @Input() pricingTiers: PricingTier[] = [];
  @Input() selectedTier: string = '';
  @Output() selectTier = new EventEmitter<string>();
  @Output() scrollToBooking = new EventEmitter<void>();

  currentPricingSlide = 0;
  isMobile = window.innerWidth <= 768;
  isScrolling = false;
  scrollTimeout: any;

  ngAfterViewInit(): void {
    if (this.isMobile) {
      this.setupPricingScroll();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  setupPricingScroll() {
    const grid = this.pricingGrid.nativeElement;
    grid.addEventListener('scroll', () => {
      if (!this.isScrolling) {
        this.isScrolling = true;
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        this.scrollTimeout = setTimeout(() => {
          const scrollPosition = grid.scrollLeft;
          const cardWidth = grid.offsetWidth;
          this.currentPricingSlide = Math.round(scrollPosition / cardWidth);
          this.isScrolling = false;
        }, 100);
      }
    });
  }

  scrollToSlide(index: number) {
    if (!this.pricingGrid) return;
    
    const grid = this.pricingGrid.nativeElement;
    const cardWidth = grid.offsetWidth;
    grid.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
    this.currentPricingSlide = index;
  }

  onSelectTier(tierName: string): void {
    this.selectTier.emit(tierName);
  }

  onScrollToBooking(): void {
    this.scrollToBooking.emit();
  }
} 