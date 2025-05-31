import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { ConfirmPasswordValidator } from '../_helpers/confirm-password';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  isFormSubmit = false;
  form: FormGroup;
  isloading = false;


  error: any = null;
  private routeSub: Subscription;
  accessToken: any = null;


  isConsultant: boolean = true;
  isCompnany: boolean = false;
  activeTab = 0;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.isFormSubmit = false;
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.accessToken = params['token'];
    });
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      token: [this.accessToken]
    }, {
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isFormSubmit = true;
    if (this.form.invalid) {
      return;
    }
    // console.log(this.form.value);
    this.authService.passwordReset(this.form.value).subscribe((res: any) => {
      console.log(res);

      this.isloading = false;

      if (+res.status === 200) {
        Swal.fire('Password Reset Successful!', '', 'success')
        this.router.navigate(['/login']);

      } else if (res.status === 204) {
        this.error = 'Verification Email has expired!';
        this.isFormSubmit = false;
      }
    }, err => {
      // console.log(err);
      this.isloading = false;
      this.error = err.error.errors;
    });
  }

}
