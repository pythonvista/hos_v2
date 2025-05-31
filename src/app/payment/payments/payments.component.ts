import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Bill } from 'src/app/_models/bill';
import { PharmacyService } from 'src/app/pharmacy/pharmacy.service';
import * as moment from 'moment';
import { IDateRangePickerOptions } from 'ngx-daterange';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  isLoader = false;
  page = 1;
  limit = 20;
  totalCount = 0;
  totalPaymentsValue = 0;

  fromDate = null;
  toDate = null;

  billsList: Bill[] = [];

  secondFieldOptions: IDateRangePickerOptions = {
    autoApply: true,
    clickOutsideAllowed:true,
    // disableInputDisplay:true,
    // disabled:true,
    // clickOutsideAllowed: false,
    format: 'MM/DD/YYYY',
    // modal:false,
    // icons: 'font-awesome',
    // minDate: moment().subtract(10, 'years'),
    // maxDate: moment().add(1, 'year'),
  }

  constructor(private router: Router,
    private pharmacyService: PharmacyService,

    private paymentService: PaymentService) {
      this.fromDate = moment().startOf('month');
      this.toDate = moment().endOf('month');
     }

  ngOnInit() {
    this.getAll();
    this.getAllPrescriptions();
  }

  getAll() {
    this.isLoader = true;


    this.paymentService.getAll(this.page, this.limit, this.fromDate, this.toDate).subscribe((res: any) => {
      if (res.status == '200') {
        console.log(res);
        this.billsList = res.data.doc;
        this.totalCount = res.data.count;
        if (res.data.totalPaymentsValue && res.data.totalPaymentsValue.length > 0) {
          this.totalPaymentsValue = res.data.totalPaymentsValue[0].amount;

        }
        this.isLoader = false;
      } else {
        this.billsList = [];
        this.isLoader = false;
      }
    })
  }

  getAllPrescriptions() {
    this.pharmacyService.getPrescriptions().subscribe((res: any) => {
      console.log(res);
    })
  }

  // onClickPage(page = 0) {
  //   this.page = page;
  //   this.getAll();
  // }

  onClickPage(e: any) {
    this.page = e.page;
    this.limit = e.limit;
    this.getAll();
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

  onCloseEvent() {
    console.log("dfvhejj")
  }


  onDateReset() {

    this.fromDate = moment().startOf('month');
    this.toDate = moment().endOf('month');
    this.getAll();
  }
  onDateSelection(date) {
    this.fromDate = date.start;

    this.toDate = date.end;
    this.getAll();
    // this.secondFieldOptions.autoApply = true
  }

}
