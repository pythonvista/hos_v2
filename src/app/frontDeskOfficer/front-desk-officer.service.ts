import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontDeskOfficerService {

  constructor(private httpClient: HttpClient) { }
  post(frontDeskOfficer) {
    return this.httpClient.post('api/fdo', frontDeskOfficer);
  }
  get(page = 0, limit = 10, active = true) {
    return this.httpClient.get(`api/fdos?page=${page}&limit=${limit}&active=${active}`);
  }
  getById(id) {
    return this.httpClient.get(`api/fdo/${id}`);
  }

  update(id, value) {
    return this.httpClient.put(`api/fdo/${id}`, value);
  }

  getFDOsList() {
    return this.httpClient.get(`api/fdo/getFDOList`);
  }
}
