import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingCareerComponent } from './leading-career.component';

describe('LeadingCareerComponent', () => {
  let component: LeadingCareerComponent;
  let fixture: ComponentFixture<LeadingCareerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadingCareerComponent]
    });
    fixture = TestBed.createComponent(LeadingCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
