import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "";
  email: string = "";
  company: string = "Huawei";
     
  onSubmit(form: NgForm){
    console.log(form.value.name);
    console.log(form.value.email);
    console.log(form.value.company);
  }

}
