import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCoachingComponent } from './team-coaching.component';

describe('TeamCoachingComponent', () => {
  let component: TeamCoachingComponent;
  let fixture: ComponentFixture<TeamCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCoachingComponent]
    });
    fixture = TestBed.createComponent(TeamCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
