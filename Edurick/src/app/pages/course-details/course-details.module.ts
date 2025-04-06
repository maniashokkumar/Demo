import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from './course-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CourseDetailsRoutingModule
  ]
})
export class CourseDetailsModule { }
