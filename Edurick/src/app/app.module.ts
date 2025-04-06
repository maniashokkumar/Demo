import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavcardsComponent } from './components/navcards/navcards.component';
import { UpcommingCoursesComponent } from './components/upcomming-courses/upcomming-courses.component';
import { TickerTapeComponent } from './components/ticker-tape/ticker-tape.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { TestmonialComponent } from './components/testmonial/testmonial.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TickerTapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
