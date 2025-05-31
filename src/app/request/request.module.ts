import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request/request.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [RequestComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularEditorModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
