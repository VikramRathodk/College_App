import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisionMissionPage } from './vision-mission.page';

describe('VisionMissionPage', () => {
  let component: VisionMissionPage;
  let fixture: ComponentFixture<VisionMissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisionMissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
