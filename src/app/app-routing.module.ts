import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './_gaurds/auth.gaurd';
import { LandingComponent } from './landing/landing.component';
import { AddEmployeeComponent } from './contacts/add-employee/add-employee.component';
import { CreateHosRequestComponent } from './create-hosRequest/create-hosRequest.component';
import { RequestSuccessComponent } from './request-success/request-success.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendEmailComponent } from './sendEmail/sendEmail.component';
import { VerifyEmailComponent } from './verifyEmail/verifyEmail.component';




const routes: Routes = [

  {
    path: '', component: LandingComponent
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot', component: ForgotPasswordComponent
  },
  {
    path: 'sendEmail', component: SendEmailComponent
  },
  {
    path: 'emailVerify/:token', component: VerifyEmailComponent
  },
  {
    path: 'resetpassword/:token', component: ResetPasswordComponent
  },
  {
    path: 'hosRequest', component: CreateHosRequestComponent
  },
  {
    path: 'success', component: RequestSuccessComponent
  },
  {
    path: 'app', component: CoreComponent, canActivate: [AuthGuard], children: [

      { path: 'dash', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'contacts/add', component: AddEmployeeComponent },

      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: InboxComponent },
      { path: 'pinbox', component: InboxComponent },

      { path: 'doctor', loadChildren: () => import('./docter/docter.module').then(m => m.DocterModule) },
      { path: 'labattendant', loadChildren: () => import('./lab-attendant/lab-attendant.module').then(m => m.LabAttendantModule) },
      { path: 'fdo', loadChildren: () => import('./frontDeskOfficer/front-desk-officer.module').then(m => m.FrontDeskOfficerModule) },
      { path: 'pharmacy', loadChildren: () => import('./pharmacy/pharmacy.module').then(m => m.PharmacyModule) },
      { path: 'prescription', loadChildren: () => import('./prescriptions/prescription.module').then(m => m.PrescriptionModule) },


      { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
      { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'request', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
      { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
      { path: 'calender', loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule) },
      { path: 'hospitals', loadChildren: () => import('./hospitals/hospitals.module').then(m => m.HospitalsModule) },

      { path: 'ticket', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule) },
      { path: '', redirectTo: 'dash' , pathMatch: 'full'},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
