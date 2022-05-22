import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson32',
  templateUrl: './lesson32.component.html',
  styleUrls: ['./lesson32.component.css']
})
export class Lesson32Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  try(ev: number) {
    console.log(ev)
  }

}
