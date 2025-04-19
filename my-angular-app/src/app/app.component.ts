import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { PropertyTypesComponent } from './components/property-types/property-types.component';
import { UserSectionComponent } from './components/user-section/user-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    PropertyTypesComponent,
    UserSectionComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'rental.com';
}
