import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../_models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }
  post(doctor) {
    return this.httpClient.post('api/createDoctor', doctor);
  }
  get(page = 0, limit = 10, active = true) {
    return this.httpClient.get(`api/doctors?page=${page}&limit=${limit}&active=${active}`);
  }
  getById(id) {
    return this.httpClient.get(`api/doctors/${id}`);
  }

  upateDoctor(id, value) {
    return this.httpClient.put(`api/updateDoctor/${id}`, value);
  }
}
