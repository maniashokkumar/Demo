import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'book-demo',
    loadComponent: () => import('./pages/book-demo/book-demo.component').then(m => m.BookDemoComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course-detail/course.module').then(m => m.CourseModule)
  },
  {
    matcher: (segments: UrlSegment[]) => {
      if (segments.length === 1) {
        const path = segments[0].path;
        if (path.startsWith('summer-camp') || 
            path === 'school-workshops' || 
            path === 'college-workshops') {
          const id = path.replace('summer-camp', '')
                        .replace('school-workshops', 'school')
                        .replace('college-workshops', 'college');
          return {
            consumed: segments,
            posParams: {
              id: new UrlSegment(id, {})
            }
          };
        }
      }
      return null;
    },
    loadComponent: () => import('./pages/summer-camp/summer-camp.component').then(m => m.SummerCampComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'  // This enables scroll restoration
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
