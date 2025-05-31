import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoaderService } from '../shared/loader.service';
import { first } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { UserType } from '../_models/userType';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navbarCollapsed = true;

  showMenu = -1;



  user: User;
  imageSrc;
  constructor(
    private router: Router, public authService: AuthService) {
      // router.events.subscribe((val) => {
      //   if (val instanceof NavigationEnd && !this.isCollapse) {
      //     this.collapse();
      //   }

      // });

    }

    // mini-sidebar
    // 768px width

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.imageSrc = this.user.image ? this.user.image : '../assets/images/users/1.jpg'
    this.imageSrc = environment.base_url + this.imageSrc;

    if(window.innerWidth <= 768) {
      document.querySelector('body').classList.add('mini-sidebar');
    } else {
      document.querySelector('body').classList.remove('mini-sidebar');
    }

  }
  showMenuFunv(menu) {
    if (this.showMenu == menu) {
      return this.showMenu = -1;
    }
    this.showMenu = menu;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToProfile() {
    let route = '/';
    if (this.authService.currentUserValue.role === 'patient') {
      route = `/app/patient/profile/${this.authService.currentUserValue.roleId}`
    } else if (this.authService.currentUserValue.role === 'admin') {
      route = `/app/profile`
    }
    else if (this.authService.currentUserValue.role === 'hospital') {
      route = `/app/hospitals/profile/${this.authService.currentUserValue._id}`
    }
    else if (this.authService.currentUserValue.role === 'doctor') {
      route = `/app/doctor/profile/${this.authService.currentUserValue.roleId}`
    }
    else if (this.authService.currentUserValue.role === 'labAttendant') {
      route = `/app/labattendant/profile/${this.authService.currentUserValue.roleId}`
    }
    else if (this.authService.currentUserValue.role === 'FDO') {
      route = `/app/fdo/profile/${this.authService.currentUserValue.roleId}`
    }

    else if (this.authService.currentUserValue.role === 'pharmacy') {
      route = `/app/pharmacy/profile/${this.authService.currentUserValue.roleId}`
    }
    this.router.navigate([route]);
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
    else if (this.authService.currentUserValue.role === 'FDO') {
      route = `/app/fdo/dash/`
    }

    else if (this.authService.currentUserValue.role === 'pharmacy') {
      route = `/app/pharmacy/dash/`
    }
    this.router.navigate([route]);
  }

  collapse() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('mini-sidebar');
  }
}
