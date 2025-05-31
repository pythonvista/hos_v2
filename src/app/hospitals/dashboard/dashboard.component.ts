import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { User } from "src/app/_models/user";
import { DashboardService } from "src/app/dashboard/dashboard.service";
import { Router } from "@angular/router";
import { ResponseMessage } from "src/app/_models/response";
import { Bill } from "src/app/_models/bill";
import { PaymentService } from "src/app/payment/payment.service";
import { ChartOptions } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isLoader = false;

  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  public patientCount = 0;
  public labAttendantCount = 0;
  public doctorCount = 0;
  public patients: User[] = [];
  public apppointmentCount = 0;
  public pharmacistsCount = 0;
  public newPatients = [];
  public outstandingPayments = [];
  public firstTimePatients = []

  page = 0;
  limit = 10;
  totalCount = 0;

  billsList: Bill[] = [];

  @ViewChild("myCanvas", { static: false })
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = "line";

  // Payment Chart Data
  public paymentChartData: any[];
  paymentChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  isPaymentChartLoaded = false;

  // Appointment Chart Data
  public appointmentChartData: any[];
  appointmentChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  isAppointmentChartLoaded = false;

  // patient Graph Data
  public patientChartData: any[];
  patientChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  isPatientChartLoaded = false;

  public chartLabels: any[];

  public chartColors: any[];
  public chartColors1: any[];
  public chartColors2: any[];

  public chartOptions: ChartOptions;

  constructor(
    private dashboardService: DashboardService,
    private paymentService: PaymentService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.chartLabels = this.months;

    this.chartOptions = {
      responsive: true,
    };

    this.patientChartData = [
      {
        data: this.patientChartCount,
        label: "Patients",
        fill: true,
      },
    ];

    this.appointmentChartData = [
      {
        data: this.appointmentChartCount,
        label: "Appointments",
        fill: true,
      },
    ];

    this.paymentChartData = [
      {
        data: this.paymentChartCount,
        label: "Payments",
        fill: true,
      },
    ];

    this.getData();
    this.getAllBills();
    this.patientGraphData();
    this.appointmentGraphData();
    this.paymentsGraphData();
    this.firstNewPatientOfTheYear()

    this.chartColors = [
      {
        backgroundColor: "rgb(250,125,180)",
        borderColor: "105,159,177,1",
      },
    ];
    this.chartLabels = this.months;
    this.chartColors1 = [
      {
        backgroundColor: "rgb(99,216,252)",
        borderColor: "153, 250, 166,1",
      },
    ];
    this.chartLabels = this.months;
    this.chartColors2 = [
      {
        backgroundColor: "rgb(153, 250, 166)",
        borderColor: "105,159,177,1",
      },
    ];
  }

  getData() {
    this.isLoader = true;
    this.dashboardService
      .getHospitalDashboard()
      .subscribe((res: ResponseMessage) => {
        if (res.status == "200") {
          this.patientCount = res.data.patient;
          this.doctorCount = res.data.doctor;
          this.labAttendantCount = res.data.labAttendant;
          this.apppointmentCount = res.data.apppointment;
          // this.patients = res.data.patients;
          this.pharmacistsCount = res.data.pharmacistsCount;
          this.isLoader = false;
        }
      });
        // this.cdr.detectChanges();
  }
  gotoPatientProfile(id) {
    this.router.navigate([`app/patient/profile/${id}`]);
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  getAllBills() {
    this.paymentService.getAll(this.page, this.limit).subscribe((res: any) => {
      if (res.status === 200) {
        this.billsList = res.data.doc;
        this.totalCount = res.data.count;
      } else {
        this.billsList = [];
      }
    });

    this.paymentService.outstanding(this.page, this.limit)
      .subscribe((res: ResponseMessage) => {
        if (res.status == "200") {
          this.outstandingPayments = res.data.doc;
        }
      });
      // this.cdr.detectChanges();
  }

  onClickPage(page = 0) {
    this.page = page;
    this.getAllBills();
  }

  onClick(id) {
    this.router.navigate(["/app/payment/invoice/", id]);
  }

  getSubTotal(i) {
    let subTotal: number = 0;
    this.billsList[i].items.forEach((a) => (subTotal += a.price * a.quantity));
    return subTotal;
  }

  applyDiscount(i) {
    return (
      this.getSubTotal(i) -
      this.getSubTotal(i) * (this.billsList[i].discount / 100)
    );
  }

  patientGraphData() {
    this.isLoader = true;
    this.isPatientChartLoaded = false;

    this.dashboardService.getPatientGraphData().subscribe((res: any) => {
      this.isLoader = false;
      console.log(res)
      if (+res.status === 200) {
      console.log(res.data)
        this.patients = res.data;
        this.newPatients = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.patientChartCount[res.data[i]._id.month - 1] = res.data[i].count;
        }
        this.isPatientChartLoaded = true;
      }
    });
  }

  appointmentGraphData() {
    this.isLoader = true;
    this.isAppointmentChartLoaded = false;

    this.dashboardService.getAppointmentGraphData().subscribe((res: any) => {
      this.isLoader = false;
      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.appointmentChartCount[res.data[i]._id.month - 1] =
            res.data[i].count;
        }
        this.isAppointmentChartLoaded = true;
      }
      // this.cdr.detectChanges();
    });
  }

  paymentsGraphData() {
    this.isLoader = true;
    this.isPaymentChartLoaded = false;

    this.dashboardService.getPaymentGraphData().subscribe((res: any) => {
      this.isLoader = false;
      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.paymentChartCount[res.data[i]._id.month - 1] = res.data[i].total;
        }
        this.isPaymentChartLoaded = true;
      }
      // this.cdr.detectChanges();
    });
  }

  firstNewPatientOfTheYear() {
    this.dashboardService.getFirstTimePatients().subscribe((res: any) => {
      this.isLoader = false;
      console.log(res)
      if (+res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
        //   this.paymentChartCount[res.data[i]._id.month - 1] = res.data[i].total;
        // }
        // this.isPaymentChartLoaded = true;
      }
      }
      // this.cdr.detectChanges();
    });
  }
  }
