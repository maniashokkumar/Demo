import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/new-home/new-home.module').then(m => m.NewHomeModule) },
  { path: 'courses/:courseId', loadChildren: () => import('./pages/course-details/course-details.module').then(m => m.CourseDetailsModule) }, 
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
