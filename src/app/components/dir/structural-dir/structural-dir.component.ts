import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  
  isDiv1visible: boolean = true;
  isDiv2toggle: boolean = true;

  num1: string = '';
  num2: string = '';
  //for Div 4
  isActive: boolean = true;
  selectedState: string = '';

  //ngFor directives

  cityarray: string [] = ['Nagpur','Pune','Mumbai','Delhi','Banglore','Hyderabad','Jalgao','Amravti'];

  student: any [] = [
    {studId: 11, name: 'aaaa', city: 'pune', isActive: false},
    {studId: 22, name: 'bbb', city: 'mumbai', isActive: false},
    {studId: 33, name: 'ccc', city: 'nagpur', isActive: false},
    {studId: 44, name: 'ddd', city: 'hyderabad', isActive: false},
    {studId: 55, name: 'eee', city: 'pune', isActive: true},
    {studId: 66, name: 'fff', city: 'mumbai', isActive: false},
    {studId: 77, name: 'ggg', city: 'jalgao', isActive: false},
    {studId: 88, name: 'hhh', city: 'banglore', isActive: false},
    {studId: 99, name: 'vvv', city: 'mumbai', isActive: false}
  ]

  //ngIF firecttives
  // For Div 1
  showDiv1(){
    this.isDiv1visible = true;
  }

  hideDiv1(){
    this.isDiv1visible = false;
  }

  // For Div 2
  toggleDiv2(){
    this.isDiv2toggle = !this.isDiv2toggle;

    // if(this.isDiv2toggle == true){
    //   this.isDiv2toggle = false;
    // }
    // else{this.isDiv2toggle = true;}

  }


}
