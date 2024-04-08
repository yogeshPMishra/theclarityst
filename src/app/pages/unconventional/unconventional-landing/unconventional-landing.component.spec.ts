import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconventionalLandingComponent } from './unconventional-landing.component';

describe('UnconventionalLandingComponent', () => {
  let component: UnconventionalLandingComponent;
  let fixture: ComponentFixture<UnconventionalLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnconventionalLandingComponent]
    });
    fixture = TestBed.createComponent(UnconventionalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
