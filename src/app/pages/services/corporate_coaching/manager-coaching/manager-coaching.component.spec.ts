import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCoachingComponent } from './manager-coaching.component';

describe('ManagerCoachingComponent', () => {
  let component: ManagerCoachingComponent;
  let fixture: ComponentFixture<ManagerCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerCoachingComponent]
    });
    fixture = TestBed.createComponent(ManagerCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
