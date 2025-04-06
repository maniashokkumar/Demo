import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-nav-cards',
  templateUrl: './nav-cards.component.html',
  styleUrls: ['./nav-cards.component.scss']
})
export class NavCardsComponent {
  features = [
    {
      title: 'Top 1% Global Educators',
      description: 'Rigorously trained to nurture the kids interest, curiosity & learning.',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Futuristic Curriculum',
      description: 'Designed by a global advisory of industry experts and top universities.',
      icon: 'fas fa-book-reader'
    },
    {
      title: 'Access to the Global Arena',
      description: 'Compete with 1M+ future leaders with premium access to our international hackathons.',
      icon: 'fas fa-globe'
    }
  ];
}
