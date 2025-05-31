import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Bill } from 'src/app/_models/bill';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  isLoader = false;
  bill:Bill;

  constructor(private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id){
        this.get(id);
      }
    });
  }

  get(id) {
    console.log(id);
    this.isLoader = true;
    this.paymentService.getById(id).subscribe((res: any)=> {
      if(res.status == '200') {
        console.log(res.data)
        this.bill = res.data;
        this.isLoader = false;
      }else {
        this.router.navigate(['app/payment']);
      }
    })
  }

  getSubTotal() {
    let subTotal: number = 0;
    this.bill.items.forEach(a => subTotal += (a.price * a.quantity));
    return subTotal;
  }

  applyDiscount() {
    return this.getSubTotal() - (this.getSubTotal() * (this.bill.discount / 100));
  }

  getDiscount(){
    return this.getSubTotal() * (this.bill.discount / 100);

  }

}
