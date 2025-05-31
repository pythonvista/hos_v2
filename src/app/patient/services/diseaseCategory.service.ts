import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiseaseCategory } from 'src/app/_models/diseaseCategory';

@Injectable({
  providedIn: 'root'
})
export class DiseaseCategoryService {

  constructor(private http: HttpClient) { }

  createCategory(category: DiseaseCategory) {
    return this.http.post(`api/createDiseaseCategory`, category);
  }

  getAllDiseaseCategories(pid) {
    return this.http.get(`api/getAllDiseaseCategories/${pid}`);
  }

  getSingleDiseaseCategory(id:any){
    return this.http.get(`api/getSingleDiseaseCategory/${id}`);
  }

  deleteDiseaseCategory(id) {
    return this.http.delete(`api/deleteDiseaseCategories/${id}`);
  }

  createDefaultCategories(id,list){
    return this.http.post(`api/defaultList/${id}`,list);
  }

  updateDiseaseCategory(id, value: any) {
    return this.http.put(`api/UpdateDiseaseCategory/${id}`, value)
  }
}
