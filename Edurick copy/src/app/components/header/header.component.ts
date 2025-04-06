import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
 ) {  
 }
  isMenuOpen = false;
  isScrolled = false;
  activeDropdownIndex: number | null = null;
  headerData = [{
    title: 'Summer Camp',
    link: '/summer-camp'
  },{
    title: 'Courses',
    link: '/courses'
  },{
    title: 'Workshops',
    link: '/workshops',
    subMenu: [{
      title: 'School students',
      link: 'school-workshops'
    },{
      title: 'College students',
      link: 'college-workshops'
    }]
  },{
    title: 'About Us',
    link: '/about-us'
  }]

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.activeDropdownIndex = null;
    }
    this.document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  toggleMobileDropdown(event: Event, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.activeDropdownIndex = this.activeDropdownIndex === index ? null : index;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.activeDropdownIndex = null;
    this.document.body.style.overflow = '';
  }
} 