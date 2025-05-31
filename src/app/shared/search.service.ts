import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  searchDoctor(query, limit = 20) {
    return this.httpClient.get(`api/doctor?searchQuery=${query}&limit=${limit}`);
  }

  searchPatient(query, limit = 20) {
    return this.httpClient.get(`api/patient?searchQuery=${query}`);
  }

  searchlabAttendant(query, limit = 20) {
    return this.httpClient.get(`api/labAttendant?searchQuery=${query}&limit=${limit}`);
  }

  searchFDO(query, limit = 20) {
    return this.httpClient.get(`api/fdo?searchQuery=${query}&limit=${limit}`);
  }

  searchPharmacy(query, limit = 20) {
    return this.httpClient.get(`api/pharmacy?searchQuery=${query}&limit=${limit}`);
  }

  searchUser(query, limit = 20) {
    return this.httpClient.get(`api/search?searchQuery=${query}&limit=${limit}`);
  }
}
