import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private httpClient: HttpClient) { }
  post(patient) {
    return this.httpClient.post('api/createPatient', patient);
  }

  get(page = 0, limit = 10, active = true) {
    return this.httpClient.get(`api/patients?page=${page}&limit=${limit}&active=${active}`);
  }

  getById(id) {
    return this.httpClient.get(`api/patients/${id}`);
  }
  searchPatient(query) {
    return this.httpClient.get(`api/patient?searchQuery=${query}`);
  }

  updatePatient(id, value: any) {
    return this.httpClient.put(`api/updatePatient/${id}`, value);
  }

  // adds Follow Up
  addFollowUp(value) {
    return this.httpClient.post(`api/addFollowUP`, value);
  }

  // returns follow ups of patient
  getFollowUpsOfPatient(id, query = null, page = 0, limit = 10) {
    return this.httpClient.post(`api/followUps/${id}?page=${page}&limit=${limit}`, query);
  }

  getSingleFollowUp(id) {
    return this.httpClient.get(`api/followUp/${id}`);
  }

  updateFollowUp(id, value: any) {
    return this.httpClient.put(`api/followUp/${id}`, value);
  }

  deleteFollowUp(id) {
    return this.httpClient.delete(`api/followUp/${id}`);
  }

  deleteDiseaseCategoryFollowUps(query = null) {
    console.log(query);
    return this.httpClient.post(`api/followUp/deleteMultiple`, query);
  }

  updateFixedDisease(id, value: any) {
    console.log(id, value);
    return this.httpClient.put(`api/updateFixedDisease/${id}`, value);
  }




}
