import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

 getAlluserdetails(){
  return this.http.get("https://jsonplaceholder.typicode.com/users");
 }


 addNewDept(obj:any){
  debugger;
 return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", obj);
 }

 updateDept(editobj:any){
 return this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", editobj);
 }
}
