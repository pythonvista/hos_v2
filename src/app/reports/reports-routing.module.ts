  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PaymentComponent } from './payment/payment.component';
import { IncomeComponent } from './income/income.component';
import { StatsComponent } from './stats/stats.component';



// import { PaymentsComponent } from './payments/payments.component';
// import { AddComponent } from './add/add.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sales', component: SalesComponent },
      {path: 'payments', component: PaymentComponent },
      {path: 'income', component: IncomeComponent },
      {path: 'stats', component: StatsComponent }
      
    
    //   {path: 'add', component: AddComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
