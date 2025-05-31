import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile/profile.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ListComponent, AddComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    SharedModule,
    NgxPermissionsModule
  ]
})
export class HospitalsModule { }
