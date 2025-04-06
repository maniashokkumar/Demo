import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true, 
  imports: [CommonModule],
  selector: 'app-testmonials',
  templateUrl: './testmonials.component.html',
  styleUrls: ['./testmonials.component.scss']
})
export class TestmonialsComponent {
  studentProjects = [
    {
      name: 'Jacob',
      age: 12,
      avatar: 'https://ui-avatars.com/api/?name=Jacob&background=FF6B00&color=fff',
      project: 'Mario Game',
      category: 'Game Development',
      description: 'Created a Mario-style platformer game with custom levels and characters.',
      image: 'https://picsum.photos/400/300',
      likes: 156
    },
    {
      name: 'Abdulrahman',
      age: 14,
      avatar: 'https://ui-avatars.com/api/?name=Abdulrahman&background=00A9FF&color=fff',
      project: 'Aurorion',
      category: 'Web Development',
      description: 'Built a responsive e-commerce website with modern UI/UX design.',
      image: 'https://picsum.photos/400/300',
      likes: 203
    },
    {
      name: 'Ahmad',
      age: 13,
      avatar: 'https://ui-avatars.com/api/?name=Ahmad&background=FFD700&color=fff',
      project: 'Minion Game',
      category: 'Game Development',
      description: 'Developed a fun minion-themed game with multiple levels and power-ups.',
      image: 'https://picsum.photos/400/300',
      likes: 189
    }
  ];
}
