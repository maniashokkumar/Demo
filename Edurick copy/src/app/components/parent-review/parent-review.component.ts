import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-parent-review',
  templateUrl: './parent-review.component.html',
  styleUrls: ['./parent-review.component.scss']
})
export class ParentReviewComponent {

  testimonials = [
    {
      rating: 5,
      review: 'My daughter has learned so much in just a few months. The teachers are amazing and the curriculum is perfect for kids.',
      name: 'John Smith',
      role: 'Parent',
      avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=FF6B00&color=fff'
    },
    {
      rating: 5,
      review: 'The interactive learning approach has made coding fun and engaging for my son. Highly recommended!',
      name: 'Jane Doe',
      role: 'Parent',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Doe&background=00A9FF&color=fff'
    },
    {
      rating: 5,
      review: 'Best decision we made for our child\'s education. The progress is remarkable!',
      name: 'Mike Johnson',
      role: 'Parent',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=FFD700&color=fff'
    }
  ];
}
