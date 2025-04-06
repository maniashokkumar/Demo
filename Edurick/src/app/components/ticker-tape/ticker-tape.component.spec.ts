import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerTapeComponent } from './ticker-tape.component';

describe('TickerTapeComponent', () => {
  let component: TickerTapeComponent;
  let fixture: ComponentFixture<TickerTapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickerTapeComponent]
    });
    fixture = TestBed.createComponent(TickerTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
