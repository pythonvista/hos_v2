import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderRoutingModule } from './calender-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { NgbsharedModule } from '../ngbshared/ngbshared.module';
import { SharedModule } from '../shared/shared.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { CheckinComponent } from './checkin/checkin.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [CalenderViewComponent, BookComponent, AppointmentComponent, CheckinComponent],
  imports: [
    SharedModule,
    CommonModule,
    NgbsharedModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CalenderRoutingModule,
    NgxPermissionsModule.forChild(),

  ]
})
export class CalenderModule { }
