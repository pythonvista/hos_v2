import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { ResponseMessage } from 'src/app/_models/response';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseCategoryService } from '../services/diseaseCategory.service';
import { DiseaseCategory } from 'src/app/_models/diseaseCategory';
import { NotifierService } from 'angular-notifier';
import { Disease } from 'src/app/_models/disease';
import { Prescription } from 'src/app/_models/prescription';
import Swal from 'sweetalert2';
import { Patient } from 'src/app/_models/patient';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { PharmacyService } from 'src/app/pharmacy/pharmacy.service';

@Component({
  selector: 'app-add-followup',
  templateUrl: './add-followup.component.html',
  styleUrls: ['./add-followup.component.css']
})
export class AddFollowupComponent implements OnInit {
  /**
 * Notifier service
 */
  private notifier: NotifierService;

  /**
  * Constructor
  *
  * @param {NotifierService} notifier Notifier service
  */
  // public constructor( notifier: NotifierService ) {
  // 	this.notifier = notifier;
  // }

  /**
  * Show a notification
  *
  * @param {string} type    Notification type
  * @param {string} message Notification message
  */
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }



  /**
  * Show a specific notification (with a custom notification ID)
  *
  * @param {string} type    Notification type
  * @param {string} message Notification message
  * @param {string} id      Notification ID
  */
  public showSpecificNotification(type: string, message: string, id: string): void {
    this.notifier.show({ id, message, type });
  }

  /**
  * Hide a specific notification (by a given notification ID)
  *
  * @param {string} id Notification ID
  */
  public hideSpecificNotification(id: string): void {
    this.notifier.hide(id);
  }

  pharmacyList = [];

  form: FormGroup;
  prescriptionForm: FormGroup;
  isFormSubmitted: boolean;
  isPrescriptionSubmitted: boolean;


  category: DiseaseCategory;
  patientID: any;
  patient: Patient;
  diseaseCategoryID: any;
  followUpID: any;
  followUp: Disease;
  isFollowUp = false;

  addedPrescriptions: Prescription[] = [];
  isPrescriptionEdit: boolean = false;
  editIndex = null;

  constructor(
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    notifier: NotifierService,
    private patientService: PatientService,
    private diseaseCategoryService: DiseaseCategoryService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notificationService: NotificationService,
    private pharmacyService: PharmacyService,
    private router: Router) { this.notifier = notifier; }

  ngOnInit() {
    this.patientID = this.route.snapshot.paramMap.get('id');
    if (this.patientID) {
      this.getPatient();
    }
    this.diseaseCategoryID = this.route.snapshot.paramMap.get('cid');
    this.followUpID = this.route.snapshot.paramMap.get('fid');
    if (this.followUpID) {
      this.getFollowUp(this.followUpID);
    }
    if (this.diseaseCategoryID) {
      this.getDiseaseCategories(this.diseaseCategoryID);
    }
    this.isFormSubmitted = false;
    this.isPrescriptionSubmitted = false;
    this.create();
    this.cretaePrescriptionForm();
    this.getPharmacyList();
  }

  // creates Reactive Form
  create() {
    this.form = this.formBuilder.group({
      // time: ['', Validators.required],
      // date: ['', Validators.required],
      diseaseSubCategory: ['', Validators.required],
      presentingComplaint: ['', Validators.required],
      historyOfPresentingComplaint: ['', Validators.required],
      physicalExamination: ['', Validators.required],
      provisionalDiagnosis: ['', Validators.required],
      investigations: ['', Validators.required],
      finalDiagnosis: ['', Validators.required],
      treatment: ['', Validators.required],
      outcome: ['', Validators.required],
      prescription: ['']
    });
  }

  cretaePrescriptionForm() {
    this.prescriptionForm = this.formBuilder2.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      days: ['', Validators.required],
      time: this.formBuilder2.group({
        morning: [false],
        afternoon: [false],
        evening: [false],
        night: [false],
      }),
    });
  }

  get f() { return this.form.controls; }

  get f2() { return this.prescriptionForm.controls; }

  getPatient() {
    this.patientService.getById(this.patientID).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.patient = res.data;
      } else {
      }

    })
  }

  // on submit form
  onClickSave() {
    // this.form.patchValue({ date: Date.now() });

    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    // if (this.addedPrescriptions.length <= 0) {
    //   this.showNotification('error', 'add Prescriptions');
    //   this.isFormSubmitted = false;
    //   return;
    // }

    // if (this.isFollowUp) {
    //   this.updateFollowUp();
    //   return;
    // }

    // console.log(this.form.value);

    console.log(this.form.value);

    this.patientService.addFollowUp({ ...this.form.value, diseaseCategory: this.category.category, patient: this.patient.user._id }).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        console.log(res.data);
        this.showNotification('success', 'Medical Follow up successfully added.');
        this.sendNotifications(res.data._id); // sends notification 
        // this.notificationService.sendNotification(notObj);
        this.router.navigate([`/app/patient/${this.patientID}/medical`]);
        this.form.reset();
      } else {
      }
    });
  }

  getDiseaseCategories(id) {
    console.log('here.' + id);
    this.diseaseCategoryService.getSingleDiseaseCategory(id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log(res);
        this.category = res.data[0];
        if (res.data.length == 0) {
          this.category = null;
        }
      }
    })
  }

  getFollowUp(id) {
    this.patientService.getSingleFollowUp(id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log(res);
        this.isFollowUp = true;
        this.followUp = res.data[0];
        this.form.patchValue({
          diseaseSubCategory: this.followUp.diseaseSubCategory,
          presentingComplaint: this.followUp.presentingComplaint,
          historyOfPresentingComplaint: this.followUp.historyOfPresentingComplaint,
          physicalExamination: this.followUp.physicalExamination,
          provisionalDiagnosis: this.followUp.provisionalDiagnosis,
          investigations: this.followUp.investigations,
          finalDiagnosis: this.followUp.finalDiagnosis,
          prescription: this.followUp.prescription,
          treatment: this.followUp.treatment,
          outcome: this.followUp.outcome,
        });
        this.addedPrescriptions = this.form.get('prescription').value;

      } else {
        this.showNotification('warning', 'No history Found Against Specific Disease');
        this.category = res.data[0];
      }
    })
  }

  // updates FollowUp
  updateFollowUp() {
    console.log(this.form.value);
    this.patientService.updateFollowUp(this.followUp._id, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        this.showNotification('success', 'Medical Follow up successfully Updated.')
        this.router.navigate([`/app/patient/${this.patientID}/medical`]);
      }
    })
  }

  onClickCancel() {
    this.router.navigate([`/app/patient/${this.patientID}/medical`]);
  }

  // adds Prescription
  onAddPrescription() {
    this.isPrescriptionSubmitted = true;
    if (this.prescriptionForm.invalid) {
      return;
    }
    if (this.isPrescriptionEdit) {
      this.addedPrescriptions[this.editIndex] = this.prescriptionForm.value;
      this.isPrescriptionEdit = false;
    }
    else {
      this.addedPrescriptions.push(this.prescriptionForm.value);
    }
    this.form.patchValue({ 'prescription': this.addedPrescriptions });
    this.isPrescriptionSubmitted = false;
    this.prescriptionForm.reset();
    this.isPrescriptionSubmitted = false;
  }

  // edits Prescription
  onEditPrescription(i) {
    this.prescriptionForm.reset();
    this.prescriptionForm.setValue(this.addedPrescriptions[i]);
    this.isPrescriptionEdit = true;
    this.editIndex = i;
  }

  //deletes Prescription
  private onDeletePrescription(index) {
    this.addedPrescriptions = this.addedPrescriptions.filter(item => item !== this.addedPrescriptions[index]);
    this.form.patchValue({ 'prescription': this.addedPrescriptions });
    Swal.fire('Deleted!', 'Prescription has been deleted.', 'success');
  }

  // swal Notifier for prescription Delete
  delet(index) {
    Swal.fire({
      title: 'Are you sure?', text: 'Prescription will be Deleted', icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.onDeletePrescription(index);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Prescription not deleted', 'error');
      }
    });
  }

  getPharmacyList() {
    this.pharmacyService.getPharmacyList().subscribe((res: any) => {
      // console.log('phrmacy List', res);
      if (+res.status === 200) {
        this.pharmacyList = res.data;
        console.log(this.pharmacyList);
      } else {
        this.pharmacyList = [];
      }
    })
  }



  // Sends Notifications to patient and pharmacy
  sendNotifications(id) {
    let notObj = {
      createdBy: this.authService.currentUserValue._id,
      description: 'A Prescription has been added',
      category: 5,
      sentTo: [this.patient.user._id],
      naviagteUrl: `/app/patient/profile/${this.patient.user._id}/medical/followup/${id}`
    }
    this.notificationService.sendNotification(notObj); //send notification to patient

    // if prescription is added then sends notification to pharmacy
    if (this.addedPrescriptions.length > 0 && this.pharmacyList.length > 0) {
      notObj.sentTo = [];
      this.pharmacyList.forEach(element => {
        notObj.sentTo.push(element.user._id);
      });
      notObj.naviagteUrl = `app/prescription/${id}`;
      this.notificationService.sendNotification(notObj);
    }
  }
}
