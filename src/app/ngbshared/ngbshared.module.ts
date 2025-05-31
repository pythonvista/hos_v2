import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule,
  ],
  exports: [
    NgbModalModule,
    NgbModule,
  ]
})
export class NgbsharedModule { }
