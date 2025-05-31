import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from '../hospital.service';
import { ResponseMessage } from 'src/app/_models/response';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NotifyService } from 'src/app/shared/notify.service';
import { states } from 'src/app/_constants/states';
import { AuthService } from 'src/app/auth.service';
import { NotifierService } from 'angular-notifier';
import { FileUploader } from 'ng2-file-upload';
import { HosRequestService } from 'src/app/request/hos-request.service';
import Swal from 'sweetalert2';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isLoader = false;
  url: string = `${environment.base_url}images/user.jpg`;
  public uploader: FileUploader = new FileUploader({ url: `${environment.base_url}api/upload` });

  form: FormGroup;
  isFormSubmitted = false;

  isPasswordFromSubmit = false;
  passwordForm: FormGroup;

  states = states;
  returnUrl;
  hospitalId;
  isEdit = false;
  hospital;

  constructor(private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private hospitalService: HospitalService,
    private hosRequestService: HosRequestService,
    private userService: AuthService,
    private router: Router,
    public notifier: NotifierService,
    private notifyService: NotifyService,
    private activatedRoute: ActivatedRoute,
  ) { }

  @ViewChild('inp', { static: false }) inp: ElementRef;
  ngOnInit() {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'app/doctor';
    this.activatedRoute.params.subscribe(params => {
      this.hospitalId = (params['id']);
      // if route is coming form request page
      if (this.hospitalId && this.router.url.includes("request")) {
        this.getRequestData(this.hospitalId);
      }
      else if (this.hospitalId) {
        this.getHospital(this.hospitalId);
        this.isEdit = true;
      }
      this.createForm();
      this.createPasswordForm();
    });

    this.uploader.onAfterAddingFile = (file) => {
      if (this.uploader.queue.length > 1) {
        this.uploader.removeFromQueue(this.uploader.queue[0]);
      }
      file.onSuccess = (res: any) => {
        this.f.image.patchValue(JSON.parse(res).url);
      };
    };


  }

  getHospital(id) {
    this.isLoader = true;
    this.hospitalService.getById(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.hospital = res.data;
        this.form.patchValue({
          name: this.hospital.user.name,
          email: this.hospital.user.email,
          password: this.hospital.user.password,
          address: this.hospital.user.address,
          image: this.hospital.user.image,
          city: this.hospital.user.city,
          state: this.hospital.user.state,
          phone: this.hospital.user.phone,
          directorName: this.hospital.directorName,
          directorPhone: this.hospital.directorPhone,
          description: this.hospital.description,
        });

        this.isLoader = false;
      } else {
        this.router.navigate(['app/hospitals']);
      }
    })
  }

  getRequestData(id) {
    this.hosRequestService.get(id).subscribe((res: any) => {
      if (+res.status === 200) {
        console.log(res);
        this.form.patchValue(res.body.data);
      } else {
        this.router.navigate(['/app/request'])
      }
    })
  }

  createForm() {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        address: ['', Validators.required],
        image: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        phone: ['', [Validators.required, Validators.maxLength(15)]],
        directorName: ['', Validators.required],
        directorPhone: ['', [Validators.required, Validators.maxLength(15)]],
        description: [''],
        role: ['hospital']
      }
    )
  }

  get f() { return this.form.controls; }

  onSave() {
    console.log(this.form.invalid)
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.hospitalId && this.isEdit) {
      this.updateUser();
      return;
    }


    console.log(this.form.value)
    this.hospitalService.post(this.form.value)
      .subscribe((response: ResponseMessage) => {
        if (response.status == '200') {
          if (this.hospitalId && this.router.url.includes("request")) {
            this.updateStatus(); // updates request status
          }
          this.notifyService.success('Hospital Added Successfully.');
          // navigate to list page
          this.router.navigate(['app/hospitals']);
        }
      });

  }

  updateUser() {
    let user = this.hospital.user;
    user.address = this.f['address'].value;
    user.city = this.f['city'].value;
    user.email = this.f['email'].value;
    user.image = this.f['image'].value || this.hospital.user.image;
    user.name = this.f['name'].value;
    user.phone = this.f['phone'].value;
    user.state = this.f['state'].value;
    user.hospital = this.hospital._id;
    console.log(user);
    this.userService.updateUser(this.hospital.user._id, user).subscribe((res: any) => {
      if (res.status === 200) {
        this.updateHospital();
      }
      else {
        this.notifyService.success('Hospital Updated Successfully.');
        this.router.navigate(['app/hospitals/']);
      }
    })
  }

  // Updates Hospital
  updateHospital() {
    this.hospitalService.putHospital(this.hospital._id, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Hospital Updated Successfully.');
        this.router.navigate(['app/hospitals/']);
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate(['app/hospitals/']);
      }
    })
  }

  inputClick() {
    this.inp.nativeElement.click();
  }

  // Shows Notifications
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }


  updateStatus() {
    this.hosRequestService.updateStatus(this.hospitalId, { status: 2 }).subscribe((res: any) => {
      if (+res.status === 200) {
        console.log("Request status Updated");
      }
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
