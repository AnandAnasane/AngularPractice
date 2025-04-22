import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { AlertComponent } from '../../../ReusableComponent/alert/alert.component';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GETComponent {
  

  userList:any [] = [];

  details:any [] = [];
  newAlertMsg: string = '';

  constructor(private http: HttpClient){
    // this.getAllthedetails();

  }

  changeMsg(){
    this.newAlertMsg = "This is done by using ngOnchanges with the help of change info button";

  }
  getAlluser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList = result ;
    })
  }

  getAllthedetails(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.details = res;
    })
  }



}
