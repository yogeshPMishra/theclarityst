import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonialsComponent } from './home-testimonials.component';

describe('HomeTestimonialsComponent', () => {
  let component: HomeTestimonialsComponent;
  let fixture: ComponentFixture<HomeTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTestimonialsComponent]
    });
    fixture = TestBed.createComponent(HomeTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
