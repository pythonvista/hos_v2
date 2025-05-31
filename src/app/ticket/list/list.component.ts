import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { ResponseMessage } from 'src/app/_models/response';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';
import { Lightbox } from 'ngx-lightbox';
import { NotificationService } from 'src/app/shared/notification.service';
import { FileUploader } from 'ng2-file-upload';
import { UnlinkService } from 'src/app/unlink.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: `${environment.base_url}api/upload` });
  uploadFiles = []; // uploadFiles for uploading in chat


  isLoader = false;
  page = 0;
  limit = 10;

  category = 'Coagulation';
  reports = [];
  upcommingReports = [];
  pendingReports = [];
  historyReports = [];

  form: FormGroup;
  reportObj = null;
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('ticket', { static: true }) ticket: TemplateRef<any>;

  constructor(private ngbModal: NgbModal, private ticketService: TicketService, private formBuilder: FormBuilder,
    private unlinkService: UnlinkService, private authService: AuthService, private notifyService: NotifyService,
    private _lightbox: Lightbox, private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.get();
    this.create();
    this.initilizeUploader();
  }

  // initilizes Uploader
  initilizeUploader() {
    this.uploader.onAfterAddingFile = (file) => {
      file.onSuccess = (res: any) => {
        this.uploadFiles.push(JSON.parse(res).url);
        this.f.files.setValue(this.uploadFiles);
      };
    };
  }

  get() {
    this.isLoader = true;
    // this.page, this.limit, 
    this.ticketService.getByLabAttendant().subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.reports = res.data;
        console.log(this.reports);
        this.upcommingReports = this.reports.filter(element => (element.status == 'scheduled'));
        this.pendingReports = this.reports.filter(element => (element.status == 'pending'));
        this.historyReports = this.reports.filter(element => (element.status == 'complete'));
        this.isLoader = false;
      }
    })
  }

  // initilizes Form
  create() {
    this.form = this.formBuilder.group({
      description: [''],
      files: [],
      status: ['complete']
    });
  }

  // returns Form's Controls
  get f() { return this.form.controls; }

  // changes Page
  onClickPage(page = 0) {
    this.page = page;
    this.get();
  }

  onClickEdit(ticket: any) {
    // resets Modal
    this.form.reset();
    this.uploadFiles = [];
    this.reportObj = null;

    this.reportObj = ticket;
    console.log(this.reportObj);
    this.form.patchValue(ticket);
    this.ngbModal.open(this.modalContent);
  }

  uplaod(report: any) {
    this.reportObj = report;
    this.ngbModal.open(this.modalContent);
  }

  // closes Modal
  close() {
    this.form.reset();
    this.reportObj = null;
    this.uploadFiles = [];
    this.ngbModal.dismissAll();
  }

  inputClick() {
    document.getElementById("inputFileRef").click();
  }

  removeImage(i: number) {
    // console.log(this.f.files.value[i]);
    let val = this.f.files.value[i];
    this.uploadFiles = this.uploadFiles.filter(e => e !== val); this.f.files.setValue(this.uploadFiles);

    // this.unlinkService.delete(this.f.files.value[i])
    //   .subscribe(res => {
    //     console.log(res);
    //     if (+res.status === 200) {
    //       this.uploader.queue = [];

    //       // this.form.setValue({ 'files': this.uploadFiles });
    //     }
    //   });
  }

  onSubmit() {
    let ticket = {
      patient: this.reportObj.patient,
      doctor: this.reportObj.doctor
    };

    this.f.status.setValue('complete');
    console.log(this.form.value);
    this.ticketService.put(this.form.value, this.reportObj._id).subscribe(() => {
      this.notifyService.success('Ticket completed Successfully');
      this.sendNotification(ticket, "Completed");
      this.ngbModal.dismissAll();
      this.get();
      this.form.reset();
      this.reportObj = null;
      this.uploadFiles = [];
    })
  }
  // accepts Ticket
  onAccept(ticket: { by: string; status: string; _id: any; }) {
    ticket.by = this.authService.currentUserValue._id;
    ticket.status = 'pending';
    this.ticketService.put(ticket, ticket._id)
      .subscribe((res: ResponseMessage) => {
        if (+res.status === 200) {
          this.sendNotification(ticket, "accepted");
          this.notifyService.success('Ticket Accepted Successfully');
          this.get();
        }
      });

  }
  openDetail(report: any) {
    this.reportObj = report;
    console.log(this.reportObj);

    this.ngbModal.open(this.ticket);
  }
  openLightBox(index: number): void {
    // open lightbox

    let images = [];
    this.reportObj.files.forEach((element: string, index: string | number) => {
      images[index] = { src: environment.base_url + element };
    });
    console.log('images', images);
    this._lightbox.open(images, index);
  }

  closeLightBox(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  getImageName(image: string) {
    let arr = image.split('/');
    return arr[arr.length - 1]
  }


  sendNotification(ticket: any, message: string) {
    let notObj = {
      createdBy: this.authService.currentUserValue._id,
      description: 'Lab Test Request ' + message,
      category: 4,
      sentTo: [ticket.patient.user, ticket.doctor.user],
      naviagteUrl: `/app/patient/${ticket.patient.user}`
    }
    this.notificationService.sendNotification(notObj);
  }
}
