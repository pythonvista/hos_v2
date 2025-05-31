import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from '../patient.service';
import { ResponseMessage } from 'src/app/_models/response';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth.service';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {



  isLoader = false;
  patientsList: Patient[] = [];
  patientInput$ = new Subject<string>();


  page = 1;
  limit = 20;
  totalCount = 0;
  patients: Patient[];

  constructor(private router: Router,
    private patientService: PatientService,
    private searchService: SearchService,
    private userService: AuthService) { }

  ngOnInit() {
    this.get();
    this.patientInput$.subscribe(
      txt => {

        this.searchPatient(txt)
      }
    )
  }
  searchPatient(txt = 'MFP') {
    this.searchService.searchPatient(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.patientsList = response.data;
      } else {
        this.patientsList = [];
      }
    });
  }
  get() {
    this.isLoader = true;
    this.patientService.get(this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        console.log(res);
        this.patients = res.data.docs;
        this.totalCount = res.data.c;
        this.isLoader = false;
      } else {
        this.patients = [];
        this.isLoader = false;
      }
      console.log(this.patients)
    })
  }
  onSearchChange(event) {
    this.onClickProfile(event._id);
  }
  onClickProfile(id) {
    this.router.navigate(['/app/patient/' + id]);
  }

  onClickEdit(id) {
    console.log('edit clicked');
    this.router.navigate(['/app/patient/edit/' + id]);
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
  // Delete Alert
  delet(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Patient will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.toggleDelete(index);
        Swal.fire(
          'Deleted!',
          'Patient has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Patient not deleted',
          'error'
        )
      }
    });
  }
  toggleDelete(index) {
    this.userService.toggleDelete(this.patients[index].user._id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('doctor deleted');
        this.get();
      }
    })
  }
}
