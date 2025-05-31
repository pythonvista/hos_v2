import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoaderService } from '../shared/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  emailVerify: boolean = false;

  isIncorrect;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loader: LoaderService,
    private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/app']);
    }
    this.create();

  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  create() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.login();
    }
  }
  login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loader.loading.next(true);
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.status == '200') {
            this.goToDashboard()
          }
          this.isIncorrect = res.msg;
        }, err => {
          if (err.status === 422) {
            Swal.fire({ icon: 'error', title: 'Oops...', text: "Email Not Verified" })
            this.isIncorrect = err.error.info;
            this.emailVerify = true;

          }
          else {
            this.isIncorrect = 'Username or Password is incorrect.';

          }

        }).add(() => {
          this.loader.loading.next(false);
        });
  }
  goToDashboard() {

    let route = '/';
    if (this.authService.currentUserValue.role === 'patient') {
      route = `/app/patient/dash`
    } else if (this.authService.currentUserValue.role === 'admin') {
      route = `/app/dash`
    }
    else if (this.authService.currentUserValue.role === 'hospital') {
      route = `/app/hospitals/dash`
    }
    else if (this.authService.currentUserValue.role === 'doctor') {
      route = `/app/doctor/dash`
    }
    else if (this.authService.currentUserValue.role === 'labAttendant') {
      route = `/app/labattendant/dash`
    }
    else if (this.authService.currentUserValue.role === 'pharmacy') {
      route = `/app/pharmacy/dash`
    }
    else if (this.authService.currentUserValue.role === 'FDO') {
      route = `/app/fdo/dash`
    }
    this.router.navigate([route]);
  }


  naviagteForgot() {
    this.router.navigate(['/forgot']);
  }

  navigateSendVerificationEmail() {
    this.router.navigate(['/sendEmail']);
  }
}
