  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component:  CalenderViewComponent},
      {path: 'book', component:  BookComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
