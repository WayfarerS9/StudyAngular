import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-class',
  templateUrl: './bind-class.component.html',
  styleUrls: ['./bind-class.component.css']
})
export class BindClassComponent implements OnInit {
  currentClass!: string | null;
  isBorder: boolean = false;
  isBackground: boolean = false;
  isFontColor: boolean = false;

  itsRed: boolean = false;
  itsBlue: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


addBorder () {
  this.isBorder = !this.isBorder;
  this.currentClass = this.currentClass === 'isBorders'? null : 'isBorders'
}

addBackground () {
  this.isBackground = !this.isBackground;
  this.currentClass = this.currentClass === 'isBackground'? null : 'isBackground'
}

addFontColor () {
  this.isFontColor = !this.isFontColor;
}

toggleClasse() {
  this.itsRed = !this.itsRed;
  this.itsBlue = !this.itsBlue;
}

}
