import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisedCoachingComponent } from './specialised-coaching.component';

describe('SpecialisedCoachingComponent', () => {
  let component: SpecialisedCoachingComponent;
  let fixture: ComponentFixture<SpecialisedCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialisedCoachingComponent]
    });
    fixture = TestBed.createComponent(SpecialisedCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
