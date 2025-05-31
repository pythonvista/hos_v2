import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { LabAttendantRoutingModule } from './lab-attendant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbsharedModule } from '../ngbshared/ngbshared.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [ListComponent, AddComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    LabAttendantRoutingModule,
    SharedModule,
    NgbsharedModule,
    NgxPermissionsModule
  ]
})
export class LabAttendantModule { }
