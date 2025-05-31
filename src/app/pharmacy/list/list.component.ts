import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/shared/search.service';
import { Pharmacy } from 'src/app/_models/pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoader = false;
  page = 1;
  limit = 20;
  pharmacies: Pharmacy[];
  totalCount = 0;

  pharmacyList: Pharmacy[] = [];
  pharmacyinput$ = new Subject<string>();

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private modal: NgbModal,
    private pharmacyService: PharmacyService,

    private searchService: SearchService,
    private userService: AuthService) { }

  ngOnInit() {
    this.get();
    this.pharmacyinput$.subscribe(
      txt => {
        this.search(txt)
      }
    )
  }
  search(txt = 'MPH') {
    this.searchService.searchPharmacy(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.pharmacyList = response.data;
      } else {
        this.pharmacyList = [];
      }
    });
  }





  // Delete Alert
  delet(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Pharmacy will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.toggleDelete(index);
        Swal.fire(
          'Deleted!',
          'Pharmacy has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Pharmacy not deleted',
          'error'
        )
      }
    });
  }

  // gets all Pharmacy from db
  get() {
    this.isLoader = true;
    this.pharmacyService.get(this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.pharmacies = res.data.docs;
        this.totalCount = res.data.c;
        this.isLoader = false;
      } else {
        this.pharmacies = [];
        this.isLoader = false;
      }
      console.log(this.pharmacies)
    })
  }

  toggleDelete(index) {
    this.userService.toggleDelete(this.pharmacies[index].user._id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('doctor deleted');
        this.get();
      }
    })
  }
  onSearchChange(event) {
    this.onClick(event._id);
  }

  // Mavigates to Pharmacy's Profile Page
  onClick(id) {
    this.router.navigate(['/app/pharmacy/' + id]);
  }

  // Mavigates to Pharmacy's Profile Page
  onClickEdit(id) {
    this.router.navigate(['/app/pharmacy/edit/' + id]);
  }

  onClickPage(e: any) {
    this.page = e.page;
    this.limit = e.limit;
    this.get();
  }
  // onClickPage(page = 0) {
  //   this.page = page;
  //   this.get();
  // }
}
