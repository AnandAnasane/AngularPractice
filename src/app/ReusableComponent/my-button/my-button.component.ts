import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  @Input() btnText = " ";
  @Input() btnClass = " ";

  @Output() onBtnClick = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnClick.emit("Hiii i am from Child..!");
  }
  

}
