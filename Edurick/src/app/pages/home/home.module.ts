import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { FaqSectionComponent } from 'src/app/components/faq-section/faq-section.component';
import { NavcardsComponent } from 'src/app/components/navcards/navcards.component';
import { TestmonialComponent } from 'src/app/components/testmonial/testmonial.component';
import { TickerTapeComponent } from 'src/app/components/ticker-tape/ticker-tape.component';
import { UpcommingCoursesComponent } from 'src/app/components/upcomming-courses/upcomming-courses.component';


@NgModule({
  declarations: [
    HomeComponent,
        BannerComponent,
        NavcardsComponent,
        UpcommingCoursesComponent,
        FaqSectionComponent,
        TestmonialComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
