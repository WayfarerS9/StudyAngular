import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spoiler',
  templateUrl: './spoiler.component.html',
  styleUrls: ['./spoiler.component.css']
})
export class SpoilerComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() header!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showHide() {
    this.isVisible = !this.isVisible
  }

}
