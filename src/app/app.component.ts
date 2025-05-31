import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SocketService } from './socket.service';
import { AuthService } from './auth.service';
import { User } from './_models/user';
import { NgxPermissionsService } from 'ngx-permissions';
import { NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hospital';
  constructor(private router: Router, private socketSerive: SocketService, private authService: AuthService,
    private permissionsService: NgxPermissionsService,
    private config: NgSelectConfig
  ) { }
  ngOnInit() {
    this.authService.currentUser.subscribe((user: User) => {
      console.log('user role', user);
      if (user) {
        this.permissionsService.loadPermissions([user.role]);
      } else {
        this.permissionsService.loadPermissions([]);
      }
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
