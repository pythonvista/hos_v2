
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RequestComponent },
      { path: 'detail/:id', component: DetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
