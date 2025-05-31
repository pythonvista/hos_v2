import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';
import { ResponseMessage } from 'src/app/_models/response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doctor } from 'src/app/_models/doctor';
import { Subject } from 'rxjs';
import { Patient } from 'src/app/_models/patient';
import { SearchService } from 'src/app/shared/search.service';
import { PaymentItem } from 'src/app/_models/paymentItem';
import { Bill } from 'src/app/_models/bill';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/_models/user';
import { NotificationService } from 'src/app/shared/notification.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  doctors: Doctor[] = [];
  doctorInput$ = new Subject<string>();

  patients: Patient[] = [];
  patientInput$ = new Subject<string>();

  form: FormGroup;
  form2: FormGroup;

  isFormSubmitted = false;
  isFormSubmitted2 = false;
  paymentItems: PaymentItem[] = [];
  isEdit = false;
  editIndex = null;
  discount = 0;

  hospital: User;

  constructor(private notifier: NotifierService,
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private paymentService: PaymentService,
    private searchService: SearchService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.hospital = this.authService.currentUserValue;
    this.create();
    this.create2();
    this.searchPatient();
    this.searchDoctor();
    this.patientInput$.subscribe(txt => {
      this.searchPatient(txt)
    })
    this.doctorInput$.subscribe(txt => {
      this.searchDoctor(txt)
    })

    // if coming from check out it displays selected patient and doctor
    if (this.paymentService.tempDoctor && this.paymentService.tempPatient) {
      this.patients.push(this.paymentService.getPatient);
      this.doctors.push(this.paymentService.getDoctor);
      this.form2.patchValue({ doctor: this.paymentService.getDoctor._id, patient: this.paymentService.getPatient._id });
    }

  }


  create() {
    this.form = this.formBuilder.group({
      serviceName: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }


  create2() {
    this.form2 = this.formBuilder2.group({
      doctor: ['', Validators.required],
      patient: ['', Validators.required],
      discount: ['0']
    });
  }

  get f2() { return this.form2.controls; }


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
    this.searchService.searchPatient(txt).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        console.log(response.data)
        this.patients = response.data;
      } else {
        this.patients = [];
      }
    });
  }

  // adds billing item to list
  onAddItem() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.isEdit) {
      this.paymentItems[this.editIndex] = this.form.value;
    } else {
      this.paymentItems.push(this.form.value);
    }
    this.isFormSubmitted = false;
    this.form.reset();
  }

  // deletes Billing Item
  onDeleteItem(index) {
    this.paymentItems = this.paymentItems.filter(item => item !== this.paymentItems[index]);
    console.log(this.paymentItems);
  }

  //edits Billing item
  onEditItem(index) {
    this.form.reset();
    this.isEdit = true;
    this.editIndex = index;
    this.form.setValue(this.paymentItems[index]);
  }

  getSubTotal() {
    let subTotal: number = 0;
    this.paymentItems.forEach(a => subTotal += (a.price * a.quantity));
    return subTotal;
  }

  applyDiscount() {
    return this.getSubTotal() - (this.getSubTotal() * (this.discount / 100));
  }

  delete(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Bill Item will be Deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.onDeleteItem(index);
        Swal.fire('Deleted!', 'Bill Item has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Bill Item is Safe', 'error')
      }
    });
  }

  onProceed() {
    this.isFormSubmitted2 = true;
    if (this.form2.invalid) {
      return;
    }

    if (this.paymentItems.length <= 0) {
      this.showNotification('error', 'add bill items');
      this.isFormSubmitted2 = false;
      return;
    }

    let b: Bill = this.form2.value;
    b.items = this.paymentItems;
    b.totalAmount = this.applyDiscount();

    // let notObj = {
    //   createdBy: this.authService.currentUserValue._id,
    //   description: 'A payment is due',
    //   category: 3,
    //   sentTo: [this.patients.find(x => x._id === this.f2['patient'].value).user._id],
    //   naviagteUrl: ''
    //   // sentTo: [this.patients.find(x => x._id === this.f['patient'].value).user._id],
    // }
    // notObj.sentTo.push(this.authService.currentUserValue.hospital);

    this.paymentService.post(b).subscribe((response: any) => {
      if (response.status == '200') {
        // console.log(response);
        // notObj.naviagteUrl = `/app/payment/invoice/${response.data._id}`
        // // console.log(notObj.naviagteUrl);
        // this.notificationService.sendNotification(notObj);
        this.showNotification('success', 'Payment Added');
        this.router.navigate(['app/payment/']);
      } else {
        this.showNotification('error', 'Something went wrong');
      }
    });
    // console.log('---->',b);
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  /**
  * Hide oldest notification
  */
  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

  /**
  * Hide newest notification
  */
  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  /**
  * Hide all notifications at once
  */
  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  /**
  * Show a specific notification (with a custom notification ID)
  *
  * @param {string} type    Notification type
  * @param {string} message Notification message
  * @param {string} id      Notification ID
  */
  public showSpecificNotification(type: string, message: string, id: string): void {
    this.notifier.show({
      id,
      message,
      type
    });
  }

  /**
  * Hide a specific notification (by a given notification ID)
  *
  * @param {string} id Notification ID
  */
  public hideSpecificNotification(id: string): void {
    this.notifier.hide(id);
  }

}
