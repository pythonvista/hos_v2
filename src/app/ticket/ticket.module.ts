import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticket.service';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [ ListComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    LightboxModule
  ], 
  providers: [TicketService]
})
export class TicketModule { }
