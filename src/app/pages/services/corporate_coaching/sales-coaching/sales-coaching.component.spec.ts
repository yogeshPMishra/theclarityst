import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCoachingComponent } from './sales-coaching.component';

describe('SalesCoachingComponent', () => {
  let component: SalesCoachingComponent;
  let fixture: ComponentFixture<SalesCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCoachingComponent]
    });
    fixture = TestBed.createComponent(SalesCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
