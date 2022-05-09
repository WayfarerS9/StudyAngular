import { Directive, ElementRef, Input, Renderer2, HostListener, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';


@Directive({
  selector: '[appBusyButton]'
})
export class BusyButtonDirective {

  @Input('appBusyButton')
  isDwnl;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private differs: KeyValueDiffers) {
    this.isDwnl = this.differs.find({}).create();

  }



  @HostListener('click') onBusy() {

/*     this.renderer.setStyle(this.elementRef.nativeElement, 'width', window.getComputedStyle(this.elementRef.nativeElement).width);
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', window.getComputedStyle(this.elementRef.nativeElement).height);
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', ''); */    
  }
  


}



/* Игра с домэлементами
this.renderer.setStyle(this.elementRef.nativeElement, 'width', window.getComputedStyle(this.elementRef.nativeElement).width);
this.renderer.setStyle(this.elementRef.nativeElement, 'height', window.getComputedStyle(this.elementRef.nativeElement).height);
this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', '');
let matIcon = this.renderer.createElement('mat-icon');
let matSpinner = this.renderer.createElement('mat-spinner');
this.renderer.appendChild(matIcon, matSpinner);
this.renderer.appendChild(this.elementRef.nativeElement, matIcon);
this.renderer.setStyle(matSpinner, 'color', 'accent');
this.renderer.setStyle(matSpinner, 'diameter', '20px'); */