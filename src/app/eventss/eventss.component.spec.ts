import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventssComponent } from './eventss.component';

describe('EventssComponent', () => {
  let component: EventssComponent;
  let fixture: ComponentFixture<EventssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
