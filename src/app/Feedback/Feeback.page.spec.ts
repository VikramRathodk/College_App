import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedBackPage } from './Feedback.page';

describe('FeedbackPage', () => {
  let component: FeedBackPage;
  let fixture: ComponentFixture<FeedBackPage>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(FeedBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
