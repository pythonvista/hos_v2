import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private httpClient: HttpClient) { }

  post(pharmacy) {
    return this.httpClient.post('api/pharmacy', pharmacy);
  }

  get(page = 0, limit = 10, active = true) {
    return this.httpClient.get(`api/pharmacies?page=${page}&limit=${limit}&active=${active}`);
  }

  getById(id) {
    return this.httpClient.get(`api/pharmacy/${id}`);
  }

  update(id, value) {
    return this.httpClient.put(`api/pharmacy/${id}`, value);
  }

  getPrescriptions(page = 0, limit = 10, date: Date = null) {
    return this.httpClient.get(`api/pharmacy/getPrescriptions?date=${date}&page=${page}&limit=${limit}`);
  }

  getPrescription(id) {
    return this.httpClient.get(`api/pharmacy/getPrescription/${id}`);
  }

  getPharmacyList() {
    return this.httpClient.get(`api/phrmacyList/`);

  }

  updatePrescriptionStatus(id) {
    return this.httpClient.put(`api/pharmacy/updatePrescription/${id}`, {});

  }
}
