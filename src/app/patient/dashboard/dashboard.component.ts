import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { Appointment } from 'src/app/_models/appointment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoader = false;
  public labReportCount = 0;
  public appointmentCount = 0;
  public visitCount = 0;
  public appointments: Appointment[] = [];





  constructor(private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {
    this.getData();


  }
  getData() {
    this.isLoader = true;
    this.dashboardService.getPatientDashboard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.labReportCount = res.data.labReport;
        this.appointmentCount = res.data.appointment;
        this.visitCount = res.data.visit;
        this.appointments = res.data.appointments;
        this.isLoader = false;
      }
    })
  }
  gotoAppointment() {
    this.router.navigate([`app/calender`]);
  }
}
