import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-inf-scroll',
  templateUrl: './inf-scroll.component.html',
  styleUrls: ['./inf-scroll.component.css']
})
export class InfScrollComponent implements OnInit, AfterViewInit {
  @ViewChildren('content')
  element!: any

  private observer!: IntersectionObserver;
  
  constructor() {}



  /* 
    private observer!: IntersectionObserver;
  ex() {
    console.log(this.ell2)
  }

subscribeOnAdditionalInf() {
    this.observer = new IntersectionObserver( entries => {    
      if ( entries[0].isIntersecting ) {
        console.log('До начала добавления' + this.ell2.length)
        this.observer.unobserve(this.ell2.last.nativeElement  as HTMLElement);
        
        setTimeout(() => {
          let inp = [1, 2, 3, 4, 5];
          this.boxes.push(...inp);
          this.addSubscription();
        }, 100);

        return
      } 
    },
    {
      threshold: 0.75
    });

    this.observer.observe(this.ell2.last.nativeElement  as HTMLElement);
  }

  addSubscription() {
    this.ell2.changes.subscribe(
      (next: QueryList<ElementRef>) => {        
        this.observer.observe(this.ell2.last.nativeElement  as HTMLElement);
      }
    )
  }
  
  ngAfterViewInit(): void {
    console.log(this.ell2)
    this.subscribeOnAdditionalInf();
  }

  ngOnInit(): void {
    
  }
 */

boxes: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
  }



  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.90,
  }

  callback() {
    
  }


  subscribeOnAddInf() {
    this.observer = new IntersectionObserver( (entries: any, observer: any) => {
      if (entries[0].isIntersecting) {
        console.log('done')
  
  
        setTimeout(() => {
          let inp = [1, 2, 3, 4, 5];
          console.log(inp)
          console.log(this.boxes)
  
        }, 1000);
      }
    }, this.options);
    this.observer.observe(this.element.last.nativeElement)
  }



 
  ngAfterViewInit(): void {   
    this.subscribeOnAddInf()  
   }
}
