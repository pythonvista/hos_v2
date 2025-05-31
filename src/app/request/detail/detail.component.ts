import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotifierService } from 'angular-notifier';
import { NotifyService } from 'src/app/shared/notify.service';
import { states } from 'src/app/_constants/states';
import Swal from 'sweetalert2';
import { HosRequestService } from '../hos-request.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  isLoader = false;
  form: FormGroup;
  result = null;

  states = states;
  // isEdit = false;

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
    private activatedRoute: ActivatedRoute,
    private hosRequestService: HosRequestService,
    private router: Router,
    public notifier: NotifierService,
    private notifyService: NotifyService,
  ) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.getRequestData(params['id']);
      }
    });
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group(
      {
        name: [{ value: '', disabled: true }, Validators.required],
        email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
        address: [{ value: '', disabled: true }],
        city: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }, Validators.required],
        coverLetter: [{ value: '', disabled: true }, Validators.required],
        staffDetails: [{ value: '', disabled: true }, Validators.required],
        directorName: [{ value: '', disabled: true }],
        directorPhone: [{ value: '', disabled: true }],
        // description: [''],
      }
    )
  }

  get f() { return this.form.controls; }


  getRequestData(id) {
    this.isLoader = true;
    this.hosRequestService.get(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.isLoader = false;

        console.log(res.body.data);
        this.result = res.body.data;
        this.form.patchValue(res.body.data)

      }
    })
  }


  // Delete Alert
  reject(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Request will be Rejected',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reject it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.updateStatus(id);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Doctor not deleted',
          'error'
        )
      }
    });
  }

  updateStatus(id) {
    this.hosRequestService.updateStatus(id, { status: 3 }).subscribe((res: any) => {
      if (+res.status === 200) {
        this.result.status = 3;
        Swal.fire(
          'Rejected!',
          'Request has been Rejected.',
          'success'
        )
      }
    })
  }

  naviagteToaddHos(id) {
    this.router.navigate([`/app/hospitals/request`, id]);
  }

}
