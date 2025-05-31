import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getDashboard() {
    return this.httpClient.get('api/dashboard/admin')
  }
  getHospitalDashboard() {
    return this.httpClient.get('api/dashboard/hospital')
  }
  getDoctorDashboard() {
    return this.httpClient.get('api/dashboard/doctor')
  }
  getPatientDashboard() {
    return this.httpClient.get('api/dashboard/patient')
  }
  getLabAttendantDashboard() {
    return this.httpClient.get('api/dashboard/labAttendant')
  }

  getFDODashBoard() {
    return this.httpClient.get('api/dashboard/fdo')
  }

  getPharmacyDashBoard() {
    return this.httpClient.get('api/dashboard/pharmacy');
  }

  getPatientGraphData() {
    return this.httpClient.get(`api/graph/patientGraphData`);

  }

  getAppointmentGraphData() {
    return this.httpClient.get(`api/graph/appointmentGraphData`);
  }

  getPaymentGraphData() {
    return this.httpClient.get(`api/graph/paymentsGraphData`);
  }

  getAdminHospitalGraphData() {
    return this.httpClient.get(`api/graph/adminHopitalGraphData`);
  }

  getAdminPatientGraphData() {
    return this.httpClient.get(`api/graph/adminPatientGraphData`);
  }

  getAdminDoctorGraphData() {
    return this.httpClient.get(`api/graph/adminDoctorGraphData`);
  }

  getFirstTimePatients() {
    return this.httpClient.get(`api/graph/adminDoctorGraphData`);
  }
}
