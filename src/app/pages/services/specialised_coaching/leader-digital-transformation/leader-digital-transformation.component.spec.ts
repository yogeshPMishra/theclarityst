import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDigitalTransformationComponent } from './leader-digital-transformation.component';

describe('LeaderDigitalTransformationComponent', () => {
  let component: LeaderDigitalTransformationComponent;
  let fixture: ComponentFixture<LeaderDigitalTransformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderDigitalTransformationComponent]
    });
    fixture = TestBed.createComponent(LeaderDigitalTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
