import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterViewInit {

  @ViewChild('testInput') testInput?: ElementRef;
  inputListener?: Subscription

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.testObservers()    
  }

  // Первый вариант работы 
  testObservers() {
    let search$: Observable<number> = new Observable( observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    })

    // search$.subscribe( res => console.log(res))    
    search$.subscribe( {next: console.log} )
  }












// Второй вариант работы
  /* ngAfterViewInit() {
    this.trySubscrip()
  }

  search$ = new Observable( observer => {
    let input = this.testInput;

    if(!this.testInput) observer.error('Input is not exist')

    this.renderer.listen(this.testInput!.nativeElement, 'input', (event) => {
      observer.next(event)
     });
  })

  trySubscrip() {
    this.search$
    .pipe(
      debounceTime(500),      
      map( (el: any) => el.target.value),
      distinctUntilChanged()
    )   
      .subscribe( 
        // { next: console.log}
        (res: any) => console.log(res)
      )
  } */






  

  ngAfterViewInit() {
    let search$ = fromEvent(this.testInput?.nativeElement, 'input' )
    search$.subscribe((res: any) => console.log(res.target.value))


  }


}
