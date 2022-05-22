import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-style',
  templateUrl: './bind-style.component.html',
  styleUrls: ['./bind-style.component.css']
})
export class BindStyleComponent implements OnInit {

  constructor() { }
  isBackground: boolean = true;

  ngOnInit(): void {
  }

  getColor() {
    return 'red'
  }

  changeBack() {
    this.isBackground = !this.isBackground
  }
}
