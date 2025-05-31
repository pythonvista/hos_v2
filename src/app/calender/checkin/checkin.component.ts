import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment, appointmentStatusType } from 'src/app/_models/appointment';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CalenderService } from '../calender.service';
import { PULSE_VOLUME, PULSE_RHYTHM, PULS_EQUALITY } from 'src/app/_constants/pulse';
import { Vital } from 'src/app/_models/vitals';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckinComponent implements OnInit {
  @Input() appointment: Appointment;
  @Output() closeModal = new EventEmitter();

  vitals: Vital[] = [];
  form: FormGroup;
  isFormSubmitted = false;

  volume = PULSE_VOLUME;
  rhythm = PULSE_RHYTHM;
  equality = PULS_EQUALITY;
  temp: number[] = []; // tempratures 

  constructor(private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private calenderService: CalenderService,
    private router: Router) {

  }


  ngOnInit() {
    this.generateTempratures();
    this.create();
    console.log(this.appointment);
  }

  create() {
    this.form = this.formBuilder.group({
      temprature: [''],
      pulseRate: [''],
      pulseVolume: [''],
      pulseRhythm: [''],
      pulseEquality: [''],
      respiratoryRate: [''],
      systolic: [''],
      diastolic: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      oxygensaturation: ['']

    });
  }

  // Returns Form Controls
  get f() { return this.form.controls; }

  onChange(fGroup: FormGroup) {
    fGroup.controls['updatedAt'].patchValue(new Date(Date.now()));
  }


  // on Form Submission
  onSave() {
    let BMI = (this.form.get('weight').value / (this.form.get('height').value * this.form.get('height').value));
    BMI = Number((BMI).toFixed(1));

    this.vitals.push({ name: "temprature", value: this.form.get('temprature').value });
    this.vitals.push({ name: "pulseRate", value: this.form.get('pulseRate').value });
    this.vitals.push({ name: "pulseVolume", value: this.form.get('pulseVolume').value });
    this.vitals.push({ name: "pulseRhythm", value: this.form.get('pulseRhythm').value });
    this.vitals.push({ name: "pulseEquality", value: this.form.get('pulseEquality').value });
    this.vitals.push({ name: "respiratoryRate", value: this.form.get('respiratoryRate').value });
    this.vitals.push({ name: "systolic", value: this.form.get('systolic').value });
    this.vitals.push({ name: "diastolic", value: this.form.get('diastolic').value });
    this.vitals.push({ name: "height", value: this.form.get('height').value });
    this.vitals.push({ name: "weight", value: this.form.get('weight').value });
    this.vitals.push({ name: "bmi", value: BMI.toString() });
    this.vitals.push({ name: "oxygensaturation", value: this.form.get('oxygensaturation').value });


    let notObj = {
      createdBy: this.authService.currentUserValue._id,
      description: 'Your Vitals has been Updated',
      category: 1,
      sentTo: [this.appointment.patient.user._id],

    }



    this.appointment.status = appointmentStatusType.intake;
    this.calenderService.checkin(this.appointment._id, this.appointment.patient._id, { vitals: this.vitals }).subscribe((res: any) => {
      console.log('checkinRes', res)
      if (+res.status === 200) {
        this.closeModal.emit('');
        this.notificationService.sendNotification(notObj);
        this.router.navigate([`app/patient/${this.appointment.patient._id}`]);
      }
    });
  }

  // generates tempratures
  generateTempratures() {
    for (var i = 35.0; i < 41.1; i = i + 0.1) {
      this.temp.push(Number((i).toFixed(1)))
    }
  }

  onOpenCheckOut() {
    alert('checkout is under process');
  }

}
