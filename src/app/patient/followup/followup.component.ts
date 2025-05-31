import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Disease } from 'src/app/_models/disease';
import { Prescription } from 'src/app/_models/prescription';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent implements OnInit {

  followUpID: any;
  followUp: Disease

  addedPrescriptions: Prescription[] = [];



  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.followUpID = (params['id']);
      if (this.followUpID) {
        this.getFollowUp(this.followUpID);
      }
    });
  }

  // gets follow up from DB
  getFollowUp(id) {
    this.patientService.getSingleFollowUp(id).subscribe((res: any) => {
      if (res.status === 200) {
        console.log(res);
        this.followUp = res.data[0];
        this.addedPrescriptions = this.followUp.prescription;
      }
    })
  }



}
