  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: AddComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
