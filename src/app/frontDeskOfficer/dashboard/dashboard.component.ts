import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { Bill } from 'src/app/_models/bill';
import { PaymentService } from 'src/app/payment/payment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoader = false;
  public patientCount = 0;
  public labAttendantCount = 0;
  public doctorCount = 0;
  public patients: User[] = [];
  public apppointmentCount = 0;

  page = 0;
  limit = 10;
  totalCount = 0;

  billsList: Bill[] = [];



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
    private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
    this.getData();
    this.getAllBills();
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
    this.dashboardService.getFDODashBoard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.patientCount = res.data.patient;

        this.apppointmentCount = res.data.apppointment
        this.patients = res.data.patients;
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


  getAllBills() {
    this.paymentService.getAll(this.page, this.limit).subscribe((res: any) => {
      if (res.status == '200') {
        console.log(res);
        this.billsList = res.data.doc;
        this.totalCount = res.data.count;
      } else {
        this.billsList = [];
      }
    })
  }

  onClickPage(page = 0) {
    this.page = page;
    this.getAllBills();
  }

  onClick(id) {
    this.router.navigate(['/app/payment/invoice/', id]);
  }

  getSubTotal(i) {
    let subTotal: number = 0;
    this.billsList[i].items.forEach(a => subTotal += (a.price * a.quantity));
    return subTotal;
  }

  applyDiscount(i) {
    return this.getSubTotal(i) - (this.getSubTotal(i) * (this.billsList[i].discount / 100));
  }



}
