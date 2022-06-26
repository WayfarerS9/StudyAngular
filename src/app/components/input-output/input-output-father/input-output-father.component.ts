import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-father',
  templateUrl: './input-output-father.component.html',
  styleUrls: ['./input-output-father.component.css']
})
export class InputOutputFatherComponent implements OnInit {

  @Input()
  title: string = 'Hello world'.toUpperCase()

  @Output()
  sendMessage = new EventEmitter()
  
  @Output()
  sendMessageWithData = new EventEmitter<string>()



  @Input()
  counter: number = 0;

  @Output()
  counterChange = new EventEmitter<number>() 

  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage() {
    this.sendMessage.emit()
  }

  onSendMessageWithData(mess: string) {
    this.sendMessageWithData.emit(mess)   
  }



}
