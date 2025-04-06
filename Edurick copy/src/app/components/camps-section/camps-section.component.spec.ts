import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsSectionComponent } from './camps-section.component';

describe('CampsSectionComponent', () => {
  let component: CampsSectionComponent;
  let fixture: ComponentFixture<CampsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampsSectionComponent]
    });
    fixture = TestBed.createComponent(CampsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
