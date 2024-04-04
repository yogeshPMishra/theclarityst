import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenLeadersComponent } from './women-leaders.component';

describe('WomenLeadersComponent', () => {
  let component: WomenLeadersComponent;
  let fixture: ComponentFixture<WomenLeadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenLeadersComponent]
    });
    fixture = TestBed.createComponent(WomenLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
