import { Component, EventEmitter, Input, OnChanges, Output, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ng5-slider';
import { Appointment } from 'src/app/_models/appointment';
import { parseISO, differenceInMinutes } from 'date-fns';
import * as moment from "moment";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalenderService } from '../calender.service';
import { NotifierService } from 'angular-notifier';
import { ResponseMessage } from 'src/app/_models/response';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnChanges {
  @Input() appointment: Appointment;

  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() onOpenCheckin = new EventEmitter();
  @Output() onOpenCheckOut = new EventEmitter();

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;




  todayDate = new Date(Date.now());

  form: FormGroup;
  sliderValue: number = 30;
  options: Options = {
    floor: 0,
    ceil: 120
  };
  time = { hour: 13, minute: 30 };

  constructor(private formBuilder: FormBuilder,
    private modal: NgbModal, private calenderService: CalenderService,
    private authService: AuthService,
    private notifier: NotifierService
  ) { }

  ngOnChanges() {
    if (this.appointment) {
      this.create();


      this.sliderValue = differenceInMinutes(parseISO(this.appointment.endDate.toString()), parseISO(this.appointment.startDate.toString()));

      // update the Date and time value
      this.time = {
        hour: new Date(this.appointment.startDate).getHours(),
        minute: new Date(this.appointment.startDate).getMinutes()
      }
    }


  }
  open() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  create() {
    this.form = this.formBuilder.group({
      patient: [this.appointment.patient._id],
      doctor: [this.appointment.doctor._id],
      startDate: [new Date(this.appointment.startDate)],
      endDate: [''],
      status: [{ value: this.appointment.status, disabled: this.isDisabled }],
      reason: [this.appointment.reason]
    });
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


  get timeValue() { return this.time.hour + '-' + this.time.minute }



  getUpdatedAppointment() {

    let startDate = moment(this.form.controls.startDate.value.toISOString().split('T')[0] + "T" + this.time.hour.toString() + ":" + this.time.minute.toString());
    this.form.controls.startDate.patchValue(startDate.format("YYYY-MM-DDTHH:mm"));
    this.form.controls.endDate.patchValue(startDate.add(this.sliderValue, 'minutes').format("YYYY-MM-DDTHH:mm"));

    return this.form.value;


  }
  onClose() {
    this.modal.dismissAll();

  }

  ondeleteEvent() {
    this.calenderService.delete(this.appointment._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        // delete output
        this.deleteEvent.emit();

        this.onClose();
        this.appointment = null;
      }
    });
  }
  oneditEvent() {

    let f = this.getUpdatedAppointment();

    this.calenderService.put(this.appointment._id, f).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {

        // edit out put
        this.editEvent.emit();

        this.modal.dismissAll();
      } else {
        alert(`Can't Book Appointment`);
      }
    });
  }
  OpenCheckin() {
    // output
    this.onOpenCheckin.emit();

  }
  OpenCheckOut() {
    // output
    this.onOpenCheckOut.emit();
  }


  get isDisabled(): boolean {
    console.log(this.authService.currentUserValue.role);

    return this.authService.currentUserValue.role !== 'doctor' ? true : false;
  }

}
