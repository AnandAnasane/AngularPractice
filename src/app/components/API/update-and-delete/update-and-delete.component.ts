import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-and-delete',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './update-and-delete.component.html',
  styleUrl: './update-and-delete.component.css'
})
export class UpdateAndDeleteComponent implements OnInit{

    http = inject(HttpClient);
  
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


    onUpdate(){
        this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.departmentObj).subscribe((res:any)=>{
          if(res.result){
            alert("Document updated Successfully..!!");
          }else{
            alert(res.message);
          }
        })
    }
    
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
  
    onSave(){
      debugger;
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.departmentObj).subscribe((res:any)=>{
       debugger;
        if(res.result){
          alert('New Department Added...!');
          this.getdeptDetails();
        }else{
          debugger;
         alert(res.message);
        }
  
      })
    }
  
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
  
