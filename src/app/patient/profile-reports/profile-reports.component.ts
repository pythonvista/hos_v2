import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { ReportService } from '../services/report.service';
import { ResponseMessage } from 'src/app/_models/response';
import { NotifyService } from 'src/app/shared/notify.service';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'src/environments/environment';
import { LabAttendantService } from 'src/app/lab-attendant/lab-attendant.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { LAB_REPORT_CATEGORIES, LAB_REPORT_SUB_CATEGORIES } from 'src/app/_constants/reportCategories';

@Component({
  selector: 'app-profile-reports',
  templateUrl: './profile-reports.component.html',
  styleUrls: ['./profile-reports.component.css']
})
export class ProfileReportsComponent implements OnInit {
  reports = [];
  page = 0;
  limit = 10;
  totalCount = 0;


  selectedSubCategories = [];

  labAttendentList = [];

  reportObj = null
  categories = LAB_REPORT_CATEGORIES;
  subCategories = LAB_REPORT_SUB_CATEGORIES;

  form: FormGroup;
  isFormSubmitted = false;

  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select Category', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: this.categories.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }
  @Input() patientId: string;
  @Input() userId: any;
  @ViewChild('createNewTicket', { static: true }) createNewTicket: TemplateRef<any>;
  @ViewChild('ticket', { static: true }) ticket: TemplateRef<any>;
  constructor(private ngbModal: NgbModal, private formBuilder: FormBuilder, private authService: AuthService, private reportService: ReportService,
    private notifyService: NotifyService, private labAttendentService: LabAttendantService, private notificationService: NotificationService, private _lightbox: Lightbox) { }

  ngOnInit() {
    this.createForm();
    this.getLabAttendentList();
    // alert(this.userId);

  }
  ngOnChanges() {
    if (this.patientId) {
      this.get();
    }
  }
  createForm() {
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }
  get() {
    this.reportService.get(this.patientId, this.page, this.limit).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.reports = res.data.doc;
        this.totalCount = res.data.count;

      }
    })
  }
  get f() { return this.form.controls; }
  open() {
    this.ngbModal.open(this.createNewTicket);
  }
  openDetail(report) {
    this.reportObj = report;
    this.ngbModal.open(this.ticket);
  }
  close() {
    this.ngbModal.dismissAll();
  }
  getImageName(image: string) {
    let arr = image.split('/');
    return arr[arr.length - 1]
  }
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.form.invalid) { return; }

    let notObj = {
      createdBy: this.authService.currentUserValue._id,
      description: 'A Medical Test has been recommended',
      category: 4,
      sentTo: [this.userId],
    }
    if (this.labAttendentList.length > 0) {
      this.labAttendentList.forEach(element => {
        notObj.sentTo.push(element.user._id);
      });
    }


    let ticket = this.form.value;
    ticket.patient = this.patientId;
    ticket.doctor = this.authService.currentUserValue.roleId;
    this.reportService.create(ticket).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.notifyService.success('Report ticket created');
        this.notificationService.sendNotification(notObj);
        this.close();
        this.isFormSubmitted = true;
        this.form.reset();
        this.get();
      }
    })
  }
  openLightBox(index: number): void {
    // open lightbox

    let images = [];
    this.reportObj.files.forEach((element, index) => {
      images[index] = { src: environment.base_url + element };
    });
    console.log('images', images);
    this._lightbox.open(images, index);
  }

  closeLightBox(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  getLabAttendentList() {
    this.labAttendentService.getList().subscribe((res: any) => {
      // console.log('phrmacy List', res);
      if (+res.status === 200) {
        this.labAttendentList = res.data;
        console.log(this.labAttendentList);
      } else {
        this.labAttendentList = [];
      }
    })
  }

  onClickPage(page = 0) {
    this.page = page;
    this.get();
  }
  chnageSubCategory() {
    this.selectedSubCategories = [];
    this.f['subCategory'].setValue('');
    this.selectedSubCategories = this.subCategories[this.categories.indexOf(this.f['category'].value)];
  }
}
