import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcardsComponent } from './navcards.component';

describe('NavcardsComponent', () => {
  let component: NavcardsComponent;
  let fixture: ComponentFixture<NavcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavcardsComponent]
    });
    fixture = TestBed.createComponent(NavcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
