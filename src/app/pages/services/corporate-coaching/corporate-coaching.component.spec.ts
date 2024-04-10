import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCoachingComponent } from './corporate-coaching.component';

describe('CorporateCoachingComponent', () => {
  let component: CorporateCoachingComponent;
  let fixture: ComponentFixture<CorporateCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateCoachingComponent]
    });
    fixture = TestBed.createComponent(CorporateCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
