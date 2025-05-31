import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDropDownDirective } from './shared/sidebar-drop-down.directive';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbsharedModule } from './ngbshared/ngbshared.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './_helpers/baseURL.interceptor';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { NotifyService } from './shared/notify.service';
import { LandingComponent } from './landing/landing.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { SocketService } from './socket.service';
import { AddEmployeeComponent } from './contacts/add-employee/add-employee.component';

import { NgxPermissionsModule } from 'ngx-permissions';
import { LightboxModule } from 'ngx-lightbox';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateNativeAdapter } from './_helpers/date-native.adapter';
import { CustomDateParserFormatter } from './_helpers/date-parser';

import { SharedModule } from './shared/shared.module';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AngularEditorComponent, AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { CreateHosRequestComponent } from './create-hosRequest/create-hosRequest.component';
import { RequestSuccessComponent } from './request-success/request-success.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendEmailComponent } from './sendEmail/sendEmail.component';
import { VerifyEmailComponent } from './verifyEmail/verifyEmail.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

const config: SocketIoConfig = { url: environment.base_url, options: {} };


@NgModule({
  declarations: [				
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    LoginComponent,
    CoreComponent,
    DashboardComponent,
    SidebarComponent,
    SidebarDropDownDirective,
    ProfileComponent,
    InboxComponent,
    ContactsComponent,
    LoaderComponent,
    LandingComponent,
    AddEmployeeComponent,
    CreateHosRequestComponent,
    RequestSuccessComponent,
      ForgotPasswordComponent,
      ResetPasswordComponent,
      SendEmailComponent,
      VerifyEmailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbsharedModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    SocketIoModule.forRoot(config),
    NgxPermissionsModule.forRoot(),
    NgbModule,
    LightboxModule,
    SharedModule,
    AngularEditorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  { provide: NgbDateAdapter, useClass: DateNativeAdapter },
  { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    AuthService, LoaderService, NotifyService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
