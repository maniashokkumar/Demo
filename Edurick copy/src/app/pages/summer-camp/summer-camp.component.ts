import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BannerSectionComponent } from 'src/app/components/banner-section/banner-section.component';
import { CampsSectionComponent } from 'src/app/components/camps-section/camps-section.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summer-camp',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerSectionComponent, CampsSectionComponent],
  templateUrl: './summer-camp.component.html',
  styleUrls: ['./summer-camp.component.scss']
})
export class SummerCampComponent implements OnInit {
  pageData: any;
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      console.log(segments)
      const path = segments.map(segment => segment.path).join('/');
      this.http.get(`assets/page-data/${path}.json`)
        .subscribe(data => {
          this.pageData = data;
          console.log(this.pageData)
        });
    });
  }
} 