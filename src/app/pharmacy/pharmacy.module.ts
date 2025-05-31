import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { NgbsharedModule } from '../ngbshared/ngbshared.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';



@NgModule({
  declarations: [ListComponent, AddComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule,
    NgbsharedModule,
    NgxPermissionsModule
  ]
})
export class PharmacyModule { }
