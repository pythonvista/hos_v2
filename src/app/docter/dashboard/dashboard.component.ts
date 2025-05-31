import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { Appointment } from 'src/app/_models/appointment';
import { is } from 'date-fns/locale';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoader = false;
  public ticketCount = 0;
  public scheduledCount = 0;
  public intakeCount = 0;
  public checkoutCount = 0;
  public apppointments: Appointment[] = [];



  @ViewChild('myCanvas', { static: false })
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartData1: any[];
  public chartData2: any[];


  public chartLabels: any[];
  public chartColors: any[];
  public chartColors1: any[];
  public chartColors2: any[];
  public chartOptions: any;

  constructor(private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {
    this.getData();
    this.chartData = [{
      data: [3, 1, 4, 2, 3],
      label: 'Hospitals',
      fill: true
    }];
    this.chartData1 = [{
      data: [3, 1, 4, 2, 5],
      label: 'Doctors',
      fill: true
    }];
    this.chartData2 = [{
      data: [3, 5, 4, 2, 1],
      label: 'Patients',
      fill: true
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors = [{
      backgroundColor: 'rgb(250,125,180)',
      borderColor: '105,159,177,1'
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors1 = [{
      backgroundColor: 'rgb(99,216,252)',
      borderColor: '153, 250, 166,1'
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors2 = [{
      backgroundColor: 'rgb(153, 250, 166)',
      borderColor: '105,159,177,1'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
        drawTime: 'beforeDatasetsDraw',
        annotations: [{
          type: 'box',
          id: 'a-box-1',
          yScaleID: 'y-axis-0',
          yMin: 0,
          yMax: 1500,
          backgroundColor: '#4cf03b'
        }, {
          type: 'box',
          id: 'a-box-2',
          yScaleID: 'y-axis-0',
          yMin: 1,
          yMax: 2.7,
          backgroundColor: '#fefe32'
        }, {
          type: 'box',
          id: 'a-box-3',
          yScaleID: 'y-axis-0',
          yMin: 2.7,
          yMax: 5,
          backgroundColor: '#fe3232'
        }]
      }
    }


  }
  getData() {
    this.isLoader = true;
    this.dashboardService.getDoctorDashboard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.ticketCount = res.data.ticket;
        this.scheduledCount = res.data.scheduled;
        this.intakeCount = res.data.intake;
        this.checkoutCount = res.data.checkout
        this.apppointments = res.data.apppointments;
        this.isLoader = false;
      }
    })
  }
  gotoPatientProfile(id) {
    this.router.navigate([`app/patient/profile/${id}`]);
  }
  //barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public mbarChartLabels: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgb(1, 192, 200)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'rgb(70, 159, 180)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData: any[] = [
    { data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A' },
    { data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B' }
  ];

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  // naviagtes to calander
  navigateToCalender() {
    this.router.navigate(['app/calender']);
  }

}
