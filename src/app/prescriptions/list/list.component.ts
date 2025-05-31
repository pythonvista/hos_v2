import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyService } from 'src/app/pharmacy/pharmacy.service';

@Component({
  selector: 'app-payments',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  result = null;
  page = 1;
  limit = 10;


  constructor(private router: Router,
    private pharmacyService: PharmacyService,
  ) { }

  ngOnInit() {
    this.getAllPrescriptions();
  }

  getAllPrescriptions() {
    this.pharmacyService.getPrescriptions(this.page, this.limit).subscribe((res: any) => {
      this.result = res;
      console.log(this.result);

    })
  }


  onClick(id) {
    this.router.navigate(['app/prescription/', id]);
  }

  pageChange(page) {
    this.page = page;
    this.getAllPrescriptions();
  }

}
