import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../ReusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../ReusableComponent/my-button/my-button.component';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

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

  getData(data: any){
    debugger;
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
