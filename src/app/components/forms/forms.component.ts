import {
  AfterViewInit,
  Component,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm: NgForm | null = null;

  roles: string[] = ['Guest', 'Moderator', 'Admin'];

  model: User = new User(1, '', '');

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.myForm?.form.valueChanges?.subscribe(() => this.onValueChanged());
  }

  onSubmit(form: any) {
    console.log(form);
  }

  formErrors: any = {
    name: 'feas',
    age: 'vasd',
  };

  validationMessages: any = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Имя должно быть более 4 букв',
    },
    age: {
      required: 'Возраст обязателен',
    },
  };

  onValueChanged() {
    const form = this.myForm?.form;

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
}
