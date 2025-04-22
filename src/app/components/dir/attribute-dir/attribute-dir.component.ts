import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})



export class AttributeDirComponent {
  div1bgColor: string = 'bg-secondary'
  div1Textcolor: string = 'text-primary'
  isDiv2Active: boolean = false
  num1: string = ''
  num2:string = ''
  isActive: boolean = false
  selectinput: string = ''


  constructor(private router: Router){

  }

  customStyle: any = {
    'color': 'white',
    'font-size': '30px',
    'background-color': 'pink',
    'border': '5px',
    'border-radius': '50%',
    'height': '170px',
    'width': '170px',
  }

  student: any [] = [
    {studId: 11, gender: 'male', totalMarks: 23, name: 'aaaa', city: 'pune', isActive: true},
    {studId: 22, gender: 'male', totalMarks: 53, name: 'bbb', city: 'mumbai', isActive: false},
    {studId: 33, gender: 'female', totalMarks: 45, name: 'ccc', city: 'nagpur', isActive: true},
    {studId: 44, gender: 'male', totalMarks: 78, name: 'ddd', city: 'hyderabad', isActive: false},
    {studId: 55, gender: 'male', totalMarks: 55, name: 'eee', city: 'pune', isActive: true},
    {studId: 66, gender: 'female', totalMarks: 95, name: 'fff', city: 'mumbai', isActive: false},
    {studId: 77, gender: 'female', totalMarks: 75, name: 'ggg', city: 'jalgao', isActive: false},
    {studId: 88, gender: 'male', totalMarks: 48, name: 'hhh', city: 'banglore', isActive: true},
    {studId: 99, gender: 'female', totalMarks: 52, name: 'vvv', city: 'mumbai', isActive: false}
  ]
  goToStructural(){
    this.router.navigateByUrl("structural-Dir");

  }


  addRedcolor(){
    this.div1bgColor = "bg-danger"
    this.div1Textcolor = 'text-light'
  }
  addblueColor(){
    this.div1bgColor = "bg-primary"
    this.div1Textcolor = 'text-dark'

  }
  div2toggleClass(){
    this.isDiv2Active = !this.isDiv2Active
  }

}
