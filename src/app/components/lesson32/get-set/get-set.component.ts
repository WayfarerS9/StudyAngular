import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-set',
  templateUrl: './get-set.component.html',
  styleUrls: ['./get-set.component.css']
})
export class GetSetComponent implements OnInit {

  @Input() firstName!: string;
  @Input() lastName!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  get fullName() {
    return (this.firstName + ' ' + this.lastName)
  }

  @Input()
  set fullName(fullName: string) {
    this.firstName = fullName.split(' ')[0]
    this.lastName = fullName.split(' ')[1]
  }
}
