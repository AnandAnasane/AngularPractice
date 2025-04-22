import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-events.component.html',
  styleUrl: './life-cycle-events.component.css'
})
export class LifeCycleEventsComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

 constructor(){
  console.log("1. constructor");
 }

  ngOnInit(): void {
    console.log("2. ngOnInit");
       
  }
  ngDoCheck(): void {
    console.log("3.ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("4.ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("5.AfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("6. ngAFTerViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("8. ngOnDestroy");
  }


}
