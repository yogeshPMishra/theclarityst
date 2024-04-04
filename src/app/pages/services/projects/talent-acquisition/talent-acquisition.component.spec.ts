import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentAcquisitionComponent } from './talent-acquisition.component';

describe('TalentAcquisitionComponent', () => {
  let component: TalentAcquisitionComponent;
  let fixture: ComponentFixture<TalentAcquisitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentAcquisitionComponent]
    });
    fixture = TestBed.createComponent(TalentAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
