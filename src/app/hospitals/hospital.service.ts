import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient: HttpClient) { }

  post(hospital: User) {
    return this.httpClient.post('api/hospitals', hospital);
  }
  get(page = 0, limit = 20, active = true) {
    return this.httpClient.get(`api/hospitals?page=${page}&limit=${limit}&active=${active}`);
  }
  getById(id) {
    return this.httpClient.get(`api/hospitals/${id}`);
  }

  putHospital(id, value) {
    return this.httpClient.put(`api/hospitals/${id}`, value);
  }

}
