import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ResponseMessage } from '../_models/response';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  isLoader = false;
  public patientCount = 0;
  public hospitalCount = 0;
  public doctorCount = 0;
  public hospitals: User[] = [];
  public requestCount = 0;



  @ViewChild('myCanvas', { static: false })
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';

  // Doctor Graph Data
  public docChartData: any[];
  docChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  isdocChartLoaded = false;

  // Hos Graph Data
  public hosChartData: any[];
  hosChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ishosChartLoaded = false;

  // patient Graph Data
  public patientChartData: any[];
  patientChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  isPatientChartLoaded = false;


  public chartLabels: any[];
  public chartColors: any[];
  public chartColors1: any[];
  public chartColors2: any[];
  public chartOptions: any;

  constructor(private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {

    this.chartLabels = this.months;

    this.chartOptions = {
      responsive: true,
    }

    this.patientChartData = [{
      data: this.patientChartCount,
      label: 'Patients',
      fill: true
    }];

    this.hosChartData = [{
      data: this.hosChartCount,
      label: 'Hospitals',
      fill: true
    }];


    this.docChartData = [{
      data: this.docChartCount,
      label: 'Doctors',
      fill: true
    }];


    this.getData();
    this.patientGraphData();
    this.hosGraphData();
    this.docGraphData();

    this.chartColors = [{
      backgroundColor: 'rgb(250,125,180)',
      borderColor: '105,159,177,1'
    }];
    this.chartColors1 = [{
      backgroundColor: 'rgb(99,216,252)',
      borderColor: '153, 250, 166,1'
    }];
    this.chartColors2 = [{
      backgroundColor: 'rgb(153, 250, 166)',
      borderColor: '105,159,177,1'
    }];


  }
  getData() {
    this.isLoader = true;
    this.dashboardService.getDashboard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.isLoader = false;
        this.patientCount = res.data.patient;
        this.doctorCount = res.data.doctor;
        this.hospitalCount = res.data.hospital;
        this.requestCount = res.data.request
        this.hospitals = res.data.hospitals;
      }
    })
  }
  gotoHospitalProfile(id) {
    this.router.navigate([`app/hospitals/profile/${id}`]);
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  patientGraphData() {
    this.isLoader = true;
    this.isPatientChartLoaded = false;

    this.dashboardService.getAdminPatientGraphData().subscribe((res: any) => {
      this.isLoader = false;
      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.patientChartCount[(res.data[i]._id.month) - 1] = res.data[i].count;
        }
        this.isPatientChartLoaded = true;
      }
    })
  }


  hosGraphData() {
    this.isLoader = true;
    this.ishosChartLoaded = false;

    this.dashboardService.getAdminHospitalGraphData().subscribe((res: any) => {
      this.isLoader = false;

      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.hosChartCount[(res.data[i]._id.month) - 1] = res.data[i].count;
        }
        this.ishosChartLoaded = true;
      }
    })
  }



  docGraphData() {
    this.isLoader = true;
    this.isdocChartLoaded = false;

    this.dashboardService.getAdminDoctorGraphData().subscribe((res: any) => {
      this.isLoader = false;
      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.docChartCount[(res.data[i]._id.month) - 1] = res.data[i].count;
        }
        this.isdocChartLoaded = true;
      }
    })
  }



}
