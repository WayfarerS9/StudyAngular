import { Component, Input, OnInit } from '@angular/core';
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

/* Для реактивного прослушивания изменений @Input (подходит только для инпута),
можно воспользоваться хуком:

@Input() mode;
ngOnChanges(changes: SimpleChanges) {
  if (changes.mode.currentValue === 'determinate') {
    this.isBusyFind = false;
    this.isBusyReset = false;
  }
} */