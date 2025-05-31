import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient, private socket: Socket, private authService: AuthService) { }

  sendNotification(notificationObj) {
    // to do here socket 
    console.log(notificationObj);
    this.socket.emit("createNotification", notificationObj);
  }

  sendHosRequestNotification(notificationObj) {
    // to do here socket 
    console.log(notificationObj);
    this.socket.emit("hosRequest", notificationObj);

  }

  getNotification() {
    // alert('here');
    return this.socket
      .fromEvent<any>(this.authService.currentUserValue._id + 'Notifi');

  }


  getNotificationsById(id) {
    return this.httpClient.get(`api/getNotifications/${id}`);
  }

  markAsRead(id) {
    return this.httpClient.put(`api/readNotification/${id}`, {});
  }


  deleteNotification(id) {
    return this.httpClient.delete(`api/deleteNotification/${id}`);
  }
}
