import { Component } from '@angular/core';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent {
  searchQuery: string = '';

  onSearch() {
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }
}
