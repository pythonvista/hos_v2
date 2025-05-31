import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabAttendantService } from '../lab-attendant.service';
import { LabAttendant } from 'src/app/_models/labAttendant';
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
  labAttendants: LabAttendant[];
  totalCount = 0;

  labAttendantsList: LabAttendant[] = [];
  labAttendantInput$ = new Subject<string>();

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private modal: NgbModal,
    private labAttendantService: LabAttendantService,

    private searchService: SearchService,
    private userService: AuthService) { }

  ngOnInit() {
    this.get();
    this.labAttendantInput$.subscribe(
      txt => {

        this.searchLab(txt)
      }
    )
  }
  searchLab(txt = 'MFL') {
    this.searchService.searchlabAttendant(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.labAttendantsList = response.data;
      } else {
        this.labAttendantsList = [];
      }
    });
  }



  // Delete Alert
  delet(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Lab Scientist will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.toggleDelete(index);
        Swal.fire(
          'Deleted!',
          'Lab Scientist has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Lab Scientist not deleted',
          'error'
        )
      }
    });
  }

  // gets all Doctors from db
  get() {
    this.isLoader = true;
    this.labAttendantService.get(this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.labAttendants = res.data.docs;
        this.totalCount = res.data.c;
        this.isLoader = false;
      } else {
        this.labAttendants = [];
        this.isLoader = false;
      }
      console.log(this.labAttendants)
    })
  }

  toggleDelete(index) {
    this.userService.toggleDelete(this.labAttendants[index].user._id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('doctor deleted');
        this.get();
      }
    })
  }
  onSearchChange(event) {
    this.onClick(event._id);
  }

  // Mavigates to LabAttendant's Profile Page
  onClick(id) {
    this.router.navigate(['/app/labattendant/' + id]);
  }

  // Mavigates to LabAttendant's Profile Page
  onClickEdit(id) {
    this.router.navigate(['/app/labattendant/edit/' + id]);
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
