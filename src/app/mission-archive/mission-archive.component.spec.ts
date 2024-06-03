import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionArchiveComponent } from './mission-archive.component';

describe('MissionArchiveComponent', () => {
  let component: MissionArchiveComponent;
  let fixture: ComponentFixture<MissionArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionArchiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
