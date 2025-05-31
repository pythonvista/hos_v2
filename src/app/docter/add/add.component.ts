import { Component, OnInit, createPlatformFactory, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DoctorService } from '../doctor.service';
import { ResponseMessage } from 'src/app/_models/response';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Doctor } from 'src/app/_models/doctor';
import { AuthService } from 'src/app/auth.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { states } from 'src/app/_constants/states';
import { FileUploader } from 'ng2-file-upload';
import Swal from 'sweetalert2';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';


/**
 * Component Add Doctor
 */
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  isLoader = false;

  public uploader: FileUploader = new FileUploader({ url: `${environment.base_url}api/upload` });

  cadres = ['House officer', 'Resident', 'Senior Resident', 'Consultant', 'Medical officer', 'General practitioner',];
  departments = ['Surgery', 'Internal Medicine',
    'Obstetrics and Gynaecology', 'Paediatrics',
    'Dentistry', 'Community Medicine', 'Family Medicine',
    'Psychiatry', 'Accident and emergency doctors', 'Geriatrics',
    'Hematology', 'Microbiology', 'Chemical pathology', 'Anatomic pathology',
    'Physiotherapy', 'Nutrition and dietetics'];
  specialties = [];
  form: FormGroup;

  isPasswordFromSubmit = false;
  passwordForm: FormGroup;

  isFormSubmitted: boolean = false;
  editDoctor: Doctor = null;
  doctorId: any = null;
  isEdit: boolean = false;
  url: string = `${environment.base_url}images/user.jpg`;
  todayDate = new Date(Date.now());
  minDate: NgbDateStruct = { year: this.todayDate.getFullYear() - 100, month: 1, day: 1 };
  maxDate: NgbDateStruct = { year: this.todayDate.getFullYear(), month: this.todayDate.getMonth(), day: this.todayDate.getDate() };

  states = states;
  returnUrl
  @ViewChild('inp', { static: false }) inp: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,

    private doctorService: DoctorService,
    private userService: AuthService,
    private notifier: NotifierService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'app/doctor';
    this.activatedRoute.params.subscribe(params => {
      this.doctorId = (params['id']);
      if (this.doctorId) {
        this.getDoctor(this.doctorId);
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
      cadre: ['', Validators.required],
      department: [''],
      specialty: [''],
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
      role: ['doctor']
    });



    if (this.editDoctor != null) {
      this.form.setValue({ name: this.editDoctor.user.name });
    }
  }

  get f() { return this.form.controls; }
  get isDept() {
    let v = this.f.cadre.value;
    const isDpt = (v != this.cadres[0] && v != this.cadres[4] && v != this.cadres[5]);
    if (isDpt) {
      this.f.department.setValidators([Validators.required])
    } else {
      this.f.department.clearValidators();
    }
    this.f.department.updateValueAndValidity();
    return isDpt;
  }
  get isSp() {
    let v = this.f.cadre.value;
    let isS = (v != 'House officer' && v != 'Medical officer' && v != 'General practitioner' && v !== 'Resident');
    if (!isS) {
      this.f.specialty.clearValidators();
      this.f.specialty.updateValueAndValidity();
    } else {
      if (this.f.department.value == 'Surgery') {
        this.specialties = [
          'General surgery',
          'Urology',
          'Burns and plastic unit',
          'Neurosurgery',
          'Orthopedics',
          'Cardiothoracic',
          'ENT surgery',
          'Ophthalmology',
        ]
      } else if (this.f.department.value == 'Internal Medicine') {

        this.specialties = [
          'Nephrology',
          'Cardiology',
          'Chest',
          'Dermatology',
          'Oncology',
          'Neurology',
          'Gastrointestinal unit( G.I.T.)',
          'Rheumatology',
          'Infectious disease',

        ];
      } else if (this.f.department.value == 'Paediatrics') {
        this.specialties = [
          'Nephrology',
          'Cardiology',
          'Neonatologist',
          'Infectious Disease',
          'Chest',
          'Hematology',
          'Neurology',

        ];
      } else {
        this.f.specialty.clearValidators();
        this.f.specialty.updateValueAndValidity();

        return false;
      }

      this.f.specialty.setValidators([Validators.required]);
      this.f.specialty.updateValueAndValidity();

    }
    return isS;
  }
  onClickSave() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.doctorId) {
      this.updateUser();
      return;
    }

    this.doctorService.post(this.form.value).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        // navigate to list page
        this.showNotification('success', 'Doctor is successfully added.');
        this.router.navigate(['app/doctor']);
      }
    });
  }

  inputClick() {
    this.inp.nativeElement.click();
  }


  getDoctor(id) {
    this.isLoader = true;
    this.doctorService.getById(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.editDoctor = res.data;
        this.form.patchValue({
          name: this.editDoctor.user.name,
          cadre: this.editDoctor.cadre,
          department: this.editDoctor.department,
          specialty: this.editDoctor.specialty,
          description: this.editDoctor.description,
          dob: new Date(this.editDoctor.dob),
          gender: this.editDoctor.gender,
          email: this.editDoctor.user.email,
          password: this.editDoctor.user.password,
          address: this.editDoctor.user.address,
          city: this.editDoctor.user.city,
          state: this.editDoctor.user.state,
          phone: this.editDoctor.user.phone,
          image: this.editDoctor.user.image,

        });
        this.isLoader = false;
      } else {
        this.editDoctor = null;
        this.isLoader = false;
      }
    })
  }

  // Updates User
  updateUser() {
    let user = this.editDoctor.user;

    user.address = this.f['address'].value;
    user.city = this.f['city'].value;
    user.email = this.f['email'].value;
    user.image = this.f['image'].value || this.editDoctor.user.image;
    user.name = this.f['name'].value;
    user.phone = this.f['phone'].value;
    user.state = this.f['state'].value;

    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      if (res.status === 200) {
        this.updateDoctor();
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate(['app/doctor']);
      }
    })
  }

  // Updates Doctor
  updateDoctor() {
    this.doctorService.upateDoctor(this.doctorId, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Doctor Updated Successfully.');
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this.router.navigate([this.returnUrl]);
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
