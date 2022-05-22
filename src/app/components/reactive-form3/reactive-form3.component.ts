import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.css'],
})
export class ReactiveForm3Component implements OnInit {
  user: User = new User(1, null, null, null, null);
  roles: string[] = ['Guest', 'Moderator', 'Admin'];
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      // инициализируется форма
      userFirstName: [
        this.user.userFirstName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ], // значение по умолчанию присваивается из инстанса user
      age: [
        this.user.age,
        [Validators.required, this.rangeValidator(1, 122)],
      ] /* Validators.pattern(/^\d+$/) */,
      site: [this.user.site, [Validators.required], this.asyncUrlValidator], // третий параметр - асинхронные валидаторы
      secondSite: [this.user.site, [Validators.required], this.observableUrlValidator], 
    });
  }

/*   ex() {
    console.log(this.userForm.get('site'));
    console.log(this.userForm.get('site')?.pending);
  } */

  onSubmit(): void {
    console.log(this.userForm);
  }

  rangeValidator(minValue: number, maxValue: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = +control.value;

      if (isNaN(value)) return { rangeValidator: { value } };

      if (value < minValue) return { minRange: { value } };
      if (value > maxValue) return { maxRange: { value } };

      return null;
    };
  }



  /* Валидатор с использованием промиса */
  asyncUrlValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const value = control.value;
    const result = urlRegex.test(value); // Тестируем результат на соответсвие регулярному выражению

    return new Promise<ValidationErrors | null>((resolve) => {
      setTimeout(() => {
        if (result) {
          resolve(null);
        } else {
          resolve({ urlNotAllowed: { value } });
        }
      }, 2000);
    });
  }
  
  /* 1 вариант */
/*   observableUrlValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const value = control.value;
    const result = urlRegex.test(value); // Тестируем результат на соответсвие регулярному выражению

    return new Observable<ValidationErrors | null>( observer => {

      if (result) {
        observer.next(null);
      } else {
        observer.next({ urlNotAllowed: { value } });
      }
      observer.complete()
    }).pipe(delay(5000))
  } */



/* 2вариант */
/*   observableUrlValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const value = control.value;
    const result = urlRegex.test(value); // Тестируем результат на соответсвие регулярному выражению

    if(result) return of(null).pipe(delay(2000))
    return of({ urlNotAllowed: { value }}).pipe(delay(2000))
  } */


  /* 3вариант */
  observableUrlValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const value = control.value;
    const result = urlRegex.test(value); // Тестируем результат на соответсвие регулярному выражению

    return of(result).pipe(map( res => {
      if (res) return null
      return { urlNotAllowed: { value }}
    })).pipe(delay(2000))

  }










}
