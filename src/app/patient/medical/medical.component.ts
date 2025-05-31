import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DiseaseCategoryService } from '../services/diseaseCategory.service';
import { DiseaseCategory } from 'src/app/_models/diseaseCategory';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Disease } from 'src/app/_models/disease';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NotifierService } from 'angular-notifier';
import { Patient } from 'src/app/_models/patient';
import { ResponseMessage } from 'src/app/_models/response';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  isLoader: boolean = false;
  page = 0;
  limit = 10;
  totalCount = 0;
  query = {
    diseaseCategory: String,
    diseaseSubCategory: String,
  };

  delquery = {
    diseaseCategory: String,
    diseaseSubCategory: String
  };

  querydiseaseCategory;
  querydiseaseSubCategory;

  delQueryDiseaseCategory;
  patient: Patient;


  categories: DiseaseCategory[];
  followUps: Disease[];
  isFormSubmitted: boolean;
  form: FormGroup;
  form2: FormGroup;
  lastDate: Date;
  selectedIndex = null;
  selectedSubCategory: string = "NONE";
  latestFollowUp: Disease = null;
  haveFollowUp: boolean = false;

  patientID: any = null;



  constructor(
    private diseaseCategoryService: DiseaseCategoryService,
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private notifier: NotifierService,
    private modal: NgbModal) { }


  @ViewChild('createDiseaseCategoryModal', { static: true }) createDiseaseCategoryModal: TemplateRef<any>;
  @ViewChild('createSubCategoryModal', { static: true }) createSubCategoryModal: TemplateRef<any>;

  ngOnInit() {
    this.categories = [];
    this.isFormSubmitted = false;
    this.activatedRoute.params.subscribe(params => {
      this.patientID = params['id'];
      this.getPatient();
    });
    // this.getCategories();
    this.create();
    this.create2();
  }

  // Reactive Forms for new category
  create() {
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      patient: [this.patientID]
    });
  }

  get f() { return this.form.controls; }

  getPatient() {
    this.patientService.getById(this.patientID).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.patient = res.data;
        this.getFollowUps(this.patient.user._id);
        this.getCategories();

      } else {
      }

    })
  }

  // gets all categories from DB
  getCategories() {
    this.isLoader = true;
    this.diseaseCategoryService.getAllDiseaseCategories(this.patient._id).subscribe((res: any) => {
      this.isLoader = false;
      if (res.status === 200) {
        this.categories = res.data;
        // this.changeSubCategory(0);
        // this.clikcAddFollowUp();
        // console.log(this.categories);
      } else {
        this.categories = [];
      }
    });
  }

  getFollowUps(id) {
    this.isLoader = true;
    this.query.diseaseCategory = this.querydiseaseCategory;
    this.query.diseaseSubCategory = this.querydiseaseSubCategory;
    // console.log(this.query);
    // console.log(id);
    this.patientService.getFollowUpsOfPatient(this.patient.user._id, this.query, this.page, this.limit).subscribe((res: any) => {
      this.isLoader = false;
      if (res.status === 200) {
        // console.log(res);
        this.followUps = res.data.doc;
        this.totalCount = res.data.count;

        console.log(this.followUps);
      }
      else {
        this.followUps = [];
      }
    });
  }

  refresh() {
    this.querydiseaseCategory = null;
    this.querydiseaseSubCategory = null;
    this.selectedIndex = null;
    this.getFollowUps(this.patient.user._id);
  }

  deleteDiseaseFollowUps() {
    this.delquery.diseaseCategory = this.delQueryDiseaseCategory;
    this.patientService.deleteDiseaseCategoryFollowUps(this.delquery).subscribe((res: any) => {
      if (res.status === 200) {
        this.getFollowUps(this.patientID);
        this.showNotification('success', 'Follow Ups Deleted!');
      } else {
        this.showNotification('erroe', 'Something went wrong!');
      }
    })
  }

  // Swal Dialog box for Deleting Follow Up
  deleteFolowUp(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Follow Up',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.deleteFollowUpDB(index);
        Swal.fire('Deleted!', 'Follow Up deleted.', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Data is safe :', 'error')
      }
    });

  }

  onClickPage(page = 0) {
    this.page = page;
    this.getFollowUps(this.patient.user._id);
  }

  // deletes a Single Follow Up form List
  deleteFollowUpDB(index) {
    this.patientService.deleteFollowUp(this.followUps[index]._id).subscribe((res: any) => {
      if (res.status === 200) {
        this.followUps = this.followUps.filter(obj => obj !== this.followUps[index]);
      }
    })
  }

  // opens add disease category Modal
  openDiseaseCategoryModal() {
    this.modal.open(this.createDiseaseCategoryModal, { size: 'lg' });
  }

  openSubCategoryModal(i) {
    this.selectedIndex = i;
    this.modal.open(this.createSubCategoryModal, { size: 'lg' });
  }

  changeSelectedIndex(i) {
    this.querydiseaseCategory = this.categories[i].category;
    this.selectedIndex = i;
    this.haveFollowUp = false;
    this.changeSubCategory(0);
    this.clikcAddFollowUp();
    this.getFollowUps(this.patientID);
  }

  // Changes Sub Category
  changeSubCategory(index) {
    if (this.categories && this.categories[this.selectedIndex]) {
      this.haveFollowUp = false;
      this.selectedSubCategory = this.categories[this.selectedIndex].subCategories[index].disease;
      this.querydiseaseSubCategory = this.selectedSubCategory;
      this.clikcAddFollowUp();
      this.getFollowUps(this.patientID);
    }

  }

  // closes Modal
  onClose() {
    this.modal.dismissAll();
    this.getCategories();
  }

  // adds disease category to DB
  saveCategory() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.diseaseCategoryService.createCategory({ ...this.form.value, patient: this.patient._id }).
      subscribe((res: any) => {
        if (res.status === 200) {
          console.log('Label Added')
          this.form.reset();
          this.onClose();
          this.showNotification('success', 'Category Added.')
        }
      });
    this.isFormSubmitted = false;
  }

  delCategoryDB(index) {
    this.delQueryDiseaseCategory = this.categories[index].category;
    this.diseaseCategoryService.deleteDiseaseCategory(this.categories[index]._id).subscribe((res: any) => {
      if (res.status === 200) {
        this.categories = this.categories.filter(obj => obj !== this.categories[index]);
        this.deleteDiseaseFollowUps();
      }
    })
  }

  clikcAddFollowUp() {
    for (let i = 0; i < this.followUps.length; i++) {
      if (this.followUps[i].diseaseSubCategory == this.selectedSubCategory) {
        this.latestFollowUp = this.followUps[i];
        this.haveFollowUp = true;
      }
    }
  }


  /******************************************
   * Sub Category Functions
   *****************************************/

  // reactive form for subcategory
  create2() {
    this.form2 = this.formBuilder2.group({
      disease: ['', Validators.required],
    });
  }

  get f2() { return this.form2.controls; }

  // Saves Sub category  
  saveSubCategory() {
    this.isFormSubmitted = true;
    if (this.form2.invalid) {
      return;
    }

    this.categories[this.selectedIndex].subCategories.push(this.form2.value);
    let id = this.categories[this.selectedIndex]._id;
    this.diseaseCategoryService.updateDiseaseCategory(id, this.categories[this.selectedIndex]).
      subscribe((res: any) => {
        if (res.status === 200) {
          this.form2.reset();
          this.onClose();
          this.showNotification('success', 'Disease Added.')
        }
      })
    this.isFormSubmitted = false;
  }

  // open dialog box for delete prompt
  deletSubCategory(d) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this disease',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.delSubCategoryDB(d);
        Swal.fire('Deleted!', 'Disease deleted.', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Disease is safe :', 'error')
      }
    });
  }

  // deletes Sub category from DB
  delSubCategoryDB(d) {
    this.delquery.diseaseSubCategory = d;
    let category = this.categories[this.selectedIndex];
    category.subCategories = category.subCategories.filter(obj => obj !== d);
    let id = this.categories[this.selectedIndex]._id;
    this.diseaseCategoryService.updateDiseaseCategory(id, category).subscribe((res: any) => {
      if (res.status === 200) {
        this.form2.reset();
        this.onClose();
        this.deleteDiseaseFollowUps(); // deletes Realted Followups of sub category 
      }
    })
    this.isFormSubmitted = false;
  }
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  // deletes category Dialoge
  deletCategory(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Category and subcategories will be deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.delCategoryDB(index);
        Swal.fire('Deleted!', 'Category been deleted.', 'success');

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Category is safe', 'error')
      }
    });
  }


}
