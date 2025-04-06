import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewHomeRoutingModule } from './new-home-routing.module';
import { NewHomeComponent } from './new-home.component';

@NgModule({
  declarations: [
    NewHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewHomeRoutingModule
  ]
})
export class NewHomeModule { }
