import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from 'src/app/_models/response';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/auth.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { states } from 'src/app/_constants/states';
import { FileUploader } from 'ng2-file-upload';
import { Pharmacy } from 'src/app/_models/pharmacy';
import { PharmacyService } from '../pharmacy.service';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';
import Swal from 'sweetalert2';


/**
 * Component Add Front Desk officer
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
  editPharmacy: Pharmacy = null;
  pharmacyID: any = null;
  isEdit: boolean = false;
  url: string = `${environment.base_url}images/user.jpg`;

  todayDate = new Date(Date.now());
  minDate: NgbDateStruct = { year: this.todayDate.getFullYear() - 100, month: 1, day: 1 };
  maxDate: NgbDateStruct = { year: this.todayDate.getFullYear(), month: this.todayDate.getMonth(), day: this.todayDate.getDate() };

  @ViewChild('inp', { static: false }) inp: ElementRef;
  returnUrl;
  constructor(private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private pharmacyService: PharmacyService,
    private userService: AuthService,
    private notifier: NotifierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'app/pharmacy';
    this.activatedRoute.params.subscribe(params => {
      this.pharmacyID = (params['id']);
      if (this.pharmacyID) {
        this.getPharmacy(this.pharmacyID);
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
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      role: ['pharmacy']
    });



    if (this.editPharmacy != null) {
      this.form.setValue({ name: this.editPharmacy.user.name });
    }
  }

  get f() { return this.form.controls; }

  onClickSave() {
    console.log('form value', this.form.value)
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.pharmacyID) {
      this.updateUser();
      return;
    }

    this.pharmacyService.post(this.form.value).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Pharmacy is successfully added.');
        this.router.navigate(['/app/pharmacy']);

      }
    });
  }

  inputClick() {
    this.inp.nativeElement.click();
  }

  getPharmacy(id) {
    this.isLoader = true;
    this.pharmacyService.getById(id).subscribe((res: any) => {
      if (res.status === 200) {
        this.editPharmacy = res.data;

        this.form.patchValue({
          name: this.editPharmacy.user.name,
          description: this.editPharmacy.description,
          email: this.editPharmacy.user.email,
          password: this.editPharmacy.user.password,
          address: this.editPharmacy.user.address,
          city: this.editPharmacy.user.city,
          state: this.editPharmacy.user.state,
          phone: this.editPharmacy.user.phone,
          image: this.editPharmacy.user.image
        });
        this.isLoader = false;
      } else {
        this.editPharmacy = null;
        this.isLoader = false;
      }
    })
  }

  // Updates User
  updateUser() {
    let user = this.editPharmacy.user;
    user.address = this.f['address'].value;
    user.city = this.f['city'].value;
    user.email = this.f['email'].value;
    user.image = this.f['image'].value || this.editPharmacy.user.image;
    user.name = this.f['name'].value;
    user.phone = this.f['phone'].value;
    user.state = this.f['state'].value;
    console.log('user', user);

    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      if (res.status === 200) {
        this.updatePharmacy();
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate(['/app/pharmacy']);
      }
    }, error => {
      console.log('server error ', error)
    })
  }

  // Updates Pharmacy
  updatePharmacy() {
    this.pharmacyService.update(this.pharmacyID, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Pharmacy Updated Successfully.');
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
