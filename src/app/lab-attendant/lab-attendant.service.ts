import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabAttendant } from '../_models/labAttendant';

@Injectable({
  providedIn: 'root'
})
export class LabAttendantService {

  constructor(private httpClient: HttpClient) { }
  post(labAttendant) {
    return this.httpClient.post('api/labAttendant', labAttendant);
  }
  get(page = 0, limit = 10, active = true) {
    return this.httpClient.get(`api/labAttendants?page=${page}&limit=${limit}&active=${active}`);
  }
  getById(id) {
    return this.httpClient.get(`api/labAttendant/${id}`);
  }

  upate(id, value) {
    return this.httpClient.put(`api/labAttendant/${id}`, value);
  }

  getList() {
    return this.httpClient.get(`api/labAttendantList`);
  }
}
