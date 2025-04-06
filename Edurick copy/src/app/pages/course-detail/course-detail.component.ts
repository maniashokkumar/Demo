import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// Course Detail Components
import { HeroSectionComponent } from '../../components/course-detail/hero-section/hero-section.component';
import { PricingSectionComponent } from '../../components/course-detail/pricing-section/pricing-section.component';
import { CurriculumSectionComponent } from '../../components/course-detail/curriculum-section/curriculum-section.component';
import { FAQSectionComponent } from '../../components/course-detail/faq-section/faq-section.component';
import { FinalCTASectionComponent } from '../../components/course-detail/final-cta-section/final-cta-section.component';
import { FloatingBookButtonComponent } from '../../components/course-detail/floating-book-button/floating-book-button.component';
import { VideoModalComponent } from '../../components/course-detail/video-modal/video-modal.component';

interface PricingTier {
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  sessions: number;
  modules: string[];
  certifications: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    PricingSectionComponent,
    CurriculumSectionComponent,
    FAQSectionComponent,
    FinalCTASectionComponent,
    FloatingBookButtonComponent,
    VideoModalComponent
  ]
})
export class CourseDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('pricingGrid') pricingGrid!: ElementRef;
  @ViewChild('bookingSection') bookingSection!: ElementRef;
  
  currentPricingSlide = 0;
  isMobile = window.innerWidth <= 768;
  isScrolling = false;
  scrollTimeout: any;

  courseTitle = 'Become a RoboMaster with Our Hands-On Robotics Course';
  courseDescription = 'Master robotics and build real-world projects from scratch';
  
  pricingTiers: PricingTier[] = [
    {
      name: 'RoboXplore',
      price: 89.01,
      originalPrice: 97.91,
      features: ['Basic robotics training', 'Online support', 'Project guidance'],
      sessions: 45,
      modules: ['Robotics Foundation', 'Fundamentals of AI & ML', 'AI & ML for Robots'],
      certifications: ['Emerging Innovator Leader']
    },
    {
      name: 'RoboXpert',
      price: 164.16,
      originalPrice: 180.55,
      features: ['Advanced robotics training', 'Priority support', 'Live mentoring'],
      sessions: 90,
      modules: ['Functional Robotics', 'Physical Computing', 'Interactive Mechatronics'],
      certifications: ['Emerging Innovator Leader', 'Young Mechatronics Master']
    },
    {
      name: 'RoboPremier',
      price: 273.60,
      originalPrice: 300.96,
      features: ['Premium robotics training', '24/7 support', 'Personal mentor'],
      sessions: 150,
      modules: ['Internet of Things', 'Sensory Systems', 'Home Automation'],
      certifications: ['Emerging Innovator Leader', 'Young Mechatronics Master', 'Junior IoT Engineer']
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'No prior experience is required. Our course is designed for beginners and gradually progresses to advanced concepts.'
    },
    {
      question: 'How long does it take to complete the course?',
      answer: 'The course duration varies based on the plan you choose, ranging from 45 to 150 live sessions.'
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, you will receive internationally recognized certifications based on your chosen plan.'
    },
    {
      question: 'What kind of projects will I build?',
      answer: 'You will work on real-world robotics projects including autonomous robots, smart home systems, and IoT applications.'
    }
  ];

  selectedTier: string = 'RoboXpert';
  isVideoModalOpen = false;

  constructor() { }

  ngOnInit(): void { }

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

  selectTier(tierName: string): void {
    this.selectedTier = tierName;
  }

  openVideoModal(): void {
    this.isVideoModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  scrollToBooking(): void {
    this.bookingSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
