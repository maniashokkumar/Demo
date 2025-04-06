import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramCardComponent } from '../../components/program-card/program-card.component';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';
import { NavCardsComponent } from 'src/app/components/nav-cards/nav-cards.component';
import { TestmonialsComponent } from 'src/app/components/testmonials/testmonials.component';
import { ParentReviewComponent } from 'src/app/components/parent-review/parent-review.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgramCardComponent, HeroSectionComponent, NavCardsComponent, TestmonialsComponent, ParentReviewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
 ) {  
 }
  programs = [
    {
      id: 1,
      title: 'RoboCHAMPS',
      description: 'Build robots, code AI, and create the future. Perfect for curious minds aged 8-16 who love hands-on learning.',
      icon: 'fas fa-robot',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'CodeCHAMPS',
      description: 'From Scratch to Python, master coding fundamentals through fun projects. Ideal for beginners and intermediate coders.',
      icon: 'fas fa-code',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'FinCHAMPS',
      description: 'Learn money management, investing basics, and financial literacy through interactive simulations and real-world scenarios.',
      icon: 'fas fa-coins',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'LingoCHAMPS',
      description: 'Master English through conversation, storytelling, and creative writing. Build confidence and fluency with native speakers.',
      icon: 'fas fa-language',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'AICHAMPS',
      description: 'Explore the world of AI through hands-on projects. Create chatbots, image recognition systems, and more with cutting-edge tools.',
      icon: 'fas fa-brain',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'MathCHAMPS',
      description: 'Transform math anxiety into confidence. Interactive lessons, real-world applications, and personalized learning paths.',
      icon: 'fas fa-calculator',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  ngOnInit() {
    // Add animation classes after component loads
    setTimeout(() => {
      this.document.querySelectorAll('.animate-text').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }
} 