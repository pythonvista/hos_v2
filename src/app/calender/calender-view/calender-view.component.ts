import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  parseISO
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { CalenderService } from '../calender.service';
import { ResponseMessage } from 'src/app/_models/response';
import { Appointment, appointmentStatusType } from 'src/app/_models/appointment';
import { AppointmentComponent } from '../appointment/appointment.component';
import { CheckinComponent } from '../checkin/checkin.component';
import { NotifierService } from 'angular-notifier';
import * as moment from "moment";
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/payment/payment.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  green: {
    primary: '#1bf32e',
    secondary: '#69ef75'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {
  isLoader = false;
  appointments: Appointment[] = [];
  appointment: Appointment;
  intake = false;


  @ViewChild('checkinModal', { static: true }) CheckinComponent: CheckinComponent;

  @ViewChild(AppointmentComponent, { static: false }) appointmentComponent: AppointmentComponent;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private calenderService: CalenderService,
    private paymentService: PaymentService,
    private router: Router,
    private notifier: NotifierService) { }
  ngOnInit() {
    this.get();
  }
  get() {
    this.isLoader = true;
    this.calenderService.getAll().subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.appointments = res.data as Appointment[];
        this.events = this.appointments.map((v) => {
          let a: CalendarEvent = {
            id: v._id,
            start: parseISO(v.startDate.toString()),
            end: parseISO(v.endDate.toString()),
            title: v.reason,
            color: (v.status == appointmentStatusType.scheduled) ? colors.blue :
              (v.status == appointmentStatusType.confirm) ? colors.green :
                (v.status == appointmentStatusType.intake) ? colors.yellow :
                  colors.red
          } // also add the actions from this.actions to change status and edit delete intake
          return a;

        }) as CalendarEvent[];
        console.log('events', this.events)
        this.isLoader = false;
      } else {
        this.appointments = [];
        this.events = [];
      }


    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.setView(CalendarView.Day)
    this.viewDate = date;
  }

  onEventClick(action: string, event: CalendarEvent) {

    this.appointment = this.appointments.find(a => a._id == event.id)
    console.log(this.appointment);

    this.appointmentComponent.open()
  }

  handleEvent(action: string, event: Appointment): void {


  }



  deleteEvent() {
    this.events = this.events.filter(event => event.id !== this.appointment._id);
  }
  editEvent() {
    this.showNotification('success', 'Appointment is Updated.');
    this.get();
  }
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  onClose() {
    this.modal.dismissAll();
    this.intake = false;

  }
  onOpenCheckin() {
    this.onClose();
    this.intake = true;

    this.modal.open(this.CheckinComponent, { size: 'lg' });
  }
  onOpenCheckOut() {
    this.appointment.status = "checkout";
    this.calenderService.put(this.appointment._id,
      Object.assign({}, this.appointment, {
        patient: this.appointment.patient._id, doctor: this.appointment.doctor._id,
        startDate: moment(this.appointment.startDate).format("YYYY-MM-DDTHH:mm"),
        endDate: moment(this.appointment.endDate).format("YYYY-MM-DDTHH:mm"),
      })).subscribe((res: ResponseMessage) => {
        if (+res.status === 200) {
          this.paymentService.saveCheckout(this.appointment.patient, this.appointment.doctor);
          this.modal.dismissAll();


          this.appointment = null;
          this.get();

          this.router.navigate(['/app/payment/add']);
        }
      })
  }
}
