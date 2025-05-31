import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Employee } from '../_models/employee';
import { EmployeeServiceService } from './employee-service.service';
import { Role } from '../_models/role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  isLoader = false;
  // sweeet alert
  closeResult: string;
  page = 0;
  limit = 10;
  totalCount = 4;

  openVerticallyCentered(content) {
    this.modalService.open(content);
  }


  // displays Delete Dialouge
  delet(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Role Will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.onDeleteRole(id);
        Swal.fire('Deleted!', 'Role has been deleted.', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Role is safe', 'error')
      }
    });
  };


  // displays Delete Dialouge For Employee
  deletEmployee(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Employee Will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.onDeleteEmployee(id);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Employee is safe', 'error')
      }
    });
  };
  // sweeet alert


  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  employees: Employee[] = [];
  roles: Role[] = [];

  isFormSubmitted: boolean;
  searchQuery: string;
  selectedRole: string;
  form: FormGroup;


  @ViewChild('createRoleModal', { static: true }) createRoleModal: TemplateRef<any>;
  @ViewChild('createModal', { static: true }) createModal: AddEmployeeComponent;


  constructor(
    private notifier: NotifierService,
    private modalService: NgbModal,
    private router: Router,
    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeServiceService) { this.notifier = notifier; }
  // @ViewChild('app-appointment', { static: true }) addNewContactComponent: EmployeeContactComponent;

  ngOnInit() {
    this.getAllRoles();
    this.getEmployees();
    this.isFormSubmitted = false;
    this.create();

  }

  // Reactive Forms
  create() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  // Gets All Employees from DB
  getEmployees() {
    let query = { page: this.page, limit: this.limit, searchQuery: null, role: null };

    if (this.searchQuery !== '') {
      query.searchQuery = this.searchQuery;
    }
    if (this.selectedRole) {
      query.role = this.selectedRole;
      // console.log(this.selectedRole);
    }
    this.isLoader = true;
    this.employeeService.getAllEmployees(query).subscribe((res: any) => {
      if (res.status == '200') {
        console.log(res);
        this.employees = res.data;
        console.log(this.employees);
        this.isLoader = false;
      } else {
        this.employees = [];
      }
    });
  }

  onClickRole(roleName) {
    this.selectedRole = roleName;
    this.getEmployees();
  }
  // function gets all Roles 
  getAllRoles() {
    this.isLoader = true;
    this.employeeService.getAllRoles().subscribe((res: any) => {
      if (res.status == '200') {
        this.roles = res.data;
        console.log(this.roles);
        this.isLoader = false;
      } else {
        this.roles = [];
      }
    });
  }

  // Adds New Role to DB
  onAddNewRoleToDB() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.employeeService.createRole(this.form.value).subscribe((res: any) => {
      if (res.status == '200') {
        this.roles.push(res.data);
        this.form.reset();
        this.onClose();
        this.showNotification('success', 'Roles Added successfully.')
      } else {
        this.showNotification('danger', 'SomeThing went wrong.')
      }
    });
  }

  // deletes Role from DB
  onDeleteRole(roleID) {
    this.employeeService.deleteRole(roleID).subscribe((res: any) => {
      if (res.status == '200') {
        this.roles = this.roles.filter(role => role._id !== roleID);
      }
    });
  }

  // deletes Employee from DB
  private onDeleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe((res: any) => {
      if (res.status === 200) {
        this.employees = this.employees.filter(emp => emp._id !== id);
      }
    })
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

  // opens add new Employee Modal
  onAddNew() {
    this.modal.open(this.createModal, { size: 'lg' });
  }

  onAddNewRole() {
    this.modal.open(this.createRoleModal, { size: 'lg' });
  }

  onClose() {
    this.modal.dismissAll();
    this.getAllRoles();
    this.getEmployees();
  }

  save(employee) {
    this.modal.dismissAll();
    this.employees.push(employee);
    console.log(employee);
  }

  onClickPage(page = 0) {
    this.page = page;
    this.getEmployees();
  }
}