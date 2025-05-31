import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../_models/doctor';
import { Patient } from '../_models/patient';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpClient: HttpClient) { }

  tempDoctor: Doctor = null;
  tempPatient: Patient = null;

  post(payment) {
    return this.httpClient.post(`api/billing/create`, payment);
  }

  getAll(page = 0, limit = 10, fromDate = null, toDate = null) {
    return this.httpClient.get(`api/billing/get?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`)
  }

  outstanding(page = 0, limit = 10, fromDate = null, toDate = null) {
    return this.httpClient.get(`api/billing/outstanding?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`)
  }

  getById(id) {
    console.log(id);
    return this.httpClient.get(`api/billing/${id}`);
  }

  getByPatient(id, page = 0, limit = 10) {
    return this.httpClient.get(`api/billing/patient/${id}?page=${page}&limit=${limit}`);
  }


  saveCheckout(p, d) {
    this.tempDoctor = d;
    this.tempPatient = p;
  }

  get getPatient() {
    return this.tempPatient;
  }

  get getDoctor() {
    return this.tempDoctor;
  }

}
