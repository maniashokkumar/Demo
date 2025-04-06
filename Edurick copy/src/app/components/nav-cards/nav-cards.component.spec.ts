import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCardsComponent } from './nav-cards.component';

describe('NavCardsComponent', () => {
  let component: NavCardsComponent;
  let fixture: ComponentFixture<NavCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCardsComponent]
    });
    fixture = TestBed.createComponent(NavCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
