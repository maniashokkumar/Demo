import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingCoursesComponent } from './upcomming-courses.component';

describe('UpcommingCoursesComponent', () => {
  let component: UpcommingCoursesComponent;
  let fixture: ComponentFixture<UpcommingCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcommingCoursesComponent]
    });
    fixture = TestBed.createComponent(UpcommingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
