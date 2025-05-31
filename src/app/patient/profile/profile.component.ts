import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/_models/patient';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { environment } from 'src/environments/environment';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { PatientService } from '../patient.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  /**
 * Notifier service
 */
  private notifier: NotifierService;

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }


  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '6',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };


  // fixedDiseaseValue;
  problems_PastMedicalHistoryValue;
  drugHistoryValue;
  surgicalHistoryValue;
  obstetrics_GynacologyHistoryValue;
  vaccinesValue;
  allergiesValue;

  isButtonVisible = false;

  tab = 1;
  patient: Patient;
  vitals = [];
  verticalVitals = [];
  horizontalVitals = [];
  constructor(private modal: NgbModal, private router: Router,
    private activatedRoute: ActivatedRoute,
    notifier: NotifierService,
    private patientService: PatientService,
    private authService: AuthService,
    private notifyService: NotifyService
  ) { this.notifier = notifier; }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.get(params['id']);

    });
  }
  get(id) {
    this.isLoader = true;
    this.patientService.getById(id).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.patient = res.data;
        // this.seprateVitals(res.data.vitals);
        this.problems_PastMedicalHistoryValue = this.patient.problems_PastMedicalHistory;
        this.drugHistoryValue = this.patient.drugHistory;
        this.surgicalHistoryValue = this.patient.surgicalHistory;
        this.obstetrics_GynacologyHistoryValue = this.patient.obstetrics_GynacologyHistory;
        this.vaccinesValue = this.patient.vaccines;
        this.allergiesValue = this.patient.allergies;
        this.isLoader = false;
      } else {
        this.router.navigate(['app/patient']);
      }

    })
  }

  // seprateVitals(vitals = []) {
  //   console.log('vitals ', vitals.length, vitals)
  //   this.horizontalVitals = vitals.filter(vi => {

  //     if (vi.key == 'weight') {
  //       return true;
  //     } else if (vi.key == 'bmiStatus') {
  //       return true;
  //     } else if (vi.key == 'pulse') {
  //       return true;
  //     } else if (vi.key == 'bmi') {
  //       return true;
  //     } else if (vi.key == 'oxygenSaturation') {
  //       return true;
  //     }
  //     return false;
  //   });
  //   this.verticalVitals = vitals.filter(vi => {

  //     if (vi.key == 'heartbeat') {
  //       return true;
  //     } else if (vi.key == 'sugar') {
  //       return true;
  //     } else if (vi.key == 'haemoglobin') {
  //       return true;
  //     } else if (vi.key == 'respiratoryrate') {
  //       return true;
  //     } else if (vi.key == 'temprature') {
  //       return true;
  //     }
  //     return false;
  //   })
  // }

  get ImageSrc() {
    if (this.patient) {

      return environment.base_url + this.patient.user.image;
    }
    return environment.base_url + 'images/user.jpg';
  }

  _calculateAge(birthday) { // birthday is a date
    if (birthday) {
      birthday = new Date(birthday);
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return 0;
  }

  onclickTab(tab) {
    this.tab = tab;
  }
  onClose() {
    this.modal.dismissAll();

  }
  onOpen() {
    this.modal.open(this.modalContent);
  }
  markAsActive() {

    this.authService.toggleactive(this.patient.user._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.patient.user.active = !this.patient.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }

  // Updates Value
  onSaveDiseaseChange(diseaseType, value) {
    this.isButtonVisible = false;
    // console.log(diseaseType, value);
    this.patientService.updateFixedDisease(this.patient._id, { diseaseType, value }).subscribe((res: any) => {
      if (res.status === 200) {
        this.showNotification('success', 'Data Updated Successfully');
      } else {
        this.showNotification('error', 'something went wrong');
      }
    });
  }

  onChnageAccordian() {
    console.log('here')
    this.isButtonVisible = false;
  }

  checkTemprature(t) {
    return (t > 37.5 || t < 36.5) ? true : false;
  }

  checkPulseRate(p) {
    return (p > 100 || p < 60) ? true : false;
  }

  checkCyclesPerMin(c) {
    return (c > 18 || c < 12) ? true : false;
  }

  checkSystolic(s) {
    return (s > 139 || s < 90) ? true : false;
  }

  checkDiastolic(d) {
    return (d > 89 || d < 60) ? true : false;
  }

  checkOxygen(o) {
    return (0 > 100 || o < 92) ? true : false;
  }

  goToEdit() {
    this.router.navigate(['/app/patient/edit/', this.patient._id], { queryParams: { returnUrl: this.router.url } });
  }
}
