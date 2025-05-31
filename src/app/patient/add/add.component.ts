import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from 'src/app/_models/response';
import { NotifierService } from 'angular-notifier';
import { Patient } from 'src/app/_models/patient';
import { AuthService } from 'src/app/auth.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { states } from 'src/app/_constants/states';
import { DiseaseCategoryService } from '../services/diseaseCategory.service';
import { DiseaseCategory } from 'src/app/_models/diseaseCategory';
import { FileUploader } from 'ng2-file-upload';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: `${environment.base_url}api/upload` });

  states = states;
  form: FormGroup;
  isFormSubmitted = false;
  isPasswordFromSubmit = false;
  passwordForm: FormGroup;
  editPatient: Patient = null;
  patienId: any = null;
  isEdit: boolean = false;
  url: string = `${environment.base_url}images/user.jpg`;

  defaultDiseasesList: DiseaseCategory[] = [];

  todayDate = new Date(Date.now());
  // minDate = this.todayDate;
  minDate: NgbDateStruct = { year: this.todayDate.getFullYear() - 100, month: 0, day: 1 };
  maxDate: NgbDateStruct = { year: this.todayDate.getFullYear(), month: this.todayDate.getMonth(), day: this.todayDate.getDate() };
  @ViewChild('inp', { static: false }) inp: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private _location: Location,
    private formBuilder2: FormBuilder,
    private patientService: PatientService,
    private userService: AuthService,
    private diseaseCategoryService: DiseaseCategoryService,
    public notifier: NotifierService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.create();
    this.createPasswordForm();

    // this.initilizeDefaultCategories();

    this.activatedRoute.params.subscribe(params => {
      this.patienId = (params['id']);
      if (this.patienId) {
        this.isEdit = true;
        this.getPatient(this.patienId);
      }
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


  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  create() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      occupation: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      city: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      tribe: ['', Validators.required],
      religion: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required],
      role: ['patient']

    });
  }

  get f() { return this.form.controls; }

  onClickSave() {
    console.log(this.form.value)
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      // console.log(this.form.errors)
      for (const field in this.form.controls) { // 'field' is a strin
        const control = this.form.get(field); // 'control' is a FormControl
        console.log('control', control.errors)
      }
      return;
    }
    if (this.patienId) {
      this.updateUser();
      return;
    }

    this.patientService.post(this.form.value).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        // navigate to list page
        let id = res.data._id;
        console.log(id, this.defaultDiseasesList);
        this.showNotification('success', 'Patient is successfully added.')
        this.router.navigate(['app/patient']);
      }
    });
  }

  inputClick() {
    this.inp.nativeElement.click();
  }


  getPatient(id) {
    this.patientService.getById(id).subscribe((res: any) => {
      if (res.status === 200) {
        this.editPatient = res.data;
        console.log(this.editPatient);


        this.form.patchValue({
          name: this.editPatient.user.name,
          occupation: this.editPatient.occupation,
          description: this.editPatient.description,
          dob: new Date(this.editPatient.dob),
          gender: this.editPatient.gender,
          maritalStatus: this.editPatient.maritalStatus,
          tribe: this.editPatient.tribe,
          religion: this.editPatient.religion,
          email: this.editPatient.user.email,
          password: this.editPatient.user.password,
          address: this.editPatient.user.address,
          city: this.editPatient.user.city,
          state: this.editPatient.user.state,
          phone: this.editPatient.user.phone,
          image: this.editPatient.user.image

        });
      } else {
        this.editPatient = null;
      }
    })
  }

  // Updates User
  updateUser() {
    let user = this.editPatient.user;

    user.address = this.f['address'].value;
    user.city = this.f['city'].value;
    user.email = this.f['email'].value;
    user.image = this.f['image'].value || this.editPatient.user.image;
    user.name = this.f['name'].value;
    user.phone = this.f['phone'].value;
    user.state = this.f['state'].value;

    console.log(user);
    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      if (res.status === 200) {
        this.updatePatient();
      }
      else {
        this.showNotification('error', 'An Error Occured');
        this._location.back();
        // this.router.navigate(['app/patient']);
      }
    })
  }

  // Updates Patient
  updatePatient() {
    this.patientService.updatePatient(this.patienId, this.form.value).subscribe((res: any) => {
      if (res.status === 200) {
        // navigate to list page
        this.showNotification('success', 'Patient Updated Successfully.');
        this._location.back();
        // this.router.navigate(['app/patient']);
      }
      else {
        this.showNotification('error', 'An Error Occured');
        // this.router.navigate(['app/patient']);
        this._location.back();

      }
    })
  }

  // initilizeDefaultCategories() {
  //   this.defaultDiseasesList.push({ _id: null, category: "Problems/Past Medical History", subCategories: [] });
  //   this.defaultDiseasesList.push({ _id: null, category: "Drug History", subCategories: [] });
  //   this.defaultDiseasesList.push({ _id: null, category: "Surgical History", subCategories: [] });
  //   this.defaultDiseasesList.push({ _id: null, category: "Obstetrics and gynacology History", subCategories: [] });
  //   this.defaultDiseasesList.push({ _id: null, category: "Vaccines", subCategories: [] });
  //   this.defaultDiseasesList.push({ _id: null, category: "Allergies", subCategories: [] });
  // }



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
