import { Component, OnInit, createPlatformFactory, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LabAttendantService } from '../lab-attendant.service';
import { ResponseMessage } from 'src/app/_models/response';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { LabAttendant } from 'src/app/_models/labAttendant';
import { AuthService } from 'src/app/auth.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { states } from 'src/app/_constants/states';
import { FileUploader } from 'ng2-file-upload';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';
import Swal from 'sweetalert2';


/**
 * Component Add Lab Attenadant
 */
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  isLoader = false;
  public uploader: FileUploader = new FileUploader({ url: `${environment.base_url}api/upload` });

  states = states;
  form: FormGroup;
  isFormSubmitted: boolean = false;
  isPasswordFromSubmit = false;
  passwordForm: FormGroup;
  editLabAttendant: LabAttendant = null;
  labAttendantId: any = null;
  isEdit: boolean = false;
  url: string = `${environment.base_url}images/user.jpg`;

  todayDate = new Date(Date.now());
  minDate: NgbDateStruct = { year: this.todayDate.getFullYear() - 100, month: 1, day: 1 };
  maxDate: NgbDateStruct = { year: this.todayDate.getFullYear(), month: this.todayDate.getMonth(), day: this.todayDate.getDate() };
  categories = [
    "Hematology",
    "Chemical pathology",
    "Microbiology",
    "Anatomic pathology",
  ]
  @ViewChild('inp', { static: false }) inp: ElementRef;
  returnUrl;
  constructor(private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private labAttendantService: LabAttendantService,
    private userService: AuthService,
    private notifier: NotifierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'app/labattendant';
    this.activatedRoute.params.subscribe(params => {
      this.labAttendantId = (params['id']);
      if (this.labAttendantId) {
        this.getLabAttendant(this.labAttendantId);
        this.isEdit = true;
      }
    });
    this.create();
    this.createPasswordForm();
    this.uploader.onAfterAddingFile = (file) => {
      if (this.uploader.queue.length > 1) {
        this.uploader.removeFromQueue(this.uploader.queue[0]);
      }
      file.onSuccess = (res: any) => {
        this.f.image.patchValue(JSON.parse(res).url);
      };
    };
  }


  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  create() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      role: ['labAttendant']
    });



    if (this.editLabAttendant != null) {
      this.form.setValue({ name: this.editLabAttendant.user.name });
    }
  }

  get f() { return this.form.controls; }

  onClickSave() {
    console.log('form value', this.form.value)
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.labAttendantId) {
      this.updateUser();
      return;
    }

    this.labAttendantService.post(this.form.value).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Lab Scientist is successfully added.');
        this.router.navigate(['/app/labattendant']);

      }
    });
  }

  inputClick() {
    this.inp.nativeElement.click();
  }

  getLabAttendant(id) {
    this.isLoader = true;
    this.labAttendantService.getById(id).subscribe((res: any) => {
      if (res.status === 200) {
        this.editLabAttendant = res.data;
        // console.log(this.editLabAttendant);


        this.form.patchValue({
          name: this.editLabAttendant.user.name,
          category: this.editLabAttendant.category,
          description: this.editLabAttendant.description,
          dob: new Date(this.editLabAttendant.dob),
          gender: this.editLabAttendant.gender,
          email: this.editLabAttendant.user.email,
          password: this.editLabAttendant.user.password,
          address: this.editLabAttendant.user.address,
          city: this.editLabAttendant.user.city,
          state: this.editLabAttendant.user.state,
          phone: this.editLabAttendant.user.phone,
          image: this.editLabAttendant.user.image
        });
        this.isLoader = false;
      } else {
        this.editLabAttendant = null;
      }
    })
  }

  // Updates User
  updateUser() {
    let user = this.editLabAttendant.user;

    user.address = this.f['address'].value;
    user.city = this.f['city'].value;
    user.email = this.f['email'].value;
    user.image = this.f['image'].value || this.editLabAttendant.user.image;
    user.name = this.f['name'].value;
    user.phone = this.f['phone'].value;
    user.state = this.f['state'].value;

    console.log('user', user);

    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      if (res.status === 200) {
        this.updateLabAttendant();
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate(['/app/labattendant']);
      }
    }, error => {
      console.log('server error ', error)
    })
  }

  // Updates LabAttendant
  updateLabAttendant() {
    this.labAttendantService.upate(this.labAttendantId, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Lab Scientist Updated Successfully.');
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate([this.returnUrl]);
      }
    }, error => {
      console.log('server error ', error)
    })
  }


  // password Section Form
  createPasswordForm() {
    this.passwordForm = this.formBuilder2.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]],
    }, {
      validator: ConfirmPasswordValidator('newPassword', 'confirmNewPassword')
    });
  }

  get f2() { return this.passwordForm.controls; }

  // password Section Submit Button Actions
  onSubmitPasswordForm() {
    this.isPasswordFromSubmit = true;
    if (this.passwordForm.invalid) {
      return;
    }

    this.userService.updatePassword(this.passwordForm.value).subscribe((res: any) => {
      if (+res.status === 200) {
        Swal.fire('Password Updated!', '', 'success');
        this.userService.logout();
        this.router.navigate(['/login']);
        this.passwordForm.reset();
        this.isPasswordFromSubmit = false;
      } else {
        Swal.fire({ icon: 'error', title: 'Error!', text: 'Password Updation Failed', })
      }
    }, err => {
      Swal.fire({ icon: 'error', title: 'Error!', text: 'Password  Invalid', })
    });
  }

}
