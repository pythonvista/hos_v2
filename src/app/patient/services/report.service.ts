import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }
  create(report) {
    return this.http.post(`api/labReport`, report);
  }
  get(patientId, page = 0, limit = 10) {
    return this.http.get(`api/labReport/patient/${patientId}?page=${page}&limit=${limit}`);
  }

}
