import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIndigoColor]'
})
export class IndigoColorDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'indigo');
  }
}

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red');
  }
}