import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  myTickets =  this.socket.fromEvent("getMyTickets");
  adminTickets = this.socket.fromEvent("adminGetTickets");
  constructor(private socket: Socket, private authService: AuthService) {}
 
  adminGetAllTickets() {
    this.socket.emit("adminGetAllTickets");
  }
  getMyTicket() {
    this.socket.emit("getMyTicket", {createdBy: this.authService.currentUserValue._id});
  }
  createTicket(subject , description) {
    this.socket.emit("createTicket", {
      createdBy: this.authService.currentUserValue._id ,  
      subject: subject,
      description: description
    });
  }
  
  chatTicket(id) {
    this.socket.emit("createTicket", {
       _id: id
    });
  }
}
