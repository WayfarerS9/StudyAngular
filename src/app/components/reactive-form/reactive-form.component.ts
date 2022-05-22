import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup( {
             
    userName: new FormControl('', [Validators.required]), // первый аргумент - значение по умолчанию, второй - валидаторы. Если их несколько, то перечисляются массивом. Один тоже можно запихнуть в массив
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    
});

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {
 

    console.log(this.userForm.get('password')?.hasError('minlength'))
  }

}



/* 
this.userForm.valid // валидность
this.userForm.value // значение полей
this.userForm.get('userName')?.hasError('required') // имеет ли ошибки поле с formControlName == userName 
this.userForm.controls['password'].invalid // имеет ли какую либо ошибку поле с formControlName == userName 
this.userForm.get('password')?.hasError('minlength') // имеет ли поле с formControlName == userName ошибку по критерию minlength
*/
