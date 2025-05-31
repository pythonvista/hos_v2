import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/shared/search.service';
import { FrontDeskOfficer } from 'src/app/_models/frontDeskOfficer';
import { FrontDeskOfficerService } from '../front-desk-officer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoader = false;
  page = 1;
  limit = 20;
  fdos: FrontDeskOfficer[];
  totalCount = 0;

  fdosList: FrontDeskOfficer[] = [];
  fdoinput$ = new Subject<string>();

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private modal: NgbModal,
    private frontDeskOfficer: FrontDeskOfficerService,

    private searchService: SearchService,
    private userService: AuthService) { }

  ngOnInit() {
    this.get();
    this.fdoinput$.subscribe(
      txt => {

        this.searchFDO(txt)
      }
    )
  }
  searchFDO(txt = 'MFF') {
    this.searchService.searchFDO(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.fdosList = response.data;
      } else {
        this.fdosList = [];
      }
    });
  }



  // Delete Alert
  delet(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Front Desk Officer will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.toggleDelete(index);
        Swal.fire(
          'Deleted!',
          'Front Desk Officer has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Front Desk Officernot deleted',
          'error'
        )
      }
    });
  }

  // gets all Doctors from db
  get() {
    this.isLoader = true;
    this.frontDeskOfficer.get(this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.fdos = res.data.docs;
        this.totalCount = res.data.c;
        this.isLoader = false;
      } else {
        this.fdos = [];
        this.isLoader = false;
      }
      console.log(this.fdos)
    })
  }

  toggleDelete(index) {
    this.userService.toggleDelete(this.fdos[index].user._id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('doctor deleted');
        this.get();
      }
    })
  }
  onSearchChange(event) {
    this.onClick(event._id);
  }

  // Mavigates to FrontDeskOfficer's Profile Page
  onClick(id) {
    this.router.navigate(['/app/fdo/' + id]);
  }

  // Mavigates to FrontDeskOfficer's Profile Page
  onClickEdit(id) {
    this.router.navigate(['/app/fdo/edit/' + id]);
  }

  // onClickPage(page = 0) {
  //   this.page = page;
  //   this.get();
  // }

  onClickPage(e: any) {
    this.page = e.page;
    this.limit = e.limit;
    this.get();
  }
}
