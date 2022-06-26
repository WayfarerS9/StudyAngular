import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  numberOfAdding = 1;

  bigul = 'VSEBUDETSUPER'

  items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  constructor() { }

  ngOnInit(): void {    
  }

  onInput(pass: any) {
    console.log(pass)
  }

  addElements() {
    for (let i = 0; i < 20; i++) {
      this.items.push(this.numberOfAdding)
    }

    this.numberOfAdding++
  }

  ex(e: any) {
    
      const tableViewHeight = e.target.offsetHeight // viewport: ~500px
      const tableScrollHeight = e.target.scrollHeight // length of all table
      const scrollLocation = e.target.scrollTop;
      const buffer = 50;
      const limit = tableScrollHeight - tableViewHeight - buffer;
      if (scrollLocation > limit) {
        console.log('test');

        setTimeout(() => {
          this.addElements()
        }, 2000);
        
      }
    
  }

}
