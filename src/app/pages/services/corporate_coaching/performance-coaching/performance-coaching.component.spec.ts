import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceCoachingComponent } from './performance-coaching.component';

describe('PerformanceCoachingComponent', () => {
  let component: PerformanceCoachingComponent;
  let fixture: ComponentFixture<PerformanceCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceCoachingComponent]
    });
    fixture = TestBed.createComponent(PerformanceCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
