import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { Bill } from 'src/app/_models/bill';
import { PaymentService } from 'src/app/payment/payment.service';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoader = false;

  totalCount = 0;
  completed = 0;
  unCompleted = 0;

  page = 0;
  limit = 10;
  result = null;

  billsList: Bill[] = [];


  selectedDate;


  constructor(private dashboardService: DashboardService,
    private paymentService: PaymentService,
    private pharmacyService: PharmacyService,


    private router: Router) { }

  ngOnInit() {
    this.getData();
    this.getAllBills();
    this.getAllPrescriptions();
  }

  getAllPrescriptions() {
    this.pharmacyService.getPrescriptions(1, 10, this.selectedDate).subscribe((res: any) => {
      this.result = res;
      console.log(this.result);

    })
  }
  getData() {
    this.isLoader = true;
    this.dashboardService.getPharmacyDashBoard().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.completed = res.data.completed;
        this.unCompleted = res.data.unComplete;
        this.totalCount = this.completed + this.unCompleted;
        this.isLoader = false;


      }
    })
  }
  gotoHospitalProfile(id) {
    this.router.navigate([`/app/ticket`]);
  }


  getAllBills() {
    this.paymentService.getAll(this.page, this.limit).subscribe((res: any) => {
      if (res.status == '200') {
        console.log(res);
        this.billsList = res.data.doc;
      } else {
        this.billsList = [];
      }
    })
  }

  onClickPrescription(id) {
    this.router.navigate(['app/prescription/', id]);
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


  onDateSelection(date) {
    this.selectedDate = new Date(Date.UTC(date.year, date.month - 1, date.day)); // If you don't see the error play (add\remove) the `+1` on this line

    console.log(this.selectedDate, date);
    this.getAllPrescriptions();
  }

}
