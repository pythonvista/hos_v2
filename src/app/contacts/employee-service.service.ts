import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  // creates a Role
  createRole(value){
    return this.httpClient.post(`api/employee/createRole`, value); 
  }

  // gets All Roles
  getAllRoles(){
    return this.httpClient.get(`api/employee/getAllRoles`); 
  }

  // deltes Roles
  deleteRole(roleId){
    return this.httpClient.delete(`api/employee/role/${roleId}`);
  }

  // Craetes Employee
  createEmployee(value){
    return this.httpClient.post(`api/employee/createEmployee`, value);
  }

  // Gets All Employees 
  getAllEmployees({page = 0, limit = 10, searchQuery  = null, role = null}){
    
    let url = `api/employee?page=${page}&limit=${limit}`;
    if(searchQuery){
      url = url+ `&searchQuery=${searchQuery}`;
    }
    if(role) {
      url = url+ `&role=${role}`;
    } 
    return this.httpClient.get(url);
  }

  // Deletes Employee
  deleteEmployee(id){
    return this.httpClient.delete(`api/employee/${id}`);
  }
}
