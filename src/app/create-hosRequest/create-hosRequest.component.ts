import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';
import { HosRequestService } from '../request/hos-request.service';
import { NotifyService } from '../shared/notify.service';
import { states } from '../_constants/states';
import { ResponseMessage } from '../_models/response';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-create-hosRequest',
  templateUrl: './create-hosRequest.component.html',
  styleUrls: ['./create-hosRequest.component.css']
})
export class CreateHosRequestComponent implements OnInit {

  isLoader = false;
  form: FormGroup;
  isFormSubmitted = false;
  states = states;
  isEdit = false;

  adminID;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',

    maxHeight: '15rem',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };


  constructor(private formBuilder: FormBuilder,
    private hosRequestService: HosRequestService,
    private router: Router,
    public notifier: NotifierService,
    private notifyService: NotifyService,
    private notificationService: NotificationService,

  ) { }


  ngOnInit() {
    this.createForm();
    this.getAdmin();
  }

  createForm() {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: [''],
        city: [''],
        state: [''],
        phone: ['', [Validators.required, Validators.maxLength(15)]],
        coverLetter: ['', Validators.required],
        staffDetails: ['', Validators.required],
        directorName: [''],
        directorPhone: ['', Validators.maxLength(15)],
        // description: [''],
      }
    )
  }

  get f() { return this.form.controls; }

  onSave() {
    this.isFormSubmitted = true;
    if (this.form.invalid) { return; }

    console.log(this.form.value);
    this.hosRequestService.post(this.form.value)
      .subscribe((response: any) => {
        console.log(response);
        if (+response.status === 200) {
          this.notifyService.success('Hospital Request Submitted Successfully.');
          this.sendNotification();
          this.router.navigate(['/success']);
        }
      }, err => {
        console.log(err);
        if (err.status === 409) {
          Swal.fire({
            icon: 'error',
            title: '',
            text: err.error.data.msg,
          })
        }
        if (err.status === 500) {
          Swal.fire({
            icon: 'error',
            title: '',
            text: 'Server Error',
          })
        }
      });
  }

  sendNotification() {
    let notObj = {
      createdBy: 'Public Request',
      description: 'Hospital Request is received',
      category: 6,
      sentTo: [this.adminID],
    }

    this.notificationService.sendHosRequestNotification(notObj);
  }

  // Shows Notifications
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  // gets admin ID form DB
  // used to send notification to admin
  getAdmin() {
    this.hosRequestService.getAdminID().subscribe((res: any) => {
      if (+res.status === 200) {
        this.adminID = res.body.data;
      }
    })
  }

}
