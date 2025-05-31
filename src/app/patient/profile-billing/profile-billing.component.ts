import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/payment/payment.service';
import { Bill } from 'src/app/_models/bill';

@Component({
  selector: 'app-profile-billing',
  templateUrl: './profile-billing.component.html',
  styleUrls: ['./profile-billing.component.css']
})
export class ProfileBillingComponent implements OnInit {
  page = 0;
  limit = 10;
  totalCount = 0;
  id:any;

  billsList:Bill[]=[];

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    private paymentService:PaymentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      console.log(params['id'])
      this.id = params['id'];
      if (this.id){
        this.getAll(this.id);
      }
    });
  }

  addBill(){
    this.router.navigate(['app/payment/add/']);
  }

  getAll(id){
    this.paymentService.getByPatient(id,this.page,this.limit).subscribe((res:any)=>{
      if (res.status == '200') {
        console.log(res);
        this.billsList = res.data.doc;
        this.totalCount=res.data.count;
      } else {
        this.billsList = [];
      }
    })

  }

  onClick(id){
    this.router.navigate(['/app/payment/invoice/',id]);

  }

  onClickPage(page = 0) {
    this.page = page;
    this.getAll(this.id);
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
