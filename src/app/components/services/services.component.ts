import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

      http = inject(HttpClient); // The first wat t inject services

      //below is the second way to inject services and this is called the Dependancy Injection.
      constructor (private deptserv: DepartmentsService){

        this.getAllthedetails();
       }

     


      /// Below are the method using services

      details:any [] = [];
    
      getAllthedetails(){
        this.deptserv.getAlluserdetails().subscribe((res:any)=>{
          this.details = res;

        })

      }

      //Add New User using Services
      onSave(){
        debugger;
        this.deptserv.addNewDept(this.departmentObj).subscribe((res:any)=>{

          if(res.result){
            alert("New Department added...!!");
            this.getdeptDetails();
          }
          else{
            alert(res.message);
          }
        })
      }

      //Update using Services

      onUpdate(){
        this.deptserv.updateDept(this.departmentObj).subscribe((res:any)=>{
          if(res.result){
            alert("Department Updated Successfully...!");
          }else{
            alert(res.message);
          }
        })
      }



  

      //// End Services Method



    
      ngOnInit(): void {
        this.getdeptDetails();
      }
    
      deptList:any [] = [];
    
      departmentObj:any = {
        "departmentId": 0,
        "departmentName": "",
        "departmentLogo": ""
      }
  
      onEdit(data: any){
        this.departmentObj = data;
  
      }
  
  
      // onUpdate(){
      //     this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.departmentObj).subscribe((res:any)=>{
      //       if(res.result){
      //         alert("Document updated Successfully..!!");
      //       }else{
      //         alert(res.message);
      //       }
      //     })
      // }
      
      onDelete(id: number){
        const isDelete = confirm("Are you sure you want to Delete?");
       if(isDelete){
        this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res:any)=>{
  
          if(res.result){
            alert("Record Deleted Successfully....!!!");
            this.getdeptDetails();
          }else{
            alert(res.message);
          }
        })
       }
       
  
      }
    
      // onSave(){
      //   debugger;
      //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.departmentObj).subscribe((res:any)=>{
      //    debugger;
      //     if(res.result){
      //       alert('New Department Added...!');
      //       this.getdeptDetails();
      //     }else{
      //       debugger;
      //      alert(res.message);
      //     }
    
      //   })
      // }
    
      resetform(){
        this.departmentObj = {
          "departmentId": 0,
          "departmentName": "",
          "departmentLogo": ""
        }
      }
    
      getdeptDetails(){
        this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
          this.deptList = res.data;
    
        })
      }

     
    }
