
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { MedicalComponent } from './medical/medical.component';
import { AddFollowupComponent } from './add-followup/add-followup.component';
import { FollowupComponent } from './followup/followup.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProfilesComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'dash', component: DashboardComponent },
      {
        path: ':id', children: [
          { path: '', component: ProfileComponent },
          { path: 'medical', component: MedicalComponent },
          { path: 'medical/followup/:id', component: FollowupComponent },
          { path: 'medical/add-followup/:cid', component: AddFollowupComponent },
          { path: 'medical/add-followup/:fid/category/:cid', component: AddFollowupComponent }

        ]
      },
      {
        path: 'profile/:id', children: [
          { path: '', component: ProfileComponent },
          { path: 'medical', component: MedicalComponent },
          { path: 'medical/followup/:id', component: FollowupComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
