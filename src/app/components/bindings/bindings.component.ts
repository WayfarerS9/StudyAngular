import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  username = 'John';

  clear(): void {
    this.username = '';
  }
  
  addPetr(): void {
    this.username = 'Petr';
  }
}
