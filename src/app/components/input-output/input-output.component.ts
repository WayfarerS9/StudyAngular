import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  age: number = 18
  constructor() { }

  passingVar: string = 'Hello from grandpa'
  flag: boolean = true;

  ngOnInit(): void {
  }

  trigger() {
    this.flag = !this.flag;
    this.changeValue(this.flag)
  }

  changeValue(result: boolean) {
    result? 
      this.passingVar = 'Hello from grandpa':
      this.passingVar = 'Value changed'
  }

  getEmit() {
    console.log('event was got')
  }

  getEmitWithData(ev: string) {
    console.log(ev)
  }

}
