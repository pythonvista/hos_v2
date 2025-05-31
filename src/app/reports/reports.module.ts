import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { PaymentComponent } from './payment/payment.component';
import { IncomeComponent } from './income/income.component';
import { StatsComponent } from './stats/stats.component';




@NgModule({
  declarations: [SalesComponent, PaymentComponent, IncomeComponent, StatsComponent],
  imports: [ ReportsRoutingModule,
    ChartsModule,
    CommonModule
  ]
})
export class ReportsModule { }
