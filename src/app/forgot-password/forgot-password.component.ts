import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  error: any = null;

  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isIncorrect;
  isloading = false;
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

  create() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }



  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.isloading = true;
    this.authService.forgot(this.form.value).subscribe((res: any) => {
      this.isloading = false;

      // console.log(res);
      if (res.status === 200) {
        Swal.fire('An email with password reset Link has sent to your Email')
        this.router.navigate(['/login']);
      } else if (res.status === 204) {
        this.error = 'Email does not exist';
        this.submitted = false;
      }
    }, err => {
      // console.log(err);
      this.isloading = false;
      this.error = err.error.errors;
    });
  }


}
