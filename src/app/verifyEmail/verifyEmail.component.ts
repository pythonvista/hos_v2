import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verifyEmail',
  templateUrl: './verifyEmail.component.html',
  styleUrls: ['./verifyEmail.component.css']
})
export class VerifyEmailComponent implements OnInit {
  private routeSub: Subscription;
  accessToken: any = null;

  error: any = null;

  loading = false;

  returnUrl: string;
  isIncorrect;
  isloading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/app']);
    }

    this.routeSub = this.route.params.subscribe(params => {
      this.accessToken = params['token'];
      if (this.accessToken) {
        this.authService.verifyEmailLink({ accessToken: this.accessToken }).subscribe((res: any) => {
          console.log(res);
          if (+res.status === 200) {
            this.authService.saveUser(res.body);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Email Verified Successfully',
              showConfirmButton: false,
              timer: 1000
            })
            this.goToDashboard();

            // Swal.fire('Email Verified Successfully', '', 'success');
          }

        }, err => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: err.error.info, });
          this.router.navigate(['/login'])
        })


      } else {
        this.router.navigate(['/login']);
      }

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




}
