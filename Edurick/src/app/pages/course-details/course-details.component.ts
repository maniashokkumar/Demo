import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  currentTabIndex: number = 0;
    courseDetails:any
constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute){}
    toogleTab(index: number) {
      this.currentTabIndex = index;
    }
ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    console.log('Course ID:', params.get('courseId'));
    this.courseDetails = this.courseService.courseDetails.find((course) => course.courseId === params.get('courseId'));
  });

}
}
