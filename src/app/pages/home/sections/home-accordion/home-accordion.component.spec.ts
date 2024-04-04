import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccordionComponent } from './home-accordion.component';

describe('HomeAccordionComponent', () => {
  let component: HomeAccordionComponent;
  let fixture: ComponentFixture<HomeAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAccordionComponent]
    });
    fixture = TestBed.createComponent(HomeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
