import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) { }
  
  getByLabAttendant() {
    //page= 1, limit = 10, //&page=${page}&limit=${limit}
    return this.http.get(`api/labReport/getByLabAttendant`);
  }
  put(ticket, id) {
    return this.http.put(`api/labReport/${id}`, ticket);
  }
  
}
