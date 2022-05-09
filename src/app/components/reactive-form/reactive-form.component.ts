import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
             
    "userName": new FormControl("Tom", Validators.required),
    "userEmail": new FormControl("", [
      Validators.required, 
      Validators.email
    ]),
    "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")),
    /* "userCompany": new FormControl() */
});

  constructor() { }

  ngOnInit(): void {
  }

  submit():void {
    console.log(this.myForm.controls['userPhone'].value)
  }

}
