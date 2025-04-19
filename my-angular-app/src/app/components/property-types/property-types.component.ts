import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryPopupComponent } from '../enquiry-popup/enquiry-popup.component';

interface PropertyType {
  title: string;
  count: string;
  image: string;
}

@Component({
  selector: 'app-property-types',
  templateUrl: './property-types.component.html',
  styleUrls: ['./property-types.component.scss'],
  standalone: true,
  imports: [CommonModule, EnquiryPopupComponent]
})
export class PropertyTypesComponent {
  showEnquiryPopup = false;
  selectedProperty: PropertyType | null = null;

  propertyTypes = [
    {
      title: 'Residential Apartment',
      count: '8,600+',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Independent/Builder Floor',
      count: '2,100+',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Independent House/Villa',
      count: '1,800+',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  openEnquiryPopup(property: PropertyType) {
    this.selectedProperty = property;
    this.showEnquiryPopup = true;
  }

  closeEnquiryPopup() {
    this.showEnquiryPopup = false;
    this.selectedProperty = null;
  }
}
