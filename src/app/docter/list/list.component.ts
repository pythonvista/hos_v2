import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ResponseMessage } from 'src/app/_models/response';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoader = false;
  page = 1;
  limit = 20;
  doctors: Doctor[];
  totalCount = 0;

  // sweeet alert
  doctorsList: Doctor[] = [];
  doctorInput$ = new Subject<string>();
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private modal: NgbModal,
    private doctorService: DoctorService,

    private searchService: SearchService,
    private userService: AuthService) { }

  ngOnInit() {
    this.get();
    this.doctorInput$.subscribe(
      txt => {

        this.searchDoctor(txt)
      })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content);
  }

  searchDoctor(txt = 'MFP') {
    this.searchService.searchDoctor(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.doctorsList = response.data;
      } else {
        this.doctorsList = [];
      }
    });
  }
  // Delete Alert
  delet(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Doctor will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.toggleDelete(index);
        Swal.fire(
          'Deleted!',
          'Doctor has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Doctor not deleted',
          'error'
        )
      }
    });
  }
  onSearchChange(event) {
    this.onClick(event._id)
  }
  // gets all Doctors from db
  get() {
    this.isLoader = true;
    this.doctorService.get(this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        // console.log(res);

        this.doctors = res.data.docs;
        this.totalCount = res.data.c;
        this.isLoader = false;
      } else {
        this.isLoader = false;
        this.doctors = [];
      }
      console.log(this.doctors)
    })
  }

  toggleDelete(index) {
    this.userService.toggleDelete(this.doctors[index].user._id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('doctor deleted');
        this.get();
      }
    })
  }


  // Mavigates to Doctor's Profile Page
  onClick(id) {
    this.router.navigate(['/app/doctor/' + id]);
  }

  // Mavigates to Doctor's Profile Page
  onClickEdit(id) {
    this.router.navigate(['/app/doctor/edit/' + id]);
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
