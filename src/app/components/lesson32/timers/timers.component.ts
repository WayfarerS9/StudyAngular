import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// Важно!!! чтобы EventEmitter был импортирован из '@angular/core'

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  @Input() interval: number = 1000;
  result: number = 0;
  intervalId: any = null;
  @Output() tick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {    
  }

  startTimer() {
    if (this.intervalId !== null) return
    this.intervalId = setInterval( () => {
      this.tick.emit(++this.result);
    }, this.interval) 
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

}