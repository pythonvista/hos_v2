import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Options } from 'ng5-slider';
import { SearchService } from 'src/app/shared/search.service';
import { ResponseMessage } from 'src/app/_models/response';
import { Doctor } from 'src/app/_models/doctor';
import { Patient } from 'src/app/_models/patient';
import { CalenderService } from '../calender.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import * as moment from "moment";
import { Subject, concat, of } from 'rxjs';
import { NotificationService } from 'src/app/shared/notification.service';
import { AuthService } from 'src/app/auth.service';
import { FrontDeskOfficerService } from 'src/app/frontDeskOfficer/front-desk-officer.service';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  isFormSubmitted = false;
  fdoList = [];
  minDate = undefined;



  todayDate = new Date(Date.now());

  doctors: Doctor[] = [];
  doctorInput$ = new Subject<string>();

  patients: Patient[] = [];
  patientInput$ = new Subject<string>();

  form: FormGroup;
  sliderValue: number = 30;
  options: Options = {
    floor: 0,
    ceil: 120
  };
  time = { hour: 13, minute: 30 };
  model;
  constructor(private formBuilder: FormBuilder,
    private config: NgbDatepickerConfig,
    private authService: AuthService,
    private router: Router,
    private fdoService: FrontDeskOfficerService,

    private notifier: NotifierService,

    private calenderService: CalenderService,
    private searchService: SearchService,
    private notificationService: NotificationService
  ) {
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate()
    };
    //config.maxDate = { year: 2099, month: 12, day: 31 };
    config.outsideDays = 'hidden';


  }

  ngOnInit() {
    this.create();
    this.searchPatient();
    this.searchDoctor();
    this.getFDOList();
    this.patientInput$.subscribe(
      txt => {

        this.searchPatient(txt)
      }
    )
    this.doctorInput$.subscribe(
      txt => {

        this.searchDoctor(txt)
      })
  }
  create() {
    this.form = this.formBuilder.group({
      patient: [null, Validators.required],
      doctor: [null, Validators.required],
      startDate: [this.todayDate, Validators.required],
      endDate: [''],
      status: ['scheduled'],
      reason: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  get statusControl() { return this.form.controls.status }
  get reasonControl() { return this.form.controls.reason }

  get endDateControl() { return this.form.controls.endDate }
  get startDateControl() { return this.form.controls.startDate }
  get startDatevalue() { return this.form.controls.startDate.value }



  onStatusClick(status) {
    this.statusControl.patchValue(status)
  }
  onSliderValueChange() {
    this.endDateControl.patchValue(this.addMinutes(new Date(this.startDateControl.value), this.sliderValue));
  }
  addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
  searchDoctor(txt = 'MFM') {
    this.searchService.searchDoctor(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.doctors = response.data;
      } else {
        this.doctors = [];
      }
    });
  }
  searchPatient(txt = 'MFP') {
    console.log(txt);

    this.searchService.searchPatient(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.patients = response.data;
        console.log(this.patients);
      } else {
        this.patients = [];
      }
    });
  }


  get timeValue() { return this.time.hour + '-' + this.time.minute }



  onClickSave() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    let startDate = moment(this.form.controls.startDate.value.toISOString().split('T')[0] + "T" + this.time.hour.toString() + ":" + this.time.minute.toString());
    this.form.controls.startDate.patchValue(startDate.format("YYYY-MM-DDTHH:mm"));
    this.form.controls.endDate.patchValue(startDate.add(this.sliderValue, 'minutes').format("YYYY-MM-DDTHH:mm"));

    // console.log(this.patients, this.f['patient'].value);

    // let notObj = {
    //   createdBy: this.authService.currentUserValue._id,
    //   description: 'An Appointment for you has been booked',
    //   category: 2,
    //   sentTo: [this.patients.find(x => x._id === this.f['patient'].value).user._id],

    //   // sentTo: [this.patients.find(x => x._id === this.f['patient'].value).user._id],
    // }

    // if (this.authService.currentUserValue.role === 'FDO' || this.authService.currentUserValue.role === 'hospital') {
    //   notObj.sentTo.push(this.doctors.find(x => x._id === this.f['doctor'].value).user._id)
    // }

    // if (this.fdoList.length > 0) {
    //   this.fdoList.forEach(element => {
    //     if (this.authService.currentUserValue._id !== element.user._id) {
    //       notObj.sentTo.push(element.user._id);
    //     }
    //   });
    // }


    this.calenderService.book(this.form.value).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.showNotification('success', 'Appointment is successfully added.');
        // this.notificationService.sendNotification(notObj);

        this.router.navigate(['app/calender']);
      } else {
        alert(`Can't Book Appointment`);
      }
    });

  }


  getFDOList() {
    this.fdoService.getFDOsList().subscribe((res: any) => {
      // console.log('phrmacy List', res);
      if (+res.status === 200) {
        this.fdoList = res.data;
        // console.log(this.fdoList);
      } else {
        this.fdoList = [];
      }
    })
  }
}
