import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimatedtextComponent } from './home-animatedtext.component';

describe('HomeAnimatedtextComponent', () => {
  let component: HomeAnimatedtextComponent;
  let fixture: ComponentFixture<HomeAnimatedtextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAnimatedtextComponent]
    });
    fixture = TestBed.createComponent(HomeAnimatedtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
