import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter'; 
import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true, strict: true}}
  ] 

})
export class DateComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  date = moment({year: 2020, date: 16, month: 5})

  showData() {
    console.log(this.date)    
  }


/*   



  
  date = moment();
  
  date1 = new UntypedFormControl(this.date);
  selDate?: string;
  selDay?: string;
  selMonth?: string;
  selYear?: string;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value);
    console.log(event.value)
    this.selDate = this.date.format('DD');
    this.selDay = this.date.format('dddd');
    this.selMonth = this.date.format('MMMM');
    this.selYear = this.date.format('YYYY');
  }



  ex(event: any) {
    console.log(event.target.value)
  } */


}
