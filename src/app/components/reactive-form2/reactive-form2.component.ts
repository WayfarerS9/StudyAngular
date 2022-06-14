import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {

  user: User = new User(1, null, null, null, null, null);
  roles: string[] = ['Guest', 'Moderator', 'Admin'];
  userForm!: FormGroup; // здесь будет форма. В шаблоне она подключается при помощи [formGroup]

  formErrors: any = {
    name: '',
    password: '',
    email: '',
    age: '',
    role: '',
  }

  validationMessages: any = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Имя должно содержать не менее 4 символов',
      maxlength: 'Имя должно содержать не более 15 символов',
    },

    password: {
      required: 'Пароль обязателен',
      minlength: 'Пароль должен содержать не менее 7 символов',
      maxlength: 'Пароль должен содержать не более 25 символов',
    },

    email: {
      required: 'Email обязателен',
      email: 'Неправильный формат email адреса',      
    },

    age: {
      required: 'Возраст обязателен',
      /* pattern: 'Допустимы только числа',  */ 
      rangeValidator: 'Требуется ввести число в диапазоне от 1 до 122',
      minRange: 'Значение должно быть больше 1',
      maxRange: 'Значение должно быть не больше 122'
    },

    role: {
      required: 'Обязательное поле',      
    },
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group( {           // инициализируется форма  
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]], // значение по умолчанию присваивается из инстанса user
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, Validators.email]], // можно задать регулярное выражение по разрешенным символам - Validators.pattern(регул выражение). Но тогда в кaчестве ключа в validationMessages нужно будет указать pattern
      age: [this.user.age, [Validators.required, this.rangeValidator(1, 122)]],  /* Validators.pattern(/^\d+$/) */
      role: [this.user.role, Validators.required],      
  }); 

    this.userForm.valueChanges.subscribe( () => this.onValueChanged())
  }

  ex() {
    console.log(this.userForm.value)
  }

   
  private onValueChanged() {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach((field) => {
      this.formErrors[field] = '';

      const control: any = form?.get(field);
      
      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors).forEach((el) => {
          this.formErrors[field] += messages[el] + ' ';
        });
      }
    });



  }


  

  onSubmit():void {
 

    console.log(this.userForm.get('password')?.hasError('minlength'))
  }





  rangeValidator(minValue: number, maxValue: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = +control.value

      if(isNaN(value)) return {rangeValidator: {value}}

      if (value < minValue) return {minRange: {value}}
      if (value > maxValue) return {maxRange: {value}}

      return null      
    } 


/*     return (control: FormControl): { [key: string]: any } | null => {
        const value = +control.value
  
        
  
        return () => {
          
        }
     */
  
  }


}




