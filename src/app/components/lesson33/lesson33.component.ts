import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson33',
  templateUrl: './lesson33.component.html',
  styleUrls: ['./lesson33.component.css']
})
export class Lesson33Component implements OnInit {
  bindClass: boolean = false;
  bindStyle: boolean = false;
  ngmod: boolean = false;
  ngIf: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  defaultRoots() {
    this.bindClass = false;
    this.bindStyle = false;
    this.ngmod = false;
  }

  toBindClass() {
    this.defaultRoots();
    this.bindClass = true;
  }

  toBindStyle() {
    this.defaultRoots();
    this.bindStyle = true;
  }
  
  toNgmod() {
    this.defaultRoots();
    this.ngmod = true;
  }
  
  toNgIf() {
    this.defaultRoots();
    this.ngIf = true;
  }
}
