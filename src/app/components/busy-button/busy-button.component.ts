import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

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
    of({})
      .pipe(delay(2000))
      .subscribe(() => (this.isDwnl = false));
  }
}
