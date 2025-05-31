import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { Role } from 'src/app/_models/role';
import { NotifierService } from 'angular-notifier';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-add-employee',
	templateUrl: './add-employee.component.html',
	styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

	isFormSubmitted: boolean;
	form: FormGroup;
	roles: Role[] = [];
	model: NgbDateStruct;
	model1: NgbDateStruct;
	

	public showNotification(type: string, message: string): void {
		this.notifier.notify(type, message);
	}

  @Output() save= new EventEmitter();

 
  constructor(
    private formBuilder: FormBuilder,
    private notifier: NotifierService,
    
    private employeeService:EmployeeServiceService) { this.notifier = notifier; }

  ngOnInit() {
    this.getAllRoles();
    this.isFormSubmitted=false;
    this.create();
  }

  // Reactive Forms
  create() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      // dob: ['', Validators.required],
      // joiningDate: ['', Validators.required],
      // salary: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  // Adds Employee to DB
  onSave(){
    this.isFormSubmitted = true;
    if(this.form.invalid) {
      return;
    }
    // let dob = this.form.controls.dob.value;
    // let jod = this.form.controls.joiningDate.value;

    // this.form.controls.dob.patchValue(new Date(dob.year, dob.month, dob.day ));
    // this.form.controls.joiningDate.patchValue(new Date(jod.year, jod.month, jod.day ));

    console.log(this.form.value);
    this.employeeService.createEmployee(this.form.value).subscribe((res: any)=> {
      if(res.status === 200) {
        this.save.emit(res.data);
        this.form.reset();
		    this.showNotification( 'success', 'Employee Created.' )
      }
    });
  }

  // function gets all Roles 
  getAllRoles(){
    this.employeeService.getAllRoles().subscribe((res:any)=> {
      if(res.status == '200') {
        this.roles = res.data;
      } else {
        this.roles = [];
      }
    });
  }
}
