import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-prop-main',
  templateUrl: './value-prop-main.component.html',
  styleUrls: ['./value-prop-main.component.css'],
  inputs: ['name', 'age'] //благодаря этой записи, свойство name превращается в устанавливаемое при помощи атрибутов селекторов компонента
})
export class ValuePropMainComponent implements OnInit {

/*   Все тоже самое, что сделано с инпутом в лекораторе компонента, можно сделать путем добавления декоратора Input к 
  заменяемому свойству. Все рабтает одинаково если закомментить верхнее и расскоментить нижнее.
  Также все будет работать если оставить и то и это
  Кроме того, внутрь декоратора Input, можно закинуть какой-нибудь псевдоним, после чего к свойству внутри селектора
  можно будет обращаться по этому новому имени*/

/*   @Input('n')  */name: string = 'John'; 
/*   @Input()  */age: string = '25'; 

  constructor() { }

  add(): void {
    this.age = `${+this.age + 1}`
  }
  
  min(): void {
    this.age = `${+this.age - 1}`
  }

  ngOnInit(): void {
  }
}
