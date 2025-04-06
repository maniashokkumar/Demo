import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReviewComponent } from './parent-review.component';

describe('ParentReviewComponent', () => {
  let component: ParentReviewComponent;
  let fixture: ComponentFixture<ParentReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentReviewComponent]
    });
    fixture = TestBed.createComponent(ParentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
