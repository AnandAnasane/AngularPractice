import { Component } from '@angular/core';
import { AdminComponent } from "../admin/admin.component";
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-ng-rx-state',
  standalone: true,
  imports: [AdminComponent, AdminComponent, UserComponent],
  templateUrl: './ng-rx-state.component.html',
  styleUrl: './ng-rx-state.component.css'
})
export class NgRxStateComponent {

  counter: number = 0;

  onIncrement(){
    this.counter ++
  }

  onDecrement(){
    this.counter --
  }

}
