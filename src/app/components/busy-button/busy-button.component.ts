import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busy-button',
  templateUrl: './busy-button.component.html',
  styleUrls: ['./busy-button.component.css']
})
export class BusyButtonComponent implements OnInit {
  isDwnl = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  

  getData() {
    this.isDwnl = true
    setTimeout(() => {
      console.log('Данные получены');   
      this.isDwnl = false
    }, 2000)
  }





}


