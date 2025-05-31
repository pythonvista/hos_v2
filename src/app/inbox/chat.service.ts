import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private authService: AuthService, private httpClient: HttpClient, private socket: Socket,) { }

    getfriends() {
        return this.httpClient.get(`api/chat/friends`);
    }
    addfriend(id) {
        return this.httpClient.get(`api/chat/friends/${id}`);
    }
    getHistory(id, pageSize, pageNo) {
        return this.httpClient.get(`api/chat/history/${id}?pageSize=${pageSize}&pageNo=${pageNo}`);
    }
    sendMessage(chatObj) {
        this.socket.emit("sendMessage", chatObj);
    }
    getMessage() {
        return this.socket
            .fromEvent<any>(this.authService.currentUserValue._id + 'Msg');
    }

    getUserMessages() {
        return this.httpClient.get(`api/chat/getUserMessages`);
    }

    markAsRead(id) {
        return this.httpClient.put(`api/readMessage/${id}`, {});
    }
}
