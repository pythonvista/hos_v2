import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  title = '';
  btnTitle = '';
  btnNavigation = '';
  btnIcon = '';
  constructor(private router: Router, private authService: AuthService, private _location: Location) {
    this.router.events.subscribe(event => {
      const url = this.router.url;
      if (url == '/app/patient') {
        this.title = 'Patients'
        if (authService.currentUserValue.role == 'hospital' || authService.currentUserValue.role == 'FDO') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }
        this.btnNavigation = '/app/patient/add';
        this.btnIcon = 'fa fa-plus-circle';
      }
      // Update Details Back Button
      else if (url.includes("app/patient/edit")) {
        this.title = 'Patient Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes("app/labattendant/edit")) {
        this.title = 'Lab Scientist Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }

      else if (url.includes("app/doctor/edit/")) {
        this.title = 'Doctor Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes("app/fdo/edit/")) {
        this.title = 'Front Desk Officer Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }

      else if (url.includes("app/pharmacy/edit/")) {
        this.title = 'Pharmacy Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes("app/hospitals/edit/")) {
        this.title = 'Hospital Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = null;
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url == '/app/patient/add') {
        this.title = 'Add Patient';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/patient';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/patient/dash') {
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      }
      else if (url.includes('add-followup')) {
        this.title = 'Add Followup';
        this.btnTitle = 'Back';
        this.btnNavigation = url.replace(url.slice(url.indexOf("add-followup"), url.length), '');
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes('followup')) {
        this.title = 'Followup';
        this.btnTitle = 'Back';
        this.btnNavigation = url.replace(url.slice(url.indexOf("followup"), url.length), '');
        this.btnIcon = 'fa fa-arrow-circle-left';
      }

      else if (url.includes('medical')) {
        this.title = 'Medical History';
        this.btnTitle = 'Back';
        this.btnNavigation = url.replace('/medical', '');
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url.includes('/app/patient/profile')) {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url.includes('/app/patient')) {
        this.title = 'Patient Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/patient';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/patient/1/medical') {
        this.title = 'Medical History';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      }
      else if (url.includes('/app/hospitals/dash')) {
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      }
      else if (url.includes('app/hospitals/profile')) {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '/';
        this.btnIcon = '';
      }
      else if (url.includes('/app/hospitals/profile')) {
        this.title = 'Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/hospitals';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes('/app/hospitals/add')) {
        this.title = 'Add Hospital';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/hospitals';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }

      else if (url.includes('/app/hospitals')) {
        this.title = 'Hospitals';
        this.btnTitle = 'Add New';
        this.btnNavigation = '/app/hospitals/add';
        this.btnIcon = 'fa fa-plus-circle';
      }

      else if (url == '/app/doctor') {
        this.title = 'Doctors'
        if (authService.currentUserValue.role == 'hospital') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }

        this.btnNavigation = '/app/doctor/add';
        this.btnIcon = 'fa fa-plus-circle';


      } else if (url == '/app/doctor/add') {
        this.title = 'Add Doctor';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/doctor';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes('/app/doctor/profile')) {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '/';
        this.btnIcon = '';
      }
      else if (url.includes('/app/doctor')) {
        this.title = 'Doctor Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/doctor';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url == '/app/pharmacy') {
        this.title = 'Pharmacies'
        if (authService.currentUserValue.role == 'hospital') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }

        this.btnNavigation = '/app/pharmacy/add';
        this.btnIcon = 'fa fa-plus-circle';


      } else if (url == '/app/pharmacy/add') {
        this.title = 'Add Pharmacy';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/pharmacy';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url.includes('/app/pharmacy/profile')) {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '/app/pharmacy';
        this.btnIcon = '';
      }
      // else if (url.includes('/app/pharmacy/profile')) {
      //   this.title = 'pharmacy Profile';
      //   this.btnTitle = 'Back';
      //   this.btnNavigation = '/app/pharmacy';
      //   this.btnIcon = 'fa fa-arrow-circle-left';
      // }
      else if (url == '/app/labattendant') {
        this.title = 'Lab Scientist'
        if (authService.currentUserValue.role == 'hospital') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }

        this.btnNavigation = '/app/labattendant/add';
        this.btnIcon = 'fa fa-plus-circle';


      } else if (url == '/app/fdo/add') {
        this.title = 'Add Front Desk Officer';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/fdo';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/fdo/dash') {
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url.includes('/app/fdo/profile')) {
        this.title = 'Front Desk Officer Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/fdo';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url == '/app/fdo') {
        this.title = 'Front Desk Officer'
        if (authService.currentUserValue.role == 'hospital') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }

        this.btnNavigation = '/app/fdo/add';
        this.btnIcon = 'fa fa-plus-circle';


      } else if (url == '/app/labattendant/add') {
        this.title = 'Add Lab Scientist';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/labattendant';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/labattendant/dash') {
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url.includes('/app/labattendant/profile')) {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url.includes('/app/labattendant')) {
        this.title = 'Lab Scientist Profile';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/labattendant';
        this.btnIcon = 'fa fa-arrow-circle-left';
      }
      else if (url == '/app/payment') {
        this.title = 'Payment';
        authService.currentUserValue.role == 'patient' ? this.btnTitle = "" : this.btnTitle = 'Add New';

        // this.btnTitle = 'Add New';
        this.btnNavigation = '/app/payment/add';
        this.btnIcon = 'fa fa-plus-circle';
      } else if (url == '/app/payment/add') {
        this.title = 'Add Payment';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/payment';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/user') {
        this.title = 'Users';
        this.btnTitle = 'Add New';
        this.btnNavigation = '/app/user/add';
        this.btnIcon = 'fa fa-plus-circle';
      } else if (url == '/app/user/add') {
        this.title = 'Add User';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/user';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/hospital') {
        this.title = 'Hospitals';
        this.btnTitle = 'Add New';
        this.btnNavigation = '/app/hospital/add';
        this.btnIcon = 'fa fa-plus-circle';
      } else if (url == '/app/hospital/add') {
        this.title = 'Add Hospital';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/hospital';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/request') {
        this.title = 'Incoming Requests';
        this.btnTitle = '';
        this.btnNavigation = '/app';
        this.btnIcon = '';
      } else if (url == '/app/calender') {
        this.title = 'Appointments';
        if (authService.currentUserValue.role == 'doctor' || authService.currentUserValue.role == 'hospital' || authService.currentUserValue.role == 'FDO') {

          this.btnTitle = 'Add New';
        } else {
          this.btnTitle = '';
        }

        this.btnNavigation = '/app/calender/book';
        this.btnIcon = 'fa fa-plus-circle';
      } else if (url == '/app/calender/book') {
        this.title = 'Book an Appointment';
        this.btnTitle = 'Back';
        this.btnNavigation = '/app/calender';
        this.btnIcon = 'fa fa-arrow-circle-left';
      } else if (url == '/app/reports/sales') {
        this.title = 'Sales Report';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/reports/income') {
        this.title = 'Income Report';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/reports/payments') {
        this.title = 'Payments Report';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/home') {
        this.title = 'Dashboard';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/contacts') {
        this.title = 'Employee Contacts';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/contact') {
        this.title = 'Patient Contacts';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/reports/stats') {
        this.title = 'Reports';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/inbox') {
        this.title = 'Inbox';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else if (url == '/app/profile') {
        this.title = 'Profile';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      } else {
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
      }
    });
  }

  ngOnInit() {
  }
  get isTittle() { return this.title !== '' }
  onClick() {
    if (!this.btnNavigation) {
      this.goBack();
      return;
    }
    this.router.navigate([this.btnNavigation]);
  }

  goBack() {
    this._location.back();
  }

}
