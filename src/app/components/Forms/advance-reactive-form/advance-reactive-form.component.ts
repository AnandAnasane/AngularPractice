import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './advance-reactive-form.component.html',
  styleUrl: './advance-reactive-form.component.css'
})
export class AdvanceReactiveFormComponent {

  applicationFrom: FormGroup = new FormGroup({
    fName : new FormControl("", [Validators.required]),
    mName : new FormControl("", [Validators.required]),
    lName : new FormControl("", [Validators.required]),
    fullName : new FormControl("", [Validators.required]),
    isWorking : new FormControl("NO", [Validators.required]),
    jobType : new FormControl("", [Validators.required]),
    ownBussiness : new FormControl("", [Validators.required]),

    companyDetails: new FormGroup({
      companyName: new FormControl(""),
      position: new FormControl(""),
      salary: new FormControl("")
    }),

    bussinessDetails: new FormGroup({
      bussinessName: new FormControl(""),
      bussinessType: new FormControl(""),
      annualIncome: new FormControl(""),
      bussinessAddress: new FormControl("")

    }),
    personalEmial: new FormControl(""),
    officialEmail: new FormControl(""),
    contactList: new FormArray([]),
    loanDetailsList: new FormArray([])
  })

  constructor(){
    this.addNewContact();
    this.addLoanDetails();
    this.applicationFrom.valueChanges.subscribe(()=>{
      const formValue = this.applicationFrom.value;
     
      const {fName,mName,lName} = formValue;
      const fullName = fName + " "+ mName + " "+ lName;

      this.applicationFrom.patchValue({fullName: fullName},{emitEvent: false});
     
    })
  }


  // For Contact Number
  addNewContact(){
    const contactForm = new FormGroup({
      contact : new FormControl("")
    })

    this.contacts.push(contactForm)
  }

  get contacts(){
    return this.applicationFrom.controls['contactList'] as FormArray;
  }

  removeContact(index: number){
    this.contacts.removeAt(index)
  }

// For Lodan Details 

addLoanDetails(){
  const loan = new FormGroup({
    loandetail : new FormControl("")
  })
  this.loanForm.push(loan)

}



get loanForm(){
  return this.applicationFrom.controls['loanDetailsList'] as FormArray
}

removeLoanDetails(index: number){
  this.loanForm.removeAt(index)

}

  

}









// constructor(){
//   this.addNewConactForm();

// }

// addNewConactForm(){
//   const contactForm = new FormGroup({
//     contactNo : new FormControl("")
//   })
//   this.contacts.push(contactForm);
// }

// get contacts() : FormArray{
//   return this.applicationFrom.controls['contactList'] as FormArray
// }

// removeContact(index: number){
//   this.contacts.removeAt(index);

// }

