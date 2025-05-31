  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { AddComponent } from './add/add.component';
import { InvoiceComponent } from './invoice/invoice.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: PaymentsComponent},
      {path: 'add', component: AddComponent},
      {path: 'invoice/:id', component: InvoiceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
