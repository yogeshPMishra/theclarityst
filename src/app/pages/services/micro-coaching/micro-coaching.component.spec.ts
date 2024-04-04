import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCoachingComponent } from './micro-coaching.component';

describe('MicroCoachingComponent', () => {
  let component: MicroCoachingComponent;
  let fixture: ComponentFixture<MicroCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroCoachingComponent]
    });
    fixture = TestBed.createComponent(MicroCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
