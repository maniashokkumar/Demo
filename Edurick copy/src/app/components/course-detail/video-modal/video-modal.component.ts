import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() videoUrl: string = '';

  closeModal(): void {
    this.isOpen = false;
  }
} 