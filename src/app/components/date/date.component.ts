import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  date = new FormControl('03/02/1996');


  showData() {
    console.log(this.date)
    
  }

}
