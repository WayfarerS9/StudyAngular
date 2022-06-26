import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  id: number;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  
  persons: Person[] = [
    {name: 'Bob', id: 1,},
    {name: 'John', id: 2},
    {name: 'Nick', id: 3},
  ];
  
  selected: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  showInf() {
    console.log(this.selected)
  }

}
