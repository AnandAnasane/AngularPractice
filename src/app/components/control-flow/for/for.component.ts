import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  
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

}
