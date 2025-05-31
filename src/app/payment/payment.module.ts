import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { AddComponent } from './add/add.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [PaymentsComponent, AddComponent, InvoiceComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    NgxPermissionsModule.forChild(),

  ]
})
export class PaymentModule { }
