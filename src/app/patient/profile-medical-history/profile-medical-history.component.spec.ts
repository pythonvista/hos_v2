import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMedicalHistoryComponent } from './profile-medical-history.component';

describe('ProfileMedicalHistoryComponent', () => {
  let component: ProfileMedicalHistoryComponent;
  let fixture: ComponentFixture<ProfileMedicalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMedicalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
