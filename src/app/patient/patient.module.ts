import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { ProfileMedicalHistoryComponent } from './profile-medical-history/profile-medical-history.component';
import { ProfileReportsComponent } from './profile-reports/profile-reports.component';
import { ProfileBillingComponent } from './profile-billing/profile-billing.component';
import { ProfileVisitsComponent } from './profile-visits/profile-visits.component';
import { ProfileCommentsComponent } from './profile-comments/profile-comments.component';
import { NgbsharedModule } from '../ngbshared/ngbshared.module';
import { MedicalComponent } from './medical/medical.component';
import { FollowupComponent } from './followup/followup.component';
import { AddFollowupComponent } from './add-followup/add-followup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportService } from './services/report.service';
import { LightboxModule } from 'ngx-lightbox';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularEditorModule } from '@kolkov/angular-editor';





@NgModule({
  declarations: [ProfilesComponent, ProfileComponent, AddComponent, ProfileMedicalHistoryComponent,
    ProfileReportsComponent, ProfileBillingComponent, ProfileVisitsComponent, ProfileCommentsComponent, DashboardComponent,
    MedicalComponent, FollowupComponent, AddFollowupComponent],
  imports: [
    CommonModule,
    NgbsharedModule,
    PatientRoutingModule,
    SharedModule,

    LightboxModule,
    NgxPermissionsModule.forChild(),
    AngularEditorModule

  ],
  providers: [ReportService]
})
export class PatientModule { }
