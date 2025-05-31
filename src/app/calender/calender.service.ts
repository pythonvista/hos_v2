import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor(private htppClient: HttpClient) { }
  book(body) {
    return this.htppClient.post('api/createAppointment', body);
  }
  getAll(page = 0, limit = 20, ) {
    return this.htppClient.get(`api/appointment?page=${page}&limit=${limit}`);
  
  }
  delete(id) {
    return this.htppClient.delete(`api/appointment/${id}`);
  }
  
  put(id, body) {
    return this.htppClient.put(`api/appointment/${id}`, body);
  }
  checkin(appointmentId, patientId ,body) {
    // /api/patient/:patientId/appointment/:appointmentId/checkIn
    return this.htppClient.put(`api/patient/${patientId}/appointment/${appointmentId}/checkIn`, body);

  }
}
