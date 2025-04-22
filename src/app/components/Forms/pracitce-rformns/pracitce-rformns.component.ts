import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pracitce-rformns',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pracitce-rformns.component.html',
  styleUrl: './pracitce-rformns.component.css'
})
export class PracitceRFormnsComponent {

  studentForm : FormGroup = new FormGroup ({

    firstName : new FormControl ("",[Validators.required]),
    lastName: new FormControl (""),
    city: new FormControl (""),
    state: new FormControl (""),
    gender: new FormControl(""),
    email: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.minLength(8)])

  })

  formValue: any;

  onSave(){
this.formValue  = this.studentForm.value

  }

}

