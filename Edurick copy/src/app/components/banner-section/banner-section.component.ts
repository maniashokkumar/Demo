import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  standalone: true, 
  imports: [CommonModule],
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {
 @Input() bannerData: any| undefined

}
