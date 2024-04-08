import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastComponent } from './podcast.component';

describe('PodcastComponent', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastComponent]
    });
    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
