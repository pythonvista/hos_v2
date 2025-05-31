import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoader = false;
  public upcomingCount = 0;
  public pendingCount = 0;
  public completedCount = 0;
  public tickets = [];



  constructor(private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {
    this.getData();


  }
  getData() {
    this.isLoader = true;
    this.dashboardService.getLabAttendantDashboard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.upcomingCount = res.data.upcoming;
        this.pendingCount = res.data.pending;
        this.completedCount = res.data.completed;
        this.tickets = res.data.labReports;
        this.isLoader = false;
      }
    })
  }
  gotoHospitalProfile(id) {
    this.router.navigate([`/app/ticket`]);
  }

}
