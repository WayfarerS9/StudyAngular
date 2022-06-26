import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Person {
  name: string,
  id: number,
}

interface Role {
  roleName: string,
  id: number,
}

interface Boss {
  bossName: string,
  id: number,
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  filteredOptions: Observable<Person[]> | undefined;
  
  classes: string[] = ['Warrior', 'Magician', 'Thief'];
  roles: Role[] = [{roleName: 'good', id: 1}, {roleName: 'bad', id: 2}];
  options2: any = [{name: 'John', id: 1}, {name: 'Bob', id: 2}, {name: 'Nick', id: 3}];
  bosses: Boss[] = [{bossName: 'Hmuri', id: 1}, {bossName: 'Kosoi', id: 2}, {bossName: 'Sivi', id: 3,}]
  
  myForm: FormGroup = new FormGroup({
    persons: new FormControl('', Validators.required),
    types: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
    bosses: new FormControl([], Validators.required),
  })  

  ngOnInit() {
    this.filteredOptions = this.myForm.get('persons')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    )
    this.myForm.get('roles')?.patchValue(this.roles[1].id)
    this.myForm.get('bosses')?.patchValue([this.bosses[1].id, this.bosses[2].id])
  }

  private _filter(value: string): Person[] {    
    const filterValue = value.toLowerCase();
    return this.options2.filter( (option: any) => {
      return option.name.toLowerCase().includes(filterValue)
    });
  }

  /* Установка предустановленного значения (для работы со строками):
  this.myForm.get('types')?.patchValue(this.classes[1]) */

  /* Установка предустановленного значения (для работы с массивами объектов):
  this.myForm.get('roles')?.patchValue(this.roles[1].id) */

  showInf(matSelect: any) {
    /* this.myForm.get('roles')?.patchValue(this.roles[1].id) */
    console.log(this.myForm)
  }

  

}
