import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent {
  @Input() program: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
  } = {
    id: 0,
    title: '',
    description: '',
    icon: '',
    image: ''
  };
} 