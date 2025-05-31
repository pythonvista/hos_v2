import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    SharedModule
  ]
})
export class PrescriptionModule { }
