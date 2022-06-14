import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }



  /* FIRST EXPERIMENT */
  // Создание своего Observable.
  // В данном случае при вызове метода next будет вызвана функция, переданная в метод
  // subscribe со значением, переданным в next.
  // Если в subscribe передать вторым и третьим аргуменом еще две функции, то вторая
  // сработает есди Observable сгенерирует ошибку, а третья - в самом конце - когда будет
  // вызван handlerObject.complete()

  // В связи с тем, что у firstEx предусмотрен метод handlerObject.complete(), то отписку
  // unsubscribe делать не нужно, утечки памяти не будет.
/*   firstEx: any = new Observable( handlerObject => {
    handlerObject.next(2);
    handlerObject.next(4);
  
    setTimeout(() => {
      handlerObject.next(6);
      
      handlerObject.complete();
    }, 3000);  
  });

  firstExperiment() {
    this.firstEx.subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err, 'Вот так'),
      () => console.log('Все сделано')
    )
  } */









   /* SECOND EXPERIMENT. IT DOESN`T WORK */
/*   secondEx: any = new Observable();

  secondExperiment() {
    this.secondEx.subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err, 'Вот так'),
      () => console.log('Все сделано')
    )
  }

  helperForSecondExperiment() {

    let pushingNumber = 1

    setInterval( () => {
      this.secondEx.next(pushingNumber);
      pushingNumber++
    }, 2000)
  } */










  /* SECOND EXPERIMENT. WORKS*/
  /* secondEx: any = new Subject();

  secondExperiment() {
    this.secondEx.subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err, 'Вот так'),
      () => console.log('Все сделано')
    )
  }

  helperForSecondExperiment() {
    let pushingNumber = 1

    setInterval( () => {

      if(pushingNumber > 10) {
        this.secondEx.complete()
        // this.secondEx.unsubscribe()
      }

      this.secondEx.next(pushingNumber);
      pushingNumber++
    }, 500)
  }
 */










   /* THIRD EXPERIMENT */
  // arrayNumbers: number[] = [2, 4, 6]
  // pushNumbers = from(this.arrayNumbers);
  // thirdExperiment() {
  //   this.pushNumbers.subscribe( 
  //     val => console.log(val),
  //     err => console.log(err),
  //     () => console.log('Выполнение завершено')
  // )}







/* FOURTH EXPERIMENT */
/*   _number: number = 1;

  set number(res: number) {
    this._number = res
  }

  get number(): number {    
    return this._number
  }

  fourthEx: any = new Subject();

  fourthExperiment() {
    this.fourthEx.subscribe( (res: any) => console.log(res))
  }



  changingNumber() {
    let num = 1;

    setInterval( () => {
      num++
      this.number = num;  
      this.fourthEx.next(this.number)    
    }, 500)
  } */




  ngOnInit(): void {
    // this.firstExperiment();

    // this.secondExperiment();
    // this.helperForSecondExperiment();

    // this.thirdExperiment();

    // this.changingNumber();
    // this.fourthExperiment();

  }




}
