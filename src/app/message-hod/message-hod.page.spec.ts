import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageHODPage } from './message-hod.page';

describe('MessageHODPage', () => {
  let component: MessageHODPage;
  let fixture: ComponentFixture<MessageHODPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MessageHODPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
